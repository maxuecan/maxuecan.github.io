import{k as r,b as s,e as n,o as i}from"./platForm.da158ce1.js";const c=n("iframe",{name:"iframeName",width:"500px",height:"500px",src:"src/views/practice/i_frame/test.html",frameborder:"0",scrolling:"no",id:"iframeId"},`\r
    `,-1),l={setup(d){r(()=>{var e=document.getElementById("iframeId"),t=e.contentWindow;t.document,window.addEventListener("message",a=>{console.log(a,"\u7236\u7EA7\u76D1\u542C")},!1)});function o(){var e=document.getElementById("iframeId");e.contentWindow.postMessage("\u6211\u662F\u7236\u5143\u7D20\u7684\u6570\u636E","*")}return(e,t)=>(i(),s("div",null,[c,n("button",{onClick:o},"\u7236\u6309\u94AE")]))}};export{l as default};
