import{d as l,r as f,_ as d,o as t,b as i,e as s,n as u,F as E,h as k,t as v,p as g,i as $,j as B,k as A,l as F,m as p,q as I,K as b,f as y}from"./platForm.608a8262.js";import{c as N}from"./index.d7a1f194.js";const S=l({setup(e,a){let n=f(1);return{is_active:n,navigate:r=>{n.value=r,a.emit("navChange",r)}}}}),w={class:"navigate-container"};function D(e,a,n,_,r,c){return t(),i("div",w,[s("div",null,[s("div",{onClick:a[0]||(a[0]=o=>e.navigate(1)),class:u(e.is_active===1?"active":"")},"\u9996\u9875",2),s("div",{onClick:a[1]||(a[1]=o=>e.navigate(2)),class:u(e.is_active===2?"active":"")},"css\u4E16\u754C",2),s("div",{onClick:a[2]||(a[2]=o=>e.navigate(3)),class:u(e.is_active===3?"active":"")},"canvas",2)])])}var M=d(S,[["render",D],["__scopeId","data-v-f0219f16"]]),j="/assets/picture.6d16f7cc.png";const O=l({setup(){return{msg_arr:["NAME","D.O.B","PHONE","E-MAIL"],msg_obj:{NAME:"\u9A6C\u5B66\u707F","D.O.B":"1998-04-02",PHONE:"+86 13539484628","E-MAIL":"623875282@qq.com"}}}}),h=e=>(g("data-v-3d1e82ff"),e=e(),$(),e),q={class:"info"},H={class:"message"},L=h(()=>s("p",null,"\u6B22\u8FCE\u5149\u4E34\uFF0C\u5404\u4F4D\u8BBF\u5BA2",-1)),x=h(()=>s("div",{class:"picture"},[s("img",{src:j,alt:""})],-1));function K(e,a,n,_,r,c){return t(),i("div",q,[s("div",H,[L,(t(!0),i(E,null,k(e.msg_arr,(o,U)=>(t(),i("div",null,[s("b",null,v(o),1),s("b",null,v(e.msg_obj[o]),1)]))),256))]),x])}var m=d(O,[["render",K],["__scopeId","data-v-3d1e82ff"]]),P="/assets/book.0fe09a98.png";const V=l({setup(){const e=y();let a=f(!e.state.user.home_animate),n=B(m),_=[m,N];return A(()=>{a&&setTimeout(()=>{a.value=!1,sessionStorage.setItem("homeAnimate","true")},7500)}),{show_animate:a,currentComp:n,navChange:c=>{n.value=_[c-1]}}}}),C=e=>(g("data-v-c676f8f8"),e=e(),$(),e),z={class:"container"},R={key:0,class:"book-container"},T=C(()=>s("img",{class:"book",src:P,alt:""},null,-1)),W=C(()=>s("div",{class:"wrap"},[s("h3",null,"\u4E2A"),s("h3",null,"\u4EBA"),s("h3",null,"\u4FE1"),s("h3",null,"\u606F")],-1)),G=[T,W],J={key:1};function Q(e,a,n,_,r,c){const o=M;return t(),i("div",z,[e.show_animate?(t(),i("div",R,G)):(t(),i("div",J,[F(o,{onNavChange:e.navChange},null,8,["onNavChange"]),(t(),p(b,null,[(t(),p(I(e.currentComp)))],1024))]))])}var Z=d(V,[["render",Q],["__scopeId","data-v-c676f8f8"]]);export{Z as default};