import{k as p,o as m,b as f,e as _,_ as w,p as P,h as b,d as T,j as I,r as k,z as $,F as B,i as S,m as x,v as E,K as R,t as A}from"./platForm.712fa1a8.js";const F=_("canvas",{id:"canvas-shizhong",height:"300"},null,-1),L=[F],q={setup(h){return p(()=>{var a=document.getElementById("canvas-shizhong"),t=a.getContext("2d");setInterval(()=>{t.save(),t.clearRect(0,0,a.width,a.height),t.translate(150,100),t.save(),t.beginPath(),t.arc(0,0,100,0,2*Math.PI),t.stroke(),t.closePath(),t.beginPath(),t.arc(0,0,5,0,2*Math.PI),t.stroke(),t.closePath();let o=new Date,l=o.getHours()%12,n=o.getMinutes(),i=o.getSeconds();t.rotate(2*Math.PI/12*l+2*Math.PI/12*(n/60)-Math.PI/2),t.beginPath(),t.moveTo(-10,0),t.lineTo(40,0),t.lineWidth=10,t.stroke(),t.closePath(),t.restore(),t.save(),t.rotate(2*Math.PI/60*n+2*Math.PI/60*(i/60)-Math.PI/2),t.beginPath(),t.moveTo(-10,0),t.lineTo(60,0),t.lineWidth=5,t.strokeStyle="blue",t.stroke(),t.closePath(),t.restore(),t.save(),t.rotate(2*Math.PI/60*i-Math.PI/2),t.beginPath(),t.moveTo(-10,0),t.lineTo(80,0),t.strokeStyle="red",t.stroke(),t.closePath(),t.restore(),t.save(),t.lineWidth=1;for(let s=0;s<60;s++)t.rotate(2*Math.PI/60),t.beginPath(),t.moveTo(90,0),t.lineTo(100,0),t.stroke(),t.closePath();t.restore(),t.save(),t.lineWidth=5;for(let s=0;s<12;s++)t.rotate(2*Math.PI/12),t.beginPath(),t.moveTo(85,0),t.lineTo(100,0),t.stroke(),t.closePath();t.restore(),t.restore()},1e3)}),(a,t)=>(m(),f("div",null,L))}};const M=h=>(P("data-v-c66f2ed6"),h=h(),b(),h),D={style:{position:"relative","z-index":"1"}},X=M(()=>_("canvas",{id:"canvas-guaguaka"},null,-1)),Y=M(()=>_("div",{class:"text"},"\u606D\u559C\u60A8\u83B7\u5F97100w",-1)),W=[X,Y],z={setup(h){p(()=>{const t=document.getElementById("canvas-guaguaka"),o=t.getContext("2d");o.fillStyle="darkgray",o.fillRect(0,0,t.width,t.height),o.fillStyle="#fff",o.fillText("\u522E\u522E\u5361",t.width/2,t.height/2);let l=!1;document.body.ontouchstart!==void 0?(t.ontouchstart=function(n){l=!0},t.ontouchmove=n=>{if(!l)return;let i=a(t,n.targetTouches[0].clientX,n.targetTouches[0].clientY),{x:s,y:c}=i;o.globalCompositeOperation="destination-out",o.arc(s,c,10,0,2*Math.PI),o.fill()},t.ontouchend=function(){l=!1}):(t.onmousedown=function(){l=!0},t.onmousemove=function(n){if(!l)return;let i=a(t,n.clientX,n.clientY),{x:s,y:c}=i;o.globalCompositeOperation="destination-out",o.arc(s,c,10,0,2*Math.PI),o.fill()},t.onmouseup=function(){l=!1})});const a=(t,o,l)=>{let n=t.getBoundingClientRect();return{x:o-n.left*(t.width/n.width),y:l-n.top*(t.height/n.height)}};return(t,o)=>(m(),f("div",D,W))}};var H=w(z,[["__scopeId","data-v-c66f2ed6"]]);const K=h=>(P("data-v-690ba2df"),h=h(),b(),h),O=K(()=>_("canvas",{id:"canvas"},null,-1)),j=[O],G={setup(h){p(()=>{class t{constructor(e,r){this.x=e,this.y=r,this.r=Math.random()*10,this._mx=Math.random(),this._my=Math.random()}drawCircle(e){e.beginPath(),e.arc(this.x,this.y,this.r,0,360),e.closePath(),e.fillStyle="rgba(204, 204, 204, 0.3)",e.fill()}drawLine(e,r){let y=this.x-r.x,C=this.y-r.y;Math.sqrt(y*y+C*C)<150&&(e.beginPath(),e.moveTo(this.x,this.y),e.lineTo(r.x,r.y),e.closePath(),e.strokeStyle="rgba(204, 204, 204, 0.3)",e.stroke())}move(e,r){this._mx=this.x<e&&this.x>0?this._mx:-this._mx,this._my=this.y<r&&this.y>0?this._my:-this._my,this.x+=this._mx/2,this.y+=this._my/2}}class o extends t{constructor(e,r){super(e,r)}drawCircle(e){e.beginPath(),this.r=8,e.arc(this.x,this.y,this.r,0,360),e.closePath(),e.fillStyle="rgba(255, 77, 54, 0.6)",e.fill()}}window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;let l=document.getElementById("canvas"),n=l.getContext("2d"),i=l.width=l.offsetWidth,s=l.height=l.offsetHeight,c=[],u=new o(0,0),v=function(){n.clearRect(0,0,i,s);for(let e=0;e<c.length;e++){c[e].move(i,s),c[e].drawCircle(n);for(let r=e+1;r<c.length;r++)c[e].drawLine(n,c[r])}if(u.x){u.drawCircle(n);for(var d=1;d<c.length;d++)u.drawLine(n,c[d])}requestAnimationFrame(v)},g=function(d){for(var e=0;e<d;e++)c.push(new t(Math.random()*i,Math.random()*s));v()};window.addEventListener("load",g(10)),window.onmousemove=function(d){d=d||window.event;let{x:e,y:r}=a(l,d.clientX,d.clientY);u.x=e,u.y=r},window.onmouseout=function(){u.x=null,u.y=null}});const a=(t,o,l)=>{let n=t.getBoundingClientRect();return{x:o-n.left*(t.width/n.width),y:l-n.top*(t.height/n.height)}};return(t,o)=>(m(),f("div",null,j))}};var N=w(G,[["__scopeId","data-v-690ba2df"]]);const V=_("canvas",{id:"theCanvas"},null,-1),Z=_("br",null,null,-1),J={setup(h){let a,t;p(()=>{if(a=document.getElementById("theCanvas"),!(!a||!a.getContext)){t=a.getContext("2d");let i=!1;document.body.ontouchstart!==void 0?(a.ontouchstart=function(s){i=!0;let c=o(a,s.targetTouches[0].clientX,s.targetTouches[0].clientY),{x:u,y:v}=c;t.beginPath(),t.moveTo(u,v),a.ontouchmove=g=>{if(i){let d=o(a,g.targetTouches[0].clientX,g.targetTouches[0].clientY),{x:e,y:r}=d;t.lineTo(e,r),t.stroke()}}},a.ontouchend=function(){i=!1,t.closePath()}):(a.onmousedown=function(s){i=!0;let c=o(a,s.clientX,s.clientY),{x:u,y:v}=c;t.beginPath(),t.moveTo(u,v),a.onmousemove=g=>{if(i){let d=o(a,g.clientX,g.clientY),{x:e,y:r}=d;t.lineTo(e,r),t.stroke()}}},a.onmouseup=function(){i=!1,t.closePath()})}});const o=(i,s,c)=>{let u=i.getBoundingClientRect();return{x:s-u.left*(i.width/u.width),y:c-u.top*(i.height/u.height)}};function l(){t.strokeStyle="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+", .5)"}function n(){t.clearRect(0,0,a.clientWidth,a.clientHeight)}return(i,s)=>(m(),f("div",null,[V,Z,_("button",{onClick:l},"\u968F\u673A\u989C\u8272\u753B\u7B14"),_("button",{onClick:n},"\u6E05\u9664\u753B\u5E03")]))}};const Q=T({setup(h,a){let t=["\u5982\u4E43\u795E\u638C","\u8475\u82B1\u70B9\u7A74\u624B","\u94C1\u7802\u638C","\u4E7E\u5764\u5927\u632A\u79FB"],o=[J,N,H,q],l=I(o[0]),n=k(0);return{catalogue:t,currentComp:l,catalogueChange:s=>{s.srcElement.nodeName==="LI"&&(n.value=t.indexOf(s.target.innerText),l.value=o[n.value])}}}}),U={class:"canvas-container"},tt={class:"container"},et={class:"catalogue"},ot={class:"content"};function nt(h,a,t,o,l,n){return m(),f("div",U,[_("div",tt,[_("div",et,[_("ul",{onClick:a[0]||(a[0]=$((...i)=>h.catalogueChange&&h.catalogueChange(...i),["stop"]))},[(m(!0),f(B,null,S(h.catalogue,(i,s)=>(m(),f("li",{key:s},A(i),1))),128))])]),_("div",ot,[(m(),x(R,null,[(m(),x(E(h.currentComp)))],1024))])])])}var st=w(Q,[["render",nt],["__scopeId","data-v-e05bc8b2"]]);export{st as default};
