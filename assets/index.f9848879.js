var C=(e,s,n)=>new Promise((u,_)=>{var d=i=>{try{l(n.next(i))}catch(r){_(r)}},a=i=>{try{l(n.throw(i))}catch(r){_(r)}},l=i=>i.done?u(i.value):Promise.resolve(i.value).then(d,a);l((n=n.apply(e,s)).next())});import{d as $,r as g,_ as v,o,b as c,e as t,n as p,p as f,h,F as E,i as B,t as k,j as w,k as A,l as N,m,q as S,v as x,K as j,f as D,w as L}from"./platForm.6f37e935.js";import{C as M}from"./index.7fc68ff9.js";import O from"./index.4c0d2c83.js";const q=$({setup(e,s){let n=g(1);return{is_active:n,navigate:_=>{n.value=_,s.emit("navChange",_)}}}}),H={class:"navigate-container"};function T(e,s,n,u,_,d){return o(),c("div",H,[t("div",null,[t("div",{onClick:s[0]||(s[0]=a=>e.navigate(1)),class:p(e.is_active===1?"active":"")},"\u85CF\u7ECF\u9601",2),t("div",{onClick:s[1]||(s[1]=a=>e.navigate(2)),class:p(e.is_active===2?"active":"")},"\u5185\u529F",2),t("div",{onClick:s[2]||(s[2]=a=>e.navigate(3)),class:p(e.is_active===3?"active":"")},"\u5916\u529F",2)])])}var K=v(q,[["render",T],["__scopeId","data-v-31bed3fb"]]);const P={},R=e=>(f("data-v-688f4030"),e=e(),h(),e),V={class:"loader"},z=R(()=>t("span",null,null,-1)),U=[z];function W(e,s){return o(),c("div",V,U)}var G=v(P,[["render",W],["__scopeId","data-v-688f4030"]]),J="/assets/picture.6d16f7cc.png";const Q=$({setup(){return{msg_arr:["NAME","D.O.B","PHONE","E-MAIL"],msg_obj:{NAME:"\u9A6C\u5B66\u707F","D.O.B":"1998-04-02",PHONE:"+86 13539484628","E-MAIL":"623875282@qq.com"}}}}),I=e=>(f("data-v-37b02401"),e=e(),h(),e),X={class:"info"},Y={class:"message"},Z=I(()=>t("p",null,"\u6B22\u8FCE\u5149\u4E34\uFF0C\u5404\u4F4D\u8BBF\u5BA2",-1)),ee=I(()=>t("div",{class:"picture"},[t("img",{src:J,alt:""})],-1));function se(e,s,n,u,_,d){return o(),c("div",X,[t("div",Y,[Z,(o(!0),c(E,null,B(e.msg_arr,(a,l)=>(o(),c("div",null,[t("b",null,k(a),1),t("b",null,k(e.msg_obj[a]),1)]))),256))]),ee])}var y=v(Q,[["render",se],["__scopeId","data-v-37b02401"]]),te="/assets/book.0fe09a98.png";const ne=$({setup(){const e=D();let s=g(!e.state.user.home_animate),n=w(y),u=[y,M,O],{proxy:_,ctx:d}=L(),a=g(!0);A(()=>C(this,null,function*(){yield N(),setTimeout(()=>{i()},1e3),s&&setTimeout(()=>{s.value=!1,sessionStorage.setItem("homeAnimate","true")},7500)}));const l=r=>{n.value=u[r-1]},i=()=>{let r=new Image,b=new URL("/assets/bg1.d6282357.jpg",self.location).href;r.src=b,r.onload=function(){a.value=!1,console.log(_.$refs),Object.assign(_.$refs.container.style,{backgroundImage:`url(${b})`})},r.onerror=function(){a.value=!0}};return{show_animate:s,currentComp:n,load_bol:a,navChange:l}}}),F=e=>(f("data-v-c9b5acae"),e=e(),h(),e),ae={class:"container",ref:"container"},oe={key:1},_e={key:0,class:"book-container"},ie=F(()=>t("img",{class:"book",src:te,alt:""},null,-1)),re=F(()=>t("div",{class:"wrap"},[t("h3",null,"\u4E2A"),t("h3",null,"\u4EBA"),t("h3",null,"\u4FE1"),t("h3",null,"\u606F")],-1)),ce=[ie,re],le={key:1};function ue(e,s,n,u,_,d){const a=G,l=K;return o(),c("div",ae,[e.load_bol?(o(),m(a,{key:0,class:"pos-center"})):(o(),c("div",oe,[e.show_animate?(o(),c("div",_e,ce)):(o(),c("div",le,[S(l,{onNavChange:e.navChange},null,8,["onNavChange"]),(o(),m(j,null,[(o(),m(x(e.currentComp)))],1024))]))]))],512)}var ge=v(ne,[["render",ue],["__scopeId","data-v-c9b5acae"]]);export{ge as default};
