'use client';
import {useEffect,useRef} from 'react';
import './hero.css';

/* Ten card creatives, cycled around the 37-card ring. Every photograph is
   text-free; all card typography is HTML/CSS overlay. */
type Shot={url:string;v:string;t?:string};
const SHOTS:Shot[]=[
 {url:'/hero/card-01.webp',v:'evidence'},
 {url:'/hero/card-02.webp',v:'film'},
 {url:'/hero/card-03.webp',v:'brand'},
 {url:'/hero/card-04.webp',v:'place'},
 {url:'/hero/card-05.webp',v:'domains'},
 {url:'/hero/card-06.webp',v:'plain',t:'WASH-DAY RITUAL'},
 {url:'/hero/card-07.webp',v:'power'},
 {url:'/hero/card-08.webp',v:'plain',t:'NEW EVIDENCE'},
 {url:'/hero/card-09.webp',v:'rank'},
 {url:'/hero/card-10.webp',v:'plain',t:'STREETWEAR'}
];

function creative(d:Shot){
 const im='<img alt="" loading="lazy" src="'+d.url+'">';
 switch(d.v){
  case 'evidence': return '<div class="fill" style="background:#efede8"></div>'
   +'<div class="ph" style="top:112px;bottom:0">'+im+'</div>'
   +'<div class="cv" style="top:20px;text-align:right;font-size:3.4px;letter-spacing:.15em;color:#8d9288">RETURNED BY QLOO</div>'
   +'<div class="cv t-big" style="top:32px;font-size:14px;color:#16211b">Evidence</div>'
   +'<div class="cv t-big" style="top:47px;font-size:14px;color:#9a6a1f">You can audit</div>'
   +'<div class="cv" style="top:76px;font-size:5.2px;font-weight:700;color:#16211b;line-height:1.7">'
     +'<div><b class="dot"></b>ENTITY <b>ID</b></div>'
     +'<div style="margin-top:8px"><b class="dot sq"></b>RANK AND <b>SEED</b><br>'
     +'<span style="margin-left:11px">PROVENANCE</span></div></div>';
  case 'film': return '<div class="fill" style="background:linear-gradient(168deg,#1d2e3c,#16202c 55%,#0c141c)"></div>'
   +'<div class="ph" style="top:100px;bottom:0">'+im
     +'<div class="fill" style="background:linear-gradient(180deg,rgba(29,46,60,.97),rgba(29,46,60,0) 30%)"></div></div>'
   +'<div class="cv t-serif" style="top:36px;font-size:17px;color:#e8b36a">MOVIE</div>'
   +'<div class="cv t-serif" style="top:55px;font-size:17px;color:#e8b36a">SIGNALS</div>';
  case 'brand': return '<div class="fill" style="background:#fff"></div>'
   +'<div class="ph" style="top:0;height:148px">'+im+'</div>'
   +'<div class="cv" style="top:158px;font-size:5.4px;font-weight:700;letter-spacing:.09em;color:#16211b">BRAND AFFINITY</div>'
   +'<div class="cv" style="top:168px;font-size:4.2px;color:#7b8077">Returned &middot; rank 02 &middot; live</div>'
   +'<div style="position:absolute;left:10px;top:180px;padding:4px 11px;border-radius:20px;background:#16211b;font-size:4.6px;font-weight:600;color:#fff;letter-spacing:.05em">Inspect evidence</div>';
  case 'place': return '<div class="fill" style="background:linear-gradient(180deg,#14281f,#1d4034 50%,#0b1813)"></div>'
   +'<div class="ph" style="top:92px;bottom:0">'+im
     +'<div class="fill" style="background:linear-gradient(180deg,rgba(20,40,31,.98),rgba(20,40,31,0) 36%)"></div></div>'
   +'<div class="cv" style="top:16px;font-size:4.2px;line-height:1.7;color:rgba(242,239,230,.82);width:74px">Every reference links back to a returned entity, its rank and the query that produced it &mdash; a research prompt, not a forecast.</div>'
   +'<div style="position:absolute;right:10px;top:16px;font-size:5.4px;font-weight:600;color:#fff;opacity:.92">&#10050; Culture Capital</div>';
  case 'domains': return '<div class="fill" style="background:linear-gradient(158deg,#1d4034 0%,#2f5a44 40%,#8f6224 70%,#2a1c0d 100%)"></div>'
   +'<div class="ph" style="top:140px;bottom:0;opacity:.45;mix-blend-mode:screen">'+im+'</div>'
   +'<div class="fill" style="background:radial-gradient(44% 16% at 50% 62%,rgba(255,245,225,.92),rgba(255,245,225,0) 72%)"></div>'
   +'<div style="position:absolute;left:-6px;right:-6px;top:44px;height:13px;background:#e8b36a;transform:rotate(-2.6deg);box-shadow:0 4px 12px rgba(232,179,106,.5)"></div>'
   +'<div style="position:absolute;left:0;right:0;top:45.5px;transform:rotate(-2.6deg);text-align:center;font-size:5.6px;font-weight:700;letter-spacing:.05em;color:#17201b">ONE QUERY ACROSS</div>'
   +'<div class="cv t-big" style="top:64px;font-size:24px;color:#fff;text-shadow:0 3px 0 rgba(20,40,31,.6)">Three</div>'
   +'<div class="cv t-big" style="top:87px;font-size:24px;color:#fff;text-shadow:0 3px 0 rgba(20,40,31,.6)">Domains</div>'
   +'<div class="cv t-big" style="top:113px;font-size:19px;color:#fff">+</div>';
  case 'power': return '<div class="ph phf">'+im+'</div>'
   +'<div class="fill" style="background:linear-gradient(180deg,rgba(6,8,10,0) 34%,rgba(6,8,10,.55) 52%,rgba(6,8,10,.92) 72%)"></div>'
   +'<div class="cv t-serif" style="top:132px;font-size:16px;color:#fff">A QUIET</div>'
   +'<div class="cv t-serif" style="top:150px;font-size:16px;color:#fff">POWER</div>'
   +'<div class="cv" style="top:171px;font-size:4.4px;letter-spacing:.07em;color:rgba(242,239,230,.85)">in what your customers already love</div>';
  case 'rank': return '<div class="ph phf">'+im+'</div>'
   +'<div class="fill" style="background:linear-gradient(180deg,rgba(9,14,11,0) 30%,rgba(9,14,11,.6) 48%,rgba(9,14,11,.95) 70%)"></div>'
   +'<div class="cv t-big" style="top:126px;font-size:10px;color:#fff;opacity:.9">Returned &middot; rank</div>'
   +'<div class="cv t-big" style="top:139px;font-size:22px;color:#e8b36a;text-shadow:0 0 16px rgba(232,179,106,.5)">01</div>';
  default: return '<div class="ph phf">'+im+'</div>'
   +'<div class="fill" style="background:linear-gradient(180deg,rgba(6,10,8,0) 38%,rgba(6,10,8,.85) 68%)"></div>'
   +'<div class="cv" style="top:150px;font-size:5.4px;font-weight:600;letter-spacing:.2em;color:#fff">'+(d.t||'')+'</div>';
 }
}

const LINKS=[['Brief','#brief'],['Signals','#signals'],['Experiments','#choose'],['Approval','#approve'],['Method','#method']];

export default function Hero(){
 const nav=useRef<HTMLElement>(null);
 const burger=useRef<HTMLButtonElement>(null);
 const canvas=useRef<HTMLDivElement>(null);
 const ring=useRef<HTMLDivElement>(null);
 const stA=useRef<HTMLDivElement>(null);
 const stB=useRef<HTMLDivElement>(null);

 useEffect(()=>{
  const cv=canvas.current,rg=ring.current;if(!cv||!rg)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');

  /* starfield: the whole field is one giant box-shadow list per layer */
  const field=(n:number,blur:number,lo:number,hi:number)=>Array.from({length:n},()=>
    (Math.random()*100).toFixed(2)+'vw '+(Math.random()*100).toFixed(2)+'vh '+blur+'px 0 rgba(255,246,230,'+(lo+Math.random()*(hi-lo)).toFixed(3)+')').join(',');
  if(stA.current)stA.current.style.boxShadow=field(150,0,.05,.30);
  if(stB.current)stB.current.style.boxShadow=field(18,1.2,.35,.70);

  /* the ring: 37 cards tangent to a cylinder, camera at the ring centre */
  const R=891,N=37,STEP=360/N,CULL=42,SPEED=1.9;
  const cards:HTMLDivElement[]=[];
  for(let i=0;i<N;i++){
   const el=document.createElement('div');el.className='card';
   el.innerHTML=creative(SHOTS[i%SHOTS.length])+'<div class="edge"></div>';
   const img=el.querySelector('img');
   if(img)img.addEventListener('error',()=>el.classList.add('broken'));
   rg.appendChild(el);cards.push(el);
  }
  let phase=-2;
  function placeCards(){
   for(let i=0;i<cards.length;i++){
    const a=((i*STEP+phase)%360+540)%360-180;      // signed angle, -180..180
    const el=cards[i];
    if(Math.abs(a)>CULL){el.style.visibility='hidden';continue}
    el.style.visibility='visible';
    const r=a*Math.PI/180,c=Math.cos(r);
    el.style.transform='translate3d('+(R*Math.sin(r))+'px,0,'+(R*(1-c))+'px) rotateY('+(-a)+'deg)';
    el.style.filter='brightness('+(0.84+0.5*(1/c-1))+')';
   }
  }

  /* scale law. k=min(vw/W, vh/560): dividing height by 560 rather than the
     canvas 657 fills the width and lets the mock bleed off the foot instead
     of letterboxing. */
  const CW=1172,TAB_MAX=1080,TAB_MIN=701,DW_MIN=920;
  function resize(){
   const vw=innerWidth,vh=Math.max(1,cv!.parentElement!.clientHeight);
   if(vw<=700){cv!.style.removeProperty('--k');cv!.style.removeProperty('--fill');placeCards();return}
   let W=CW,ramp=0;
   if(vw<=TAB_MAX){
    // narrow the design window so type stops shrinking with the viewport, and
    // keep k continuous at 1080 so there is no jump across the breakpoint
    W=DW_MIN+(vw-TAB_MIN)*(CW-DW_MIN)/(TAB_MAX-TAB_MIN);
    if(vh>vw*1.15)W=Math.min(W,900);            // portrait tablet: read larger
    ramp=Math.min(1,(TAB_MAX-vw)/120);
   }
   const k=Math.min(vw/W,vh/560);
   cv!.style.setProperty('--k',String(k));
   let fill=Math.max(0,vh/k-657);
   if(vw<=TAB_MAX&&fill>0){
    // share surplus height three ways: wheel travel, wheel scale, hero drop
    const ss=Math.min(fill*0.55,420)*ramp;
    const rs=1+Math.min(fill/1100,0.75)*ramp;
    const slack=219.5-125*rs+ss;
    const st=Math.max(0,slack/2-28)*ramp;
    fill-=ss;
    cv!.style.setProperty('--sshift',ss+'px');
    cv!.style.setProperty('--rs',String(rs));
    cv!.style.setProperty('--stshift',st+'px');
   }else{
    cv!.style.removeProperty('--sshift');cv!.style.removeProperty('--rs');cv!.style.removeProperty('--stshift');
   }
   cv!.style.setProperty('--fill',fill+'px');
   placeCards();
  }

  let last=0,raf=0;
  function tick(t:number){
   if(!last)last=t;
   const dt=Math.min((t-last)/1000,.1);last=t;
   if(!reduce.matches)phase-=SPEED*dt;           // continuous, never resets
   placeCards();
   raf=requestAnimationFrame(tick);
  }
  const onVis=()=>{last=0};                      // a backgrounded tab must not jump
  addEventListener('resize',resize);
  visualViewport?.addEventListener('resize',resize);
  document.addEventListener('visibilitychange',onVis);
  resize();
  raf=requestAnimationFrame(tick);

  return ()=>{
   cancelAnimationFrame(raf);
   removeEventListener('resize',resize);
   visualViewport?.removeEventListener('resize',resize);
   document.removeEventListener('visibilitychange',onVis);
   cards.forEach(c=>c.remove());
  };
 },[]);

 /* narrow-viewport menu: the same link and CTA nodes, re-laid-out by CSS */
 useEffect(()=>{
  const nv=nav.current,bg=burger.current;if(!nv||!bg)return;
  const close=()=>{nv.classList.remove('open');bg.setAttribute('aria-expanded','false')};
  const onDoc=(e:MouseEvent)=>{if(!nv.contains(e.target as Node))close()};
  const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape'&&nv.classList.contains('open')){close();bg.focus()}};
  const onResize=()=>{if(innerWidth>1080)close()};
  document.addEventListener('click',onDoc);
  document.addEventListener('keydown',onKey);
  addEventListener('resize',onResize);
  return ()=>{document.removeEventListener('click',onDoc);document.removeEventListener('keydown',onKey);removeEventListener('resize',onResize)};
 },[]);

 /* entrance timeline: runs once, then the page is still. Nothing survives
    completion -- the final frame is the authored design. */
 useEffect(()=>{
  const root=document.documentElement;
  const settle=()=>{
   document.getAnimations().forEach(a=>{if(typeof a.id==='string'&&a.id.startsWith('intro:'))a.cancel()});
   root.classList.remove('intro');
  };
  if(!root.classList.contains('intro')||matchMedia('(prefers-reduced-motion: reduce)').matches||!Element.prototype.animate){settle();return}
  const D=innerWidth<=700?.66:1;
  const EXPO='cubic-bezier(.16,1,.3,1)',SOFT='cubic-bezier(.22,.61,.36,1)';
  const Y=(px:number)=>'0 '+(px*D)+'px';
  let n=0,lastAnim:Animation|null=null,lastEnd=-1;
  const play=(el:Element|null,from:Record<string,string>,dur:number,delay:number,ease:string)=>{
   if(!el)return;
   const to:Record<string,string>={opacity:'1'};
   if('translate' in from)to.translate='0 0';
   if('scale' in from)to.scale='1';
   if('clipPath' in from)to.clipPath='inset(-30% 0 -30% 0)';
   const a=el.animate([from,to],{duration:dur,delay,easing:ease,fill:'both'});
   a.id='intro:'+(n++);
   if(delay+dur>lastEnd){lastEnd=delay+dur;lastAnim=a}
  };
  const q=(s:string)=>document.querySelector(s);
  play(q('.hnav'),{opacity:'0',translate:Y(-9)},620,60,EXPO);
  play(q('.mark'),{opacity:'0',translate:Y(6)},520,150,SOFT);
  play(q('.wm'),{opacity:'0',translate:Y(6)},520,185,SOFT);
  document.querySelectorAll('.links a').forEach((a,i)=>play(a,{opacity:'0',translate:Y(6)},460,215+i*45,SOFT));
  play(q('.burger'),{opacity:'0',translate:Y(6)},460,300,SOFT);
  play(q('.hnav .gbtn'),{opacity:'0',translate:Y(6)},500,400,SOFT);
  play(q('.hbadge'),{opacity:'0',translate:Y(11),scale:'.985'},560,270,EXPO);
  // the headline lines wipe up out of their own baseline; they do not just fade
  play(q('#h1a'),{opacity:'0',translate:Y(15),clipPath:'inset(100% 0 -30% 0)'},900,380,EXPO);
  play(q('#h1b'),{opacity:'0',translate:Y(15),clipPath:'inset(100% 0 -30% 0)'},900,470,EXPO);
  play(q('#sub1'),{opacity:'0',translate:Y(10)},620,690,EXPO);
  play(q('#sub2'),{opacity:'0',translate:Y(10)},620,745,EXPO);
  play(q('.cta2'),{opacity:'0',translate:Y(13),scale:'.985'},620,830,EXPO);
  // the payoff: the wheel rises into depth, the mock lands in FRONT of it last
  play(q('.ring'),{opacity:'0',translate:Y(18),scale:'.99'},950,700,EXPO);
  play(q('.browser'),{opacity:'0',translate:Y(26)},900,900,EXPO);
  play(q('.scrollcue'),{opacity:'0',scale:'.88'},500,1260,EXPO);
  if(lastAnim)(lastAnim as Animation).finished.then(settle).catch(settle);else settle();
 },[]);

 return <div className="stage">
  <div className="hbg"/><div className="stars" ref={stA}/><div className="stars" ref={stB}/>
  <div className="canvas" ref={canvas}>
   <div className="stack">
    <nav className="hnav" ref={nav}>
     <svg className="mark" viewBox="0 0 48 48" aria-hidden="true"><defs>
      <linearGradient id="sw" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
       <stop stopColor="#f6dcae"/><stop offset=".5" stopColor="#e8b36a"/><stop offset="1" stopColor="#1d4034"/></linearGradient>
      <linearGradient id="sw2" x1="40" y1="10" x2="10" y2="40" gradientUnits="userSpaceOnUse">
       <stop stopColor="#fbe9c8"/><stop offset="1" stopColor="#2f5a44" stopOpacity=".25"/></linearGradient></defs>
      <g transform="rotate(-32 24 24)">
       <ellipse cx="24" cy="24" rx="18.5" ry="9.6" fill="none" stroke="url(#sw2)" strokeWidth="3.1" strokeLinecap="round" strokeDasharray="58 30" strokeDashoffset="14"/>
       <circle cx="41.4" cy="20.6" r="3.1" fill="#fbe9c8"/></g>
      <circle cx="24" cy="24" r="6.6" fill="url(#sw)"/><circle cx="24" cy="24" r="2.6" fill="#fff"/></svg>
     <div className="wm"><span className="kick">CULTURE</span><span className="name" id="wmName">CAPITAL</span></div>
     <button type="button" className="burger" ref={burger} aria-label="Opens menu" aria-expanded="false" aria-controls="navmenu"
       onClick={e=>{e.stopPropagation();const nv=nav.current!;const open=nv.classList.toggle('open');(e.currentTarget as HTMLButtonElement).setAttribute('aria-expanded',String(open))}}>
      <span/><span/><span/></button>
     <div className="navmenu" id="navmenu">
      <div className="links" id="links">{LINKS.map(([label,href])=>
       <a key={href} href={href} onClick={()=>nav.current?.classList.remove('open')}>{label}</a>)}</div>
      <a className="gbtn" href="#brief"><span id="ctaLabel">Start a brief</span></a>
     </div>
    </nav>
    <div className="hbadge">
     <i><svg viewBox="5 1 14 22" preserveAspectRatio="none" aria-hidden="true">
      <path d="M13.9 1.6 5.5 13.6a.7.7 0 0 0 .6 1.1h4.2l-1 7.7a.7.7 0 0 0 1.25.55l8.3-12.1a.7.7 0 0 0-.6-1.1h-4.2l1-7.7a.7.7 0 0 0-1.25-.55Z"
       fill="rgba(143,98,36,.72)" stroke="rgba(251,233,200,.6)" strokeWidth="1.6" strokeLinejoin="round"/></svg></i>
     <b id="badgeTxt">Evidence you can inspect</b>
    </div>
    <h1 className="hh1" id="h1a">Find your people</h1>
    <p className="hh1" id="h1b">Make your next move</p>
    <p className="hsub" id="sub1"><b>Live cultural evidence / <span className="nb">Qloo</span></b> turned into</p>
    <p className="hsub" id="sub2">one small, testable campaign you decide to run.</p>
    <a className="gbtn cta2" href="#brief"><span id="vpLabel">Start a brief</span></a>
   </div>
   {/* the mock lives inside .showcase so both are positioned against the same
       box and travel together when the tablet layout shifts them footward */}
   <div className="showcase"><div className="ring" ref={ring}/>
   <div className="browser">
    <div className="bar">
     <div className="dots"><i style={{background:'#ee5c62'}}/><i style={{background:'#f6b719'}}/><i style={{background:'#12c02f'}}/></div>
     <div className="omni">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2.4"/><path d="M20 20l-3.8-3.8" stroke="#fff" strokeWidth="2.4"/></svg>
      <span>Culture Capital &mdash; approved experiment</span></div>
     <div className="tools">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 16V4m0 0L8 8m4-4 4 4" stroke="#fff" strokeWidth="2"/><path d="M4 15v5h16v-5" stroke="#fff" strokeWidth="2"/></svg>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.2"/></svg>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 3 8l9 5 9-5-9-5Z" fill="#fff" opacity=".95"/><path d="M3 13l9 5 9-5" stroke="#fff" strokeWidth="2" opacity=".55"/></svg></div>
    </div>
    <div className="page">
     <div className="ann"><u style={{left:'20px'}}>&#8249;</u><span>Nothing is published automatically</span><u style={{right:'20px'}}>&#8250;</u></div>
     <div className="shoplogo"><em>ROOT &amp; RITUAL</em><i>LAUNCH EXPERIMENT</i></div>
     <div className="shopicons">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="#222" strokeWidth="2"/><path d="M20 20l-3.8-3.8" stroke="#222" strokeWidth="2"/></svg>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="#222" strokeWidth="2"/><path d="M4.5 21c0-4.2 3.4-6.6 7.5-6.6s7.5 2.4 7.5 6.6" stroke="#222" strokeWidth="2"/></svg>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5.5 8h13l-1.2 12H6.7L5.5 8Z" stroke="#222" strokeWidth="2"/><path d="M9 8V6.2A3 3 0 0 1 15 6.2V8" stroke="#222" strokeWidth="2"/></svg></div>
     <div className="pagebody">
      <div className="pghero">
       <img src="/hero/banner.webp" alt="A founder's worktable in morning light, with an open notebook and a stack of record sleeves"/>
       <div className="scrim"/>
       <div className="copy"><u>Approved by the founder</u><em>A ritual worth<br/>sharing.</em><i>OPEN THE EVIDENCE</i></div>
      </div>
      <div className="pgsec"><b>Returned references</b><u>audit all</u></div>
      <div className="pggrid">
       <div className="pgcard"><div className="ph"><img src="/hero/ref-1.webp" alt="A plain record sleeve propped against a dark surface"/><span className="tag">RANK 01</span></div><b>Artist signal</b><i>Returned &middot; artist</i><s>Evidence <span>/v2/insights</span></s></div>
       <div className="pgcard"><div className="ph"><img src="/hero/ref-2.webp" alt="A small hand-thrown ceramic vessel"/></div><b>Brand signal</b><i>Returned &middot; brand</i><s>Evidence</s></div>
       <div className="pgcard"><div className="ph"><img src="/hero/ref-3.webp" alt="A strip of 35mm film on a lightbox"/><span className="tag">RANK 02</span></div><b>Movie signal</b><i>Returned &middot; movie</i><s>Evidence <span>/v2/insights</span></s></div>
       <div className="pgcard"><div className="ph"><img src="/hero/ref-4.webp" alt="A folded square of indigo-dyed cloth"/><span className="tag">NEW</span></div><b>Texture signal</b><i>Returned &middot; brand</i><s>Evidence</s></div>
      </div>
      <div className="pgstrip">
       <span>Entity ID on every reference</span><span>Rank, not affinity</span><span>Seed provenance shown</span><span>Approval required to export</span></div>
     </div>
    </div>
   </div>
   </div>
  </div>
  <a className="scrollcue" href="#brief"><span>Begin</span>
   <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 4v15m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
 </div>;
}
