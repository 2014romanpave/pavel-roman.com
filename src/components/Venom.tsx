import { useEffect, useRef, useState } from 'react';
import { FS, VS } from './venomShader';

declare global { interface Window { __venomGlitch?: () => void } }

/** "Living substance" hero: WebGL metaballs + domain-warped noise, periodic glitch bursts. Falls back to CSS lamp gradient. */
export function Venom() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const cv = ref.current!;
    const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) { setFailed(true); return; }
    const sh = (type: number, src: string) => { const s = gl.createShader(type)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
    const pr = gl.createProgram()!;
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { setFailed(true); return; }
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const uR = gl.getUniformLocation(pr, 'r'), uT = gl.getUniformLocation(pr, 't'), uG = gl.getUniformLocation(pr, 'g');
    // per-visit random seed: shapes, paths, speeds, noise offsets, palette start
    const rnd = (() => { const u = new Uint32Array(5); (window.crypto?.getRandomValues ? crypto.getRandomValues(u) : u.forEach((_, i) => (u[i] = Math.random() * 2 ** 32))); return Array.from(u, (x) => x / 2 ** 32); })();
    gl.uniform1f(gl.getUniformLocation(pr, 'seed'), rnd[0] * 6);
    gl.uniform4f(gl.getUniformLocation(pr, 'sv'), 0.8 + rnd[1] * 0.4, rnd[2] * 50, rnd[3] * 50, rnd[4]);
    const mobile = matchMedia('(max-width: 768px)').matches;
    const scale = Math.min(window.devicePixelRatio || 1, 1.5) * (mobile ? 0.45 : 0.7);
    const resize = () => {
      const w = Math.max(1, Math.round(cv.clientWidth * scale)), h = Math.max(1, Math.round(cv.clientHeight * scale));
      cv.width = w; cv.height = h; gl.viewport(0, 0, w, h); gl.uniform2f(uR, w, h);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(cv);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t0 = performance.now() - Math.random() * 30000;
    let glitchUntil = 0, nextGlitch = performance.now() + 6000 + Math.random() * 4000;
    window.__venomGlitch = () => { glitchUntil = performance.now() + 450; };
    let raf = 0, visible = true;
    const draw = (now: number) => {
      if (now > nextGlitch) { glitchUntil = now + 250 + Math.random() * 300; nextGlitch = now + 6000 + Math.random() * 4000; }
      const g = now < glitchUntil ? 0.6 + 0.4 * Math.random() : 0;
      gl.uniform1f(uT, (now - t0) / 1000); gl.uniform1f(uG, g); gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const loop = (now: number) => { draw(now); raf = requestAnimationFrame(loop); };
    const start = () => { if (!raf && visible && !document.hidden && !reduced) raf = requestAnimationFrame(loop); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };
    draw(performance.now());
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); });
    io.observe(cv);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    start();
    return () => { stop(); io.disconnect(); ro.disconnect(); document.removeEventListener('visibilitychange', onVis); delete window.__venomGlitch; };
  }, []);
  if (failed) return <div className="lamp" aria-hidden><i className="lamp-b1" /><i className="lamp-b2" /><i className="lamp-b3" /><i className="lamp-b4" /><span className="lamp-grain" /></div>;
  return (
    <div className="lamp" aria-hidden>
      <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ filter: 'blur(5px)', transform: 'scale(1.04)' }} />
      <span className="lamp-grain" />
    </div>
  );
}
