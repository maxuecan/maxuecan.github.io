import{k as p,o as m,b as g,e as _,_ as w,p as P,i as M,d as I,j as b,r as k,y as $,F as B,h as S,m as C,q as E,K as R,t as A,l as F}from"./platForm.20a7f20a.js";const q=_("canvas",{id:"canvas-shizhong",height:"300"},null,-1),L=[q],D={setup(h){return p(()=>{var n=document.getElementById("canvas-shizhong"),t=n.getContext("2d");setInterval(()=>{t.save(),t.clearRect(0,0,n.width,n.height),t.translate(150,100),t.save(),t.beginPath(),t.arc(0,0,100,0,2*Math.PI),t.stroke(),t.closePath(),t.beginPath(),t.arc(0,0,5,0,2*Math.PI),t.stroke(),t.closePath();let o=new Date,l=o.getHours()%12,a=o.getMinutes(),i=o.getSeconds();t.rotate(2*Math.PI/12*l+2*Math.PI/12*(a/60)-Math.PI/2),t.beginPath(),t.moveTo(-10,0),t.lineTo(40,0),t.lineWidth=10,t.stroke(),t.closePath(),t.restore(),t.save(),t.rotate(2*Math.PI/60*a+2*Math.PI/60*(i/60)-Math.PI/2),t.beginPath(),t.moveTo(-10,0),t.lineTo(60,0),t.lineWidth=5,t.strokeStyle="blue",t.stroke(),t.closePath(),t.restore(),t.save(),t.rotate(2*Math.PI/60*i-Math.PI/2),t.beginPath(),t.moveTo(-10,0),t.lineTo(80,0),t.strokeStyle="red",t.stroke(),t.closePath(),t.restore(),t.save(),t.lineWidth=1;for(let s=0;s<60;s++)t.rotate(2*Math.PI/60),t.beginPath(),t.moveTo(90,0),t.lineTo(100,0),t.stroke(),t.closePath();t.restore(),t.save(),t.lineWidth=5;for(let s=0;s<12;s++)t.rotate(2*Math.PI/12),t.beginPath(),t.moveTo(85,0),t.lineTo(100,0),t.stroke(),t.closePath();t.restore(),t.restore()},1e3)}),(n,t)=>(m(),g("div",null,L))}};const T=h=>(P("data-v-721c6cd5"),h=h(),M(),h),X={style:{position:"relative","z-index":"1"}},Y=T(()=>_("canvas",{id:"canvas-guaguaka"},null,-1)),W=T(()=>_("div",{class:"text"},"\u606D\u559C\u60A8\u83B7\u5F97100w",-1)),z=[Y,W],H={setup(h){p(()=>{const t=document.getElementById("canvas-guaguaka"),o=t.getContext("2d");o.fillStyle="darkgray",o.fillRect(0,0,t.width,t.height),o.fillStyle="#fff",o.fillText("\u522E\u522E\u5361",t.width/2,t.height/2);let l=!1;document.body.ontouchstart!==void 0?(t.ontouchstart=function(a){l=!0},t.ontouchmove=a=>{if(!l)return;let i=n(t,a.targetTouches[0].clientX,a.targetTouches[0].clientY),{x:s,y:c}=i;o.globalCompositeOperation="destination-out",o.arc(s,c,10,0,2*Math.PI),o.fill()},t.ontouchend=function(){l=!1}):(t.onmousedown=function(){l=!0},t.onmousemove=function(a){if(!l)return;let i=n(t,a.clientX,a.clientY),{x:s,y:c}=i;o.globalCompositeOperation="destination-out",o.arc(s,c,10,0,2*Math.PI),o.fill()},t.onmouseup=function(){l=!1})});const n=(t,o,l)=>{let a=t.getBoundingClientRect();return{x:o-a.left*(t.width/a.width),y:l-a.top*(t.height/a.height)}};return(t,o)=>(m(),g("div",X,z))}};var K=w(H,[["__scopeId","data-v-721c6cd5"]]);const N=h=>(P("data-v-5e75971f"),h=h(),M(),h),O=N(()=>_("canvas",{id:"canvas"},null,-1)),j=[O],G={setup(h){p(()=>{class t{constructor(e,r){this.x=e,this.y=r,this.r=Math.random()*10,this._mx=Math.random(),this._my=Math.random()}drawCircle(e){e.beginPath(),e.arc(this.x,this.y,this.r,0,360),e.closePath(),e.fillStyle="rgba(204, 204, 204, 0.3)",e.fill()}drawLine(e,r){let y=this.x-r.x,x=this.y-r.y;Math.sqrt(y*y+x*x)<150&&(e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(r.x,r.y),e.closePath(),e.strokeStyle="rgba(204, 204, 204, 0.3)",e.stroke())}move(e,r){this._mx=this.x<e&&this.x>0?this._mx:-this._mx,this._my=this.y<r&&this.y>0?this._my:-this._my,this.x+=this._mx/2,this.y+=this._my/2}}class o extends t{constructor(e,r){super(e,r)}drawCircle(e){e.beginPath(),this.r=8,e.arc(this.x,this.y,this.r,0,360),e.closePath(),e.fillStyle="rgba(255, 77, 54, 0.6)",e.fill()}}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;let l=document.getElementById("canvas"),a=l.getContext("2d"),i=l.width=l.offsetWidth,s=l.height=l.offsetHeight,c=[],u=new o(0,0),f=function(){a.clearRect(0,0,i,s);for(let e=0;e<c.length;e++){c[e].move(i,s),c[e].drawCircle(a);for(let r=e+1;r<c.length;r++)c[e].drawLine(a,c[r])}if(u.x){u.drawCircle(a);for(var d=1;d<c.length;d++)u.drawLine(a,c[d])}requestAnimationFrame(f)},v=function(d){for(var e=0;e<d;e++)c.push(new t(Math.random()*i,Math.random()*s));f()};window.addEventListener("load",v(10)),window.onmousemove=function(d){d=d||window.event;let{x:e,y:r}=n(l,d.clientX,d.clientY);u.x=e,u.y=r},window.onmouseout=function(){u.x=null,u.y=null}});const n=(t,o,l)=>{let a=t.getBoundingClientRect();return{x:o-a.left*(t.width/a.width),y:l-a.top*(t.height/a.height)}};return(t,o)=>(m(),g("div",null,j))}};var V=w(G,[["__scopeId","data-v-5e75971f"]]);const Z=_("canvas",{id:"theCanvas"},null,-1),J=_("br",null,null,-1),Q={setup(h){let n,t;p(()=>{if(n=document.getElementById("theCanvas"),!(!n||!n.getContext)){t=n.getContext("2d");let i=!1;document.body.ontouchstart!==void 0?(n.ontouchstart=function(s){i=!0;let c=o(n,s.targetTouches[0].clientX,s.targetTouches[0].clientY),{x:u,y:f}=c;t.beginPath(),t.moveTo(u,f),n.ontouchmove=v=>{if(i){let d=o(n,v.targetTouches[0].clientX,v.targetTouches[0].clientY),{x:e,y:r}=d;t.lineTo(e,r),t.stroke()}}},n.ontouchend=function(){i=!1,t.closePath()}):(n.onmousedown=function(s){i=!0;let c=o(n,s.clientX,s.clientY),{x:u,y:f}=c;t.beginPath(),t.moveTo(u,f),n.onmousemove=v=>{if(i){let d=o(n,v.clientX,v.clientY),{x:e,y:r}=d;t.lineTo(e,r),t.stroke()}}},n.onmouseup=function(){i=!1,t.closePath()})}});const o=(i,s,c)=>{let u=i.getBoundingClientRect();return{x:s-u.left*(i.width/u.width),y:c-u.top*(i.height/u.height)}};function l(){t.strokeStyle="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+", .5)"}function a(){t.clearRect(0,0,n.clientWidth,n.clientHeight)}return(i,s)=>(m(),g("div",null,[Z,J,_("button",{onClick:l},"\u968F\u673A\u989C\u8272\u753B\u7B14"),_("button",{onClick:a},"\u6E05\u9664\u753B\u5E03")]))}};const U=I({setup(h,n){let t=["\u5982\u4E43\u795E\u638C","\u8475\u82B1\u70B9\u7A74\u624B","\u94C1\u7802\u638C","\u4E7E\u5764\u5927\u632A\u79FB"],o=[Q,V,K,D],l=b(o[0]),a=k(0);return{catalogue:t,currentComp:l,catalogueChange:s=>{s.srcElement.nodeName==="LI"&&(a.value=t.indexOf(s.target.innerText),l.value=o[a.value])}}}}),tt={class:"canvas-container"},et={class:"container"},nt={class:"catalogue"},ot={class:"content"};function at(h,n,t,o,l,a){return m(),g("div",tt,[_("div",et,[_("div",nt,[_("ul",{onClick:n[0]||(n[0]=$((...i)=>h.catalogueChange&&h.catalogueChange(...i),["prevent"]))},[(m(!0),g(B,null,S(h.catalogue,(i,s)=>(m(),g("li",{key:s},A(i),1))),128))])]),_("div",ot,[(m(),C(R,null,[(m(),C(E(h.currentComp)))],1024))])])])}var it=w(U,[["render",at],["__scopeId","data-v-7de7f044"]]);const rt={setup(h){return(n,t)=>(m(),g("div",null,[F(it)]))}};export{rt as default};
