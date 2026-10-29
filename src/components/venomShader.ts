export const VS = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
export const FS = `precision mediump float;
uniform vec2 r;uniform float t;uniform float g;uniform float seed;uniform vec4 sv;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
 return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
vec3 pal(float k){
 k=fract(k)*7.;float i=floor(k);float f=smoothstep(0.,1.,fract(k));
 vec3 c0=vec3(.79,.54,.29),c1=vec3(.71,.40,.29),c2=vec3(.85,.64,.55),c3=vec3(.73,.52,.54),c4=vec3(.56,.60,.49),c5=vec3(.55,.50,.65),c6=vec3(.48,.36,.28);
 vec3 a=c0,b=c1;
 if(i>.5){a=c1;b=c2;} if(i>1.5){a=c2;b=c3;} if(i>2.5){a=c3;b=c4;} if(i>3.5){a=c4;b=c5;} if(i>4.5){a=c5;b=c6;} if(i>5.5){a=c6;b=c0;}
 return mix(a,b,f);}
float field(vec2 uv,float T){
 float m=0.;
 for(int i=0;i<5;i++){float fi=float(i);
  float sp=.75+.5*fract(sin(fi*12.9+seed)*437.5);vec2 c=vec2(sin(T*.21*sp*sv.x+fi*(1.9+seed*.3)+seed)*.33,cos(T*.17*sp+fi*(2.7+seed*.2)+seed*1.7)*.42);
  c+=.12*vec2(sin(T*.53+fi),cos(T*.47+fi*1.3));
  float rad=(.11+.05*fract(sin(fi*7.3+seed)*91.7))+.05*sin(T*.8*sp+fi*1.7+seed);
  m+=rad*rad/(dot(uv-c,uv-c)+.002);}
 return m;}
void main(){
 vec2 fc=gl_FragCoord.xy;
 float sl=floor(fc.y/(r.y*.04));float jump=step(.6,h(vec2(sl,floor(t*14.))))*g;
 fc.x+=(h(vec2(sl,floor(t*30.)))-.5)*r.x*.12*jump;
 vec2 uv=(fc-.5*r)/r.y;float T=t;
 vec2 q=vec2(fbm(uv*1.6+T*.05+sv.yz),fbm(uv*1.6-T*.04+5.2-sv.zy));
 vec2 w=uv+.35*(q-.5)+.12*vec2(sin(T*.3+uv.y*3.),cos(T*.25+uv.x*3.));
 float sh=g*.02;
 vec3 fv=vec3(field(w+vec2(sh,0),T),field(w,T),field(w-vec2(sh,0),T));
 float k=T/(14.+4.*sv.x)+sv.w+fbm(w*1.2+sv.yz)*.35;
 vec3 hs=vec3(1.)+.08*vec3(sin(sv.w*6.3),sin(sv.w*6.3+2.1),sin(sv.w*6.3+4.2));vec3 base=pal(k)*hs,acc=pal(k+.35)*hs;
 vec3 body=smoothstep(.6,2.2,fv);
 vec3 core=smoothstep(2.,5.,fv);
 float vein=fbm(w*5.+T*.2);
 vec3 col=mix(vec3(.07,.06,.055),base,body)*(.75+.35*vein);
 col=mix(col,vec3(.035,.03,.03)+acc*.15,core*.85);
 col+=acc*.25*smoothstep(.9,1.4,fv)*(1.-core);
 col*=1.-.55*dot(uv*.9,uv*.9);
 col+=g*(h(fc+t)-.5)*.25;
 col=mix(col,col.brg,g*step(.85,h(vec2(sl,floor(t*20.)))));
 gl_FragColor=vec4(col,1.);}`;
