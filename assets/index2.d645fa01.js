var we=(n,t,e)=>new Promise((r,s)=>{var i=a=>{try{c(e.next(a))}catch(u){s(u)}},o=a=>{try{c(e.throw(a))}catch(u){s(u)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(i,o);c((e=e.apply(n,t)).next())});import{L as Ke,a as z,F as Ce,C as H,S as Xe,P as Oe,D as qe,M as X,s as J,b as V,V as U,c as k,I as We,O as Fe,T as Pe,d as Ye,B as ce,e as Qe,f as ne,g as ke,R as me,h as Ze,i as ue,j as Je,k as De,l as ge,m as $e,n as et,o as tt,p as Z,q as nt,r as st,t as it,u as rt,G as te,v as Ge,w as ot,x as at,y as ct,z as Ue,A as ut,E as lt,H as He,J as se,Q as je,N as dt,K as ht,U as ft,W as pt,X as mt,Y as gt,Z as Tt,_ as xt,$ as _t,a0 as Re,a1 as vt,a2 as yt,a3 as Ee,a4 as wt,a5 as Rt,a6 as Et,a7 as At,a8 as Lt,a9 as $,aa as le,ab as ee,ac as St,ad as de,ae as bt,af as Mt,ag as Ae,ah as It,ai as Nt,aj as Ct,ak as Ot,al as Ft,am as he,an as Pt,ao as kt,ap as Dt,aq as Gt,ar as Ut,as as Ht,at as jt}from"./OrbitControls.d8c69fef.js";import{_ as Bt,d as zt,k as Vt,l as Kt,b as Xt,e as qt,w as Wt,o as Yt}from"./platForm.d5a47f83.js";class Qt extends Ke{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new tn(e)}),this.register(function(e){return new un(e)}),this.register(function(e){return new ln(e)}),this.register(function(e){return new sn(e)}),this.register(function(e){return new rn(e)}),this.register(function(e){return new on(e)}),this.register(function(e){return new an(e)}),this.register(function(e){return new en(e)}),this.register(function(e){return new cn(e)}),this.register(function(e){return new nn(e)}),this.register(function(e){return new Jt(e)}),this.register(function(e){return new dn(e)}),this.register(function(e){return new hn(e)})}load(t,e,r,s){const i=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=z.extractUrlBase(t),this.manager.itemStart(t);const c=function(u){s?s(u):console.error(u),i.manager.itemError(t),i.manager.itemEnd(t)},a=new Ce(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(u){try{i.parse(u,o,function(d){e(d),i.manager.itemEnd(t)},c)}catch(d){c(d)}},r,c)}setDRACOLoader(t){return this.dracoLoader=t,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,r,s){let i;const o={},c={};if(typeof t=="string")i=JSON.parse(t);else if(t instanceof ArrayBuffer)if(z.decodeText(new Uint8Array(t,0,4))===Be){try{o[b.KHR_BINARY_GLTF]=new fn(t)}catch(d){s&&s(d);return}i=JSON.parse(o[b.KHR_BINARY_GLTF].content)}else i=JSON.parse(z.decodeText(new Uint8Array(t)));else i=t;if(i.asset===void 0||i.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const a=new Ln(i,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](a);c[d.name]=d,o[d.name]=!0}if(i.extensionsUsed)for(let u=0;u<i.extensionsUsed.length;++u){const d=i.extensionsUsed[u],l=i.extensionsRequired||[];switch(d){case b.KHR_MATERIALS_UNLIT:o[d]=new $t;break;case b.KHR_DRACO_MESH_COMPRESSION:o[d]=new pn(i,this.dracoLoader);break;case b.KHR_TEXTURE_TRANSFORM:o[d]=new mn;break;case b.KHR_MESH_QUANTIZATION:o[d]=new gn;break;default:l.indexOf(d)>=0&&c[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}a.setExtensions(o),a.setPlugins(c),a.parse(r,s)}parseAsync(t,e){const r=this;return new Promise(function(s,i){r.parse(t,e,s,i)})}}function Zt(){let n={};return{get:function(t){return n[t]},add:function(t,e){n[t]=e},remove:function(t){delete n[t]},removeAll:function(){n={}}}}const b={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jt{constructor(t){this.parser=t,this.name=b.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let r=0,s=e.length;r<s;r++){const i=e[r];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(t){const e=this.parser,r="light:"+t;let s=e.cache.get(r);if(s)return s;const i=e.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[t];let u;const d=new H(16777215);a.color!==void 0&&d.fromArray(a.color);const l=a.range!==void 0?a.range:0;switch(a.type){case"directional":u=new qe(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Oe(d),u.distance=l;break;case"spot":u=new Xe(d),u.distance=l,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,u.angle=a.spot.outerConeAngle,u.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return u.position.set(0,0,0),u.decay=2,B(u,a),a.intensity!==void 0&&(u.intensity=a.intensity),u.name=e.createUniqueName(a.name||"light_"+t),s=Promise.resolve(u),e.cache.add(r,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,r=this.parser,i=r.json.nodes[t],c=(i.extensions&&i.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(a){return r._getNodeRef(e.cache,c,a)})}}class $t{constructor(){this.name=b.KHR_MATERIALS_UNLIT}getMaterialType(){return X}extendParams(t,e,r){const s=[];t.color=new H(1,1,1),t.opacity=1;const i=e.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const o=i.baseColorFactor;t.color.fromArray(o),t.opacity=o[3]}i.baseColorTexture!==void 0&&s.push(r.assignTexture(t,"map",i.baseColorTexture,J))}return Promise.all(s)}}class en{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name].emissiveStrength;return i!==void 0&&(e.emissiveIntensity=i),Promise.resolve()}}class tn{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const r=this.parser,s=r.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&i.push(r.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&i.push(r.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(i.push(r.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new U(c,c)}return Promise.all(i)}}class nn{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const r=this.parser,s=r.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&i.push(r.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&i.push(r.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(i)}}class sn{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_SHEEN}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const r=this.parser,s=r.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[];e.sheenColor=new H(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&e.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&i.push(r.assignTexture(e,"sheenColorMap",o.sheenColorTexture,J)),o.sheenRoughnessTexture!==void 0&&i.push(r.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(i)}}class rn{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const r=this.parser,s=r.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&i.push(r.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(i)}}class on{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_VOLUME}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const r=this.parser,s=r.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&i.push(r.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return e.attenuationColor=new H(c[0],c[1],c[2]),Promise.all(i)}}class an{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_IOR}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return e.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class cn{constructor(t){this.parser=t,this.name=b.KHR_MATERIALS_SPECULAR}getMaterialType(t){const r=this.parser.json.materials[t];return!r.extensions||!r.extensions[this.name]?null:V}extendMaterialParams(t,e){const r=this.parser,s=r.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&i.push(r.assignTexture(e,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return e.specularColor=new H(c[0],c[1],c[2]),o.specularColorTexture!==void 0&&i.push(r.assignTexture(e,"specularColorMap",o.specularColorTexture,J)),Promise.all(i)}}class un{constructor(t){this.parser=t,this.name=b.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,r=e.json,s=r.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,i.source,o)}}class ln{constructor(t){this.parser=t,this.name=b.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,r=this.parser,s=r.json,i=s.textures[t];if(!i.extensions||!i.extensions[e])return null;const o=i.extensions[e],c=s.images[o.source];let a=r.textureLoader;if(c.uri){const u=r.options.manager.getHandler(c.uri);u!==null&&(a=u)}return this.detectSupport().then(function(u){if(u)return r.loadTextureImage(t,o.source,a);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class dn{constructor(t){this.name=b.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,r=e.bufferViews[t];if(r.extensions&&r.extensions[this.name]){const s=r.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(c){const a=s.byteOffset||0,u=s.byteLength||0,d=s.count,l=s.byteStride,h=new Uint8Array(c,a,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,l,h,s.mode,s.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(d*l);return o.decodeGltfBuffer(new Uint8Array(g),d,l,h,s.mode,s.filter),g})})}else return null}}class hn{constructor(t){this.name=b.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,r=e.nodes[t];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const s=e.meshes[r.mesh];for(const u of s.primitives)if(u.mode!==D.TRIANGLES&&u.mode!==D.TRIANGLE_STRIP&&u.mode!==D.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=r.extensions[this.name].attributes,c=[],a={};for(const u in o)c.push(this.parser.getDependency("accessor",o[u]).then(d=>(a[u]=d,a[u])));return c.length<1?null:(c.push(this.parser.createNodeMesh(t)),Promise.all(c).then(u=>{const d=u.pop(),l=d.isGroup?d.children:[d],h=u[0].count,g=[];for(const E of l){const L=new se,v=new k,y=new je,A=new k(1,1,1),p=new We(E.geometry,E.material,h);for(let _=0;_<h;_++)a.TRANSLATION&&v.fromBufferAttribute(a.TRANSLATION,_),a.ROTATION&&y.fromBufferAttribute(a.ROTATION,_),a.SCALE&&A.fromBufferAttribute(a.SCALE,_),p.setMatrixAt(_,L.compose(v,y,A));for(const _ in a)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&E.geometry.setAttribute(_,a[_]);Fe.prototype.copy.call(p,E),p.frustumCulled=!1,this.parser.assignFinalMaterial(p),g.push(p)}return d.isGroup?(d.clear(),d.add(...g),d):g[0]}))}}const Be="glTF",Y=12,Le={JSON:1313821514,BIN:5130562};class fn{constructor(t){this.name=b.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Y);if(this.header={magic:z.decodeText(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Be)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Y,s=new DataView(t,Y);let i=0;for(;i<r;){const o=s.getUint32(i,!0);i+=4;const c=s.getUint32(i,!0);if(i+=4,c===Le.JSON){const a=new Uint8Array(t,Y+i,o);this.content=z.decodeText(a)}else if(c===Le.BIN){const a=Y+i;this.body=t.slice(a,a+o)}i+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class pn{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=b.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const r=this.json,s=this.dracoLoader,i=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,c={},a={},u={};for(const d in o){const l=Te[d]||d.toLowerCase();c[l]=o[d]}for(const d in t.attributes){const l=Te[d]||d.toLowerCase();if(o[d]!==void 0){const h=r.accessors[t.attributes[d]],g=q[h.componentType];u[l]=g.name,a[l]=h.normalized===!0}}return e.getDependency("bufferView",i).then(function(d){return new Promise(function(l){s.decodeDracoFile(d,function(h){for(const g in h.attributes){const E=h.attributes[g],L=a[g];L!==void 0&&(E.normalized=L)}l(h)},c,u)})})}}class mn{constructor(){this.name=b.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return e.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class gn{constructor(){this.name=b.KHR_MESH_QUANTIZATION}}class ze extends At{constructor(t,e,r,s){super(t,e,r,s)}copySampleValue_(t){const e=this.resultBuffer,r=this.sampleValues,s=this.valueSize,i=t*s*3+s;for(let o=0;o!==s;o++)e[o]=r[i+o];return e}interpolate_(t,e,r,s){const i=this.resultBuffer,o=this.sampleValues,c=this.valueSize,a=c*2,u=c*3,d=s-e,l=(r-e)/d,h=l*l,g=h*l,E=t*u,L=E-u,v=-2*g+3*h,y=g-h,A=1-v,p=y-h+l;for(let _=0;_!==c;_++){const M=o[L+_+c],R=o[L+_+a]*d,m=o[E+_+c],f=o[E+_]*d;i[_]=A*M+p*R+v*m+y*f}return i}}const Tn=new je;class xn extends ze{interpolate_(t,e,r,s){const i=super.interpolate_(t,e,r,s);return Tn.fromArray(i).normalize().toArray(i),i}}const D={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},q={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Se={9728:dt,9729:ne,9984:ht,9985:ft,9986:pt,9987:ke},be={33071:mt,33648:gt,10497:me},fe={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Te={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},j={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_n={CUBICSPLINE:void 0,LINEAR:Ue,STEP:Tt},pe={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vn(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new De({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xt})),n.DefaultMaterial}function Q(n,t,e){for(const r in e.extensions)n[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=e.extensions[r])}function B(n,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(n.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function yn(n,t,e){let r=!1,s=!1,i=!1;for(let u=0,d=t.length;u<d;u++){const l=t[u];if(l.POSITION!==void 0&&(r=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(i=!0),r&&s&&i)break}if(!r&&!s&&!i)return Promise.resolve(n);const o=[],c=[],a=[];for(let u=0,d=t.length;u<d;u++){const l=t[u];if(r){const h=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):n.attributes.position;o.push(h)}if(s){const h=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):n.attributes.normal;c.push(h)}if(i){const h=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):n.attributes.color;a.push(h)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(a)]).then(function(u){const d=u[0],l=u[1],h=u[2];return r&&(n.morphAttributes.position=d),s&&(n.morphAttributes.normal=l),i&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function wn(n,t){if(n.updateMorphTargets(),t.weights!==void 0)for(let e=0,r=t.weights.length;e<r;e++)n.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(n.morphTargetInfluences.length===e.length){n.morphTargetDictionary={};for(let r=0,s=e.length;r<s;r++)n.morphTargetDictionary[e[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rn(n){const t=n.extensions&&n.extensions[b.KHR_DRACO_MESH_COMPRESSION];let e;return t?e="draco:"+t.bufferView+":"+t.indices+":"+Me(t.attributes):e=n.indices+":"+Me(n.attributes)+":"+n.mode,e}function Me(n){let t="";const e=Object.keys(n).sort();for(let r=0,s=e.length;r<s;r++)t+=e[r]+":"+n[e[r]]+";";return t}function xe(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function En(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const An=new se;class Ln{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Zt,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,s=!1,i=-1;typeof navigator!="undefined"&&(r=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,i=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||r||s&&i<98?this.textureLoader=new Pe(this.options.manager):this.textureLoader=new Ye(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ce(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const r=this,s=this.json,i=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(o){const c={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:r,userData:{}};Q(i,c,s),B(c,s),Promise.all(r._invokeAll(function(a){return a.afterRoot&&a.afterRoot(c)})).then(function(){t(c)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],r=this.json.meshes||[];for(let s=0,i=e.length;s<i;s++){const o=e[s].joints;for(let c=0,a=o.length;c<a;c++)t[o[c]].isBone=!0}for(let s=0,i=t.length;s<i;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(r[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,r){if(t.refs[e]<=1)return r;const s=r.clone(),i=(o,c)=>{const a=this.associations.get(o);a!=null&&this.associations.set(c,a);for(const[u,d]of o.children.entries())i(d,c.children[u])};return i(r,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let r=0;r<e.length;r++){const s=t(e[r]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const r=[];for(let s=0;s<e.length;s++){const i=t(e[s]);i&&r.push(i)}return r}getDependency(t,e){const r=t+":"+e;let s=this.cache.get(r);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(i){return i.loadNode&&i.loadNode(e)});break;case"mesh":s=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(r,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const r=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(i,o){return r.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],r=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[b.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(i,o){r.load(z.resolveURL(e.uri,s.path),i,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(r){const s=e.byteLength||0,i=e.byteOffset||0;return r.slice(i,i+s)})}loadAccessor(t){const e=this,r=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=fe[s.type],c=q[s.componentType],a=s.normalized===!0,u=new c(s.count*o);return Promise.resolve(new ce(u,o,a))}const i=[];return s.bufferView!==void 0?i.push(this.getDependency("bufferView",s.bufferView)):i.push(null),s.sparse!==void 0&&(i.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(i).then(function(o){const c=o[0],a=fe[s.type],u=q[s.componentType],d=u.BYTES_PER_ELEMENT,l=d*a,h=s.byteOffset||0,g=s.bufferView!==void 0?r.bufferViews[s.bufferView].byteStride:void 0,E=s.normalized===!0;let L,v;if(g&&g!==l){const y=Math.floor(h/g),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let p=e.cache.get(A);p||(L=new u(c,y*g,s.count*g/d),p=new Qe(L,g/d),e.cache.add(A,p)),v=new _t(p,a,h%g/d,E)}else c===null?L=new u(s.count*a):L=new u(c,h,s.count*a),v=new ce(L,a,E);if(s.sparse!==void 0){const y=fe.SCALAR,A=q[s.sparse.indices.componentType],p=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,M=new A(o[1],p,s.sparse.count*y),R=new u(o[2],_,s.sparse.count*a);c!==null&&(v=new ce(v.array.slice(),v.itemSize,v.normalized));for(let m=0,f=M.length;m<f;m++){const T=M[m];if(v.setX(T,R[m*a]),a>=2&&v.setY(T,R[m*a+1]),a>=3&&v.setZ(T,R[m*a+2]),a>=4&&v.setW(T,R[m*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(t){const e=this.json,r=this.options,i=e.textures[t].source,o=e.images[i];let c=this.textureLoader;if(o.uri){const a=r.manager.getHandler(o.uri);a!==null&&(c=a)}return this.loadTextureImage(t,i,c)}loadTextureImage(t,e,r){const s=this,i=this.json,o=i.textures[t],c=i.images[e],a=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[a])return this.textureCache[a];const u=this.loadImageSource(e,r).then(function(d){d.flipY=!1,d.name=o.name||c.name||"";const h=(i.samplers||{})[o.sampler]||{};return d.magFilter=Se[h.magFilter]||ne,d.minFilter=Se[h.minFilter]||ke,d.wrapS=be[h.wrapS]||me,d.wrapT=be[h.wrapT]||me,s.associations.set(d,{textures:t}),d}).catch(function(){return null});return this.textureCache[a]=u,u}loadImageSource(t,e){const r=this,s=this.json,i=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],c=self.URL||self.webkitURL;let a=o.uri||"",u=!1;if(o.bufferView!==void 0)a=r.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const h=new Blob([l],{type:o.mimeType});return a=c.createObjectURL(h),a});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const d=Promise.resolve(a).then(function(l){return new Promise(function(h,g){let E=h;e.isImageBitmapLoader===!0&&(E=function(L){const v=new Re(L);v.needsUpdate=!0,h(v)}),e.load(z.resolveURL(l,i.path),E,void 0,g)})}).then(function(l){return u===!0&&c.revokeObjectURL(a),l.userData.mimeType=o.mimeType||En(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),l});return this.sourceCache[t]=d,d}assignTexture(t,e,r,s){const i=this;return this.getDependency("texture",r.index).then(function(o){if(!o)return null;if(r.texCoord!==void 0&&r.texCoord!=0&&!(e==="aoMap"&&r.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+r.texCoord+" for texture "+e+" not yet supported."),i.extensions[b.KHR_TEXTURE_TRANSFORM]){const c=r.extensions!==void 0?r.extensions[b.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const a=i.associations.get(o);o=i.extensions[b.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),i.associations.set(o,a)}}return s!==void 0&&(o.encoding=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let r=t.material;const s=e.attributes.tangent===void 0,i=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const c="PointsMaterial:"+r.uuid;let a=this.cache.get(c);a||(a=new Ze,ue.prototype.copy.call(a,r),a.color.copy(r.color),a.map=r.map,a.sizeAttenuation=!1,this.cache.add(c,a)),r=a}else if(t.isLine){const c="LineBasicMaterial:"+r.uuid;let a=this.cache.get(c);a||(a=new Je,ue.prototype.copy.call(a,r),a.color.copy(r.color),this.cache.add(c,a)),r=a}if(s||i||o){let c="ClonedMaterial:"+r.uuid+":";s&&(c+="derivative-tangents:"),i&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let a=this.cache.get(c);a||(a=r.clone(),i&&(a.vertexColors=!0),o&&(a.flatShading=!0),s&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(c,a),this.associations.set(a,this.associations.get(r))),r=a}r.aoMap&&e.attributes.uv2===void 0&&e.attributes.uv!==void 0&&e.setAttribute("uv2",e.attributes.uv),t.material=r}getMaterialType(){return De}loadMaterial(t){const e=this,r=this.json,s=this.extensions,i=r.materials[t];let o;const c={},a=i.extensions||{},u=[];if(a[b.KHR_MATERIALS_UNLIT]){const l=s[b.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(c,i,e))}else{const l=i.pbrMetallicRoughness||{};if(c.color=new H(1,1,1),c.opacity=1,Array.isArray(l.baseColorFactor)){const h=l.baseColorFactor;c.color.fromArray(h),c.opacity=h[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(c,"map",l.baseColorTexture,J)),c.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,c.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(c,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(c,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(t,c)})))}i.doubleSided===!0&&(c.side=ge);const d=i.alphaMode||pe.OPAQUE;if(d===pe.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===pe.MASK&&(c.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&o!==X&&(u.push(e.assignTexture(c,"normalMap",i.normalTexture)),c.normalScale=new U(1,1),i.normalTexture.scale!==void 0)){const l=i.normalTexture.scale;c.normalScale.set(l,l)}return i.occlusionTexture!==void 0&&o!==X&&(u.push(e.assignTexture(c,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&o!==X&&(c.emissive=new H().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&o!==X&&u.push(e.assignTexture(c,"emissiveMap",i.emissiveTexture,J)),Promise.all(u).then(function(){const l=new o(c);return i.name&&(l.name=i.name),B(l,i),e.associations.set(l,{materials:t}),i.extensions&&Q(s,l,i),l})}createUniqueName(t){const e=$e.sanitizeNodeName(t||"");let r=e;for(let s=1;this.nodeNamesUsed[r];++s)r=e+"_"+s;return this.nodeNamesUsed[r]=!0,r}loadGeometries(t){const e=this,r=this.extensions,s=this.primitiveCache;function i(c){return r[b.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,e).then(function(a){return Ie(a,c,e)})}const o=[];for(let c=0,a=t.length;c<a;c++){const u=t[c],d=Rn(u),l=s[d];if(l)o.push(l.promise);else{let h;u.extensions&&u.extensions[b.KHR_DRACO_MESH_COMPRESSION]?h=i(u):h=Ie(new et,u,e),s[d]={primitive:u,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(t){const e=this,r=this.json,s=this.extensions,i=r.meshes[t],o=i.primitives,c=[];for(let a=0,u=o.length;a<u;a++){const d=o[a].material===void 0?vn(this.cache):this.getDependency("material",o[a].material);c.push(d)}return c.push(e.loadGeometries(o)),Promise.all(c).then(function(a){const u=a.slice(0,a.length-1),d=a[a.length-1],l=[];for(let g=0,E=d.length;g<E;g++){const L=d[g],v=o[g];let y;const A=u[g];if(v.mode===D.TRIANGLES||v.mode===D.TRIANGLE_STRIP||v.mode===D.TRIANGLE_FAN||v.mode===void 0)y=i.isSkinnedMesh===!0?new tt(L,A):new Z(L,A),y.isSkinnedMesh===!0&&!y.geometry.attributes.skinWeight.normalized&&y.normalizeSkinWeights(),v.mode===D.TRIANGLE_STRIP?y.geometry=Ne(y.geometry,vt):v.mode===D.TRIANGLE_FAN&&(y.geometry=Ne(y.geometry,He));else if(v.mode===D.LINES)y=new nt(L,A);else if(v.mode===D.LINE_STRIP)y=new st(L,A);else if(v.mode===D.LINE_LOOP)y=new it(L,A);else if(v.mode===D.POINTS)y=new rt(L,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(y.geometry.morphAttributes).length>0&&wn(y,i),y.name=e.createUniqueName(i.name||"mesh_"+t),B(y,i),v.extensions&&Q(s,y,v),e.assignFinalMaterial(y),l.push(y)}for(let g=0,E=l.length;g<E;g++)e.associations.set(l[g],{meshes:t,primitives:g});if(l.length===1)return l[0];const h=new te;e.associations.set(h,{meshes:t});for(let g=0,E=l.length;g<E;g++)h.add(l[g]);return h})}loadCamera(t){let e;const r=this.json.cameras[t],s=r[r.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?e=new Ge(ot.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):r.type==="orthographic"&&(e=new at(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),r.name&&(e.name=this.createUniqueName(r.name)),B(e,r),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],r=[];for(let s=0,i=e.joints.length;s<i;s++)r.push(this.getDependency("node",e.joints[s]));return e.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",e.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(s){const i=s.pop(),o=s,c=[],a=[];for(let u=0,d=o.length;u<d;u++){const l=o[u];if(l){c.push(l);const h=new se;i!==null&&h.fromArray(i.array,u*16),a.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new ct(c,a)})}loadAnimation(t){const r=this.json.animations[t],s=[],i=[],o=[],c=[],a=[];for(let u=0,d=r.channels.length;u<d;u++){const l=r.channels[u],h=r.samplers[l.sampler],g=l.target,E=g.node,L=r.parameters!==void 0?r.parameters[h.input]:h.input,v=r.parameters!==void 0?r.parameters[h.output]:h.output;s.push(this.getDependency("node",E)),i.push(this.getDependency("accessor",L)),o.push(this.getDependency("accessor",v)),c.push(h),a.push(g)}return Promise.all([Promise.all(s),Promise.all(i),Promise.all(o),Promise.all(c),Promise.all(a)]).then(function(u){const d=u[0],l=u[1],h=u[2],g=u[3],E=u[4],L=[];for(let y=0,A=d.length;y<A;y++){const p=d[y],_=l[y],M=h[y],R=g[y],m=E[y];if(p===void 0)continue;p.updateMatrix();let f;switch(j[m.path]){case j.weights:f=wt;break;case j.rotation:f=Ee;break;case j.position:case j.scale:default:f=yt;break}const T=p.name?p.name:p.uuid,w=R.interpolation!==void 0?_n[R.interpolation]:Ue,x=[];j[m.path]===j.weights?p.traverse(function(N){N.morphTargetInfluences&&x.push(N.name?N.name:N.uuid)}):x.push(T);let I=M.array;if(M.normalized){const N=xe(I.constructor),O=new Float32Array(I.length);for(let C=0,G=I.length;C<G;C++)O[C]=I[C]*N;I=O}for(let N=0,O=x.length;N<O;N++){const C=new f(x[N]+"."+j[m.path],_.array,I,w);R.interpolation==="CUBICSPLINE"&&(C.createInterpolant=function(F){const P=this instanceof Ee?xn:ze;return new P(this.times,this.values,this.getValueSize()/3,F)},C.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),L.push(C)}}const v=r.name?r.name:"animation_"+t;return new ut(v,void 0,L)})}createNodeMesh(t){const e=this.json,r=this,s=e.nodes[t];return s.mesh===void 0?null:r.getDependency("mesh",s.mesh).then(function(i){const o=r._getNodeRef(r.meshCache,s.mesh,i);return s.weights!==void 0&&o.traverse(function(c){if(!!c.isMesh)for(let a=0,u=s.weights.length;a<u;a++)c.morphTargetInfluences[a]=s.weights[a]}),o})}loadNode(t){const e=this.json,r=this.extensions,s=this,i=e.nodes[t],o=i.name?s.createUniqueName(i.name):"";return function(){const c=[],a=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(t)});a&&c.push(a),i.camera!==void 0&&c.push(s.getDependency("camera",i.camera).then(function(h){return s._getNodeRef(s.cameraCache,i.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(t)}).forEach(function(h){c.push(h)});const u=[],d=i.children||[];for(let h=0,g=d.length;h<g;h++)u.push(s.getDependency("node",d[h]));const l=i.skin===void 0?Promise.resolve(null):s.getDependency("skin",i.skin);return Promise.all([Promise.all(c),Promise.all(u),l])}().then(function(c){const a=c[0],u=c[1],d=c[2];let l;if(i.isBone===!0?l=new lt:a.length>1?l=new te:a.length===1?l=a[0]:l=new Fe,l!==a[0])for(let h=0,g=a.length;h<g;h++)l.add(a[h]);if(i.name&&(l.userData.name=i.name,l.name=o),B(l,i),i.extensions&&Q(r,l,i),i.matrix!==void 0){const h=new se;h.fromArray(i.matrix),l.applyMatrix4(h)}else i.translation!==void 0&&l.position.fromArray(i.translation),i.rotation!==void 0&&l.quaternion.fromArray(i.rotation),i.scale!==void 0&&l.scale.fromArray(i.scale);s.associations.has(l)||s.associations.set(l,{}),s.associations.get(l).nodes=t,d!==null&&l.traverse(function(h){!h.isSkinnedMesh||h.bind(d,An)});for(let h=0,g=u.length;h<g;h++)l.add(u[h]);return l})}loadScene(t){const e=this.extensions,r=this.json.scenes[t],s=this,i=new te;r.name&&(i.name=s.createUniqueName(r.name)),B(i,r),r.extensions&&Q(e,i,r);const o=r.nodes||[],c=[];for(let a=0,u=o.length;a<u;a++)c.push(s.getDependency("node",o[a]));return Promise.all(c).then(function(a){for(let d=0,l=a.length;d<l;d++)i.add(a[d]);const u=d=>{const l=new Map;for(const[h,g]of s.associations)(h instanceof ue||h instanceof Re)&&l.set(h,g);return d.traverse(h=>{const g=s.associations.get(h);g!=null&&l.set(h,g)}),l};return s.associations=u(i),i})}}function Sn(n,t,e){const r=t.attributes,s=new Rt;if(r.POSITION!==void 0){const c=e.json.accessors[r.POSITION],a=c.min,u=c.max;if(a!==void 0&&u!==void 0){if(s.set(new k(a[0],a[1],a[2]),new k(u[0],u[1],u[2])),c.normalized){const d=xe(q[c.componentType]);s.min.multiplyScalar(d),s.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=t.targets;if(i!==void 0){const c=new k,a=new k;for(let u=0,d=i.length;u<d;u++){const l=i[u];if(l.POSITION!==void 0){const h=e.json.accessors[l.POSITION],g=h.min,E=h.max;if(g!==void 0&&E!==void 0){if(a.setX(Math.max(Math.abs(g[0]),Math.abs(E[0]))),a.setY(Math.max(Math.abs(g[1]),Math.abs(E[1]))),a.setZ(Math.max(Math.abs(g[2]),Math.abs(E[2]))),h.normalized){const L=xe(q[h.componentType]);a.multiplyScalar(L)}c.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(c)}n.boundingBox=s;const o=new Et;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Ie(n,t,e){const r=t.attributes,s=[];function i(o,c){return e.getDependency("accessor",o).then(function(a){n.setAttribute(c,a)})}for(const o in r){const c=Te[o]||o.toLowerCase();c in n.attributes||s.push(i(r[o],c))}if(t.indices!==void 0&&!n.index){const o=e.getDependency("accessor",t.indices).then(function(c){n.setIndex(c)});s.push(o)}return B(n,t),Sn(n,t,e),Promise.all(s).then(function(){return t.targets!==void 0?yn(n,t.targets,e):n})}function Ne(n,t){let e=n.getIndex();if(e===null){const o=[],c=n.getAttribute("position");if(c!==void 0){for(let a=0;a<c.count;a++)o.push(a);n.setIndex(o),e=n.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const r=e.count-2,s=[];if(t===He)for(let o=1;o<=r;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<r;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==r&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=n.clone();return i.setIndex(s),i}class bn extends Lt{constructor(t){super(t),this.type=$}parse(t){const c=function(p,_){switch(p){case 1:console.error("THREE.RGBELoader Read Error: "+(_||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(_||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(_||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(_||""))}return-1},l=`
`,h=function(p,_,M){_=_||1024;let m=p.pos,f=-1,T=0,w="",x=String.fromCharCode.apply(null,new Uint16Array(p.subarray(m,m+128)));for(;0>(f=x.indexOf(l))&&T<_&&m<p.byteLength;)w+=x,T+=x.length,m+=128,x+=String.fromCharCode.apply(null,new Uint16Array(p.subarray(m,m+128)));return-1<f?(M!==!1&&(p.pos+=T+f+1),w+x.slice(0,f)):!1},g=function(p){const _=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,m=/^\s*FORMAT=(\S+)\s*$/,f=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,T={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let w,x;if(p.pos>=p.byteLength||!(w=h(p)))return c(1,"no header found");if(!(x=w.match(_)))return c(3,"bad initial token");for(T.valid|=1,T.programtype=x[1],T.string+=w+`
`;w=h(p),w!==!1;){if(T.string+=w+`
`,w.charAt(0)==="#"){T.comments+=w+`
`;continue}if((x=w.match(M))&&(T.gamma=parseFloat(x[1])),(x=w.match(R))&&(T.exposure=parseFloat(x[1])),(x=w.match(m))&&(T.valid|=2,T.format=x[1]),(x=w.match(f))&&(T.valid|=4,T.height=parseInt(x[1],10),T.width=parseInt(x[2],10)),T.valid&2&&T.valid&4)break}return T.valid&2?T.valid&4?T:c(3,"missing image size specifier"):c(3,"missing format specifier")},E=function(p,_,M){const R=_;if(R<8||R>32767||p[0]!==2||p[1]!==2||p[2]&128)return new Uint8Array(p);if(R!==(p[2]<<8|p[3]))return c(3,"wrong scanline width");const m=new Uint8Array(4*_*M);if(!m.length)return c(4,"unable to allocate buffer space");let f=0,T=0;const w=4*R,x=new Uint8Array(4),I=new Uint8Array(w);let N=M;for(;N>0&&T<p.byteLength;){if(T+4>p.byteLength)return c(1);if(x[0]=p[T++],x[1]=p[T++],x[2]=p[T++],x[3]=p[T++],x[0]!=2||x[1]!=2||(x[2]<<8|x[3])!=R)return c(3,"bad rgbe scanline format");let O=0,C;for(;O<w&&T<p.byteLength;){C=p[T++];const F=C>128;if(F&&(C-=128),C===0||O+C>w)return c(3,"bad scanline data");if(F){const P=p[T++];for(let W=0;W<C;W++)I[O++]=P}else I.set(p.subarray(T,T+C),O),O+=C,T+=C}const G=R;for(let F=0;F<G;F++){let P=0;m[f]=I[F+P],P+=R,m[f+1]=I[F+P],P+=R,m[f+2]=I[F+P],P+=R,m[f+3]=I[F+P],f+=4}N--}return m},L=function(p,_,M,R){const m=p[_+3],f=Math.pow(2,m-128)/255;M[R+0]=p[_+0]*f,M[R+1]=p[_+1]*f,M[R+2]=p[_+2]*f,M[R+3]=1},v=function(p,_,M,R){const m=p[_+3],f=Math.pow(2,m-128)/255;M[R+0]=ee.toHalfFloat(Math.min(p[_+0]*f,65504)),M[R+1]=ee.toHalfFloat(Math.min(p[_+1]*f,65504)),M[R+2]=ee.toHalfFloat(Math.min(p[_+2]*f,65504)),M[R+3]=ee.toHalfFloat(1)},y=new Uint8Array(t);y.pos=0;const A=g(y);if(A!==-1){const p=A.width,_=A.height,M=E(y.subarray(y.pos),p,_);if(M!==-1){let R,m,f;switch(this.type){case le:f=M.length/4;const T=new Float32Array(f*4);for(let x=0;x<f;x++)L(M,x*4,T,x*4);R=T,m=le;break;case $:f=M.length/4;const w=new Uint16Array(f*4);for(let x=0;x<f;x++)v(M,x*4,w,x*4);R=w,m=$;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:p,height:_,data:R,header:A.string,gamma:A.gamma,exposure:A.exposure,type:m}}}return null}setDataType(t){return this.type=t,this}load(t,e,r,s){function i(o,c){switch(o.type){case le:case $:o.encoding=St,o.minFilter=ne,o.magFilter=ne,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,c)}return super.load(t,i,r,s)}}var _e=function(){this._tweens={},this._tweensAddedDuringUpdate={}};_e.prototype={getAll:function(){return Object.keys(this._tweens).map(function(n){return this._tweens[n]}.bind(this))},removeAll:function(){this._tweens={}},add:function(n){this._tweens[n.getId()]=n,this._tweensAddedDuringUpdate[n.getId()]=n},remove:function(n){delete this._tweens[n.getId()],delete this._tweensAddedDuringUpdate[n.getId()]},update:function(n,t){var e=Object.keys(this._tweens);if(e.length===0)return!1;for(n=n!==void 0?n:S.now();0<e.length;){this._tweensAddedDuringUpdate={};for(var r=0;r<e.length;r++){var s=this._tweens[e[r]];s&&s.update(n)===!1&&(s._isPlaying=!1,t||delete this._tweens[e[r]])}e=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var S=new _e;S.Group=_e,S._nextId=0,S.nextId=function(){return S._nextId++},typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?S.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?S.now=self.performance.now.bind(self.performance):Date.now!==void 0?S.now=Date.now:S.now=function(){return new Date().getTime()},S.Tween=function(n,t){this._object=n,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=S.Easing.Linear.None,this._interpolationFunction=S.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||S,this._id=S.nextId()},S.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(n,t){return this._valuesEnd=Object.create(n),t!==void 0&&(this._duration=t),this},duration:function(n){return this._duration=n,this},start:function(n){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=n!==void 0?typeof n=="string"?S.now()+parseFloat(n):n:S.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(this._valuesEnd[t].length===0)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}this._object[t]!==void 0&&(this._valuesStart[t]=this._object[t],!(this._valuesStart[t]instanceof Array)&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,this._onStopCallback!==null&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var n=0,t=this._chainedTweens.length;n<t;n++)this._chainedTweens[n].stop()},group:function(n){return this._group=n,this},delay:function(n){return this._delayTime=n,this},repeat:function(n){return this._repeat=n,this},repeatDelay:function(n){return this._repeatDelayTime=n,this},yoyo:function(n){return this._yoyo=n,this},easing:function(n){return this._easingFunction=n,this},interpolation:function(n){return this._interpolationFunction=n,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(n){return this._onStartCallback=n,this},onUpdate:function(n){return this._onUpdateCallback=n,this},onComplete:function(n){return this._onCompleteCallback=n,this},onStop:function(n){return this._onStopCallback=n,this},update:function(n){var t,e,r;if(n<this._startTime)return!0;for(t in this._onStartCallbackFired===!1&&(this._onStartCallback!==null&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),e=(n-this._startTime)/this._duration,e=this._duration===0||1<e?1:e,r=this._easingFunction(e),this._valuesEnd)if(this._valuesStart[t]!==void 0){var s=this._valuesStart[t]||0,i=this._valuesEnd[t];i instanceof Array?this._object[t]=this._interpolationFunction(i,r):(typeof i=="string"&&(i=i.charAt(0)==="+"||i.charAt(0)==="-"?s+parseFloat(i):parseFloat(i)),typeof i=="number"&&(this._object[t]=s+(i-s)*r))}if(this._onUpdateCallback!==null&&this._onUpdateCallback(this._object),e!==1)return!0;if(0<this._repeat){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if(typeof this._valuesEnd[t]=="string"&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var o=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=o}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=n+this._repeatDelayTime:this._startTime=n+this._delayTime,!0}this._onCompleteCallback!==null&&this._onCompleteCallback(this._object);for(var c=0,a=this._chainedTweens.length;c<a;c++)this._chainedTweens[c].start(this._startTime+this._duration);return!1}},S.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(2-Math.pow(2,-10*(n-1)))}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin(5*(n-.1)*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?-.5*Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)+1}},Back:{In:function(n){return n*n*(2.70158*n-1.70158)},Out:function(n){return--n*n*(2.70158*n+1.70158)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?n*n*((1+t)*n-t)*.5:.5*((n-=2)*n*((1+t)*n+t)+2)}},Bounce:{In:function(n){return 1-S.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?.5*S.Easing.Bounce.In(2*n):.5*S.Easing.Bounce.Out(2*n-1)+.5}}},S.Interpolation={Linear:function(n,t){var e=n.length-1,r=e*t,s=Math.floor(r),i=S.Interpolation.Utils.Linear;return t<0?i(n[0],n[1],r):1<t?i(n[e],n[e-1],e-r):i(n[s],n[e<s+1?e:s+1],r-s)},Bezier:function(n,t){for(var e=0,r=n.length-1,s=Math.pow,i=S.Interpolation.Utils.Bernstein,o=0;o<=r;o++)e+=s(1-t,r-o)*s(t,o)*n[o]*i(r,o);return e},CatmullRom:function(n,t){var e=n.length-1,r=e*t,s=Math.floor(r),i=S.Interpolation.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(s=Math.floor(r=e*(1+t))),i(n[(s-1+e)%e],n[s],n[(s+1)%e],n[(s+2)%e],r-s)):t<0?n[0]-(i(n[0],n[0],n[1],n[1],-r)-n[0]):1<t?n[e]-(i(n[e],n[e],n[e-1],n[e-1],r-e)-n[e]):i(n[s?s-1:0],n[s],n[e<s+1?e:s+1],n[e<s+2?e:s+2],r-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=S.Interpolation.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var r=t;1<r;r--)e*=r;return n[t]=e}}(),CatmullRom:function(n,t,e,r,s){var i=.5*(e-n),o=.5*(r-t),c=s*s;return(2*t-2*e+i+o)*(s*c)+(-3*t+3*e-2*i-o)*c+i*s+t}}},function(n){typeof define=="function"&&define.amd?define([],function(){return S}):typeof module!="undefined"&&typeof exports=="object"?module.exports=S:n!==void 0&&(n.TWEEN=S)}(globalThis);const Mn=`
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
`;const Pn={class:"container"},kn={id:"my-world",ref:"myWorld"},Dn=zt({setup(n){let{ctx:t}=Wt();Vt(()=>we(this,null,function*(){yield Kt(),i()}));let e,r,s;function i(){let m=new jt;const f=new k(-20,15,-15),T=t.$refs.myWorld,w=o(T);e=c(),r=a(e,T);let x=u();L(x);const I=new de({vertexShader:Mn,fragmentShader:In,side:ge,uniforms:{uTime:{value:0},uMouse:{value:new U(0,0)},uResolution:{value:new U(window.innerWidth,window.innerHeight)}}}),N=d(I);N.position.copy(new k(0,0,0));const O=new bt(256),C=new Mt(.1,10,O),G=new Ae;G.add(N);const F=new de({vertexShader:Nn,fragmentShader:Cn,side:ge,uniforms:{uTime:{value:0},uMouse:{value:new U(0,0)},uResolution:{value:new U(window.innerWidth,window.innerHeight)},uNoiseTexture:{value:null},uVelocity:{value:.05},uBrightness:{value:.33},uStagger:{value:16}}}),P=l(F);P.position.copy(f),h(P),x.add(P);let W=new Z(new It(.1,20,20),new X({color:16711680}));W.position.set(0,10,0),x.add(W);const ie=new de({vertexShader:On,fragmentShader:Fn,side:Nt,uniforms:{uTime:{value:0},uMouse:{value:new U(0,0)},uResolution:{value:new U(window.innerWidth,window.innerHeight)}}}),ve=g(ie);ve.position.copy(f),x.add(ve),E(x);let re=[];_(x,re);function ye(){if(R(w)){const K=w.domElement;e.aspect=K.clientWidth/K.clientHeight,e.updateProjectionMatrix()}let Ve=m.getDelta();for(let K=0;K<re.length;K++)re[K].update(Ve);S.update();let oe=m.getElapsedTime(),ae=new U(0,0);C.update(w,G),I&&F&&(I.uniforms.uTime.value=oe,I.uniforms.uMouse.value=ae,F.uniforms.uTime.value=oe,F.uniforms.uMouse.value=ae,F.uniforms.uNoiseTexture.value=O.texture,ie.uniforms.uTime.value=oe,ie.uniforms.uMouse.value=ae),requestAnimationFrame(ye),w.render(x,e)}document.addEventListener("click",M,!1),requestAnimationFrame(ye)}function o(m){const f=new Ct({antialias:!0,logarithmicDepthBuffer:!0,canvas:m});return f.shadowMap.enabled=!0,f.setClearColor(0,0),f}function c(m=40,f=window.innerWidth/window.innerHeight,T=.1,w=1e3){let x=new Ge(m,f,T,w);return x.position.copy(new k(0,10,50)),x.lookAt(new k(0,0,0)),x}function a(m,f){let T=new Ot(m,f);return T.target.copy(new k(0,0,0)),T.update(),T}function u(){let m=new URL("/assets/venice_sunset_1k.0e72ed46.hdr",self.location).href,f=new Ae;return f.background=new H("#000000"),f.environment=new bn().load(m),f.environment.mapping=Ft,f}function d(m){const f=new he(1,100,100);return new Z(f,m)}function l(m){const f=new he(1,100,100);return new Z(f,m)}function h(m){let f=new Oe(new H("#ffffff"),1);f.castShadow=!0,f.intensity=1,m.add(f)}function g(m){const f=new he(1.2,100,100);return new Z(f,m)}function E(m){let f=100,T=new te,w=[new Pe().load(new URL("/assets/cloud.76af7501.png",self.location).href)],x=1;for(let I=0;I<f;I++)for(let N=0;N<1;N++){let O=new Pt(new kt({map:w[N],transparent:!0,opacity:.5}));O.position.set((Math.random()*2-1)*(x+Math.random()*10),10+Math.random()*(10/5),(Math.random()*2-1)*(3+Math.random()*10)),O.scale.set(5,5,5),x+=.2,T.add(O)}m.add(T)}function L(m){let f=[new URL("/assets/posx.0b453472.jpg",self.location).href,new URL("/assets/negx.ba52c8a0.jpg",self.location).href,new URL("/assets/posy.106f8c18.jpg",self.location).href,new URL("/assets/negy.aebb71ea.jpg",self.location).href,new URL("/assets/posz.46bd2041.jpg",self.location).href,new URL("/assets/negz.8a623aca.jpg",self.location).href],T=new Dt;m.background=T.load(f)}let v,y,A,p;function _(m,f){const T=new URL("/assets/people.df1342b1.glb",self.location).href;new Qt().load(T,x=>{v=x.scene,v.castShadow=!0,y=x.animations,m.add(v),p=new Gt(v),f.push(p),A=p.clipAction(y[0]),A.play()})}function M(m){let f=new Ut,T=new U(m.clientX/window.innerWidth*2-1,-(m.clientY/window.innerHeight)*2+1),w=new k(0,1,0),x=new Ht(w,0);f.setFromCamera(T,e);let I=f.ray.intersectPlane(x,w);if(!I)return;let N=new k(v.position.x,0,v.position.z),O=new k(I.x,0,I.z),C=N.distanceTo(O);v.lookAt(I.x,0,I.z),A.getClip()!=y[1]&&(A.fadeOut(.2),A=p.clipAction(y[1]),A.reset().setEffectiveTimeScale(1).setEffectiveWeight(2).fadeIn(.2).play()),s&&S.remove(s),s=new S.Tween(N).to(O,C*800).easing(S.Easing.Linear.None).onComplete(function(){A.fadeOut(.2),A=p.clipAction(y[0]),A.reset().setEffectiveTimeScale(1).setEffectiveWeight(2).fadeIn(.2).play()}).onUpdate(function(){v.position.set(this._object.x,.04,this._object.z);let G=v.position.clone();G.y=1,r.target=G,r.update()}).start()}function R(m){let f=m.domElement,T=window.devicePixelRatio,w=f.clientWidth*T|0,x=f.clientHeight*T|0,I=f.width!==w||f.height!==x;return I&&m.setSize(w,x,!1),I}return(m,f)=>(Yt(),Xt("div",Pn,[qt("canvas",kn,null,512)]))}});var jn=Bt(Dn,[["__scopeId","data-v-289a8481"]]);export{jn as default};
