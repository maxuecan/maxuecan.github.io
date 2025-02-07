var b=(e,t,n)=>new Promise((r,i)=>{var s=_=>{try{d(n.next(_))}catch(o){i(o)}},l=_=>{try{d(n.throw(_))}catch(o){i(o)}},d=_=>_.done?r(_.value):Promise.resolve(_.value).then(s,l);d((n=n.apply(e,t)).next())});import{M as I,f as C,V as w,W as S,P as M,O as T,S as k,a as O,G as E,b as R,C as x,l as F}from"./OrbitControls.cad2edcb.js";import{_ as A,d as P,k as D,l as j,b as U,o as B,p as L,h as W,e as q}from"./platForm.7795e6f1.js";var m=function(){this._tweens={},this._tweensAddedDuringUpdate={}};m.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var n=Object.keys(this._tweens);if(n.length===0)return!1;for(e=e!==void 0?e:a.now();0<n.length;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var i=this._tweens[n[r]];i&&i.update(e)===!1&&(i._isPlaying=!1,t||delete this._tweens[n[r]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var a=new m;a.Group=m,a._nextId=0,a.nextId=function(){return a._nextId++},typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?a.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?a.now=self.performance.now.bind(self.performance):Date.now!==void 0?a.now=Date.now:a.now=function(){return new Date().getTime()},a.Tween=function(e,t){this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=a.Easing.Linear.None,this._interpolationFunction=a.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||a,this._id=a.nextId()},a.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},duration:function(e){return this._duration=e,this},start:function(e){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=e!==void 0?typeof e=="string"?a.now()+parseFloat(e):e:a.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(this._valuesEnd[t].length===0)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}this._object[t]!==void 0&&(this._valuesStart[t]=this._object[t],!(this._valuesStart[t]instanceof Array)&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,this._onStopCallback!==null&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},group:function(e){return this._group=e,this},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,n,r;if(e<this._startTime)return!0;for(t in this._onStartCallbackFired===!1&&(this._onStartCallback!==null&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(e-this._startTime)/this._duration,n=this._duration===0||1<n?1:n,r=this._easingFunction(n),this._valuesEnd)if(this._valuesStart[t]!==void 0){var i=this._valuesStart[t]||0,s=this._valuesEnd[t];s instanceof Array?this._object[t]=this._interpolationFunction(s,r):(typeof s=="string"&&(s=s.charAt(0)==="+"||s.charAt(0)==="-"?i+parseFloat(s):parseFloat(s)),typeof s=="number"&&(this._object[t]=i+(s-i)*r))}if(this._onUpdateCallback!==null&&this._onUpdateCallback(this._object),n!==1)return!0;if(0<this._repeat){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if(typeof this._valuesEnd[t]=="string"&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var l=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=l}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,!0}this._onCompleteCallback!==null&&this._onCompleteCallback(this._object);for(var d=0,_=this._chainedTweens.length;d<_;d++)this._chainedTweens[d].start(this._startTime+this._duration);return!1}},a.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){return e*e*(2.70158*e-1.70158)},Out:function(e){return--e*e*(2.70158*e+1.70158)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((1+t)*e-t)*.5:.5*((e-=2)*e*((1+t)*e+t)+2)}},Bounce:{In:function(e){return 1-a.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*a.Easing.Bounce.In(2*e):.5*a.Easing.Bounce.Out(2*e-1)+.5}}},a.Interpolation={Linear:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),s=a.Interpolation.Utils.Linear;return t<0?s(e[0],e[1],r):1<t?s(e[n],e[n-1],n-r):s(e[i],e[n<i+1?n:i+1],r-i)},Bezier:function(e,t){for(var n=0,r=e.length-1,i=Math.pow,s=a.Interpolation.Utils.Bernstein,l=0;l<=r;l++)n+=i(1-t,r-l)*i(t,l)*e[l]*s(r,l);return n},CatmullRom:function(e,t){var n=e.length-1,r=n*t,i=Math.floor(r),s=a.Interpolation.Utils.CatmullRom;return e[0]===e[n]?(t<0&&(i=Math.floor(r=n*(1+t))),s(e[(i-1+n)%n],e[i],e[(i+1)%n],e[(i+2)%n],r-i)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-r)-e[0]):1<t?e[n]-(s(e[n],e[n],e[n-1],e[n-1],r-n)-e[n]):s(e[i?i-1:0],e[i],e[n<i+1?n:i+1],e[n<i+2?n:i+2],r-i)},Utils:{Linear:function(e,t,n){return(t-e)*n+e},Bernstein:function(e,t){var n=a.Interpolation.Utils.Factorial;return n(e)/n(t)/n(e-t)},Factorial:function(){var e=[1];return function(t){var n=1;if(e[t])return e[t];for(var r=t;1<r;r--)n*=r;return e[t]=n}}(),CatmullRom:function(e,t,n,r,i){var s=.5*(n-e),l=.5*(r-t),d=i*i;return(2*t-2*n+s+l)*(i*d)+(-3*t+3*n-2*s-l)*d+s*i+t}}},function(e){typeof define=="function"&&define.amd?define([],function(){return a}):typeof module!="undefined"&&typeof exports=="object"?module.exports=a:e!==void 0&&(e.TWEEN=a)}(globalThis);const z=e=>(L("data-v-337cf643"),e=e(),W(),e),G={class:"container"},N=z(()=>q("canvas",{id:"my-world"},null,-1)),V=[N],H=P({setup(e){D(()=>b(this,null,function*(){yield j(),n()}));let t;new I({color:16711680,metalness:1,roughness:.5,clearcoat:1,clearcoatRoughness:.03}),new C({color:16777215,metalness:1,roughness:.5}),new I({color:16777215,metalness:.25,roughness\u200C:0,transmission:10});function n(){let o=new x;new w(-20,15,-15);const u=document.getElementById("my-world"),c=r(u);t=i(),s(t,u);let f=l();d(f);let h=[],v=[];function g(){if(_(c)){const p=c.domElement;t.aspect=p.clientWidth/p.clientHeight,t.updateProjectionMatrix()}let y=o.getDelta();for(let p=0;p<h.length;p++)h[p].update(y);a.update();for(let p=0;p<v.length;p++)v[p].update(y);o.getElapsedTime(),new F(0,0),requestAnimationFrame(g),c.render(f,t)}requestAnimationFrame(g)}function r(o){const u=new S({antialias:!0,logarithmicDepthBuffer:!0,canvas:o});return u.shadowMap.enabled=!0,u.setClearColor(0,0),u}function i(o=40,u=window.innerWidth/window.innerHeight,c=.1,f=1e4){let h=new M(o,u,c,f);return h.position.copy(new w(0,0,-5)),h.lookAt(new w(0,0,0)),h}function s(o,u){let c=new T(o,u);return c.target.copy(new w(0,0,0)),c.update(),c}function l(){let o=new k;return o.background=new O("#8ec3ed"),o}function d(o){let u=new URL("/assets/scene.0691b790.gltf",self.location).href,c=new E;c.setDRACOLoader(new R),c.load(u,f=>{let h=f.scene;h.traverse(v=>{v.castShadow=!0,v.receiveShadow=!0}),console.log(f),h.scale.set(1,1,1),h.position.set(0,0,0),o.add(h)})}function _(o){let u=o.domElement,c=window.devicePixelRatio,f=u.clientWidth*c|0,h=u.clientHeight*c|0,v=u.width!==f||u.height!==h;return v&&o.setSize(f,h,!1),v}return(o,u)=>(B(),U("div",G,V))}});var X=A(H,[["__scopeId","data-v-337cf643"]]);export{X as default};
//# sourceMappingURL=index2.bbc7f783.js.map
