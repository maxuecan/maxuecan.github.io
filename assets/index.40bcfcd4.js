import{_ as i,r as d,a as p,d as c,c as f,b as k,e as u,t as r,u as h,s as C,o as b,f as g,g as _}from"./platForm.b93713f8.js";const t=d("admin"),v=p(t),E=()=>{t.value="super admin"},T=c({setup(n,{emit:o}){let l=g(),a=_();function m(){h({password:"adm123",username:"admin"}).then(e=>{a.commit("user/SET_TOKEN",e.token),a.commit("user/SET_ACCOUNT",e.name),C(e.token),l.push({path:"/",query:{name:e.name,token:e.token}})}).catch(()=>{})}let s=f({get:()=>t.value.substring(1),set:e=>{console.log(e),s.value="Welcome"+e}});return{full_name:t,obj_name:v,first_name:s,handleClick:E,pushHome:m}}});function B(n,o,l,a,m,s){return b(),k("div",null,[u("p",null,"hello, "+r(n.full_name)+" "+r(n.obj_name)+" "+r(n.first_name),1),u("button",{onClick:o[0]||(o[0]=(...e)=>n.handleClick&&n.handleClick(...e))},"\u6309\u94AE"),u("button",{onClick:o[1]||(o[1]=(...e)=>n.pushHome&&n.pushHome(...e))},"\u767B\u5F55")])}var $=i(T,[["render",B]]);export{$ as default};
//# sourceMappingURL=index.40bcfcd4.js.map