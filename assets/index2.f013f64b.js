var we=(n,e,t)=>new Promise((r,s)=>{var i=a=>{try{c(t.next(a))}catch(u){s(u)}},o=a=>{try{c(t.throw(a))}catch(u){s(u)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(i,o);c((t=t.apply(n,e)).next())});import{L as Ve,a as z,F as Ne,C as H,S as Ke,P as Ce,D as Xe,M as q,s as J,b as V,V as U,c as k,I as qe,O as Oe,T as Fe,d as We,B as ae,e as Ye,f as ne,g as Pe,R as pe,h as Qe,i as ce,j as Ze,k as ke,l as me,m as Je,n as $e,o as et,p as Z,q as tt,r as nt,t as st,u as it,G as te,v as De,w as rt,x as ot,y as at,z as Ge,A as ct,E as ut,H as Ue,J as se,Q as He,N as lt,K as dt,U as ht,W as ft,X as pt,Y as mt,Z as gt,_ as Tt,$ as _t,a0 as ye,a1 as xt,a2 as vt,a3 as Re,a4 as wt,a5 as yt,a6 as Rt,a7 as Et,a8 as At,a9 as $,aa as ue,ab as ee,ac as Lt,ad as le,ae as St,af as bt,ag as Ee,ah as Mt,ai as It,aj as Nt,ak as Ct,al as Ot,am as de,an as Ft,ao as Pt,ap as kt,aq as Dt,ar as Gt,as as Ut,at as Ht}from"./OrbitControls.d8c69fef.js";import{_ as jt,d as Bt,k as zt,l as Vt,b as Kt,o as Xt,p as qt,h as Wt,e as Yt}from"./platForm.da158ce1.js";class Qt extends Ve{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tn(t)}),this.register(function(t){return new un(t)}),this.register(function(t){return new ln(t)}),this.register(function(t){return new sn(t)}),this.register(function(t){return new rn(t)}),this.register(function(t){return new on(t)}),this.register(function(t){return new an(t)}),this.register(function(t){return new en(t)}),this.register(function(t){return new cn(t)}),this.register(function(t){return new nn(t)}),this.register(function(t){return new Jt(t)}),this.register(function(t){return new dn(t)}),this.register(function(t){return new hn(t)})}load(e,t,r,s){const i=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=z.extractUrlBase(e),this.manager.itemStart(e);const c=function(u){s?s(u):console.error(u),i.manager.itemError(e),i.manager.itemEnd(e)},a=new Ne(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(u){try{i.parse(u,o,function(d){t(d),i.manager.itemEnd(e)},c)}catch(d){c(d)}},r,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,s){let i;const o={},c={};if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(z.decodeText(new Uint8Array(e,0,4))===je){try{o[S.KHR_BINARY_GLTF]=new fn(e)}catch(d){s&&s(d);return}i=JSON.parse(o[S.KHR_BINARY_GLTF].content)}else i=JSON.parse(z.decodeText(new Uint8Array(e)));else i=e;if(i.asset===void 0||i.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const a=new Ln(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](a);c[d.name]=d,o[d.name]=!0}if(i.extensionsUsed)for(let u=0;u<i.extensionsUsed.length;++u){const d=i.extensionsUsed[u],l=i.extensionsRequired||[];switch(d){case S.KHR_MATERIALS_UNLIT:o[d]=new $t;break;case S.KHR_DRACO_MESH_COMPRESSION:o[d]=new pn(i,this.dracoLoader);break;case S.KHR_TEXTURE_TRANSFORM:o[d]=new mn;break;case S.KHR_MESH_QUANTIZATION:o[d]=new gn;break;default:l.indexOf(d)>=0&&c[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}a.setExtensions(o),a.setPlugins(c),a.parse(r,s)}parseAsync(e,t){const r=this;return new Promise(function(s,i){r.parse(e,t,s,i)})}}function Zt(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const S={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jt{constructor(e){this.parser=e,this.name=S.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,s=t.length;r<s;r++){const i=t[r];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let s=t.cache.get(r);if(s)return s;const i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let u;const d=new H(16777215);a.color!==void 0&&d.fromArray(a.color);const l=a.range!==void 0?a.range:0;switch(a.type){case"directional":u=new Xe(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Ce(d),u.distance=l;break;case"spot":u=new Ke(d),u.distance=l,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,u.angle=a.spot.outerConeAngle,u.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return u.position.set(0,0,0),u.decay=2,B(u,a),a.intensity!==void 0&&(u.intensity=a.intensity),u.name=t.createUniqueName(a.name||"light_"+e),s=Promise.resolve(u),t.cache.add(r,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,i=r.json.nodes[e],c=(i.extensions&&i.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(a){return r._getNodeRef(t.cache,c,a)})}}class $t{constructor(){this.name=S.KHR_MATERIALS_UNLIT}getMaterialType(){return q}extendParams(e,t,r){const s=[];e.color=new H(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const o=i.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}i.baseColorTexture!==void 0&&s.push(r.assignTexture(e,"map",i.baseColorTexture,J))}return Promise.all(s)}}class en{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class tn{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&i.push(r.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&i.push(r.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(i.push(r.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new U(c,c)}return Promise.all(i)}}class nn{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&i.push(r.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&i.push(r.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(i)}}class sn{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_SHEEN}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new H(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&i.push(r.assignTexture(t,"sheenColorMap",o.sheenColorTexture,J)),o.sheenRoughnessTexture!==void 0&&i.push(r.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(i)}}class rn{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&i.push(r.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(i)}}class on{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_VOLUME}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&i.push(r.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new H(c[0],c[1],c[2]),Promise.all(i)}}class an{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_IOR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class cn{constructor(e){this.parser=e,this.name=S.KHR_MATERIALS_SPECULAR}getMaterialType(e){const r=this.parser.json.materials[e];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&i.push(r.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new H(c[0],c[1],c[2]),o.specularColorTexture!==void 0&&i.push(r.assignTexture(t,"specularColorMap",o.specularColorTexture,J)),Promise.all(i)}}class un{constructor(e){this.parser=e,this.name=S.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,o)}}class ln{constructor(e){this.parser=e,this.name=S.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,s=r.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const o=i.extensions[t],c=s.images[o.source];let a=r.textureLoader;if(c.uri){const u=r.options.manager.getHandler(c.uri);u!==null&&(a=u)}return this.detectSupport().then(function(u){if(u)return r.loadTextureImage(e,o.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dn{constructor(e){this.name=S.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const s=r.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(c){const a=s.byteOffset||0,u=s.byteLength||0,d=s.count,l=s.byteStride,h=new Uint8Array(c,a,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,l,h,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(d*l);return o.decodeGltfBuffer(new Uint8Array(m),d,l,h,s.mode,s.filter),m})})}else return null}}class hn{constructor(e){this.name=S.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const s=t.meshes[r.mesh];for(const u of s.primitives)if(u.mode!==D.TRIANGLES&&u.mode!==D.TRIANGLE_STRIP&&u.mode!==D.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=r.extensions[this.name].attributes,c=[],a={};for(const u in o)c.push(this.parser.getDependency("accessor",o[u]).then(d=>(a[u]=d,a[u])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(u=>{const d=u.pop(),l=d.isGroup?d.children:[d],h=u[0].count,m=[];for(const A of l){const E=new se,R=new k,w=new He,M=new k(1,1,1),g=new qe(A.geometry,A.material,h);for(let v=0;v<h;v++)a.TRANSLATION&&R.fromBufferAttribute(a.TRANSLATION,v),a.ROTATION&&w.fromBufferAttribute(a.ROTATION,v),a.SCALE&&M.fromBufferAttribute(a.SCALE,v),g.setMatrixAt(v,E.compose(R,w,M));for(const v in a)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&A.geometry.setAttribute(v,a[v]);Oe.prototype.copy.call(g,A),g.frustumCulled=!1,this.parser.assignFinalMaterial(g),m.push(g)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const je="glTF",Y=12,Ae={JSON:1313821514,BIN:5130562};class fn{constructor(e){this.name=S.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Y);if(this.header={magic:z.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==je)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Y,s=new DataView(e,Y);let i=0;for(;i<r;){const o=s.getUint32(i,!0);i+=4;const c=s.getUint32(i,!0);if(i+=4,c===Ae.JSON){const a=new Uint8Array(e,Y+i,o);this.content=z.decodeText(a)}else if(c===Ae.BIN){const a=Y+i;this.body=e.slice(a,a+o)}i+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pn{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=S.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,s=this.dracoLoader,i=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},a={},u={};for(const d in o){const l=ge[d]||d.toLowerCase();c[l]=o[d]}for(const d in e.attributes){const l=ge[d]||d.toLowerCase();if(o[d]!==void 0){const h=r.accessors[e.attributes[d]],m=W[h.componentType];u[l]=m.name,a[l]=h.normalized===!0}}return t.getDependency("bufferView",i).then(function(d){return new Promise(function(l){s.decodeDracoFile(d,function(h){for(const m in h.attributes){const A=h.attributes[m],E=a[m];E!==void 0&&(A.normalized=E)}l(h)},c,u)})})}}class mn{constructor(){this.name=S.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class gn{constructor(){this.name=S.KHR_MESH_QUANTIZATION}}class Be extends Et{constructor(e,t,r,s){super(e,t,r,s)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,i=e*s*3+s;for(let o=0;o!==s;o++)t[o]=r[i+o];return t}interpolate_(e,t,r,s){const i=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=c*2,u=c*3,d=s-t,l=(r-t)/d,h=l*l,m=h*l,A=e*u,E=A-u,R=-2*m+3*h,w=m-h,M=1-R,g=w-h+l;for(let v=0;v!==c;v++){const b=o[E+v+c],p=o[E+v+a]*d,f=o[A+v+c],x=o[A+v]*d;i[v]=M*b+g*p+R*f+w*x}return i}}const Tn=new He;class _n extends Be{interpolate_(e,t,r,s){const i=super.interpolate_(e,t,r,s);return Tn.fromArray(i).normalize().toArray(i),i}}const D={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},W={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Le={9728:lt,9729:ne,9984:dt,9985:ht,9986:ft,9987:Pe},Se={33071:pt,33648:mt,10497:pe},he={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ge={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},j={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xn={CUBICSPLINE:void 0,LINEAR:Ge,STEP:gt},fe={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vn(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tt})),n.DefaultMaterial}function Q(n,e,t){for(const r in t.extensions)n[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function B(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wn(n,e,t){let r=!1,s=!1,i=!1;for(let u=0,d=e.length;u<d;u++){const l=e[u];if(l.POSITION!==void 0&&(r=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(i=!0),r&&s&&i)break}if(!r&&!s&&!i)return Promise.resolve(n);const o=[],c=[],a=[];for(let u=0,d=e.length;u<d;u++){const l=e[u];if(r){const h=l.POSITION!==void 0?t.getDependency("accessor",l.POSITION):n.attributes.position;o.push(h)}if(s){const h=l.NORMAL!==void 0?t.getDependency("accessor",l.NORMAL):n.attributes.normal;c.push(h)}if(i){const h=l.COLOR_0!==void 0?t.getDependency("accessor",l.COLOR_0):n.attributes.color;a.push(h)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(a)]).then(function(u){const d=u[0],l=u[1],h=u[2];return r&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=l),i&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function yn(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let r=0,s=t.length;r<s;r++)n.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rn(n){const e=n.extensions&&n.extensions[S.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+be(e.attributes):t=n.indices+":"+be(n.attributes)+":"+n.mode,t}function be(n){let e="";const t=Object.keys(n).sort();for(let r=0,s=t.length;r<s;r++)e+=t[r]+":"+n[t[r]]+";";return e}function Te(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function En(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const An=new se;class Ln{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zt,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,s=!1,i=-1;typeof navigator!="undefined"&&(r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,i=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||r||s&&i<98?this.textureLoader=new Fe(this.options.manager):this.textureLoader=new We(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ne(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,s=this.json,i=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(o){const c={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:r,userData:{}};Q(i,c,s),B(c,s),Promise.all(r._invokeAll(function(a){return a.afterRoot&&a.afterRoot(c)})).then(function(){e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let s=0,i=t.length;s<i;s++){const o=t[s].joints;for(let c=0,a=o.length;c<a;c++)e[o[c]].isBone=!0}for(let s=0,i=e.length;s<i;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(r[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const s=r.clone(),i=(o,c)=>{const a=this.associations.get(o);a!=null&&this.associations.set(c,a);for(const[u,d]of o.children.entries())i(d,c.children[u])};return i(r,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const s=e(t[r]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let s=0;s<t.length;s++){const i=e(t[s]);i&&r.push(i)}return r}getDependency(e,t){const r=e+":"+t;let s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":s=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(r,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(i,o){return r.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[S.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(i,o){r.load(z.resolveURL(t.uri,s.path),i,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const s=t.byteLength||0,i=t.byteOffset||0;return r.slice(i,i+s)})}loadAccessor(e){const t=this,r=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=he[s.type],c=W[s.componentType],a=s.normalized===!0,u=new c(s.count*o);return Promise.resolve(new ae(u,o,a))}const i=[];return s.bufferView!==void 0?i.push(this.getDependency("bufferView",s.bufferView)):i.push(null),s.sparse!==void 0&&(i.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(i).then(function(o){const c=o[0],a=he[s.type],u=W[s.componentType],d=u.BYTES_PER_ELEMENT,l=d*a,h=s.byteOffset||0,m=s.bufferView!==void 0?r.bufferViews[s.bufferView].byteStride:void 0,A=s.normalized===!0;let E,R;if(m&&m!==l){const w=Math.floor(h/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+w+":"+s.count;let g=t.cache.get(M);g||(E=new u(c,w*m,s.count*m/d),g=new Ye(E,m/d),t.cache.add(M,g)),R=new _t(g,a,h%m/d,A)}else c===null?E=new u(s.count*a):E=new u(c,h,s.count*a),R=new ae(E,a,A);if(s.sparse!==void 0){const w=he.SCALAR,M=W[s.sparse.indices.componentType],g=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new M(o[1],g,s.sparse.count*w),p=new u(o[2],v,s.sparse.count*a);c!==null&&(R=new ae(R.array.slice(),R.itemSize,R.normalized));for(let f=0,x=b.length;f<x;f++){const T=b[f];if(R.setX(T,p[f*a]),a>=2&&R.setY(T,p[f*a+1]),a>=3&&R.setZ(T,p[f*a+2]),a>=4&&R.setW(T,p[f*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return R})}loadTexture(e){const t=this.json,r=this.options,i=t.textures[e].source,o=t.images[i];let c=this.textureLoader;if(o.uri){const a=r.manager.getHandler(o.uri);a!==null&&(c=a)}return this.loadTextureImage(e,i,c)}loadTextureImage(e,t,r){const s=this,i=this.json,o=i.textures[e],c=i.images[t],a=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const u=this.loadImageSource(t,r).then(function(d){d.flipY=!1,d.name=o.name||c.name||"";const h=(i.samplers||{})[o.sampler]||{};return d.magFilter=Le[h.magFilter]||ne,d.minFilter=Le[h.minFilter]||Pe,d.wrapS=Se[h.wrapS]||pe,d.wrapT=Se[h.wrapT]||pe,s.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[a]=u,u}loadImageSource(e,t){const r=this,s=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(l=>l.clone());const o=s.images[e],c=self.URL||self.webkitURL;let a=o.uri||"",u=!1;if(o.bufferView!==void 0)a=r.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:o.mimeType});return a=c.createObjectURL(h),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(a).then(function(l){return new Promise(function(h,m){let A=h;t.isImageBitmapLoader===!0&&(A=function(E){const R=new ye(E);R.needsUpdate=!0,h(R)}),t.load(z.resolveURL(l,i.path),A,void 0,m)})}).then(function(l){return u===!0&&c.revokeObjectURL(a),l.userData.mimeType=o.mimeType||En(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),l});return this.sourceCache[e]=d,d}assignTexture(e,t,r,s){const i=this;return this.getDependency("texture",r.index).then(function(o){if(!o)return null;if(r.texCoord!==void 0&&r.texCoord!=0&&!(t==="aoMap"&&r.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+r.texCoord+" for texture "+t+" not yet supported."),i.extensions[S.KHR_TEXTURE_TRANSFORM]){const c=r.extensions!==void 0?r.extensions[S.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const a=i.associations.get(o);o=i.extensions[S.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),i.associations.set(o,a)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const s=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+r.uuid;let a=this.cache.get(c);a||(a=new Qe,ce.prototype.copy.call(a,r),a.color.copy(r.color),a.map=r.map,a.sizeAttenuation=!1,this.cache.add(c,a)),r=a}else if(e.isLine){const c="LineBasicMaterial:"+r.uuid;let a=this.cache.get(c);a||(a=new Ze,ce.prototype.copy.call(a,r),a.color.copy(r.color),this.cache.add(c,a)),r=a}if(s||i||o){let c="ClonedMaterial:"+r.uuid+":";s&&(c+="derivative-tangents:"),i&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let a=this.cache.get(c);a||(a=r.clone(),i&&(a.vertexColors=!0),o&&(a.flatShading=!0),s&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(c,a),this.associations.set(a,this.associations.get(r))),r=a}r.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=r}getMaterialType(){return ke}loadMaterial(e){const t=this,r=this.json,s=this.extensions,i=r.materials[e];let o;const c={},a=i.extensions||{},u=[];if(a[S.KHR_MATERIALS_UNLIT]){const l=s[S.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(c,i,t))}else{const l=i.pbrMetallicRoughness||{};if(c.color=new H(1,1,1),c.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;c.color.fromArray(h),c.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(t.assignTexture(c,"map",l.baseColorTexture,J)),c.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,c.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(c,"metalnessMap",l.metallicRoughnessTexture)),u.push(t.assignTexture(c,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,c)})))}i.doubleSided===!0&&(c.side=me);const d=i.alphaMode||fe.OPAQUE;if(d===fe.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===fe.MASK&&(c.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&o!==q&&(u.push(t.assignTexture(c,"normalMap",i.normalTexture)),c.normalScale=new U(1,1),i.normalTexture.scale!==void 0)){const l=i.normalTexture.scale;c.normalScale.set(l,l)}return i.occlusionTexture!==void 0&&o!==q&&(u.push(t.assignTexture(c,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&o!==q&&(c.emissive=new H().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&o!==q&&u.push(t.assignTexture(c,"emissiveMap",i.emissiveTexture,J)),Promise.all(u).then(function(){const l=new o(c);return i.name&&(l.name=i.name),B(l,i),t.associations.set(l,{materials:e}),i.extensions&&Q(s,l,i),l})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");let r=t;for(let s=1;this.nodeNamesUsed[r];++s)r=t+"_"+s;return this.nodeNamesUsed[r]=!0,r}loadGeometries(e){const t=this,r=this.extensions,s=this.primitiveCache;function i(c){return r[S.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(a){return Me(a,c,t)})}const o=[];for(let c=0,a=e.length;c<a;c++){const u=e[c],d=Rn(u),l=s[d];if(l)o.push(l.promise);else{let h;u.extensions&&u.extensions[S.KHR_DRACO_MESH_COMPRESSION]?h=i(u):h=Me(new $e,u,t),s[d]={primitive:u,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,r=this.json,s=this.extensions,i=r.meshes[e],o=i.primitives,c=[];for(let a=0,u=o.length;a<u;a++){const d=o[a].material===void 0?vn(this.cache):this.getDependency("material",o[a].material);c.push(d)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(a){const u=a.slice(0,a.length-1),d=a[a.length-1],l=[];for(let m=0,A=d.length;m<A;m++){const E=d[m],R=o[m];let w;const M=u[m];if(R.mode===D.TRIANGLES||R.mode===D.TRIANGLE_STRIP||R.mode===D.TRIANGLE_FAN||R.mode===void 0)w=i.isSkinnedMesh===!0?new et(E,M):new Z(E,M),w.isSkinnedMesh===!0&&!w.geometry.attributes.skinWeight.normalized&&w.normalizeSkinWeights(),R.mode===D.TRIANGLE_STRIP?w.geometry=Ie(w.geometry,xt):R.mode===D.TRIANGLE_FAN&&(w.geometry=Ie(w.geometry,Ue));else if(R.mode===D.LINES)w=new tt(E,M);else if(R.mode===D.LINE_STRIP)w=new nt(E,M);else if(R.mode===D.LINE_LOOP)w=new st(E,M);else if(R.mode===D.POINTS)w=new it(E,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+R.mode);Object.keys(w.geometry.morphAttributes).length>0&&yn(w,i),w.name=t.createUniqueName(i.name||"mesh_"+e),B(w,i),R.extensions&&Q(s,w,R),t.assignFinalMaterial(w),l.push(w)}for(let m=0,A=l.length;m<A;m++)t.associations.set(l[m],{meshes:e,primitives:m});if(l.length===1)return l[0];const h=new te;t.associations.set(h,{meshes:e});for(let m=0,A=l.length;m<A;m++)h.add(l[m]);return h})}loadCamera(e){let t;const r=this.json.cameras[e],s=r[r.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new De(rt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):r.type==="orthographic"&&(t=new ot(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),B(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let s=0,i=t.joints.length;s<i;s++)r.push(this.getDependency("node",t.joints[s]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(s){const i=s.pop(),o=s,c=[],a=[];for(let u=0,d=o.length;u<d;u++){const l=o[u];if(l){c.push(l);const h=new se;i!==null&&h.fromArray(i.array,u*16),a.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new at(c,a)})}loadAnimation(e){const r=this.json.animations[e],s=[],i=[],o=[],c=[],a=[];for(let u=0,d=r.channels.length;u<d;u++){const l=r.channels[u],h=r.samplers[l.sampler],m=l.target,A=m.node,E=r.parameters!==void 0?r.parameters[h.input]:h.input,R=r.parameters!==void 0?r.parameters[h.output]:h.output;s.push(this.getDependency("node",A)),i.push(this.getDependency("accessor",E)),o.push(this.getDependency("accessor",R)),c.push(h),a.push(m)}return Promise.all([Promise.all(s),Promise.all(i),Promise.all(o),Promise.all(c),Promise.all(a)]).then(function(u){const d=u[0],l=u[1],h=u[2],m=u[3],A=u[4],E=[];for(let w=0,M=d.length;w<M;w++){const g=d[w],v=l[w],b=h[w],p=m[w],f=A[w];if(g===void 0)continue;g.updateMatrix();let x;switch(j[f.path]){case j.weights:x=wt;break;case j.rotation:x=Re;break;case j.position:case j.scale:default:x=vt;break}const T=g.name?g.name:g.uuid,y=p.interpolation!==void 0?xn[p.interpolation]:Ge,_=[];j[f.path]===j.weights?g.traverse(function(C){C.morphTargetInfluences&&_.push(C.name?C.name:C.uuid)}):_.push(T);let N=b.array;if(b.normalized){const C=Te(N.constructor),F=new Float32Array(N.length);for(let I=0,G=N.length;I<G;I++)F[I]=N[I]*C;N=F}for(let C=0,F=_.length;C<F;C++){const I=new x(_[C]+"."+j[f.path],v.array,N,y);p.interpolation==="CUBICSPLINE"&&(I.createInterpolant=function(O){const P=this instanceof Re?_n:Be;return new P(this.times,this.values,this.getValueSize()/3,O)},I.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),E.push(I)}}const R=r.name?r.name:"animation_"+e;return new ct(R,void 0,E)})}createNodeMesh(e){const t=this.json,r=this,s=t.nodes[e];return s.mesh===void 0?null:r.getDependency("mesh",s.mesh).then(function(i){const o=r._getNodeRef(r.meshCache,s.mesh,i);return s.weights!==void 0&&o.traverse(function(c){if(!!c.isMesh)for(let a=0,u=s.weights.length;a<u;a++)c.morphTargetInfluences[a]=s.weights[a]}),o})}loadNode(e){const t=this.json,r=this.extensions,s=this,i=t.nodes[e],o=i.name?s.createUniqueName(i.name):"";return function(){const c=[],a=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});a&&c.push(a),i.camera!==void 0&&c.push(s.getDependency("camera",i.camera).then(function(h){return s._getNodeRef(s.cameraCache,i.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){c.push(h)});const u=[],d=i.children||[];for(let h=0,m=d.length;h<m;h++)u.push(s.getDependency("node",d[h]));const l=i.skin===void 0?Promise.resolve(null):s.getDependency("skin",i.skin);return Promise.all([Promise.all(c),Promise.all(u),l])}().then(function(c){const a=c[0],u=c[1],d=c[2];let l;if(i.isBone===!0?l=new ut:a.length>1?l=new te:a.length===1?l=a[0]:l=new Oe,l!==a[0])for(let h=0,m=a.length;h<m;h++)l.add(a[h]);if(i.name&&(l.userData.name=i.name,l.name=o),B(l,i),i.extensions&&Q(r,l,i),i.matrix!==void 0){const h=new se;h.fromArray(i.matrix),l.applyMatrix4(h)}else i.translation!==void 0&&l.position.fromArray(i.translation),i.rotation!==void 0&&l.quaternion.fromArray(i.rotation),i.scale!==void 0&&l.scale.fromArray(i.scale);s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=e,d!==null&&l.traverse(function(h){!h.isSkinnedMesh||h.bind(d,An)});for(let h=0,m=u.length;h<m;h++)l.add(u[h]);return l})}loadScene(e){const t=this.extensions,r=this.json.scenes[e],s=this,i=new te;r.name&&(i.name=s.createUniqueName(r.name)),B(i,r),r.extensions&&Q(t,i,r);const o=r.nodes||[],c=[];for(let a=0,u=o.length;a<u;a++)c.push(s.getDependency("node",o[a]));return Promise.all(c).then(function(a){for(let d=0,l=a.length;d<l;d++)i.add(a[d]);const u=d=>{const l=new Map;for(const[h,m]of s.associations)(h instanceof ce||h instanceof ye)&&l.set(h,m);return d.traverse(h=>{const m=s.associations.get(h);m!=null&&l.set(h,m)}),l};return s.associations=u(i),i})}}function Sn(n,e,t){const r=e.attributes,s=new yt;if(r.POSITION!==void 0){const c=t.json.accessors[r.POSITION],a=c.min,u=c.max;if(a!==void 0&&u!==void 0){if(s.set(new k(a[0],a[1],a[2]),new k(u[0],u[1],u[2])),c.normalized){const d=Te(W[c.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const c=new k,a=new k;for(let u=0,d=i.length;u<d;u++){const l=i[u];if(l.POSITION!==void 0){const h=t.json.accessors[l.POSITION],m=h.min,A=h.max;if(m!==void 0&&A!==void 0){if(a.setX(Math.max(Math.abs(m[0]),Math.abs(A[0]))),a.setY(Math.max(Math.abs(m[1]),Math.abs(A[1]))),a.setZ(Math.max(Math.abs(m[2]),Math.abs(A[2]))),h.normalized){const E=Te(W[h.componentType]);a.multiplyScalar(E)}c.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}n.boundingBox=s;const o=new Rt;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Me(n,e,t){const r=e.attributes,s=[];function i(o,c){return t.getDependency("accessor",o).then(function(a){n.setAttribute(c,a)})}for(const o in r){const c=ge[o]||o.toLowerCase();c in n.attributes||s.push(i(r[o],c))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(c){n.setIndex(c)});s.push(o)}return B(n,e),Sn(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wn(n,e.targets,t):n})}function Ie(n,e){let t=n.getIndex();if(t===null){const o=[],c=n.getAttribute("position");if(c!==void 0){for(let a=0;a<c.count;a++)o.push(a);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const r=t.count-2,s=[];if(e===Ue)for(let o=1;o<=r;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<r;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==r&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=n.clone();return i.setIndex(s),i}class bn extends At{constructor(e){super(e),this.type=$}parse(e){const c=function(g,v){switch(g){case 1:console.error("THREE.RGBELoader Read Error: "+(v||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(v||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(v||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(v||""))}return-1},l=`
`,h=function(g,v,b){v=v||1024;let f=g.pos,x=-1,T=0,y="",_=String.fromCharCode.apply(null,new Uint16Array(g.subarray(f,f+128)));for(;0>(x=_.indexOf(l))&&T<v&&f<g.byteLength;)y+=_,T+=_.length,f+=128,_+=String.fromCharCode.apply(null,new Uint16Array(g.subarray(f,f+128)));return-1<x?(b!==!1&&(g.pos+=T+x+1),y+_.slice(0,x)):!1},m=function(g){const v=/^#\?(\S+)/,b=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,p=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*FORMAT=(\S+)\s*$/,x=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let y,_;if(g.pos>=g.byteLength||!(y=h(g)))return c(1,"no header found");if(!(_=y.match(v)))return c(3,"bad initial token");for(T.valid|=1,T.programtype=_[1],T.string+=y+`
`;y=h(g),y!==!1;){if(T.string+=y+`
`,y.charAt(0)==="#"){T.comments+=y+`
`;continue}if((_=y.match(b))&&(T.gamma=parseFloat(_[1])),(_=y.match(p))&&(T.exposure=parseFloat(_[1])),(_=y.match(f))&&(T.valid|=2,T.format=_[1]),(_=y.match(x))&&(T.valid|=4,T.height=parseInt(_[1],10),T.width=parseInt(_[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:c(3,"missing image size specifier"):c(3,"missing format specifier")},A=function(g,v,b){const p=v;if(p<8||p>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);if(p!==(g[2]<<8|g[3]))return c(3,"wrong scanline width");const f=new Uint8Array(4*v*b);if(!f.length)return c(4,"unable to allocate buffer space");let x=0,T=0;const y=4*p,_=new Uint8Array(4),N=new Uint8Array(y);let C=b;for(;C>0&&T<g.byteLength;){if(T+4>g.byteLength)return c(1);if(_[0]=g[T++],_[1]=g[T++],_[2]=g[T++],_[3]=g[T++],_[0]!=2||_[1]!=2||(_[2]<<8|_[3])!=p)return c(3,"bad rgbe scanline format");let F=0,I;for(;F<y&&T<g.byteLength;){I=g[T++];const O=I>128;if(O&&(I-=128),I===0||F+I>y)return c(3,"bad scanline data");if(O){const P=g[T++];for(let K=0;K<I;K++)N[F++]=P}else N.set(g.subarray(T,T+I),F),F+=I,T+=I}const G=p;for(let O=0;O<G;O++){let P=0;f[x]=N[O+P],P+=p,f[x+1]=N[O+P],P+=p,f[x+2]=N[O+P],P+=p,f[x+3]=N[O+P],x+=4}C--}return f},E=function(g,v,b,p){const f=g[v+3],x=Math.pow(2,f-128)/255;b[p+0]=g[v+0]*x,b[p+1]=g[v+1]*x,b[p+2]=g[v+2]*x,b[p+3]=1},R=function(g,v,b,p){const f=g[v+3],x=Math.pow(2,f-128)/255;b[p+0]=ee.toHalfFloat(Math.min(g[v+0]*x,65504)),b[p+1]=ee.toHalfFloat(Math.min(g[v+1]*x,65504)),b[p+2]=ee.toHalfFloat(Math.min(g[v+2]*x,65504)),b[p+3]=ee.toHalfFloat(1)},w=new Uint8Array(e);w.pos=0;const M=m(w);if(M!==-1){const g=M.width,v=M.height,b=A(w.subarray(w.pos),g,v);if(b!==-1){let p,f,x;switch(this.type){case ue:x=b.length/4;const T=new Float32Array(x*4);for(let _=0;_<x;_++)E(b,_*4,T,_*4);p=T,f=ue;break;case $:x=b.length/4;const y=new Uint16Array(x*4);for(let _=0;_<x;_++)R(b,_*4,y,_*4);p=y,f=$;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:g,height:v,data:p,header:M.string,gamma:M.gamma,exposure:M.exposure,type:f}}}return null}setDataType(e){return this.type=e,this}load(e,t,r,s){function i(o,c){switch(o.type){case ue:case $:o.encoding=Lt,o.minFilter=ne,o.magFilter=ne,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,c)}return super.load(e,i,r,s)}}var _e=function(){this._tweens={},this._tweensAddedDuringUpdate={}};_e.prototype={getAll:function(){return Object.keys(this._tweens).map(function(n){return this._tweens[n]}.bind(this))},removeAll:function(){this._tweens={}},add:function(n){this._tweens[n.getId()]=n,this._tweensAddedDuringUpdate[n.getId()]=n},remove:function(n){delete this._tweens[n.getId()],delete this._tweensAddedDuringUpdate[n.getId()]},update:function(n,e){var t=Object.keys(this._tweens);if(t.length===0)return!1;for(n=n!==void 0?n:L.now();0<t.length;){this._tweensAddedDuringUpdate={};for(var r=0;r<t.length;r++){var s=this._tweens[t[r]];s&&s.update(n)===!1&&(s._isPlaying=!1,e||delete this._tweens[t[r]])}t=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var L=new _e;L.Group=_e,L._nextId=0,L.nextId=function(){return L._nextId++},typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?L.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?L.now=self.performance.now.bind(self.performance):Date.now!==void 0?L.now=Date.now:L.now=function(){return new Date().getTime()},L.Tween=function(n,e){this._object=n,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=L.Easing.Linear.None,this._interpolationFunction=L.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||L,this._id=L.nextId()},L.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(n,e){return this._valuesEnd=Object.create(n),e!==void 0&&(this._duration=e),this},duration:function(n){return this._duration=n,this},start:function(n){for(var e in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=n!==void 0?typeof n=="string"?L.now()+parseFloat(n):n:L.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(this._valuesEnd[e].length===0)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}this._object[e]!==void 0&&(this._valuesStart[e]=this._object[e],!(this._valuesStart[e]instanceof Array)&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,this._onStopCallback!==null&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var n=0,e=this._chainedTweens.length;n<e;n++)this._chainedTweens[n].stop()},group:function(n){return this._group=n,this},delay:function(n){return this._delayTime=n,this},repeat:function(n){return this._repeat=n,this},repeatDelay:function(n){return this._repeatDelayTime=n,this},yoyo:function(n){return this._yoyo=n,this},easing:function(n){return this._easingFunction=n,this},interpolation:function(n){return this._interpolationFunction=n,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(n){return this._onStartCallback=n,this},onUpdate:function(n){return this._onUpdateCallback=n,this},onComplete:function(n){return this._onCompleteCallback=n,this},onStop:function(n){return this._onStopCallback=n,this},update:function(n){var e,t,r;if(n<this._startTime)return!0;for(e in this._onStartCallbackFired===!1&&(this._onStartCallback!==null&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),t=(n-this._startTime)/this._duration,t=this._duration===0||1<t?1:t,r=this._easingFunction(t),this._valuesEnd)if(this._valuesStart[e]!==void 0){var s=this._valuesStart[e]||0,i=this._valuesEnd[e];i instanceof Array?this._object[e]=this._interpolationFunction(i,r):(typeof i=="string"&&(i=i.charAt(0)==="+"||i.charAt(0)==="-"?s+parseFloat(i):parseFloat(i)),typeof i=="number"&&(this._object[e]=s+(i-s)*r))}if(this._onUpdateCallback!==null&&this._onUpdateCallback(this._object),t!==1)return!0;if(0<this._repeat){for(e in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if(typeof this._valuesEnd[e]=="string"&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var o=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=o}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=n+this._repeatDelayTime:this._startTime=n+this._delayTime,!0}this._onCompleteCallback!==null&&this._onCompleteCallback(this._object);for(var c=0,a=this._chainedTweens.length;c<a;c++)this._chainedTweens[c].start(this._startTime+this._duration);return!1}},L.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(2-Math.pow(2,-10*(n-1)))}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin(5*(n-.1)*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?-.5*Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)+1}},Back:{In:function(n){return n*n*(2.70158*n-1.70158)},Out:function(n){return--n*n*(2.70158*n+1.70158)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?n*n*((1+e)*n-e)*.5:.5*((n-=2)*n*((1+e)*n+e)+2)}},Bounce:{In:function(n){return 1-L.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?.5*L.Easing.Bounce.In(2*n):.5*L.Easing.Bounce.Out(2*n-1)+.5}}},L.Interpolation={Linear:function(n,e){var t=n.length-1,r=t*e,s=Math.floor(r),i=L.Interpolation.Utils.Linear;return e<0?i(n[0],n[1],r):1<e?i(n[t],n[t-1],t-r):i(n[s],n[t<s+1?t:s+1],r-s)},Bezier:function(n,e){for(var t=0,r=n.length-1,s=Math.pow,i=L.Interpolation.Utils.Bernstein,o=0;o<=r;o++)t+=s(1-e,r-o)*s(e,o)*n[o]*i(r,o);return t},CatmullRom:function(n,e){var t=n.length-1,r=t*e,s=Math.floor(r),i=L.Interpolation.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(s=Math.floor(r=t*(1+e))),i(n[(s-1+t)%t],n[s],n[(s+1)%t],n[(s+2)%t],r-s)):e<0?n[0]-(i(n[0],n[0],n[1],n[1],-r)-n[0]):1<e?n[t]-(i(n[t],n[t],n[t-1],n[t-1],r-t)-n[t]):i(n[s?s-1:0],n[s],n[t<s+1?t:s+1],n[t<s+2?t:s+2],r-s)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=L.Interpolation.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var r=e;1<r;r--)t*=r;return n[e]=t}}(),CatmullRom:function(n,e,t,r,s){var i=.5*(t-n),o=.5*(r-e),c=s*s;return(2*e-2*t+i+o)*(s*c)+(-3*e+3*t-2*i-o)*c+i*s+e}}},function(n){typeof define=="function"&&define.amd?define([],function(){return L}):typeof module!="undefined"&&typeof exports=="object"?module.exports=L:n!==void 0&&(n.TWEEN=L)}(globalThis);const Mn=`
#define GLSLIFY 1
varying vec2 vUv;
varying vec3 vPosition;

void main(){
    vec4 modelPosition=modelMatrix*vec4(position,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    gl_Position=projectedPosition;
    
    vUv=uv;
    vPosition=position;
}
`,In=`
#define GLSLIFY 1
//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
  {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
  }

// (sqrt(5) - 1)/4 = F4, used once below
#define F4 0.309016994374947451

float snoise(vec4 v)
  {
  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4
                        0.276393202250021,  // 2 * G4
                        0.414589803375032,  // 3 * G4
                       -0.447213595499958); // -1 + 4 * G4

// First corner
  vec4 i  = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v -   i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
//  i0.x = dot( isX, vec3( 1.0 ) );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  //  x0 = x0 - 0.0 + 0.0 * C.xxxx
  //  x1 = x0 - i1  + 1.0 * C.xxxx
  //  x2 = x0 - i2  + 2.0 * C.xxxx
  //  x3 = x0 - i3  + 3.0 * C.xxxx
  //  x4 = x0 - 1.0 + 4.0 * C.xxxx
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

// Permutations
  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0,   ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }

#define OCTAVES 6

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;
varying vec3 vPosition;

float fbm4d(vec4 p){
    float sum=0.;
    float amp=1.;
    float scale=1.;
    for(int i=0;i<OCTAVES;i++){
        sum+=snoise(p*scale)*amp;
        p.w+=100.;
        amp*=.9;
        scale*=2.;
    }
    return sum;
}

void main(){
    vec4 p=vec4(vPosition*4.,uTime*.025);
    float noise=fbm4d(p);
    vec4 p1=vec4(vPosition*2.,uTime*.25);
    float spot=max(snoise(p1),0.);
    vec4 color=vec4(noise);
    color*=mix(1.,spot,.7);
    gl_FragColor=color;
}
`,Nn=`
#define GLSLIFY 1
mat2 rotation2d(float angle) {
	float s = sin(angle);
	float c = cos(angle);

	return mat2(
		c, -s,
		s, c
	);
}

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(
		oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
    oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
    oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
		0.0,                                0.0,                                0.0,                                1.0
	);
}

vec2 rotate(vec2 v, float angle) {
	return rotation2d(angle) * v;
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	return (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;
}

// https://tympanus.net/codrops/2019/10/29/real-time-multiside-refraction-in-three-steps/
vec3 getEyeVector(mat4 modelMat,vec3 pos,vec3 camPos){
    vec4 worldPosition=modelMat*vec4(pos,1.);
    vec3 eyeVector=normalize(worldPosition.xyz-camPos);
    return eyeVector;
}

const float HALF_PI=1.570796327;

uniform float uTime;
uniform float uVelocity;
uniform float uStagger;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 vLayer3;
varying vec3 vNormal;
varying vec3 vEyeVector;

void main(){
    vec4 modelPosition=modelMatrix*vec4(position,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    gl_Position=projectedPosition;
    
    vec3 pos=position;
    float displacement1=uVelocity*uTime;
    float displacement2=uVelocity*(uTime*1.5+uStagger*1.);
    float displacement3=uVelocity*(uTime*2.+uStagger*2.);
    vec3 xy=vec3(1.,1.,0.);
    vec3 xz=vec3(1.,0.,1.);
    vec3 yz=vec3(0.,1.,1.);
    vec3 layer1=rotate(pos,xy,displacement1);
    vec3 layer2=rotate(pos,xz,displacement2);
    vec3 layer3=rotate(pos,yz,displacement3);
    
    vUv=uv;
    vPosition=position;
    vLayer1=layer1;
    vLayer2=layer2;
    vLayer3=layer3;
    vNormal=normal;
    vEyeVector=getEyeVector(modelMatrix,position,cameraPosition);
}
`,Cn=`
#define GLSLIFY 1
// https://www.shadertoy.com/view/4scSW4
float fresnel(float bias,float scale,float power,vec3 I,vec3 N)
{
    return bias+scale*pow(1.+dot(I,N),power);
}

// https://www.shadertoy.com/view/XlSSzK
vec3 firePalette(float i){
    float T=1400.+1300.*i;// Temperature range (in Kelvin).
    vec3 L=vec3(7.4,5.6,4.4);// Red, green, blue wavelengths (in hundreds of nanometers).
    L=pow(L,vec3(5.))*(exp(1.43876719683e5/(T*L))-1.);
    return 1.-exp(-5e8/L);// Exposure level. Set to "50." For "70," change the "5" to a "7," etc.
}

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform samplerCube uNoiseTexture;
uniform float uBrightness;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vLayer1;
varying vec3 vLayer2;
varying vec3 vLayer3;
varying vec3 vNormal;
varying vec3 vEyeVector;

float layerSum(){
    float sum=0.;
    sum+=textureCube(uNoiseTexture,vLayer1).r;
    sum+=textureCube(uNoiseTexture,vLayer2).r;
    sum+=textureCube(uNoiseTexture,vLayer3).r;
    sum*=uBrightness;
    return sum;
}

void main(){
    float brightness=layerSum();
    brightness=4.*brightness+1.;
    float F=fresnel(0.,1.,2.,vEyeVector,vNormal);
    brightness+=F;
    brightness*=.5;
    vec4 color=vec4(firePalette(brightness),1.);
    gl_FragColor=color;
}
`,On=`
#define GLSLIFY 1
varying vec2 vUv;
varying vec3 vPosition;

void main(){
    vec4 modelPosition=modelMatrix*vec4(position,1.);
    vec4 viewPosition=viewMatrix*modelPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    gl_Position=projectedPosition;
    
    vUv=uv;
    vPosition=position;
}
`,Fn=`
#define GLSLIFY 1

float invert(float n){
    return 1.-n;
}

vec3 invert(vec3 n){
    return 1.-n;
}

// https://www.shadertoy.com/view/XlSSzK
vec3 firePalette(float i){
    float T=1400.+1300.*i;// Temperature range (in Kelvin).
    vec3 L=vec3(7.4,5.6,4.4);// Red, green, blue wavelengths (in hundreds of nanometers).
    L=pow(L,vec3(5.))*(exp(1.43876719683e5/(T*L))-1.);
    return 1.-exp(-5e8/L);// Exposure level. Set to "50." For "70," change the "5" to a "7," etc.
}

uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uResolution;

varying vec2 vUv;
varying vec3 vPosition;

void main(){
    float radial=invert(vPosition.z);
    radial=pow(radial,3.);
    float brightness=(1.+radial*.83)*radial*.4;
    vec3 ringColor=firePalette(brightness);
    vec4 color=vec4(ringColor,radial);
    gl_FragColor=color;
}
`;const Pn=n=>(qt("data-v-3f8d81e6"),n=n(),Wt(),n),kn={class:"container"},Dn=Pn(()=>Yt("canvas",{id:"my-world"},null,-1)),Gn=[Dn],Un=Bt({setup(n){zt(()=>we(this,null,function*(){yield Vt(),s()}));let e,t,r;function s(){let p=new Ht;const f=new k(-20,15,-15),x=document.getElementById("my-world"),T=i(x);e=o(),t=c(e,x);let y=a();A(y);const _=new le({vertexShader:Mn,fragmentShader:In,side:me,uniforms:{uTime:{value:0},uMouse:{value:new U(0,0)},uResolution:{value:new U(window.innerWidth,window.innerHeight)}}}),N=u(_);N.position.copy(new k(0,0,0));const C=new St(256),F=new bt(.1,10,C),I=new Ee;I.add(N);const G=new le({vertexShader:Nn,fragmentShader:Cn,side:me,uniforms:{uTime:{value:0},uMouse:{value:new U(0,0)},uResolution:{value:new U(window.innerWidth,window.innerHeight)},uNoiseTexture:{value:null},uVelocity:{value:.05},uBrightness:{value:.33},uStagger:{value:16}}}),O=d(G);O.position.copy(f),l(O),y.add(O);let P=new Z(new Mt(.1,20,20),new q({color:16711680}));P.position.set(0,10,0),y.add(P);const K=new le({vertexShader:On,fragmentShader:Fn,side:It,uniforms:{uTime:{value:0},uMouse:{value:new U(0,0)},uResolution:{value:new U(window.innerWidth,window.innerHeight)}}}),xe=h(K);xe.position.copy(f),y.add(xe),m(y);let ie=[];g(y,ie);function ve(){if(b(T)){const X=T.domElement;e.aspect=X.clientWidth/X.clientHeight,e.updateProjectionMatrix()}let ze=p.getDelta();for(let X=0;X<ie.length;X++)ie[X].update(ze);L.update();let re=p.getElapsedTime(),oe=new U(0,0);F.update(T,I),_&&G&&(_.uniforms.uTime.value=re,_.uniforms.uMouse.value=oe,G.uniforms.uTime.value=re,G.uniforms.uMouse.value=oe,G.uniforms.uNoiseTexture.value=C.texture,K.uniforms.uTime.value=re,K.uniforms.uMouse.value=oe),requestAnimationFrame(ve),T.render(y,e)}document.addEventListener("click",v,!1),requestAnimationFrame(ve)}function i(p){const f=new Nt({antialias:!0,logarithmicDepthBuffer:!0,canvas:p});return f.shadowMap.enabled=!0,f.setClearColor(0,0),f}function o(p=40,f=window.innerWidth/window.innerHeight,x=.1,T=1e3){let y=new De(p,f,x,T);return y.position.copy(new k(0,10,50)),y.lookAt(new k(0,0,0)),y}function c(p,f){let x=new Ct(p,f);return x.target.copy(new k(0,0,0)),x.update(),x}function a(){let p=new URL("/assets/venice_sunset_1k.0e72ed46.hdr",self.location).href,f=new Ee;return f.background=new H("#000000"),f.environment=new bn().load(p),f.environment.mapping=Ot,f}function u(p){const f=new de(1,100,100);return new Z(f,p)}function d(p){const f=new de(1,100,100);return new Z(f,p)}function l(p){let f=new Ce(new H("#ffffff"),1);f.castShadow=!0,f.intensity=1,p.add(f)}function h(p){const f=new de(1.2,100,100);return new Z(f,p)}function m(p){let f=100,x=new te,T=[new Fe().load(new URL("/assets/cloud.76af7501.png",self.location).href)],y=1;for(let _=0;_<f;_++)for(let N=0;N<1;N++){let C=new Ft(new Pt({map:T[N],transparent:!0,opacity:.5}));C.position.set((Math.random()*2-1)*(y+Math.random()*10),10+Math.random()*(10/5),(Math.random()*2-1)*(3+Math.random()*10)),C.scale.set(5,5,5),y+=.2,x.add(C)}p.add(x)}function A(p){let f=[new URL("/assets/posx.0b453472.jpg",self.location).href,new URL("/assets/negx.ba52c8a0.jpg",self.location).href,new URL("/assets/posy.106f8c18.jpg",self.location).href,new URL("/assets/negy.aebb71ea.jpg",self.location).href,new URL("/assets/posz.46bd2041.jpg",self.location).href,new URL("/assets/negz.8a623aca.jpg",self.location).href],x=new kt;p.background=x.load(f)}let E,R,w,M;function g(p,f){const x=new URL("/assets/people.df1342b1.glb",self.location).href;new Qt().load(x,y=>{E=y.scene,E.castShadow=!0,R=y.animations,p.add(E),M=new Dt(E),f.push(M),w=M.clipAction(R[0]),w.play()})}function v(p){let f=new Gt,x=new U(p.clientX/window.innerWidth*2-1,-(p.clientY/window.innerHeight)*2+1),T=new k(0,1,0),y=new Ut(T,0);f.setFromCamera(x,e);let _=f.ray.intersectPlane(y,T);if(!_)return;let N=new k(E.position.x,0,E.position.z),C=new k(_.x,0,_.z),F=N.distanceTo(C);E.lookAt(_.x,0,_.z),w.getClip()!=R[1]&&(w.fadeOut(.2),w=M.clipAction(R[1]),w.reset().setEffectiveTimeScale(1).setEffectiveWeight(2).fadeIn(.2).play()),r&&L.remove(r),r=new L.Tween(N).to(C,F*800).easing(L.Easing.Linear.None).onComplete(function(){w.fadeOut(.2),w=M.clipAction(R[0]),w.reset().setEffectiveTimeScale(1).setEffectiveWeight(2).fadeIn(.2).play()}).onUpdate(function(){E.position.set(this._object.x,.04,this._object.z);let I=E.position.clone();I.y=1,t.target=I,t.update()}).start()}function b(p){let f=p.domElement,x=window.devicePixelRatio,T=f.clientWidth*x|0,y=f.clientHeight*x|0,_=f.width!==T||f.height!==y;return _&&p.setSize(T,y,!1),_}return(p,f)=>(Xt(),Kt("div",kn,Gn))}});var zn=jt(Un,[["__scopeId","data-v-3f8d81e6"]]);export{zn as default};
