import{k as f,o as r,b as s,e as c,h as x}from"./platForm.2758e6cf.js";const C=c("canvas",{id:"theCanvas",width:"800",height:"400"},null,-1),y={setup(u){let e,t;f(()=>{if(e=document.getElementById("theCanvas"),!(!e||!e.getContext)){t=e.getContext("2d");let n=!1;e.onmousedown=function(l){n=!0;let a=i(e,l.clientX,l.clientY),{x:o,y:m}=a;t.beginPath(),t.moveTo(o,m),e.onmousemove=_=>{if(n){let p=i(e,_.clientX,_.clientY),{x:g,y:v}=p;t.lineTo(g,v),t.stroke()}}},e.onmouseup=function(){n=!1,t.closePath()}}});const i=(n,l,a)=>{let o=n.getBoundingClientRect();return{x:l-o.left*(n.width/o.width),y:a-o.top*(n.height/o.height)}};function h(){t.strokeStyle="rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+", .5)",console.log(t.strokeStyle)}function d(){t.clearRect(0,0,e.clientWidth,e.clientHeight)}return(n,l)=>(r(),s("div",null,[C,c("button",{onClick:h},"\u968F\u673A\u989C\u8272\u753B\u7B14"),c("button",{onClick:d},"\u6E05\u9664\u753B\u5E03")]))}},w={setup(u){return(e,t)=>(r(),s("div",null,[x(y)]))}};export{w as default};
