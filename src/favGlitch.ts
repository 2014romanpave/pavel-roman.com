// Occasional favicon glitch (Chrome/Firefox/Edge; Safari ignores dynamic favicons)
const G = '<radialGradient id="g"><stop offset="0" stop-color="#ffe2c4"/><stop offset=".25" stop-color="#f6b37a"/><stop offset=".5" stop-color="#e07a56"/><stop offset=".72" stop-color="#c77a92"/><stop offset=".88" stop-color="#8f78c4" stop-opacity=".75"/><stop offset="1" stop-color="#8f78c4" stop-opacity="0"/></radialGradient>'
const svg = (body: string) => 'data:image/svg+xml,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs>${G}<clipPath id="t"><rect width="64" height="22"/></clipPath><clipPath id="m"><rect y="22" width="64" height="18"/></clipPath><clipPath id="b"><rect y="40" width="64" height="24"/></clipPath></defs>${body}</svg>`)
const O = (x = 0, y = 0, extra = '') => `<circle cx="${32 + x}" cy="${32 + y}" r="30" fill="url(#g)" ${extra}/>`
export const FAV_FRAMES = [
  // RGB split
  svg(`<circle cx="27" cy="32" r="29" fill="#ff3b3b" opacity=".55"/><circle cx="37" cy="32" r="29" fill="#2ee6ff" opacity=".55"/>${O(0, 0, 'opacity=".85"')}`),
  // slice displacement
  svg(`<g clip-path="url(#t)">${O(-7)}</g><g clip-path="url(#m)">${O(9)}</g><g clip-path="url(#b)">${O(-3)}</g>`),
  // hue jump
  svg(`<g style="filter:hue-rotate(150deg) saturate(1.6)">${O()}</g><rect y="30" width="64" height="4" fill="#2ee6ff" opacity=".7"/>`),
]
export function startFavGlitch() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const link = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/svg+xml"]')
  if (!link) return
  const orig = link.href
  const loop = () => setTimeout(() => {
    if (document.hidden) return loop()
    const seq = [...FAV_FRAMES].sort(() => Math.random() - .5).slice(0, 2 + Math.floor(Math.random() * 2))
    seq.forEach((f, i) => setTimeout(() => { link.href = f }, i * 120))
    setTimeout(() => { link.href = orig; loop() }, seq.length * 120 + 60)
  }, 6000 + Math.random() * 4000)
  loop()
}
