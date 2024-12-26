var G=(i,e,t)=>new Promise((r,a)=>{var n=s=>{try{h(t.next(s))}catch(l){a(l)}},f=s=>{try{h(t.throw(s))}catch(l){a(l)}},h=s=>s.done?r(s.value):Promise.resolve(s.value).then(n,f);h((t=t.apply(i,e)).next())});/* empty css             */import{_ as Oe,M as De,N as Le,O as Fe,P as Pe,b as x,F as ve,i as pe,J as X,Q as Y,q as C,o as I,e as v,t as w,n as ge,x as E,D as ye,A as be,p as je,h as Me}from"./platForm.712fa1a8.js";/*!
 * Compressor.js v1.2.1
 * https://fengyuanchen.github.io/compressorjs
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2023-02-28T14:09:41.732Z
 */function we(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,r)}return t}function P(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?we(Object(t),!0).forEach(function(r){He(i,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(t,r))})}return i}function We(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function _e(i,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,ke(r.key),r)}}function ze(i,e,t){return e&&_e(i.prototype,e),t&&_e(i,t),Object.defineProperty(i,"prototype",{writable:!1}),i}function He(i,e,t){return e=ke(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function j(){return j=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},j.apply(this,arguments)}function Ne(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var r=t.call(i,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function ke(i){var e=Ne(i,"string");return typeof e=="symbol"?e:String(e)}var Ue={exports:{}};(function(i){typeof window!="undefined"&&function(e){var t=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,r=e.Blob&&function(){try{return Boolean(new Blob)}catch(s){return!1}}(),a=r&&e.Uint8Array&&function(){try{return new Blob([new Uint8Array(100)]).size===100}catch(s){return!1}}(),n=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,f=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,h=(r||n)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(s){var l,c,d,u,m,o,b,p,k;if(l=s.match(f),!l)throw new Error("invalid data URI");for(c=l[2]?l[1]:"text/plain"+(l[3]||";charset=US-ASCII"),d=!!l[4],u=s.slice(l[0].length),d?m=atob(u):m=decodeURIComponent(u),o=new ArrayBuffer(m.length),b=new Uint8Array(o),p=0;p<m.length;p+=1)b[p]=m.charCodeAt(p);return r?new Blob([a?b:o],{type:c}):(k=new n,k.append(o),k.getBlob(c))};e.HTMLCanvasElement&&!t.toBlob&&(t.mozGetAsFile?t.toBlob=function(s,l,c){var d=this;setTimeout(function(){c&&t.toDataURL&&h?s(h(d.toDataURL(l,c))):s(d.mozGetAsFile("blob",l))})}:t.toDataURL&&h&&(t.msToBlob?t.toBlob=function(s,l,c){var d=this;setTimeout(function(){(l&&l!=="image/png"||c)&&t.toDataURL&&h?s(h(d.toDataURL(l,c))):s(d.msToBlob(l))})}:t.toBlob=function(s,l,c){var d=this;setTimeout(function(){s(h(d.toDataURL(l,c)))})})),i.exports?i.exports=h:e.dataURLtoBlob=h}(window)})(Ue);var xe=Ue.exports,Ve=function(e){return typeof Blob=="undefined"?!1:e instanceof Blob||Object.prototype.toString.call(e)==="[object Blob]"},Ce={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},Ge=typeof window!="undefined"&&typeof window.document!="undefined",_=Ge?window:{},M=function(e){return e>0&&e<1/0},Xe=Array.prototype.slice;function q(i){return Array.from?Array.from(i):Xe.call(i)}var Ye=/^image\/.+$/;function J(i){return Ye.test(i)}function Ke(i){var e=J(i)?i.substr(6):"";return e==="jpeg"&&(e="jpg"),".".concat(e)}var Se=String.fromCharCode;function Je(i,e,t){var r="",a;for(t+=e,a=e;a<t;a+=1)r+=Se(i.getUint8(a));return r}var qe=_.btoa;function Ie(i,e){for(var t=[],r=8192,a=new Uint8Array(i);a.length>0;)t.push(Se.apply(null,q(a.subarray(0,r)))),a=a.subarray(r);return"data:".concat(e,";base64,").concat(qe(t.join("")))}function Qe(i){var e=new DataView(i),t;try{var r,a,n;if(e.getUint8(0)===255&&e.getUint8(1)===216)for(var f=e.byteLength,h=2;h+1<f;){if(e.getUint8(h)===255&&e.getUint8(h+1)===225){a=h;break}h+=1}if(a){var s=a+4,l=a+10;if(Je(e,s,4)==="Exif"){var c=e.getUint16(l);if(r=c===18761,(r||c===19789)&&e.getUint16(l+2,r)===42){var d=e.getUint32(l+4,r);d>=8&&(n=l+d)}}}if(n){var u=e.getUint16(n,r),m,o;for(o=0;o<u;o+=1)if(m=n+o*12+2,e.getUint16(m,r)===274){m+=8,t=e.getUint16(m,r),e.setUint16(m,1,r);break}}}catch(b){t=1}return t}function $e(i){var e=0,t=1,r=1;switch(i){case 2:t=-1;break;case 3:e=-180;break;case 4:r=-1;break;case 5:e=90,r=-1;break;case 6:e=90;break;case 7:e=90,t=-1;break;case 8:e=-90;break}return{rotate:e,scaleX:t,scaleY:r}}var Ze=/\.\d*(?:0|9){12}\d*$/;function Be(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e11;return Ze.test(i)?Math.round(i*e)/e:i}function F(i){var e=i.aspectRatio,t=i.height,r=i.width,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none",n=M(r),f=M(t);if(n&&f){var h=t*e;(a==="contain"||a==="none")&&h>r||a==="cover"&&h<r?t=r/e:r=t*e}else n?t=r/e:f&&(r=t*e);return{width:r,height:t}}function et(i){for(var e=q(new Uint8Array(i)),t=e.length,r=[],a=0;a+3<t;){var n=e[a],f=e[a+1];if(n===255&&f===218)break;if(n===255&&f===216)a+=2;else{var h=e[a+2]*256+e[a+3],s=a+h+2,l=e.slice(a,s);r.push(l),a=s}}return r.reduce(function(c,d){return d[0]===255&&d[1]===225?c.concat(d):c},[])}function tt(i,e){var t=q(new Uint8Array(i));if(t[2]!==255||t[3]!==224)return i;var r=t[4]*256+t[5],a=[255,216].concat(e,t.slice(4+r));return new Uint8Array(a)}var rt=_.ArrayBuffer,K=_.FileReader,B=_.URL||_.webkitURL,it=/\.\w+$/,at=_.Compressor,nt=function(){function i(e,t){We(this,i),this.file=e,this.exif=[],this.image=new Image,this.options=P(P({},Ce),t),this.aborted=!1,this.result=null,this.init()}return ze(i,[{key:"init",value:function(){var t=this,r=this.file,a=this.options;if(!Ve(r)){this.fail(new Error("The first argument must be a File or Blob object."));return}var n=r.type;if(!J(n)){this.fail(new Error("The first argument must be an image File or Blob object."));return}if(!B||!K){this.fail(new Error("The current browser does not support image compression."));return}rt||(a.checkOrientation=!1,a.retainExif=!1);var f=n==="image/jpeg",h=f&&a.checkOrientation,s=f&&a.retainExif;if(B&&!h&&!s)this.load({url:B.createObjectURL(r)});else{var l=new K;this.reader=l,l.onload=function(c){var d=c.target,u=d.result,m={},o=1;h&&(o=Qe(u),o>1&&j(m,$e(o))),s&&(t.exif=et(u)),h||s?!B||o>1?m.url=Ie(u,n):m.url=B.createObjectURL(r):m.url=u,t.load(m)},l.onabort=function(){t.fail(new Error("Aborted to read the image with FileReader."))},l.onerror=function(){t.fail(new Error("Failed to read the image with FileReader."))},l.onloadend=function(){t.reader=null},h||s?l.readAsArrayBuffer(r):l.readAsDataURL(r)}}},{key:"load",value:function(t){var r=this,a=this.file,n=this.image;n.onload=function(){r.draw(P(P({},t),{},{naturalWidth:n.naturalWidth,naturalHeight:n.naturalHeight}))},n.onabort=function(){r.fail(new Error("Aborted to load the image."))},n.onerror=function(){r.fail(new Error("Failed to load the image."))},_.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(_.navigator.userAgent)&&(n.crossOrigin="anonymous"),n.alt=a.name,n.src=t.url}},{key:"draw",value:function(t){var r=this,a=t.naturalWidth,n=t.naturalHeight,f=t.rotate,h=f===void 0?0:f,s=t.scaleX,l=s===void 0?1:s,c=t.scaleY,d=c===void 0?1:c,u=this.file,m=this.image,o=this.options,b=document.createElement("canvas"),p=b.getContext("2d"),k=Math.abs(h)%180===90,W=(o.resize==="contain"||o.resize==="cover")&&M(o.width)&&M(o.height),A=Math.max(o.maxWidth,0)||1/0,T=Math.max(o.maxHeight,0)||1/0,R=Math.max(o.minWidth,0)||0,O=Math.max(o.minHeight,0)||0,U=a/n,g=o.width,y=o.height;if(k){var Q=[T,A];A=Q[0],T=Q[1];var $=[O,R];R=$[0],O=$[1];var Z=[y,g];g=Z[0],y=Z[1]}W&&(U=g/y);var ee=F({aspectRatio:U,width:A,height:T},"contain");A=ee.width,T=ee.height;var te=F({aspectRatio:U,width:R,height:O},"cover");if(R=te.width,O=te.height,W){var re=F({aspectRatio:U,width:g,height:y},o.resize);g=re.width,y=re.height}else{var ie=F({aspectRatio:U,width:g,height:y}),ae=ie.width;g=ae===void 0?a:ae;var ne=ie.height;y=ne===void 0?n:ne}g=Math.floor(Be(Math.min(Math.max(g,R),A))),y=Math.floor(Be(Math.min(Math.max(y,O),T)));var Ee=-g/2,Ae=-y/2,Te=g,Re=y,z=[];if(W){var oe=0,se=0,H=a,N=n,le=F({aspectRatio:U,width:a,height:n},{contain:"cover",cover:"contain"}[o.resize]);H=le.width,N=le.height,oe=(a-H)/2,se=(n-N)/2,z.push(oe,se,H,N)}if(z.push(Ee,Ae,Te,Re),k){var ce=[y,g];g=ce[0],y=ce[1]}b.width=g,b.height=y,J(o.mimeType)||(o.mimeType=u.type);var he="transparent";u.size>o.convertSize&&o.convertTypes.indexOf(o.mimeType)>=0&&(o.mimeType="image/jpeg");var ue=o.mimeType==="image/jpeg";if(ue&&(he="#fff"),p.fillStyle=he,p.fillRect(0,0,g,y),o.beforeDraw&&o.beforeDraw.call(this,p,b),!this.aborted&&(p.save(),p.translate(g/2,y/2),p.rotate(h*Math.PI/180),p.scale(l,d),p.drawImage.apply(p,[m].concat(z)),p.restore(),o.drew&&o.drew.call(this,p,b),!this.aborted)){var fe=function(D){if(!r.aborted){var de=function(L){return r.done({naturalWidth:a,naturalHeight:n,result:L})};if(D&&ue&&o.retainExif&&r.exif&&r.exif.length>0){var me=function(L){return de(xe(Ie(tt(L,r.exif),o.mimeType)))};if(D.arrayBuffer)D.arrayBuffer().then(me).catch(function(){r.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var S=new K;r.reader=S,S.onload=function(V){var L=V.target;me(L.result)},S.onabort=function(){r.fail(new Error("Aborted to read the compressed image with FileReader."))},S.onerror=function(){r.fail(new Error("Failed to read the compressed image with FileReader."))},S.onloadend=function(){r.reader=null},S.readAsArrayBuffer(D)}}else de(D)}};b.toBlob?b.toBlob(fe,o.mimeType,o.quality):fe(xe(b.toDataURL(o.mimeType,o.quality)))}}},{key:"done",value:function(t){var r=t.naturalWidth,a=t.naturalHeight,n=t.result,f=this.file,h=this.image,s=this.options;if(B&&h.src.indexOf("blob:")===0&&B.revokeObjectURL(h.src),n)if(s.strict&&!s.retainExif&&n.size>f.size&&s.mimeType===f.type&&!(s.width>r||s.height>a||s.minWidth>r||s.minHeight>a||s.maxWidth<r||s.maxHeight<a))n=f;else{var l=new Date;n.lastModified=l.getTime(),n.lastModifiedDate=l,n.name=f.name,n.name&&n.type!==f.type&&(n.name=n.name.replace(it,Ke(n.type)))}else n=f;this.result=n,s.success&&s.success.call(this,n)}},{key:"fail",value:function(t){var r=this.options;if(r.error)r.error.call(this,t);else throw t}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=at,i}},{key:"setDefaults",value:function(t){j(Ce,t)}}]),i}();const ot={props:{articleId:{type:String},emptyText:{type:String,default:"\u671F\u5F85\u4F60\u7684\u8BC4\u8BBA\uFF01"},buttonText:{type:String,default:"\u8BC4\u8BBA"},contentLength:{type:Number,default:150},placeholderText:{type:String,default:"\u8BF7\u8F93\u5165\u6700\u591A150\u5B57\u7684\u8BC4\u8BBA..."}},data(){return{comments:[{_id:"first0",date:"2022.09.01",username:"\u5B64\u57CE\u6D6A\u4EBA",userId:"1",avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",favour:["1","2","3"],content:"666",replyInfo:[{_id:"sec0",date:"2022.09.01",replyName:"\u5B64\u57CE\u6D6A\u4EBA",username:"\u5B64\u57CE\u6D6A\u4EBA",userId:"1",favour:["2","3","4"],avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",content:"\u535A\u4E3B\u5389\u5BB3\u4E86"}]}],context:"",replyContext:"",isShowSec:"",isClickId:"",userId:"1",username:"\u5B64\u57CE\u6D6A\u4EBA",firstIdx:1,secIdx:1,avatarUrl:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}},created(){},mounted(){this.$nextTick(()=>{let i=new URL("/assets/test.ffd9d0cd.png",self.location).href;console.log(i),console.log(nt(i,{maxWidth:640,maxHeight:640}))})},methods:{handleClick(){this.$refs.avatar.click()},dealWithdAvatar(i){const e=Array.prototype.slice.call(i.target.files)[0];console.log(e)},getCommentList(){return G(this,null,function*(){var i,e;try{this.comments=[];let t="";this.articleId=="messageBoard"?t="messageBoard":t=this.articleId;const r=yield this.$api.getCommentsOfArticle({id:t});this.comments=r.data.comments,this.username=(i=r.data.user)==null?void 0:i.username,this.avatarUrl=(e=r.data.user)==null?void 0:e.avatarUrl}catch(t){this.$message.error(t)}})},giveALike(i,e){var t;try{if((t=i.favour)!=null&&t.includes(this.userId)){this.$message.info("\u60A8\u5DF2\u7ECF\u70B9\u8FC7\u8D5E\u5566\uFF01");return}i.replyName,i.favour.push(this.userId)}catch(r){this.$message.error(r)}},isShowSecReply(i){i?(this.isShowSec=i,this.isClickId===this.isShowSec?this.isShowSec="":this.isShowSec=i,this.isClickId=this.isShowSec):this.isShowSec=this.isClickId=""},deleteComment(i,e){if(e){const t=this.comments.find(r=>r._id==i).replyInfo;for(let r=0;r<t.length;r++)if(t[r]._id==e){t.splice(r,1);break}}else for(let t=0;t<this.comments.length;t++)this.comments[t]._id==i&&this.comments.splice(t,1)},addComment(i,e){return G(this,null,function*(){let t={};if(e){if(!this.replyContext){this.$message.warning("\u8BC4\u8BBA\u6216\u7559\u8A00\u4E0D\u80FD\u4E3A\u7A7A\u54E6\uFF01");return}t.data={username:this.username,userId:this.userId,avatarUrl:this.avatarUrl,_id:"sec"+this.secIdx++,replyName:e,date:"2022.09.01",favour:[],content:this.replyContext};const r=this.comments.find(a=>a._id==i);r.replyInfo||(r.replyInfo=[]),r.replyInfo.push(t.data),this.replyContext=""}else{if(!this.context){this.$message.warning("\u8BC4\u8BBA\u6216\u7559\u8A00\u4E0D\u80FD\u4E3A\u7A7A\u54E6\uFF01");return}t.data={username:this.username,avatarUrl:this.avatarUrl,userId:this.userId,_id:"first"+this.firstIdx++,date:"2022.09.01",articleId:this.articleId,favour:[],content:this.context},this.comments.push(t.data),this.context=""}this.isShowSec=this.isClickId=""})}}},st=i=>(je("data-v-9c50dce2"),i=i(),Me(),i),lt={class:"comment"},ct={class:"first-comment"},ht={class:"content"},ut={class:"comment-right"},ft=["onClick"],dt=["onClick"],mt=["onClick"],vt={class:"reply-comment"},pt=E("\u56DE\u590D"),gt={class:"content"},yt={class:"to_reply"},bt=E(" \u56DE\u590D "),wt={class:"to_reply"},_t=E(": "),xt={class:"comment-right"},Ct=["onClick"],It=["onClick"],Bt=["onClick"],kt={class:"reply-comment"},Ut=E("\u56DE\u590D"),St=st(()=>v("input",{type:"file",id:"videoFileInput",accept:".webm"},null,-1));function Et(i,e,t,r,a,n){const f=De,h=Le,s=Fe,l=Pe;return I(),x("div",lt,[(I(!0),x(ve,null,pe(a.comments,(c,d)=>(I(),x("div",{class:"comment-body",key:c._id+""+d},[v("div",ct,[C(f,{size:40,src:c.avatarUrl},null,8,["src"]),v("div",ht,[v("h3",null,w(c.username),1),v("span",null,w(c.date),1),v("p",null,w(c.content),1),v("div",ut,[v("i",{class:ge(["el-icon-trophy",c.favour.includes(a.userId)?"active":""]),onClick:u=>n.giveALike(c,c._id)},null,10,ft),E(" "+w(c.favour.length||0)+" ",1),v("i",{class:"el-icon-chat-dot-round",onClick:u=>n.isShowSecReply(c._id)},"\u56DE\u590D",8,dt),a.userId===c.userId?(I(),x("i",{key:0,class:"el-icon-delete",onClick:u=>n.deleteComment(c._id,void 0)},"\u5220\u9664",8,mt)):ye("",!0)]),X(v("div",vt,[C(h,{placeholder:t.placeholderText,class:"input",modelValue:a.replyContext,"onUpdate:modelValue":e[0]||(e[0]=u=>a.replyContext=u),modelModifiers:{trim:!0},maxlength:t.contentLength},null,8,["placeholder","modelValue","maxlength"]),C(s,{type:"info",size:"mini",class:"reply-button",onClick:u=>n.addComment(c._id,c.username)},{default:be(()=>[pt]),_:2},1032,["onClick"])],512),[[Y,a.isShowSec===c._id]]),(I(!0),x(ve,null,pe(c.replyInfo,(u,m)=>(I(),x("div",{class:"second-comment",key:u._id+""+m},[C(f,{size:40,src:u.avatarUrl},null,8,["src"]),v("div",gt,[v("h3",null,w(u.username),1),v("span",null,w(u.date),1),v("span",yt,w(u.username),1),bt,v("span",wt,w(u.replyName),1),_t,v("p",null,w(u.content),1),v("div",xt,[v("i",{class:ge(["el-icon-trophy",u.favour.includes(a.userId)?"active":""]),onClick:o=>n.giveALike(u,c._id)},null,10,Ct),E(" "+w(u.favour?u.favour.length:0)+" ",1),v("i",{class:"el-icon-chat-dot-round",onClick:o=>n.isShowSecReply(u._id)},"\u56DE\u590D",8,It),a.userId===u.userId?(I(),x("i",{key:0,class:"el-icon-delete",onClick:o=>n.deleteComment(c._id,u._id)},"\u5220\u9664",8,Bt)):ye("",!0)]),X(v("div",kt,[C(h,{placeholder:t.placeholderText,class:"input",modelValue:a.replyContext,"onUpdate:modelValue":e[1]||(e[1]=o=>a.replyContext=o),modelModifiers:{trim:!0},maxlength:t.contentLength},null,8,["placeholder","modelValue","maxlength"]),C(s,{type:"info",size:"mini",class:"reply-button",onClick:o=>n.addComment(c._id,u.username)},{default:be(()=>[Ut]),_:2},1032,["onClick"])],512),[[Y,a.isShowSec===u._id]])])]))),128))])])]))),128)),X(C(l,{description:t.emptyText},null,8,["description"]),[[Y,a.comments.length===0]]),St])}var Dt=Oe(ot,[["render",Et],["__scopeId","data-v-9c50dce2"]]);export{Dt as default};
