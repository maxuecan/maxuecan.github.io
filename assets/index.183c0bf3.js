import{L as ce,b as _e,e as pe,o as ke}from"./platForm.b6da2c16.js";(function(){var X=X||{};X.scope={},X.ASSUME_ES5=!1,X.ASSUME_NO_NATIVE_MAP=!1,X.ASSUME_NO_NATIVE_SET=!1,X.SIMPLE_FROUND_POLYFILL=!1,X.defineProperty=X.ASSUME_ES5||typeof Object.defineProperties=="function"?Object.defineProperty:function(j,F,e){j!=Array.prototype&&j!=Object.prototype&&(j[F]=e.value)},X.getGlobal=function(j){return typeof window!="undefined"&&window===j?j:typeof ce!="undefined"&&ce!=null?ce:j},X.global=X.getGlobal(this),X.polyfill=function(j,F,e,n){if(F){for(e=X.global,j=j.split("."),n=0;n<j.length-1;n++){var t=j[n];t in e||(e[t]={}),e=e[t]}j=j[j.length-1],n=e[j],F=F(n),F!=n&&F!=null&&X.defineProperty(e,j,{configurable:!0,writable:!0,value:F})}},X.polyfill("Array.prototype.includes",function(j){return j||function(F,e){var n=this;n instanceof String&&(n=String(n));var t=n.length;for(e=e||0,0>e&&(e=Math.max(e+t,0));e<t;e++){var r=n[e];if(r===F||Object.is(r,F))return!0}return!1}},"es7","es3"),X.owns=function(j,F){return Object.prototype.hasOwnProperty.call(j,F)},X.polyfill("Object.entries",function(j){return j||function(F){var e=[],n;for(n in F)X.owns(F,n)&&e.push([n,F[n]]);return e}},"es8","es3"),X.checkStringArgs=function(j,F,e){if(j==null)throw new TypeError("The 'this' value for String.prototype."+e+" must not be null or undefined");if(F instanceof RegExp)throw new TypeError("First argument to String.prototype."+e+" must not be a regular expression");return j+""},X.stringPadding=function(j,F){return j=j!==void 0?String(j):" ",0<F&&j?j.repeat(Math.ceil(F/j.length)).substring(0,F):""},X.polyfill("String.prototype.padStart",function(j){return j||function(F,e){var n=X.checkStringArgs(this,null,"padStart");return X.stringPadding(e,F-n.length)+n}},"es8","es3"),X.polyfill("Object.values",function(j){return j||function(F){var e=[],n;for(n in F)X.owns(F,n)&&e.push(F[n]);return e}},"es8","es3"),X.arrayIteratorImpl=function(j){var F=0;return function(){return F<j.length?{done:!1,value:j[F++]}:{done:!0}}},X.arrayIterator=function(j){return{next:X.arrayIteratorImpl(j)}},X.SYMBOL_PREFIX="jscomp_symbol_",X.initSymbol=function(){X.initSymbol=function(){},X.global.Symbol||(X.global.Symbol=X.Symbol)},X.SymbolClass=function(j,F){this.$jscomp$symbol$id_=j,X.defineProperty(this,"description",{configurable:!0,writable:!0,value:F})},X.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_},X.Symbol=function(){function j(e){if(this instanceof j)throw new TypeError("Symbol is not a constructor");return new X.SymbolClass(X.SYMBOL_PREFIX+(e||"")+"_"+F++,e)}var F=0;return j}(),X.initSymbolIterator=function(){X.initSymbol();var j=X.global.Symbol.iterator;j||(j=X.global.Symbol.iterator=X.global.Symbol("Symbol.iterator")),typeof Array.prototype[j]!="function"&&X.defineProperty(Array.prototype,j,{configurable:!0,writable:!0,value:function(){return X.iteratorPrototype(X.arrayIteratorImpl(this))}}),X.initSymbolIterator=function(){}},X.initSymbolAsyncIterator=function(){X.initSymbol();var j=X.global.Symbol.asyncIterator;j||(j=X.global.Symbol.asyncIterator=X.global.Symbol("Symbol.asyncIterator")),X.initSymbolAsyncIterator=function(){}},X.iteratorPrototype=function(j){return X.initSymbolIterator(),j={next:j},j[X.global.Symbol.iterator]=function(){return this},j},X.iteratorFromArray=function(j,F){X.initSymbolIterator(),j instanceof String&&(j+="");var e=0,n={next:function(){if(e<j.length){var t=e++;return{value:F(t,j[t]),done:!1}}return n.next=function(){return{done:!0,value:void 0}},n.next()}};return n[Symbol.iterator]=function(){return n},n},X.polyfill("Array.prototype.values",function(j){return j||function(){return X.iteratorFromArray(this,function(F,e){return e})}},"es8","es3"),function(j){function F(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return j[n].call(t.exports,t,t.exports,F),t.l=!0,t.exports}var e={};return F.m=j,F.c=e,F.d=function(n,t,r){F.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},F.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},F.t=function(n,t){if(t&1&&(n=F(n)),t&8||t&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(F.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),t&2&&typeof n!="string")for(var l in n)F.d(r,l,function(c){return n[c]}.bind(null,l));return r},F.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return F.d(t,"a",t),t},F.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},F.p="",F(F.s=1)}([function(j,F){F=function(){return this}();try{F=F||new Function("return this")()}catch(e){typeof window=="object"&&(F=window)}j.exports=F},function(j,F,e){e(2),Sk.global.strftime=e(3),Sk.global.strptime=e(4),e(5),e(7),e(9),e(10),e(11),e(12),e(13),e(14),e(15),e(16),e(17),e(18),[Sk.builtin.object,Sk.builtin.type].forEach(n=>{Sk.abstr.setUpSlots(n),Sk.abstr.setUpMethods(n),Sk.abstr.setUpGetSets(n)}),e(19),e(20),e(21),[Sk.builtin.str,Sk.builtin.none,Sk.builtin.NotImplemented,Sk.builtin.object].forEach(n=>{n=n.prototype,n.__doc__=n.hasOwnProperty("tp$doc")?new Sk.builtin.str(n.tp$doc):Sk.builtin.none.none$}),e(22),e(23),e(24),e(25),e(26),e(27),e(28),e(29),e(31),e(32),e(33),e(34),e(35),e(36),e(37),e(38),e(39),e(40),e(41),e(42),e(43),e(44),e(45),e(46),e(47),e(48),e(49),e(50),e(51),e(52),e(53),e(54),e(55),e(56),e(57),e(58),e(59),e(60),e(61),e(62),e(63),e(64),e(65)},function(j,F,e){(function(n){var t={build:{githash:"e3c1c1a4e081362d96ba8afc5997be516b437f30",date:"2021-03-25T11:36:32.075Z"}};t.global=typeof n!="undefined"?n:typeof self!="undefined"?self:typeof window!="undefined"?window:{},t.exportSymbol=function(r,l){r=r.split(".");var c=t.global,u;for(u=0;u<r.length-1;u++){var i=r[u];c=c.hasOwnProperty(i)?c[i]:c[i]={}}typeof l!="undefined"&&(i=r[u],c[i]=l)},t.isArrayLike=function(r){return!!(r instanceof Array||r&&r.length&&typeof r.length=="number")},t.js_beautify=function(r){return r},t.exportSymbol("Sk",t),t.exportSymbol("Sk.global",t.global),t.exportSymbol("Sk.build",t.build),t.exportSymbol("Sk.exportSymbol",t.exportSymbol),t.exportSymbol("Sk.isArrayLike",t.isArrayLike),t.exportSymbol("Sk.js_beautify",t.js_beautify)}).call(this,e(0))},function(j,F){(function(){function e(a,$,y){function w(D,f,b,d){for(var S="",g=null,x=!1,N=D.length,O=!1,P=0;P<N;P++){var W=D.charCodeAt(P);if(x===!0)if(W===45)g="";else if(W===95)g=" ";else if(W===48)g="0";else if(W===58)O&&u("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),O=!0;else{switch(W){case 37:S+="%";break;case 65:S+=b.days[f.getDay()];break;case 66:S+=b.months[f.getMonth()];break;case 67:S+=n(Math.floor(f.getFullYear()/100),g);break;case 68:S+=w(b.formats.D,f,b,d);break;case 70:S+=w(b.formats.F,f,b,d);break;case 72:S+=n(f.getHours(),g);break;case 73:S+=n(r(f.getHours()),g);break;case 76:S+=t(Math.floor(d%1e3));break;case 77:S+=n(f.getMinutes(),g);break;case 80:S+=12>f.getHours()?b.am:b.pm;break;case 82:S+=w(b.formats.R,f,b,d);break;case 83:S+=n(f.getSeconds(),g);break;case 84:S+=w(b.formats.T,f,b,d);break;case 85:S+=n(l(f,"sunday"),g);break;case 87:S+=n(l(f,"monday"),g);break;case 88:S+=w(b.formats.X,f,b,d);break;case 89:S+=f.getFullYear();break;case 90:v&&h===0?S+="GMT":(g=f.toString().match(/\(([\w\s]+)\)/),S+=g&&g[1]||"");break;case 97:S+=b.shortDays[f.getDay()];break;case 98:S+=b.shortMonths[f.getMonth()];break;case 99:S+=w(b.formats.c,f,b,d);break;case 100:S+=n(f.getDate(),g);break;case 101:S+=n(f.getDate(),g==null?" ":g);break;case 104:S+=b.shortMonths[f.getMonth()];break;case 106:g=new Date(f.getFullYear(),0,1),g=Math.ceil((f.getTime()-g.getTime())/864e5),S+=t(g);break;case 107:S+=n(f.getHours(),g==null?" ":g);break;case 108:S+=n(r(f.getHours()),g==null?" ":g);break;case 109:S+=n(f.getMonth()+1,g);break;case 110:S+=`
`;break;case 111:g=f.getDate(),S=b.ordinalSuffixes?S+(String(g)+(b.ordinalSuffixes[g-1]||c(g))):S+(String(g)+c(g));break;case 112:S+=12>f.getHours()?b.AM:b.PM;break;case 114:S+=w(b.formats.r,f,b,d);break;case 115:S+=Math.floor(d/1e3);break;case 116:S+="	";break;case 117:g=f.getDay(),S+=g===0?7:g;break;case 118:S+=w(b.formats.v,f,b,d);break;case 119:S+=f.getDay();break;case 120:S+=w(b.formats.x,f,b,d);break;case 121:S+=(""+f.getFullYear()).slice(2);break;case 122:v&&h===0?S+=O?"+00:00":"+0000":(g=h!==0?h/6e4:-f.getTimezoneOffset(),x=O?":":"",W=Math.abs(g%60),S+=(0>g?"-":"+")+n(Math.floor(Math.abs(g/60)))+x+n(W));break;default:x&&(S+="%"),S+=D[P]}g=null,x=!1}else W===37?x=!0:S+=D[P]}return S}var m=a||o,h=$||0,v=y||!1,k=0,A,M=function(D,f){if(f){var b=f.getTime();if(v){var d=6e4*(f.getTimezoneOffset()||0);f=new Date(b+d+h),6e4*(f.getTimezoneOffset()||0)!==d&&(f=6e4*(f.getTimezoneOffset()||0),f=new Date(b+f+h))}}else b=Date.now(),b>k?(k=b,A=new Date(k),b=k,v&&(A=new Date(k+6e4*(A.getTimezoneOffset()||0)+h))):b=k,f=A;return w(D,f,m,b)};return M.localize=function(D){return new e(D||m,h,v)},M.localizeByIdentifier=function(D){var f=i[D];return f?M.localize(f):(u('[WARNING] No locale found with identifier "'+D+'".'),M)},M.timezone=function(D){var f=h,b=v,d=typeof D;return(d==="number"||d==="string")&&(b=!0,d==="string"?(f=D[0]==="-"?-1:1,d=parseInt(D.slice(1,3),10),D=parseInt(D.slice(3,5),10),f=f*(60*d+D)*6e4):d==="number"&&(f=6e4*D)),new e(m,f,b)},M.utc=function(){return new e(m,h,!0)},M}function n(a,$){return $===""||9<a?a:($==null&&($="0"),$+a)}function t(a){return 99<a?a:9<a?"0"+a:"00"+a}function r(a){return a===0?12:12<a?a-12:a}function l(a,$){$=$||"sunday";var y=a.getDay();return $==="monday"&&(y===0?y=6:y--),$=Date.UTC(a.getFullYear(),0,1),a=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),Math.floor((Math.floor((a-$)/864e5)+7-y)/7)}function c(a){var $=a%10;if(a%=100,11<=a&&13>=a||$===0||4<=$)return"th";switch($){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function u(a){typeof console!="undefined"&&typeof console.warn=="function"&&console.warn(a)}var i={de_DE:{days:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),shortDays:"So Mo Di Mi Do Fr Sa".split(" "),months:"Januar Februar M\xE4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),shortMonths:"Jan Feb M\xE4r Apr Mai Jun Jul Aug Sep Okt Nov Dez".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d.%m.%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},en_CA:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ordinalSuffixes:"st nd rd th th th th th th th th th th th th th th th th th st nd rd th th th th th th th st".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},en_US:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),shortDays:"Sun Mon Tue Wed Thu Fri Sat".split(" "),months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),ordinalSuffixes:"st nd rd th th th th th th th th th th th th th th th th th st nd rd th th th th th th th st".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},es_MX:{days:"domingo lunes martes mi\xE9rcoles jueves viernes s\xE1bado".split(" "),shortDays:"dom lun mar mi\xE9 jue vie s\xE1b".split(" "),months:"enero;febrero;marzo;abril;mayo;junio;julio;agosto;septiembre;octubre;noviembre; diciembre".split(";"),shortMonths:"ene feb mar abr may jun jul ago sep oct nov dic".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},fr_FR:{days:"dimanche lundi mardi mercredi jeudi vendredi samedi".split(" "),shortDays:"dim. lun. mar. mer. jeu. ven. sam.".split(" "),months:"janvier f\xE9vrier mars avril mai juin juillet ao\xFBt septembre octobre novembre d\xE9cembre".split(" "),shortMonths:"janv. f\xE9vr. mars avril mai juin juil. ao\xFBt sept. oct. nov. d\xE9c.".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},it_IT:{days:"domenica luned\xEC marted\xEC mercoled\xEC gioved\xEC venerd\xEC sabato".split(" "),shortDays:"dom lun mar mer gio ven sab".split(" "),months:"gennaio febbraio marzo aprile maggio giugno luglio agosto settembre ottobre novembre dicembre".split(" "),shortMonths:"pr mag giu lug ago set ott nov dic".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},nl_NL:{days:"zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),shortDays:"zo ma di wo do vr za".split(" "),months:"januari februari maart april mei juni juli augustus september oktober november december".split(" "),shortMonths:"jan feb mrt apr mei jun jul aug sep okt nov dec".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},pt_BR:{days:"domingo segunda ter\xE7a quarta quinta sexta s\xE1bado".split(" "),shortDays:"Dom Seg Ter Qua Qui Sex S\xE1b".split(" "),months:"janeiro fevereiro mar\xE7o abril maio junho julho agosto setembro outubro novembro dezembro".split(" "),shortMonths:"Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},ru_RU:{days:"\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435 \u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A \u0412\u0442\u043E\u0440\u043D\u0438\u043A \u0421\u0440\u0435\u0434\u0430 \u0427\u0435\u0442\u0432\u0435\u0440\u0433 \u041F\u044F\u0442\u043D\u0438\u0446\u0430 \u0421\u0443\u0431\u0431\u043E\u0442\u0430".split(" "),shortDays:"\u0412\u0441 \u041F\u043D \u0412\u0442 \u0421\u0440 \u0427\u0442 \u041F\u0442 \u0421\u0431".split(" "),months:"\u042F\u043D\u0432\u0430\u0440\u044C \u0424\u0435\u0432\u0440\u0430\u043B\u044C \u041C\u0430\u0440\u0442 \u0410\u043F\u0440\u0435\u043B\u044C \u041C\u0430\u0439 \u0418\u044E\u043D\u044C \u0418\u044E\u043B\u044C \u0410\u0432\u0433\u0443\u0441\u0442 \u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C \u041E\u043A\u0442\u044F\u0431\u0440\u044C \u041D\u043E\u044F\u0431\u0440\u044C \u0414\u0435\u043A\u0430\u0431\u0440\u044C".split(" "),shortMonths:"\u044F\u043D\u0432 \u0444\u0435\u0432 \u043C\u0430\u0440 \u0430\u043F\u0440 \u043C\u0430\u0439 \u0438\u044E\u043D \u0438\u044E\u043B \u0430\u0432\u0433 \u0441\u0435\u043D \u043E\u043A\u0442 \u043D\u043E\u044F \u0434\u0435\u043A".split(" "),AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X",D:"%d.%m.%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},tr_TR:{days:"Pazar Pazartesi Sal\u0131 \xC7ar\u015Famba Per\u015Fembe Cuma Cumartesi".split(" "),shortDays:"Paz Pzt Sal \xC7r\u015F Pr\u015F Cum Cts".split(" "),months:"Ocak \u015Eubat Mart Nisan May\u0131s Haziran Temmuz A\u011Fustos Eyl\xFCl Ekim Kas\u0131m Aral\u0131k".split(" "),shortMonths:"Oca \u015Eub Mar Nis May Haz Tem A\u011Fu Eyl Eki Kas Ara".split(" "),AM:"\xD6\xD6",PM:"\xD6S",am:"\xD6\xD6",pm:"\xD6S",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},zh_CN:{days:"\u661F\u671F\u65E5 \u661F\u671F\u4E00 \u661F\u671F\u4E8C \u661F\u671F\u4E09 \u661F\u671F\u56DB \u661F\u671F\u4E94 \u661F\u671F\u516D".split(" "),shortDays:"\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D".split(""),months:"\u4E00\u6708\u4EFD \u4E8C\u6708\u4EFD \u4E09\u6708\u4EFD \u56DB\u6708\u4EFD \u4E94\u6708\u4EFD \u516D\u6708\u4EFD \u4E03\u6708\u4EFD \u516B\u6708\u4EFD \u4E5D\u6708\u4EFD \u5341\u6708\u4EFD \u5341\u4E00\u6708\u4EFD \u5341\u4E8C\u6708\u4EFD".split(" "),shortMonths:"\u4E00\u6708 \u4E8C\u6708 \u4E09\u6708 \u56DB\u6708 \u4E94\u6708 \u516D\u6708 \u4E03\u6708 \u516B\u6708 \u4E5D\u6708 \u5341\u6708 \u5341\u4E00\u6708 \u5341\u4E8C\u6708".split(" "),AM:"\u4E0A\u5348",PM:"\u4E0B\u5348",am:"\u4E0A\u5348",pm:"\u4E0B\u5348",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}}},o=i.en_US,p=new e(o,0,!1);if(typeof j!="undefined")var s=j.exports=p;else s=function(){return this||(0,eval)("this")}(),s.strftime=p;typeof Date.now!="function"&&(Date.now=function(){return+new Date})})()},function(j,F,e){(function(){var n=function(t,r,l){return n.parse(t,r,l)};n.version="0.0.1",(j.exports=n).strptime=n,n.locale={a:"Sun Mon Tue Wed Thu Fri Sat".split(" "),A:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),b:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),B:"January February March April May June July August September October November December".split(" "),f:"Jan. Feb. Mar. Apr. May Jun. Jul. Aug. Sep. Oct. Nov. Dec.".split(" "),c:"%Y-%m-%d %H:%M:%S",P:["am","pm"],r:"%I:%M:%S %p",x:"%m/%d/%y",X:"%H:%M:%S",day:["Yesterday","Today","Tomorrow"],bg:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),Bg:"January February March April May June July August September October November December".split(" "),fg:"Jan. Feb. Mar. Apr. May Jun. Jul. Aug. Sep. Oct. Nov. Dec.".split(" "),Date_dBY_year_in_HM:"%#B %-d, %Y at %-H:%M",Date_dBY_year:"%#B %-d, %Y",Date_dBY:"%#B %-d, %Y",Date_AdBY:"%A, %#B %-d, %Y",Date_dBA:"%#B %-d, %A",Date_df_in_HM:"%#f, %-d at %-H:%M",Date_dfY:"%-d %#f %Y",Date_dB_in_HM:"%#B %-d at %-H:%M",Date_df:"%-d %#f"},function(t){function r(o,p,s,a,$,y){if(p=String(p),s=String(s),p=p.replace(/^[#_0\^\-!~]+/,""),a=i[p],!a)return o;var w=!1;if(s.indexOf("!")===-1&&p.length===1&&(-1<s.indexOf("~")||-1<"bBf".indexOf(p)&&/%[0\-_]?d[\s]+$/.test(y.substr(0,$)))&&(w=!0),(p==="I"||p==="l")&&!/%[pP]/.test(y))throw Error("Undefined AM/PM");switch(typeof a){case"function":return a();case"string":return a;case"object":return r.make.push([a.make,s,w]),"("+a.reg+")";default:return o}}function l(o,p){return o=String(o),p=String(p),p.indexOf("#")!==-1?o.substr(0,1).toUpperCase()+o.substr(1):p.indexOf("^")!==-1?o.substr(0,1)+o.substr(1).toLowerCase():o}var c=Array.prototype.indexOf||function(o){for(var p=this.length,s=0;s<p;){if(o==this[s])return s;s++}return-1},u=t.locale,i={"%":"\\%",a:"\\S+",A:"\\S+",b:{reg:"\\S+",make:function(o,p,s,a){return p=c.call(a?u.bg:u.b,l(p,s)),p===-1?!1:(o.setUTCMonth(p),!0)}},h:{reg:"\\S+",make:function(o,p,s,a){return p=c.call(a?u.bg:u.b,l(p,s)),p===-1?!1:(o.setUTCMonth(p),!0)}},B:{reg:"\\S+",make:function(o,p,s,a){return p=c.call(a?u.Bg:u.B,l(p,s)),p===-1?!1:(o.setUTCMonth(p),!0)}},f:{reg:"\\S+",make:function(o,p,s,a){return p=c.call(a?u.fg:u.f,l(p,s)),p===-1?!1:(o.setUTCMonth(p),!0)}},g:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),0>p||99<p?!1:(p+=100*parseInt(new Date().getUTCFullYear()/100,10),o.setUTCFullYear(p),!0)}},G:{reg:"\\d{4}",make:function(o,p){return p=parseInt(p,10),o.setUTCFullYear(p),!0}},d:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),1>p||31<p?!1:(o.setUTCDate(p),!0)}},e:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),1>p||31<p?!1:(o.setUTCDate(p),!0)}},H:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),0>p||23<p?!1:(o.setUTCHours(p),!0)}},I:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),1>p||12<p?!1:(o.setUTCHours(o.getUTCHours()+p),!0)}},m:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),1>p||12<p?!1:(o.setUTCMonth(p-1),!0)}},M:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),0>p||59<p?!1:(o.setUTCMinutes(p),!0)}},n:"\\n",p:{reg:"\\S+",make:function(o,p){return p=c.call(u.P,p.toLowerCase()),p===-1?!1:(p===1&&o.setUTCHours(o.getUTCHours()+12),!0)}},P:{reg:"\\S+",make:function(o,p){return p=c.call(u.P,p.toLowerCase()),p===-1?!1:(p===1&&o.setUTCHours(o.getUTCHours()+12),!0)}},S:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),0>p||60<p?!1:(o.setUTCSeconds(p),!0)}},t:"\\t",u:"\\d",U:"[\\d\\s]?\\d",w:"\\d",W:"[\\d\\s]?\\d",y:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),0>p||99<p?!1:(p+=100*parseInt(new Date().getUTCFullYear()/100,10),o.setUTCFullYear(p),!0)}},Y:{reg:"\\d{4}",make:function(o,p){return p=parseInt(p,10),o.setUTCFullYear(p),!0}},z:{reg:"[+\\-]\\d{4}",make:function(o,p){if(p=p.match(/^([+\-])(\d{2})(\d{2})$/),!p)return!1;var s=6e4*(60*parseInt(p[2],10)+parseInt(p[3],10));return p[1]==="+"&&(s=-s),o.setTime(o.getTime()+s),!0}},l:{reg:"[\\d\\s]?\\d",make:function(o,p){return p=parseInt(p,10),1>p||12<p?!1:(o.setUTCHours(o.getUTCHours()+p),!0)}},s:{reg:"\\d+",make:function(o,p){return p=parseInt(p,10),o.setTime(1e3*p),!0}},c:u.c,r:u.r,R:"%H:%M",T:"%H:%M:%S",x:u.x,X:u.X,D:"%m/%d/%y",F:"%Y-%m-%d",Date_iso:"%Y-%m-%dT%H:%M:%S",Date_dBY_year_in_HM:u.Date_dBY_year_in_HM,Date_dBY_year:u.Date_dBY_year,Date_dBY:u.Date_dBY,Date_dBA:u.Date_dBA,Date_AdBY:u.Date_AdBY,Date_df_in_HM:u.Date_df_in_HM,Date_dfY:u.Date_dfY,Date_dB_in_HM:u.Date_dB_in_HM,Date_dmY__dot:"%d.%m.%Y",Date_df:u.Date_df,Date_FT:"%F %T",Date_dmY__minus:"%d-%m-%Y"};t.parse=function(o,p,s){o=String(o),p=String(p);for(var a=5;/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/g.test(p)&&a;)p=p.replace(/%(Date_[a-zA-Z0-9_]+|[cDFrRTxX])/,r),a--;if(r.make=[],p=p.replace(/%(([#\^!~]{0,2})[aAbBfh]|([0\-_]?)[degHImMSVWyl]|[GnpPtuUwYzZs%])/g,r),o=o.match(new RegExp(p)),!o||!r.make.length)return null;p=new Date(Date.UTC(0,0)),a=0;for(var $=r.make.length;a<$;a++){var y=r.make[a];if(!y[0](p,o[a+1],y[1],y[2]))return null}return s&&p.setTime(p.getTime()+6e4*p.getTimezoneOffset()),p}}(n)})()},function(j,F,e){j=e(6);const n=Sk.global.JSBI=Sk.global.BigInt!==void 0?{}:j;if(Sk.global.BigInt===void 0){const t=n.__isBigInt;n.__isBigInt=t?r=>r!==null&&t(r):r=>r instanceof n,n.powermod=(r,l,c)=>{const u=n.BigInt(1);let i=u;for(l=n.greaterThan(l,n.__ZERO)?l:n.unaryMinus(l);n.greaterThan(l,n.__ZERO);)n.bitwiseAnd(l,u)&&(i=n.remainder(n.multiply(i,r),c)),l=n.signedRightShift(l,u),r=n.remainder(n.multiply(r,r),c);return i}}else Object.assign(n,{BigInt:Sk.global.BigInt,toNumber:t=>Number(t),toString:t=>t.toString(),__isBigInt:t=>typeof t=="bigint",unaryMinus:t=>-t,bitwiseNot:t=>~t,bitwiseAnd:(t,r)=>t&r,bitwiseOr:(t,r)=>t|r,bitwiseXor:(t,r)=>t^r,exponentiate:(t,r)=>{const l=n.BigInt(1);let c=l;for(r=r>n.__ZERO?r:-r;r>n.__ZERO;)r&l&&(c*=t),r>>=l,t*=t;return c},powermod:(t,r,l)=>{const c=n.BigInt(1);let u=c;for(r=r>n.__ZERO?r:-r;r>n.__ZERO;)r&c&&(u=u*t%l),r>>=c,t=t*t%l;return u},multiply:(t,r)=>t*r,divide:(t,r)=>t/r,remainder:(t,r)=>t%r,add:(t,r)=>t+r,subtract:(t,r)=>t-r,leftShift:(t,r)=>t<<r,signedRightShift:(t,r)=>t>>r,unsignedRightShift:(t,r)=>t>>>r,lessThan:(t,r)=>t<r,lessThanOrEqual:(t,r)=>t<=r,greaterThan:(t,r)=>t>r,greaterThanOrEqual:(t,r)=>t>=r,equal:(t,r)=>t===r,notEqual:(t,r)=>t!==r});n.__ZERO=n.BigInt(0),n.__MAX_SAFE=n.BigInt(Number.MAX_SAFE_INTEGER),n.__MIN_SAFE=n.BigInt(-Number.MAX_SAFE_INTEGER),n.numberIfSafe=t=>n.lessThan(t,n.__MAX_SAFE)&&n.greaterThan(t,n.__MIN_SAFE)?n.toNumber(t):t},function(j,F,e){(function(n,t){j.exports=t()})(this,function(){function n(v){return n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(k){return typeof k}:function(k){return k&&typeof Symbol=="function"&&k.constructor===Symbol&&k!==Symbol.prototype?"symbol":typeof k},n(v)}function t(v,k){for(var A,M=0;M<k.length;M++)A=k[M],A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(v,A.key,A)}function r(v,k,A){return k&&t(v.prototype,k),A&&t(v,A),v}function l(v,k){if(typeof k!="function"&&k!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(k&&k.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),k&&u(v,k)}function c(v){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(k){return k.__proto__||Object.getPrototypeOf(k)},c(v)}function u(v,k){return u=Object.setPrototypeOf||function(A,M){return A.__proto__=M,A},u(v,k)}function i(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(v){return!1}}function o(){return o=i()?Reflect.construct:function(v,k,A){var M=[null];return M.push.apply(M,k),v=new(Function.bind.apply(v,M)),A&&u(v,A.prototype),v},o.apply(null,arguments)}function p(v){var k=typeof Map=="function"?new Map:void 0;return p=function(A){function M(){return o(A,arguments,c(this).constructor)}if(A===null||Function.toString.call(A).indexOf("[native code]")===-1)return A;if(typeof A!="function")throw new TypeError("Super expression must either be null or a function");if(typeof k!="undefined"){if(k.has(A))return k.get(A);k.set(A,M)}return M.prototype=Object.create(A.prototype,{constructor:{value:M,enumerable:!1,writable:!0,configurable:!0}}),u(M,A)},p(v)}function s(v){var k=i();return function(){var A=c(v);if(k){var M=c(this).constructor;A=Reflect.construct(A,arguments,M)}else A=A.apply(this,arguments);if(!A||typeof A!="object"&&typeof A!="function"){if(this===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");A=this}return A}}function a(v,k){if(v){if(typeof v=="string")return $(v,k);var A=Object.prototype.toString.call(v).slice(8,-1);return A==="Object"&&v.constructor&&(A=v.constructor.name),A==="Map"||A==="Set"?Array.from(v):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?$(v,k):void 0}}function $(v,k){(k==null||k>v.length)&&(k=v.length);for(var A=0,M=Array(k);A<k;A++)M[A]=v[A];return M}function y(v,k){var A;if(typeof Symbol=="undefined"||v[Symbol.iterator]==null){if(Array.isArray(v)||(A=a(v))||k&&v&&typeof v.length=="number"){A&&(v=A);var M=0;return k=function(){},{s:k,n:function(){return M>=v.length?{done:!0}:{done:!1,value:v[M++]}},e:function(d){throw d},f:k}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D,f=!0,b=!1;return{s:function(){A=v[Symbol.iterator]()},n:function(){var d=A.next();return f=d.done,d},e:function(d){b=!0,D=d},f:function(){try{f||A.return==null||A.return()}finally{if(b)throw D}}}}var w=Math.imul,m=Math.clz32,h=function(v){function k(f,b){var d;if(!(this instanceof k))throw new TypeError("Cannot call a class as a function");if(f>k.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");return d=D.call(this,f),d.sign=b,d}var A=Math.abs,M=Math.max;l(k,v);var D=s(k);return r(k,[{key:"toDebugString",value:function(){var f,b=["BigInt["],d=y(this);try{for(d.s();!(f=d.n()).done;){var S=f.value;b.push((S&&(S>>>0).toString(16))+", ")}}catch(g){d.e(g)}finally{d.f()}return b.push("]"),b.join("")}},{key:"toString",value:function(){var f=0<arguments.length&&arguments[0]!==void 0?arguments[0]:10;if(2>f||36<f)throw new RangeError("toString() radix argument must be between 2 and 36");return this.length===0?"0":(f&f-1)==0?k.__toStringBasePowerOfTwo(this,f):k.__toStringGeneric(this,f,!1)}},{key:"__copy",value:function(){for(var f=new k(this.length,this.sign),b=0;b<this.length;b++)f[b]=this[b];return f}},{key:"__trim",value:function(){for(var f=this.length,b=this[f-1];b===0;)f--,b=this[f-1],this.pop();return f===0&&(this.sign=!1),this}},{key:"__initializeDigits",value:function(){for(var f=0;f<this.length;f++)this[f]=0}},{key:"__clzmsd",value:function(){return k.__clz32(this[this.length-1])}},{key:"__inplaceMultiplyAdd",value:function(f,b,d){d>this.length&&(d=this.length);var S=65535&f;f>>>=16;var g=0,x=65535&b;b>>>=16;for(var N=0;N<d;N++){var O=this.__digit(N),P=65535&O,W=O>>>16;O=k.__imul(P,S),P=k.__imul(P,f);var re=k.__imul(W,S);W=k.__imul(W,f);var Q=x+(65535&O);O=b+g+(Q>>>16)+(O>>>16)+(65535&P)+(65535&re),x=(P>>>16)+(re>>>16)+(65535&W)+(O>>>16),g=x>>>16,x&=65535,b=W>>>16,this.__setDigit(N,65535&Q|O<<16)}if(g!==0||x!==0||b!==0)throw Error("implementation bug")}},{key:"__inplaceAdd",value:function(f,b,d){for(var S,g=0,x=0;x<d;x++)S=this.__halfDigit(b+x)+f.__halfDigit(x)+g,g=S>>>16,this.__setHalfDigit(b+x,S);return g}},{key:"__inplaceSub",value:function(f,b,d){var S=0;if(1&b){b>>=1;for(var g=this.__digit(b),x=65535&g,N=0;N<d-1>>>1;N++){var O=f.__digit(N);g=(g>>>16)-(65535&O)-S,S=1&g>>>16,this.__setDigit(b+N,g<<16|65535&x),g=this.__digit(b+N+1),x=(65535&g)-(O>>>16)-S,S=1&x>>>16}O=f.__digit(N);var P=(g>>>16)-(65535&O)-S;if(S=1&P>>>16,this.__setDigit(b+N,P<<16|65535&x),b+N+1>=this.length)throw new RangeError("out of bounds");(1&d)==0&&(g=this.__digit(b+N+1),x=(65535&g)-(O>>>16)-S,S=1&x>>>16,this.__setDigit(b+f.length,4294901760&g|65535&x))}else{for(b>>=1,x=0;x<f.length-1;x++)g=this.__digit(b+x),O=f.__digit(x),N=(65535&g)-(65535&O)-S,S=1&N>>>16,g=(g>>>16)-(O>>>16)-S,S=1&g>>>16,this.__setDigit(b+x,g<<16|65535&N);N=this.__digit(b+x),f=f.__digit(x),g=(65535&N)-(65535&f)-S,S=1&g>>>16,O=0,(1&d)==0&&(O=(N>>>16)-(f>>>16)-S,S=1&O>>>16),this.__setDigit(b+x,O<<16|65535&g)}return S}},{key:"__inplaceRightShift",value:function(f){if(f!==0){for(var b,d=this.__digit(0)>>>f,S=this.length-1,g=0;g<S;g++)b=this.__digit(g+1),this.__setDigit(g,b<<32-f|d),d=b>>>f;this.__setDigit(S,d)}}},{key:"__digit",value:function(f){return this[f]}},{key:"__unsignedDigit",value:function(f){return this[f]>>>0}},{key:"__setDigit",value:function(f,b){this[f]=0|b}},{key:"__setDigitGrow",value:function(f,b){this[f]=0|b}},{key:"__halfDigitLength",value:function(){var f=this.length;return 65535>=this.__unsignedDigit(f-1)?2*f-1:2*f}},{key:"__halfDigit",value:function(f){return 65535&this[f>>>1]>>>((1&f)<<4)}},{key:"__setHalfDigit",value:function(f,b){var d=f>>>1,S=this.__digit(d);this.__setDigit(d,1&f?65535&S|b<<16:4294901760&S|65535&b)}}],[{key:"BigInt",value:function(f){var b=Math.floor,d=Number.isFinite;if(typeof f=="number"){if(f===0)return k.__zero();if((0|f)===f)return 0>f?k.__oneDigit(-f,!0):k.__oneDigit(f,!1);if(!d(f)||b(f)!==f)throw new RangeError("The number "+f+" cannot be converted to BigInt because it is not an integer");return k.__fromDouble(f)}if(typeof f=="string"){if(b=k.__fromString(f),b===null)throw new SyntaxError("Cannot convert "+f+" to a BigInt");return b}if(typeof f=="boolean")return f===!0?k.__oneDigit(1,!1):k.__zero();if(n(f)==="object")return f.constructor===k?f:(f=k.__toPrimitive(f),k.BigInt(f));throw new TypeError("Cannot convert "+f+" to a BigInt")}},{key:"toNumber",value:function(f){var b=f.length;if(b===0)return 0;if(b===1){var d=f.__unsignedDigit(0);return f.sign?-d:d}var S=f.__digit(b-1),g=k.__clz32(S);if(d=32*b-g,1024<d)return f.sign?-1/0:1/0;--d;var x=b-1,N=g+1;g=(N===32?0:S<<N)>>>12;var O=N-12;return b=12<=N?0:S<<20+N,N=20+N,0<O&&0<x&&(x--,S=f.__digit(x),g|=S>>>32-O,b=S<<O,N=O),0<N&&0<x&&(x--,S=f.__digit(x),b|=S>>>32-N,N-=32),S=k.__decideRounding(f,N,x,S),(S===1||S===0&&(1&b)==1)&&(b=b+1>>>0,b===0&&(g++,g>>>20!=0&&(g=0,d++,1023<d)))?f.sign?-1/0:1/0:(f=f.sign?-2147483648:0,d=d+1023<<20,k.__kBitConversionInts[1]=f|d|g,k.__kBitConversionInts[0]=b,k.__kBitConversionDouble[0])}},{key:"unaryMinus",value:function(f){if(f.length===0)return f;var b=f.__copy();return b.sign=!f.sign,b}},{key:"bitwiseNot",value:function(f){return f.sign?k.__absoluteSubOne(f).__trim():k.__absoluteAddOne(f,!0)}},{key:"exponentiate",value:function(f,b){if(b.sign)throw new RangeError("Exponent must be positive");if(b.length===0)return k.__oneDigit(1,!1);if(f.length===0)return f;if(f.length===1&&f.__digit(0)===1)return f.sign&&(1&b.__digit(0))==0?k.unaryMinus(f):f;if(1<b.length)throw new RangeError("BigInt too big");if(b=b.__unsignedDigit(0),b===1)return f;if(b>=k.__kMaxLengthBits)throw new RangeError("BigInt too big");if(f.length===1&&f.__digit(0)===2){var d=1+(b>>>5);return f=new k(d,f.sign&&(1&b)!=0),f.__initializeDigits(),f.__setDigit(d-1,1<<(31&b)),f}d=null;var S=f;for((1&b)!=0&&(d=f),b>>=1;b!==0;b>>=1)S=k.multiply(S,S),(1&b)!=0&&(d===null?d=S:d=k.multiply(d,S));return d}},{key:"multiply",value:function(f,b){if(f.length===0)return f;if(b.length===0)return b;var d=f.length+b.length;32<=f.__clzmsd()+b.__clzmsd()&&d--,d=new k(d,f.sign!==b.sign),d.__initializeDigits();for(var S=0;S<f.length;S++)k.__multiplyAccumulate(b,f.__digit(S),d,S);return d.__trim()}},{key:"divide",value:function(f,b){if(b.length===0)throw new RangeError("Division by zero");if(0>k.__absoluteCompare(f,b))return k.__zero();var d=f.sign!==b.sign,S=b.__unsignedDigit(0);if(b.length===1&&65535>=S){if(S===1)return d===f.sign?f:k.unaryMinus(f);f=k.__absoluteDivSmall(f,S,null)}else f=k.__absoluteDivLarge(f,b,!0,!1);return f.sign=d,f.__trim()}},{key:"remainder",value:function(f,b){if(b.length===0)throw new RangeError("Division by zero");if(0>k.__absoluteCompare(f,b))return f;var d=b.__unsignedDigit(0);return b.length===1&&65535>=d?d===1?k.__zero():(b=k.__absoluteModSmall(f,d),b===0?k.__zero():k.__oneDigit(b,f.sign)):(b=k.__absoluteDivLarge(f,b,!1,!0),b.sign=f.sign,b.__trim())}},{key:"add",value:function(f,b){var d=f.sign;return d===b.sign?k.__absoluteAdd(f,b,d):0<=k.__absoluteCompare(f,b)?k.__absoluteSub(f,b,d):k.__absoluteSub(b,f,!d)}},{key:"subtract",value:function(f,b){var d=f.sign;return d===b.sign?0<=k.__absoluteCompare(f,b)?k.__absoluteSub(f,b,d):k.__absoluteSub(b,f,!d):k.__absoluteAdd(f,b,d)}},{key:"leftShift",value:function(f,b){return b.length===0||f.length===0?f:b.sign?k.__rightShiftByAbsolute(f,b):k.__leftShiftByAbsolute(f,b)}},{key:"signedRightShift",value:function(f,b){return b.length===0||f.length===0?f:b.sign?k.__leftShiftByAbsolute(f,b):k.__rightShiftByAbsolute(f,b)}},{key:"unsignedRightShift",value:function(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}},{key:"lessThan",value:function(f,b){return 0>k.__compareToBigInt(f,b)}},{key:"lessThanOrEqual",value:function(f,b){return 0>=k.__compareToBigInt(f,b)}},{key:"greaterThan",value:function(f,b){return 0<k.__compareToBigInt(f,b)}},{key:"greaterThanOrEqual",value:function(f,b){return 0<=k.__compareToBigInt(f,b)}},{key:"equal",value:function(f,b){if(f.sign!==b.sign||f.length!==b.length)return!1;for(var d=0;d<f.length;d++)if(f.__digit(d)!==b.__digit(d))return!1;return!0}},{key:"notEqual",value:function(f,b){return!k.equal(f,b)}},{key:"bitwiseAnd",value:function(f,b){if(!f.sign&&!b.sign)return k.__absoluteAnd(f,b).__trim();if(f.sign&&b.sign){var d=M(f.length,b.length)+1;return f=k.__absoluteSubOne(f,d),b=k.__absoluteSubOne(b),f=k.__absoluteOr(f,b,f),k.__absoluteAddOne(f,!0,f).__trim()}return f.sign&&(b=[b,f],f=b[0],b=b[1]),k.__absoluteAndNot(f,k.__absoluteSubOne(b)).__trim()}},{key:"bitwiseXor",value:function(f,b){if(!f.sign&&!b.sign)return k.__absoluteXor(f,b).__trim();if(f.sign&&b.sign){var d=M(f.length,b.length);return f=k.__absoluteSubOne(f,d),b=k.__absoluteSubOne(b),k.__absoluteXor(f,b,f).__trim()}return d=M(f.length,b.length)+1,f.sign&&(b=[b,f],f=b[0],b=b[1]),b=k.__absoluteSubOne(b,d),b=k.__absoluteXor(b,f,b),k.__absoluteAddOne(b,!0,b).__trim()}},{key:"bitwiseOr",value:function(f,b){var d=M(f.length,b.length);return!f.sign&&!b.sign?k.__absoluteOr(f,b).__trim():f.sign&&b.sign?(f=k.__absoluteSubOne(f,d),b=k.__absoluteSubOne(b),f=k.__absoluteAnd(f,b,f),k.__absoluteAddOne(f,!0,f).__trim()):(f.sign&&(b=[b,f],f=b[0],b=b[1]),b=k.__absoluteSubOne(b,d),b=k.__absoluteAndNot(b,f,b),k.__absoluteAddOne(b,!0,b).__trim())}},{key:"asIntN",value:function(f,b){if(b.length===0)return b;if(f===0)return k.__zero();if(f>=k.__kMaxLengthBits)return b;var d=f+31>>>5;if(b.length<d)return b;var S=b.__unsignedDigit(d-1),g=1<<(31&f-1);if(b.length===d&&S<g)return b;if((S&g)!==g)return k.__truncateToNBits(f,b);if(!b.sign)return k.__truncateAndSubFromPowerOfTwo(f,b,!0);if((S&g-1)==0){for(var x=d-2;0<=x;x--)if(b.__digit(x)!==0)return k.__truncateAndSubFromPowerOfTwo(f,b,!1);return b.length===d&&S===g?b:k.__truncateToNBits(f,b)}return k.__truncateAndSubFromPowerOfTwo(f,b,!1)}},{key:"asUintN",value:function(f,b){if(b.length===0)return b;if(f===0)return k.__zero();if(b.sign){if(f>k.__kMaxLengthBits)throw new RangeError("BigInt too big");return k.__truncateAndSubFromPowerOfTwo(f,b,!1)}if(f>=k.__kMaxLengthBits)return b;var d=f+31>>>5;if(b.length<d)return b;var S=31&f;return b.length!=d||S!==0&&b.__digit(d-1)>>>S!=0?k.__truncateToNBits(f,b):b}},{key:"ADD",value:function(f,b){if(f=k.__toPrimitive(f),b=k.__toPrimitive(b),typeof f=="string")return typeof b!="string"&&(b=b.toString()),f+b;if(typeof b=="string")return f.toString()+b;if(f=k.__toNumeric(f),b=k.__toNumeric(b),k.__isBigInt(f)&&k.__isBigInt(b))return k.add(f,b);if(typeof f=="number"&&typeof b=="number")return f+b;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}},{key:"LT",value:function(f,b){return k.__compare(f,b,0)}},{key:"LE",value:function(f,b){return k.__compare(f,b,1)}},{key:"GT",value:function(f,b){return k.__compare(f,b,2)}},{key:"GE",value:function(f,b){return k.__compare(f,b,3)}},{key:"EQ",value:function(f,b){for(;;){if(k.__isBigInt(f))return k.__isBigInt(b)?k.equal(f,b):k.EQ(b,f);if(typeof f=="number"){if(k.__isBigInt(b))return k.__equalToNumber(b,f);if(n(b)!=="object")return f==b;b=k.__toPrimitive(b)}else if(typeof f=="string"){if(k.__isBigInt(b))return f=k.__fromString(f),f!==null&&k.equal(f,b);if(n(b)!=="object")return f==b;b=k.__toPrimitive(b)}else if(typeof f=="boolean"){if(k.__isBigInt(b))return k.__equalToNumber(b,+f);if(n(b)!=="object")return f==b;b=k.__toPrimitive(b)}else if(n(f)==="symbol"){if(k.__isBigInt(b))return!1;if(n(b)!=="object")return f==b;b=k.__toPrimitive(b)}else if(n(f)==="object"){if(n(b)==="object"&&b.constructor!==k)return f==b;f=k.__toPrimitive(f)}else return f==b}}},{key:"NE",value:function(f,b){return!k.EQ(f,b)}},{key:"__zero",value:function(){return new k(0,!1)}},{key:"__oneDigit",value:function(f,b){return b=new k(1,b),b.__setDigit(0,f),b}},{key:"__decideRounding",value:function(f,b,d,S){if(0<b)return-1;if(0>b)b=-b-1;else{if(d===0)return-1;d--,S=f.__digit(d),b=31}if(b=1<<b,(S&b)==0)return-1;if(--b,(S&b)!=0)return 1;for(;0<d;)if(d--,f.__digit(d)!==0)return 1;return 0}},{key:"__fromDouble",value:function(f){k.__kBitConversionDouble[0]=f;var b=(2047&k.__kBitConversionInts[1]>>>20)-1023,d=(b>>>5)+1;f=new k(d,0>f);var S=1048575&k.__kBitConversionInts[1]|1048576,g=k.__kBitConversionInts[0];if(b&=31,20>b){var x=20-b,N=x+32;b=S>>>x,S=S<<32-x|g>>>x,g<<=32-x}else b===20?(N=32,b=S,S=g):(x=b-20,N=32-x,b=S<<x|g>>>32-x,S=g<<x);for(f.__setDigit(d-1,b),d-=2;0<=d;d--)0<N?(N-=32,b=S,S=g):b=0,f.__setDigit(d,b);return f.__trim()}},{key:"__isWhitespace",value:function(f){return 13>=f&&9<=f||(159>=f?f==32:131071>=f?f==160||f==5760:196607>=f?(f&=131071,10>=f||f==40||f==41||f==47||f==95||f==4096):f==65279)}},{key:"__fromString",value:function(f){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0,d=0,S=f.length,g=0;if(g===S)return k.__zero();for(var x=f.charCodeAt(g);k.__isWhitespace(x);){if(++g===S)return k.__zero();x=f.charCodeAt(g)}if(x===43){if(++g===S)return null;x=f.charCodeAt(g),d=1}else if(x===45){if(++g===S)return null;x=f.charCodeAt(g),d=-1}if(b===0){if(b=10,x===48){if(++g===S)return k.__zero();if(x=f.charCodeAt(g),x===88||x===120){if(b=16,++g===S)return null;x=f.charCodeAt(g)}else if(x===79||x===111){if(b=8,++g===S)return null;x=f.charCodeAt(g)}else if(x===66||x===98){if(b=2,++g===S)return null;x=f.charCodeAt(g)}}}else if(b===16&&x===48){if(++g===S)return k.__zero();if(x=f.charCodeAt(g),x===88||x===120){if(++g===S)return null;x=f.charCodeAt(g)}}for(;x===48;){if(++g===S)return k.__zero();x=f.charCodeAt(g)}var N=S-g,O=k.__kMaxBitsPerChar[b],P=k.__kBitsPerCharTableMultiplier-1;if(N>1073741824/O)return null;N=new k((O*N+P>>>k.__kBitsPerCharTableShift)+31>>>5,!1);var W=10>b?b:10,re=10<b?b-10:0;if((b&b-1)==0){O>>=k.__kBitsPerCharTableShift;var Q=[],V=[],ee=!1;do{for(var ie,te=P=0;;){if(x-48>>>0<W)ie=x-48;else if((32|x)-97>>>0<re)ie=(32|x)-87;else{ee=!0;break}if(te+=O,P=P<<O|ie,++g===S){ee=!0;break}if(x=f.charCodeAt(g),32<te+O)break}Q.push(P),V.push(te)}while(!ee);k.__fillFromParts(N,Q,V)}else{N.__initializeDigits(),Q=!1,V=0;do{for(ee=0,ie=1;;){if(x-48>>>0<W)P=x-48;else if((32|x)-97>>>0<re)P=(32|x)-87;else{Q=!0;break}if(te=ie*b,4294967295<te)break;if(ie=te,ee=ee*b+P,V++,++g===S){Q=!0;break}x=f.charCodeAt(g)}P=32*k.__kBitsPerCharTableMultiplier-1,N.__inplaceMultiplyAdd(ie,ee,O*V+P>>>k.__kBitsPerCharTableShift+5)}while(!Q)}if(g!==S){if(!k.__isWhitespace(x))return null;for(g++;g<S;g++)if(x=f.charCodeAt(g),!k.__isWhitespace(x))return null}return d!==0&&b!==10?null:(N.sign=d===-1,N.__trim())}},{key:"__fillFromParts",value:function(f,b,d){for(var S=0,g=0,x=0,N=b.length-1;0<=N;N--){var O=b[N],P=d[N];g|=O<<x,x+=P,x===32?(f.__setDigit(S++,g),x=0,g=0):32<x&&(f.__setDigit(S++,g),x-=32,g=O>>>P-x)}if(g!==0){if(S>=f.length)throw Error("implementation bug");f.__setDigit(S++,g)}for(;S<f.length;S++)f.__setDigit(S,0)}},{key:"__toStringBasePowerOfTwo",value:function(f,b){var d=f.length,S=b-1;S=(85&S>>>1)+(85&S),S=(51&S>>>2)+(51&S),S=(15&S>>>4)+(15&S),--b;var g=f.__digit(d-1),x=k.__clz32(g),N=0|(32*d-x+S-1)/S;if(f.sign&&N++,268435456<N)throw Error("string too long");x=Array(N),--N;for(var O=0,P=0,W=0;W<d-1;W++){var re=f.__digit(W);for(O=(O|re<<P)&b,x[N--]=k.__kConversionChars[O],P=S-P,O=re>>>P,P=32-P;P>=S;)x[N--]=k.__kConversionChars[O&b],O>>>=S,P-=S}for(x[N--]=k.__kConversionChars[(O|g<<P)&b],O=g>>>S-P;O!==0;)x[N--]=k.__kConversionChars[O&b],O>>>=S;if(f.sign&&(x[N--]="-"),N!==-1)throw Error("implementation bug");return x.join("")}},{key:"__toStringGeneric",value:function(f,b,d){var S=f.length;if(S===0)return"";if(S===1)return b=f.__unsignedDigit(0).toString(b),d===!1&&f.sign&&(b="-"+b),b;var g=32*S-k.__clz32(f.__digit(S-1));S=k.__kMaxBitsPerChar[b]-1,g*=k.__kBitsPerCharTableMultiplier,S=(0|(g+(S-1))/S)+1>>1,g=k.exponentiate(k.__oneDigit(b,!1),k.__oneDigit(S,!1));var x=g.__unsignedDigit(0);if(g.length===1&&65535>=x){g=new k(f.length,!1),g.__initializeDigits();for(var N=0,O=2*f.length-1;0<=O;O--)N=N<<16|f.__halfDigit(O),g.__setHalfDigit(O,0|N/x),N=0|N%x;x=N.toString(b)}else x=k.__absoluteDivLarge(f,g,!0,!0),g=x.quotient,x=x.remainder.__trim(),x=k.__toStringGeneric(x,b,!0);for(g.__trim(),b=k.__toStringGeneric(g,b,!0);x.length<S;)x="0"+x;return d===!1&&f.sign&&(b="-"+b),b+x}},{key:"__unequalSign",value:function(f){return f?-1:1}},{key:"__absoluteGreater",value:function(f){return f?-1:1}},{key:"__absoluteLess",value:function(f){return f?1:-1}},{key:"__compareToBigInt",value:function(f,b){var d=f.sign;return d!==b.sign?k.__unequalSign(d):(f=k.__absoluteCompare(f,b),0<f?k.__absoluteGreater(d):0>f?k.__absoluteLess(d):0)}},{key:"__compareToNumber",value:function(f,b){if(1|b){var d=f.sign,S=0>b;if(d!==S)return k.__unequalSign(d);if(f.length===0){if(S)throw Error("implementation bug");return b===0?0:-1}return 1<f.length?k.__absoluteGreater(d):(b=A(b),f=f.__unsignedDigit(0),f>b?k.__absoluteGreater(d):f<b?k.__absoluteLess(d):0)}return k.__compareToDouble(f,b)}},{key:"__compareToDouble",value:function(f,b){if(b!==b)return b;if(b===1/0)return-1;if(b===-1/0)return 1;var d=f.sign;if(d!==0>b)return k.__unequalSign(d);if(b===0)throw Error("implementation bug: should be handled elsewhere");if(f.length===0)return-1;if(k.__kBitConversionDouble[0]=b,b=2047&k.__kBitConversionInts[1]>>>20,b==2047)throw Error("implementation bug: handled elsewhere");var S=b-1023;if(0>S)return k.__absoluteGreater(d);b=f.length;var g=f.__digit(b-1),x=k.__clz32(g),N=32*b-x;if(S+=1,N<S)return k.__absoluteLess(d);if(N>S)return k.__absoluteGreater(d);S=1048576|1048575&k.__kBitConversionInts[1];var O=k.__kBitConversionInts[0];if(x=31-x,x!==(N-1)%31)throw Error("implementation bug");if(20>x){var P=20-x;x=P+32,N=S>>>P,S=S<<32-P|O>>>P,O<<=32-P}else x===20?(x=32,N=S,S=O):(P=x-20,x=32-P,N=S<<P|O>>>32-P,S=O<<P);if(g>>>=0,N>>>=0,g>N)return k.__absoluteGreater(d);if(g<N)return k.__absoluteLess(d);for(b-=2;0<=b;b--){if(0<x?(x-=32,N=S>>>0,S=O,O=0):N=0,g=f.__unsignedDigit(b),g>N)return k.__absoluteGreater(d);if(g<N)return k.__absoluteLess(d)}if(S!==0||O!==0){if(x===0)throw Error("implementation bug");return k.__absoluteLess(d)}return 0}},{key:"__equalToNumber",value:function(f,b){return b|b===0?b===0?f.length===0:f.length===1&&f.sign===0>b&&f.__unsignedDigit(0)===A(b):k.__compareToDouble(f,b)===0}},{key:"__comparisonResultToBool",value:function(f,b){switch(b){case 0:return 0>f;case 1:return 0>=f;case 2:return 0<f;case 3:return 0<=f}throw Error("unreachable")}},{key:"__compare",value:function(f,b,d){if(f=k.__toPrimitive(f),b=k.__toPrimitive(b),typeof f=="string"&&typeof b=="string")switch(d){case 0:return f<b;case 1:return f<=b;case 2:return f>b;case 3:return f>=b}if(k.__isBigInt(f)&&typeof b=="string")return b=k.__fromString(b),b!==null&&k.__comparisonResultToBool(k.__compareToBigInt(f,b),d);if(typeof f=="string"&&k.__isBigInt(b))return f=k.__fromString(f),f!==null&&k.__comparisonResultToBool(k.__compareToBigInt(f,b),d);if(f=k.__toNumeric(f),b=k.__toNumeric(b),k.__isBigInt(f)){if(k.__isBigInt(b))return k.__comparisonResultToBool(k.__compareToBigInt(f,b),d);if(typeof b!="number")throw Error("implementation bug");return k.__comparisonResultToBool(k.__compareToNumber(f,b),d)}if(typeof f!="number")throw Error("implementation bug");if(k.__isBigInt(b))return k.__comparisonResultToBool(k.__compareToNumber(b,f),2^d);if(typeof b!="number")throw Error("implementation bug");return d===0?f<b:d===1?f<=b:d===2?f>b:d===3?f>=b:void 0}},{key:"__absoluteAdd",value:function(f,b,d){if(f.length<b.length)return k.__absoluteAdd(b,f,d);if(f.length===0)return f;if(b.length===0)return f.sign===d?f:k.unaryMinus(f);var S=f.length;(f.__clzmsd()===0||b.length===f.length&&b.__clzmsd()===0)&&S++,d=new k(S,d);for(var g=S=0;g<b.length;g++){var x=b.__digit(g),N=f.__digit(g),O=(65535&N)+(65535&x)+S;x=(N>>>16)+(x>>>16)+(O>>>16),S=x>>>16,d.__setDigit(g,65535&O|x<<16)}for(;g<f.length;g++)O=f.__digit(g),b=(65535&O)+S,O=(O>>>16)+(b>>>16),S=O>>>16,d.__setDigit(g,65535&b|O<<16);return g<d.length&&d.__setDigit(g,S),d.__trim()}},{key:"__absoluteSub",value:function(f,b,d){if(f.length===0)return f;if(b.length===0)return f.sign===d?f:k.unaryMinus(f);d=new k(f.length,d);for(var S=0,g=0;g<b.length;g++){var x=f.__digit(g),N=b.__digit(g),O=(65535&x)-(65535&N)-S;S=1&O>>>16,x=(x>>>16)-(N>>>16)-S,S=1&x>>>16,d.__setDigit(g,65535&O|x<<16)}for(;g<f.length;g++)O=f.__digit(g),b=(65535&O)-S,S=1&b>>>16,O=(O>>>16)-S,S=1&O>>>16,d.__setDigit(g,65535&b|O<<16);return d.__trim()}},{key:"__absoluteAddOne",value:function(f,b){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,S=f.length;d===null?d=new k(S,b):d.sign=b;for(var g,x=!0,N=0;N<S;N++)g=f.__digit(N),x&&(x=g===-1,g=0|g+1),d.__setDigit(N,g);return x&&d.__setDigitGrow(S,1),d}},{key:"__absoluteSubOne",value:function(f,b){var d=f.length;b=b||d;for(var S,g=new k(b,!1),x=!0,N=0;N<d;N++)S=f.__digit(N),x&&(x=S===0,S=0|S-1),g.__setDigit(N,S);if(x)throw Error("implementation bug");for(f=d;f<b;f++)g.__setDigit(f,0);return g}},{key:"__absoluteAnd",value:function(f,b){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,S=f.length,g=b.length,x=g;for(S<g&&(x=S,S=f,f=b,b=S),S=x,d===null?d=new k(S,!1):S=d.length,g=0;g<x;g++)d.__setDigit(g,f.__digit(g)&b.__digit(g));for(;g<S;g++)d.__setDigit(g,0);return d}},{key:"__absoluteAndNot",value:function(f,b){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,S=f.length,g=b.length,x=g;S<g&&(x=S),g=S,d===null?d=new k(g,!1):g=d.length;for(var N=0;N<x;N++)d.__setDigit(N,f.__digit(N)&~b.__digit(N));for(;N<S;N++)d.__setDigit(N,f.__digit(N));for(;N<g;N++)d.__setDigit(N,0);return d}},{key:"__absoluteOr",value:function(f,b){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,S=f.length,g=b.length,x=g;if(S<g){x=S;var N=f;f=b,S=g,b=N}for(g=S,d===null?d=new k(g,!1):g=d.length,N=0;N<x;N++)d.__setDigit(N,f.__digit(N)|b.__digit(N));for(;N<S;N++)d.__setDigit(N,f.__digit(N));for(;N<g;N++)d.__setDigit(N,0);return d}},{key:"__absoluteXor",value:function(f,b){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null,S=f.length,g=b.length,x=g;if(S<g){x=S;var N=f;f=b,S=g,b=N}for(g=S,d===null?d=new k(g,!1):g=d.length,N=0;N<x;N++)d.__setDigit(N,f.__digit(N)^b.__digit(N));for(;N<S;N++)d.__setDigit(N,f.__digit(N));for(;N<g;N++)d.__setDigit(N,0);return d}},{key:"__absoluteCompare",value:function(f,b){var d=f.length-b.length;if(d!=0)return d;for(d=f.length-1;0<=d&&f.__digit(d)===b.__digit(d);)d--;return 0>d?0:f.__unsignedDigit(d)>b.__unsignedDigit(d)?1:-1}},{key:"__multiplyAccumulate",value:function(f,b,d,S){if(b!==0){for(var g=65535&b,x=b>>>16,N=b=0,O=0,P=0;P<f.length;P++,S++){var W=d.__digit(S),re=65535&W;W>>>=16;var Q=f.__digit(P),V=65535&Q,ee=Q>>>16;Q=k.__imul(V,g),V=k.__imul(V,x);var ie=k.__imul(ee,g);ee=k.__imul(ee,x),re+=N+(65535&Q),W+=O+b+(re>>>16)+(Q>>>16)+(65535&V)+(65535&ie),b=W>>>16,N=(V>>>16)+(ie>>>16)+(65535&ee)+b,b=N>>>16,N&=65535,O=ee>>>16,W=65535&re|W<<16,d.__setDigit(S,W)}for(;b!==0||N!==0||O!==0;S++)g=d.__digit(S),f=(65535&g)+N,g=(g>>>16)+(f>>>16)+O+b,O=N=0,b=g>>>16,g=65535&f|g<<16,d.__setDigit(S,g)}}},{key:"__internalMultiplyAdd",value:function(f,b,d,S,g){for(var x=0,N=0;N<S;N++){var O=f.__digit(N),P=k.__imul(65535&O,b),W=(65535&P)+x+d;d=W>>>16,x=k.__imul(O>>>16,b),P=(65535&x)+(P>>>16)+d,d=P>>>16,x>>>=16,g.__setDigit(N,P<<16|65535&W)}if(g.length>S)for(g.__setDigit(S++,d+x);S<g.length;)g.__setDigit(S++,0);else if(d+x!==0)throw Error("implementation bug")}},{key:"__absoluteDivSmall",value:function(f,b,d){d===null&&(d=new k(f.length,!1));for(var S=0,g=2*f.length-1;0<=g;g-=2){S=(S<<16|f.__halfDigit(g))>>>0;var x=0|S/b;S=0|S%b,S=(S<<16|f.__halfDigit(g-1))>>>0;var N=0|S/b;S=0|S%b,d.__setDigit(g>>>1,x<<16|N)}return d}},{key:"__absoluteModSmall",value:function(f,b){for(var d=0,S=2*f.length-1;0<=S;S--)d=(d<<16|f.__halfDigit(S))>>>0,d=0|d%b;return d}},{key:"__absoluteDivLarge",value:function(f,b,d,S){var g=b.__halfDigitLength(),x=b.length,N=f.__halfDigitLength()-g,O=null;d&&(O=new k(N+2>>>1,!1),O.__initializeDigits());var P=new k(g+2>>>1,!1);P.__initializeDigits();var W=k.__clz16(b.__halfDigit(g-1));0<W&&(b=k.__specialLeftShift(b,W,0)),f=k.__specialLeftShift(f,W,1);for(var re=b.__halfDigit(g-1),Q=0;0<=N;N--){var V=65535,ee=f.__halfDigit(N+g);if(ee!==re){ee=(ee<<16|f.__halfDigit(N+g-1))>>>0,V=0|ee/re,ee=0|ee%re;for(var ie=b.__halfDigit(g-2),te=f.__halfDigit(N+g-2);k.__imul(V,ie)>>>0>(ee<<16|te)>>>0&&(V--,ee+=re,!(65535<ee)););}k.__internalMultiplyAdd(b,V,0,x,P),ee=f.__inplaceSub(P,N,g+1),ee!==0&&(ee=f.__inplaceAdd(b,N,g),f.__setHalfDigit(N+g,f.__halfDigit(N+g)+ee),V--),d&&(1&N?Q=V<<16:O.__setDigit(N>>>1,Q|V))}return S?(f.__inplaceRightShift(W),d?{quotient:O,remainder:f}:f):d?O:void 0}},{key:"__clz16",value:function(f){return k.__clz32(f)-16}},{key:"__specialLeftShift",value:function(f,b,d){var S=f.length,g=new k(S+d,!1);if(b===0){for(b=0;b<S;b++)g.__setDigit(b,f.__digit(b));return 0<d&&g.__setDigit(S,0),g}for(var x,N=0,O=0;O<S;O++)x=f.__digit(O),g.__setDigit(O,x<<b|N),N=x>>>32-b;return 0<d&&g.__setDigit(S,N),g}},{key:"__leftShiftByAbsolute",value:function(f,b){var d=k.__toShiftAmount(b);if(0>d)throw new RangeError("BigInt too big");b=d>>>5;var S=31&d,g=f.length,x=S!==0&&f.__digit(g-1)>>>32-S!=0,N=g+b+(x?1:0);if(d=new k(N,f.sign),S===0){for(S=0;S<b;S++)d.__setDigit(S,0);for(;S<N;S++)d.__setDigit(S,f.__digit(S-b))}else{for(var O=N=0;O<b;O++)d.__setDigit(O,0);for(var P=0;P<g;P++)O=f.__digit(P),d.__setDigit(P+b,O<<S|N),N=O>>>32-S;if(x)d.__setDigit(g+b,N);else if(N!==0)throw Error("implementation bug")}return d.__trim()}},{key:"__rightShiftByAbsolute",value:function(f,b){var d=f.length,S=f.sign,g=k.__toShiftAmount(b);if(0>g)return k.__rightShiftByMaximum(S);b=g>>>5;var x=31&g,N=d-b;if(0>=N)return k.__rightShiftByMaximum(S);if(g=!1,S){if((f.__digit(b)&(1<<x)-1)!=0)g=!0;else for(var O=0;O<b;O++)if(f.__digit(O)!==0){g=!0;break}}if(g&&x===0&&~f.__digit(d-1)==0&&N++,S=new k(N,S),x===0)for(x=b;x<d;x++)S.__setDigit(x-b,f.__digit(x));else{N=f.__digit(b)>>>x,O=d-b-1;for(var P=0;P<O;P++)d=f.__digit(P+b+1),S.__setDigit(P,d<<32-x|N),N=d>>>x;S.__setDigit(O,N)}return g&&(S=k.__absoluteAddOne(S,!0,S)),S.__trim()}},{key:"__rightShiftByMaximum",value:function(f){return f?k.__oneDigit(1,!0):k.__zero()}},{key:"__toShiftAmount",value:function(f){return 1<f.length?-1:(f=f.__unsignedDigit(0),f>k.__kMaxLengthBits?-1:f)}},{key:"__toPrimitive",value:function(f){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"default";if(n(f)!=="object"||f.constructor===k)return f;var d=f[Symbol.toPrimitive];if(d){if(b=d(b),n(b)!=="object")return b;throw new TypeError("Cannot convert object to primitive value")}if((b=f.valueOf)&&(b=b.call(f),n(b)!=="object")||(b=f.toString)&&(b=b.call(f),n(b)!=="object"))return b;throw new TypeError("Cannot convert object to primitive value")}},{key:"__toNumeric",value:function(f){return k.__isBigInt(f)?f:+f}},{key:"__isBigInt",value:function(f){return n(f)==="object"&&f.constructor===k}},{key:"__truncateToNBits",value:function(f,b){var d=f+31>>>5,S=new k(d,b.sign);--d;for(var g=0;g<d;g++)S.__setDigit(g,b.__digit(g));return b=b.__digit(d),(31&f)!=0&&(f=32-(31&f),b=b<<f>>>f),S.__setDigit(d,b),S.__trim()}},{key:"__truncateAndSubFromPowerOfTwo",value:function(f,b,d){var S=Math.min,g=f+31>>>5;d=new k(g,d);var x=0;--g;var N=0;for(S=S(g,b.length);x<S;x++){var O=b.__digit(x),P=-(65535&O)-N;N=1&P>>>16,O=-(O>>>16)-N,N=1&O>>>16,d.__setDigit(x,65535&P|O<<16)}for(;x<g;x++)d.__setDigit(x,0|-N);return b=g<b.length?b.__digit(g):0,f&=31,f===0?(N=-(65535&b)-N,N=65535&N|-(b>>>16)-(1&N>>>16)<<16):(f=32-f,b=b<<f>>>f,f=1<<32-f,N=(65535&f)-(65535&b)-N,N=(65535&N|(f>>>16)-(b>>>16)-(1&N>>>16)<<16)&f-1),d.__setDigit(g,N),d.__trim()}},{key:"__digitPow",value:function(f,b){for(var d=1;0<b;)1&b&&(d*=f),b>>>=1,f*=f;return d}}]),k}(p(Array));return h.__kMaxLength=33554432,h.__kMaxLengthBits=h.__kMaxLength<<5,h.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],h.__kBitsPerCharTableShift=5,h.__kBitsPerCharTableMultiplier=1<<h.__kBitsPerCharTableShift,h.__kConversionChars="0123456789abcdefghijklmnopqrstuvwxyz".split(""),h.__kBitConversionBuffer=new ArrayBuffer(8),h.__kBitConversionDouble=new Float64Array(h.__kBitConversionBuffer),h.__kBitConversionInts=new Int32Array(h.__kBitConversionBuffer),h.__clz32=m||function(v){var k=Math.LN2,A=Math.log;return v===0?32:0|31-(0|A(v>>>0)/k)},h.__imul=w||function(v,k){return 0|v*k},h})},function(j,F,e){(function(n,t){(function(r,l){function c(A){delete w[A]}function u(A){if(m)setTimeout(u,0,A);else{var M=w[A];if(M){m=!0;try{var D=M.callback,f=M.args;switch(f.length){case 0:D();break;case 1:D(f[0]);break;case 2:D(f[0],f[1]);break;case 3:D(f[0],f[1],f[2]);break;default:D.apply(l,f)}}finally{c(A),m=!1}}}}function i(){v=function(A){t.nextTick(function(){u(A)})}}function o(){if(r.postMessage&&!r.importScripts){var A=!0,M=r.onmessage;return r.onmessage=function(){A=!1},r.postMessage("","*"),r.onmessage=M,A}}function p(){var A="setImmediate$"+Math.random()+"$",M=function(D){D.source===r&&typeof D.data=="string"&&D.data.indexOf(A)===0&&u(+D.data.slice(A.length))};r.addEventListener?r.addEventListener("message",M,!1):r.attachEvent("onmessage",M),v=function(D){r.postMessage(A+D,"*")}}function s(){var A=new MessageChannel;A.port1.onmessage=function(M){u(M.data)},v=function(M){A.port2.postMessage(M)}}function a(){var A=h.documentElement;v=function(M){var D=h.createElement("script");D.onreadystatechange=function(){u(M),D.onreadystatechange=null,A.removeChild(D),D=null},A.appendChild(D)}}function $(){v=function(A){setTimeout(u,0,A)}}if(!r.setImmediate){var y=1,w={},m=!1,h=r.document,v,k=Object.getPrototypeOf&&Object.getPrototypeOf(r);k=k&&k.setTimeout?k:r,{}.toString.call(r.process)==="[object process]"?i():o()?p():r.MessageChannel?s():h&&"onreadystatechange"in h.createElement("script")?a():$(),k.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var M=Array(arguments.length-1),D=0;D<M.length;D++)M[D]=arguments[D+1];return w[y]={callback:A,args:M},v(y),y++},k.clearImmediate=c}})(typeof self=="undefined"?typeof n=="undefined"?this:n:self)}).call(this,e(0),e(8))},function(j,F){function e(){throw Error("setTimeout has not been defined")}function n(){throw Error("clearTimeout has not been defined")}function t(w){if(o===setTimeout)return setTimeout(w,0);if((o===e||!o)&&setTimeout)return o=setTimeout,setTimeout(w,0);try{return o(w,0)}catch(m){try{return o.call(null,w,0)}catch(h){return o.call(this,w,0)}}}function r(w){if(p===clearTimeout)return clearTimeout(w);if((p===n||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(w);try{return p(w)}catch(m){try{return p.call(null,w)}catch(h){return p.call(this,w)}}}function l(){a&&$&&(a=!1,$.length?s=$.concat(s):y=-1,s.length&&c())}function c(){if(!a){var w=t(l);a=!0;for(var m=s.length;m;){for($=s,s=[];++y<m;)$&&$[y].run();y=-1,m=s.length}$=null,a=!1,r(w)}}function u(w,m){this.fun=w,this.array=m}function i(){}j=j.exports={};try{var o=typeof setTimeout=="function"?setTimeout:e}catch(w){o=e}try{var p=typeof clearTimeout=="function"?clearTimeout:n}catch(w){p=n}var s=[],a=!1,$,y=-1;j.nextTick=function(w){var m=Array(arguments.length-1);if(1<arguments.length)for(var h=1;h<arguments.length;h++)m[h-1]=arguments[h];s.push(new u(w,m)),s.length!==1||a||t(c)},u.prototype.run=function(){this.fun.apply(null,this.array)},j.title="browser",j.browser=!0,j.env={},j.argv=[],j.version="",j.versions={},j.on=i,j.addListener=i,j.once=i,j.off=i,j.removeListener=i,j.removeAllListeners=i,j.emit=i,j.prependListener=i,j.prependOnceListener=i,j.listeners=function(w){return[]},j.binding=function(w){throw Error("process.binding is not supported")},j.cwd=function(){return"/"},j.chdir=function(w){throw Error("process.chdir is not supported")},j.umask=function(){return 0}},function(j,F){Sk.asserts={},Sk.asserts.assert=function(e,n){return e},Sk.exportSymbol("Sk.asserts.assert",Sk.asserts.assert),Sk.asserts.fail=function(e){},Sk.exportSymbol("Sk.asserts.fail",Sk.asserts.fail)},function(j,F){Sk.bool_check=function(e,n){if(e==null||typeof e!="boolean")throw Error("must specify "+n+" and it must be a boolean")},Sk.python2={print_function:!1,division:!1,absolute_import:null,unicode_literals:!1,python3:!1,class_repr:!1,inherit_from_object:!1,super_args:!1,octal_number_literal:!1,bankers_rounding:!1,python_version:!1,dunder_round:!1,exceptions:!1,no_long_type:!1,ceil_floor_int:!1,silent_octal_literal:!0},Sk.python3={print_function:!0,division:!0,absolute_import:null,unicode_literals:!0,python3:!0,class_repr:!0,inherit_from_object:!0,super_args:!0,octal_number_literal:!0,bankers_rounding:!0,python_version:!0,dunder_round:!0,exceptions:!0,no_long_type:!0,ceil_floor_int:!0,silent_octal_literal:!1},Sk.configure=function(e){Sk.output=e.output||Sk.output,Sk.asserts.assert(typeof Sk.output=="function"),Sk.debugout=e.debugout||Sk.debugout,Sk.asserts.assert(typeof Sk.debugout=="function"),Sk.uncaughtException=e.uncaughtException||Sk.uncaughtException,Sk.asserts.assert(typeof Sk.uncaughtException=="function"),Sk.read=e.read||Sk.read,Sk.asserts.assert(typeof Sk.read=="function"),Sk.nonreadopen=e.nonreadopen||!1,Sk.asserts.assert(typeof Sk.nonreadopen=="boolean"),Sk.fileopen=e.fileopen||void 0,Sk.asserts.assert(typeof Sk.fileopen=="function"||typeof Sk.fileopen=="undefined"),Sk.filewrite=e.filewrite||void 0,Sk.asserts.assert(typeof Sk.filewrite=="function"||typeof Sk.filewrite=="undefined"),Sk.timeoutMsg=e.timeoutMsg||Sk.timeoutMsg,Sk.asserts.assert(typeof Sk.timeoutMsg=="function"),Sk.exportSymbol("Sk.timeoutMsg",Sk.timeoutMsg),Sk.sysargv=e.sysargv||Sk.sysargv,Sk.asserts.assert(Sk.isArrayLike(Sk.sysargv)),Sk.__future__=e.__future__||Sk.python3,Sk.bool_check(Sk.__future__.print_function,"Sk.__future__.print_function"),Sk.bool_check(Sk.__future__.division,"Sk.__future__.division"),Sk.bool_check(Sk.__future__.unicode_literals,"Sk.__future__.unicode_literals"),Sk.bool_check(Sk.__future__.class_repr,"Sk.__future__.class_repr"),Sk.bool_check(Sk.__future__.inherit_from_object,"Sk.__future__.inherit_from_object"),Sk.bool_check(Sk.__future__.super_args,"Sk.__future__.super_args"),Sk.bool_check(Sk.__future__.octal_number_literal,"Sk.__future__.octal_number_literal"),Sk.bool_check(Sk.__future__.bankers_rounding,"Sk.__future__.bankers_rounding"),Sk.bool_check(Sk.__future__.python_version,"Sk.__future__.python_version"),Sk.bool_check(Sk.__future__.dunder_round,"Sk.__future__.dunder_round"),Sk.bool_check(Sk.__future__.exceptions,"Sk.__future__.exceptions"),Sk.bool_check(Sk.__future__.no_long_type,"Sk.__future__.no_long_type"),Sk.bool_check(Sk.__future__.ceil_floor_int,"Sk.__future__.ceil_floor_int"),Sk.bool_check(Sk.__future__.silent_octal_literal,"Sk.__future__.silent_octal_literal"),Sk.imageProxy=e.imageProxy||"http://localhost:8080/320x",Sk.asserts.assert(typeof Sk.imageProxy=="string"||typeof Sk.imageProxy=="function"),Sk.inputfun=e.inputfun||Sk.inputfun,Sk.asserts.assert(typeof Sk.inputfun=="function"),Sk.inputfunTakesPrompt=e.inputfunTakesPrompt||!1,Sk.asserts.assert(typeof Sk.inputfunTakesPrompt=="boolean"),Sk.retainGlobals=e.retainglobals||e.retainGlobals||!1,Sk.asserts.assert(typeof Sk.retainGlobals=="boolean"),Sk.debugging=e.debugging||!1,Sk.asserts.assert(typeof Sk.debugging=="boolean"),Sk.killableWhile=e.killableWhile||!1,Sk.asserts.assert(typeof Sk.killableWhile=="boolean"),Sk.killableFor=e.killableFor||!1,Sk.asserts.assert(typeof Sk.killableFor=="boolean"),Sk.signals=e.signals,Sk.signals=Sk.signals===!0?{listeners:[],addEventListener(n){Sk.signals.listeners.push(n)},removeEventListener(n){n=Sk.signals.listeners.indexOf(n),0<=n&&Sk.signals.listeners.splice(n,1)},signal(n,t){for(var r=0;r<Sk.signals.listeners.length;r++)Sk.signals.listeners[r].call(null,n,t)}}:null,Sk.asserts.assert(typeof Sk.signals=="object"),Sk.breakpoints=e.breakpoints||function(){return!0},Sk.asserts.assert(typeof Sk.breakpoints=="function"),Sk.setTimeout=e.setTimeout,Sk.setTimeout===void 0&&(Sk.setTimeout=typeof setTimeout=="function"?function(n,t){setTimeout(n,t)}:function(n,t){n()}),Sk.asserts.assert(typeof Sk.setTimeout=="function"),"execLimit"in e&&(Sk.execLimit=e.execLimit),"yieldLimit"in e&&(Sk.yieldLimit=e.yieldLimit),e.syspath&&(Sk.syspath=e.syspath,Sk.asserts.assert(Sk.isArrayLike(Sk.syspath)),Sk.realsyspath=void 0,Sk.sysmodules=new Sk.builtin.dict([])),Sk.misceval.softspace_=!1,Sk.switch_version(Sk.__future__.python3),Sk.builtin.str.$next=Sk.__future__.python3?new Sk.builtin.str("__next__"):new Sk.builtin.str("next"),Sk.setupOperators(Sk.__future__.python3),Sk.setupDunderMethods(Sk.__future__.python3),Sk.setupObjects(Sk.__future__.python3),Sk.token.setupTokens(Sk.__future__.python3)},Sk.exportSymbol("Sk.configure",Sk.configure),Sk.uncaughtException=function(e){throw e},Sk.uncaughtException=function(e){throw e},Sk.exportSymbol("Sk.uncaughtException",Sk.uncaughtException),Sk.timeoutMsg=function(){return"Program exceeded run time limit."},Sk.exportSymbol("Sk.timeoutMsg",Sk.timeoutMsg),Sk.execLimit=Number.POSITIVE_INFINITY,Sk.yieldLimit=Number.POSITIVE_INFINITY,Sk.output=function(e){},Sk.read=function(e){if(Sk.builtinFiles===void 0)throw"skulpt-stdlib.js has not been loaded";if(Sk.builtinFiles.files[e]===void 0)throw"File not found: '"+e+"'";return Sk.builtinFiles.files[e]},Sk.sysargv=[],Sk.getSysArgv=function(){return Sk.sysargv},Sk.exportSymbol("Sk.getSysArgv",Sk.getSysArgv),Sk.syspath=[],Sk.inBrowser=Sk.global.document!==void 0,Sk.debugout=function(e){},function(){Sk.global.write!==void 0?Sk.output=Sk.global.write:Sk.global.console!==void 0&&Sk.global.console.log!==void 0?Sk.output=function(e){Sk.global.console.log(e)}:Sk.global.print!==void 0&&(Sk.output=Sk.global.print),Sk.global.console!==void 0&&Sk.global.console.log!==void 0?Sk.debugout=function(e){Sk.global.console.log(e)}:Sk.global.print!==void 0&&(Sk.debugout=Sk.global.print)}(),Sk.inputfun=function(e){return window.prompt(e)},Sk.setup_method_mappings=function(){},Sk.setupDictIterators=function(e){},Sk.switch_version=function(e){const n={float_:{method_names:["__round__"],2:[!1],3:[!0]},int_:{method_names:["__round__"],2:[!1],3:[!0]},list:{method_names:["clear","copy","sort"],2:[!1,!1,!0],3:[!0,!0,!0]},dict:{method_names:["has_key","keys","items","values"],2:[!0,!0,!0,!0],3:[!1,!0,!0,!0]}};for(let c in n){const u=Sk.builtin[c],i=n[c].method_names;var t=n[c][3];if(e&&u.py3$methods===void 0)break;if(u.py3$methods===void 0){u.py3$methods={};for(var r=0;r<i.length;r++){var l=i[r];t[r]&&(u.py3$methods[l]=u.prototype[l].d$def)}}for(e?r=u.py3$methods:(t=n[c][2],r=u.py2$methods),l=0;l<i.length;l++){const o=i[l];delete u.prototype[o],t[l]&&(u.prototype[o]=new Sk.builtin.method_descriptor(u,r[o]))}}},Sk.exportSymbol("Sk.__future__",Sk.__future__),Sk.exportSymbol("Sk.inputfun",Sk.inputfun)},function(j,F){function e(i){return this.prototype[i.$mangled]}function n(i){i=i.$mangled;const o=this.prototype.tp$mro;for(let p=0;p<o.length;++p){const s=o[p].prototype;if(s.hasOwnProperty(i))return s[i]}}function t(i,o,p,s){const a=r(p),$=o.prototype;Sk.abstr.setUpInheritance(i,o,a,s),Object.defineProperties($,{sk$prototypical:{value:!0,writable:!0},tp$bases:{value:p,writable:!0},tp$mro:{value:null,writable:!0},hp$type:{value:!0,writable:!0}}),$.tp$mro=o.$buildMRO(),Object.defineProperties(o,{$typeLookup:{value:$.sk$prototypical?e:n,writable:!0},sk$klass:{value:!0,writable:!0}})}function r(i){function o(y){return y.sk$klass===void 0?y:o(y.prototype.tp$base)}i.length===0&&i.push(Sk.builtin.object);let p,s,a,$;for(let y=0;y<i.length;y++){if($=i[y],!Sk.builtin.checkClass($))throw new Sk.builtin.TypeError("bases must be 'type' objects");if($.sk$acceptable_as_base_class===!1)throw new Sk.builtin.TypeError("type '"+$.prototype.tp$name+"' is not an acceptable base type");if(a=o($),s===void 0)s=a,p=$;else if(!s.$isSubType(a))if(a.$isSubType(s))s=a,p=$;else throw new Sk.builtin.TypeError("multiple bases have instance layout conflicts")}return p}function l(i){for(;i.prototype.tp$base!==null;){if(i.sk$klass===void 0&&i.prototype.hasOwnProperty("__dict__"))return i=i.prototype.__dict__,Sk.builtin.checkDataDescr(i)?i:void 0;i=i.prototype.tp$base}}function c(i,o,p){if(i.sk$klass===void 0)throw new Sk.builtin.TypeError("can't set "+i.prototype.tp$name+"."+p.$jsstr());if(o===void 0)throw new Sk.builtin.TypeError("can't delete "+i.prototype.tp$name+"."+p.$jsstr())}Sk.builtin===void 0&&(Sk.builtin={}),Sk.builtin.type=function(i){return this instanceof Sk.builtin.type&&Sk.asserts.fail("calling new Sk.builtin.type is not safe"),i.ob$type},Object.defineProperties(Sk.builtin.type.prototype,{call:{value:Function.prototype.call},apply:{value:Function.prototype.apply},tp$slots:{value:{tp$doc:`type(object_or_name, bases, dict)
type(object) -> the object's type
type(name, bases, dict) -> a new type`,tp$call:function(i,o){if(this===Sk.builtin.type){if(i.length===1&&(o===void 0||!o.length))return i[0].ob$type;if(i.length!==3)throw new Sk.builtin.TypeError("type() takes 1 or 3 arguments")}let p=this.prototype.tp$new(i,o);if(p.$isSuspension)return Sk.misceval.chain(p,s=>{if(p=s,p.ob$type.$isSubType(this))return p.tp$init(i,o)},()=>p);if(p.ob$type.$isSubType(this)){const s=p.tp$init(i,o);return s!==void 0&&s.$isSuspension?Sk.misceval.chain(s,()=>p):p}return p},tp$new:function(i,o){if(i.length!==3){if(i.length===1&&(o===void 0||!o.length))return i[0].ob$type;throw new Sk.builtin.TypeError("type() takes 1 or 3 arguments")}let p;if(o=i[0],p=i[1],i=i[2],i.tp$name!=="dict")throw new Sk.builtin.TypeError("type() argument 3 must be dict, not "+Sk.abstr.typeName(i));if(!Sk.builtin.checkString(o))throw new Sk.builtin.TypeError("type() argument 1 must be str, not "+Sk.abstr.typeName(o));if(o=o.$jsstr(),p.tp$name!=="tuple")throw new Sk.builtin.TypeError("type() argument 2 must be tuple, not "+Sk.abstr.typeName(p));p=p.sk$asarray();const s=function(){this.$d=new Sk.builtin.dict};return t(o,s,p,this.constructor),Sk.globals&&(s.prototype.__module__=Sk.globals.__name__),s.prototype.__doc__=Sk.builtin.none.none$,s.$typeLookup(Sk.builtin.str.$dict)===void 0&&(s.prototype.__dict__=new Sk.builtin.getset_descriptor(s,u)),i.$items().forEach(([a,$])=>{s.prototype[a.$mangled]=$}),s.prototype.hasOwnProperty("__new__")&&(i=s.prototype.__new__,i instanceof Sk.builtin.func&&(s.prototype.__new__=new Sk.builtin.staticmethod(i))),s.$allocateSlots(),s},tp$getattr:function(i,o){var p=this.ob$type;const s=p.$typeLookup(i);let a;if(s!==void 0&&(a=s.tp$descr_get,a!==void 0&&s.tp$descr_set!==void 0))return o=a.call(s,this,p,o);if(i=this.$typeLookup(i),i!==void 0)return p=i.tp$descr_get,p!==void 0?o=p.call(i,null,this,o):i;if(a!==void 0)return o=a.call(s,this,p,o);if(s!==void 0)return s},tp$setattr:function(i,o,p){if(!this.sk$klass)throw o!==void 0?new Sk.builtin.TypeError("can't set attributes of built-in/extension type '"+this.prototype.tp$name+"'"):new Sk.builtin.TypeError("can't delete attributes on type object '"+this.prototype.tp$name+"'");const s=this.ob$type.$typeLookup(i);if(s!==void 0){const a=s.tp$descr_set;if(a)return a.call(s,this,o,p)}if(p=i.$mangled,o===void 0)if(o=this.prototype,o.hasOwnProperty(p))delete o[p],i=Sk.dunderToSkulpt[p],i!==void 0&&(delete this.prototype[i],o.sk$prototypical||this.$allocateGetterSlot(p));else throw new Sk.builtin.AttributeError("type object '"+this.prototype.tp$name+"' has no attribute '"+i.$jsstr()+"'");else this.prototype[p]=o,p in Sk.dunderToSkulpt&&this.$allocateSlot(p,o)},$r:function(){let i=this.prototype.__module__,o="",p="class";return i&&Sk.builtin.checkString(i)?o=i.v+".":i=null,i||this.sk$klass||Sk.__future__.class_repr||(p="type"),new Sk.builtin.str("<"+p+" '"+o+this.prototype.tp$name+"'>")}},writable:!0},tp$methods:{value:null,writable:!0},tp$getsets:{value:null,writable:!0},sk$type:{value:!0},$isSubType:{value:function(i){return this===i||this.prototype instanceof i||!this.prototype.sk$prototypical&&this.prototype.tp$mro.includes(i)}},$allocateSlot:{value:function(i,o){i=Sk.slots[i];const p=i.$slot_name,s=this.prototype;s.hasOwnProperty(p)&&delete s[p],s[p]=i.$slot_func(o)}},$allocateSlots:{value:function(){const i=this.prototype;this.prototype.sk$prototypical?Object.keys(i).forEach(o=>{o in Sk.slots&&this.$allocateSlot(o,i[o])}):Object.keys(Sk.slots).forEach(o=>{i.hasOwnProperty(o)?this.$allocateSlot(o,i[o]):this.$allocateGetterSlot(o)})}},$allocateGetterSlot:{value:function(i){const o=Sk.slots[i].$slot_name,p=this.prototype;p.hasOwnProperty(o)||Object.defineProperty(p,o,{configurable:!0,get(){const s=p.tp$mro;for(let a=1;a<s.length;a++){const $=Object.getOwnPropertyDescriptor(s[a].prototype,o);if($!==void 0&&$.value)return $.value}}})}},$typeLookup:{value:function(i){return this.prototype.sk$prototypical?this.prototype[i.$mangled]:n.call(this,i)},writable:!0},$mroMerge:{value:function(i){this.prototype.sk$prototypical=!0;let o;const p=[];for(;;){for(o=0;o<i.length;++o){var s=i[o];if(s.length!==0)break}if(o===i.length)return p;var a=[];for(o=0;o<i.length;++o)if(s=i[o],s.length!==0){const $=s[0];s=0;e:for(;s<i.length;++s){const y=i[s];for(let w=1;w<y.length;++w)if(y[w]===$)break e}s===i.length&&a.push($)}if(a.length===0)throw new Sk.builtin.TypeError("Inconsistent precedences in type hierarchy");for(a=a[0],p.length&&this.prototype.sk$prototypical&&Object.getPrototypeOf(p[p.length-1].prototype)!==a.prototype&&(this.prototype.sk$prototypical=!1),p.push(a),o=0;o<i.length;++o)s=i[o],0<s.length&&s[0]===a&&s.splice(0,1)}}},$buildMRO:{value:function(){const i=[[this]],o=this.prototype.tp$bases;for(var p=0;p<o.length;++p)i.push([...o[p].prototype.tp$mro]);p=[];for(let s=0;s<o.length;++s)p.push(o[s]);return i.push(p),this.$mroMerge(i)}},sk$attrError:{value(){return"type object '"+this.prototype.tp$name+"'"},writable:!0}}),Sk.builtin.type.prototype.tp$getsets={__base__:{$get(){return this.prototype.tp$base||Sk.builtin.none.none$}},__bases__:{$get(){return this.sk$tuple_bases===void 0&&(this.sk$tuple_bases=new Sk.builtin.tuple(this.prototype.tp$bases)),this.sk$tuple_bases}},__mro__:{$get(){return this.sk$tuple_mro===void 0&&(this.sk$tuple_mro=new Sk.builtin.tuple(this.prototype.tp$mro)),this.sk$tuple_mro}},__dict__:{$get(){return new Sk.builtin.mappingproxy(this.prototype)}},__doc__:{$get(){const i=this.$typeLookup(Sk.builtin.str.$doc);return i?i.tp$descr_get!==void 0?this===Sk.builtin.type?new Sk.builtin.str(this.prototype.tp$doc):i.tp$descr_get(null,this):this.prototype.__doc__:Sk.builtin.none.none$},$set(i){c(this,i,Sk.builtin.str.$doc),this.prototype.__doc__=i}},__name__:{$get(){return new Sk.builtin.str(this.prototype.tp$name)},$set(i){if(c(this,i,Sk.builtin.str.$name),!Sk.builtin.checkString(i))throw new Sk.builtin.TypeError("can only assign string to "+this.prototype.tp$name+".__name__, not '"+Sk.abstr.typeName(i)+"'");this.prototype.tp$name=i.$jsstr()}},__module__:{$get(){let i=this.prototype.__module__;return i&&i.ob$type!==Sk.builtin.getset_descriptor?i:new Sk.builtin.str("builtins")},$set(i){c(this,i,Sk.builtin.str.$module),this.prototype.__module__=i}}},Sk.builtin.type.prototype.tp$methods={mro:{$meth(){return new Sk.builtin.list(this.$buildMRO())},$flags:{NoArgs:!0}},__dir__:{$meth:function(){function i(a){a in Sk.reservedWords_||(a=Sk.unfixReserved(a),a.indexOf("$")!==-1||o.has(a)||(o.add(a),p.push(new Sk.builtin.str(a))))}const o=new Set,p=[];if(this.prototype.sk$prototypical)for(var s in this.prototype)i(s);else{s=this.prototype.tp$mro;for(let a=0;a<s.length;a++){const $=Object.getOwnPropertyNames(s[a].prototype);for(let y=0;y<$.length;y++)i($[y])}}return new Sk.builtin.list(p)},$flags:{NoArgs:!0},$doc:"Specialized __dir__ implementation for types."}};const u={$get(){const i=l(this.ob$type);return i!==void 0?i.tp$descr_get(this,this.ob$type):Sk.generic.getSetDict.$get.call(this)},$set(i){const o=l(this.ob$type);return o!==void 0?o.tp$descr_set(this,i):Sk.generic.getSetDict.$set.call(this,i)},$doc:"dictionary for instance variables (if defined)",$name:"__dict__"}},function(j,F){Sk.generic={},Sk.generic.getAttr=function(e,n){let t;const r=this.ob$type,l=r.$typeLookup(e);if(l!==void 0&&(t=l.tp$descr_get,t!==void 0&&l.tp$descr_set!==void 0))return t.call(l,this,r,n);const c=this.$d;if(c!==void 0&&(e=c.quick$lookup(e),e!==void 0))return e;if(t!==void 0)return t.call(l,this,r,n);if(l!==void 0)return l},Sk.exportSymbol("Sk.generic.getAttr",Sk.generic.getAttr),Sk.generic.setAttr=function(e,n,t){var r=this.ob$type.$typeLookup(e);if(r!=null){const l=r.tp$descr_set;if(l)return l.call(r,this,n,t)}if(t=this.$d,t!==void 0){if(t.mp$ass_subscript){if(n!==void 0)return t.mp$ass_subscript(e,n);try{return t.mp$ass_subscript(e)}catch(l){throw l instanceof Sk.builtin.KeyError?new Sk.builtin.AttributeError("'"+Sk.abstr.typeName(this)+"' object has no attribute '"+e.$jsstr()+"'"):l}}else if(typeof t=="object"){if(r=e.$mangled,n!==void 0){t[r]=n;return}if(t[r]!==void 0){delete t[r];return}}}throw new Sk.builtin.AttributeError(this.sk$attrError()+" has no attribute '"+e.$jsstr()+"'")},Sk.exportSymbol("Sk.generic.setAttr",Sk.generic.setAttr),Sk.generic.new=function(e){return function(n,t){return this.constructor===e?new this.constructor:(n=new this.constructor,e.call(n),n)}},Sk.generic.newMethodDef={$meth(e,n){const t=this.prototype;if(1>e.length)throw e=t.tp$name,new Sk.builtin.TypeError(e+".__new__(): not enough arguments");var r=e.shift();if(r.sk$type===void 0)throw e=t.tp$name,new Sk.builtin.TypeError(e+"__new__(X): X is not a type object ("+Sk.abstr.typeName(r)+")");if(!r.$isSubType(this))throw e=t.tp$name,r=r.prototype.tp$name,new Sk.builtin.TypeError(e+".__new__("+r+"): "+r+" is not a subtype of "+e);const l=r.prototype.sk$staticNew.prototype;if(l.tp$new!==t.tp$new)throw e=t.tp$name,r=r.prototype.tp$name,new Sk.builtin.TypeError(e+".__new__("+r+") is not safe, use "+l.tp$name+".__new__()");return t.tp$new.call(r.prototype,e,n)},$flags:{FastCall:!0},$textsig:"($type, *args, **kwargs)",$name:"__new__"},Sk.generic.selfIter=function(){return this},Sk.generic.iterNextWithArrayCheckSize=function(){if(this.$seq.length!==this.$orig.get$size()){const e=this.tp$name.split("_")[0];throw new Sk.builtin.RuntimeError(e+" changed size during iteration")}if(!(this.$index>=this.$seq.length))return this.$seq[this.$index++]},Sk.generic.iterNextWithArray=function(){const e=this.$seq[this.$index++];return e===void 0&&(this.tp$iternext=()=>{}),e},Sk.generic.iterLengthHintWithArrayMethodDef={$meth:function(){return new Sk.builtin.int_(this.$seq.length-this.$index)},$flags:{NoArgs:!0}},Sk.generic.iterReverseLengthHintMethodDef={$meth:function(){return new Sk.builtin.int_(this.$index)},$flags:{NoArgs:!0}},Sk.generic.getSetDict={$get(){return this.$d},$set(e){if(e===void 0)this.$d=new Sk.builtin.dict;else if(e instanceof Sk.builtin.dict)this.$d=e;else throw new Sk.builtin.TypeError("__dict__ must be set to a dictionary, not a '"+Sk.abstr.typeName(e)+"'")},$doc:"dictionary for instance variables (if defined)",$name:"__dict__"},Sk.generic.seqCompare=function(e,n){if(this===e&&Sk.misceval.opAllowsEquality(n))return!0;if(!(e instanceof this.sk$builtinBase))return Sk.builtin.NotImplemented.NotImplemented$;const t=this.v;e=e.v;let r;if(t.length!==e.length&&(n==="Eq"||n==="NotEq"))return n!=="Eq";for(r=0;r<t.length&&r<e.length&&(t[r]===e[r]||Sk.misceval.richCompareBool(t[r],e[r],"Eq"));++r);const l=t.length,c=e.length;if(r>=l||r>=c)switch(n){case"Lt":return l<c;case"LtE":return l<=c;case"Eq":return l===c;case"NotEq":return l!==c;case"Gt":return l>c;case"GtE":return l>=c;default:Sk.asserts.fail()}return n==="Eq"?!1:n==="NotEq"?!0:Sk.misceval.richCompareBool(t[r],e[r],n)}},function(j,F){Sk.builtin.pyCheckArgs=function(e,n,t,r,l,c){if(n=n.length,r===void 0&&(r=1/0),l&&--n,c&&--n,n<t||n>r)throw new Sk.builtin.TypeError((t===r?e+"() takes exactly "+t+" arguments":n<t?e+"() takes at least "+t+" arguments":0<t?e+"() takes at most "+r+" arguments":e+"() takes no arguments")+(" ("+n+" given)"))},Sk.exportSymbol("Sk.builtin.pyCheckArgs",Sk.builtin.pyCheckArgs),Sk.builtin.pyCheckArgsLen=function(e,n,t,r,l,c){if(r===void 0&&(r=1/0),l&&--n,c&&--n,n<t||n>r)throw new Sk.builtin.TypeError((t===r?e+"() takes exactly "+t+" arguments":n<t?e+"() takes at least "+t+" arguments":e+"() takes at most "+r+" arguments")+(" ("+n+" given)"))},Sk.builtin.pyCheckType=function(e,n,t){if(!t)throw new Sk.builtin.TypeError(e+" must be a "+n)},Sk.exportSymbol("Sk.builtin.pyCheckType",Sk.builtin.pyCheckType),Sk.builtin.checkSequence=function(e){return e!=null&&e.mp$subscript!==void 0},Sk.exportSymbol("Sk.builtin.checkSequence",Sk.builtin.checkSequence),Sk.builtin.checkIterable=function(e){return e===void 0?!1:e.tp$iter?e.tp$iter().tp$iternext!==void 0:e.mp$subscript!==void 0},Sk.exportSymbol("Sk.builtin.checkIterable",Sk.builtin.checkIterable),Sk.builtin.checkCallable=function(e){return e!=null&&e.tp$call!==void 0},Sk.builtin.checkNumber=function(e){return typeof e=="number"||e instanceof Sk.builtin.int_||e instanceof Sk.builtin.float_||e instanceof Sk.builtin.lng},Sk.exportSymbol("Sk.builtin.checkNumber",Sk.builtin.checkNumber),Sk.builtin.checkComplex=function(e){return e instanceof Sk.builtin.complex},Sk.exportSymbol("Sk.builtin.checkComplex",Sk.builtin.checkComplex),Sk.builtin.checkInt=function(e){return e instanceof Sk.builtin.int_||typeof e=="number"&&Number.isInteger(e)},Sk.exportSymbol("Sk.builtin.checkInt",Sk.builtin.checkInt),Sk.builtin.checkFloat=function(e){return e instanceof Sk.builtin.float_},Sk.exportSymbol("Sk.builtin.checkFloat",Sk.builtin.checkFloat),Sk.builtin.checkString=function(e){return e instanceof Sk.builtin.str},Sk.exportSymbol("Sk.builtin.checkString",Sk.builtin.checkString),Sk.builtin.checkBytes=function(e){return e instanceof Sk.builtin.bytes},Sk.builtin.checkClass=function(e){return e instanceof Sk.builtin.type},Sk.exportSymbol("Sk.builtin.checkClass",Sk.builtin.checkClass),Sk.builtin.checkBool=function(e){return e instanceof Sk.builtin.bool},Sk.exportSymbol("Sk.builtin.checkBool",Sk.builtin.checkBool),Sk.builtin.checkNone=function(e){return e===Sk.builtin.none.none$},Sk.exportSymbol("Sk.builtin.checkNone",Sk.builtin.checkNone),Sk.builtin.checkFunction=function(e){return e!=null&&e.tp$call!==void 0},Sk.exportSymbol("Sk.builtin.checkFunction",Sk.builtin.checkFunction),Sk.builtin.checkDataDescr=function(e){return e&&e.tp$descr_set!==void 0},Sk.exportSymbol("Sk.builtin.checkDataDescr",Sk.builtin.checkDataDescr),Sk.builtin.checkAnySet=function(e){return e instanceof Sk.builtin.set||e instanceof Sk.builtin.frozenset},Sk.builtin.checkMapping=function(e){return e instanceof Sk.builtin.dict||e instanceof Sk.builtin.mappingproxy||e!=null&&e.mp$subscript!==void 0&&Sk.abstr.lookupSpecial(e,Sk.builtin.str.$keys)!==void 0}},function(j,F){function e(s,a){switch(a){case"Add":return s.nb$add;case"Sub":return s.nb$subtract;case"Mult":return s.nb$multiply;case"MatMult":if(Sk.__future__.python3)return s.nb$matrix_multiply;case"Div":return s.nb$divide;case"FloorDiv":return s.nb$floor_divide;case"Mod":return s.nb$remainder;case"DivMod":return s.nb$divmod;case"Pow":return s.nb$power;case"LShift":return s.nb$lshift;case"RShift":return s.nb$rshift;case"BitAnd":return s.nb$and;case"BitXor":return s.nb$xor;case"BitOr":return s.nb$or}}function n(s,a){switch(a){case"Add":return s.nb$reflected_add;case"Sub":return s.nb$reflected_subtract;case"Mult":return s.nb$reflected_multiply;case"MatMult":if(Sk.__future__.python3)return s.nb$reflected_matrix_multiply;case"Div":return s.nb$reflected_divide;case"FloorDiv":return s.nb$reflected_floor_divide;case"Mod":return s.nb$reflected_remainder;case"DivMod":return s.nb$reflected_divmod;case"Pow":return s.nb$reflected_power;case"LShift":return s.nb$reflected_lshift;case"RShift":return s.nb$reflected_rshift;case"BitAnd":return s.nb$reflected_and;case"BitXor":return s.nb$reflected_xor;case"BitOr":return s.nb$reflected_or}}function t(s,a){switch(a){case"Add":return s.nb$inplace_add;case"Sub":return s.nb$inplace_subtract;case"Mult":return s.nb$inplace_multiply;case"MatMult":if(Sk.__future__.python3)return s.nb$inplace_matrix_multiply;case"Div":return s.nb$inplace_divide;case"FloorDiv":return s.nb$inplace_floor_divide;case"Mod":return s.nb$inplace_remainder;case"Pow":return s.nb$inplace_power;case"LShift":return s.nb$inplace_lshift;case"RShift":return s.nb$inplace_rshift;case"BitAnd":return s.nb$inplace_and;case"BitOr":return s.nb$inplace_or;case"BitXor":return s.nb$inplace_xor}}function r(s,a,$){var y=a.constructor,w=s.constructor;if((y=y!==w&&y.sk$baseClass===void 0&&a instanceof w)&&(w=n(a,$),w!==void 0&&w!==n(s,$)&&(w=w.call(a,s),w!==Sk.builtin.NotImplemented.NotImplemented$))||(w=e(s,$),w!==void 0&&(w=w.call(s,a),w!==Sk.builtin.NotImplemented.NotImplemented$)||!y&&(w=n(a,$),w!==void 0&&(w=w.call(a,s),w!==Sk.builtin.NotImplemented.NotImplemented$))))return w}function l(s){p.forEach(([a,$])=>{s[$]=function(y){return this.tp$richcompare(y,a)}})}function c(s){const a=Sk.reflectedNumberSlots;Object.keys(a).forEach($=>{if(s[$]!==void 0){const y=a[$],w=y.reflected,m=s[w];m!==void 0?m===null&&delete s[w]:s[w]=y.slot||s[$]}})}function u(s){const a=Sk.sequenceAndMappingSlots;Object.keys(a).forEach($=>{s[$]!==void 0&&a[$].forEach(y=>{s[y]=s[$]})})}Sk.abstr={},Sk.abstr.typeName=function(s){return s!=null&&s.tp$name!==void 0?s.tp$name:"<invalid type>"};const i={Add:"+",Sub:"-",Mult:"*",MatMult:"@",Div:"/",FloorDiv:"//",Mod:"%",DivMod:"divmod()",Pow:"** or pow()",LShift:"<<",RShift:">>",BitAnd:"&",BitXor:"^",BitOr:"|"},o={UAdd:"+",USub:"-",Invert:"~"};Sk.abstr.numberBinOp=function(s,a,$){var y;if(!(y=r(s,a,$)))throw s=Sk.abstr.typeName(s),a=Sk.abstr.typeName(a),new Sk.builtin.TypeError("unsupported operand type(s) for "+i[$]+": '"+s+"' and '"+a+"'");return y},Sk.exportSymbol("Sk.abstr.numberBinOp",Sk.abstr.numberBinOp),Sk.abstr.numberInplaceBinOp=function(s,a,$){e:{var y=t(s,$);if(y!==void 0&&(y=y.call(s,a),y!==Sk.builtin.NotImplemented.NotImplemented$))break e;y=r(s,a,$)}if(!y)throw s=Sk.abstr.typeName(s),a=Sk.abstr.typeName(a),new Sk.builtin.TypeError("unsupported operand type(s) for "+i[$]+"=: '"+s+"' and '"+a+"'");return y},Sk.exportSymbol("Sk.abstr.numberInplaceBinOp",Sk.abstr.numberInplaceBinOp),Sk.abstr.numberUnaryOp=function(s,a){if(a==="Not")return Sk.misceval.isTrue(s)?Sk.builtin.bool.false$:Sk.builtin.bool.true$;e:{switch(a){case"USub":var $=s.nb$negative;break e;case"UAdd":$=s.nb$positive;break e;case"Invert":$=s.nb$invert;break e}$=void 0}if($=$!==void 0?$.call(s):void 0,!$)throw s=Sk.abstr.typeName(s),new Sk.builtin.TypeError("bad operand type for unary "+o[a]+": '"+s+"'");return $},Sk.exportSymbol("Sk.abstr.numberUnaryOp",Sk.abstr.numberUnaryOp),Sk.abstr.fixSeqIndex_=function(s,a){return a=Sk.builtin.asnum$(a),0>a&&s.sq$length&&(a+=s.sq$length()),a},Sk.abstr.sequenceContains=function(s,a,$){return s.sq$contains?s.sq$contains(a,$):(s=Sk.misceval.iterFor(Sk.abstr.iter(s),function(y){return y===a||Sk.misceval.richCompareBool(y,a,"Eq")?new Sk.misceval.Break(!0):!1},!1),$?s:Sk.misceval.retryOptionalSuspensionOrThrow(s))},Sk.abstr.sequenceConcat=function(s,a){if(s.sq$concat)return s.sq$concat(a);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(s)+"' object can't be concatenated")},Sk.abstr.sequenceGetIndexOf=function(s,a){if(s.index)return Sk.misceval.callsimArray(s.index,[s,a]);let $=0;for(let y=Sk.abstr.iter(s),w=y.tp$iternext();w!==void 0;w=y.tp$iternext()){if(Sk.misceval.richCompareBool(a,w,"Eq"))return new Sk.builtin.int_($);$+=1}throw new Sk.builtin.ValueError("sequence.index(x): x not in sequence")},Sk.abstr.sequenceGetCountOf=function(s,a){if(s.count)return Sk.misceval.callsimArray(s.count,[s,a]);let $=0;for(let y=Sk.abstr.iter(s),w=y.tp$iternext();w!==void 0;w=y.tp$iternext())Sk.misceval.richCompareBool(a,w,"Eq")&&($+=1);return new Sk.builtin.int_($)},Sk.abstr.sequenceGetItem=function(s,a,$){return typeof a=="number"&&(a=new Sk.builtin.int_(a)),Sk.abstr.objectGetItem(s,a,$)},Sk.abstr.sequenceSetItem=function(s,a,$,y){return typeof a=="number"&&(a=new Sk.builtin.int_(a)),Sk.abstr.objectSetItem(s,a,$,y)},Sk.abstr.sequenceDelItem=function(s,a,$){return Sk.abstr.objectDelItem(s,a,$)},Sk.abstr.sequenceGetSlice=function(s,a,$){return Sk.abstr.objectGetItem(s,new Sk.builtin.slice(a,$))},Sk.abstr.sequenceDelSlice=function(s,a,$){return Sk.abstr.objectDelItem(s,new Sk.builtin.slice(a,$))},Sk.abstr.sequenceSetSlice=function(s,a,$,y){return Sk.abstr.objectSetItem(s,new Sk.builtin.slice(a,$))},Sk.abstr.sequenceUnpack=function(s,a,$,y){if(!Sk.builtin.checkIterable(s))throw new Sk.builtin.TypeError("cannot unpack non-iterable "+Sk.abstr.typeName(s)+" object");const w=Sk.abstr.iter(s),m=[];let h=0,v;return 0<a&&(v=Sk.misceval.iterFor(w,k=>{if(m.push(k),++h===a)return new Sk.misceval.Break})),Sk.misceval.chain(v,()=>{if(m.length<a)throw new Sk.builtin.ValueError("not enough values to unpack (expected at least "+$+", got "+m.length+")");if(!y)return Sk.misceval.chain(w.tp$iternext(!0),A=>{if(A!==void 0)throw new Sk.builtin.ValueError("too many values to unpack (expected "+a+")");return m});const k=[];return Sk.misceval.chain(Sk.misceval.iterFor(w,A=>{k.push(A)}),()=>{const A=k.length+a-$;if(0>A)throw new Sk.builtin.ValueError("not enough values to unpack (expected at least "+$+", got "+($+A)+")");return m.push(new Sk.builtin.list(k.slice(0,A))),m.push(...k.slice(A)),m})})},Sk.abstr.mappingUnpackIntoKeywordArray=function(s,a,$){if(a instanceof Sk.builtin.dict)a.$items().forEach(([w,m])=>{if(!Sk.builtin.checkString(w))throw new Sk.builtin.TypeError(($.$qualname?$.$qualname+"() ":"")+"keywords must be strings");s.push(w.v),s.push(m)});else{var y=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$keys);if(y===void 0)throw new Sk.builtin.TypeError("Object is not a mapping");return Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(y),w=>Sk.misceval.iterFor(Sk.abstr.iter(w),m=>{if(!Sk.builtin.checkString(m))throw new Sk.builtin.TypeError(($.$qualname?$.$qualname+"() ":"")+"keywords must be strings");return Sk.misceval.chain(a.mp$subscript(m,!0),h=>{s.push(m.v),s.push(h)})}))}},Sk.abstr.copyKeywordsToNamedArgs=function(s,a,$,y,w){y=y||[];var m=$.length+y.length/2;if(m>a.length)throw new Sk.builtin.TypeError(s+"() expected at most "+a.length+" arguments ("+m+" given)");if(y.length||w!==void 0){if(m===a.length&&!y.length)return $;if(m===0&&a.length===(w&&w.length))return w}else return $;for($=$.slice(0),m=0;m<y.length;m+=2){const h=y[m],v=y[m+1],k=a.indexOf(h);if(0<=k){if($[k]!==void 0)throw new Sk.builtin.TypeError(s+"() got multiple values for argument '"+h+"'");$[k]=v}else throw new Sk.builtin.TypeError(s+"() got an unexpected keyword argument '"+h+"'")}if(w){for(y=a.length,m=y-1;0<=m;m--)$[m]===void 0&&($[m]=w[w.length-1-(y-1-m)]);if(a=a.filter((h,v)=>$[v]===void 0),a.length)throw new Sk.builtin.TypeError(s+"() missing "+a.length+" required positional arguments: "+a.join(", "))}return $},Sk.exportSymbol("Sk.abstr.copyKeywordsToNamedArgs",Sk.abstr.copyKeywordsToNamedArgs),Sk.abstr.checkNoKwargs=function(s,a){if(a&&a.length)throw new Sk.builtin.TypeError(s+"() takes no keyword arguments")},Sk.exportSymbol("Sk.abstr.checkNoKwargs",Sk.abstr.checkNoKwargs),Sk.abstr.checkNoArgs=function(s,a,$){if(a=a.length+($?$.length:0))throw new Sk.builtin.TypeError(s+"() takes no arguments ("+a+" given)")},Sk.exportSymbol("Sk.abstr.checkNoArgs",Sk.abstr.checkNoArgs),Sk.abstr.checkOneArg=function(s,a,$){if(Sk.abstr.checkNoKwargs(s,$),a.length!==1)throw new Sk.builtin.TypeError(s+"() takes exactly one argument ("+a.length+" given)")},Sk.exportSymbol("Sk.abstr.checkOneArg",Sk.abstr.checkOneArg),Sk.abstr.checkArgsLen=function(s,a,$,y){if(a=a.length,y===void 0&&(y=1/0),a<$||a>y)throw new Sk.builtin.TypeError(($===y?s+"() takes exactly "+$+" arguments":a<$?s+"() takes at least "+$+" arguments":s+"() takes at most "+y+" arguments")+(" ("+a+" given)"))},Sk.exportSymbol("Sk.abstr.checkArgsLen",Sk.abstr.checkArgsLen),Sk.abstr.objectFormat=function(s,a){if(s=Sk.abstr.lookupSpecial(s,Sk.builtin.str.$format),a=Sk.misceval.callsimArray(s,[a]),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("__format__ must return a str, not "+Sk.abstr.typeName(a));return a},Sk.abstr.objectHash=function(s){const a=s.tp$hash;if(a!==void 0){if(Sk.builtin.checkNone(a))throw new Sk.builtin.TypeError("unhashable type: '"+Sk.abstr.typeName(s)+"'");return s.tp$hash()}throw new Sk.builtin.TypeError("unsupported Javascript type")},Sk.abstr.objectAdd=function(s,a){if(s.nb$add)return s.nb$add(a);throw s=Sk.abstr.typeName(s),a=Sk.abstr.typeName(a),new Sk.builtin.TypeError("unsupported operand type(s) for +: '"+s+"' and '"+a+"'")},Sk.abstr.objectNegative=function(s){if(s.nb$negative)return s.nb$negative();throw new Sk.builtin.TypeError("bad operand type for unary -: '"+Sk.abstr.typeName(s)+"'")},Sk.abstr.objectPositive=function(s){if(s.nb$positive)return s.nb$positive();throw new Sk.builtin.TypeError("bad operand type for unary +: '"+Sk.abstr.typeName(s)+"'")},Sk.abstr.objectDelItem=function(s,a,$){if(s.mp$ass_subscript)return s.mp$ass_subscript(a,void 0,$);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(s)+"' object does not support item deletion")},Sk.exportSymbol("Sk.abstr.objectDelItem",Sk.abstr.objectDelItem),Sk.abstr.objectGetItem=function(s,a,$){if(s.mp$subscript)return s.mp$subscript(a,$);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(s)+"' does not support indexing")},Sk.exportSymbol("Sk.abstr.objectGetItem",Sk.abstr.objectGetItem),Sk.abstr.objectSetItem=function(s,a,$,y){if(s.mp$ass_subscript)return s.mp$ass_subscript(a,$,y);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(s)+"' does not support item assignment")},Sk.exportSymbol("Sk.abstr.objectSetItem",Sk.abstr.objectSetItem),Sk.abstr.gattr=function(s,a,$){if($=s.tp$getattr(a,$),$===void 0)throw new Sk.builtin.AttributeError(s.sk$attrError()+" has no attribute '"+a.$jsstr()+"'");return $.$isSuspension?Sk.misceval.chain($,function(y){if(y===void 0)throw new Sk.builtin.AttributeError(s.sk$attrError()+" has no attribute '"+a.$jsstr()+"'");return y}):$},Sk.exportSymbol("Sk.abstr.gattr",Sk.abstr.gattr),Sk.abstr.sattr=function(s,a,$,y){return s.tp$setattr(a,$,y)},Sk.exportSymbol("Sk.abstr.sattr",Sk.abstr.sattr),Sk.abstr.iternext=function(s,a){return s.tp$iternext(a)},Sk.exportSymbol("Sk.abstr.iternext",Sk.abstr.iternext),Sk.abstr.iter=function(s){if(s.tp$iter){if(s=s.tp$iter(),s.tp$iternext)return s;throw new Sk.builtin.TypeError("iter() returned non-iterator of type '"+Sk.abstr.typeName(s)+"'")}if(s.mp$subscript)return new Sk.builtin.seq_iter_(s);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(s)+"' object is not iterable")},Sk.exportSymbol("Sk.abstr.iter",Sk.abstr.iter),Sk.abstr.lookupSpecial=function(s,a){var $=s.ob$type;if($===void 0)Sk.asserts.fail("javascript object sent to lookupSpecial");else if(a=$.$typeLookup(a),a!==void 0)return a.tp$descr_get!==void 0&&(a=a.tp$descr_get(s,$)),a},Sk.exportSymbol("Sk.abstr.lookupSpecial",Sk.abstr.lookupSpecial),Sk.abstr.typeLookup=function(s,a){return a=s.$typeLookup(a),a!==void 0&&a.tp$descr_get?a.tp$descr_get(null,s):a},Sk.abstr.markUnhashable=function(s){s=s.prototype,s.__hash__=Sk.builtin.none.none$,s.tp$hash=Sk.builtin.none.none$},Sk.abstr.setUpInheritance=function(s,a,$,y){y=y||Sk.builtin.type,$=$===void 0?Sk.builtin.object:$;const w=$!==null?$.prototype:null;Object.setPrototypeOf(a,y.prototype),Object.setPrototypeOf(a.prototype,w),Object.defineProperties(a.prototype,{sk$object:{value:a,writable:!0},ob$type:{value:a,writable:!0},tp$name:{value:s,writable:!0},tp$base:{value:$,writable:!0}})},Sk.abstr.setUpBuiltinMro=function(s){let a=s.prototype.tp$base;const $=a===null?[]:[a];(a===Sk.builtin.object||a===null)&&(Object.defineProperty(s,"sk$baseClass",{value:!0,writable:!0}),Object.defineProperty(s.prototype,"sk$builtinBase",{value:s,writable:!0}));const y=[s];for(;a!==null;)y.push(a),a=a.prototype.tp$base;Object.defineProperties(s.prototype,{sk$prototypical:{value:!0,writable:!0},tp$bases:{value:$,writable:!0},tp$mro:{value:y,writable:!0}}),Object.defineProperty(s,"$typeLookup",{value:function(w){return this.prototype[w.$mangled]},writable:!0})},Sk.abstr.setUpGetSets=function(s,a){if(Sk.builtin.getset_descriptor!==void 0){var $=s.prototype;a=a||$.tp$getsets||{},Object.entries(a).forEach(([y,w])=>{w.$name=y,$[y]=new Sk.builtin.getset_descriptor(s,w)}),Object.defineProperty($,"tp$getsets",{value:null,writable:!0})}},Sk.abstr.setUpMethods=function(s,a){if(Sk.builtin.method_descriptor!==void 0){var $=s.prototype;a=a||$.tp$methods||{},Object.entries(a).forEach(([y,w])=>{w.$name=y,$[y]=new Sk.builtin.method_descriptor(s,w)}),Object.defineProperty($,"tp$methods",{value:null,writable:!0})}},Sk.abstr.setUpClassMethods=function(s,a){if(Sk.builtin.classmethod_descriptor!==void 0){var $=s.prototype;a=a||$.tp$classmethods||{},Object.entries(a).forEach(([y,w])=>{w.$name=y,$[y]=new Sk.builtin.classmethod_descriptor(s,w)}),Object.defineProperty($,"tp$classmethods",{value:null,writable:!0})}};const p=Object.entries({Eq:"ob$eq",NotEq:"ob$ne",Gt:"ob$gt",GtE:"ob$ge",Lt:"ob$lt",LtE:"ob$le"});Sk.abstr.setUpSlots=function(s,a){function $(h,v){w[h]=new Sk.builtin.wrapper_descriptor(s,Sk.slots[h],v)}function y(h,v){typeof h=="string"?$(h,v):h.forEach(k=>{$(k,v)})}if(Sk.builtin.wrapper_descriptor!==void 0){var w=s.prototype;a=a||w.tp$slots||{},a.tp$new===Sk.generic.new&&(a.tp$new=Sk.generic.new(s)),a.tp$richcompare&&l(a),a.tp$as_number&&c(a),a.tp$as_sequence_or_mapping&&u(a),Object.entries(a).forEach(([h,v])=>{Object.defineProperty(w,h,{value:v,writable:!0})}),a.tp$new&&(w.__new__=new Sk.builtin.sk_method(Sk.generic.newMethodDef,s),Object.defineProperty(w,"sk$staticNew",{value:s,writable:!0})),Sk.subSlots.main_slots.forEach(([h,v])=>{h=a[h],h!==void 0&&y(v,h)});var m=a.tp$hash;m!==void 0&&(typeof m=="function"?$("__hash__",m):m===Sk.builtin.none.none$?w.__hash__=m:Sk.asserts.fail("invalid tp$hash")),a.tp$as_number&&Sk.subSlots.number_slots.forEach(([h,v])=>{h=a[h],h!==void 0&&y(v,h)}),a.tp$as_sequence_or_mapping&&Sk.subSlots.sequence_and_mapping_slots.forEach(([h,v])=>{h=a[h],h!==void 0&&y(v,h)}),Object.defineProperty(w,"tp$slots",{value:null,writable:!0})}},Sk.abstr.buildNativeClass=function(s,a){a=a||{},Sk.asserts.assert(a.hasOwnProperty("constructor"),"A constructor is required to build a native class");let $=a.constructor;if(s.includes(".")){var y=s.split(".");s=y.pop(),y=y.join(".")}Sk.abstr.setUpInheritance(s,$,a.base,a.meta),Sk.abstr.setUpBuiltinMro($);const w=$.prototype;return Object.defineProperties(w,{tp$slots:{value:a.slots,writable:!0},tp$getsets:{value:a.getsets,writable:!0},tp$methods:{value:a.methods,writable:!0},tp$classmethods:{value:a.classmethods,writable:!0}}),Sk.abstr.setUpSlots($,a.slots||{}),Sk.abstr.setUpMethods($,a.methods),Sk.abstr.setUpGetSets($,a.getsets),Sk.abstr.setUpClassMethods($,a.classmethods),y!==void 0&&(w.__module__=new Sk.builtin.str(y)),Object.entries(a.proto||{}).forEach(([m,h])=>{Object.defineProperty(w,m,{value:h,writable:!0,enumerable:!(m.includes("$")||m in Object.prototype)})}),Object.entries(a.flags||{}).forEach(([m,h])=>{Object.defineProperty($,m,{value:h,writable:!0})}),Sk.builtin.str!==void 0&&w.hasOwnProperty("tp$doc")&&!w.hasOwnProperty("__doc__")&&(s=w.tp$doc||null,w.__doc__=typeof s=="string"?new Sk.builtin.str(s):Sk.builtin.none.none$),$},Sk.abstr.buildIteratorClass=function(s,a){return Sk.asserts.assert(a.hasOwnProperty("constructor"),"must provide a constructor"),a.slots=a.slots||{},a.slots.tp$iter=Sk.generic.selfIter,a.slots.tp$iternext=a.slots.tp$iternext||a.iternext,a.slots.tp$getattr=a.slots.tp$getattr||Sk.generic.getAttr,s=Sk.abstr.buildNativeClass(s,a),Sk.abstr.built$iterators.push(s),s},Sk.abstr.built$iterators=[],Sk.abstr.setUpModuleMethods=function(s,a,$){Object.entries($).forEach(([y,w])=>{w.$name=w.$name||y,a[y]=new Sk.builtin.sk_method(w,null,s)})},Sk.abstr.superConstructor=function(s,a,$){var y=Array.prototype.slice.call(arguments,2);s.prototype.tp$base.apply(a,y)}},function(j,F){const e=new Map;Sk.builtin.object=Sk.abstr.buildNativeClass("object",{constructor:function(){Sk.asserts.assert(this instanceof Sk.builtin.object,"bad call to object, use 'new'")},base:null,slots:{tp$new(n,t){if(n.length||t&&t.length){if(this.tp$new!==Sk.builtin.object.prototype.tp$new)throw new Sk.builtin.TypeError("object.__new__() takes exactly one argument (the type to instantiate)");if(this.tp$init===Sk.builtin.object.prototype.tp$init)throw new Sk.builtin.TypeError(Sk.abstr.typeName(this)+"() takes no arguments")}return new this.constructor},tp$init(n,t){if(n.length||t&&t.length){if(this.tp$init!==Sk.builtin.object.prototype.tp$init)throw new Sk.builtin.TypeError("object.__init__() takes exactly one argument (the instance to initialize)");if(this.tp$new===Sk.builtin.object.prototype.tp$new)throw new Sk.builtin.TypeError(Sk.abstr.typeName(this)+".__init__() takes exactly one argument (the instance to initialize)")}},tp$getattr:Sk.generic.getAttr,tp$setattr:Sk.generic.setAttr,$r(){const n=Sk.abstr.lookupSpecial(this,Sk.builtin.str.$module);let t="";return n&&Sk.builtin.checkString(n)&&(t=n.v+"."),new Sk.builtin.str("<"+t+Sk.abstr.typeName(this)+" object>")},tp$str(){return this.$r()},tp$hash(){let n=e.get(this);return n!==void 0||(n=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER-Number.MAX_SAFE_INTEGER/2),e.set(this,n)),n},tp$richcompare(n,t){switch(t){case"Eq":n=this===n||Sk.builtin.NotImplemented.NotImplemented$;break;case"NotEq":n=this.tp$richcompare(n,"Eq"),n!==Sk.builtin.NotImplemented.NotImplemented$&&(n=!Sk.misceval.isTrue(n));break;default:n=Sk.builtin.NotImplemented.NotImplemented$}return n},tp$doc:"The most base type"},getsets:{__class__:{$get(){return this.ob$type},$set(n){if(n===void 0)throw new Sk.builtin.TypeError("can't delete __class__ attribute");if(!Sk.builtin.checkClass(n))throw new Sk.builtin.TypeError("__class__ must be set to a class, not '"+Sk.abstr.typeName(n)+"' object");const t=this.ob$type;if(!(t.$isSubType(Sk.builtin.module)&&n.$isSubType(Sk.builtin.module)||t.sk$klass!==void 0&&n.sk$klass!==void 0))throw new Sk.builtin.TypeError(" __class__ assignment only supported for heap types or ModuleType subclasses");if(n.prototype.sk$builtinBase!==this.sk$builtinBase)throw new Sk.builtin.TypeError("__class__ assignment: '"+Sk.abstr.typeName(this)+"' object layout differs from '"+n.prototype.tp$name+"'");Object.setPrototypeOf(this,n.prototype)},$doc:"the object's class"}},methods:{__dir__:{$meth:function(){let n=[];if(this.$d)if(this.$d instanceof Sk.builtin.dict)n=this.$d.sk$asarray();else for(var t in this.$d)n.push(new Sk.builtin.str(t));return t=Sk.misceval.callsimArray(Sk.builtin.type.prototype.__dir__,[this.ob$type]),n.push(...t.v),t.v=n,t},$flags:{NoArgs:!0},$doc:"Default dir() implementation."},__format__:{$meth(n){if(Sk.builtin.checkString(n)){if(n=Sk.ffi.remapToJs(n),n!=="")throw new Sk.builtin.NotImplementedError("format spec is not yet implemented")}else throw Sk.__future__.exceptions?new Sk.builtin.TypeError("format() argument 2 must be str, not "+Sk.abstr.typeName(n)):new Sk.builtin.TypeError("format expects arg 2 to be string or unicode, not "+Sk.abstr.typeName(n));return this.tp$str()},$flags:{OneArg:!0},$doc:"Default object formatter."}},proto:{valueOf:Object.prototype.valueOf,toString:function(){return this.tp$str().v},hasOwnProperty:Object.prototype.hasOwnProperty,hp$type:void 0,sk$attrError(){return"'"+this.tp$name+"' object"}}}),Sk.abstr.setUpInheritance("type",Sk.builtin.type,Sk.builtin.object),Sk.abstr.setUpBuiltinMro(Sk.builtin.type)},function(j,F){function e(m,h,v){return Sk.abstr.checkNoArgs(this.$name,h,v),m=this.call(m),m===void 0?Sk.builtin.none.none$:m}function n(m,h,v){return Sk.abstr.checkOneArg(this.$name,h,v),m=this.call(m,h[0]),m===void 0?Sk.builtin.none.none$:m}function t(m,h,v){return Sk.abstr.checkNoKwargs(this.$name,v),Sk.abstr.checkArgsLen(this.$name,h,1,2),m=this.call(m,...h),m===void 0?Sk.builtin.none.none$:m}function r(m,h,v){return Sk.abstr.checkNoKwargs(this.$name,v),Sk.abstr.checkArgsLen(this.$name,h,2,2),this.call(m,h[0],h[1]),Sk.builtin.none.none$}function l(m,h,v){return m=n.call(this,m,h,v),m===Sk.builtin.NotImplemented.NotImplemented$?m:new Sk.builtin.bool(m)}function c(m,h){return function(v,k,A){return v=m.call(this,v,k,A),h(v)}}function u(m){return function(){const h=m.tp$descr_get?m.tp$descr_get(this):m;return Sk.misceval.callsimArray(h,[])}}function i(m,h,v,k){return function(A){return function(){var M=A.tp$descr_get?A.tp$descr_get(this):A;if(M=Sk.misceval.callsimArray(M,[]),!h(M))throw new Sk.builtin.TypeError(m+" should return "+v+" (returned "+Sk.abstr.typeName(M)+")");return k!==void 0?k(M):M}}}function o(m){return function(h){const v=m.tp$descr_get?m.tp$descr_get(this):m;return Sk.misceval.callsimArray(v,[h])}}function p(m,h){let v=this.ob$type.$typeLookup(Sk.builtin.str.$getattribute);if(v instanceof Sk.builtin.wrapper_descriptor)return v.d$wrapped.call(this,m,h);v.tp$descr_get&&(v=v.tp$descr_get(this));const k=Sk.misceval.tryCatch(()=>Sk.misceval.callsimOrSuspendArray(v,[m]),A=>{if(!(A instanceof Sk.builtin.AttributeError))throw A});return h?k:Sk.misceval.retryOptionalSuspensionOrThrow(k)}function s(m,h,v){return function(k){return function(A,M,D){let f;M===void 0?(f=h,v=null):f=m;let b=this.ob$type.$typeLookup(new Sk.builtin.str(f));if(b instanceof Sk.builtin.wrapper_descriptor)return b.d$wrapped.call(this,A,M);if(b.tp$descr_get&&(b=b.tp$descr_get(this)),b!==void 0)A=Sk.misceval.callsimOrSuspendArray(b,M===void 0?[A]:[A,M]);else throw v?new Sk.builtin.TypeError("'"+Sk.abstr.typeName(this)+"' object "+v):new Sk.builtin.AttributeError(f);return D?A:Sk.misceval.retryOptionalSuspensionOrThrow(A)}}}function a(m,h){let v=m.ob$type;for(;v&&v.sk$klass!==void 0;)v=v.prototype.tp$base;if(v&&v.prototype.tp$setattr!==h)throw new Sk.builtin.TypeError("can't apply this "+h.$name+" to "+Sk.abstr.typeName(m)+" object")}Sk.slots=Object.create(null),j=Sk.slots,Sk.slots.__init__={$name:"__init__",$slot_name:"tp$init",$slot_func:function(m){return function(h,v){const k=m.tp$descr_get?m.tp$descr_get(this):m;return h=Sk.misceval.callsimOrSuspendArray(k,h,v),Sk.misceval.chain(h,A=>{if(!Sk.builtin.checkNone(A)&&A!==void 0)throw new Sk.builtin.TypeError("__init__() should return None, not "+Sk.abstr.typeName(A))})}},$wrapper:function(m,h,v){return this.call(m,h,v),Sk.builtin.none.none$},$textsig:"($self, /, *args, **kwargs)",$flags:{FastCall:!0},$doc:"Initialize self.  See help(type(self)) for accurate signature."},j.__new__={$name:"__new__",$slot_name:"tp$new",$slot_func:function(m){const h=function(v,k){let A=m;return m.tp$descr_get&&(A=m.tp$descr_get(null,this.constructor)),Sk.misceval.callsimOrSuspendArray(A,[this.constructor,...v],k)};return h.sk$static_new=!1,h},$wrapper:null,$textsig:"($self, /, *args, **kwargs)",$flags:{FastCall:!0},$doc:"Create and return a new object."},j.__call__={$name:"__call__",$slot_name:"tp$call",$slot_func:function(m){return function(h,v){const k=m.tp$descr_get?m.tp$descr_get(this):m;return Sk.misceval.callsimOrSuspendArray(k,h,v)}},$wrapper:function(m,h,v){return m=m.tp$call(h,v),m===void 0?Sk.builtin.none.none$:m},$textsig:"($self, /, *args, **kwargs)",$flags:{FastCall:!0},$doc:"Call self as a function."},j.__repr__={$name:"__repr__",$slot_name:"$r",$slot_func:i("__repr__",Sk.builtin.checkString,"str"),$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return repr(self)."},j.__str__={$name:"__str__",$slot_name:"tp$str",$slot_func:i("__str__",Sk.builtin.checkString,"str"),$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return str(self)."};var $=i("__hash__",Sk.builtin.checkInt,"int",m=>typeof m.v=="number"?m.v:m.tp$hash());j.__hash__={$name:"__hash__",$slot_name:"tp$hash",$slot_func:function(m){return m===Sk.builtin.none.none$?Sk.builtin.none.none$:$(m)},$wrapper:c(e,m=>new Sk.builtin.int_(m)),$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return hash(self)."},j.__getattribute__={$name:"__getattribute__",$slot_name:"tp$getattr",$slot_func:function(m){return function(h,v){let k=this.ob$type.$typeLookup(Sk.builtin.str.$getattr);if(k===void 0)return p.call(this,h,v);const A=Sk.misceval.chain(p.call(this,h,v),M=>Sk.misceval.tryCatch(()=>M!==void 0?M:(k.tp$descr_get&&(k=k.tp$descr_get(this)),Sk.misceval.callsimOrSuspendArray(k,[h])),function(D){if(!(D instanceof Sk.builtin.AttributeError))throw D}));return v?A:Sk.misceval.retryOptionalSuspensionOrThrow(A)}},$wrapper:function(m,h,v){if(Sk.abstr.checkOneArg(this.$name,h,v),h=h[0],!Sk.builtin.checkString(h))throw new Sk.builtin.TypeError("attribute name must be string, not '"+Sk.abstr.typeName(h)+"'");if(v=this.call(m,h),v===void 0)throw new Sk.builtin.AttributeError(Sk.abstr.typeName(m)+" has no attribute "+h.$jsstr());return v},$textsig:"($self, name, /)",$flags:{OneArg:!0},$doc:"Return getattr(self, name)."},j.__getattr__={$name:"__getattr__",$slot_name:"tp$getattr",$slot_func:j.__getattribute__.$slot_func,$wrapper:null,$textsig:"($self, name, /)",$flags:{OneArg:!0},$doc:"Return getattr(self, name)."},j.__setattr__={$name:"__setattr__",$slot_name:"tp$setattr",$slot_func:s("__setattr__","__delattr__"),$wrapper:function(m,h,v){return Sk.abstr.checkNoKwargs(this.$name,v),Sk.abstr.checkArgsLen(this.$name,h,2,2),a(m,this),this.call(m,h[0],h[1]),Sk.builtin.none.none$},$textsig:"($self, name, value, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Implement setattr(self, name, value)."},j.__delattr__={$name:"__delattr__",$slot_name:"tp$setattr",$slot_func:j.__setattr__.$slot_func,$wrapper:function(m,h,v){return Sk.abstr.checkOneArg(this.$name,h,v),a(m,this),this.call(m,h[0]),Sk.builtin.none.none$},$textsig:"($self, name, /)",$flags:{OneArg:!0},$doc:"Implement delattr(self, name)."},j.__get__={$name:"__get__",$slot_name:"tp$descr_get",$slot_func:function(m){return function(h,v,k){h===null&&(h=Sk.builtin.none.none$),v==null&&(v=Sk.builtin.none.none$);const A=m.tp$descr_get?m.tp$descr_get(this):m;return h=Sk.misceval.callsimOrSuspendArray(A,[h,v]),k?h:Sk.misceval.retryOptionalSuspensionOrThrow(h)}},$wrapper:function(m,h,v){if(Sk.abstr.checkNoKwargs(this.$name,v),Sk.abstr.checkArgsLen(this.$name,h,1,2),v=h[0],h=h[1],v===Sk.builtin.none.none$&&(v=null),h===Sk.builtin.none.none$&&(h=null),h===null&&v===null)throw new Sk.builtin.TypeError("__get__(None, None) is invalid");return this.call(m,v,h)},$textsig:"($self, instance, owner, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Return an attribute of instance, which is of type owner."},j.__set__={$name:"__set__",$slot_name:"tp$descr_set",$slot_func:s("__set__","__delete__"),$wrapper:r,$textsig:"($self, instance, value, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Set an attribute of instance to value."},j.__delete__={$name:"__delete__",$slot_name:"tp$descr_set",$slot_func:j.__set__.$slot_func,$wrapper:n,$textsig:"($self, instance, /)",$flags:{OneArg:!0},$doc:"Delete an attribute of instance."},j.__eq__={$name:"__eq__",$slot_name:"ob$eq",$slot_func:o,$wrapper:l,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self==value."},j.__ge__={$name:"__ge__",$slot_name:"ob$ge",$slot_func:o,$wrapper:l,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self>=value."},j.__gt__={$name:"__gt__",$slot_name:"ob$gt",$slot_func:o,$wrapper:l,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self>value."},j.__le__={$name:"__le__",$slot_name:"ob$le",$slot_func:o,$wrapper:l,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self<=value."},j.__lt__={$name:"__lt__",$slot_name:"ob$lt",$slot_func:o,$wrapper:l,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self<value."},j.__ne__={$name:"__ne__",$slot_name:"ob$ne",$slot_func:o,$wrapper:l,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self!=value."},j.__iter__={$name:"__iter__",$slot_name:"tp$iter",$slot_func:u,$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Implement iter(self)."},j.__next__={$name:"__next__",$slot_name:"tp$iternext",$slot_func:function(m){return function(h){const v=m.tp$descr_get?m.tp$descr_get(this):m,k=Sk.misceval.tryCatch(()=>Sk.misceval.callsimOrSuspendArray(v,[]),A=>{if(!(A instanceof Sk.builtin.StopIteration))throw A});return h?k:Sk.misceval.retryOptionalSuspensionOrThrow(k)}},$wrapper:function(m,h,v){return Sk.abstr.checkNoArgs(this.$name,h,v),Sk.misceval.chain(m.tp$iternext(!0),k=>{if(k===void 0)throw new Sk.builtin.StopIteration;return k})},$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Implement next(self)."},j.__len__={$name:"__len__",$slot_name:"sq$length",$slot_func:function(m){return function(h){const v=m.tp$descr_get?m.tp$descr_get(this):m;return h?(h=Sk.misceval.callsimOrSuspendArray(v,[]),Sk.misceval.chain(h,k=>Sk.misceval.asIndexOrThrow(k))):(h=Sk.misceval.callsimArray(v,[]),Sk.misceval.asIndexOrThrow(h))}},$wrapper:c(e,m=>new Sk.builtin.int_(m)),$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return len(self)."},j.__contains__={$name:"__contains__",$slot_name:"sq$contains",$slot_func:function(m){return function(h,v){const k=m.tp$descr_get?m.tp$descr_get(this):m;return h=Sk.misceval.callsimOrSuspendArray(k,[h]),h=Sk.misceval.chain(h,A=>Sk.misceval.isTrue(A)),h.$isSuspension?v?h:Sk.misceval.retryOptionalSuspensionOrThrow(h):h}},$wrapper:c(n,m=>new Sk.builtin.bool(m)),$textsig:"($self, key, /)",$flags:{OneArg:!0},$doc:"Return key in self."},j.__getitem__={$name:"__getitem__",$slot_name:"mp$subscript",$slot_func:function(m){return function(h,v){const k=m.tp$descr_get?m.tp$descr_get(this):m;return h=Sk.misceval.callsimOrSuspendArray(k,[h]),v?h:Sk.misceval.retryOptionalSuspensionOrThrow(h)}},$wrapper:n,$textsig:"($self, key, /)",$flags:{OneArg:!0},$doc:"Return self[key]."},j.__setitem__={$name:"__setitem__",$slot_name:"mp$ass_subscript",$slot_func:s("__setitem__","__delitem__","does not support item assignment"),$wrapper:r,$textsig:"($self, key, value, /)",$flags:{MinArgs:2,MaxArgs:2},$doc:"Set self[key] to value."},j.__delitem__={$name:"__delitem__",$slot_name:"mp$ass_subscript",$slot_func:j.__setitem__.$slot_func,$wrapper:n,$textsig:"($self, key, /)",$flags:{OneArg:!0},$doc:"Delete self[key]."},j.__add__={$name:"__add__",$slot_name:"nb$add",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self+value."},j.__radd__={$name:"__radd__",$slot_name:"nb$reflected_add",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value+self."},j.__iadd__={$name:"__iadd__",$slot_name:"nb$inplace_add",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self+=value."},j.__sub__={$name:"__sub__",$slot_name:"nb$subtract",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self-value."},j.__rsub__={$name:"__rsub__",$slot_name:"nb$reflected_subtract",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value-self."},j.__imul__={$name:"__imul__",$slot_name:"nb$inplace_multiply",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self*=value."},j.__mul__={$name:"__mul__",$slot_name:"nb$multiply",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self*value."},j.__rmul__={$name:"__rmul__",$slot_name:"nb$reflected_multiply",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value*self."},j.__isub__={$name:"__isub__",$slot_name:"nb$inplace_subtract",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self-=value."},j.__mod__={$name:"__mod__",$slot_name:"nb$remainder",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self%value."},j.__rmod__={$name:"__rmod__",$slot_name:"nb$reflected_remainder",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value%self."},j.__imod__={$name:"__imod__",$slot_name:"nb$inplace_remainder",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement value%=self."},j.__divmod__={$name:"__divmod__",$slot_name:"nb$divmod",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return divmod(self, value)."},j.__rdivmod__={$name:"__rdivmod__",$slot_name:"nb$reflected_divmod",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return divmod(value, self)"},j.__pos__={$name:"__pos__",$slot_name:"nb$positive",$slot_func:u,$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"+self"},j.__neg__={$name:"__neg__",$slot_name:"nb$negative",$slot_func:u,$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"-self"},j.__abs__={$name:"__abs__",$slot_name:"nb$abs",$slot_func:u,$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"abs(self)"},j.__bool__={$name:"__bool__",$slot_name:"nb$bool",$slot_func:i("__bool__",Sk.builtin.checkBool,"bool",m=>m.v!==0),$wrapper:c(e,m=>new Sk.builtin.bool(m)),$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"self != 0"},j.__invert__={$name:"__invert__",$slot_name:"nb$invert",$slot_func:u,$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"~self"},j.__lshift__={$name:"__lshift__",$slot_name:"nb$lshift",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self<<value."},j.__rlshift__={$name:"__rlshift__",$slot_name:"nb$reflected_lshift",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value<<self."},j.__rshift__={$name:"__rshift__",$slot_name:"nb$rshift",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self>>value."},j.__rrshift__={$name:"__rrshift__",$slot_name:"nb$reflected_rshift",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value>>self."},j.__ilshift__={$name:"__ilshift__",$slot_name:"nb$inplace_lshift",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self<<=value."},j.__irshift__={$name:"__irshift__",$slot_name:"nb$inplace_rshift",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self=>>value."},j.__and__={$name:"__and__",$slot_name:"nb$and",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self&value."},j.__rand__={$name:"__rand__",$slot_name:"nb$refelcted_and",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value&self."},j.__iand__={$name:"__iand__",$slot_name:"nb$and",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self&=value."},j.__xor__={$name:"__xor__",$slot_name:"nb$xor",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self^value."},j.__rxor__={$name:"__rxor__",$slot_name:"nb$reflected_xor",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value^self."},j.__ixor__={$name:"__ixor__",$slot_name:"nb$inplace_xor",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self^=value."},j.__or__={$name:"__or__",$slot_name:"nb$or",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self|value."},j.__ror__={$name:"__ror__",$slot_name:"nb$reflected_or",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value|self."},j.__ior__={$name:"__ior__",$slot_name:"nb$inplace_or",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self|=value."},j.__int__={$name:"__int__",$slot_name:"nb$int",$slot_func:i("__int__",Sk.builtin.checkInt,"int"),$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"int(self)"},j.__float__={$name:"__float__",$slot_name:"nb$float",$slot_func:i("__float__",Sk.builtin.checkFloat,"float"),$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"float(self)"},j.__floordiv__={$name:"__floordiv__",$slot_name:"nb$floor_divide",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self//value."},j.__rfloordiv__={$name:"__rfloordiv__",$slot_name:"nb$reflected_floor_divide",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value//self."},j.__ifloordiv__={$name:"__ifloordiv__",$slot_name:"nb$inplace_floor_divide",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self//=value."},j.__truediv__={$name:"__truediv__",$slot_name:"nb$divide",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self/value."},j.__rtruediv__={$name:"__rtruediv__",$slot_name:"nb$reflected_divide",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value/self."},j.__itruediv__={$name:"__itruediv__",$slot_name:"nb$inplace_divide",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self/=value."},j.__index__={$name:"__index__",$slot_name:"nb$index",$slot_func:i("__index__",Sk.builtin.checkInt,"int",m=>m.v),$wrapper:c(e,m=>new Sk.builtin.int_(m)),$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"Return self converted to an integer, if self is suitable for use as an index into a list."},j.__pow__={$name:"__pow__",$slot_name:"nb$power",$slot_func:function(m){return function(h,v){const k=m.tp$descr_get?m.tp$descr_get(this):m;return v==null?Sk.misceval.callsimArray(k,[h]):Sk.misceval.callsimArray(k,[h,v])}},$wrapper:t,$textsig:"($self, value, mod=None, /)",$flags:{MinArgs:1,MaxArgs:2},$doc:"Return pow(self, value, mod)."},j.__rpow__={$name:"__rpow__",$slot_name:"nb$reflected_power",$slot_func:j.__pow__.$slot_func,$wrapper:t,$textsig:"($self, value, mod=None, /)",$flags:{MinArgs:1,MaxArgs:2},$doc:"Return pow(value, self, mod)."},j.__ipow__={$name:"__ipow__",$slot_name:"nb$inplace_power",$slot_func:j.__pow__.$slot_func,$wrapper:t,$textsig:"($self, value, mod=None, /)",$flags:{MinArgs:1,MaxArgs:2},$doc:"Implement **="},j.__matmul__={$name:"__matmul__",$slot_name:"nb$matrix_multiply",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return self@value."},j.__rmatmul__={$name:"__rmatmul__",$slot_name:"nb$reflected_matrix_multiply",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Return value@self."},j.__imatmul__={$name:"__imatmul__",$slot_name:"nb$inplace_matrix_multiply",$slot_func:o,$wrapper:n,$textsig:"($self, value, /)",$flags:{OneArg:!0},$doc:"Implement self@=value."},j.__long__={$name:"__long__",$slot_name:"nb$long",$slot_func:i("__long__",Sk.builtin.checkInt,"int"),$wrapper:e,$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"int(self)"};var y,w={next:{$name:"next",$slot_name:"tp$iternext",$slot_func:j.__next__.$slot_func,$wrapper:j.__next__.$wrapper,$textsig:j.__next__.$textsig,$flags:j.__next__.$flags},__nonzero__:{$name:"__nonzero__",$slot_name:"nb$bool",$slot_func:i("__nonzero__",Sk.builtin.checkInt,"int",m=>m.v!==0),$wrapper:c(e,m=>new Sk.builtin.bool(m)),$textsig:"($self, /)",$flags:{NoArgs:!0},$doc:"x.__nonzero__() <==> x != 0"},__div__:{$name:"__div__",$slot_name:"nb$divide",$slot_func:o,$wrapper:n,$textsig:"($self, other/)",$flags:{OneArg:!0},$doc:"x.__div__(y) <==> x/y"},__rdiv__:{$name:"__rdiv__",$slot_name:"nb$reflected_divide",$slot_func:o,$wrapper:n,$textsig:"($self, other/)",$flags:{OneArg:!0},$doc:"x.__rdiv__(y) <==> x/y"},__idiv__:{$name:"__idiv__",$slot_name:"nb$inplace_divide",$slot_func:o,$wrapper:n,$textsig:"($self, other/)",$flags:{OneArg:!0},$doc:"implement self /= other"}};Sk.subSlots={main_slots:Object.entries({tp$init:"__init__",tp$call:"__call__",$r:"__repr__",tp$str:"__str__",tp$getattr:"__getattribute__",tp$setattr:["__setattr__","__delattr__"],ob$eq:"__eq__",ob$ne:"__ne__",ob$lt:"__lt__",ob$le:"__le__",ob$gt:"__gt__",ob$ge:"__ge__",tp$descr_get:"__get__",tp$descr_set:["__set__","__delete__"],tp$iter:"__iter__",tp$iternext:"__next__"}),number_slots:Object.entries({nb$abs:"__abs__",nb$negative:"__neg__",nb$positive:"__pos__",nb$int:"__int__",nb$long:"__long__",nb$float:"__float__",nb$add:"__add__",nb$reflected_add:"__radd__",nb$inplace_add:"__iadd__",nb$subtract:"__sub__",nb$reflected_subtract:"__rsub__",nb$inplace_subtract:"__isub__",nb$multiply:"__mul__",nb$reflected_multiply:"__rmul__",nb$inplace_multiply:"__imul__",nb$floor_divide:"__floordiv__",nb$reflected_floor_divide:"__rfloordiv__",nb$inplace_floor_divide:"__ifloordiv__",nb$invert:"__invert__",nb$remainder:"__mod__",nb$reflected_remainder:"__rmod__",nb$inplace_remainder:"__imod__",nb$divmod:"__divmod__",nb$reflected_divmod:"__rdivmod__",nb$power:"__pow__",nb$reflected_power:"__rpow__",nb$inplace_power:"__ipow__",nb$divide:"__truediv__",nb$reflected_divide:"__rtruediv__",nb$inplace_divide:"__itruediv__",nb$bool:"__bool__",nb$and:"__and__",nb$reflected_and:"__rand__",nb$inplace_and:"__iand__",nb$or:"__or__",nb$reflected_or:"__ror__",nb$inplace_or:"__ior__",nb$xor:"__xor__",nb$reflected_xor:"__rxor__",nb$inplace_xor:"__ixor__",nb$lshift:"__lshift__",nb$reflected_lshift:"__rlshift__",nb$rshift:"__rshift__",nb$reflected_rshift:"__rrshift__",nb$inplace_lshift:"__ilshift__",nb$inplace_rshift:"__irshift__",nb$matrix_multiply:"__matmul__",nb$reflected_matrix_multiply:"__rmatmul__",nb$inplace_matrix_multiply:"__imatmul__"}),sequence_and_mapping_slots:Object.entries({sq$length:"__len__",sq$contains:"__contains__",mp$subscript:"__getitem__",mp$ass_subscript:["__setitem__","__delitem__"],nb$add:"__add__",nb$multiply:"__mul__",nb$reflected_multiply:"__rmul__",nb$inplace_add:"__iadd__",nb$inplace_multiply:"__imul__"})},Sk.reflectedNumberSlots={nb$add:{reflected:"nb$reflected_add"},nb$subtract:{reflected:"nb$reflected_subtract",slot:function(m){return m instanceof this.constructor?m.nb$subtract(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$multiply:{reflected:"nb$reflected_multiply"},nb$divide:{reflected:"nb$reflected_divide",slot:function(m){return m instanceof this.constructor?m.nb$divide(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$floor_divide:{reflected:"nb$reflected_floor_divide",slot:function(m){return m instanceof this.constructor?m.nb$floor_divide(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$remainder:{reflected:"nb$reflected_remainder",slot:function(m){return m instanceof this.constructor?m.nb$remainder(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$divmod:{reflected:"nb$reflected_divmod",slot:function(m){return m instanceof this.constructor?m.nb$divmod(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$power:{reflected:"nb$reflected_power",slot:function(m,h){return m instanceof this.constructor?m.nb$power(this,h):Sk.builtin.NotImplemented.NotImplemented$}},nb$and:{reflected:"nb$reflected_and"},nb$or:{reflected:"nb$reflected_or"},nb$xor:{reflected:"nb$reflected_xor"},nb$lshift:{reflected:"nb$reflected_lshift",slot:function(m){return m instanceof this.constructor?m.nb$lshift(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$rshift:{reflected:"nb$reflected_rshift",slot:function(m){return m instanceof this.constructor?m.nb$rshift(this):Sk.builtin.NotImplemented.NotImplemented$}},nb$matrix_multiply:{reflected:"nb$reflexted_matrix_multiply",slot:function(m){return m instanceof this.constructor?m.nb$matrix_multiply(this):Sk.builtin.NotImplemented.NotImplemented$}}},Sk.sequenceAndMappingSlots={sq$concat:["nb$add"],sq$repeat:["nb$multiply","nb$reflected_multiply"],mp$length:["sq$length"],sq$inplace_repeat:["nb$inplace_multiply"],sq$inplace_concat:["nb$inplace_add"]},Sk.dunderToSkulpt={__repr__:"$r",__str__:"tp$str",__init__:"tp$init",__new__:"tp$new",__hash__:"tp$hash",__call__:"tp$call",__iter__:"tp$iter",__next__:"tp$iternext",__eq__:"ob$eq",__ne__:"ob$ne",__lt__:"ob$lt",__le__:"ob$le",__gt__:"ob$gt",__ge__:"ob$ge",__abs__:"nb$abs",__neg__:"nb$negative",__pos__:"nb$positive",__int__:"nb$int",__float__:"nb$float",__add__:"nb$add",__radd__:"nb$reflected_add",__iadd__:"nb$inplace_add",__sub__:"nb$subtract",__rsub__:"nb$reflected_subtract",__isub__:"nb$inplace_subtract",__mul__:"nb$multiply",__rmul__:"nb$reflected_multiply",__imul__:"nb$inplace_multiply",__truediv__:"nb$divide",__rtruediv__:"nb$reflected_divide",__itruediv__:"nb$inplace_divide",__floordiv__:"nb$floor_divide",__rfloordiv__:"nb$reflected_floor_divide",__ifloordiv__:"nb$inplace_floor_divide",__invert__:"nb$invert",__mod__:"nb$remainder",__rmod__:"nb$reflected_remainder",__imod__:"nb$inplace_remainder",__divmod__:"nb$divmod",__rdivmod__:"nb$reflected_divmod",__pow__:"nb$power",__rpow__:"nb$reflected_power",__ipow__:"nb$inplace_power",__bool__:"nb$bool",__long__:"nb$long",__lshift__:"nb$lshift",__rlshift__:"nb$reflected_lshift",__ilshift__:"nb$inplace_lshift",__rshift__:"nb$rshift",__rrshift__:"nb$reflected_rshift",__irshift__:"nb$inplace_rshift",__and__:"nb$and",__rand__:"nb$reflected_and",__iand__:"nb$inplace_and",__or__:"nb$or",__ror__:"nb$reflected_or",__ior__:"nb$inplace_or",__xor__:"nb$xor",__rxor__:"nb$reflected_xor",__ixor__:"nb$inplace_xor",__matmul__:"nb$matrix_multiply",__rmatmul__:"nb$reflected_matrix_multiply",__imatmul__:"nb$inplace_matrix_multiply",__get__:"tp$descr_get",__set__:"tp$descr_set",__delete__:"tp$descr_set",__getattribute__:"tp$getattr",__getattr__:"tp$getattr",__setattr__:"tp$setattr",__delattr__:"tp$setattr",__len__:"sq$length",__contains__:"sq$contains",__getitem__:"mp$subscript",__setitem__:"mp$ass_subscript",__delitem__:"mp$ass_subscript"},Sk.exportSymbol("Sk.setupDunderMethods",Sk.setupDunderMethods),Sk.setupDunderMethods=function(m){function h(S,g,x){for(let N=0;N<S.length;N++){const O=S[N].prototype;O.hasOwnProperty(x)||(O[x]=O[g],delete O[g])}}var v=Sk.slots;if(!m||y!==void 0){var k=Sk.abstr.built$iterators,A=[Sk.builtin.int_,Sk.builtin.lng,Sk.builtin.float_,Sk.builtin.complex],M=Sk.subSlots.number_slots,D=Sk.subSlots.main_slots,f=D.findIndex(S=>S[0]==="tp$iternext"),b=M.findIndex(S=>S[0]==="nb$bool"),d=Sk.dunderToSkulpt;if(m){d.__bool__="nb$bool",d.__next__="tp$iternext",delete d.__nonzero__,delete d.__div__,delete d.__rdiv__,delete d.__idiv__,delete d.next;for(let S in y)v[S]=y[S];for(let S in w)delete v[S];for(m=0;m<A.length;m++)v=A[m].prototype,delete v.__div__,delete v.__rdiv__;D[f][1]="__next__",M[b][1]="__bool__",h(k,"next","__next__"),h(A,"__bool__","__nonzero__")}else{y===void 0&&(v.py3$slots={__next__:v.__next__},y=v.py3$slots),d.next="tp$iternext",d.__nonzero__="nb$bool",d.__div__="nb$divide",d.__rdiv__="nb$reflected_divide",d.__idiv__="nb$inplace_divide",delete d.__bool__,delete d.__next__;for(let S in w)v[S]=w[S];for(let S in y)delete v[S];for(D[f][1]="next",M[b][1]="__nonzero__",h(k,"__next__","next"),h(A,"__nonzero__","__bool__"),k=0;k<A.length;k++)M=A[k],D=M.prototype,D.hasOwnProperty("__div__")||(D.__div__=new Sk.builtin.wrapper_descriptor(M,w.__div__,D.nb$divide),D.__rdiv__=new Sk.builtin.wrapper_descriptor(M,w.__rdiv__,Sk.reflectedNumberSlots.nb$divide.slot))}}}},function(j,F){function e(c,u,i){return Sk.abstr.buildNativeClass(c,{constructor:i.constructor,slots:Object.assign({tp$getattr:Sk.generic.getAttr,$r:r},i.slots),getsets:Object.assign(i.getsets||{},l),proto:Object.assign(i.proto||{},{d$repr_name:u||c,d$check:n,d$set_check:t}),flags:{sk$acceptable_as_base_class:!1}})}function n(c){if(c==null)return this;if(!c.ob$type.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(c)+"' object")}function t(c){if(!c.ob$type.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(c)+"' object")}function r(){return new Sk.builtin.str("<"+this.d$repr_name+" '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' objects>")}const l={__doc__:{$get(){return this.d$def.$doc?new Sk.builtin.str(this.d$def.$doc):Sk.builtin.none.none$}},__objclass__:{$get(){return this.d$type}},__name__:{$get(){return new Sk.builtin.str(this.d$name)}}};j={__text_signature__:{$get(){return this.d$def.$textsig?new Sk.builtin.str(this.d$def.$textsig):Sk.builtin.none.none$}}},Sk.builtin.getset_descriptor=e("getset_descriptor",void 0,{constructor:function(c,u){this.d$def=u,this.$get=u.$get,this.$set=u.$set,this.d$type=c,this.d$name=u.$name},slots:{tp$descr_get(c,u){if(u=this.d$check(c))return u;if(this.$get!==void 0)return this.$get.call(c);throw new Sk.builtin.AttributeError("getset_descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' objects is not readable")},tp$descr_set(c,u){if(this.d$set_check(c),this.$set!==void 0)return this.$set.call(c,u);throw new Sk.builtin.AttributeError("attribute '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' objects is readonly")}}}),Sk.builtin.method_descriptor=e("method_descriptor","method",{constructor:function(c,u){this.d$def=u,this.$meth=u.$meth,this.d$type=c,this.d$name=u.$name||"<native JS>",this.$flags=c=u.$flags||{},c.FastCall&&c.NoKwargs?this.tp$call=this.$methodFastCallNoKwargs:c.FastCall?this.tp$call=this.$methodFastCall:c.NoArgs?this.tp$call=this.$methodCallNoArgs:c.OneArg?this.tp$call=this.$methodCallOneArg:c.NamedArgs?this.tp$call=this.$methodCallNamedArgs:c.MinArgs!==void 0?this.tp$call=this.$methodCallMinArgs:(this.func_code=u.$meth,this.tp$call=this.$defaultCall,this.$memoiseFlags=Sk.builtin.func.prototype.$memoiseFlags,this.$resolveArgs=Sk.builtin.func.prototype.$resolveArgs)},slots:{tp$call(c,u){return this.tp$call(c,u)},tp$descr_get(c,u){let i;return(i=this.d$check(c))?i:new Sk.builtin.sk_method(this.d$def,c)}},getsets:j,proto:{$methodFastCall(c,u){const i=c.shift();return this.m$checkself(i),this.$meth.call(i,c,u)},$methodFastCallNoKwargs(c,u){const i=c.shift();return this.m$checkself(i),Sk.abstr.checkNoKwargs(this.d$name,u),this.$meth.call(i,c)},$methodCallNoArgs(c,u){const i=c.shift();return this.m$checkself(i),Sk.abstr.checkNoArgs(this.d$name,c,u),this.$meth.call(i)},$methodCallOneArg(c,u){const i=c.shift();return this.m$checkself(i),Sk.abstr.checkOneArg(this.d$name,c,u),this.$meth.call(i,c[0])},$methodCallNamedArgs(c,u){const i=c.shift();return this.m$checkself(i),c=Sk.abstr.copyKeywordsToNamedArgs(this.d$name,this.$flags.NamedArgs,c,u,this.$flags.Defaults),this.$meth.call(i,...c)},$methodCallMinArgs(c,u){const i=c.shift();return this.m$checkself(i),Sk.abstr.checkNoKwargs(this.d$name,u),Sk.abstr.checkArgsLen(this.d$name,c,this.$flags.MinArgs,this.$flags.MaxArgs),this.$meth.call(i,...c)},$defaultCall(c,u){return this.m$checkself(c[0]),Sk.builtin.func.prototype.tp$call.call(this,c,u)},m$checkself(c){if(c===void 0)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' object needs an argument");this.d$check(c)}}}),Sk.builtin.wrapper_descriptor=e("wrapper_descriptor","slot wrapper",{constructor:function(c,u,i){this.d$def=u,this.d$type=c,this.d$name=i.$name=u.$name,this.d$wrapped=i},slots:{tp$descr_get(c,u){let i;return(i=this.d$check(c))?i:new Sk.builtin.method_wrapper(this,c)},tp$call(c,u){if(1>c.length)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' object needs an argument");const i=c.shift();if(!i.ob$type.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(i)+"'");return this.raw$call(i,c,u)}},proto:{raw$call(c,u,i){return this.d$wrapped.$name=this.d$name,this.d$def.$wrapper.call(this.d$wrapped,c,u,i)}}}),Sk.builtin.method_wrapper=e("method_wrapper",void 0,{constructor:function(c,u){this.m$descr=c,this.m$self=u,this.d$def=c.d$def,this.d$name=c.d$name,this.d$type=c.d$type},slots:{tp$call(c,u){return this.m$descr.raw$call(this.m$self,c,u)},tp$richcompare(c,u){return u!=="Eq"&&u!=="NotEq"||!(c instanceof Sk.builtin.method_wrapper)?Sk.builtin.NotImplemented.NotImplemented$:(c=this.m$self===c.m$self&&this.m$descr===c.m$descr,u==="Eq"?c:!c)},$r(){return new Sk.builtin.str("<method-wrapper '"+this.d$name+"' of "+Sk.abstr.typeName(this.m$self)+" object>")}},getsets:{__self__:{$get(){return this.m$self}}}}),Sk.builtin.classmethod_descriptor=e("classmethod_descriptor","method",{constructor:function(c,u){this.d$def=u,this.$meth=u.$meth,this.d$type=c,this.d$name=u.$name||"<native JS>"},slots:{tp$call(c,u){if(1>c.length)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' of '"+this.d$type.prototype.tp$name+"' object needs an argument");const i=c.shift();return this.tp$descr_get(null,i).tp$call(c,u)},tp$descr_get(c,u,i){if(u===void 0)if(c!==null)u=u||c.ob$type;else throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' for type '"+this.d$type.prototype.tp$name+"' needs an object or a type");if(u.ob$type!==Sk.builtin.type)throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' for type '"+this.d$type.prototype.tp$name+"' needs a type not a '"+Sk.abstr.typeName(u)+"' as arg 2");if(!u.$isSubType(this.d$type))throw new Sk.builtin.TypeError("descriptor '"+this.d$name+"' requires a '"+this.d$type.prototype.tp$name+"' object but received a '"+Sk.abstr.typeName(u)+"' object");return new Sk.builtin.sk_method(this.d$def,u)}},getsets:j}),[Sk.builtin.method_descriptor,Sk.builtin.getset_descriptor,Sk.builtin.wrapper_descriptor,Sk.builtin.method_wrapper,Sk.builtin.classmethod_descriptor].forEach(c=>{Sk.abstr.setUpSlots(c),Sk.abstr.setUpMethods(c),Sk.abstr.setUpGetSets(c)})},function(j,F){Sk.builtin.sk_method=Sk.abstr.buildNativeClass("builtin_function_or_method",{constructor:function(e,n,t){this.$meth=e.$meth.bind(n),this.$doc=e.$doc,this.$self=n||null,this.$module=t?new Sk.builtin.str(t):null,this.$name=e.$name||e.$meth.name||"<native JS>",this.m$def=e,this.$textsig=e.$textsig,this.$flags=e=e.$flags||{},e.FastCall&&e.NoKwargs?this.tp$call=this.$fastCallNoKwargs:e.FastCall?this.tp$call=this.$meth:e.NoArgs?this.tp$call=this.$callNoArgs:e.OneArg?this.tp$call=this.$callOneArg:e.NamedArgs?this.tp$call=this.$callNamedArgs:e.MinArgs!==void 0?this.tp$call=this.$callMinArgs:(this.func_code=this.$meth,this.tp$call=this.$defaultCallMethod)},proto:{$fastCallNoKwargs(e,n){return Sk.abstr.checkNoKwargs(this.$name,n),this.$meth(e)},$callNoArgs(e,n){return Sk.abstr.checkNoArgs(this.$name,e,n),this.$meth()},$callOneArg(e,n){return Sk.abstr.checkOneArg(this.$name,e,n),this.$meth(e[0])},$callNamedArgs(e,n){return e=Sk.abstr.copyKeywordsToNamedArgs(this.$name,this.$flags.NamedArgs,e,n,this.$flags.Defaults),this.$meth(...e)},$callMinArgs(e,n){return Sk.abstr.checkNoKwargs(this.$name,n),Sk.abstr.checkArgsLen(this.$name,e,this.$flags.MinArgs,this.$flags.MaxArgs),this.$meth(...e)},$defaultCallMethod(e,n){return this.$self!==null?Sk.builtin.func.prototype.tp$call.call(this,[this.$self,...e],n):Sk.builtin.func.prototype.tp$call.call(this,e,n)},$memoiseFlags(){return Sk.builtin.func.prototype.$memoiseFlags.call(this)},$resolveArgs(){return Sk.builtin.func.prototype.$resolveArgs.call(this)}},flags:{sk$acceptable_as_base_class:!1},slots:{tp$getattr:Sk.generic.getAttr,$r(){return this.$self===null?new Sk.builtin.str("<built-in function "+this.$name+">"):new Sk.builtin.str("<built-in method "+this.$name+" of "+Sk.abstr.typeName(this.$self)+" object>")},tp$call(e,n){return this.tp$call(e,n)},tp$richcompare(e,n){return n!=="Eq"&&n!=="NotEq"||!(e instanceof Sk.builtin.sk_method)?Sk.builtin.NotImplemented.NotImplemented$:(e=this.$self===e.$self&&this.m$def.$meth===e.m$def.$meth,n==="Eq"?e:!e)}},getsets:{__module__:{$get(){return this.$module||Sk.builtin.none.none$},$set(e){this.$module=e=e||Sk.builtin.none.none$}},__doc__:{$get(){return this.$doc?new Sk.builtin.str(this.$doc):Sk.builtin.none.none$}},__name__:{$get(){return new Sk.builtin.str(this.$name)}},__text_signature__:{$get(){return new Sk.builtin.str(this.$textsig)}},__self__:{$get(){return this.$self||Sk.sysModules.mp$lookup(this.$module)||Sk.builtin.none.none$}}}})},function(j,F){Sk.builtin.none=Sk.abstr.buildNativeClass("NoneType",{constructor:function(){return Sk.builtin.none.none$},slots:{tp$new(e,n){return Sk.abstr.checkNoArgs("NoneType",e,n),Sk.builtin.none.none$},$r(){return new Sk.builtin.str("None")},tp$as_number:!0,nb$bool(){return!1}},flags:{sk$acceptable_as_base_class:!1}}),Sk.builtin.none.none$=Object.create(Sk.builtin.none.prototype,{v:{value:null,enumerable:!0}}),Sk.builtin.NotImplemented=Sk.abstr.buildNativeClass("NotImplementedType",{constructor:function(){return Sk.builtin.NotImplemented.NotImplemented$},slots:{$r(){return new Sk.builtin.str("NotImplemented")},tp$new(e,n){return Sk.abstr.checkNoArgs("NotImplementedType",e,n),Sk.builtin.NotImplemented.NotImplemented$}},flags:{sk$acceptable_as_base_class:!1}}),Sk.builtin.NotImplemented.NotImplemented$=Object.create(Sk.builtin.NotImplemented.prototype,{v:{value:null,enumerable:!0}})},function(j,F){const e=/^(?:(.)?([<>=\^]))?([\+\-\s])?(#)?(0)?(\d+)?(,)?(?:\.(\d+))?([bcdeEfFgGnosxX%])?$/;Sk.formatting={};let n=function(c,u,i,o){if(Sk.asserts.assert(typeof u=="string"),c[6]){var p=parseInt(c[6],10);o=c[2]||(c[5]?"=":o?">":"<");let s=p-(u.length+(i?i.length:0));if(0>=s)return u;switch(p=(c[1]||(c[5]?"0":" ")).repeat(s),o){case"=":if(c[9]==="s")throw new Sk.builtin.ValueError("'=' alignment not allowed in string format specifier");return i+p+u;case">":return p+i+u;case"<":return i+u+p;case"^":return c=Math.floor(s/2),p.substring(0,c)+i+u+p.substring(c)}}return i+u},t=function(c,u){return u?"-":c[3]==="+"?"+":c[3]===" "?" ":""},r=function(c,u,i){if(Sk.asserts.assert(u instanceof Sk.builtin.int_||u instanceof Sk.builtin.lng),c[8])throw new Sk.builtin.ValueError("Precision not allowed in integer format");let o=u.str$(i,!1);return u=u.nb$isnegative(),u=t(c,u),c[4]&&(i===16?u+="0x":i===8?u+="0o":i===2&&(u+="0b")),c[9]==="X"&&(o=o.toUpperCase()),c[9]==="n"?o=(+o).toLocaleString():c[7]&&(i=o.toString().split("."),i[0]=i[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),o=i.join(".")),n(c,o,u,!0)},l=function(c,u,i){if(!u)return c.str$(10,!0);if(u=u.match(e),!u)throw new Sk.builtin.ValueError("Invalid format specifier");var o=u[9];if(o||(o=i?"g":"d"),(i?"fFeEgG%":"bcdoxXnfFeEgG%").indexOf(o)==-1)throw new Sk.builtin.ValueError("Unknown format code '"+u[9]+"' for object of type '"+Sk.abstr.typeName(c)+"'");switch(o){case"d":case"n":return r(u,c,10);case"x":case"X":return r(u,c,16);case"o":return r(u,c,8);case"b":return r(u,c,2);case"c":if(u[3])throw new Sk.builtin.ValueError("Sign not allowed with integer format specifier 'c'");if(u[4])throw new Sk.builtin.ValueError("Alternate form not allowed with integer format specifier 'c'");if(u[7])throw new Sk.builtin.ValueError("Cannot specify ',' with 'c'");if(u[8])throw new Sk.builtin.ValueError("Cannot specify ',' with 'c'");return n(u,String.fromCodePoint(Sk.builtin.asnum$(c)),"",!0);case"f":case"F":case"e":case"E":case"g":case"G":{if(u[4])throw new Sk.builtin.ValueError("Alternate form (#) not allowed in float format specifier");if(i=Sk.builtin.asnum$(c),typeof i=="string"&&(i=Number(i)),i===1/0)return n(u,"inf","",!0);if(i===-1/0)return n(u,"inf","-",!0);if(isNaN(i))return n(u,"nan","",!0);c=!1,0>i&&(i=-i,c=!0);var p=["toExponential","toFixed","toPrecision"]["efg".indexOf(o.toLowerCase())];let s=u[8]?parseInt(u[8],10):6;if(i=i[p](s),"EFG".indexOf(o)!==-1&&(i=i.toUpperCase()),o.toLowerCase()==="g"||!u[9]){if(p=i.match(/\.(\d*[1-9])?(0+)$/)){let[,a,$]=p;i=i.slice(0,a?-$.length:-($.length+1))}i.indexOf(".")!=-1||u[9]||(i+=".0")}return o.toLowerCase()==="e"&&(i=i.replace(/^([-+]?[0-9]*\.?[0-9]+[eE][-+]?)([0-9])?$/,"$10$2")),u[7]&&(o=i.toString().split("."),o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),i=o.join(".")),n(u,i,t(u,c),!0)}case"%":if(u[4])throw new Sk.builtin.ValueError("Alternate form (#) not allowed with format specifier '%'");return c=Sk.builtin.asnum$(c),typeof c=="string"&&(c=Number(c)),c===1/0?n(u,"inf%","",!0):c===-1/0?n(u,"inf%","-",!0):isNaN(c)?n(u,"nan%","",!0):(o=!1,0>c&&(c=-c,o=!0),i=u[8]?parseInt(u[8],10):6,c=(100*c).toFixed(i)+"%",n(u,c,t(u,o),!0));default:throw new Sk.builtin.ValueError("Unknown format code '"+u[9]+"'")}};Sk.formatting.mkNumber__format__=c=>function(u){if(!Sk.builtin.checkString(u))throw new Sk.builtin.TypeError("format() argument 2 must be str, not "+Sk.abstr.typeName(u));return new Sk.builtin.str(l(this,u.$jsstr(),c))},Sk.formatting.format=function(c,u){u=u||[];const i={};for(let p=0;p<u.length;p+=2)i[u[p]]=u[p+1];for(let p in c)i[p]=c[p];let o=0;return c=this.v.replace(/{(((?:\d+)|(?:\w+))?((?:\.(\w+))|(?:\[((?:\d+)|(?:\w+))\])?))?(?:!([rs]))?(?::([^}]*))?}/g,function(p,s,a,$,y,w,m,h,v,k){let A;if(w!==void 0&&w!==""?(p=i[a],A=p.constructor===Array?p[w]:/^\d+$/.test(w)?Sk.abstr.objectGetItem(p,new Sk.builtin.int_(parseInt(w,10)),!1):Sk.abstr.objectGetItem(p,new Sk.builtin.str(w),!1),o++):y!==void 0&&y!==""?A=Sk.abstr.gattr(i[a||o++],new Sk.builtin.str(y)):a!==void 0&&a!==""?A=i[a]:s===void 0||s===""?(A=i[o],o++):(s instanceof Sk.builtin.int_||s instanceof Sk.builtin.float_||s instanceof Sk.builtin.lng||/^\d+$/.test(s))&&(A=i[s],o++),m==="s")A=new Sk.builtin.str(A);else if(m==="r")A=Sk.builtin.repr(A);else if(m!==""&&m!==void 0)throw new Sk.builtin.ValueError("Unknown conversion specifier "+m);return Sk.abstr.objectFormat(A,new Sk.builtin.str(h)).$jsstr()}),new Sk.builtin.str(c)},Sk.formatting.formatString=function(c){if(!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("format() argument 2 must be str, not "+Sk.abstr.typeName(c));if(c=c.$jsstr().match(e),c[9]&&c[9]!=="s")throw new Sk.builtin.ValueError("Unknown format code '"+c[9]+"' for object of type 'str'");if(c[3])throw new Sk.builtin.ValueError("Sign not allowed in string format specifier");if(c[4])throw new Sk.builtin.ValueError("Alternate form (#) not allowed with string format specifier");if(c[7])throw new Sk.builtin.ValueError("Cannot specify ',' with 's'");let u=this.v;return c[8]&&(u=u.substring(0,c[8])),new Sk.builtin.str(n(c,u,"",!1))}},function(j,F){function e(m){let h;const v=[];for(let k=0;k<m.length;k++)h=m.charAt(k),s.test(h)?v.push(h):h==="\\000"?v.push("\\000"):v.push("\\"+h);return v.join("")}function n(m,h,v){if(h=Sk.builtin.checkNone(h)?null:m.get$tgt(h),h!==null&&!h.length)throw new Sk.builtin.ValueError("empty separator");m=m.v;var k=0;if(h===null){var A=/[\s\xa0]+/g;k=m.length,m=m.replace($,""),k-=m.length}else A=h.replace(a,"\\$1"),A=new RegExp(A,"g");const M=[];let D=0,f=0,b;for(v=0>v?1/0:v;(b=A.exec(m))!=null&&f<v&&b.index!==A.lastIndex;)M.push(D+k),M.push(b.index+k),D=A.lastIndex,f+=1;return(h!==null||m.length-D)&&(M.push(D+k),M.push(m.length+k)),M}function t(m,h){return function(v){if(v===void 0||Sk.builtin.checkNone(v))v=m;else if(v instanceof Sk.builtin.str)v=e(v.v),v=new RegExp(h(v),"g");else throw new Sk.builtin.TypeError("strip arg must be None or str");return new Sk.builtin.str(this.v.replace(v,""))}}function r(m){return function(h){h=this.get$tgt(h);const v=this.v;let k;if(m){if(k=v.lastIndexOf(h),0>k)return new Sk.builtin.tuple([new Sk.builtin.str(""),new Sk.builtin.str(""),new Sk.builtin.str(v)])}else if(k=v.indexOf(h),0>k)return new Sk.builtin.tuple([new Sk.builtin.str(v),new Sk.builtin.str(""),new Sk.builtin.str("")]);return new Sk.builtin.tuple([new Sk.builtin.str(v.substring(0,k)),new Sk.builtin.str(h),new Sk.builtin.str(v.substring(k+h.length))])}}function l(m,h){return function(v,k){if(v=Sk.misceval.asIndexSized(v,Sk.builtin.OverflowError),k===void 0)k=" ";else if(k instanceof Sk.builtin.str&&k.sq$length()===1)k=k.v;else throw new Sk.builtin.TypeError("the fill character must be a str of length 1");const A=this.sq$length();let M;return A>=v?new Sk.builtin.str(this.v):h?(M=k.repeat(Math.floor((v-A)/2)),M=M+this.v+M,(v-A)%2&&(M+=k),new Sk.builtin.str(M)):(M=k.repeat(v-A),new Sk.builtin.str(m?M+this.v:this.v+M))}}function c(m,h,v){if({start:h,end:v}=Sk.builtin.slice.startEnd$wrt(m,h,v),m.$hasAstralCodePoints()){const k=m.codepoints[h];h=k===void 0?h+m.v.length-m.codepoints.length:k,v=m.codepoints[v],v=v===void 0?m.v.length:v}return{start:h,end:v}}function u(m){return function(h,v,k){if(h=this.get$tgt(h),{start:v,end:k}=c(this,v,k),k<v)return-1;if(k-=h.length,h=m?this.v.lastIndexOf(h,k):this.v.indexOf(h,v),h=h>=v&&h<=k?h:-1,this.codepoints){k=this.sq$length(),v=-1;for(let A=0;A<k;A++)h==this.codepoints[A]&&(v=A)}else v=h;return v}}function i(m,h){return function(v,k,A){if(!(v instanceof Sk.builtin.str||v instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError(m+" first arg must be str or a tuple of str, not "+Sk.abstr.typeName(v));if({start:k,end:A}=c(this,k,A),k>A)return Sk.builtin.bool.false$;if(k=this.v.slice(k,A),v instanceof Sk.builtin.tuple){for(let M=Sk.abstr.iter(v),D=M.tp$iternext();D!==void 0;D=M.tp$iternext()){if(!(D instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("tuple for "+m+" must only contain str, not "+Sk.abstr.typeName(D));if(h(k,D.v))return Sk.builtin.bool.true$}return Sk.builtin.bool.false$}return new Sk.builtin.bool(h(k,v.v))}}var o=/^[0-9!#_]/,p=Object.create(null);Sk.builtin.str=Sk.abstr.buildNativeClass("str",{constructor:function(m){if(Sk.asserts.assert(this instanceof Sk.builtin.str,"bad call to str - use 'new'"),typeof m!="string")if(m===void 0)m="";else if(m===null)m="None";else{if(m.tp$str!==void 0)return m.tp$str();if(typeof m=="number")m=Number.isFinite(m)?String(m):String(m).replace("Infinity","inf").replace("NaN","nan");else throw new Sk.builtin.TypeError("could not convert object of type '"+Sk.abstr.typeName(m)+"' to str")}var h=p[m];if(h!==void 0)return h;p[m]=this,h=w[m]===void 0?m:m+"_$rw$",this.$mangled=h,this.$savedKeyHash=m.replace(o,"!$&"),this.v=m},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$doc:`str(object='') -> str
str(bytes_or_buffer[, encoding[, errors]]) -> str

Create a new string object from the given object. If encoding or
errors is specified, then the object must expose a data buffer
that will be decoded using the given encoding and error handler.
Otherwise, returns the result of object.__str__() (if defined)
or repr(object).
encoding defaults to sys.getdefaultencoding().
errors defaults to 'strict'.`,tp$new(m,h){if(h=h||[],this!==Sk.builtin.str.prototype)return this.$subtype_new(m,h);if(1>=m.length&&!h.length)return new Sk.builtin.str(m[0]);if(Sk.__future__.python3){const[v,k,A]=Sk.abstr.copyKeywordsToNamedArgs("str",["object","encoding","errors"],m,h);if(v===void 0||k===void 0&&A===void 0)return new Sk.builtin.str(v);if(Sk.builtin.bytes.check$encodeArgs("str",k,A),!Sk.builtin.checkBytes(v))throw new Sk.builtin.TypeError("decoding to str: need a bytes-like object, "+Sk.abstr.typeName(v)+" found");return Sk.builtin.bytes.$decode.call(v,k,A)}throw new Sk.builtin.TypeError("str takes at most one argument ("+(m.length+h.length)+" given)")},$r(){let m="'";this.v.indexOf("'")!==-1&&this.v.indexOf('"')===-1&&(m='"');const h=this.v.length;let v=m;for(let M=0;M<h;M++){var k=this.v.charAt(M),A=this.v.charCodeAt(M);k===m||k==="\\"?v+="\\"+k:k==="	"?v+="\\t":k===`
`?v+="\\n":k==="\r"?v+="\\r":(255<A&&55296>A||57344<=A)&&!Sk.__future__.python3?v+="\\u"+("000"+A.toString(16)).slice(-4):55296<=A&&!Sk.__future__.python3?(k=this.v.codePointAt(M),M++,k=k.toString(16),A="0000000"+k.toString(16),v=4<k.length?v+("\\U"+A.slice(-8)):v+("\\u"+A.slice(-4))):255<A&&!Sk.__future__.python3?v+="\\ufffd":" ">k||127<=A&&!Sk.__future__.python3?(k=k.charCodeAt(0).toString(16),2>k.length&&(k="0"+k),v+="\\x"+k):v+=k}return new Sk.builtin.str(v+m)},tp$str(){return this.constructor===Sk.builtin.str?this:new Sk.builtin.str(this.v)},tp$iter(){return new y(this)},tp$richcompare(m,h){if(!(m instanceof Sk.builtin.str))return Sk.builtin.NotImplemented.NotImplemented$;switch(h){case"Lt":return this.v<m.v;case"LtE":return this.v<=m.v;case"Eq":return this.v===m.v;case"NotEq":return this.v!==m.v;case"Gt":return this.v>m.v;case"GtE":return this.v>=m.v}},mp$subscript(m){let h;if(Sk.misceval.isIndex(m)){if(m=Sk.misceval.asIndexSized(m,Sk.builtin.OverflowError),h=this.sq$length(),0>m&&(m+=h),0>m||m>=h)throw new Sk.builtin.IndexError("string index out of range");return this.codepoints?new Sk.builtin.str(this.v.substring(this.codepoints[m],this.codepoints[m+1])):new Sk.builtin.str(this.v.charAt(m))}if(m instanceof Sk.builtin.slice){let v="";return h=this.sq$length(),this.codepoints?m.sssiter$(h,k=>{v+=this.v.substring(this.codepoints[k],this.codepoints[k+1])}):m.sssiter$(h,k=>{v+=this.v.charAt(k)}),new Sk.builtin.str(v)}throw new Sk.builtin.TypeError("string indices must be integers, not "+Sk.abstr.typeName(m))},sq$length(){return this.$hasAstralCodePoints()?this.codepoints.length:this.v.length},sq$concat(m){if(!(m instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("cannot concatenate 'str' and '"+Sk.abstr.typeName(m)+"' objects");return new Sk.builtin.str(this.v+m.v)},sq$repeat(m){if(!Sk.misceval.isIndex(m))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(m)+"'");if(m=Sk.misceval.asIndexSized(m,Sk.builtin.OverflowError),m*this.v.length>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;let h="";for(let v=0;v<m;v++)h+=this.v;return new Sk.builtin.str(h)},sq$contains(m){if(!(m instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("'in <string>' requires string as left operand not "+Sk.abstr.typeName(m));return this.v.indexOf(m.v)!==-1},tp$as_number:!0,nb$remainder:function(m){var h;const v=this.sk$builtinBase;m.constructor===Sk.builtin.tuple||m instanceof Sk.builtin.dict||m instanceof Sk.builtin.mappingproxy||(m=new Sk.builtin.tuple([m]));var k=0,A=this.$jsstr().replace(/%(\([a-zA-Z0-9]+\))?([#0 +\-]+)?(\*|[0-9]+)?(\.(\*|[0-9]+))?[hlL]?([diouxXeEfFgGcrsb%])/g,function(M,D,f,b,d,S,g){var x,N,O,P,W;b=Sk.builtin.asnum$(b),d=Sk.builtin.asnum$(d),D!==void 0&&D!==""||g=="%"||(x=k++),d===""&&(d=void 0);var re=N=O=P=W=!1;if(f&&(f.indexOf("-")!==-1?P=!0:f.indexOf("0")!==-1&&(W=!0),f.indexOf("+")!==-1?N=!0:f.indexOf(" ")!==-1&&(O=!0),re=f.indexOf("#")!==-1),d&&(d=parseInt(d.substr(1),10)),f=function(V,ee){var ie;ee=Sk.builtin.asnum$(ee);var te=!1;if(typeof V=="number"){0>V&&(V=-V,te=!0);var se=V.toString(ee)}else V instanceof Sk.builtin.float_?(se=V.str$(ee,!1),2<se.length&&se.substr(-2)===".0"&&(se=se.substr(0,se.length-2)),te=V.nb$isnegative()):(V instanceof Sk.builtin.int_||V instanceof Sk.builtin.lng)&&(se=V.str$(ee,!1),te=V.nb$isnegative());if(Sk.asserts.assert(se!==void 0,"unhandled number format"),V=!1,d)for(ie=se.length;ie<d;++ie)se="0"+se,V=!0;return ie="",te?ie="-":N?ie="+"+ie:O&&(ie=" "+ie),re&&(ee===16?ie+="0x":ee!==8||V||se==="0"||(ie+="0")),[ie,se]},M=function(V){var ee=V[0];if(V=V[1],b){b=parseInt(b,10);var ie=V.length+ee.length;if(W)for(;ie<b;++ie)V="0"+V;else if(P){for(;ie<b;++ie)V+=" ";Sk.__future__.python3&&(V+=ee,ee="")}else for(;ie<b;++ie)ee=" "+ee}return ee+V},m.constructor===Sk.builtin.tuple)D=m.v[x];else if(m.mp$subscript!==void 0&&D!==void 0)D=D.substring(1,D.length-1),D=m.mp$subscript(new v(D));else if(m.constructor===Sk.builtin.dict||m.constructor===Sk.builtin.list)D=m;else throw new Sk.builtin.AttributeError(m.tp$name+" instance has no attribute 'mp$subscript'");if(g==="d"||g==="i"){var Q=f(D,10);if(Q[1]===void 0)throw new Sk.builtin.TypeError("%"+g+" format: a number is required, not "+Sk.abstr.typeName(D));return g=Q[1],Q[1]=g.indexOf(".")!==-1?parseInt(g,10).toString():g,M(Q)}if(g==="o")return M(f(D,8));if(g==="x")return M(f(D,16));if(g==="X")return M(f(D,16)).toUpperCase();if(g==="f"||g==="F"||g==="e"||g==="E"||g==="g"||g==="G")return Q=Sk.builtin.asnum$(D),typeof Q=="string"&&(Q=Number(Q)),Q===1/0?"inf":Q===-1/0?"-inf":isNaN(Q)?"nan":(x=["toExponential","toFixed","toPrecision"]["efg".indexOf(g.toLowerCase())],(d===void 0||d==="")&&(g==="e"||g==="E"?d=6:(g==="f"||g==="F")&&(d=Sk.__future__.python3?6:7)),x=Q[x](d),Sk.builtin.checkFloat(D)&&Q===0&&1/Q===-1/0&&(x="-"+x),Sk.__future__.python3&&(7<=x.length&&x.slice(0,6)=="0.0000"&&(h=parseFloat(x),x=h.toExponential()),x.charAt(x.length-2)=="-"&&(x=x.slice(0,x.length-1)+"0"+x.charAt(x.length-1))),"EFG".indexOf(g)!==-1&&(x=x.toUpperCase()),M(["",x]));if(g==="c"){if(typeof D=="number")return String.fromCharCode(D);if(D instanceof Sk.builtin.int_||D instanceof Sk.builtin.float_)return String.fromCharCode(D.v);if(D instanceof Sk.builtin.lng)return String.fromCharCode(D.str$(10,!1)[0]);if(D.constructor===Sk.builtin.str)return D.v.substr(0,1);throw new Sk.builtin.TypeError("an integer is required")}if(g==="r")return g=Sk.builtin.repr(D),d?g.v.substr(0,d):g.v;if(g==="s"&&v===Sk.builtin.str)return g=new Sk.builtin.str(D),g=g.$jsstr(),d?g.substr(0,d):(b&&(g=M([" ",g])),g);if(g==="b"||g==="s"){if(v===Sk.builtin.str)throw new Sk.builtin.ValueError("unsupported format character 'b'");if(!(D instanceof Sk.builtin.bytes)&&(Q=Sk.abstr.lookupSpecial(D,Sk.builtin.str.$bytes))===void 0)throw new Sk.builtin.TypeError("%b requires a bytes-like object, or an object that implements __bytes__, not '"+Sk.abstr.typeName(D)+"'");return Q!==void 0&&(D=new Sk.builtin.bytes(D)),g=D.$jsstr(),d?g.substr(0,d):(b&&(g=M([" ",g])),g)}if(g==="%")return"%"});return new v(A)}},proto:{toString(){return this.v},$subtype_new(m,h){const v=new this.constructor;return m=Sk.builtin.str.prototype.tp$new(m,h),v.$mangled=m.$mangled,v.$savedKeyHash=m.$savedKeyHash,v.v=m.v,v},$jsstr(){return this.v},$hasAstralCodePoints(){if(this.codepoints===null)return!1;if(this.codepoints!==void 0)return!0;for(var m=0;m<this.v.length;m++){let h=this.v.charCodeAt(m);if(55296<=h&&57344>h){for(this.codepoints=[],m=0;m<this.v.length;m++)this.codepoints.push(m),h=this.v.charCodeAt(m),55296<=h&&56320>h&&m++;return!0}}return this.codepoints=null,!1},sk$asarray(){const m=[];if(this.$hasAstralCodePoints()){var h=this.codepoints;for(let v=0;v<h.length;v++)m.push(new Sk.builtin.str(this.v.substring(h[v],h[v+1])))}else for(h=0;h<this.v.length;h++)m.push(new Sk.builtin.str(this.v[h]));return m},find$left:u(!1),find$right:u(!0),get$tgt(m){if(m instanceof Sk.builtin.str)return m.v;throw new Sk.builtin.TypeError("a str instance is required not '"+Sk.abstr.typeName(m)+"'")}},methods:{encode:{$meth:function(m,h){return{encoding:m,errors:h}=Sk.builtin.bytes.check$encodeArgs("encode",m,h),m=Sk.builtin.bytes.str$encode(this,m,h),Sk.__future__.python3?m:new Sk.builtin.str(m.$jsstr())},$flags:{NamedArgs:["encoding","errors"]},$textsig:"($self, /, encoding='utf-8', errors='strict')",$doc:`Encode the string using the codec registered for encoding.

  encoding
    The encoding in which to encode the string.
  errors
    The error handling scheme to use for encoding errors.
    The default is 'strict' meaning that encoding errors raise a
    UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and
    'xmlcharrefreplace' as well as any other name registered with
    codecs.register_error that can handle UnicodeEncodeErrors.`},replace:{$meth(m,h,v){if(m=this.get$tgt(m),h=this.get$tgt(h),v=v===void 0?-1:Sk.misceval.asIndexSized(v,Sk.builtin.OverflowError),m=new RegExp(e(m),"g"),0>v)return new Sk.builtin.str(this.v.replace(m,h));let k=0;return m=this.v.replace(m,A=>k++<v?h:A),new Sk.builtin.str(m)},$flags:{MinArgs:2,MaxArgs:3},$textsig:"($self, old, new, count=-1, /)",$doc:`Return a copy with all occurrences of substring old replaced by new.

  count
    Maximum number of occurrences to replace.
    -1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.`},split:{$meth:function(m,h){h=Sk.misceval.asIndexSized(h,Sk.builtin.OverflowError),m=n(this,m,h),h=[];for(let v=0;v<m.length;v++)h.push(new Sk.builtin.str(this.v.substring(m[v],m[++v])));return new Sk.builtin.list(h)},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:`Return a list of the words in the string, using sep as the delimiter string.

  sep
    The delimiter according which to split the string.
    None (the default value) means split according to any whitespace,
    and discard empty strings from the result.
  maxsplit
    Maximum number of splits to do.
    -1 (the default value) means no limit.`},rsplit:{$meth:function(m,h){h=Sk.misceval.asIndexSized(h,Sk.builtin.OverflowError),m=n(this,m,-1);var v=0>h?0:2*(m.length/2-h);for(h=[],0>=v?v=0:h.push(new Sk.builtin.str(this.v.slice(0,m[v-1])));v<m.length;v++)h.push(new Sk.builtin.str(this.v.substring(m[v],m[++v])));return new Sk.builtin.list(h)},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:`Return a list of the words in the string, using sep as the delimiter string.

  sep
    The delimiter according which to split the string.
    None (the default value) means split according to any whitespace,
    and discard empty strings from the result.
  maxsplit
    Maximum number of splits to do.
    -1 (the default value) means no limit.

Splits are done starting at the end of the string and working to the front.`},join:{$meth(m){const h=[];return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(m),v=>{if(!(v instanceof Sk.builtin.str))throw new Sk.builtin.TypeError("sequence item "+h.length+": expected str, "+Sk.abstr.typeName(v)+" found");h.push(v.v)}),()=>new Sk.builtin.str(h.join(this.v)))},$flags:{OneArg:!0},$textsig:"($self, iterable, /)",$doc:`Concatenate any number of strings.

The string whose method is called is inserted in between each given string.
The result is returned as a new string.

Example: '.'.join(['ab', 'pq', 'rs']) -> 'ab.pq.rs'`},capitalize:{$meth:function(){return new Sk.builtin.str(this.v.charAt(0).toUpperCase()+this.v.slice(1).toLowerCase())},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return a capitalized version of the string.

More specifically, make the first character have upper case and the rest lower
case.`},title:{$meth:function(){const m=this.v.replace(/[a-z][a-z]*/gi,h=>h[0].toUpperCase()+h.substr(1).toLowerCase());return new Sk.builtin.str(m)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return a version of the string where each word is titlecased.

More specifically, words start with uppercased characters and all remaining
cased characters have lower case.`},center:{$meth:l(!1,!0),$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, width, fillchar=' ', /)",$doc:`Return a centered string of length width.

Padding is done using the specified fill character (default is a space).`},count:{$meth:function(m,h,v){return m=this.get$tgt(m),{start:h,end:v}=c(this,h,v),v<h?new Sk.builtin.int_(0):(m=m.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),m=new RegExp(m,"g"),(h=this.v.slice(h,v).match(m))?new Sk.builtin.int_(h.length):new Sk.builtin.int_(0))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of substring sub in
string S[start:end].  Optional arguments start and end are
interpreted as in slice notation.`},expandtabs:{$meth:function(m){if(Sk.builtin.checkInt(m))m=Sk.builtin.asnum$(m);else throw new Sk.builtin.TypeError("an integer is required, got type"+Sk.abstr.typeName(m));const h=Array(m+1).join(" "),v=this.v.replace(/([^\r\n\t]*)\t/g,(k,A)=>A+h.slice(A.length%m));return new Sk.builtin.str(v)},$flags:{NamedArgs:["tabsize"],Defaults:[8]},$textsig:"($self, /, tabsize=8)",$doc:`Return a copy where all tab characters are expanded using spaces.

If tabsize is not given, a tab size of 8 characters is assumed.`},find:{$meth:function(m,h,v){return new Sk.builtin.int_(this.find$left(m,h,v))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.find(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found,
such that sub is contained within S[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.`},partition:{$meth:r(!1),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:`Partition the string into three parts using the given separator.

This will search for the separator in the string.  If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original string
and two empty strings.`},index:{$meth:function(m,h,v){if(m=this.find$left(m,h,v),m===-1)throw new Sk.builtin.ValueError("substring not found");return new Sk.builtin.int_(m)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.index(sub[, start[, end]]) -> int

Return the lowest index in S where substring sub is found, 
such that sub is contained within S[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.`},ljust:{$meth:l(!1,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, width, fillchar=' ', /)",$doc:`Return a left-justified string of length width.

Padding is done using the specified fill character (default is a space).`},lower:{$meth(){return new Sk.builtin.str(this.v.toLowerCase())},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a copy of the string converted to lowercase."},lstrip:{$meth:t(/^\s+/g,m=>"^["+m+"]+"),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, chars=None, /)",$doc:`Return a copy of the string with leading whitespace removed.

If chars is given and not None, remove characters in chars instead.`},rfind:{$meth(m,h,v){return new Sk.builtin.int_(this.find$right(m,h,v))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.rfind(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.`},rindex:{$meth:function(m,h,v){if(m=this.find$right(m,h,v),m===-1)throw new Sk.builtin.ValueError("substring not found");return new Sk.builtin.int_(m)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.rindex(sub[, start[, end]]) -> int

Return the highest index in S where substring sub is found,
such that sub is contained within S[start:end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the substring is not found.`},rjust:{$meth:l(!0,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, width, fillchar=' ', /)",$doc:`Return a right-justified string of length width.

Padding is done using the specified fill character (default is a space).`},rstrip:{$meth:t(/\s+$/g,m=>"["+m+"]+$"),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, chars=None, /)",$doc:`Return a copy of the string with trailing whitespace removed.

If chars is given and not None, remove characters in chars instead.`},rpartition:{$meth:r(!0),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:`Partition the string into three parts using the given separator.

This will search for the separator in the string, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.`},splitlines:{$meth:function(m){m=Sk.misceval.isTrue(m);const h=this.v,v=[],k=h.length;var A=0;for(let D=0;D<k;D++){var M=h.charAt(D);h.charAt(D+1)===`
`&&M==="\r"?(M=D+2,A=h.slice(A,M),m||(A=A.replace(/(\r|\n)/g,"")),v.push(new Sk.builtin.str(A)),A=M):(M===`
`&&h.charAt(D-1)!=="\r"||M==="\r")&&(M=D+1,A=h.slice(A,M),m||(A=A.replace(/(\r|\n)/g,"")),v.push(new Sk.builtin.str(A)),A=M)}return A<k&&(A=h.slice(A,k),m||(A=A.replace(/(\r|\n)/g,"")),v.push(new Sk.builtin.str(A))),new Sk.builtin.list(v)},$flags:{NamedArgs:["keepends"],Defaults:[!1]},$textsig:"($self, /, keepends=False)",$doc:`Return a list of the lines in the string, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.`},strip:{$meth:t(/^\s+|\s+$/g,m=>"^["+m+"]+|["+m+"]+$"),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, chars=None, /)",$doc:`Return a copy of the string with leading and trailing whitespace remove.

If chars is given and not None, remove characters in chars instead.`},swapcase:{$meth(){const m=this.v.replace(/[a-z]/gi,h=>{const v=h.toLowerCase();return v===h?h.toUpperCase():v});return new Sk.builtin.str(m)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Convert uppercase characters to lowercase and lowercase characters to uppercase."},upper:{$meth(){return new Sk.builtin.str(this.v.toUpperCase())},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a copy of the string converted to uppercase."},startswith:{$meth:i("startswith",(m,h)=>m.indexOf(h)===0),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.startswith(prefix[, start[, end]]) -> bool

Return True if S starts with the specified prefix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
prefix can also be a tuple of strings to try.`},endswith:{$meth:i("endswith",(m,h)=>m.indexOf(h,m.length-h.length)!==-1),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`S.endswith(suffix[, start[, end]]) -> bool

Return True if S ends with the specified suffix, False otherwise.
With optional start, test S beginning at that position.
With optional end, stop comparing S at that position.
suffix can also be a tuple of strings to try.`},isascii:{$meth(){return new Sk.builtin.bool(/^[\x00-\x7F]*$/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if all characters in the string are ASCII, False otherwise.

ASCII characters have code points in the range U+0000-U+007F.
Empty string is ASCII too.`},islower:{$meth:function(){return new Sk.builtin.bool(this.v.length&&/[a-z]/.test(this.v)&&!/[A-Z]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is a lowercase string, False otherwise.

A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.`},isupper:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[a-z]/.test(this.v)&&/[A-Z]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is an uppercase string, False otherwise.

A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.`},istitle:{$meth:function(){const m=this.v;let h=!1,v=!1,k;for(let A=0;A<m.length;A++)if(k=m.charAt(A),!/[a-z]/.test(k)&&/[A-Z]/.test(k)){if(v)return Sk.builtin.bool.false$;h=v=!0}else if(/[a-z]/.test(k)&&!/[A-Z]/.test(k)){if(!v)return Sk.builtin.bool.false$;h=!0}else v=!1;return new Sk.builtin.bool(h)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is a title-cased string, False otherwise.

In a title-cased string, upper- and title-case characters may only
follow uncased characters and lowercase characters only cased ones.`},isspace:{$meth:function(){return new Sk.builtin.bool(/^\s+$/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is a whitespace string, False otherwise.

A string is whitespace if all characters in the string are whitespace and there
is at least one character in the string.`},isdigit:{$meth:function(){return new Sk.builtin.bool(/^\d+$/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is a digit string, False otherwise.

A string is a digit string if all characters in the string are digits and there
is at least one character in the string.`},isnumeric:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[^0-9]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is a numeric string, False otherwise.

A string is numeric if all characters in the string are numeric and there is at
least one character in the string.`},isalpha:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[^a-zA-Z]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is an alphabetic string, False otherwise.

A string is alphabetic if all characters in the string are alphabetic and there
is at least one character in the string.`},isalnum:{$meth:function(){return new Sk.builtin.bool(this.v.length&&!/[^a-zA-Z0-9]/.test(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Return True if the string is an alpha-numeric string, False otherwise.

A string is alpha-numeric if all characters in the string are alpha-numeric and
there is at least one character in the string.`},zfill:{$meth:function(m){m=Sk.misceval.asIndexSized(m,Sk.builtin.OverflowError);let h="";m-=this.v.length;const v=this.v[0]==="+"||this.v[0]==="-"?1:0;for(let k=0;k<m;k++)h+="0";return new Sk.builtin.str(this.v.substr(0,v)+h+this.v.substr(v))},$flags:{OneArg:!0},$textsig:"($self, width, /)",$doc:`Pad a numeric string with zeros on the left, to fill a field of the given width.

The string is never truncated.`},format:{$meth:Sk.formatting.format,$flags:{FastCall:!0},$textsig:null,$doc:`S.format(*args, **kwargs) -> str

Return a formatted version of S, using substitutions from args and kwargs.
The substitutions are identified by braces ('{' and '}').`},__format__:{$meth:Sk.formatting.formatString,$flags:{OneArg:!0},$textsig:"($self, format_spec, /)",$doc:"Return a formatted version of the string as described by format_spec."},__getnewargs__:{$meth(){return new Sk.builtin.tuple(new Sk.builtin.str(this.v))},$flags:{NoArgs:!0},$textsig:null,$doc:null}}}),Sk.exportSymbol("Sk.builtin.str",Sk.builtin.str);var s=/^[A-Za-z0-9]+$/,a=/([.*+?=|\\\/()\[\]\{\}^$])/g,$=/^[\s\xa0]+/;Sk.builtin.str.$py2decode=new Sk.builtin.method_descriptor(Sk.builtin.str,{$name:"decode",$meth(m,h){const v=new Sk.builtin.bytes(this.v);return Sk.builtin.bytes.$decode.call(v,m,h)},$flags:{NamedArgs:["encoding","errors"]}});var y=Sk.abstr.buildIteratorClass("str_iterator",{constructor:function(m){this.$index=0,m.$hasAstralCodePoints()?(this.$seq=m.codepoints,this.tp$iternext=()=>{const h=this.$seq[this.$index];if(h!==void 0)return new Sk.builtin.str(m.v.substring(h,this.$seq[++this.$index]))}):(this.$seq=m.v,this.tp$iternext=()=>{const h=this.$seq[this.$index++];if(h!==void 0)return new Sk.builtin.str(h)})},iternext(){return this.tp$iternext()},methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}}),w={abstract:!0,as:!0,boolean:!0,break:!0,byte:!0,case:!0,catch:!0,char:!0,class:!0,continue:!0,const:!0,debugger:!0,default:!0,delete:!0,do:!0,double:!0,else:!0,enum:!0,export:!0,extends:!0,false:!0,final:!0,finally:!0,float:!0,for:!0,function:!0,goto:!0,if:!0,implements:!0,import:!0,in:!0,instanceof:!0,int:!0,interface:!0,is:!0,long:!0,namespace:!0,native:!0,new:!0,null:!0,package:!0,private:!0,protected:!0,public:!0,return:!0,short:!0,static:!0,super:!0,switch:!0,synchronized:!0,this:!0,throw:!0,throws:!0,transient:!0,true:!0,try:!0,typeof:!0,use:!0,var:!0,void:!0,volatile:!0,while:!0,with:!0,constructor:!0,__defineGetter__:!0,__defineSetter__:!0,apply:!0,arguments:!0,call:!0,caller:!0,eval:!0,hasOwnProperty:!0,isPrototypeOf:!0,__lookupGetter__:!0,__lookupSetter__:!0,__noSuchMethod__:!0,propertyIsEnumerable:!0,prototype:!0,toSource:!0,toLocaleString:!0,toString:!0,unwatch:!0,valueOf:!0,watch:!0,length:!0,name:!0};Sk.builtin.str.reservedWords_=w},function(j,F){Sk.builtin.func=Sk.abstr.buildNativeClass("function",{constructor:function(e,n,t,r){if(Sk.asserts.assert(this instanceof Sk.builtin.func,"builtin func should be called as a class with `new`"),this.func_code=e,this.func_globals=n||null,this.$name=e.co_name&&e.co_name.v||e.name||"<native JS>",this.$d=Sk.builtin.dict?new Sk.builtin.dict:void 0,this.$doc=e.co_docstring||Sk.builtin.none.none$,this.$module=Sk.globals&&Sk.globals.__name__||Sk.builtin.none.none$,this.$qualname=e.co_qualname&&e.co_qualname.v||this.$name,r!==void 0)for(let l in r)t[l]=r[l];this.func_closure=t,this.$memoiseFlags(),this.memoised=e.co_fastcall||null,this.tp$call=e.co_fastcall?e.bind(this):Sk.builtin.func.prototype.tp$call.bind(this)},slots:{tp$getattr:Sk.generic.getAttr,tp$descr_get(e,n){return e===null?this:new Sk.builtin.method(this,e)},$r(){return new Sk.builtin.str("<function "+this.$qualname+">")},tp$call(e,n){if(this.memoised||(this.$memoiseFlags(),this.memoised=!0),this.co_argcount===void 0&&this.co_varnames===void 0&&!this.co_kwargs&&!this.func_closure){if(n&&n.length!==0)throw new Sk.builtin.TypeError(this.$name+"() takes no keyword arguments");return this.func_code.apply(this.func_globals,e)}return e=this.$resolveArgs(e,n),this.func_closure&&e.push(this.func_closure),this.func_code.apply(this.func_globals,e)}},getsets:{__name__:{$get(){return new Sk.builtin.str(this.$name)},$set(e){if(!Sk.builtin.checkString(e))throw new Sk.builtin.TypeError("__name__ must be set to a string object");this.$name=e.$jsstr()}},__qualname__:{$get(){return new Sk.builtin.str(this.$qualname)},$set(e){if(!Sk.builtin.checkString(e))throw new Sk.builtin.TypeError("__qualname__ must be set to a string object");this.$qualname=e.$jsstr()}},__dict__:Sk.generic.getSetDict,__defaults__:{$get(){return new Sk.builtin.tuple(this.$defaults)}},__doc__:{$get(){return this.$doc},$set(e){this.$doc=e||Sk.builtin.none.none$}}},proto:{$memoiseFlags(){this.co_varnames=this.func_code.co_varnames,this.co_argcount=this.func_code.co_argcount,this.co_argcount===void 0&&this.co_varnames&&(this.co_argcount=this.co_argcount=this.co_varnames.length),this.co_kwonlyargcount=this.func_code.co_kwonlyargcount||0,this.co_varargs=this.func_code.co_varargs,this.co_kwargs=this.func_code.co_kwargs,this.$defaults=this.func_code.$defaults||[],this.$kwdefs=this.func_code.$kwdefs||[]},$resolveArgs:function(e,n){var t=this.co_argcount;t===void 0&&(t=this.co_varnames?this.co_varnames.length:e.length);var r=this.co_varnames||[],l=this.co_kwonlyargcount||0;let c=t+l;if(!(l!==0||this.co_kwargs||n&&n.length!==0||this.co_varargs)){if(e.length==t)return e;if(e.length===0&&this.$defaults&&this.$defaults.length===t){for(r=0;r!=this.$defaults.length;r++)e[r]=this.$defaults[r];return e}}let u;this.co_kwargs&&(u=[]);var i=e.length;let o=e.length<=t?e:e.slice(0,t);if(this.co_varargs)e=e.length>o.length?e.slice(o.length):[],o[c]=new Sk.builtin.tuple(e);else if(i>t)throw new Sk.builtin.TypeError(this.$name+"() takes "+t+" positional argument"+(t==1?"":"s")+" but "+i+(i==1?" was ":" were ")+" given");if(n){if(this.func_code.no_kw)throw new Sk.builtin.TypeError(this.$name+"() takes no keyword arguments");for(e=0;e<n.length;e+=2){i=n[e];var p=n[e+1],s=r.indexOf(i);if(0<=s){if(o[s]!==void 0)throw new Sk.builtin.TypeError(this.$name+"() got multiple values for argument '"+i+"'");o[s]=p}else if(u)u.push(new Sk.builtin.str(i),p);else throw new Sk.builtin.TypeError(this.$name+"() got an unexpected keyword argument '"+i+"'")}}for(n=this.$defaults||[],e=0,i=[],p=!1,s=t-n.length;e<s;e++)o[e]===void 0&&(i.push(r[e]),r[e]===void 0&&(p=!0));if(i.length!=0&&(this.co_argcount||this.co_varnames))throw new Sk.builtin.TypeError(this.$name+"() missing "+i.length+" required argument"+(i.length==1?"":"s")+(p?"":": "+i.join(", ")));for(;e<t;e++)o[e]===void 0&&(o[e]=n[e-s]);if(0<l){for(l=[],n=this.$kwdefs,e=t;e<c;e++)o[e]===void 0&&(n[e-t]!==void 0?o[e]=n[e-t]:l.push(r[e]));if(l.length!==0)throw new Sk.builtin.TypeError(this.$name+"() missing "+l.length+" required keyword argument"+(l.length==1?"":"s")+": "+l.join(", "))}if(this.func_closure&&r)for(t=o.length;t<r.length;t++)o.push(void 0);return u&&o.unshift(u),o}}})},function(j,F){Sk.builtin.asnum$=function(t){return t==null||typeof t=="number"?t:t instanceof Sk.builtin.int_?typeof t.v=="number"?t.v:t.v.toString():t instanceof Sk.builtin.float_?t.v:t===Sk.builtin.none.none$?null:t},Sk.exportSymbol("Sk.builtin.asnum$",Sk.builtin.asnum$),Sk.builtin.assk$=function(t){return t%1===0?new Sk.builtin.int_(t):new Sk.builtin.float_(t)},Sk.exportSymbol("Sk.builtin.assk$",Sk.builtin.assk$),Sk.builtin.asnum$nofloat=function(t){if(t==null)return t;if(typeof t=="number")t=t.toString();else if(t instanceof Sk.builtin.int_)t=t.v.toString();else if(t instanceof Sk.builtin.float_)t=t.v.toString();else return t===Sk.builtin.none.none$?null:void 0;if(0>t.indexOf(".")&&0>t.indexOf("e")&&0>t.indexOf("E"))return t;var r=0;if(0<=t.indexOf("e")){var l=t.substr(0,t.indexOf("e"));r=t.substr(t.indexOf("e")+1)}else 0<=t.indexOf("E")?(l=t.substr(0,t.indexOf("e")),r=t.substr(t.indexOf("E")+1)):l=t;if(r=parseInt(r,10),t=l.indexOf("."),0>t){if(0<=r){for(;0<r--;)l+="0";return l}return l.length>-r?l.substr(0,l.length+r):0}for(l=t===0?l.substr(1):t<l.length?l.substr(0,t)+l.substr(t+1):l.substr(0,t),t+=r;t>l.length;)l+="0";return l=0>=t?0:l.substr(0,t)},Sk.exportSymbol("Sk.builtin.asnum$nofloat",Sk.builtin.asnum$nofloat),Sk.builtin.round=function(t,r){if(t===void 0)throw new Sk.builtin.TypeError("a float is required");if(!Sk.__future__.dunder_round){if(!Sk.builtin.checkNumber(t))throw new Sk.builtin.TypeError("a float is required");if(t.round$)return t.round$(r);throw new Sk.builtin.AttributeError(Sk.abstr.typeName(t)+" instance has no attribute '__float__'")}if(r!==void 0&&!Sk.builtin.checkNone(r)&&!Sk.misceval.isIndex(r))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(r)+"' object cannot be interpreted as an index");if(t=Sk.abstr.lookupSpecial(t,Sk.builtin.str.$round),t!==void 0)return r!==void 0?Sk.misceval.callsimArray(t,[r]):Sk.misceval.callsimArray(t,[]);throw new Sk.builtin.TypeError("a float is required")},Sk.builtin.len=function(t){if(t.sq$length)t=t.sq$length(!0);else throw new Sk.builtin.TypeError("object of type '"+Sk.abstr.typeName(t)+"' has no len()");return Sk.misceval.chain(t,r=>new Sk.builtin.int_(r))},Sk.builtin.min=function(t,r){let l;const c=t.length;if(!c)throw new Sk.builtin.TypeError("min expected 1 argument, got 0");const[u,i]=Sk.abstr.copyKeywordsToNamedArgs("min",["default","key"],[],r,[null,Sk.builtin.none.none$]);if(1<c&&u!==null)throw new Sk.builtin.TypeError("Cannot specify a default for min() with multiple positional arguments");if(l=c==1?Sk.abstr.iter(t[0]):Sk.abstr.iter(new Sk.builtin.tuple(t)),!Sk.builtin.checkNone(i)&&!Sk.builtin.checkCallable(i))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(i)+"' object is not callable");let o;return Sk.misceval.chain(l.tp$iternext(!0),p=>{if(o=p,o!==void 0)return Sk.builtin.checkNone(i)?Sk.misceval.iterFor(l,s=>{Sk.misceval.richCompareBool(s,o,"Lt")&&(o=s)}):Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(i,[o]),s=>Sk.misceval.iterFor(l,a=>Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(i,[a]),$=>{Sk.misceval.richCompareBool($,s,"Lt")&&(o=a,s=$)})))},()=>{if(o===void 0){if(u===null)throw new Sk.builtin.ValueError("min() arg is an empty sequence");o=u}return o})},Sk.builtin.max=function(t,r){let l;const c=t.length;if(!c)throw new Sk.builtin.TypeError("max expected 1 argument, got 0");const[u,i]=Sk.abstr.copyKeywordsToNamedArgs("min",["default","key"],[],r,[null,Sk.builtin.none.none$]);if(1<c&&u!==null)throw new Sk.builtin.TypeError("Cannot specify a default for max() with multiple positional arguments");if(l=c===1?Sk.abstr.iter(t[0]):Sk.abstr.iter(new Sk.builtin.tuple(t)),!Sk.builtin.checkNone(i)&&!Sk.builtin.checkCallable(i))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(i)+"' object is not callable");let o;return Sk.misceval.chain(l.tp$iternext(!0),p=>{if(o=p,o!==void 0)return Sk.builtin.checkNone(i)?Sk.misceval.iterFor(l,s=>{Sk.misceval.richCompareBool(s,o,"Gt")&&(o=s)}):Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(i,[o]),s=>Sk.misceval.iterFor(l,a=>Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(i,[a]),$=>{Sk.misceval.richCompareBool($,s,"Gt")&&(o=a,s=$)})))},()=>{if(o===void 0){if(u===null)throw new Sk.builtin.ValueError("min() arg is an empty sequence");o=u}return o})},Sk.builtin.min.co_fastcall=Sk.builtin.max.co_fastcall=1,Sk.builtin.any=function(t){return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(t),function(r){if(Sk.misceval.isTrue(r))return new Sk.misceval.Break(Sk.builtin.bool.true$)}),r=>r||Sk.builtin.bool.false$)},Sk.builtin.all=function(t){return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(t),function(r){if(!Sk.misceval.isTrue(r))return new Sk.misceval.Break(Sk.builtin.bool.false$)}),r=>r||Sk.builtin.bool.true$)},Sk.builtin.sum=function(t,r){function l(){return Sk.misceval.iterFor(i,p=>{if(p.constructor===Sk.builtin.int_)o=o.nb$add(p);else return p.constructor===Sk.builtin.float_?(o=o.nb$float().nb$add(p),new Sk.misceval.Break("float")):(o=Sk.abstr.numberBinOp(o,p,"Add"),new Sk.misceval.Break("slow"))})}function c(){return Sk.misceval.iterFor(i,p=>{if(p.constructor===Sk.builtin.float_||p.constructor===Sk.builtin.int_)o=o.nb$add(p);else return o=Sk.abstr.numberBinOp(o,p,"Add"),new Sk.misceval.Break("slow")})}function u(){return Sk.misceval.iterFor(i,p=>{o=Sk.abstr.numberBinOp(o,p,"Add")})}const i=Sk.abstr.iter(t);if(r===void 0)var o=new Sk.builtin.int_(0);else{if(Sk.builtin.checkString(r))throw new Sk.builtin.TypeError("sum() can't sum strings [use ''.join(seq) instead]");o=r}return t=r===void 0||r.constructor===Sk.builtin.int_?l():r.constructor===Sk.builtin.float_?"float":"slow",Sk.misceval.chain(t,p=>p==="float"?c():p,p=>{if(p==="slow")return u()},()=>o)},Sk.builtin.zip=function(){var t,r;if(arguments.length===0)return new Sk.builtin.list([]);var l=[];for(r=0;r<arguments.length;r++)if(Sk.builtin.checkIterable(arguments[r]))l.push(Sk.abstr.iter(arguments[r]));else throw new Sk.builtin.TypeError("argument "+r+" must support iteration");var c=[];for(t=!1;!t;){var u=[];for(r=0;r<arguments.length;r++){var i=l[r].tp$iternext();if(i===void 0){t=!0;break}u.push(i)}t||c.push(new Sk.builtin.tuple(u))}return new Sk.builtin.list(c)},Sk.builtin.abs=function(t){if(t.nb$abs)return t.nb$abs();throw new TypeError("bad operand type for abs(): '"+Sk.abstr.typeName(t)+"'")},Sk.builtin.fabs=function(t){return Sk.builtin.abs(t)},Sk.builtin.ord=function(t){if(Sk.builtin.checkString(t)){if(t.v.length!==1&&t.sq$length()!==1)throw new Sk.builtin.TypeError("ord() expected a character, but string of length "+t.v.length+" found");return new Sk.builtin.int_(t.v.codePointAt(0))}if(Sk.builtin.checkBytes(t)){if(t.sq$length()!==1)throw new Sk.builtin.TypeError("ord() expected a character, but string of length "+t.v.length+" found");return new Sk.builtin.int_(t.v[0])}throw new Sk.builtin.TypeError("ord() expected a string of length 1, but "+Sk.abstr.typeName(t)+" found")},Sk.builtin.chr=function(t){if(!Sk.builtin.checkInt(t))throw new Sk.builtin.TypeError("an integer is required");if(t=Sk.builtin.asnum$(t),Sk.__future__.python3){if(0>t||1114112<=t)throw new Sk.builtin.ValueError("chr() arg not in range(0x110000)")}else if(0>t||256<=t)throw new Sk.builtin.ValueError("chr() arg not in range(256)");return new Sk.builtin.str(String.fromCodePoint(t))},Sk.builtin.unichr=function(t){if(!Sk.builtin.checkInt(t))throw new Sk.builtin.TypeError("an integer is required");t=Sk.builtin.asnum$(t);try{return new Sk.builtin.str(String.fromCodePoint(t))}catch(r){throw r instanceof RangeError?new Sk.builtin.ValueError(r.message):r}},Sk.builtin.int2str_=function(t,r,l){let c;t.constructor===Sk.builtin.int_||t instanceof Sk.builtin.int_||(t=t.nb$index()),c=t.v;let u=c.toString(r);return u=t.nb$isnegative()?"-"+l+u.slice(1):l+u,r!==2&&!Sk.__future__.python3&&(t instanceof Sk.builtin.lng||JSBI.__isBigInt(c))&&(u+="L"),new Sk.builtin.str(u)},Sk.builtin.hex=function(t){if(!Sk.misceval.isIndex(t))throw new Sk.builtin.TypeError("hex() argument can't be converted to hex");return Sk.builtin.int2str_(t,16,"0x")},Sk.builtin.oct=function(t){if(!Sk.misceval.isIndex(t))throw new Sk.builtin.TypeError("oct() argument can't be converted to hex");return Sk.__future__.octal_number_literal?Sk.builtin.int2str_(t,8,"0o"):Sk.builtin.int2str_(t,8,"0")},Sk.builtin.bin=function(t){if(!Sk.misceval.isIndex(t))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(t)+"' object can't be interpreted as an index");return Sk.builtin.int2str_(t,2,"0b")},Sk.builtin.dir=function(t){if(t!==void 0)return t=Sk.abstr.lookupSpecial(t,Sk.builtin.str.$dir),Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(t,[]),r=>Sk.builtin.sorted(r));throw new Sk.builtin.NotImplementedError("skulpt does not yet support dir with no args")},Sk.builtin.repr=function(t){return t.$r()},Sk.builtin.ascii=function(t){return Sk.misceval.chain(t.$r(),r=>{let l,c;for(c=0;c<r.v.length;c++)if(127<=r.v.charCodeAt(c)){l=r.v.substr(0,c);break}if(!l)return r;for(;c<r.v.length;c++){var u=r.v.charAt(c),i=r.v.charCodeAt(c);127<i&&255>=i?(u=i.toString(16),2>u.length&&(u="0"+u),l+="\\x"+u):127<i&&55296>i||57344<=i?l+="\\u"+("000"+i.toString(16)).slice(-4):55296<=i?(u=r.v.codePointAt(c),c++,u=u.toString(16),i="0000000"+u.toString(16),l=4<u.length?l+("\\U"+i.slice(-8)):l+("\\u"+i.slice(-4))):l+=u}return new Sk.builtin.str(l)})},Sk.builtin.open=function(t,r,l){if(r===void 0&&(r=new Sk.builtin.str("r")),/\+/.test(r.v))throw"todo; haven't implemented read/write mode";if((r.v==="w"||r.v==="wb"||r.v==="a"||r.v==="ab")&&!Sk.nonreadopen)throw"todo; haven't implemented non-read opens";return new Sk.builtin.file(t,r,l)},Sk.builtin.isinstance=function(t,r){if(!(Sk.builtin.checkClass(r)||r instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError("isinstance() arg 2 must be a class, type, or tuple of classes and types");var l=t.ob$type;if(l===r)return Sk.builtin.bool.true$;if(!(r instanceof Sk.builtin.tuple))return l.$isSubType(r)?Sk.builtin.bool.true$:(t=t.tp$getattr(Sk.builtin.str.$class),t!=l&&Sk.builtin.checkClass(t)&&t.$isSubType(r)?Sk.builtin.bool.true$:Sk.builtin.bool.false$);for(l=0;l<r.v.length;++l)if(Sk.misceval.isTrue(Sk.builtin.isinstance(t,r.v[l])))return Sk.builtin.bool.true$;return Sk.builtin.bool.false$},Sk.builtin.hash=function(t){return new Sk.builtin.int_(Sk.abstr.objectHash(t))},Sk.builtin.getattr=function(t,r,l){if(!Sk.builtin.checkString(r))throw new Sk.builtin.TypeError("attribute name must be string");const c=Sk.misceval.tryCatch(()=>t.tp$getattr(r,!0),u=>{if(!(u instanceof Sk.builtin.AttributeError))throw u});return Sk.misceval.chain(c,u=>{if(u===void 0){if(l!==void 0)return l;throw new Sk.builtin.AttributeError(t.sk$attrError()+" has no attribute "+Sk.misceval.objectRepr(r))}return u})},Sk.builtin.setattr=function(t,r,l){if(!Sk.builtin.checkString(r))throw new Sk.builtin.TypeError("attribute name must be string");return Sk.misceval.chain(t.tp$setattr(r,l,!0),()=>Sk.builtin.none.none$)},Sk.builtin.raw_input=function(t){var r=t||"";return Sk.misceval.chain(Sk.importModule("sys",!1,!0),function(l){return Sk.inputfunTakesPrompt?Sk.builtin.file.$readline(l.$d.stdin,null,r):Sk.misceval.chain(void 0,function(){return Sk.misceval.callsimOrSuspendArray(l.$d.stdout.write,[l.$d.stdout,new Sk.builtin.str(r)])},function(){return Sk.misceval.callsimOrSuspendArray(l.$d.stdin.readline,[l.$d.stdin])})})},Sk.builtin.input=Sk.builtin.raw_input,Sk.builtin.jseval=function(t){return t=Sk.global.eval(Sk.ffi.remapToJs(t)),Sk.ffi.remapToPy(t)},Sk.builtin.jsmillis=function(){return console.warn("jsmillis is deprecated"),new Date().valueOf()},Sk.builtin.eval_=function(){throw new Sk.builtin.NotImplementedError("eval is not yet implemented")},Sk.builtin.map=function(t,r){var l=[],c,u;if(Sk.builtin.pyCheckArgsLen("map",arguments.length,2),2<arguments.length){var i=[],o=Array.prototype.slice.apply(arguments).slice(1);for(u=0;u<o.length;u++){if(!Sk.builtin.checkIterable(o[u])){var p=parseInt(u,10)+2;throw new Sk.builtin.TypeError("argument "+p+" to map() must support iteration")}o[u]=Sk.abstr.iter(o[u])}for(;;){var s=[];for(u=c=0;u<o.length;u++)p=o[u].tp$iternext(),p===void 0?(s.push(Sk.builtin.none.none$),c++):s.push(p);if(c!==o.length)i.push(s);else break}r=new Sk.builtin.list(i)}if(!Sk.builtin.checkIterable(r))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(r)+"' object is not iterable");return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(r),function(a){if(t===Sk.builtin.none.none$)a instanceof Array&&(a=new Sk.builtin.tuple(a)),l.push(a);else return a instanceof Array||(a=[a]),Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(t,a),function($){l.push($)})}),function(){return new Sk.builtin.list(l)})},Sk.builtin.reduce=function(t,r,l){if(!Sk.builtin.checkIterable(r))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(r)+"' object is not iterable");if(r=Sk.abstr.iter(r),l===void 0&&(l=r.tp$iternext(),l===void 0))throw new Sk.builtin.TypeError("reduce() of empty sequence with no initial value");var c=l;for(l=r.tp$iternext();l!==void 0;l=r.tp$iternext())c=Sk.misceval.callsimArray(t,[c,l]);return c},Sk.builtin.sorted=function(t,r,l,c){return t=Sk.misceval.arrayFromIterable(t,!0),Sk.misceval.chain(t,u=>(u=new Sk.builtin.list(u),u.list$sort(r,l,c),u))},Sk.builtin.filter=function(t,r){var l;if(Sk.builtin.pyCheckArgsLen("filter",arguments.length,2,2),!Sk.builtin.checkIterable(r))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(r)+"' object is not iterable");var c=function(){return[]},u=function(s,a){return s.push(a),s},i=function(s){return new Sk.builtin.list(s)};r.ob$type===Sk.builtin.str?(c=function(){return new Sk.builtin.str("")},u=function(s,a){return s.sq$concat(a)},i=function(s){return s}):r.ob$type===Sk.builtin.tuple&&(i=function(s){return new Sk.builtin.tuple(s)});var o=c(),p=Sk.abstr.iter(r);for(l=p.tp$iternext();l!==void 0;l=p.tp$iternext())c=t===Sk.builtin.none.none$?new Sk.builtin.bool(l):Sk.misceval.callsimArray(t,[l]),Sk.misceval.isTrue(c)&&(o=u(o,l));return i(o)},Sk.builtin.hasattr=function(t,r){if(!Sk.builtin.checkString(r))throw new Sk.builtin.TypeError("hasattr(): attribute name must be string");const l=Sk.misceval.tryCatch(()=>t.tp$getattr(r,!0),c=>{if(!(c instanceof Sk.builtin.AttributeError))throw c});return Sk.misceval.chain(l,c=>c===void 0?Sk.builtin.bool.false$:Sk.builtin.bool.true$)},Sk.builtin.pow=function(t,r,l){if(l===void 0||Sk.builtin.checkNone(l))return Sk.abstr.numberBinOp(t,r,"Pow");if(!(Sk.builtin.checkInt(t)&&Sk.builtin.checkInt(r)&&Sk.builtin.checkInt(l))){if(Sk.builtin.checkFloat(t)||Sk.builtin.checkComplex(t))return t.nb$power(r,l);throw new Sk.builtin.TypeError("unsupported operand type(s) for ** or pow(): '"+Sk.abstr.typeName(t)+"', '"+Sk.abstr.typeName(r)+"', '"+Sk.abstr.typeName(l)+"'")}return t.nb$power(r,l)},Sk.builtin.quit=function(t){throw t=new Sk.builtin.str(t).v,new Sk.builtin.SystemExit(t)},Sk.builtin.issubclass=function(t,r){if(!Sk.builtin.checkClass(t))throw new Sk.builtin.TypeError("issubclass() arg 1 must be a class");var l=Sk.builtin.checkClass(r);if(!(l||r instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError("issubclass() arg 2 must be a class or tuple of classes");if(l)return t.$isSubType(r)?Sk.builtin.bool.true$:Sk.builtin.bool.false$;for(l=0;l<r.v.length;++l)if(Sk.misceval.isTrue(Sk.builtin.issubclass(t,r.v[l])))return Sk.builtin.bool.true$;return Sk.builtin.bool.false$},Sk.builtin.globals=function(){var t,r=new Sk.builtin.dict([]);for(t in Sk.globals){var l=Sk.unfixReserved(t);r.mp$ass_subscript(new Sk.builtin.str(l),Sk.globals[t])}return r},Sk.builtin.divmod=function(t,r){return Sk.abstr.numberBinOp(t,r,"DivMod")},Sk.builtin.format=function(t,r){return r===void 0&&(r=Sk.builtin.str.$emptystr),Sk.abstr.objectFormat(t,r)};const e=new Map;let n=0;Sk.builtin.id=function(t){const r=e.get(t);return r!==void 0?new Sk.builtin.int_(r):(e.set(t,n),new Sk.builtin.int_(n++))},Sk.builtin.bytearray=function(){throw new Sk.builtin.NotImplementedError("bytearray is not yet implemented")},Sk.builtin.callable=function(t){return Sk.builtin.checkCallable(t)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},Sk.builtin.delattr=function(t,r){return Sk.builtin.setattr(t,r,void 0)},Sk.builtin.execfile=function(){throw new Sk.builtin.NotImplementedError("execfile is not yet implemented")},Sk.builtin.help=function(){throw new Sk.builtin.NotImplementedError("help is not yet implemented")},Sk.builtin.iter=function(t,r){return arguments.length===1?Sk.abstr.iter(t):Sk.abstr.iter(new Sk.builtin.callable_iter_(t,r))},Sk.builtin.locals=function(){throw new Sk.builtin.NotImplementedError("locals is not yet implemented")},Sk.builtin.memoryview=function(){throw new Sk.builtin.NotImplementedError("memoryview is not yet implemented")},Sk.builtin.next_=function(t,r){if(!t.tp$iternext)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(t)+"' object is not an iterator");if(t=t.tp$iternext(),t===void 0){if(r)return r;throw new Sk.builtin.StopIteration}return t},Sk.builtin.reload=function(){throw new Sk.builtin.NotImplementedError("reload is not yet implemented")},Sk.builtin.vars=function(){throw new Sk.builtin.NotImplementedError("vars is not yet implemented")},Sk.builtin.apply_=function(){throw new Sk.builtin.NotImplementedError("apply is not yet implemented")},Sk.builtin.buffer=function(){throw new Sk.builtin.NotImplementedError("buffer is not yet implemented")},Sk.builtin.coerce=function(){throw new Sk.builtin.NotImplementedError("coerce is not yet implemented")},Sk.builtin.intern=function(){throw new Sk.builtin.NotImplementedError("intern is not yet implemented")}},function(j,F){Sk.builtin.BaseException=Sk.abstr.buildNativeClass("BaseException",{constructor:function(...e){Sk.asserts.assert(this instanceof Sk.builtin.BaseException,"bad call to exception constructor, use 'new'");let n=e[0];typeof n=="string"&&(n=new Sk.builtin.str(n)),this.args=new Sk.builtin.tuple(n?[n]:[]),this.traceback=[],this.$d=new Sk.builtin.dict,3<=e.length&&this.traceback.push({lineno:e[2],filename:e[1]||"<unknown>"})},slots:{tp$getattr:Sk.generic.getAttr,tp$doc:"Common base class for all exceptions",tp$new(e,n){return this.hp$type?(n=new this.constructor,Sk.builtin.BaseException.call(n)):n=new this.constructor,n.args=new Sk.builtin.tuple(e.slice()),n},tp$init(e,n){Sk.abstr.checkNoKwargs(Sk.abstr.typeName(this),n)},$r(){let e=this.tp$name;return e+="("+this.args.v.map(n=>Sk.misceval.objectRepr(n)).join(", ")+")",new Sk.builtin.str(e)},tp$str(){return 1>=this.args.v.length?new Sk.builtin.str(this.args.v[0]):this.args.$r()}},getsets:{args:{$get(){return this.args}},__dict__:Sk.generic.getSetDict},proto:{toString(){let e=this.tp$name;return e+=": "+this.tp$str().v,e=this.traceback.length!==0?e+(" on line "+this.traceback[0].lineno):e+" at <unknown>"}}}),Sk.exportSymbol("Sk.builtin.BaseException",Sk.builtin.BaseException),Sk.builtin.Exception=Sk.abstr.buildNativeClass("Exception",{constructor:function(...e){Sk.builtin.BaseException.apply(this,e)},base:Sk.builtin.BaseException}),Sk.exportSymbol("Sk.builtin.Exception",Sk.builtin.Exception),Sk.builtin.AssertionError=Sk.abstr.buildNativeClass("AssertionError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.AssertionError",Sk.builtin.AssertionError),Sk.builtin.AttributeError=Sk.abstr.buildNativeClass("AttributeError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.ImportError=Sk.abstr.buildNativeClass("ImportError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.IndentationError=Sk.abstr.buildNativeClass("IndentationError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.IndexError=Sk.abstr.buildNativeClass("IndexError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.LookupError=Sk.abstr.buildNativeClass("LookupError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.KeyError=Sk.abstr.buildNativeClass("KeyError",{constructor:function(...e){Sk.builtin.LookupError.apply(this,e)},base:Sk.builtin.LookupError}),Sk.builtin.NameError=Sk.abstr.buildNativeClass("NameError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.UnboundLocalError=Sk.abstr.buildNativeClass("UnboundLocalError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.OverflowError=Sk.abstr.buildNativeClass("OverflowError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.SyntaxError=Sk.abstr.buildNativeClass("SyntaxError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.RuntimeError=Sk.abstr.buildNativeClass("RuntimeError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.RuntimeError",Sk.builtin.RuntimeError),Sk.builtin.SuspensionError=Sk.abstr.buildNativeClass("SuspensionError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.SuspensionError",Sk.builtin.SuspensionError),Sk.builtin.SystemExit=Sk.abstr.buildNativeClass("SystemExit",{constructor:function(...e){Sk.builtin.BaseException.apply(this,e)},base:Sk.builtin.BaseException}),Sk.exportSymbol("Sk.builtin.SystemExit",Sk.builtin.SystemExit),Sk.builtin.TypeError=Sk.abstr.buildNativeClass("TypeError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.TypeError",Sk.builtin.TypeError),Sk.builtin.ValueError=Sk.abstr.buildNativeClass("ValueError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.ValueError",Sk.builtin.ValueError),Sk.builtin.ZeroDivisionError=Sk.abstr.buildNativeClass("ZeroDivisionError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.builtin.TimeLimitError=Sk.abstr.buildNativeClass("TimeLimitError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.TimeLimitError",Sk.builtin.TimeLimitError),Sk.builtin.IOError=Sk.abstr.buildNativeClass("IOError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.IOError",Sk.builtin.IOError),Sk.builtin.NotImplementedError=Sk.abstr.buildNativeClass("NotImplementedError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.NotImplementedError",Sk.builtin.NotImplementedError),Sk.builtin.NegativePowerError=Sk.abstr.buildNativeClass("NegativePowerError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.NegativePowerError",Sk.builtin.NegativePowerError),Sk.builtin.ExternalError=Sk.abstr.buildNativeClass("ExternalError",{constructor:function(...e){if(this.nativeError=e[0],!Sk.builtin.checkString(this.nativeError)&&(e[0]=this.nativeError.toString(),e[0].startsWith("RangeError: Maximum call")))return e[0]="Maximum call stack size exceeded",new Sk.builtin.RecursionError(...e);Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.ExternalError",Sk.builtin.ExternalError),Sk.builtin.RecursionError=Sk.abstr.buildNativeClass("RecursionError",{constructor:function(...e){Sk.builtin.RuntimeError.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.RecursionError",Sk.builtin.RecursionError),Sk.builtin.OperationError=Sk.abstr.buildNativeClass("OperationError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.OperationError",Sk.builtin.OperationError),Sk.builtin.SystemError=Sk.abstr.buildNativeClass("SystemError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.SystemError",Sk.builtin.SystemError),Sk.builtin.UnicodeDecodeError=Sk.abstr.buildNativeClass("UnicodeDecodeError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.UnicodeDecodeError",Sk.builtin.UnicodeDecodeError),Sk.builtin.UnicodeEncodeError=Sk.abstr.buildNativeClass("UnicodeEncodeError",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.UnicodeEncodeError",Sk.builtin.UnicodeEncodeError),Sk.builtin.StopIteration=Sk.abstr.buildNativeClass("StopIteration",{constructor:function(...e){Sk.builtin.Exception.apply(this,e)},base:Sk.builtin.Exception}),Sk.exportSymbol("Sk.builtin.StopIteration",Sk.builtin.StopIteration),Sk.builtin.getExcInfo=function(e){return new Sk.builtin.tuple([e.ob$type||Sk.builtin.none.none$,e,Sk.builtin.none.none$])}},function(j,F){Sk.builtin.method=Sk.abstr.buildNativeClass("method",{constructor:function(e,n){Sk.asserts.assert(this instanceof Sk.builtin.method,"bad call to method constructor, use 'new'"),this.im_func=e,this.im_self=n,this.im_call=e.tp$call},slots:{$r(){let e=this.im_func.tp$getattr(Sk.builtin.str.$qualname)||this.im_func.tp$getattr(Sk.builtin.str.$name);return e=e&&e.v||"?",new Sk.builtin.str("<bound method "+e+" of "+Sk.misceval.objectRepr(this.im_self)+">")},tp$hash(){const e=Sk.abstr.objectHash(this.im_self),n=Sk.abstr.objectHash(this.im_func);return e+n},tp$call(e,n){var t=this.im_call;if(t===void 0)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(this.im_func)+"' object is not callable");return e=[this.im_self,...e],t.call(this.im_func,e,n)},tp$new(e,n){if(Sk.abstr.checkNoKwargs("method",n),Sk.abstr.checkArgsLen("method",e,2,2),n=e[0],e=e[1],!Sk.builtin.checkCallable(n))throw new Sk.builtin.TypeError("first argument must be callable");if(Sk.builtin.checkNone(e))throw new Sk.builtin.TypeError("self must not be None");return new Sk.builtin.method(n,e)},tp$richcompare(e,n){if(n!="Eq"&&n!="NotEq"||!(e instanceof Sk.builtin.method))return Sk.builtin.NotImplemented.NotImplemented$;let t;try{t=Sk.misceval.richCompareBool(this.im_self,e.im_self,"Eq",!1)&&this.im_func==e.im_func}catch(r){t=!1}return n=="Eq"?t:!t},tp$descr_get(e,n){return this},tp$getattr(e,n){const t=Sk.abstr.lookupSpecial(this,e);return t!==void 0?t:this.im_func.tp$getattr(e,n)}},getsets:{__func__:{$get(){return this.im_func}},__self__:{$get(){return this.im_self}},__doc__:{$get(){return this.im_func.tp$getattr(Sk.builtin.str.$doc)}}},flags:{sk$suitable_as_base_class:!1}})},function(j,F){function e(t){if(t!=null){if(t.nb$index)return t.nb$index();if(typeof t=="number"&&Number.isInteger(t))return t}}function n(t,r){const l=e(t);if(l!==void 0)return l;throw r=(r||"'{tp$name}' object cannot be interpreted as an integer").replace("{tp$name}",Sk.abstr.typeName(t)),new Sk.builtin.TypeError(r)}Sk.misceval={},Sk.misceval.Suspension=function(t,r,l){this.$isSuspension=!0,t!==void 0&&r!==void 0&&(this.resume=function(){return t(r.resume())}),this.child=r,this.optional=r!==void 0&&r.optional,this.data=l===void 0&&r!==void 0?r.data:l},Sk.exportSymbol("Sk.misceval.Suspension",Sk.misceval.Suspension),Sk.misceval.retryOptionalSuspensionOrThrow=function(t,r){for(;t instanceof Sk.misceval.Suspension;){if(!t.optional)throw new Sk.builtin.SuspensionError(r||"Cannot call a function that blocks or suspends here");t=t.resume()}return t},Sk.exportSymbol("Sk.misceval.retryOptionalSuspensionOrThrow",Sk.misceval.retryOptionalSuspensionOrThrow),Sk.misceval.isIndex=function(t){return t!=null&&(t.nb$index!==void 0||typeof t=="number"&&Number.isInteger(t))},Sk.exportSymbol("Sk.misceval.isIndex",Sk.misceval.isIndex),Sk.misceval.asIndex=e,Sk.misceval.asIndexSized=function(t,r,l){if(l=n(t,l),typeof l=="number")return l;if(r==null)return JSBI.lessThan(l,JSBI.__ZERO)?-Number.MAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER;throw new r("cannot fit '"+Sk.abstr.typeName(t)+"' into an index-sized integer")},Sk.misceval.asIndexOrThrow=n,Sk.misceval.applySlice=function(t,r,l,c){return Sk.abstr.objectGetItem(t,new Sk.builtin.slice(r,l,null),c)},Sk.exportSymbol("Sk.misceval.applySlice",Sk.misceval.applySlice),Sk.misceval.assignSlice=function(t,r,l,c,u){return r=new Sk.builtin.slice(r,l),c===null?Sk.abstr.objectDelItem(t,r):Sk.abstr.objectSetItem(t,r,c,u)},Sk.exportSymbol("Sk.misceval.assignSlice",Sk.misceval.assignSlice),Sk.misceval.arrayFromArguments=function(t){var r;if(t.length!=1)return t;var l=t[0];if(l instanceof Sk.builtin.set?l=l.tp$iter().$obj:l instanceof Sk.builtin.dict&&(l=Sk.builtin.dict.prototype.keys.func_code(l)),l instanceof Sk.builtin.list||l instanceof Sk.builtin.tuple)return l.v;if(Sk.builtin.checkIterable(l)){for(t=[],l=Sk.abstr.iter(l),r=l.tp$iternext();r!==void 0;r=l.tp$iternext())t.push(r);return t}throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(l)+"' object is not iterable")},Sk.exportSymbol("Sk.misceval.arrayFromArguments",Sk.misceval.arrayFromArguments),Sk.misceval.iterator=Sk.abstr.buildIteratorClass("iterator",{constructor:function(t,r){this.tp$iternext=r?t:function(l){let c=t();return l||!c.$isSuspension?c:Sk.misceval.retryOptionalSuspensionOrThrow(c)}},iternext:function(t){return this.tp$iternext(t)},flags:{sk$acceptable_as_base_class:!1}}),Sk.misceval.swappedOp_={Eq:"Eq",NotEq:"NotEq",Lt:"Gt",LtE:"GtE",Gt:"Lt",GtE:"LtE"},Sk.misceval.opSymbols={Eq:"==",NotEq:"!=",Lt:"<",LtE:"<=",Gt:">",GtE:">=",Is:"is",IsNot:"is not",In_:"in",NotIn:"not in"},Sk.misceval.richCompareBool=function(t,r,l,c){Sk.asserts.assert(t.sk$object&&r.sk$object,"JS object passed to richCompareBool");var u,i=t.ob$type,o=r.ob$type,p=o!==i&&o.sk$baseClass===void 0&&o.$isSubType(i);if(!Sk.__future__.python3&&i!==o&&(l==="GtE"||l==="Gt"||l==="LtE"||l==="Lt")){var s=[Sk.builtin.float_,Sk.builtin.int_,Sk.builtin.lng,Sk.builtin.bool],a=[Sk.builtin.dict,Sk.builtin.enumerate,Sk.builtin.filter_,Sk.builtin.list,Sk.builtin.map_,Sk.builtin.str,Sk.builtin.tuple,Sk.builtin.zip_];const $=s.indexOf(i),y=a.indexOf(i);if(s=s.indexOf(o),a=a.indexOf(o),t===Sk.builtin.none.none$)switch(l){case"Lt":return!0;case"LtE":return!0;case"Gt":return!1;case"GtE":return!1}if(r===Sk.builtin.none.none$)switch(l){case"Lt":return!1;case"LtE":return!1;case"Gt":return!0;case"GtE":return!0}if($!==-1&&a!==-1)switch(l){case"Lt":return!0;case"LtE":return!0;case"Gt":return!1;case"GtE":return!1}if(y!==-1&&s!==-1)switch(l){case"Lt":return!1;case"LtE":return!1;case"Gt":return!0;case"GtE":return!0}if(y!==-1&&a!==-1)switch(l){case"Lt":return y<a;case"LtE":return y<=a;case"Gt":return y>a;case"GtE":return y>=a}}if(l==="Is"){if(i===o){if(t===r)return!0;if(i===Sk.builtin.float_)return t.v===r.v;if(i===Sk.builtin.int_)return typeof t.v=="number"&&typeof t.v=="number"?t.v===r.v:JSBI.equal(JSBI.BigInt(t.v),JSBI.BigInt(r.v))}return!1}if(l==="IsNot")return i!==o?!0:i===Sk.builtin.float_?t.v!==r.v:i===Sk.builtin.int_?typeof t.v=="number"&&typeof t.v=="number"?t.v!==r.v:JSBI.notEqual(JSBI.BigInt(t.v),JSBI.BigInt(r.v)):t!==r;if(l==="In")return Sk.misceval.chain(Sk.abstr.sequenceContains(r,t,c),Sk.misceval.isTrue);if(l==="NotIn")return Sk.misceval.chain(Sk.abstr.sequenceContains(r,t,c),function($){return!Sk.misceval.isTrue($)});if(o={Eq:"ob$eq",NotEq:"ob$ne",Gt:"ob$gt",GtE:"ob$ge",Lt:"ob$lt",LtE:"ob$le"},i=o[l],p&&(c=o[Sk.misceval.swappedOp_[l]],r[c]!==t[c]&&(u=r[c](t))!==Sk.builtin.NotImplemented.NotImplemented$)||(u=t[i](r))!==Sk.builtin.NotImplemented.NotImplemented$||!p&&(c=o[Sk.misceval.swappedOp_[l]],(u=r[c](t))!==Sk.builtin.NotImplemented.NotImplemented$))return Sk.misceval.isTrue(u);if(!Sk.__future__.python3){if(p=Sk.abstr.lookupSpecial(t,Sk.builtin.str.$cmp))try{if(u=Sk.misceval.callsimArray(p,[r]),Sk.builtin.checkNumber(u)){if(u=Sk.builtin.asnum$(u),l==="Eq")return u===0;if(l==="NotEq")return u!==0;if(l==="Lt")return 0>u;if(l==="Gt")return 0<u;if(l==="LtE")return 0>=u;if(l==="GtE")return 0<=u}if(u!==Sk.builtin.NotImplemented.NotImplemented$)throw new Sk.builtin.TypeError("comparison did not return an int")}catch($){throw new Sk.builtin.TypeError("comparison did not return an int")}if(p=Sk.abstr.lookupSpecial(r,Sk.builtin.str.$cmp))try{if(u=Sk.misceval.callsimArray(p,[t]),Sk.builtin.checkNumber(u)){if(u=Sk.builtin.asnum$(u),l==="Eq")return u===0;if(l==="NotEq")return u!==0;if(l==="Lt")return 0<u;if(l==="Gt")return 0>u;if(l==="LtE")return 0<=u;if(l==="GtE")return 0>=u}if(u!==Sk.builtin.NotImplemented.NotImplemented$)throw new Sk.builtin.TypeError("comparison did not return an int")}catch($){throw new Sk.builtin.TypeError("comparison did not return an int")}if(t===Sk.builtin.none.none$&&r===Sk.builtin.none.none$){if(l==="Eq")return t.v===r.v;if(l==="NotEq")return t.v!==r.v;if(l==="Gt")return t.v>r.v;if(l==="GtE")return t.v>=r.v;if(l==="Lt")return t.v<r.v;if(l==="LtE")return t.v<=r.v}}if(l==="Eq")return t===r;if(l==="NotEq")return t!==r;throw t=Sk.abstr.typeName(t),r=Sk.abstr.typeName(r),new Sk.builtin.TypeError("'"+Sk.misceval.opSymbols[l]+"' not supported between instances of '"+t+"' and '"+r+"'")},Sk.exportSymbol("Sk.misceval.richCompareBool",Sk.misceval.richCompareBool),Sk.misceval.objectRepr=function(t){if(Sk.asserts.assert(t!==void 0,"trying to repr undefined"),t!==null&&t.$r)return t.$r().v;try{return new Sk.builtin.str(t).v}catch(r){if(r instanceof Sk.builtin.TypeError)return"<unknown>";throw r}},Sk.exportSymbol("Sk.misceval.objectRepr",Sk.misceval.objectRepr),Sk.misceval.opAllowsEquality=function(t){switch(t){case"LtE":case"Eq":case"GtE":return!0}return!1},Sk.exportSymbol("Sk.misceval.opAllowsEquality",Sk.misceval.opAllowsEquality),Sk.misceval.isTrue=function(t){return t===!0||t===Sk.builtin.bool.true$?!0:t===!1||t===Sk.builtin.bool.false$||t===null||t===void 0?!1:t.nb$bool?t.nb$bool():t.sq$length?t.sq$length()!==0:!!t},Sk.exportSymbol("Sk.misceval.isTrue",Sk.misceval.isTrue),Sk.misceval.softspace_=!1,Sk.misceval.print_=function(t){Sk.misceval.softspace_&&(t!==`
`&&Sk.output(" "),Sk.misceval.softspace_=!1);var r=new Sk.builtin.str(t);return Sk.misceval.chain(Sk.importModule("sys",!1,!0),function(l){return Sk.misceval.apply(l.$d.stdout.write,void 0,void 0,void 0,[l.$d.stdout,r])},function(){var l;(l=r.v.length===0)||(l=r.v[r.v.length-1],l=!(l===`
`||l==="	"||l==="\r")),(l||r.v[r.v.length-1]===" ")&&(Sk.misceval.softspace_=!0)})},Sk.exportSymbol("Sk.misceval.print_",Sk.misceval.print_),Sk.misceval.loadname=function(t,r){if(r=r[t],r!==void 0||(r=Sk.builtins[t],r!==void 0))return r;throw new Sk.builtin.NameError("name '"+Sk.unfixReserved(t)+"' is not defined")},Sk.exportSymbol("Sk.misceval.loadname",Sk.misceval.loadname),Sk.misceval.call=function(t,r,l,c,u){return u=Array.prototype.slice.call(arguments,4),Sk.misceval.apply(t,r,l,c,u)},Sk.exportSymbol("Sk.misceval.call",Sk.misceval.call),Sk.misceval.callAsync=function(t,r,l,c,u,i){return i=Array.prototype.slice.call(arguments,5),Sk.misceval.applyAsync(t,r,l,c,u,i)},Sk.exportSymbol("Sk.misceval.callAsync",Sk.misceval.callAsync),Sk.misceval.callOrSuspend=function(t,r,l,c,u){return u=Array.prototype.slice.call(arguments,4),Sk.misceval.applyOrSuspend(t,r,l,c,u)},Sk.exportSymbol("Sk.misceval.callOrSuspend",Sk.misceval.callOrSuspend),Sk.misceval.callsim=function(t,r){return r=Array.prototype.slice.call(arguments,1),Sk.misceval.apply(t,void 0,void 0,void 0,r)},Sk.exportSymbol("Sk.misceval.callsim",Sk.misceval.callsim),Sk.misceval.callsimArray=function(t,r,l){return r=r||[],Sk.misceval.retryOptionalSuspensionOrThrow(Sk.misceval.callsimOrSuspendArray(t,r,l))},Sk.exportSymbol("Sk.misceval.callsimArray",Sk.misceval.callsimArray),Sk.misceval.callsimAsync=function(t,r,l){return l=Array.prototype.slice.call(arguments,2),Sk.misceval.applyAsync(t,r,void 0,void 0,void 0,l)},Sk.exportSymbol("Sk.misceval.callsimAsync",Sk.misceval.callsimAsync),Sk.misceval.callsimOrSuspend=function(t,r){return r=Array.prototype.slice.call(arguments,1),Sk.misceval.applyOrSuspend(t,void 0,void 0,void 0,r)},Sk.exportSymbol("Sk.misceval.callsimOrSuspend",Sk.misceval.callsimOrSuspend),Sk.misceval.callsimOrSuspendArray=function(t,r,l){return r=r||[],t!==void 0&&t.tp$call?t.tp$call(r,l):Sk.misceval.applyOrSuspend(t,void 0,void 0,l,r)},Sk.exportSymbol("Sk.misceval.callsimOrSuspendArray",Sk.misceval.callsimOrSuspendArray),Sk.misceval.apply=function(t,r,l,c,u){return t=Sk.misceval.applyOrSuspend(t,r,l,c,u),t instanceof Sk.misceval.Suspension?Sk.misceval.retryOptionalSuspensionOrThrow(t):t},Sk.exportSymbol("Sk.misceval.apply",Sk.misceval.apply),Sk.misceval.asyncToPromise=function(t,r){return new Promise(function(l,c){try{(function u(i){try{for(var o=function(){try{u(i.resume())}catch(y){c(y)}},p=function(y){try{i.data.result=y,o()}catch(w){c(w)}},s=function(y){try{i.data.error=y,o()}catch(w){c(w)}};i instanceof Sk.misceval.Suspension;){var a=r&&(r[i.data.type]||r["*"]);if(a){var $=a(i);if($){$.then(u,c);return}}if(i.data.type=="Sk.promise"){i.data.promise.then(p,s);return}if(i.data.type=="Sk.yield"){Sk.global.setImmediate(o);return}if(i.data.type=="Sk.delay"){Sk.global.setImmediate(o);return}if(i.optional)i=i.resume();else throw new Sk.builtin.SuspensionError("Unhandled non-optional suspension of type '"+i.data.type+"'")}l(i)}catch(y){c(y)}})(t())}catch(u){c(u)}})},Sk.exportSymbol("Sk.misceval.asyncToPromise",Sk.misceval.asyncToPromise),Sk.misceval.applyAsync=function(t,r,l,c,u,i){return Sk.misceval.asyncToPromise(function(){return Sk.misceval.applyOrSuspend(r,l,c,u,i)},t)},Sk.exportSymbol("Sk.misceval.applyAsync",Sk.misceval.applyAsync),Sk.misceval.chain=function(t,r){for(var l=1,c=t,u,i;;){if(l==arguments.length)return c;if(c&&c.$isSuspension)break;c=arguments[l](c),l++}for(i=Array(arguments.length-l),u=0;u<arguments.length-l;u++)i[u]=arguments[l+u];return u=0,function o(p){for(;u<i.length;){if(p instanceof Sk.misceval.Suspension)return new Sk.misceval.Suspension(o,p);p=i[u](p),u++}return p}(c)},Sk.exportSymbol("Sk.misceval.chain",Sk.misceval.chain),Sk.misceval.tryCatch=function(t,r){try{var l=t()}catch(c){return r(c)}return l instanceof Sk.misceval.Suspension?(t=new Sk.misceval.Suspension(void 0,l),t.resume=function(){return Sk.misceval.tryCatch(l.resume,r)},t):l},Sk.exportSymbol("Sk.misceval.tryCatch",Sk.misceval.tryCatch),Sk.misceval.iterFor=function(t,r,l){var c=l,u=function(i){return c=i,i instanceof Sk.misceval.Break?i:t.tp$iternext(!0)};return function i(o){for(;o!==void 0;){if(o instanceof Sk.misceval.Suspension)return new Sk.misceval.Suspension(i,o);if(o===Sk.misceval.Break||o instanceof Sk.misceval.Break)return o.brValue;o=Sk.misceval.chain(r(o,c),u)}return c}(t.tp$iternext(!0))},Sk.exportSymbol("Sk.misceval.iterFor",Sk.misceval.iterFor),Sk.misceval.iterArray=function(t,r,l){Sk.asserts.assert(Array.isArray(t),"iterArgs requires an array");let c=0;return Sk.misceval.iterFor({tp$iternext:()=>t[c++]},r,l)},Sk.misceval.arrayFromIterable=function(t,r){if(t===void 0)return[];if(t.hp$type===void 0&&t.sk$asarray!==void 0)return t.sk$asarray();const l=[];return t=Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(t),c=>{l.push(c)}),()=>l),r?t:Sk.misceval.retryOptionalSuspensionOrThrow(t)},Sk.misceval.Break=function(t){if(!(this instanceof Sk.misceval.Break))return new Sk.misceval.Break(t);this.brValue=t},Sk.exportSymbol("Sk.misceval.Break",Sk.misceval.Break),Sk.misceval.applyOrSuspend=function(t,r,l,c,u){var i;if(t==null||t===Sk.builtin.none.none$)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(t)+"' object is not callable");typeof t=="function"&&t.tp$call===void 0&&(t=new Sk.builtin.func(t));var o=t.tp$call;if(o!==void 0){if(l)for(l=l.tp$iter(),i=l.tp$iternext();i!==void 0;i=l.tp$iternext())u.push(i);if(r)for(l=Sk.abstr.iter(r),i=l.tp$iternext();i!==void 0;i=l.tp$iternext()){if(!Sk.builtin.checkString(i))throw new Sk.builtin.TypeError("Function keywords must be strings");c.push(i.v),c.push(Sk.abstr.objectGetItem(r,i,!1))}return o.call(t,u,c,r)}if(o=t.__call__,o!==void 0)return u.unshift(t),Sk.misceval.apply(o,r,l,c,u);throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(t)+"' object is not callable")},Sk.exportSymbol("Sk.misceval.applyOrSuspend",Sk.misceval.applyOrSuspend),Sk.misceval.promiseToSuspension=function(t){var r=new Sk.misceval.Suspension;return r.resume=function(){if(r.data.error)throw r.data.error;return r.data.result},r.data={type:"Sk.promise",promise:t},r},Sk.exportSymbol("Sk.misceval.promiseToSuspension",Sk.misceval.promiseToSuspension),Sk.misceval.buildClass=function(t,r,l,c,u){var i=Sk.builtin.type,o={};r(t,o,u===void 0?{}:u),t.__name__&&(o.__module__=t.__name__),t=new Sk.builtin.str(l),c=new Sk.builtin.tuple(c),r=[];for(var p in o)o.hasOwnProperty(p)&&(r.push(new Sk.builtin.str(p)),r.push(o[p]));return r=new Sk.builtin.dict(r),Sk.misceval.callsimArray(i,[t,c,r])},Sk.exportSymbol("Sk.misceval.buildClass",Sk.misceval.buildClass)},function(j,F){Sk.builtin.callable_iter_=Sk.abstr.buildIteratorClass("callable_iterator",{constructor:function(e,n){if(!Sk.builtin.checkCallable(e))throw new Sk.builtin.TypeError("iter(v, w): v must be callable");this.$callable=e,this.$sentinel=n,this.$flag=!1},iternext(e){if(this.$flag!==!0){if(e)return e=Sk.misceval.callsimOrSuspendArray(this.$callable,[]),Sk.misceval.chain(e,n=>{if(Sk.misceval.richCompareBool(n,this.$sentinel,"Eq",!0))this.$flag=!0;else return n});if(e=Sk.misceval.callsimArray(this.$callable,[]),Sk.misceval.richCompareBool(e,this.$sentinel,"Eq",!1))this.$flag=!0;else return e}},flags:{sk$acceptable_as_base_class:!1}}),Sk.builtin.seq_iter_=Sk.abstr.buildIteratorClass("iterator",{constructor:function(e){this.$index=0,this.$seq=e},iternext(e){let n;return n=Sk.misceval.tryCatch(()=>this.$seq.mp$subscript(new Sk.builtin.int_(this.$index++),e),t=>{if(!(t instanceof Sk.builtin.IndexError||t instanceof Sk.builtin.StopIteration))throw t}),e?n:Sk.misceval.retryOptionalSuspensionOrThrow(n)},methods:{__length_hint__:{$flags:{NoArgs:!0},$meth(){if(this.$seq.sq$length)return this.$seq.sq$length()-this.$index;throw new Sk.builtin.NotImplementedError("len is not implemented for "+Sk.abstr.typeName(this.$seq))}}},flags:{sk$acceptable_as_base_class:!1}}),Sk.exportSymbol("Sk.builtin.callable_iter_",Sk.builtin.callable_iter_)},function(j,F){Sk.builtin.list=Sk.abstr.buildNativeClass("list",{constructor:function(t){t===void 0?t=[]:Array.isArray(t)||(t=Sk.misceval.arrayFromIterable(t)),Sk.asserts.assert(this instanceof Sk.builtin.list,"bad call to list, use 'new' with an Array of python objects"),this.v=t,this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,tp$doc:`Built-in mutable sequence.

If no argument is given, the constructor creates a new empty list.
The argument must be an iterable if specified.`,tp$new:Sk.generic.new,tp$init(t,r){return Sk.abstr.checkNoKwargs("list",r),Sk.abstr.checkArgsLen("list",t,0,1),Sk.misceval.chain(Sk.misceval.arrayFromIterable(t[0],!0),l=>{this.v=l})},$r(){if(this.in$repr)return new Sk.builtin.str("[...]");this.in$repr=!0;const t=this.v.map(r=>Sk.misceval.objectRepr(r));return this.in$repr=!1,new Sk.builtin.str("["+t.join(", ")+"]")},tp$richcompare:Sk.generic.seqCompare,tp$iter(){return new e(this)},sq$length(){return this.v.length},sq$concat(t){if(!(t instanceof Sk.builtin.list))throw new Sk.builtin.TypeError("can only concatenate list to list");return new Sk.builtin.list(this.v.concat(t.v))},sq$contains(t){for(let r=this.tp$iter(),l=r.tp$iternext();l!==void 0;l=r.tp$iternext())if(l===t||Sk.misceval.richCompareBool(l,t,"Eq"))return!0;return!1},sq$repeat(t){if(!Sk.misceval.isIndex(t))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(t)+"'");if(t=Sk.misceval.asIndexSized(t,Sk.builtin.OverflowError),t*this.v.length>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;const r=[];for(let l=0;l<t;l++)for(let c=0;c<this.v.length;c++)r.push(this.v[c]);return new Sk.builtin.list(r)},mp$subscript(t){if(Sk.misceval.isIndex(t))return t=Sk.misceval.asIndexSized(t,Sk.builtin.IndexError),t=this.list$inRange(t,"list index out of range"),this.v[t];if(t instanceof Sk.builtin.slice){const r=[];return t.sssiter$(this.v.length,l=>{r.push(this.v[l])}),new Sk.builtin.list(r)}throw new Sk.builtin.TypeError("list indices must be integers or slices, not "+Sk.abstr.typeName(t))},mp$ass_subscript(t,r){r===void 0?this.del$subscript(t):this.ass$subscript(t,r)},sq$inplace_concat(t){return t===this?(this.v.push(...this.v),this):Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(t),r=>{this.v.push(r)}),()=>this)},sq$inplace_repeat(t){if(!Sk.misceval.isIndex(t))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(t)+"'");t=Sk.misceval.asIndexSized(t,Sk.builtin.OverflowError);const r=this.v.length;if(0>=t)this.v.length=0;else if(t*r>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;for(let l=1;l<t;l++)for(let c=0;c<r;c++)this.v.push(this.v[c]);return this}},methods:{__reversed__:{$meth(){return new n(this)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a reverse iterator over the list."},clear:{$meth(){return this.v.length=0,Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Remove all items from list."},copy:{$meth(){return new Sk.builtin.list(this.v.slice(0))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return a shallow copy of the list."},append:{$meth(t){return this.v.push(t),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:"($self, object, /)",$doc:"Append object to the end of the list."},insert:{$meth(t,r){return t=Sk.misceval.asIndexSized(t,Sk.builtin.OverflowError),{start:t}=Sk.builtin.slice.startEnd$wrt(this,t),this.v.splice(t,0,r),Sk.builtin.none.none$},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($self, index, object, /)",$doc:"Insert object before index."},extend:{$meth(t){return t===this?(this.v.push(...this.v),Sk.builtin.none.none$):Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(t),r=>{this.v.push(r)}),()=>Sk.builtin.none.none$)},$flags:{OneArg:!0},$textsig:"($self, iterable, /)",$doc:"Extend list by appending elements from the iterable."},pop:{$meth(t){t=t===void 0?this.v.length-1:Sk.misceval.asIndexSized(t,Sk.builtin.OverflowError),t=this.list$inRange(t,"pop index out of range");const r=this.v[t];return this.v.splice(t,1),r},$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, index=-1, /)",$doc:`Remove and return item at index (default last).

Raises IndexError if list is empty or index is out of range.`},remove:{$meth(t){if(t=this.list$indexOf(t),t===-1)throw new Sk.builtin.ValueError("list.remove(x): x not in list");return this.v.splice(t,1),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:"($self, value, /)",$doc:`Remove first occurrence of value.

Raises ValueError if the value is not present.`},sort:{$meth(t,r){if(t.length)throw new Sk.builtin.TypeError("sort() takes no positional arguments");const[l,c]=Sk.abstr.copyKeywordsToNamedArgs("sort",["key","reverse"],t,r,[Sk.builtin.none.none$,Sk.builtin.bool.false$]);return this.list$sort(void 0,l,c)},$flags:{FastCall:!0},$textsig:"($self, /, *, key=None, reverse=False)",$doc:"Stable sort *IN PLACE*."},index:{$meth(t,r,l){if(r!==void 0&&!Sk.misceval.isIndex(r)||l!==void 0&&!Sk.misceval.isIndex(l))throw new Sk.builtin.TypeError("slice indices must be integers or have an __index__ method");if(r=this.list$indexOf(t,r,l),r===-1)throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(t)+" is not in list");return new Sk.builtin.int_(r)},$flags:{MinArgs:1,MaxArgs:3},$textsig:"($self, value, start=0, stop=sys.maxsize, /)",$doc:`Return first index of value.

Raises ValueError if the value is not present.`},count:{$meth(t){let r=0;const l=this.v.length;for(let c=0;c<l;c++)(this.v[c]===t||Sk.misceval.richCompareBool(this.v[c],t,"Eq"))&&(r+=1);return new Sk.builtin.int_(r)},$flags:{OneArg:!0},$textsig:"($self, value, /)",$doc:"Return number of occurrences of value."},reverse:{$meth(){return this.list$reverse(),Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Reverse *IN PLACE*."}},proto:{sk$asarray(){return this.v.slice(0)},list$sort:function(t,r,l){const c=r!=null&&r!==Sk.builtin.none.none$;var u=t!=null&&t!==Sk.builtin.none.none$;let i;if(l===void 0)i=!1;else if(Sk.builtin.checkInt(l))i=Sk.misceval.isTrue(l);else throw new Sk.builtin.TypeError("an integer is required");l=new Sk.builtin.timSort(this),this.v=[];const o=new Sk.builtin.int_(0);if(c){l.lt=u?function(p,s){return p=Sk.misceval.callsimArray(t,[p[0],s[0]]),Sk.misceval.richCompareBool(p,o,"Lt")}:function(p,s){return Sk.misceval.richCompareBool(p[0],s[0],"Lt")};for(let p=0;p<l.listlength;p++){u=l.list.v[p];const s=Sk.misceval.callsimArray(r,[u]);l.list.v[p]=[s,u]}}else u&&(l.lt=function(p,s){return p=Sk.misceval.callsimArray(t,[p,s]),Sk.misceval.richCompareBool(p,o,"Lt")});if(i&&l.list.list$reverse(),l.sort(),i&&l.list.list$reverse(),c)for(r=0;r<l.listlength;r++)u=l.list.v[r][1],l.list.v[r]=u;if(r=0<this.sq$length(),this.v=l.list.v,r)throw new Sk.builtin.ValueError("list modified during sort");return Sk.builtin.none.none$},list$inRange(t,r){if(0>t&&(t+=this.v.length),0<=t&&t<this.v.length)return t;throw new Sk.builtin.IndexError(r)},list$indexOf(t,r,l){for({start:r,end:l}=Sk.builtin.slice.startEnd$wrt(this,r,l);r<l&&r<this.v.length;r++)if(this.v[r]===t||Sk.misceval.richCompareBool(this.v[r],t,"Eq"))return r;return-1},list$reverse(){this.v.reverse()},ass$subscript(t,r){if(Sk.misceval.isIndex(t))this.ass$index(t,r);else if(t instanceof Sk.builtin.slice){const{start:l,stop:c,step:u}=t.slice$indices(this.v.length);u===1?this.ass$slice(l,c,r):this.ass$ext_slice(t,r)}else throw new Sk.builtin.TypeError("list indices must be integers or slices, not "+Sk.abstr.typeName(t))},ass$index(t,r){t=Sk.misceval.asIndexSized(t,Sk.builtin.IndexError),t=this.list$inRange(t,"list assignment index out of range"),this.v[t]=r},ass$slice(t,r,l){if(!Sk.builtin.checkIterable(l))throw new Sk.builtin.TypeError("can only assign an iterable");l=Sk.misceval.arrayFromIterable(l),this.v.splice(t,r-t,...l)},ass$ext_slice(t,r){const l=[];if(t.sssiter$(this.v.length,c=>{l.push(c)}),!Sk.builtin.checkIterable(r))throw new Sk.builtin.TypeError("must assign iterable to extended slice");if(t=Sk.misceval.arrayFromIterable(r),l.length!==t.length)throw new Sk.builtin.ValueError("attempt to assign sequence of size "+t.length+" to extended slice of size "+l.length);for(r=0;r<l.length;r++)this.v.splice(l[r],1,t[r])},del$subscript(t){if(Sk.misceval.isIndex(t))this.del$index(t);else if(t instanceof Sk.builtin.slice){const{start:r,stop:l,step:c}=t.slice$indices(this.v.length);c===1?this.del$slice(r,l):this.del$ext_slice(t,0<c?1:0)}else throw new Sk.builtin.TypeError("list indices must be integers, not "+Sk.abstr.typeName(t))},del$index(t){t=Sk.misceval.asIndexSized(t,Sk.builtin.IndexError),t=this.list$inRange(t,"list assignment index out of range"),this.v.splice(t,1)},del$slice(t,r){this.v.splice(t,r-t)},del$ext_slice(t,r){let l=0;t.sssiter$(this.v.length,c=>{this.v.splice(c-l,1),l+=r})}}}),Sk.exportSymbol("Sk.builtin.list",Sk.builtin.list),Sk.builtin.list.py2$methods={sort:{$name:"sort",$meth(t,r){const[l,c,u]=Sk.abstr.copyKeywordsToNamedArgs("sort",["cmp","key","reverse"],t,r,[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.bool.false$]);return this.list$sort(l,c,u)},$flags:{FastCall:!0},$textsig:"($self, cmp=None, key=None, reverse=False)",$doc:"Stable sort *IN PLACE*."}};var e=Sk.abstr.buildIteratorClass("list_iterator",{constructor:function(t){this.$index=0,this.$seq=t.v},iternext:Sk.generic.iterNextWithArray,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}}),n=Sk.abstr.buildIteratorClass("list_reverseiterator",{constructor:function(t){this.$index=t.v.length-1,this.$seq=t.v},iternext(){const t=this.$seq[this.$index--];if(t===void 0)this.tp$iternext=()=>{};else return t},methods:{__length_hint__:Sk.generic.iterReverseLengthHintMethodDef},flags:{sk$acceptable_as_base_class:!1}})},function(j,F,e){function n(d){var S=d.replace(A,"").replace(M,"_").toLowerCase();return S=k[S],S===void 0?d:S}function t(d,S,g){if(S===void 0)S="utf-8";else if(Sk.builtin.checkString(S))S=S.$jsstr();else throw new Sk.builtin.TypeError(d+"() argument "+("bytesstr".includes(d)?2:1)+" must be str not "+Sk.abstr.typeName(S));if(g===void 0)g="strict";else if(Sk.builtin.checkString(g))g=g.$jsstr();else throw new Sk.builtin.TypeError(d+"() argument "+("bytesstr".includes(d)?3:2)+" must be str not "+Sk.abstr.typeName(g));return{encoding:S,errors:g}}function r(d,S,g){if(d=d.$jsstr(),S=n(S),g!=="strict"&&g!=="ignore"&&g!=="replace")throw new Sk.builtin.NotImplementedError("'"+g+"' error handling not implemented in Skulpt");if(S==="ascii"){S=[];for(x in d){const N=d.charCodeAt(x);if(127<N){if(g==="strict")throw g=l(N),new Sk.builtin.UnicodeEncodeError("'ascii' codec can't encode character '"+g+"' in position "+x+": ordinal not in range(128)");g==="replace"&&S.push(63)}else S.push(N)}var x=new Uint8Array(S)}else if(S==="utf-8")x=D.encode(d);else throw new Sk.builtin.LookupError("unknown encoding: "+S);return new Sk.builtin.bytes(x)}function l(d){var S=265>=d?"\\x":"\\u";return d=d.toString(16),d.length===3&&(d=d.slice(1,3)),d=d.length===1?S+"0"+d:S+d}function c(d,S){if({encoding:d,errors:S}=t("decode",d,S),d=n(d),S!=="strict"&&S!=="ignore"&&S!=="replace")throw new Sk.builtin.NotImplementedError("'"+S+"' error handling not implemented in Skulpt");if(d==="ascii"){d=this.v;var g="";for(let x=0;x<d.length;x++){const N=d[x];if(127<N){if(S==="strict")throw new Sk.builtin.UnicodeDecodeError("'ascii' codec can't decode byte 0x"+N.toString(16)+" in position "+x+": ordinal not in range(128)");S==="replace"&&(g+=String.fromCharCode(65533))}else g+=String.fromCharCode(N)}d=g}else if(d==="utf-8")e:if(d=this.v,g=S,S=f.decode(d),g==="replace")d=S;else{if(g==="strict"){if(g=S.indexOf("\uFFFD"),g===-1){d=S;break e}throw new Sk.builtin.UnicodeDecodeError("'utf-8' codec can't decode byte 0x"+d[g].toString(16)+" in position "+g+": invalid start byte")}d=S.replace(/\ufffd/g,"")}else throw new Sk.builtin.LookupError("unknown encoding: "+d);return new Sk.builtin.str(d)}function u(d,S){return function(g,x,N){if(!(g instanceof Sk.builtin.bytes||g instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError(d+" first arg must be bytes or a tuple of bytes, not "+Sk.abstr.typeName(g));if({start:x,end:N}=Sk.builtin.slice.startEnd$wrt(this,x,N),N<x)return Sk.builtin.bool.false$;if(x=this.v.subarray(x,N),g instanceof Sk.builtin.tuple){for(let O=Sk.abstr.iter(g),P=O.tp$iternext();P!==void 0;P=O.tp$iternext())if(P=this.get$raw(P),S(x,P))return Sk.builtin.bool.true$;return Sk.builtin.bool.false$}return S(x,g.v)?Sk.builtin.bool.true$:Sk.builtin.bool.false$}}function i(d){return function(S,g,x){return S=this.get$tgt(S),{start:g,end:x}=Sk.builtin.slice.startEnd$wrt(this,g,x),x<g?-1:typeof S=="number"?(S=d?this.v.lastIndexOf(S,x-1):this.v.indexOf(S,g),S>=g&&S<x?S:-1):d?this.find$subright(S,g,x):this.find$subleft(S,g,x)}}function o(d){return function(S){S=this.get$raw(S);let g;if(d){if(g=this.find$subright(S,0,this.v.length),0>g)return new Sk.builtin.tuple([new Sk.builtin.bytes,new Sk.builtin.bytes,this])}else if(g=this.find$subleft(S,0,this.v.length),0>g)return new Sk.builtin.tuple([this,new Sk.builtin.bytes,new Sk.builtin.bytes]);return new Sk.builtin.tuple([new Sk.builtin.bytes(this.v.subarray(0,g)),new Sk.builtin.bytes(S),new Sk.builtin.bytes(this.v.subarray(g+S.length))])}}function p(d,S){return function(g){var x=g===void 0||g===Sk.builtin.none.none$?new Uint8Array([9,10,11,12,13,32,133]):this.get$raw(g);g=0;var N=this.v.length;if(d)for(;g<N&&x.includes(this.v[g]);)g++;if(S)for(;N>g&&x.includes(this.v[N-1]);)N--;for(x=new Uint8Array(N-g),N=0;N<x.length;N++)x[N]=this.v[N+g];return new Sk.builtin.bytes(x)}}function s(d,S,g){return function(x,N){if(N===void 0)N=32;else if(N instanceof Sk.builtin.bytes&&N.v.length==1)N=N.v[0];else throw new Sk.builtin.TypeError(d+"() argument 2 must be a byte string of length 1, not "+Sk.abstr.typeName(N));const O=this.v.length;if(x=Sk.misceval.asIndexSized(x,Sk.builtin.OverflowError),x<=O)return new Sk.builtin.bytes(this.v);const P=new Uint8Array(x);let W,re;g?(W=Math.floor((x-O)/2),re=(x-O)%2?W+1:W):S?(W=x-O,re=0):(W=0,re=x-O),P.fill(N,0,W);for(let Q=0;Q<O;Q++)P[Q+W]=this.v[Q];return P.fill(N,x-re),new Sk.builtin.bytes(P)}}function a(d){return 9<=d&&13>=d||d===32}function $(d){return 97<=d&&122>=d}function y(d){return 65<=d&&90>=d}function w(d){return 48<=d&&57>=d}function m(d,S){return function(){return this.v.length===0?S?Sk.builtin.bool.true$:Sk.builtin.bool.false$:this.v.every(g=>d(g))?Sk.builtin.bool.true$:Sk.builtin.bool.false$}}function h(d,S){return function(){let g=!1;for(let x=0;x<this.v.length;x++){if(S(this.v[x]))return Sk.builtin.bool.false$;!g&&d(this.v[x])&&(g=!0)}return g?Sk.builtin.bool.true$:Sk.builtin.bool.false$}}function v(d){return function(){const S=new Uint8Array(this.v.length);for(let g=0;g<this.v.length;g++)S[g]=d(this.v[g]);return new Sk.builtin.bytes(S)}}e(30);const k={utf:"utf-8",utf8:"utf-8",utf_8:"utf-8",ascii:"ascii"};var A=/\s+/g,M=/[_-]+/g;const D=new TextEncoder,f=new TextDecoder;Sk.builtin.bytes=Sk.abstr.buildNativeClass("bytes",{constructor:function(d){if(!(this instanceof Sk.builtin.bytes))throw new TypeError("bytes is a constructor use 'new'");if(d===void 0)this.v=new Uint8Array;else if(d instanceof Uint8Array)this.v=d;else if(Array.isArray(d))Sk.asserts.assert(d.every(S=>0<=S&&255>=S),"bad internal call to bytes with array"),this.v=new Uint8Array(d);else if(typeof d=="string"){let S;const g=new Uint8Array(d.length),x=d.length;for(let N=0;N<x;N++){if(S=d.charCodeAt(N),255<S)throw new Sk.builtin.UnicodeDecodeError("invalid string at index "+N+" (possibly contains a unicode character)");g[N]=S}this.v=g}else if(typeof d=="number")this.v=new Uint8Array(d);else throw new Sk.builtin.TypeError("bad argument to bytes constructor")},slots:{tp$getattr:Sk.generic.getAttr,tp$doc:`bytes(iterable_of_ints) -> bytes
bytes(string, encoding[, errors]) -> bytes
bytes(bytes_or_buffer) -> immutable copy of bytes_or_buffer
bytes(int) -> bytes object of size given by the parameter initialized with null bytes
bytes() -> empty bytes object

Construct an immutable array of bytes from:
  - an iterable yielding integers in range(256)
  - a text string encoded using the specified encoding
  - any object implementing the buffer API.
  - an integer`,tp$new(d,S){if(this!==Sk.builtin.bytes.prototype)return this.$subtype_new(d,S);if(S=S||[],1>=d.length&&+S.length==0)d=d[0];else{if([d,g,S]=Sk.abstr.copyKeywordsToNamedArgs("bytes",[null,"pySource","errors"],d,S),{encoding:g,errors:S}=t("bytes",g,S),!Sk.builtin.checkString(d))throw new Sk.builtin.TypeError("encoding or errors without a string argument");return r(d,g,S)}if(d===void 0)return new Sk.builtin.bytes;if((S=Sk.abstr.lookupSpecial(d,Sk.builtin.str.$bytes))!==void 0){var g=Sk.misceval.callsimOrSuspendArray(S,[]);return Sk.misceval.chain(g,x=>{if(!Sk.builtin.checkBytes(x))throw new Sk.builtin.TypeError("__bytes__ returned non-bytes (type "+Sk.abstr.typeName(x)+")");return x})}if(Sk.misceval.isIndex(d)){if(g=Sk.misceval.asIndexSized(d,Sk.builtin.OverflowError),0>g)throw new Sk.builtin.ValueError("negative count");return new Sk.builtin.bytes(g)}if(Sk.builtin.checkBytes(d))return new Sk.builtin.bytes(d.v);if(Sk.builtin.checkString(d))throw new Sk.builtin.TypeError("string argument without an encoding");if(Sk.builtin.checkIterable(d)){let x=[];return g=Sk.misceval.iterFor(Sk.abstr.iter(d),N=>{if(N=Sk.misceval.asIndexSized(N),0>N||255<N)throw new Sk.builtin.ValueError("bytes must be in range(0, 256)");x.push(N)}),Sk.misceval.chain(g,()=>new Sk.builtin.bytes(x))}throw new Sk.builtin.TypeError("cannot convert '"+Sk.abstr.typeName(g)+"' object into bytes")},$r(){let d,S="'";const g=this.v.indexOf(34)!==-1;let x="";for(let N=0;N<this.v.length;N++)if(d=this.v[N],9>d||10<d&&13>d||13<d&&32>d||126<d)x+=l(d);else if(d===9||d===10||d===13||d===39||d===92)switch(d){case 9:x+="\\t";break;case 10:x+="\\n";break;case 13:x+="\\r";break;case 39:g?x+="\\'":(x+="'",S='"');break;case 92:x+="\\\\"}else x+=String.fromCharCode(d);return new Sk.builtin.str("b"+S+x+S)},tp$str(){return this.$r()},tp$iter(){return new b(this)},tp$richcompare(d,S){if(this===d&&Sk.misceval.opAllowsEquality(S))return!0;if(!(d instanceof Sk.builtin.bytes))return Sk.builtin.NotImplemented.NotImplemented$;const g=this.v;if(d=d.v,g.length!==d.length&&(S==="Eq"||S==="NotEq"))return S!=="Eq";let x;const N=Math.min(g.length,d.length);for(x=0;x<N&&g[x]===d[x];x++);switch(S){case"Lt":return x===N&&g.length<d.length||g[x]<d[x];case"LtE":return x===N&&g.length<=d.length||g[x]<=d[x];case"Eq":return x===N;case"NotEq":return x<N;case"Gt":return x===N&&g.length>d.length||g[x]>d[x];case"GtE":return x===N&&g.length>=d.length||g[x]>=d[x]}},tp$hash(){return new Sk.builtin.str(this.$jsstr()).tp$hash()},tp$as_sequence_or_mapping:!0,mp$subscript(d){if(Sk.misceval.isIndex(d)){let S=Sk.misceval.asIndexSized(d,Sk.builtin.IndexError);if(S!==void 0){if(0>S&&(S=this.v.length+S),0>S||S>=this.v.length)throw new Sk.builtin.IndexError("index out of range");return new Sk.builtin.int_(this.v[S])}}else if(d instanceof Sk.builtin.slice){const S=[];return d.sssiter$(this.v.length,g=>{S.push(this.v[g])}),new Sk.builtin.bytes(new Uint8Array(S))}throw new Sk.builtin.TypeError("byte indices must be integers or slices, not "+Sk.abstr.typeName(d))},sq$length(){return this.v.length},sq$concat(d){if(!(d instanceof Sk.builtin.bytes))throw new Sk.builtin.TypeError("can't concat "+Sk.abstr.typeName(d)+" to bytes");const S=new Uint8Array(this.v.length+d.v.length);let g;for(g=0;g<this.v.length;g++)S[g]=this.v[g];for(let x=0;x<d.v.length;x++,g++)S[g]=d.v[x];return new Sk.builtin.bytes(S)},sq$repeat(d){if(!Sk.misceval.isIndex(d))throw new Sk.builtin.TypeError("can't multiply sequence by non-int of type '"+Sk.abstr.typeName(d)+"'");d=Sk.misceval.asIndexSized(d,Sk.builtin.OverflowError);const S=d*this.v.length;if(S>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError;if(0>=d)return new Sk.builtin.bytes;d=new Uint8Array(S);let g=0;for(;g<S;)for(let x=0;x<this.v.length;x++)d[g++]=this.v[x];return new Sk.builtin.bytes(d)},sq$contains(d){return this.find$left(d)!==-1},tp$as_number:!0,nb$remainder:Sk.builtin.str.prototype.nb$remainder},proto:{$jsstr(){let d="";for(let S=0;S<this.v.length;S++)d+=String.fromCharCode(this.v[S]);return d},get$tgt(d){if(d instanceof Sk.builtin.bytes)return d.v;if(d=Sk.misceval.asIndexOrThrow(d,"argument should be integer or bytes-like object, not {tp$name}"),0>d||255<d)throw new Sk.builtin.ValueError("bytes must be in range(0, 256)");return d},get$raw(d){if(d instanceof Sk.builtin.bytes)return d.v;throw new Sk.builtin.TypeError("a bytes-like object is required, not '"+Sk.abstr.typeName(d)+"'")},get$splitArgs:function(d,S){if(S=Sk.misceval.asIndexSized(S,Sk.builtin.OverflowError),S=0>S?1/0:S,d=Sk.builtin.checkNone(d)?null:this.get$raw(d),d!==null&&!d.length)throw new Sk.builtin.ValueError("empty separator");return{sep:d,maxsplit:S}},find$left:i(!1),find$right:i(!0),find$subleft:function(d,S,g){g=g-d.length+1;let x=S;for(;x<g;){if(d.every((N,O)=>N===this.v[x+O]))return x;x++}return-1},find$subright(d,S,g){let x=g-d.length;for(;x>=S;){if(d.every((N,O)=>N===this.v[x+O]))return x;x--}return-1},$subtype_new(d,S){const g=new this.constructor;return d=Sk.builtin.bytes.prototype.tp$new(d,S),g.v=d.v,g},sk$asarray(){const d=[];return this.v.forEach(S=>{d.push(new Sk.builtin.int_(S))}),d}},flags:{str$encode:r,$decode:c,check$encodeArgs:t},methods:{__getnewargs__:{$meth(){return new Sk.builtin.tuple(new Sk.builtin.bytes(this.v))},$flags:{NoArgs:!0},$textsig:null,$doc:null},capitalize:{$meth(){const d=this.v.length;if(d===0)return new Sk.builtin.bytes(this.v);const S=new Uint8Array(d);let g=this.v[0];S[0]=$(g)?g-32:g;for(let x=1;x<d;x++)g=this.v[x],S[x]=y(g)?g+32:g;return new Sk.builtin.bytes(S)},$flags:{NoArgs:!0},$textsig:null,$doc:`B.capitalize() -> copy of B

Return a copy of B with only its first character capitalized (ASCII)
and the rest lower-cased.`},center:{$meth:s("center",!1,!0),$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:`B.center(width[, fillchar]) -> copy of B

Return B centered in a string of length width.  Padding is
done using the specified fill character (default is a space).`},count:{$meth(d,S,g){d=this.get$tgt(d),{start:S,end:g}=Sk.builtin.slice.startEnd$wrt(this,S,g);let x=0;if(typeof d=="number")for(;S<g;S++)this.v[S]===d&&x++;else{g=g-d.length+1;for(let N=S;N<g;N++)d.every((O,P)=>O===this.v[N+P])&&(x++,N+=d.length-1)}return new Sk.builtin.int_(x)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.count(sub[, start[, end]]) -> int

Return the number of non-overlapping occurrences of subsection sub in
bytes B[start:end].  Optional arguments start and end are interpreted
as in slice notation.`},decode:{$meth:c,$flags:{NamedArgs:["encoding","errors"]},$textsig:"($self, /, encoding='utf-8', errors='strict')",$doc:`Decode the bytes using the codec registered for encoding.

  encoding
    The encoding with which to decode the bytes.
  errors
    The error handling scheme to use for the handling of decoding errors.
    The default is 'strict' meaning that decoding errors raise a
    UnicodeDecodeError. Other possible values are 'ignore' and 'replace'
    as well as any other name registered with codecs.register_error that
    can handle UnicodeDecodeErrors.`},endswith:{$meth:u("endswith",(d,S)=>{const g=d.length-S.length;return 0<=g&&S.every((x,N)=>x===d[g+N])}),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.endswith(suffix[, start[, end]]) -> bool

Return True if B ends with the specified suffix, False otherwise.
With optional start, test B beginning at that position.
With optional end, stop comparing B at that position.
suffix can also be a tuple of bytes to try.`},expandtabs:{$meth(d){d=Sk.misceval.asIndexSized(d,Sk.builtin.OverflowError,"an integer is required (got type {tp$nam})");const S=[];let g=0;for(let N=0;N<this.v.length;N++){var x=this.v[N];x===9?(x=d-g%d,S.push(...Array(x).fill(32)),g+=x):x===10||x===13?(S.push(x),g=0):(S.push(x),g++)}return new Sk.builtin.bytes(new Uint8Array(S))},$flags:{NamedArgs:["tabsize"],Defaults:[8]},$textsig:null,$doc:`B.expandtabs(tabsize=8) -> copy of B

Return a copy of B where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.`},find:{$meth:function(d,S,g){return new Sk.builtin.int_(this.find$left(d,S,g))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.find(sub[, start[, end]]) -> int

Return the lowest index in B where subsection sub is found,
such that sub is contained within B[start,end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.`},hex:{$meth(){let d="";for(let S=0;S<this.v.length;S++)d+=this.v[S].toString(16).padStart(2,"0");return new Sk.builtin.str(d)},$flags:{NoArgs:!0},$textsig:null,$doc:`B.hex() -> string

Create a string of hexadecimal numbers from a bytes object.
Example: b'\\xb9\\x01\\xef'.hex() -> 'b901ef'.`},index:{$meth:function(d,S,g){if(d=this.find$left(d,S,g),d===-1)throw new Sk.builtin.ValueError("subsection not found");return new Sk.builtin.int_(d)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.index(sub[, start[, end]]) -> int

Return the lowest index in B where subsection sub is found,
such that sub is contained within B[start,end].  Optional
arguments start and end are interpreted as in slice notation.

Raises ValueError when the subsection is not found.`},isalnum:{$meth:m(d=>w(d)||$(d)||y(d)),$flags:{NoArgs:!0},$textsig:null,$doc:`B.isalnum() -> bool

Return True if all characters in B are alphanumeric
and there is at least one character in B, False otherwise.`},isalpha:{$meth:m(d=>65<=d&&90>=d||97<=d&&122>=d),$flags:{NoArgs:!0},$textsig:null,$doc:`B.isalpha() -> bool

Return True if all characters in B are alphabetic
and there is at least one character in B, False otherwise.`},isascii:{$meth:m(d=>0<=d&&127>=d,!0),$flags:{NoArgs:!0},$textsig:null,$doc:`B.isascii() -> bool

Return True if B is empty or all characters in B are ASCII,
False otherwise.`},isdigit:{$meth:m(w),$flags:{NoArgs:!0},$textsig:null,$doc:`B.isdigit() -> bool

Return True if all characters in B are digits
and there is at least one character in B, False otherwise.`},islower:{$meth:h($,y),$flags:{NoArgs:!0},$textsig:null,$doc:`B.islower() -> bool

Return True if all cased characters in B are lowercase and there is
at least one cased character in B, False otherwise.`},isspace:{$meth:m(a),$flags:{NoArgs:!0},$textsig:null,$doc:`B.isspace() -> bool

Return True if all characters in B are whitespace
and there is at least one character in B, False otherwise.`},istitle:{$meth:function(){let d=!1,S=!1;for(let g=0;g<this.v.length;g++){const x=this.v[g];if(y(x)){if(d)return Sk.builtin.bool.false$;S=d=!0}else if($(x)){if(!d)return Sk.builtin.bool.false$;S=!0}else d=!1}return S?Sk.builtin.bool.true$:Sk.builtin.bool.false$},$flags:{NoArgs:!0},$textsig:null,$doc:`B.istitle() -> bool

Return True if B is a titlecased string and there is at least one
character in B, i.e. uppercase characters may only follow uncased
characters and lowercase characters only cased ones. Return False
otherwise.`},isupper:{$meth:h(y,$),$flags:{NoArgs:!0},$textsig:null,$doc:`B.isupper() -> bool

Return True if all cased characters in B are uppercase and there is
at least one cased character in B, False otherwise.`},join:{$meth(d){const S=[];let g=0;return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(d),x=>{if(!(x instanceof Sk.builtin.bytes))throw new Sk.builtin.TypeError("sequence item "+g+": expected a bytes-like object, "+Sk.abstr.typeName(x)+" found");g++,S.length&&S.push(...this.v),S.push(...x.v)}),()=>new Sk.builtin.bytes(new Uint8Array(S)))},$flags:{OneArg:!0},$textsig:"($self, iterable_of_bytes, /)",$doc:`Concatenate any number of bytes objects.

The bytes whose method is called is inserted in between each pair.

The result is returned as a new bytes object.

Example: b'.'.join([b'ab', b'pq', b'rs']) -> b'ab.pq.rs'.`},ljust:{$meth:s("ljust",!1,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:`B.ljust(width[, fillchar]) -> copy of B

Return B left justified in a string of length width. Padding is
done using the specified fill character (default is a space).`},lower:{$meth:v(d=>y(d)?d+32:d),$flags:{NoArgs:!0},$textsig:null,$doc:`B.lower() -> copy of B

Return a copy of B with all ASCII characters converted to lowercase.`},lstrip:{$meth:p(!0,!1),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, bytes=None, /)",$doc:`Strip leading bytes contained in the argument.

If the argument is omitted or None, strip leading  ASCII whitespace.`},partition:{$meth:o(!1),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:`Partition the bytes into three parts using the given separator.

This will search for the separator sep in the bytes. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.

If the separator is not found, returns a 3-tuple containing the original bytes
object and two empty bytes objects.`},replace:{$meth(d,S,g){d=this.get$raw(d),S=this.get$raw(S),g=g===void 0?-1:Sk.misceval.asIndexSized(g,Sk.builtin.OverflowError),g=0>g?1/0:g;const x=[];let N=0;for(var O=0;O<this.v.length&&N<g;){const P=this.find$subleft(d,O,this.v.length);if(P===-1)break;for(;O<P;O++)x.push(this.v[O]);x.push(...S),O=P+d.length,N++}for(O;O<this.v.length;O++)x.push(this.v[O]);return new Sk.builtin.bytes(new Uint8Array(x))},$flags:{MinArgs:2,MaxArgs:3},$textsig:"($self, old, new, count=-1, /)",$doc:`Return a copy with all occurrences of substring old replaced by new.

  count
    Maximum number of occurrences to replace.
    -1 (the default value) means replace all occurrences.

If the optional argument count is given, only the first count occurrences are
replaced.`},rfind:{$meth(d,S,g){return new Sk.builtin.int_(this.find$right(d,S,g))},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.rfind(sub[, start[, end]]) -> int

Return the highest index in B where subsection sub is found,
such that sub is contained within B[start,end].  Optional
arguments start and end are interpreted as in slice notation.

Return -1 on failure.`},rindex:{$meth:function(d,S,g){if(d=this.find$right(d,S,g),d===-1)throw new Sk.builtin.ValueError("subsection not found");return new Sk.builtin.int_(d)},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.rindex(sub[, start[, end]]) -> int

Return the highest index in B where subsection sub is found,
such that sub is contained within B[start,end].  Optional
arguments start and end are interpreted as in slice notation.

Raise ValueError when the subsection is not found.`},rjust:{$meth:s("rjust",!0,!1),$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:`B.rjust(width[, fillchar]) -> copy of B

Return B right justified in a string of length width. Padding is
done using the specified fill character (default is a space)`},rpartition:{$meth:o(!0),$flags:{OneArg:!0},$textsig:"($self, sep, /)",$doc:`Partition the bytes into three parts using the given separator.

This will search for the separator sep in the bytes, starting at the end. If
the separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.

If the separator is not found, returns a 3-tuple containing two empty bytes
objects and the original bytes object.`},rsplit:{$meth:function(d,S){({sep:d,maxsplit:S}=this.get$splitArgs(d,S));const g=[];let x=0,N=this.v.length;if(d!==null){for(;0<=N&&x<S;){const O=this.find$subright(d,0,N);if(O===-1)break;g.push(new Sk.builtin.bytes(this.v.subarray(O+d.length,N))),N=O,x++}g.push(new Sk.builtin.bytes(this.v.subarray(0,N)))}else{for(N--;x<S;){for(;a(this.v[N]);)N--;if(0>N)break;for(d=N+1,N--;0<=N&&!a(this.v[N]);)N--;g.push(new Sk.builtin.bytes(this.v.subarray(N+1,d))),x++}if(0<=N){for(;a(this.v[N]);)N--;0<=N&&g.push(new Sk.builtin.bytes(this.v.subarray(0,N+1)))}}return new Sk.builtin.list(g.reverse())},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:`Return a list of the sections in the bytes, using sep as the delimiter.

  sep
    The delimiter according which to split the bytes.
    None (the default value) means split on ASCII whitespace characters
    (space, tab, return, newline, formfeed, vertical tab).
  maxsplit
    Maximum number of splits to do.
    -1 (the default value) means no limit.

Splitting is done starting at the end of the bytes and working to the front.`},rstrip:{$meth:p(!1,!0),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, bytes=None, /)",$doc:`Strip trailing bytes contained in the argument.

If the argument is omitted or None, strip trailing ASCII whitespace.`},split:{$meth:function(d,S){({sep:d,maxsplit:S}=this.get$splitArgs(d,S));const g=[],x=this.v.length;let N=0,O=0;if(d!==null){for(;O<x&&N<S;){const P=this.find$subleft(d,O,x);if(P===-1)break;g.push(new Sk.builtin.bytes(this.v.subarray(O,P))),O=P+d.length,N++}g.push(new Sk.builtin.bytes(this.v.subarray(O,x)))}else{for(;N<S;){for(;a(this.v[O]);)O++;if(O===x)break;for(d=O,O++;O<x&&!a(this.v[O]);)O++;g.push(new Sk.builtin.bytes(this.v.subarray(d,O))),N++}if(O<x){for(;a(this.v[O]);)O++;O<x&&g.push(new Sk.builtin.bytes(this.v.subarray(O,x)))}}return new Sk.builtin.list(g)},$flags:{NamedArgs:["sep","maxsplit"],Defaults:[Sk.builtin.none.none$,-1]},$textsig:"($self, /, sep=None, maxsplit=-1)",$doc:`Return a list of the sections in the bytes, using sep as the delimiter.

  sep
    The delimiter according which to split the bytes.
    None (the default value) means split on ASCII whitespace characters
    (space, tab, return, newline, formfeed, vertical tab).
  maxsplit
    Maximum number of splits to do.
    -1 (the default value) means no limit.`},splitlines:{$meth(d){d=Sk.misceval.isTrue(d);const S=[];let g=0,x=0;const N=this.v.length;for(;x<N;){var O=this.v[x];if(O===13){const P=this.v[x+1]===10;O=d?P?x+2:x+1:x,S.push(new Sk.builtin.bytes(this.v.subarray(g,O))),x=g=P?x+2:x+1}else O===10?(O=d?x+1:x,S.push(new Sk.builtin.bytes(this.v.subarray(g,O))),x=g=x+1):x++}return g<N&&S.push(new Sk.builtin.bytes(this.v.subarray(g,N))),new Sk.builtin.list(S)},$flags:{NamedArgs:["keepends"],Defaults:[!1]},$textsig:"($self, /, keepends=False)",$doc:`Return a list of the lines in the bytes, breaking at line boundaries.

Line breaks are not included in the resulting list unless keepends is given and
true.`},startswith:{$meth:u("startswith",(d,S)=>S.length<=d.length&&S.every((g,x)=>g===d[x])),$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`B.startswith(prefix[, start[, end]]) -> bool

Return True if B starts with the specified prefix, False otherwise.
With optional start, test B beginning at that position.
With optional end, stop comparing B at that position.
prefix can also be a tuple of bytes to try.`},strip:{$meth:p(!0,!0),$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, bytes=None, /)",$doc:`Strip leading and trailing bytes contained in the argument.

If the argument is omitted or None, strip leading and trailing ASCII whitespace.`},swapcase:{$meth:v(d=>y(d)?d+32:$(d)?d-32:d),$flags:{NoArgs:!0},$textsig:null,$doc:`B.swapcase() -> copy of B

Return a copy of B with uppercase ASCII characters converted
to lowercase ASCII and vice versa.`},title:{$meth(){const d=this.v.length,S=new Uint8Array(d);let g=!1;for(let x=0;x<d;x++){const N=this.v[x];y(N)?(S[x]=g?N+32:N,g=!0):$(N)?(S[x]=g?N:N-32,g=!0):(S[x]=N,g=!1)}return new Sk.builtin.bytes(S)},$flags:{NoArgs:!0},$textsig:null,$doc:`B.title() -> copy of B

Return a titlecased version of B, i.e. ASCII words start with uppercase
characters, all remaining cased characters have lowercase.`},upper:{$meth:v(d=>$(d)?d-32:d),$flags:{NoArgs:!0},$textsig:null,$doc:`B.upper() -> copy of B

Return a copy of B with all ASCII characters converted to uppercase.`},zfill:{$meth(d){d=Sk.misceval.asIndexSized(d,Sk.builtin.IndexError);const S=d-this.v.length;if(0>=S)return new Sk.builtin.bytes(this.v);const g=new Uint8Array(d);let x=0,N;for((this.v[0]===43||this.v[0]===45)&&(g[0]=this.v[0],x++),g.fill(48,x,x+S),N=x,x+=S;x<d;x++,N++)g[x]=this.v[N];return new Sk.builtin.bytes(g)},$flags:{OneArg:!0},$textsig:null,$doc:`B.zfill(width) -> copy of B

Pad a numeric string B with zeros on the left, to fill a field
of the specified width.  B is never truncated.`}},classmethods:{fromhex:{$meth:function(d){function S(W){for(let re=O;re<W;re+=2){let Q=d.substr(re,2);if(!x.test(Q))throw new Sk.builtin.ValueError("non-hexadecimal number found in fromhex() arg at position "+(re+1));N.push(parseInt(Q,16))}}if(!Sk.builtin.checkString(d))throw new Sk.builtin.TypeError("fromhex() argument must be str, not "+Sk.abstr.typeName(d));d=d.$jsstr();const g=/\s+/g,x=/^[abcdefABCDEF0123456789]{2}$/,N=[];let O=0,P;for(;(P=g.exec(d))!==null;)S(P.index),O=g.lastIndex;return S(d.length),new this(N)},$flags:{OneArg:!0},$textsig:"($type, string, /)",$doc:`Create a bytes object from a string of hexadecimal numbers.

Spaces between two numbers are accepted.
Example: bytes.fromhex('B9 01EF') -> b'\\\\xb9\\\\x01\\\\xef'.`}}});var b=Sk.abstr.buildIteratorClass("bytes_iterator",{constructor:function(d){this.$index=0,this.$seq=d.v},iternext(){const d=this.$seq[this.$index++];if(d!==void 0)return new Sk.builtin.int_(d)},methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}});Sk.exportSymbol("Sk.builtin.bytes",Sk.builtin.bytes)},function(j,F,e){(function(n){(function(t){function r(){}function l(){}var c=String.fromCharCode,u={}.toString,i=u.call(t.SharedArrayBuffer),o=u(),p=t.Uint8Array,s=p||Array,a=p?ArrayBuffer:s,$=a.isView||function(h){return h&&"length"in h},y=u.call(a.prototype);a=l.prototype;var w=t.TextEncoder,m=new(p?Uint16Array:s)(32);r.prototype.decode=function(h){if(!$(h)){var v=u.call(h);if(v!==y&&v!==i&&v!==o)throw TypeError("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");h=p?new s(h):h||[]}for(var k=v="",A=0,M=h.length|0,D=M-32|0,f,b,d=0,S=0,g,x=0,N=-1;A<M;){for(f=A<=D?32:M-A|0;x<f;A=A+1|0,x=x+1|0){switch(b=h[A]&255,b>>4){case 15:if(g=h[A=A+1|0]&255,g>>6!==2||247<b){A=A-1|0;break}d=(b&7)<<6|g&63,S=5,b=256;case 14:g=h[A=A+1|0]&255,d<<=6,d|=(b&15)<<6|g&63,S=g>>6===2?S+4|0:24,b=b+256&768;case 13:case 12:g=h[A=A+1|0]&255,d<<=6,d|=(b&31)<<6|g&63,S=S+7|0,A<M&&g>>6===2&&d>>S&&1114112>d?(b=d,d=d-65536|0,0<=d&&(N=(d>>10)+55296|0,b=(d&1023)+56320|0,31>x?(m[x]=N,x=x+1|0,N=-1):(g=N,N=b,b=g))):(b>>=8,A=A-b-1|0,b=65533),d=S=0,f=A<=D?32:M-A|0;default:m[x]=b;continue;case 11:case 10:case 9:case 8:}m[x]=65533}if(k+=c(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15],m[16],m[17],m[18],m[19],m[20],m[21],m[22],m[23],m[24],m[25],m[26],m[27],m[28],m[29],m[30],m[31]),32>x&&(k=k.slice(0,x-32|0)),A<M){if(m[0]=N,x=~N>>>31,N=-1,k.length<v.length)continue}else N!==-1&&(k+=c(N));v+=k,k=""}return v},a.encode=function(h){h=h===void 0?"":""+h;var v=h.length|0,k=new s((v<<1)+8|0),A,M=0,D=!p;for(A=0;A<v;A=A+1|0,M=M+1|0){var f=h.charCodeAt(A)|0;if(127>=f)k[M]=f;else{if(2047>=f)k[M]=192|f>>6;else{e:{if(55296<=f)if(56319>=f){var b=h.charCodeAt(A=A+1|0)|0;if(56320<=b&&57343>=b){if(f=(f<<10)+b-56613888|0,65535<f){k[M]=240|f>>18,k[M=M+1|0]=128|f>>12&63,k[M=M+1|0]=128|f>>6&63,k[M=M+1|0]=128|f&63;continue}break e}f=65533}else 57343>=f&&(f=65533);!D&&A<<1<M&&A<<1<(M-7|0)&&(D=!0,b=new s(3*v),b.set(k),k=b)}k[M]=224|f>>12,k[M=M+1|0]=128|f>>6&63}k[M=M+1|0]=128|f&63}}return p?k.subarray(0,M):k.slice(0,M)},w||(t.TextDecoder=r,t.TextEncoder=l)})(typeof n=="undefined"?typeof self=="undefined"?this:self:n)}).call(this,e(0))},function(j,F){Sk.builtin.tuple=Sk.abstr.buildNativeClass("tuple",{constructor:function(n){n===void 0?n=[]:Array.isArray(n)||(n=Sk.misceval.arrayFromIterable(n)),Sk.asserts.assert(this instanceof Sk.builtin.tuple,"bad call to tuple, use 'new' with an Array of python objects"),this.v=n,this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$doc:`Built-in immutable sequence.

If no argument is given, the constructor returns an empty tuple.
If iterable is specified the tuple is initialized from iterable's items.

If the argument is a tuple, the return value is the same object.`,$r(){if(this.in$repr)return new Sk.builtin.str("(...)");this.in$repr=!0;let n=this.v.map(t=>Sk.misceval.objectRepr(t));return this.in$repr=!1,n=n.join(", "),this.v.length===1&&(n+=","),new Sk.builtin.str("("+n+")")},tp$new(n,t){return this!==Sk.builtin.tuple.prototype?this.$subtype_new(n,t):(Sk.abstr.checkNoKwargs("tuple",t),Sk.abstr.checkArgsLen("tuple",n,0,1),n=n[0],n===void 0?new Sk.builtin.tuple([]):n.constructor===Sk.builtin.tuple?n:Sk.misceval.chain(Sk.misceval.arrayFromIterable(n,!0),r=>new Sk.builtin.tuple(r)))},tp$hash(){let n,t=3430008,r=1000003;const l=this.v.length;for(let c=0;c<l;++c){if(n=Sk.abstr.objectHash(this.v[c]),n===-1)return-1;t=(t^n)*r,r+=82520+l+l}return t+=97531,t===-1&&(t=-2),t|0},tp$richcompare:Sk.generic.seqCompare,tp$iter(){return new e(this)},mp$subscript(n){if(Sk.misceval.isIndex(n)){if(n=Sk.misceval.asIndexSized(n),0>n&&(n=this.v.length+n),0>n||n>=this.v.length)throw new Sk.builtin.IndexError("tuple index out of range");return this.v[n]}if(n instanceof Sk.builtin.slice){const t=[];return n.sssiter$(this.v.length,r=>{t.push(this.v[r])}),new Sk.builtin.tuple(t)}throw new Sk.builtin.TypeError("tuple indices must be integers or slices, not "+Sk.abstr.typeName(n))},sq$length(){return this.v.length},sq$repeat(n){if(n=Sk.misceval.asIndexSized(n,Sk.builtin.OverflowError),n===1&&this.constructor===Sk.builtin.tuple)return this;const t=[];for(let r=0;r<n;r++)for(let l=0;l<this.v.length;l++)t.push(this.v[l]);return new Sk.builtin.tuple(t)},sq$concat(n){if(!(n instanceof Sk.builtin.tuple))throw new Sk.builtin.TypeError("can only concatenate tuple (not '"+Sk.abstr.typeName(n)+"') to tuple");return new Sk.builtin.tuple(this.v.concat(n.v))},sq$contains(n){for(let t=this.tp$iter(),r=t.tp$iternext();r!==void 0;r=t.tp$iternext())if(r===n||Sk.misceval.richCompareBool(r,n,"Eq"))return!0;return!1}},proto:{$subtype_new(n,t){return t=new this.constructor,n=Sk.builtin.tuple.prototype.tp$new(n),t.v=n.v,t},sk$asarray(){return this.v.slice(0)}},methods:{__getnewargs__:{$meth(){return new Sk.builtin.tuple(this.v.slice(0))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:null},index:{$meth(n,t,r){if(t!==void 0&&!Sk.misceval.isIndex(t)||r!==void 0&&!Sk.misceval.isIndex(r))throw new Sk.builtin.TypeError("slice indices must be integers or have an __index__ method");({start:t,end:r}=Sk.builtin.slice.startEnd$wrt(this,t,r));const l=this.v;for(;t<r;t++)if(l[t]===n||Sk.misceval.richCompareBool(l[t],n,"Eq"))return new Sk.builtin.int_(t);throw new Sk.builtin.ValueError("tuple.index(x): x not in tuple")},$flags:{MinArgs:1,MaxArgs:3},$textsig:"($self, value, start=0, stop=sys.maxsize, /)",$doc:`Return first index of value.

Raises ValueError if the value is not present.`},count:{$meth(n){const t=this.v.length,r=this.v;let l=0;for(let c=0;c<t;++c)(r[c]===n||Sk.misceval.richCompareBool(r[c],n,"Eq"))&&(l+=1);return new Sk.builtin.int_(l)},$flags:{OneArg:!0},$textsig:"($self, value, /)",$doc:"Return number of occurrences of value."}}}),Sk.exportSymbol("Sk.builtin.tuple",Sk.builtin.tuple);var e=Sk.abstr.buildIteratorClass("tuple_iterator",{constructor:function(n){this.$index=0,this.$seq=n.sk$asarray()},iternext:Sk.generic.iterNextWithArray,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}})},function(j,F){function e(h){let v=h.$savedKeyHash;return v!==void 0?v:v=Sk.abstr.objectHash(h)}function n(h){return new Sk.builtin.set(Sk.misceval.arrayFromIterable(h))}function t(h,v){for(let k=Sk.abstr.iter(h),A=k.tp$iternext();A!==void 0;A=k.tp$iternext())if(!Sk.abstr.sequenceContains(v,A))return!1;return!0}function r(h,v,k){const A={constructor:function(M){if(arguments.length!==1)throw new Sk.builtin.TypeError("cannot create '"+Sk.abstr.typeName(this)+"' instances");this.dict=M,this.in$repr=!1}};return A.slots=Object.assign(v,u),A.methods={isdisjoint:{$meth(M){const D=n(this);return D.isdisjoint.$meth.call(D,M)},$flags:{OneArg:!0},$textsig:null,$doc:"Return True if the view and the given iterable have a null intersection."},__reversed__:{$meth:k,$flags:{NoArgs:!0},$textsig:null,$doc:"Return a reverse iterator over the dict keys."}},A.flags={sk$acceptable_as_base:!1},h==="dict_values"&&(delete A.slots.tp$as_number,delete A.slots.tp$richcompare),Sk.abstr.buildNativeClass(h,A)}function l(h,v,k){return Sk.abstr.buildIteratorClass(h,{constructor:function(A){this.$index=0,this.$orig=A,this.tp$iternext=()=>(this.$seq=A.$items(),this.$version=A.$version,k&&(this.$seq=this.$seq.reverse()),this.tp$iternext=this.constructor.prototype.tp$iternext,this.tp$iternext())},iternext:v,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1},proto:{next$item:c}})}function c(){if(this.$version!==this.$orig.$version)throw this.$len!==this.$orig.get$size()?new Sk.builtin.RuntimeError("dict changed size during iteration"):new Sk.builtin.RuntimeError("dictionary keys changed during iteration");return this.$seq[this.$index++]}Sk.builtin.dict=Sk.abstr.buildNativeClass("dict",{constructor:function(h){h===void 0&&(h=[]),Sk.asserts.assert(Array.isArray(h)&&h.length%2===0&&this instanceof Sk.builtin.dict,"bad call to dict constructor"),this.size=0,this.entries=Object.create(null),this.buckets={};for(let v=0;v<h.length;v+=2)this.set$item(h[v],h[v+1]);this.in$repr=!1,this.$version=0},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$as_number:!0,tp$hash:Sk.builtin.none.none$,tp$doc:`dict() -> new empty dictionary
dict(mapping) -> new dictionary initialized from a mapping object's
    (key, value) pairs
dict(iterable) -> new dictionary initialized as if via:
    d = {}
    for k, v in iterable:
        d[k] = v
dict(**kwargs) -> new dictionary initialized with the name=value pairs
    in the keyword argument list.  For example:  dict(one=1, two=2)`,$r(){if(this.in$repr)return new Sk.builtin.str("{...}");this.in$repr=!0;const h=this.$items().map(([v,k])=>Sk.misceval.objectRepr(v)+": "+Sk.misceval.objectRepr(k));return this.in$repr=!1,new Sk.builtin.str("{"+h.join(", ")+"}")},tp$new:Sk.generic.new,tp$init(h,v){return this.update$common(h,v,"dict")},tp$iter(){return new s(this)},tp$richcompare(h,v){let k;if(!(h instanceof Sk.builtin.dict)||v!=="Eq"&&v!=="NotEq")return Sk.builtin.NotImplemented.NotImplemented$;if(h===this)k=!0;else if(this.size!==h.size)k=!1;else{let A;k=this.$items().every(([M,D])=>(A=h.mp$lookup(M),A!==void 0&&(A===D||Sk.misceval.richCompareBool(D,A,"Eq"))))}return v==="Eq"?k:!k},nb$or(h){if(!(h instanceof Sk.builtin.dict))return Sk.builtin.NotImplemented.NotImplemented$;const v=this.dict$copy();return v.dict$merge(h),v},nb$reflected_or(h){return h instanceof Sk.builtin.dict?(h=h.dict$copy(),h.dict$merge(this),h):Sk.builtin.NotImplemented.NotImplemented$},nb$inplace_or(h){return Sk.misceval.chain(this.update$onearg(h),()=>this)},sq$length(){return this.get$size()},sq$contains(h){return this.mp$lookup(h)!==void 0},mp$subscript(h,v){var k=this.mp$lookup(h);if(k!==void 0)return k;if(k=Sk.abstr.lookupSpecial(this,Sk.builtin.str.$missing),k!==void 0)return h=Sk.misceval.callsimOrSuspendArray(k,[h]),v?h:Sk.misceval.retryOptionalSuspensionOrThrow(h);throw new Sk.builtin.KeyError(h)},mp$ass_subscript(h,v){if(v===void 0){if(this.pop$item(h)===void 0)throw new Sk.builtin.KeyError(h)}else this.set$item(h,v)}},methods:{__reversed__:{$meth(){return new y(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a reverse iterator over the dict keys."},get:{$meth(h,v){return this.mp$lookup(h)||v||Sk.builtin.none.none$},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, key, default=None, /)",$doc:"Return the value for key if key is in the dictionary, else default."},setdefault:{$meth(h,v){let k;const A=e(h);return k=typeof A=="string"?this.entries[A]:this.get$bucket_item(h,A),k!==void 0?k[1]:(v=v||Sk.builtin.none.none$,typeof A=="string"?this.entries[A]=[h,v]:this.set$bucket_item(h,v,A),this.size++,this.$version++,v)},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($self, key, default=None, /)",$doc:`Insert key with a value of default if key is not in the dictionary.

Return the value for key if key is in the dictionary, else default.`},pop:{$meth(h,v){const k=this.pop$item(h);if(k!==void 0)return k[1];if(v!==void 0)return v;throw new Sk.builtin.KeyError(h)},$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:`D.pop(k[,d]) -> v, remove specified key and return the corresponding value.
If key is not found, d is returned if given, otherwise KeyError is raised`},popitem:{$meth(){const h=this.get$size();if(h===0)throw new Sk.builtin.KeyError("popitem(): dictionary is empty");const[v,k]=this.$items()[h-1];return this.pop$item(v),new Sk.builtin.tuple([v,k])},$flags:{NoArgs:!0},$textsig:null,$doc:`D.popitem() -> (k, v), remove and return some (key, value) pair as a
2-tuple; but raise KeyError if D is empty.`},keys:{$meth(){return new i(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.keys() -> a set-like object providing a view on D's keys"},items:{$meth(){return new p(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.items() -> a set-like object providing a view on D's items"},values:{$meth(){return new o(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.values() -> an object providing a view on D's values"},update:{$meth(h,v){return Sk.misceval.chain(this.update$common(h,v,"update"),()=>Sk.builtin.none.none$)},$flags:{FastCall:!0},$textsig:null,$doc:`D.update([E, ]**F) -> None.  Update D from dict/iterable E and F.
If E is present and has a .keys() method, then does:  for k in E: D[k] = E[k]
If E is present and lacks a .keys() method, then does:  for k, v in E: D[k] = v
In either case, this is followed by: for k in F:  D[k] = F[k]`},clear:{$meth(){this.size=0,this.$version++,this.entries=Object.create(null),this.buckets={}},$flags:{NoArgs:!0},$textsig:null,$doc:"D.clear() -> None.  Remove all items from D."},copy:{$meth(){return this.dict$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"D.copy() -> a shallow copy of D"}},classmethods:{fromkeys:{$meth:function(h,v){v=v||Sk.builtin.none.none$;let k=this===Sk.builtin.dict?new this:this.tp$call([],[]);return Sk.misceval.chain(k,A=>(k=A,Sk.misceval.iterFor(Sk.abstr.iter(h),M=>k.mp$ass_subscript(M,v,!0))),()=>k)},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($type, iterable, value=None, /)",$doc:"Create a new dictionary with keys from iterable and values set to value."}},proto:{quick$lookup:function(h){if(h=this.entries[h.$savedKeyHash],h!==void 0)return h[1]},mp$lookup:function(h){const v=e(h);if(h=typeof v=="string"?this.entries[v]:this.get$bucket_item(h,v),h!==void 0)return h[1]},get$size(){return this.size},sk$asarray(){return Object.values(this.entries).map(h=>h[0])},update$common:function(h,v,k){Sk.abstr.checkArgsLen(k,h,0,1),h=h[0];let A;return h!==void 0&&(A=this.update$onearg(h)),Sk.misceval.chain(A,()=>{if(v)for(let M=0;M<v.length;M+=2)this.set$item(new Sk.builtin.str(v[M]),v[M+1])})},update$onearg(h){return h instanceof Sk.builtin.dict||Sk.abstr.lookupSpecial(h,Sk.builtin.str.$keys)!==void 0?this.dict$merge(h):this.dict$merge_seq(h)},dict$copy(){const h=new Sk.builtin.dict([]);h.size=this.size;var v=Object.entries(this.entries);for(var k in v){var A=v[k][1];h.entries[v[k][0]]=[A[0],A[1]]}for(let M in this.buckets)for(k=this.buckets[M],h.buckets[M]=v=[],A=0;A<k.length;A++)v.push(h.entries["#"+M+"_"+A]);return h},$items(){return Object.values(this.entries)},set$item:function(h,v){const k=e(h);let A;typeof k=="string"?(A=this.entries[k],A===void 0?(this.entries[k]=[h,v],this.size++,this.$version++):A[1]=v):(A=this.get$bucket_item(h,k),A===void 0?(this.set$bucket_item(h,v,k),this.size++,this.$version++):A[1]=v)},get$bucket_item:function(h,v){if(v=this.buckets[v],v!==void 0)for(let A=0;A<v.length;A++){var k=v[A];if(k!==void 0&&(k[0]===h||Sk.misceval.richCompareBool(h,k[0],"Eq")))return k}},pop$bucket_item:function(h,v){const k=this.buckets[v];let A;if(k!==void 0){for(let M=0;M<k.length;M++)if(A=k[M],A!==void 0&&(A[0]===h||Sk.misceval.richCompareBool(h,A[0],"Eq")))return delete this.entries["#"+v+"_"+M],k[M]=void 0,k.every(D=>D===void 0)&&delete this.buckets[v],A}},set$bucket_item:function(h,v,k){let A=this.buckets[k];h=[h,v],A===void 0?(this.buckets[k]=[h],k="#"+k+"_0"):(v=A.indexOf(void 0),v!==-1?(k="#"+k+"_"+v,A[v]=h):(k="#"+k+"_"+A.length,A.push(h))),this.entries[k]=h},pop$item:function(h){const v=e(h);if(typeof v=="string"?(h=this.entries[v],delete this.entries[v]):h=this.pop$bucket_item(h,v),h!==void 0)return this.size--,this.$version++,h},dict$merge:function(h){if(h.tp$iter===Sk.builtin.dict.prototype.tp$iter){var v=h.tp$iter();for(let k=v.tp$iternext();k!==void 0;k=v.tp$iternext()){const A=h.mp$subscript(k);this.set$item(k,A)}}else return v=Sk.abstr.lookupSpecial(h,Sk.builtin.str.$keys),Sk.misceval.chain(Sk.misceval.callsimOrSuspendArray(v,[]),k=>Sk.misceval.iterFor(Sk.abstr.iter(k),A=>Sk.misceval.chain(h.mp$subscript(A,!0),M=>{this.set$item(A,M)})))},dict$merge_seq:function(h){let v=0;return Sk.misceval.iterFor(Sk.abstr.iter(h),k=>{if(!Sk.builtin.checkIterable(k))throw new Sk.builtin.TypeError("cannot convert dictionary update sequence element #"+v+" to a sequence");if(k=Sk.misceval.arrayFromIterable(k),k.length!==2)throw new Sk.builtin.ValueError("dictionary update sequence element #"+v+" has length "+k.length+"; 2 is required");this.set$item(k[0],k[1]),v++})}}});const u={tp$getattr:Sk.generic.getAttr,tp$as_number:!0,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,$r(){if(this.in$repr)return new Sk.builtin.str("...");this.in$repr=!0;let h=Sk.misceval.arrayFromIterable(this);return h=h.map(v=>Sk.misceval.objectRepr(v)),this.in$repr=!1,new Sk.builtin.str(Sk.abstr.typeName(this)+"(["+h.join(", ")+"])")},tp$richcompare(h,v){if(!(Sk.builtin.checkAnySet(h)||h instanceof i||h instanceof p))return Sk.builtin.NotImplemented.NotImplemented$;const k=this.sq$length(),A=h.sq$length();switch(v){case"NotEq":case"Eq":let M;return this===h?M=!0:k===A&&(M=t(this,h)),v==="NotEq"?!M:M;case"Lt":return k<A&&t(this,h);case"LtE":return k<=A&&t(this,h);case"Gt":return k>A&&t(h,this);case"GtE":return k>=A&&t(h,this)}},nb$subtract(h){const v=n(this);return v.difference.$meth.call(v,h)},nb$and(h){const v=n(this);return v.intersection.$meth.call(v,h)},nb$or(h){const v=n(this);return v.union.$meth.call(v,h)},nb$xor(h){const v=n(this);return v.symmetric_difference.$meth.call(v,h)},sq$length(){return this.dict.get$size()}};var i=r("dict_keys",{sq$contains(h){return this.dict.mp$lookup(h)!==void 0},tp$iter(){return new s(this.dict)}},function(){return new y(this.dict)}),o=r("dict_values",{tp$iter(){return new $(this.dict)}},function(){return new m(this.dict)}),p=r("dict_items",{sq$contains(h){if(!(h instanceof Sk.builtin.tuple&&h.sq$length()===2))return!1;var v=h.mp$subscript(new Sk.builtin.int_(0));return h=h.mp$subscript(new Sk.builtin.int_(1)),v=this.dict.mp$lookup(v),v===void 0?!1:v===h||Sk.misceval.richCompareBool(v,h,"Eq")},tp$iter(){return new a(this.dict)}},function(){return new w(this.dict)}),s=l("dict_keyiterator",function(){const h=this.next$item();return h&&h[0]}),a=l("dict_itemiterator",function(){const h=this.next$item();return h&&new Sk.builtin.tuple([h[0],h[1]])}),$=l("dict_valueiterator",function(){const h=this.next$item();return h&&h[1]}),y=l("dict_reversekeyiterator",s.prototype.tp$iternext,!0),w=l("dict_reverseitemiterator",a.prototype.tp$iternext,!0),m=l("dict_reversevalueiterator",$.prototype.tp$iternext,!0);Sk.builtin.dict.py2$methods={has_key:{$name:"has_key",$flags:{OneArg:!0},$meth(h){return new Sk.builtin.bool(this.sq$contains(h))},$doc:"D.has_key(k) -> True if D has a key k, else False"},keys:{$name:"keys",$meth(){return new Sk.builtin.list(this.sk$asarray())},$flags:{NoArgs:!0},$textsig:null,$doc:"D.keys() -> a set-like object providing a view on D's keys"},items:{$name:"items",$meth(){return new Sk.builtin.list(this.$items().map(([h,v])=>new Sk.builtin.tuple([h,v])))},$flags:{NoArgs:!0},$textsig:null,$doc:"D.items() -> a set-like object providing a view on D's items"},values:{$name:"values",$meth(){return new Sk.builtin.list(this.$items().map(([,h])=>h))},$flags:{NoArgs:!0},$textsig:null,$doc:"D.values() -> an object providing a view on D's values"}}},function(j,F){function e(n,t){Object.defineProperties(n,{entries:{get:()=>{const r=Object.create(null);return Object.entries(t).forEach(([l,c])=>{l=Sk.unfixReserved(l),l.includes("$")||(l=new Sk.builtin.str(l),r[l.$savedKeyHash]=[l,c])}),r},configurable:!0},size:{get:()=>Object.keys(t).map(r=>Sk.unfixReserved(r)).filter(r=>!r.includes("$")).length,configurable:!0}})}Sk.builtin.mappingproxy=Sk.abstr.buildNativeClass("mappingproxy",{constructor:function(n){Sk.asserts.assert(this instanceof Sk.builtin.mappingproxy,"bad call to mapping proxy, use 'new'"),this.mapping=new Sk.builtin.dict([]),n!==void 0&&e(this.mapping,n)},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,tp$new(n,t){if(Sk.abstr.checkNoKwargs("mappingproxy",t),Sk.abstr.checkOneArg("mappingproxy",n,t),n=n[0],!Sk.builtin.checkMapping(n))throw new Sk.builtin.TypeError("mappingproxy() argument must be a mapping, not "+Sk.abstr.typeName(n));return t=new Sk.builtin.mappingproxy,t.mapping=n,t},tp$richcompare(n,t){return Sk.misceval.richCompareBool(this.mapping,n,t)},tp$str(){return this.mapping.tp$str()},$r(){return new Sk.builtin.str("mappingproxy("+Sk.misceval.objectRepr(this.mapping)+")")},mp$subscript(n,t){return this.mapping.mp$subscript(n,t)},sq$contains(n){return this.mapping.sq$contains(n)},sq$length(){return this.mapping.sq$length()},tp$iter(){return this.mapping.tp$iter()},tp$as_number:!0,nb$or(n){return n instanceof Sk.builtin.mappingproxy&&(n=n.mapping),Sk.abstr.numberBinOp(this.mapping,n,"BitOr")},nb$reflected_or(n){return n instanceof Sk.builtin.mappingproxy&&(n=n.mapping),Sk.abstr.numberBinOp(n,this.mapping,"BitOr")},nb$inplace_or(n){throw new Sk.builtin.TypeError("'|=' is not supported by "+Sk.abstr.typeName(this)+"; use '|' instead")}},methods:{get:{$meth(n,t){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$get),n,t)},$flags:{FastCall:!0},$textsig:null,$doc:"D.get(k[,d]) -> D[k] if k in D, else d.  d defaults to None."},keys:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$keys),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.keys() -> a set-like object providing a view on D's keys"},items:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$items),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.items() -> a set-like object providing a view on D's items"},values:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$values),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.values() -> a set-like object providing a view on D's values"},copy:{$meth(){return Sk.misceval.callsimArray(this.mapping.tp$getattr(this.str$copy),[])},$flags:{NoArgs:!0},$textsig:null,$doc:"D.copy() -> a shallow copy of D"}},proto:{str$get:new Sk.builtin.str("get"),str$copy:new Sk.builtin.str("copy"),str$keys:new Sk.builtin.str("keys"),str$items:new Sk.builtin.str("items"),str$values:new Sk.builtin.str("values"),mp$lookup(n){return this.mapping.mp$lookup(n)}},flags:{sk$acceptable_as_base_class:!1}})},function(j,F){Sk.builtin.property=Sk.abstr.buildNativeClass("property",{constructor:function(e,n,t,r){this.prop$get=e||Sk.builtin.none.none$,this.prop$set=n||Sk.builtin.none.none$,this.prop$del=t||Sk.builtin.none.none$,this.prop$doc=r||e&&e.$doc||Sk.builtin.none.none$},slots:{tp$getattr:Sk.generic.getAttr,tp$new:Sk.generic.new,tp$init(e,n){e=Sk.abstr.copyKeywordsToNamedArgs("property",["fget","fset","fdel","doc"],e,n,Array(4).fill(Sk.builtin.none.none$)),this.prop$get=e[0],this.prop$set=e[1],this.prop$del=e[2],Sk.builtin.checkNone(e[3])?Sk.builtin.checkNone(e[0])||(this.prop$doc=e[0].$doc||e[3]):this.prop$doc=e[3]},tp$doc:`Property attribute.

  fget
    function to be used for getting an attribute value
  fset
    function to be used for setting an attribute value
  fdel
    function to be used for del'ing an attribute
  doc
    docstring

Typical use is to define a managed attribute x:

class C(object):
    def getx(self): return self._x
    def setx(self, value): self._x = value
    def delx(self): del self._x
    x = property(getx, setx, delx, 'I'm the 'x' property.')

Decorators make defining new properties or modifying existing ones easy:

class C(object):
    @property
    def x(self):
        'I am the 'x' property.'
        return self._x
    @x.setter
    def x(self, value):
        self._x = value
    @x.deleter
    def x(self):
        del self._x`,tp$descr_get(e,n){if(e===null)return this;if(this.prop$get===void 0)throw new Sk.builtin.AttributeError("unreadable attribute");return Sk.misceval.callsimOrSuspendArray(this.prop$get,[e])},tp$descr_set(e,n){let t;if(t=n==null?this.prop$del:this.prop$set,Sk.builtin.checkNone(t))throw new Sk.builtin.AttributeError("can't "+(n==null?"delete":"set")+" attribute");if(!t.tp$call)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(t)+"' is not callable");return n==null?t.tp$call([e]):t.tp$call([e,n])}},methods:{getter:{$meth(e){return new Sk.builtin.property(e,this.prop$set,this.prop$del,this.prop$doc)},$flags:{OneArg:!0}},setter:{$meth(e){return new Sk.builtin.property(this.prop$get,e,this.prop$del,this.prop$doc)},$flags:{OneArg:!0}},deleter:{$meth(e){return new Sk.builtin.property(this.prop$get,this.prop$set,e,this.prop$doc)},$flags:{OneArg:!0}}},getsets:{fget:{$get(){return this.prop$get}},fset:{$get(){return this.prop$set}},fdel:{$get(){return this.prop$del}},__doc__:{$get(){return this.prop$doc},$set(e){this.prop$doc=e=e||Sk.builtin.none.none$}}}}),Sk.builtin.classmethod=Sk.abstr.buildNativeClass("classmethod",{constructor:function(e){this.cm$callable=e,this.$d=new Sk.builtin.dict},slots:{tp$getattr:Sk.generic.getAttr,tp$new:Sk.generic.new,tp$init(e,n){Sk.abstr.checkNoKwargs("classmethod",n),Sk.abstr.checkArgsLen("classmethod",e,1,1),this.cm$callable=e[0]},tp$doc:`classmethod(function) -> method

Convert a function to be a class method.

A class method receives the class as implicit first argument,
just like an instance method receives the instance.
To declare a class method, use this idiom:

  class C:
      @classmethod
      def f(cls, arg1, arg2, ...):
          ...

It can be called either on the class (e.g. C.f()) or on an instance
(e.g. C().f()).  The instance is ignored except for its class.
If a class method is called for a derived class, the derived class
object is passed as the implied first argument.

Class methods are different than C++ or Java static methods.
If you want those, see the staticmethod builtin.`,tp$descr_get(e,n){const t=this.cm$callable;if(t===void 0)throw new Sk.builtin.RuntimeError("uninitialized classmethod object");return n===void 0&&(n=e.ob$type),(e=t.tp$descr_get)?e.call(t,n):new Sk.builtin.method(t,n)}},getsets:{__func__:{$get(){return this.cm$callable}},__dict__:Sk.generic.getSetDict}}),Sk.builtin.staticmethod=Sk.abstr.buildNativeClass("staticmethod",{constructor:function(e){this.sm$callable=e,this.$d=new Sk.builtin.dict},slots:{tp$getattr:Sk.generic.getAttr,tp$new:Sk.generic.new,tp$init(e,n){Sk.abstr.checkNoKwargs("staticmethod",n),Sk.abstr.checkArgsLen("staticmethod",e,1,1),this.sm$callable=e[0]},tp$doc:`staticmethod(function) -> method

Convert a function to be a static method.

A static method does not receive an implicit first argument.
To declare a static method, use this idiom:

     class C:
         @staticmethod
         def f(arg1, arg2, ...):
             ...

It can be called either on the class (e.g. C.f()) or on an instance
(e.g. C().f()).  The instance is ignored except for its class.

Static methods in Python are similar to those found in Java or C++.
For a more advanced concept, see the classmethod builtin.`,tp$descr_get(e,n){if(this.sm$callable===void 0)throw new Sk.builtin.RuntimeError("uninitialized staticmethod object");return this.sm$callable}},getsets:{__func__:{$get(){return this.sm$callable}},__dict__:Sk.generic.getSetDict}})},function(j,F){function e(y,w){return function(m){if(m instanceof Sk.builtin.int_){let h=this.v;if(m=m.v,typeof h=="number"&&typeof m=="number"){const v=y(h,m);if(i(v))return new Sk.builtin.int_(v)}return h=p(h),m=p(m),new Sk.builtin.int_(w(h,m))}return Sk.builtin.NotImplemented.NotImplemented$}}function n(y,w){return function(m){if(m instanceof Sk.builtin.int_){let h=this.v;return m=m.v,typeof h=="number"&&typeof m=="number"?y(h,m):(h=p(h),m=p(m),w(h,m))}return Sk.builtin.NotImplemented.NotImplemented$}}function t(y,w){return function(){const m=this.v;return typeof m=="number"?new Sk.builtin.int_(y(m)):new Sk.builtin.int_(w(m))}}function r(){return new Sk.builtin.int_(this.v)}function l(y,w){return function(m){if(m instanceof Sk.builtin.int_){let h=this.v;if(m=m.v,m===0)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");return typeof h=="number"&&typeof m=="number"?new Sk.builtin.int_(y(h,m)):(h=p(h),m=p(m),new Sk.builtin.int_(JSBI.numberIfSafe(w(h,m))))}return Sk.builtin.NotImplemented.NotImplemented$}}function c(y,w){return function(m){if(m instanceof Sk.builtin.int_){let h=this.v;if(m=m.v,h===0)return new Sk.builtin.int_(this.v);if(typeof m=="number"){if(0>m)throw new Sk.builtin.ValueError("negative shift count");if(typeof h=="number"){const v=y(h,m);if(v!==void 0)return new Sk.builtin.int_(v)}m=JSBI.BigInt(m)}else if(JSBI.lessThan(JSBI.BigInt(0)))throw new Sk.builtin.ValueError("negative shift count");return h=p(h),new Sk.builtin.int_(w(h,m))}return Sk.builtin.NotImplemented.NotImplemented$}}function u(y,w){return function(m){if(m instanceof Sk.builtin.int_){var h=this.v;return m=m.v,typeof h=="number"&&typeof m=="number"?(h=y(h,m),0>h&&(h+=4294967296),new Sk.builtin.int_(h)):(h=p(h),m=p(m),new Sk.builtin.int_(JSBI.numberIfSafe(w(h,m))))}return Sk.builtin.NotImplemented.NotImplemented$}}function i(y){return y<=Number.MAX_SAFE_INTEGER&&y>=-Number.MAX_SAFE_INTEGER}function o(y){return y<=Number.MAX_SAFE_INTEGER&&y>=-Number.MAX_SAFE_INTEGER?+y:JSBI.BigInt(y)}function p(y){return typeof y=="number"?JSBI.BigInt(y):y}Sk.builtin.int_=Sk.abstr.buildNativeClass("int",{constructor:function(y){Sk.asserts.assert(this instanceof Sk.builtin.int_,"bad call to int use 'new'");let w;if(typeof y=="number"||JSBI.__isBigInt(y))w=y;else if(y===void 0)w=0;else if(typeof y=="string")w=o(y);else{if(y.nb$int)return y.nb$int();Sk.asserts.fail("bad argument to int constructor")}this.v=w},slots:{tp$as_number:!0,tp$doc:`int(x=0) -> integer
int(x, base=10) -> integer

Convert a number or string to an integer, or return 0 if no arguments
are given.  If x is a number, return x.__int__().  For floating point
numbers, this truncates towards zero.

If x is not a number or if base is given, then x must be a string,
bytes, or bytearray instance representing an integer literal in the
given base.  The literal can be preceded by '+' or '-' and be surrounded
by whitespace.  The base defaults to 10.  Valid bases are 0 and 2-36.
Base 0 means to interpret the base from the string as an integer literal.
>>> int('0b100', base=0)
4`,$r(){return new Sk.builtin.str(this.v.toString())},tp$hash(){const y=this.v;return typeof y=="number"?y:JSBI.toNumber(JSBI.remainder(y,JSBI.__MAX_SAFE))},tp$new(y,w){if(y.length+(w?w.length:0)===1?(w=y[0],y=Sk.builtin.none.none$):(y=Sk.abstr.copyKeywordsToNamedArgs("int",[null,"base"],y,w,[new Sk.builtin.int_(0),Sk.builtin.none.none$]),w=y[0],y=y[1]),y=y!==Sk.builtin.none.none$?Sk.misceval.asIndexOrThrow(y):null,w instanceof Sk.builtin.str)y===null&&(y=10),w=new Sk.builtin.int_(Sk.str2number(w.v,y));else{if(y!==null)throw new Sk.builtin.TypeError("int() can't convert non-string with explicit base");if(w.nb$int)w=w.nb$int();else if(y=Sk.abstr.lookupSpecial(w,Sk.builtin.str.$trunc)){if(y=Sk.misceval.callsimArray(y,[]),!Sk.builtin.checkInt(y))throw new Sk.builtin.TypeError(Sk.builtin.str.$trunc.$jsstr()+" returned non-Integral (type "+Sk.abstr.typeName(w)+")");w=new Sk.builtin.int_(y.v)}else throw new Sk.builtin.TypeError("int() argument must be a string, a bytes-like object or a number, not '"+Sk.abstr.typeName(w)+"'")}return this===Sk.builtin.int_.prototype?w:(y=new this.constructor,y.v=w.v,y)},tp$getattr:Sk.generic.getAttr,ob$eq:n((y,w)=>y==w,JSBI.equal),ob$ne:n((y,w)=>y!=w,JSBI.notEqual),ob$gt:n((y,w)=>y>w,JSBI.greaterThan),ob$ge:n((y,w)=>y>=w,JSBI.greaterThanOrEqual),ob$lt:n((y,w)=>y<w,JSBI.lessThan),ob$le:n((y,w)=>y<=w,JSBI.lessThanOrEqual),nb$int:r,nb$index(){return this.v},nb$float(){var y=this.v;if(typeof y=="number")return new Sk.builtin.float_(y);if(y=parseFloat(JSBI.toNumber(y)),y===1/0||y===-1/0)throw new Sk.builtin.OverflowError("int too large to convert to float");return new Sk.builtin.float_(y)},nb$isnegative(){const y=this.v;return typeof y=="number"?0>y:JSBI.lessThan(y,JSBI.__ZERO)},nb$ispositive(){const y=this.v;return typeof y=="number"?0>y:JSBI.greaterThanOrEqual(y,JSBI.__ZERO)},nb$bool(){return this.v!==0},nb$positive:r,nb$negative:t(y=>-y,JSBI.unaryMinus),nb$add:e((y,w)=>y+w,(y,w)=>JSBI.numberIfSafe(JSBI.add(y,w))),nb$subtract:e((y,w)=>y-w,(y,w)=>JSBI.numberIfSafe(JSBI.subtract(y,w))),nb$multiply:e((y,w)=>y*w,JSBI.multiply),nb$divide(y){return Sk.__future__.division?this.nb$float().nb$divide(y):this.nb$floor_divide(y)},nb$floor_divide:l((y,w)=>Math.floor(y/w),JSBI.divide),nb$remainder:l((y,w)=>y-Math.floor(y/w)*w,JSBI.remainder),nb$divmod(y){const w=this.nb$floor_divide(y);return y=this.nb$remainder(y),w===Sk.builtin.NotImplemented.NotImplemented$||y===Sk.builtin.NotImplemented.NotImplemented$?Sk.builtin.NotImplemented.NotImplemented$:new Sk.builtin.tuple([w,y])},nb$and:u((y,w)=>y&w,JSBI.bitwiseAnd),nb$or:u((y,w)=>y|w,JSBI.bitwiseOr),nb$xor:u((y,w)=>y^w,JSBI.bitwiseXor),nb$abs:t(Math.abs,y=>JSBI.lessThan(y,JSBI.__ZERO)?JSBI.unaryMinus(y):y),nb$lshift:c((y,w)=>{if(53>w&&(y=2*y*a[w],i(y)))return y},JSBI.leftShift),nb$rshift:c((y,w)=>{const m=y>>w;return 0<y&&0>m?m&Math.pow(2,32-w)-1:m},(y,w)=>JSBI.numberIfSafe(JSBI.signedRightShift(y,w))),nb$invert:t(y=>~y,JSBI.bitwiseNot),nb$power(y,w){let m;if(w!==void 0&&Sk.builtin.checkNone(w)&&(w=void 0),y instanceof Sk.builtin.int_&&(w===void 0||w instanceof Sk.builtin.int_)){let h=this.v,v=y.v;if(typeof h=="number"&&typeof v=="number"){const k=Math.pow(h,v);if(i(k)&&(m=0>v?new Sk.builtin.float_(k):new Sk.builtin.int_(k),w===void 0))return m}if(w!==void 0){if(y.nb$isnegative())throw new Sk.builtin.ValueError("pow() 2nd argument cannot be negative when 3rd argument specified");if(w.v===0)throw new Sk.builtin.ValueError("pow() 3rd argument cannot be 0");return m!==void 0?m.nb$remainder(w):new Sk.builtin.int_(JSBI.powermod(p(h),p(v),p(w.v)))}return new Sk.builtin.int_(JSBI.exponentiate(p(h),p(v)))}return Sk.builtin.NotImplemented.NotImplemented$},nb$long(){return new Sk.builtin.lng(this.v)}},getsets:{real:{$get:r,$doc:"the real part of a complex number"},imag:{$get(){return new Sk.builtin.int_(0)},$doc:"the imaginary part of a complex number"}},methods:{conjugate:{$meth:r,$flags:{NoArgs:!0},$textsig:null,$doc:"Returns self, the complex conjugate of any int."},bit_length:{$meth(){return new Sk.builtin.int_(Sk.builtin.bin(this).sq$length()-2)},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:`Number of bits necessary to represent self in binary.

>>> bin(37)
'0b100101'
>>> (37).bit_length()
6`},to_bytes:{$meth(){throw new Sk.builtin.NotImplementedError("Not yet implemented in Skulpt")},$flags:{FastCall:!0},$textsig:"($self, /, length, byteorder, *, signed=False)",$doc:`Return an array of bytes representing an integer.

  length
    Length of bytes object to use.  An OverflowError is raised if the
    integer is not representable with the given number of bytes.
  byteorder
    The byte order used to represent the integer.  If byteorder is 'big',
    the most significant byte is at the beginning of the byte array.  If
    byteorder is 'little', the most significant byte is at the end of the
    byte array.  To request the native byte order of the host system, use
    \`sys.byteorder' as the byte order value.
  signed
    Determines whether two's complement is used to represent the integer.
    If signed is False and a negative integer is given, an OverflowError
    is raised.`},__trunc__:{$meth:r,$flags:{NoArgs:!0},$textsig:null,$doc:"Truncating an Integral returns itself."},__floor__:{$meth:r,$flags:{NoArgs:!0},$textsig:null,$doc:"Flooring an Integral returns itself."},__ceil__:{$meth:r,$flags:{NoArgs:!0},$textsig:null,$doc:"Ceiling of an Integral returns itself."},__round__:{$meth(y){return this.round$(y)},$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:`Rounding an Integral returns itself.
Rounding with an ndigits argument also returns an integer.`},__getnewargs__:{$meth(){return new Sk.builtin.tuple([new Sk.builtin.int_(this.v)])},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:Sk.builtin.none.none$},__format__:{$meth:Sk.formatting.mkNumber__format__(!1),$flags:{OneArg:!0},$textsig:"($self, format_spec, /)",$doc:Sk.builtin.none.none$}},proto:{str$(y,w){return y=y===void 0||y===10?this.v.toString():this.v.toString(y),w||w===void 0||y[0]==="-"&&(y=y.substring(1)),y},round$(y){y=y===void 0?0:Sk.misceval.asIndexSized(y);var w=this.v,m=Math.pow(10,-y);if(0<y)return new Sk.builtin.int_(w);if(typeof w=="number"&&Sk.__future__.bankers_rounding)return y=w/m,w=Math.round(y),new Sk.builtin.int_(((0<y?y:-y)%1===.5?w%2===0?w:w-1:w)*m);if(typeof w=="number")return new Sk.builtin.int_(Math.round(w/m)*m);{m=JSBI.BigInt(10*m),y=JSBI.BigInt(10),w=JSBI.divide(w,m);const h=JSBI.divide(w,y),v=JSBI.subtract(w,JSBI.multiply(y,h));return 5>JSBI.toNumber(v)?w=JSBI.multiply(JSBI.multiply(h,y),m):JSBI.multiply(JSBI.multiply(JSBI.add(h,JSBI.BigInt(1),y),m)),new Sk.builtin.int_(w)}}}}),Sk.exportSymbol("Sk.builtin.int_",Sk.builtin.int_);const s=/_(?=[^_])/g;Sk.str2number=function(y,w){var m=y,h=!1,v;if(y=y.replace(/^\s+|\s+$/g,""),y.charAt(0)==="-"&&(h=!0,y=y.substring(1)),y.charAt(0)==="+"&&(y=y.substring(1)),w==null&&(w=10),(2>w||36<w)&&w!==0)throw new Sk.builtin.ValueError("int() base must be >= 2 and <= 36");if(typeof w=="string"&&(w=Number(w)),y.substring(0,2).toLowerCase()==="0x"){if(w===16||w===0)y=y.substring(2),w=16;else if(34>w)throw new Sk.builtin.ValueError("invalid literal for int() with base "+w+": '"+m+"'")}else if(y.substring(0,2).toLowerCase()==="0b"){if(w===2||w===0)y=y.substring(2),w=2;else if(12>w)throw new Sk.builtin.ValueError("invalid literal for int() with base "+w+": '"+m+"'")}else if(y.substring(0,2).toLowerCase()==="0o"){if(w===8||w===0)y=y.substring(2),w=8;else if(25>w)throw new Sk.builtin.ValueError("invalid literal for int() with base "+w+": '"+m+"'")}else if(y.charAt(0)==="0"){if(y==="0")return 0;(w===8||w===0)&&(w=8)}if(w===0&&(w=10),y.indexOf("_")!==-1){if(y.indexOf("__")!==-1)throw new Sk.builtin.ValueError("invalid literal for int() with base "+w+": '"+m+"'");y=w!==10?y.replace(s,""):y.charAt(0)+y.substring(1).replace(s,"")}if(y.length===0)throw new Sk.builtin.ValueError("invalid literal for int() with base "+w+": '"+m+"'");for(v=0;v<y.length;v+=1){var k=y.charCodeAt(v),A=w;if(48<=k&&57>=k?A=k-48:65<=k&&90>=k?A=k-65+10:97<=k&&122>=k&&(A=k-97+10),A>=w)throw new Sk.builtin.ValueError("invalid literal for int() with base "+w+": '"+m+"'")}if(h&&(y="-"+y),A=parseInt(y,w),i(A))return A;for(m=!1,y[0]==="-"&&(m=!0,y=y.substring(1)),w=JSBI.BigInt(w),h=JSBI.BigInt(1),v=JSBI.BigInt(0),k=y.length-1;0<=k;k--)A=y.charCodeAt(k),48<=A&&57>=A?A-=48:65<=A&&90>=A?A=A-65+10:97<=A&&122>=A&&(A=A-97+10),A=JSBI.multiply(JSBI.BigInt(A),h),v=JSBI.add(v,A),h=JSBI.multiply(h,w);return m&&(v=JSBI.multiply(v,JSBI.BigInt(-1))),y=v},Sk.builtin.int_.py2$methods={},Sk.longFromStr=function(y,w){return Sk.__future__.python3?new Sk.builtin.int_(o(y)):(y=Sk.str2number(y,w),new Sk.builtin.lng(y))},Sk.exportSymbol("Sk.longFromStr",Sk.longFromStr),Sk.builtin.int_.withinThreshold=i,Sk.builtin.int_.stringToNumberOrBig=o;const a=[.5,1,2,4,8,16,32,64,128,256,512,1024,2048,4096,8192,16384,32768,65536,131072,262144,524288,1048576,2097152,4194304,8388608,16777216,33554432,67108864,134217728,268435456,536870912,1073741824,2147483648,4294967296,8589934592,17179869184,34359738368,68719476736,137438953472,274877906944,549755813888,1099511627776,2199023255552,4398046511104,8796093022208,17592186044416,35184372088832,70368744177664,0x800000000000,281474976710656,562949953421312,0x4000000000000,0x8000000000000,4503599627370496,9007199254740992];Sk.builtin.lng=Sk.abstr.buildNativeClass("long",{base:Sk.builtin.int_,constructor:function(y){Sk.builtin.int_.call(this,y)},slots:{$r(){return new Sk.builtin.str(this.v.toString()+"L")},tp$as_number:!0,nb$negative(){return new Sk.builtin.lng($.nb$negative.call(this).v)},nb$positive(){return new Sk.builtin.lng($.nb$positive.call(this).v)}}});const $=Sk.builtin.int_.prototype},function(j,F){const e=Sk.builtin.int_.prototype;Sk.builtin.bool=Sk.abstr.buildNativeClass("bool",{constructor:function(n){return Sk.misceval.isTrue(n)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},base:Sk.builtin.int_,slots:{tp$doc:`bool(x) -> bool

Returns True when the argument x is true, False otherwise.
The builtins True and False are the only two instances of the class bool.
The class bool is a subclass of the class int, and cannot be subclassed.`,tp$new(n,t){return Sk.abstr.checkNoKwargs("bool",t),Sk.abstr.checkArgsLen("bool",n,0,1),new Sk.builtin.bool(n[0])},$r(){return this.v?this.str$True:this.str$False},tp$as_number:!0,nb$and(n){return n.ob$type===Sk.builtin.bool?new Sk.builtin.bool(this.v&n.v):e.nb$and.call(this,n)},nb$or(n){return n.ob$type===Sk.builtin.bool?new Sk.builtin.bool(this.v|n.v):e.nb$or.call(this,n)},nb$xor(n){return n.ob$type===Sk.builtin.bool?new Sk.builtin.bool(this.v^n.v):e.nb$xor.call(this,n)}},flags:{sk$acceptable_as_base_class:!1},methods:{__format__:{$meth(){return this.$r()},$flags:{OneArg:!0}}},proto:{str$False:new Sk.builtin.str("False"),str$True:new Sk.builtin.str("True")}}),Sk.exportSymbol("Sk.builtin.bool",Sk.builtin.bool),Sk.builtin.bool.true$=Object.create(Sk.builtin.bool.prototype,{v:{value:1,enumerable:!0}}),Sk.builtin.bool.false$=Object.create(Sk.builtin.bool.prototype,{v:{value:0,enumerable:!0}})},function(j,F){function e(){return new Sk.builtin.float_(this.v)}function n(s){return function(a){const $=this.v;if(a=a.v,typeof a!="number")if(JSBI.__isBigInt(a)){if(a=parseFloat(JSBI.toNumber(a)),a==1/0||a==-1/0)throw new Sk.builtin.OverflowError("int too large to convert to float")}else return Sk.builtin.NotImplemented.NotImplemented$;return s($,a)}}function t(s){const a=n(s);return function($,y){if(y!==void 0&&!Sk.builtin.checkNone(y))throw new Sk.builtin.TypeError("pow() 3rd argument not allowed unless all arguments are integers");return a.call(this,$)}}function r(s,a){if(a===0)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");return s===1/0?a===1/0||s===-1/0?new Sk.builtin.float_(NaN):0>a?new Sk.builtin.float_(-1/0):new Sk.builtin.float_(1/0):s===-1/0?a===1/0||s===-1/0?new Sk.builtin.float_(NaN):0>a?new Sk.builtin.float_(1/0):new Sk.builtin.float_(-1/0):new Sk.builtin.float_(s/a)}function l(s,a){if(s===1/0||s===-1/0)return new Sk.builtin.float_(NaN);if(a===0)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");return a===1/0?0>s?new Sk.builtin.float_(-1):new Sk.builtin.float_(0):a===-1/0?0>s||s!==0?new Sk.builtin.float_(0):new Sk.builtin.float_(-1):new Sk.builtin.float_(Math.floor(s/a))}function c(s,a){if(a===0)throw new Sk.builtin.ZeroDivisionError("integer division or modulo by zero");if(s===0)return new Sk.builtin.float_(0);if(a===1/0)return s===1/0||this.v===-1/0?new Sk.builtin.float_(NaN):0<s?new Sk.builtin.float_(s):new Sk.builtin.float_(1/0);let $=s%a;return 0>s?0<a&&0>$&&($+=a):0>a&&$!==0&&($+=a),$===0&&(0>a?$=-0:1/0/$===-1/0&&($=0)),new Sk.builtin.float_($)}function u(s,a){if(0>s&&a%1!==0)throw new Sk.builtin.ValueError("negative number cannot be raised to a fractional power");if(s===0&&0>a)throw new Sk.builtin.ZeroDivisionError("0.0 cannot be raised to a negative power");const $=Math.pow(s,a);if(Math.abs($)===1/0&&Math.abs(s)!==1/0&&Math.abs(a)!==1/0)throw new Sk.builtin.OverflowError("Numerical result out of range");return new Sk.builtin.float_($)}const i=Object.create(null,{Infinity:{value:314159},"-Infinity":{value:-314159},NaN:{value:0}});Sk.builtin.float_=Sk.abstr.buildNativeClass("float",{constructor:function(s){if(Sk.asserts.assert(this instanceof Sk.builtin.float_,"bad call to float use 'new'"),typeof s=="number")this.v=s;else if(s===void 0)this.v=0;else if(typeof s=="string")this.v=parseFloat(s);else{if(s.nb$float)return s.nb$float();Sk.asserts.fail("bad argument to float constructor")}},slots:{tp$gettattr:Sk.generic.getAttr,tp$as_number:!0,tp$doc:"Convert a string or number to a floating point number, if possible.",tp$hash(){const s=this.v;let a=i[s];return a!==void 0?a:(a=Number.isInteger(s)?this.nb$int().tp$hash():Math.floor(Math.random()*Number.MAX_SAFE_INTEGER-Number.MAX_SAFE_INTEGER/2),i[this.v]=a)},$r(){return new Sk.builtin.str(this.str$(10,!0))},tp$new(s,a){if(a&&a.length)throw new Sk.builtin.TypeError("float() takes no keyword arguments");if(s&&1<s.length)throw new Sk.builtin.TypeError("float expected at most 1 arguments, got "+s.length);if(s=s[0],s===void 0)var $=new Sk.builtin.float_(0);else if(s.nb$float)$=s.nb$float();else if(Sk.builtin.checkString(s)){if($=s.v,s=$,$.indexOf("_")!==-1){if(o.test($))throw new Sk.builtin.ValueError("could not convert string to float: '"+$+"'");s=$.charAt(0)+$.substring(1).replace(p,"")}if($.match(/^-inf$/i))var y=-1/0;else $.match(/^[+]?inf$/i)?y=1/0:$.match(/^[-+]?nan$/i)?y=NaN:isNaN(s)||(y=parseFloat(s),Number.isNaN(y)&&(y=void 0));if(y===void 0)throw new Sk.builtin.ValueError("could not convert string to float: "+Sk.misceval.objectRepr(new Sk.builtin.str($)));$=new Sk.builtin.float_(y)}if($===void 0)throw new Sk.builtin.TypeError("float() argument must be a string or a number");return this===Sk.builtin.float_.prototype?$:(y=new this.constructor,y.v=$.v,y)},nb$int(){let s=this.v;if(s=0>s?Math.ceil(s):Math.floor(s),!Number.isInteger(s))throw new Sk.builtin.ValueError("cannot convert float "+Sk.misceval.objectRepr(this)+" to integer");return Sk.builtin.int_.withinThreshold(s)?new Sk.builtin.int_(s):new Sk.builtin.int_(JSBI.BigInt(s))},nb$float:e,nb$long(){return new Sk.builtin.lng(this.nb$int().v)},nb$add:n((s,a)=>new Sk.builtin.float_(s+a)),nb$subtract:n((s,a)=>new Sk.builtin.float_(s-a)),nb$reflected_subtract:n((s,a)=>new Sk.builtin.float_(a-s)),nb$multiply:n((s,a)=>new Sk.builtin.float_(s*a)),nb$divide:n(r),nb$reflected_divide:n((s,a)=>r(a,s)),nb$floor_divide:n(l),nb$reflected_floor_divide:n((s,a)=>l(a,s)),nb$remainder:n(c),nb$reflected_remainder:n((s,a)=>c(a,s)),nb$divmod:n((s,a)=>new Sk.builtin.tuple([l(s,a),c(s,a)])),nb$reflected_divmod:n((s,a)=>new Sk.builtin.tuple([l(a,s),c(a,s)])),nb$power:t(u),nb$reflected_power:t((s,a)=>u(a,s)),nb$abs(){return new Sk.builtin.float_(Math.abs(this.v))},nb$negative(){return new Sk.builtin.float_(-this.v)},nb$positive(){return new Sk.builtin.float_(this.v)},nb$bool(){return this.v!==0},nb$isnegative(){return 0>this.v},nb$ispositive(){return 0<=this.v},ob$eq:n((s,a)=>s==a),ob$ne:n((s,a)=>s!=a),ob$gt:n((s,a)=>s>a),ob$ge:n((s,a)=>s>=a),ob$lt:n((s,a)=>s<a),ob$le:n((s,a)=>s<=a)},getsets:{real:{$get:e,$doc:"the real part of a complex number"},imag:{$get(){return new Sk.builtin.float_(0)},$doc:"the imaginary part of a complex number"}},methods:{conjugate:{$meth:e,$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return self, the complex conjugate of any float."},__trunc__:{$meth(){return this.nb$int()},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return the Integral closest to x between 0 and x."},__round__:{$meth(s){return this.round$(s)},$flags:{MinArgs:0,MaxArgs:1},$textsig:"($self, ndigits=None, /)",$doc:`Return the Integral closest to x, rounding half toward even.

When an argument is passed, work like built-in round(x, ndigits).`},is_integer:{$meth(){return new Sk.builtin.bool(Number.isInteger(this.v))},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:"Return True if the float is an integer."},__getnewargs__:{$meth(){return new Sk.builtin.tuple([this])},$flags:{NoArgs:!0},$textsig:"($self, /)",$doc:Sk.builtin.none.none$},__format__:{$meth:Sk.formatting.mkNumber__format__(!0),$flags:{OneArg:!0},$textsig:"($self, format_spec, /)",$doc:Sk.builtin.none.none$}}});const o=/_[eE]|[eE]_|\._|_\.|[+-]_|__/,p=/_(?=[^_])/g;Sk.builtin.float_.PyFloat_Check=function(s){return s===void 0?!1:!!(Sk.builtin.checkNumber(s)||Sk.builtin.checkFloat(s)||s.ob$type.$isSubType(Sk.builtin.float_))},Sk.builtin.float_.prototype.toFixed=function(s){return s=Sk.builtin.asnum$(s),this.v.toFixed(s)},Sk.builtin.float_.prototype.round$=function(s){var a=Sk.builtin.asnum$(this),$=s===void 0?0:Sk.misceval.asIndexSized(s);if(Sk.__future__.bankers_rounding){a*=Math.pow(10,$);var y=Math.round(a);return $=((0<a?a:-a)%1===.5?y%2===0?y:y-1:y)/Math.pow(10,$),s===void 0?new Sk.builtin.int_($):new Sk.builtin.float_($)}return s=Math.pow(10,$),$=Math.round(a*s)/s,new Sk.builtin.float_($)},Sk.builtin.float_.prototype.str$=function(s,a){if(isNaN(this.v))return"nan";if(a===void 0&&(a=!0),this.v==1/0)return"inf";if(this.v==-1/0&&a)return"-inf";if(this.v==-1/0&&!a)return"inf";if(a=a?this.v:Math.abs(this.v),s===void 0||s===10){var $=Sk.__future__.python3?a.toPrecision(16):a.toPrecision(12),y=$.indexOf(".");if(s=a.toString().slice(0,y),y=a.toString().slice(y),s.match(/^-?0$/)&&y.slice(1).match(/^0{4,}/)&&($=12>$.length?a.toExponential():a.toExponential(11)),0>$.indexOf("e")&&0<=$.indexOf(".")){for(;$.charAt($.length-1)=="0";)$=$.substring(0,$.length-1);$.charAt($.length-1)=="."&&($+="0")}$=$.replace(/\.0+e/,"e","i"),$=$.replace(/(e[-+])([1-9])$/,"$10$2"),$=$.replace(/0+(e.*)/,"$1")}else $=a.toString(s);return this.v===0&&1/this.v===-1/0&&($="-"+$),0>$.indexOf(".")&&0>$.indexOf("E")&&0>$.indexOf("e")&&($+=".0"),$},Sk.builtin.float_.py2$methods={}},function(j,F){function e(a){let $=a.v;if(typeof $=="number")return $;if(a.nb$float&&($=a.nb$float()),$===void 0)throw new Sk.builtin.TypeError("a float is required");return $.v}function n(a,$,y){return y===Sk.builtin.complex.prototype?new Sk.builtin.complex(a,$):(y=new y.constructor,Sk.builtin.complex.call(y,a,$),y)}function t(a,$){return function(y){const w=this.real,m=this.imag;var h=y.real;const v=y.v;if(typeof h=="number")y=y.imag;else if(typeof v=="number")h=v,y=0;else if(JSBI.__isBigInt(v)){if($===void 0){if(h=parseFloat(JSBI.toNumber(v)),h==1/0||h==-1/0)throw new Sk.builtin.OverflowError("int too large to convert to float")}else h=v.toString();y=0}else return Sk.builtin.NotImplemented.NotImplemented$;return a(w,m,h,y)}}function r(a,$,y,w){var m=Math.abs(y);const h=Math.abs(w);if(m>=h){if(m===0)throw new Sk.builtin.ZeroDivisionError("complex division by zero");m=w/y,y+=w*m,w=(a+$*m)/y,a=($-a*m)/y}else h>=m?(m=y/w,y=y*m+w,Sk.asserts.assert(w!==0),w=(a*m+$)/y,a=($*m-a)/y):a=w=NaN;return new Sk.builtin.complex(w,a)}function l(a,$,y,w){if(y===0&&w===0){w=1;var m=0}else if(a===0&&$===0){if(w!==0||0>y)throw new Sk.builtin.ZeroDivisionError("complex division by zero");m=w=0}else{const h=Math.hypot(a,$);m=Math.pow(h,y),a=Math.atan2($,a),y*=a,w!==0&&(m/=Math.exp(a*w),y+=w*Math.log(h)),w=m*Math.cos(y),m*=Math.sin(y)}return new Sk.builtin.complex(w,m)}function c(a,$,y){let w=1;var m=new Sk.builtin.complex(1,0);for(a=new Sk.builtin.complex(a,$);0<w&&y>=w;)y&w&&(m=new Sk.builtin.complex(m.real*a.real-m.imag*a.imag,m.real*a.imag+a.real*m.imag)),w<<=1,a=new Sk.builtin.complex(a.real*a.real-a.imag*a.imag,2*a.real*a.imag);return m}function u(a,$,y,w,m){switch(m=!1,$){case"e":case"f":case"g":break;case"E":m=!0,$="e";break;case"F":m=!0,$="f";break;case"r":if(y!==0)throw Error("Bad internall call");y=17,$="g";break;default:throw Error("Bad internall call")}if(isNaN(a))a="nan";else if(a===1/0)a="inf";else if(a===-1/0)a="-inf";else{w&u.Py_DTSF_ADD_DOT_0&&($="g");var h="%"+(w&u.Py_DTSF_ALT?"#":"");y!=null&&(h=h+"."+y),h=new Sk.builtin.str(h+$),a=h.nb$remainder(new Sk.builtin.float_(a)),a=a.v}return w&u.Py_DTSF_SIGN&&a[0]!=="-"&&(a="+"+a),m&&(a=a.toUpperCase()),a}Sk.builtin.complex=Sk.abstr.buildNativeClass("complex",{constructor:function(a,$){Sk.asserts.assert(this instanceof Sk.builtin.complex,"bad call to complex constructor, use 'new'"),this.real=a,this.imag=$},slots:{tp$as_number:!0,tp$doc:`Create a complex number from a real part and an optional imaginary part.

This is equivalent to (real + imag*1j) where imag defaults to 0.`,tp$hash(){var a=new Sk.builtin.float_(this.real).tp$hash();return a=1003*new Sk.builtin.float_(this.imag).tp$hash()+a,Sk.builtin.int_.withinThreshold(a)?a:new Sk.builtin.int_(JSBI.BigInt(a)).tp$hash()},tp$getattr:Sk.generic.getAttr,tp$new(a,$){a=Sk.abstr.copyKeywordsToNamedArgs("complex",["real","imag"],a,$,[null,null]);{var y=a[1],w;let h=$=!1;var m=a[0];if(m!=null&&m.constructor===Sk.builtin.complex&&y==null)$=m;else if(Sk.builtin.checkString(m)){if(y!=null)throw new Sk.builtin.TypeError("complex() can't take second arg if first is a string");$=Sk.builtin.complex.complex_subtype_from_string(m,this)}else{if(y!=null&&Sk.builtin.checkString(y))throw new Sk.builtin.TypeError("complex() second arg can't be a string");if(m==null?a=null:(a=Sk.abstr.lookupSpecial(m,Sk.builtin.str.$complex),a=a!==void 0?Sk.misceval.callsimArray(a,[]):null),a!=null&&a!==Sk.builtin.NotImplemented.NotImplemented$){if(!i(a))throw new Sk.builtin.TypeError("__complex__ should return a complex object");m=a}if(m!=null&&m.nb$float===void 0)throw new Sk.builtin.TypeError("complex() first argument must be a string or a number, not '"+Sk.abstr.typeName(m)+"'");if(y!=null&&y.nb$float===void 0)throw new Sk.builtin.TypeError("complex() second argument must be a number, not '"+Sk.abstr.typeName(m)+"'");m==null?m=a=0:i(m)?(a=m.real,m=m.imag,$=!0):(a=e(m),m=0),y==null?y=w=0:i(y)?(w=y.real,y=y.imag,h=!0):(w=e(y),y=0),h===!0&&(a-=y),$===!0&&(w+=m),$=n(a,w,this)}}return $},tp$richcompare(a,$){if($!=="Eq"&&$!=="NotEq"){if(Sk.builtin.checkNumber(a)||i(a))throw new Sk.builtin.TypeError("no ordering relation is defined for complex numbers");return Sk.builtin.NotImplemented.NotImplemented$}return t(function(y,w,m,h){return y=y==m&&w==h,$==="Eq"?y:!y},!0).call(this,a)},$r(){{var a,$;let m=a="";var y=this.real,w=this.imag;($=y===0)&&($=(y?0>y?-1:1:0>1/y?-1:1)==1),$?(y="",$=u(w,"g",null,0,null)):(y=a=u(y,"g",null,0,null),$=u(w,"g",null,u.Py_DTSF_SIGN,null),w===0&&1/w===-1/0&&$&&$[0]!=="-"&&($="-"+$),a="(",m=")"),w=new Sk.builtin.str(""+a+y+$+"j"+m)}return w},nb$int(){throw new Sk.builtin.TypeError("can't convert complex to int")},nb$long(){throw new Sk.builtin.TypeError("can't convert complex to long")},nb$float(){throw new Sk.builtin.TypeError("can't convert complex to float")},nb$positive(){return new Sk.builtin.complex(this.real,this.imag)},nb$negative(){return new Sk.builtin.complex(-this.real,-this.imag)},nb$bool(){return this.real||this.imag},nb$add:t((a,$,y,w)=>new Sk.builtin.complex(a+y,$+w)),nb$subtract:t((a,$,y,w)=>new Sk.builtin.complex(a-y,$-w)),nb$reflected_subtract:t((a,$,y,w)=>new Sk.builtin.complex(y-a,w-$)),nb$multiply:t((a,$,y,w)=>new Sk.builtin.complex(y*a-w*$,a*w+$*y)),nb$divide:t(r),nb$reflected_divide:t((a,$,y,w)=>r(y,w,a,$)),nb$floor_divide(a){throw new Sk.builtin.TypeError("can't take floor of complex number.")},nb$reflected_floor_divide(a){throw new Sk.builtin.TypeError("can't take floor of complex number.")},nb$remainder(a){throw new Sk.builtin.TypeError("can't mod complex numbers.")},nb$reflected_remainder(a){throw new Sk.builtin.TypeError("can't mod complex numbers.")},nb$divmod(a){throw new Sk.builtin.TypeError("can't take floor or mod of complex number.")},nb$power(a,$){if($!=null&&!Sk.builtin.checkNone($))throw new Sk.builtin.ValueError("complex modulo");return s.call(this,a)},nb$abs(){var a=this.real;const $=this.imag;if(!Number.isFinite(a)||!Number.isFinite($))return a===1/0||a===-1/0?new Sk.builtin.float_(Math.abs(a)):$===1/0||$===-1/0?new Sk.builtin.float_(Math.abs($)):new Sk.builtin.float_(NaN);if(a=Math.hypot(a,$),!Number.isFinite(a))throw new Sk.builtin.OverflowError("absolute value too large");return new Sk.builtin.float_(a)}},getsets:{real:{$get(){return new Sk.builtin.float_(this.real)},$doc:"the real part of a complex number"},imag:{$get(){return new Sk.builtin.float_(this.imag)},$doc:"the imaginary part of a complex number"}},methods:{conjugate:{$meth(){return new Sk.builtin.complex(this.real,-this.imag)},$flags:{NoArgs:!0},$textsig:null,$doc:`complex.conjugate() -> complex

Return the complex conjugate of its argument. (3-4j).conjugate() == 3+4j.`},__getnewargs__:{$meth(){return new Sk.builtin.tuple([new Sk.builtin.float_(this.real),new Sk.builtin.float_(this.imag)])},$flags:{NoArgs:!0},$textsig:null,$doc:Sk.builtin.none.none$},__format__:{$meth(a){throw Sk.builtin.checkString(a)?new Sk.builtin.NotImplementedError("__format__ is not implemented for complex type."):new Sk.builtin.TypeError("__format__ requires str")},$flags:{OneArg:!0},$textsig:null,$doc:`complex.__format__() -> str

Convert to a string according to format_spec.`}}}),Sk.exportSymbol("Sk.builtin.complex",Sk.builtin.complex);const i=Sk.builtin.checkComplex,o=/_[eE]|[eE]_|\._|_\.|[+-]_|_j|j_/,p=/_(?=[^_])/g;Sk.builtin.complex.complex_subtype_from_string=function(a,$){$=$||Sk.builtin.complex.prototype;var y=0,w=0,m=!1;if(Sk.builtin.checkString(a))a=Sk.ffi.remapToJs(a);else if(typeof a!="string")throw new TypeError("provided unsupported string-alike argument");if(a.indexOf("\0")!==-1||a.length===0||a==="")throw new Sk.builtin.ValueError("complex() arg is a malformed string");var h=0;for(a=a.replace(/inf|infinity/gi,"Infinity"),a=a.replace(/nan/gi,"NaN");a[h]===" ";)h++;if(a[h]==="(")for(m=!0,h++;a[h]===" ";)h++;if(a.indexOf("_")!==-1){if(o.test(a))throw new Sk.builtin.ValueError("could not convert string to complex: '"+a+"'");a=a.charAt(0)+a.substring(1).replace(p,"")}var v=/^(?:[+-]?(?:(?:(?:\d*\.\d+)|(?:\d+\.?))(?:[eE][+-]?\d+)?|NaN|Infinity))/,k=a.substr(h),A=k.match(v);if(A!==null)if(h+=A[0].length,a[h]==="j"||a[h]==="J")w=parseFloat(A[0]),h++;else if(a[h]==="+"||a[h]==="-"){if(y=parseFloat(A[0]),A=a.substr(h).match(v),A!==null?(w=parseFloat(A[0]),h+=A[0].length):(w=a[h]==="+"?1:-1,h++),a[h]!=="j"&&a[h]!=="J")throw new Sk.builtin.ValueError("complex() arg is malformed string");h++}else y=parseFloat(A[0]);else A=A=k.match(/^([+-]?[jJ])/),A!==null&&(w=A[0].length===1||A[0][0]==="+"?1:-1,h+=A[0].length);for(;a[h]===" ";)h++;if(m){if(a[h]!==")")throw new Sk.builtin.ValueError("complex() arg is malformed string");for(h++;a[h]===" ";)h++}if(a.length!==h)throw new Sk.builtin.ValueError("complex() arg is malformed string");return n(y,w,$)};const s=t((a,$,y,w)=>{const m=y|0;return w===0&&y===m?(100<m||-100>m?a=l(a,$,m,0):0<m?a=c(a,$,m):(a=c(a,$,-m),a=r(1,0,a.real,a.imag)),a):l(a,$,y,w)});u.Py_DTSF_SIGN=1,u.Py_DTSF_ADD_DOT_0=2,u.Py_DTSF_ALT=4,u.Py_DTST_FINITE=0,u.Py_DTST_INFINITE=1,u.Py_DTST_NAN=2},function(j,F){Sk.builtin.slice=Sk.abstr.buildNativeClass("slice",{constructor:function(e,n,t){n===void 0&&t===void 0&&(n=e,e=Sk.builtin.none.none$),n===void 0&&(n=Sk.builtin.none.none$),t===void 0&&(t=Sk.builtin.none.none$),this.start=e,this.stop=n,this.step=t},slots:{tp$getattr:Sk.generic.getAttr,tp$doc:`slice(stop)
slice(start, stop[, step])

Create a slice object.  This is used for extended slicing (e.g. a[0:10:2]).`,tp$hash:Sk.builtin.none.none$,tp$new(e,n){return Sk.abstr.checkNoKwargs("slice",n),Sk.abstr.checkArgsLen("slice",e,1,3),new Sk.builtin.slice(...e)},$r(){const e=Sk.misceval.objectRepr(this.start),n=Sk.misceval.objectRepr(this.stop),t=Sk.misceval.objectRepr(this.step);return new Sk.builtin.str("slice("+e+", "+n+", "+t+")")},tp$richcompare(e,n){if(e.ob$type!==Sk.builtin.slice)return Sk.builtin.NotImplemented.NotImplemented$;const t=new Sk.builtin.tuple([this.start,this.stop,this.step]);return e=new Sk.builtin.tuple([e.start,e.stop,e.step]),t.tp$richcompare(e,n)}},getsets:{start:{$get(){return this.start}},step:{$get(){return this.step}},stop:{$get(){return this.stop}}},methods:{indices:{$meth:function(e){if(e=Sk.misceval.asIndexSized(e,Sk.builtin.OverflowError),0>e)throw new Sk.builtin.TypeError("length should not be negative");const{start:n,stop:t,step:r}=this.slice$indices(e);return new Sk.builtin.tuple([new Sk.builtin.int_(n),new Sk.builtin.int_(t),new Sk.builtin.int_(r)])},$doc:`S.indices(len) -> (start, stop, stride)

Assuming a sequence of length len, calculate the start and stop
indices, and the stride length of the extended slice described by
S. Out of bounds indices are clipped in a manner consistent with the
handling of normal slices.`,$textsig:null,$flags:{OneArg:!0}}},proto:{slice$as_indices(e){let n;var t=e?r=>Sk.misceval.asIndexSized(r,null,"slice indices must be integers or None or have an __index__ method"):r=>Sk.misceval.asIndexOrThrow(r,"slice indices must be integers or None or have an __index__ method");if(Sk.builtin.checkNone(this.step))n=1;else if(n=t(this.step),n===0)throw new Sk.builtin.ValueError("slice step cannot be zero");return e=Sk.builtin.checkNone(this.start)?null:t(this.start),t=Sk.builtin.checkNone(this.stop)?null:t(this.stop),{start:e,stop:t,step:n}},$wrt(e,n,t,r,l){return l=l?c=>JSBI.__isBigInt(c)?JSBI.add(c,JSBI.BigInt(e)):c+e:c=>c+e,0<r?(n===null?n=0:0>n&&(n=l(n),0>n&&(n=0)),t===null||t>e?t=e:0>t&&(t=l(t))):(n===null||n>=e?n=e-1:0>n&&(n=l(n)),t===null?t=-1:0>t&&(t=l(t),0>t&&(t=-1))),{start:n,stop:t,step:r}},slice$indices(e,n){let{start:t,stop:r,step:l}=this.slice$as_indices(!0,n);return this.$wrt(e,t,r,l,n)},sssiter$(e,n){let{start:t,stop:r,step:l}=this.slice$indices(e,!0);if(0<l)for(e=t;e<r;e+=l)n(e);else for(e=t;e>r;e+=l)n(e)}},flags:{sk$acceptable_as_base_class:!1}}),Sk.builtin.slice.startEnd$wrt=function(e,n,t){return e=e.sq$length(),n===void 0||Sk.builtin.checkNone(n)?n=0:(n=Sk.misceval.asIndexSized(n,null,"slice indices must be integers or have an __index__ method"),0>n&&(n+=e,0>n&&(n=0))),t===void 0||Sk.builtin.checkNone(t)?t=e:(t=Sk.misceval.asIndexSized(t,null,"slice indices must be integers or have an __index__ method"),0>t?(t+=e,0>t&&(t=0)):t>e&&(t=e)),{start:n,end:t}}},function(j,F){function e(r){return function(l){return Sk.builtin.checkAnySet(l)?r.call(this,l):Sk.builtin.NotImplemented.NotImplemented$}}function n(r){return r instanceof Sk.builtin.set&&r.tp$hash===Sk.builtin.none.none$&&(r=new Sk.builtin.frozenset(Sk.misceval.arrayFromIterable(r))),r}j={},Sk.builtin.set=Sk.abstr.buildNativeClass("set",{constructor:function(r){r===void 0?r=[]:Array.isArray(r)||(r=Sk.misceval.arrayFromIterable(r)),Sk.asserts.assert(this instanceof Sk.builtin.set,"Bad call to set - must be called with an Array and 'new'");const l=[];for(let c=0;c<r.length;c++)l.push(r[c]),l.push(!0);this.v=new Sk.builtin.dict(l),this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_number:!0,tp$as_sequence_or_mapping:!0,tp$hash:Sk.builtin.none.none$,tp$doc:`set() -> new empty set object
set(iterable) -> new set object

Build an unordered collection of unique elements.`,tp$init(r,l){return Sk.abstr.checkNoKwargs("set",l),Sk.abstr.checkArgsLen("set",r,0,1),this.set$clear(),(r=r[0])&&this.set$update(r)},tp$new:Sk.generic.new,$r(){if(this.in$repr)return new Sk.builtin.str(Sk.abstr.typeName(this)+"(...)");this.in$repr=!0;const r=this.sk$asarray().map(l=>Sk.misceval.objectRepr(l));return this.in$repr=!1,Sk.__future__.python3?r.length===0?new Sk.builtin.str(Sk.abstr.typeName(this)+"()"):this.ob$type!==Sk.builtin.set?new Sk.builtin.str(Sk.abstr.typeName(this)+"({"+r.join(", ")+"})"):new Sk.builtin.str("{"+r.join(", ")+"}"):new Sk.builtin.str(Sk.abstr.typeName(this)+"(["+r.join(", ")+"])")},tp$iter(){return new t(this)},tp$richcompare(r,l){if(!Sk.builtin.checkAnySet(r))return Sk.builtin.NotImplemented.NotImplemented$;switch(l){case"NotEq":case"Eq":return r=this===r?!0:this.get$size()!==r.get$size()?!1:Sk.misceval.isTrue(this.set$issubset(r)),l==="Eq"?r:!r;case"LtE":return this===r||Sk.misceval.isTrue(this.set$issubset(r));case"GtE":return this===r||Sk.misceval.isTrue(r.set$issubset(this));case"Lt":return this.get$size()<r.get$size()&&Sk.misceval.isTrue(this.set$issubset(r));case"Gt":return this.get$size()>r.get$size()&&Sk.misceval.isTrue(r.set$issubset(this))}},nb$subtract:e(function(r){return this.difference.$meth.call(this,r)}),nb$and:e(function(r){return this.intersection.$meth.call(this,r)}),nb$or:e(function(r){return this.union.$meth.call(this,r)}),nb$xor:e(function(r){return this.symmetric_difference.$meth.call(this,r)}),nb$inplace_subtract:e(function(r){return r===this&&(r=r.set$copy()),Sk.misceval.chain(this.difference_update.$meth.call(this,r),()=>this)}),nb$inplace_and:e(function(r){return Sk.misceval.chain(this.intersection_update.$meth.call(this,r),()=>this)}),nb$inplace_or:e(function(r){return Sk.misceval.chain(this.update.$meth.call(this,r),()=>this)}),nb$inplace_xor:e(function(r){return r===this&&(r=r.set$copy()),Sk.misceval.chain(this.symmetric_difference_update.$meth.call(this,r),()=>this)}),sq$length(){return this.get$size()},sq$contains(r){return r=n(r),this.v.sq$contains(r)}},methods:{add:{$meth(r){return this.set$add(r),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:`Add an element to a set.

This has no effect if the element is already present.`},clear:{$meth(){return this.set$clear(),Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove all elements from this set."},copy:{$meth(){return this.set$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a shallow copy of a set."},discard:{$meth(r){return r=n(r),this.set$discard(r),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:`Remove an element from a set if it is a member.

If the element is not a member, do nothing.`},difference:{$meth(...r){const l=this.set$copy();return Sk.misceval.chain(Sk.misceval.iterArray(r,c=>l.set$difference_update(c)),()=>l)},$flags:{MinArgs:0},$textsig:null,$doc:`Return the difference of two or more sets as a new set.

(i.e. all elements that are in this set but not the others.)`},difference_update:{$meth(...r){return Sk.misceval.chain(Sk.misceval.iterArray(r,l=>this.set$difference_update(l)),()=>Sk.builtin.none.none$)},$flags:{MinArgs:0},$textsig:null,$doc:"Remove all elements of another set from this set."},intersection:{$meth(...r){return this.set$intersection_multi(...r)},$flags:{MinArgs:0},$textsig:null,$doc:`Return the intersection of two sets as a new set.

(i.e. all elements that are in both sets.)`},intersection_update:{$meth(...r){return Sk.misceval.chain(this.set$intersection_multi(...r),l=>(this.swap$bodies(l),Sk.builtin.none.none$))},$flags:{MinArgs:0},$textsig:null,$doc:"Update a set with the intersection of itself and another."},isdisjoint:{$meth(r){return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(r),l=>{if(this.sq$contains(l))return new Sk.misceval.Break(Sk.builtin.bool.false$)}),l=>l||Sk.builtin.bool.true$)},$flags:{OneArg:!0},$textsig:null,$doc:"Return True if two sets have a null intersection."},issubset:{$meth(r){return Sk.builtin.checkAnySet(r)||(r=this.set$make_basetype(r)),Sk.misceval.chain(r,l=>this.set$issubset(l))},$flags:{OneArg:!0},$textsig:null,$doc:"Report whether another set contains this set."},issuperset:{$meth(r){return Sk.builtin.checkAnySet(r)||(r=this.set$make_basetype(r)),Sk.misceval.chain(r,l=>l.set$issubset(this))},$flags:{OneArg:!0},$textsig:null,$doc:"Report whether this set contains another set."},pop:{$meth(){if(this.get$size()===0)throw new Sk.builtin.KeyError("pop from an empty set");return Sk.misceval.callsimArray(this.v.popitem,[this.v]).v[0]},$flags:{NoArgs:!0},$textsig:null,$doc:`Remove and return an arbitrary set element.
Raises KeyError if the set is empty.`},remove:{$meth(r){const l=n(r);if(this.v.mp$lookup(l))return this.v.mp$ass_subscript(l),Sk.builtin.none.none$;throw new Sk.builtin.KeyError(r)},$flags:{OneArg:!0},$textsig:null,$doc:`Remove an element from a set; it must be a member.

If the element is not a member, raise a KeyError.`},symmetric_difference:{$meth(r){let l;return Sk.misceval.chain(this.set$make_basetype(r),c=>(l=c,l.set$symmetric_diff_update(this)),()=>l)},$flags:{OneArg:!0},$textsig:null,$doc:`Return the symmetric difference of two sets as a new set.

(i.e. all elements that are in exactly one of the sets.)`},symmetric_difference_update:{$meth(r){return Sk.builtin.checkAnySet(r)||(r=this.set$make_basetype(r)),Sk.misceval.chain(r,l=>this.set$symmetric_diff_update(l),()=>Sk.builtin.none.none$)},$flags:{OneArg:!0},$textsig:null,$doc:"Update a set with the symmetric difference of itself and another."},union:{$meth(...r){const l=this.set$copy();return Sk.misceval.chain(Sk.misceval.iterArray(r,c=>l.set$update(c)),()=>l)},$flags:{MinArgs:0},$textsig:null,$doc:`Return the union of sets as a new set.

(i.e. all elements that are in either set.)`},update:{$meth(...r){return Sk.misceval.chain(Sk.misceval.iterArray(r,l=>this.set$update(l)),()=>Sk.builtin.none.none$)},$flags:{MinArgs:0},$textsig:null,$doc:"Update a set with the union of itself and others."}},proto:Object.assign(j,{sk$asarray(){return this.v.sk$asarray()},get$size(){return this.v.sq$length()},set$add(r){this.v.mp$ass_subscript(r,!0)},set$make_basetype(r){return Sk.misceval.chain(Sk.misceval.arrayFromIterable(r,!0),l=>new this.sk$builtinBase(l))},set$discard(r){return this.v.pop$item(r)},set$clear(){this.v=new Sk.builtin.dict([])},set$copy(){const r=new this.sk$builtinBase;return r.v=this.v.dict$copy(),r},set$difference_update(r){return Sk.misceval.iterFor(Sk.abstr.iter(r),l=>{this.set$discard(l)})},set$intersection(r){const l=new this.sk$builtinBase;return Sk.misceval.chain(Sk.misceval.iterFor(Sk.abstr.iter(r),c=>{this.sq$contains(c)&&l.set$add(c)}),()=>l)},set$intersection_multi(...r){if(!r.length)return this.set$copy();let l=this;return Sk.misceval.chain(Sk.misceval.iterArray(r,c=>Sk.misceval.chain(l.set$intersection(c),u=>{l=u})),()=>l)},set$issubset(r){const l=this.get$size(),c=r.get$size();if(l>c)return Sk.builtin.bool.false$;for(let u=this.tp$iter(),i=u.tp$iternext();i!==void 0;i=u.tp$iternext())if(!r.sq$contains(i))return Sk.builtin.bool.false$;return Sk.builtin.bool.true$},set$symmetric_diff_update(r){return Sk.misceval.iterFor(Sk.abstr.iter(r),l=>{this.set$discard(l)===void 0&&this.set$add(l)})},set$update(r){return Sk.misceval.iterFor(Sk.abstr.iter(r),l=>{this.set$add(l)})},swap$bodies(r){this.v=r.v}})}),Sk.exportSymbol("Sk.builtin.set",Sk.builtin.set),F=Sk.builtin.set.prototype,Sk.builtin.frozenset=Sk.abstr.buildNativeClass("frozenset",{constructor:function(r){r===void 0&&(r=[]),Sk.asserts.assert(Array.isArray(r)&&this instanceof Sk.builtin.frozenset,"bad call to frozen set - must be called with an Array and 'new'");const l=[];for(let c=0;c<r.length;c++)l.push(r[c]),l.push(!0);this.v=new Sk.builtin.dict(l),this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$as_number:!0,tp$as_sequence_or_mapping:!0,tp$doc:`frozenset() -> empty frozenset object
frozenset(iterable) -> frozenset object

Build an immutable unordered collection of unique elements.`,tp$hash(){let r=1927868237;const l=this.sk$asarray();r*=l.length+1;for(let c=0;c<l.length;c++){const u=Sk.abstr.objectHash(l[c]);r^=3644798167*(u^u<<16^89869747)}return 69069*r+907133923},tp$new(r,l){return this!==Sk.builtin.frozenset.prototype?this.$subtype_new(r,l):(Sk.abstr.checkNoKwargs("frozenset",l),Sk.abstr.checkArgsLen("frozenset",r,0,1),r=r[0],r!==void 0&&r.ob$type===Sk.builtin.frozenset?r:Sk.misceval.chain(Sk.misceval.arrayFromIterable(r,!0),c=>c.length?new Sk.builtin.frozenset(c):Sk.builtin.frozenset.$emptyset))},$r:F.$r,tp$iter:F.tp$iter,tp$richcompare:F.tp$richcompare,nb$subtract:F.nb$subtract,nb$and:F.nb$and,nb$or:F.nb$or,nb$xor:F.nb$xor,sq$length:F.sq$length,sq$contains:F.sq$contains},methods:{copy:Object.assign({},F.copy.d$def,{$meth(){return this.constructor===this.sk$builtinBase?this:new Sk.builtin.frozenset(this.sk$asarray())}}),difference:F.difference.d$def,intersection:F.intersection.d$def,isdisjoint:F.isdisjoint.d$def,issubset:F.issubset.d$def,issuperset:F.issuperset.d$def,symmetric_difference:F.symmetric_difference.d$def,union:F.union.d$def},proto:Object.assign({$subtype_new(r,l){const c=new this.constructor;return Sk.misceval.chain(Sk.builtin.frozenset.prototype.tp$new(r),u=>(c.v=u.v,c))}},j)}),Sk.builtin.frozenset.$emptyset=Object.create(Sk.builtin.frozenset.prototype,{v:{value:new Sk.builtin.dict([]),enumerable:!0},in$repr:{value:!1,enumerable:!0}}),Sk.exportSymbol("Sk.builtin.frozenset",Sk.builtin.frozenset);var t=Sk.abstr.buildIteratorClass("set_iterator",{constructor:function(r){this.$index=0,this.$seq=r.sk$asarray(),this.$orig=r},iternext:Sk.generic.iterNextWithArrayCheckSize,methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}})},function(j,F){Sk.builtin.print=function(e,n){let[t,r,l]=Sk.abstr.copyKeywordsToNamedArgs("print",["sep","end","file","flush"],[],n);if(t===void 0||Sk.builtin.checkNone(t))t=" ";else if(Sk.builtin.checkString(t))t=t.$jsstr();else throw new Sk.builtin.TypeError("sep must be None or a string, not "+Sk.abstr.typeName(t));if(r===void 0||Sk.builtin.checkNone(r))r=`
`;else if(Sk.builtin.checkString(r))r=r.$jsstr();else throw new Sk.builtin.TypeError("end must be None or a string, not "+Sk.abstr.typeName(r));let c;if(l!==void 0&&!Sk.builtin.checkNone(l)&&(c=Sk.abstr.lookupSpecial(l,Sk.builtin.str.$write),c===void 0))throw new Sk.builtin.AttributeError("'"+Sk.abstr.typeName(l)+"' object has no attribute 'write'");const u=new Sk.builtin.str(e.map(i=>new Sk.builtin.str(i).toString()).join(t)+r);if(c!==void 0)Sk.misceval.callsimArray(c,[u]);else return Sk.misceval.chain(Sk.importModule("sys",!1,!0),i=>(c=Sk.abstr.lookupSpecial(i.$d.stdout,Sk.builtin.str.$write))&&Sk.misceval.callsimOrSuspendArray(c,[u]))},Sk.builtin.print.co_fastcall=1},function(j,F){Sk.builtin.module=Sk.abstr.buildNativeClass("module",{constructor:function(){this.$d={}},slots:{tp$doc:`Create a module object.

The name must be a string; the optional doc argument can have any type.`,tp$getattr(e,n){var t=this.$d[e.$mangled];if(t!==void 0)return t;if(t=this.ob$type.$typeLookup(e),t!==void 0){const l=t.tp$descr_get;return l?l.call(t,this,this.ob$type,n):t}const r=this.$d.__getattr__;if(r!==void 0)return t=Sk.misceval.tryCatch(()=>Sk.misceval.callsimOrSuspendArray(r,[e]),l=>{if(!(l instanceof Sk.builtin.AttributeError))throw l}),n?t:Sk.misceval.retryOptionalSuspensionOrThrow(t)},tp$setattr:Sk.generic.setAttr,tp$new:Sk.generic.new,tp$init(e,n){const[t,r]=Sk.abstr.copyKeywordsToNamedArgs("module",["name","doc"],e,n,[Sk.builtin.none.none$]);Sk.builtin.pyCheckType("module","string",t),this.init$dict(t,r)},$r(){let e=this.get$name();if(e!==void 0){var n=this.get$mod_reprf();if(n!==void 0)return Sk.misceval.callsimOrSuspendArray(n,[this])}return e=e===void 0?"'?'":e,n=this.from$file(),n=n===void 0?this.empty_or$loader():n,new Sk.builtin.str("<module "+e+n+">")}},getsets:{__dict__:{$get(){return new Sk.builtin.mappingproxy(this.$d)}}},methods:{__dir__:{$meth(){const e=this.tp$getattr(Sk.builtin.str.$dict);if(!Sk.builtin.checkMapping(e))throw new Sk.builtin.TypeError("__dict__ is not a dictionary");const n=e.mp$lookup(Sk.builtin.str.$dir);return n!==void 0?Sk.misceval.callsimOrSuspendArray(n,[]):new Sk.builtin.list(Sk.misceval.arrayFromIterable(e))},$flags:{NoArgs:!0},$doc:`__dir__() -> list
specialized dir() implementation`}},proto:{init$dict(e,n){this.$d.__name__=e,this.$d.__doc__=n,this.$d.__package__=Sk.builtin.none.none$,this.$d.__spec__=Sk.builtin.none.none$,this.$d.__loader__=Sk.builtin.none.none$},sk$attrError(){const e=this.get$name();return e===void 0?"module":"module "+e},get$name(){const e=this.tp$getattr(Sk.builtin.str.$name);return e&&Sk.misceval.objectRepr(e)},from$file(){const e=this.tp$getattr(Sk.builtin.str.$file);return e&&" from "+Sk.misceval.objectRepr(e)},empty_or$loader(){if(this.$js&&this.$js.includes("$builtinmodule"))return" (built-in)";const e=this.tp$getattr(Sk.builtin.str.$loader);return e===void 0||Sk.builtin.checkNone(e)?"":" ("+Sk.misceval.objectRepr(e)+")"},get$mod_reprf(){const e=this.tp$getattr(Sk.builtin.str.$loader);return e&&e.tp$getattr(this.str$mod_repr)},str$mod_repr:new Sk.builtin.str("module_repr")}}),Sk.exportSymbol("Sk.builtin.module",Sk.builtin.module)},function(j,F){Sk.builtin.structseq_types={},Sk.builtin.make_structseq=function(e,n,t,r){const l=e+"."+n,c=[];e=[];for(let i in t)c.push(i),e.push(t[i]);t={};for(let i=0;i<c.length;i++)t[c[i]]={$get(){return this.v[i]},$doc:e[i]};var u=Sk.abstr.buildNativeClass(l,{constructor:function(i){Sk.asserts.assert((Array.isArray(i)||i===void 0)&&this instanceof u),Sk.builtin.tuple.call(this,i)},base:Sk.builtin.tuple,slots:{tp$new(i,o){Sk.abstr.checkOneArg(l,i,o),o=[],i=i[0];for(let p=Sk.abstr.iter(i),s=p.tp$iternext();s!==void 0;s=p.tp$iternext())o.push(s);if(o.length!=c.length)throw new Sk.builtin.TypeError(l+"() takes a "+c.length+"-sequence ("+o.length+"-sequence given)");return new u(o)},tp$doc:r||Sk.builtin.none.none$,$r(){var i;if(this.v.length===0)return new Sk.builtin.str(l+"()");var o=[];for(i=0;i<this.v.length;++i)o[i]=c[i]+"="+Sk.misceval.objectRepr(this.v[i]);return i=o.join(", "),this.v.length===1&&(i+=","),new Sk.builtin.str(l+"("+i+")")}},methods:{__reduce__:{$meth(){throw new Sk.builtin.NotImplementedError("__reduce__ is not implemented")},$flags:{NoArgs:!0}}},getsets:t,proto:{num_sequence_fields:new Sk.builtin.int_(c.length)}});return u},Sk.exportSymbol("Sk.builtin.make_structseq",Sk.builtin.make_structseq)},function(j,F){Sk.builtin.generator=Sk.abstr.buildIteratorClass("generator",{constructor:function(e,n,t,r,l){var c;if(e){if(!(this instanceof Sk.builtin.generator))throw new TypeError("bad internal call to generator, use 'new'");if(this.func_code=e,this.func_globals=n||null,this.gi$running=!1,this.gi$resumeat=0,this.gi$sentvalue=void 0,this.gi$locals={},this.gi$cells={},0<t.length)for(n=0;n<e.co_varnames.length;++n)this.gi$locals[e.co_varnames[n]]=t[n];if(l!==void 0)for(c in l)r[c]=l[c];this.func_closure=r}},slots:{$r(){return new Sk.builtin.str("<generator object "+this.func_code.co_name.v+">")}},iternext(e,n){var t=this;return this.gi$running=!0,n===void 0&&(n=Sk.builtin.none.none$),this.gi$sentvalue=n,n=[this],this.func_closure&&n.push(this.func_closure),function r(l){if(l instanceof Sk.misceval.Suspension){if(e)return new Sk.misceval.Suspension(r,l);l=Sk.misceval.retryOptionalSuspensionOrThrow(l)}if(t.gi$running=!1,Sk.asserts.assert(l!==void 0),l!==Sk.builtin.none.none$)return t.gi$resumeat=l[0],l=l[1]}(this.func_code.apply(this.func_globals,n))},methods:{send:{$meth(e){return this.tp$iternext(!0,e)},$flags:{OneArg:!0},$doc:`send(arg) -> send 'arg' into generator,
return next yielded value or raise StopIteration.`}}}),Sk.exportSymbol("Sk.builtin.generator",Sk.builtin.generator),Sk.builtin.makeGenerator=function(e,n){var t,r=new Sk.builtin.generator(null,null,null);r.tp$iternext=e;for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},Sk.exportSymbol("Sk.builtin.makeGenerator",Sk.builtin.makeGenerator)},function(j,F){Sk.builtin.file=function(e,n,t){var r;if(!(this instanceof Sk.builtin.file))return new Sk.builtin.file(e,n,t);if(this.mode=n,this.name=Sk.ffi.remapToJs(e),this.closed=!1,this.name==="/dev/stdout")this.data$=Sk.builtin.none.none$,this.fileno=1;else if(this.name==="/dev/stdin")this.fileno=0;else if(this.name==="/dev/stderr")this.fileno=2;else{if(Sk.inBrowser)if(this.fileno=10,t=document.getElementById(e.v),t==null)if(n.v=="w"||n.v=="a")this.data$="";else throw new Sk.builtin.IOError("[Errno 2] No such file or directory: '"+e.v+"'");else t.nodeName.toLowerCase()=="textarea"?this.data$=t.value:this.data$=t.textContent;else this.fileno=11,this.data$=Sk.read(e.v);this.lineList=this.data$.split(`
`),this.lineList=this.lineList.slice(0,-1);for(r in this.lineList)this.lineList[r]+=`
`;this.currentLine=0}return this.pos$=0,Sk.fileopen&&10<=this.fileno&&Sk.fileopen(this),this},Sk.abstr.setUpInheritance("file",Sk.builtin.file,Sk.builtin.object),Sk.abstr.setUpBuiltinMro(Sk.builtin.file),Sk.builtin.file.prototype.$r=function(){return new Sk.builtin.str("<"+(this.closed?"closed":"open")+"file '"+this.name+"', mode '"+Sk.ffi.remapToJs(this.mode)+"'>")},Sk.builtin.file.prototype.tp$iter=function(){var e={tp$iter:function(){return e},$obj:this,$index:this.currentLine,$lines:this.lineList,tp$iternext:function(){if(!(e.$index>=e.$lines.length))return new Sk.builtin.str(e.$lines[e.$index++])}};return e},Sk.abstr.setUpSlots(Sk.builtin.file),Sk.builtin.file.prototype.__enter__=new Sk.builtin.func(function(e){return e}),Sk.builtin.file.prototype.__exit__=new Sk.builtin.func(function(e){return Sk.misceval.callsimArray(Sk.builtin.file.prototype.close,[e])}),Sk.builtin.file.prototype.close=new Sk.builtin.func(function(e){return e.closed=!0,Sk.builtin.none.none$}),Sk.builtin.file.prototype.flush=new Sk.builtin.func(function(e){}),Sk.builtin.file.prototype.fileno=new Sk.builtin.func(function(e){return this.fileno}),Sk.builtin.file.prototype.isatty=new Sk.builtin.func(function(e){return!1}),Sk.builtin.file.prototype.read=new Sk.builtin.func(function(e,n){var t=e.data$.length;if(e.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");var r=n===void 0?t:Sk.ffi.remapToJs(n);return r=new Sk.builtin.str(e.data$.substr(e.pos$,r)),e.pos$=n===void 0?t:e.pos$+Sk.ffi.remapToJs(n),e.pos$>=t&&(e.pos$=t),r}),Sk.builtin.file.$readline=function(e,n,t){if(e.fileno===0){if(e=Sk.ffi.remapToJs(t),e=Sk.inputfun(e||""),e instanceof Promise||e&&typeof e.then=="function"){var r=new Sk.misceval.Suspension;return r.resume=function(){if(r.data.error)throw r.data.error;return new Sk.builtin.str(r.data.result)},r.data={type:"Sk.promise",promise:e},r}return new Sk.builtin.str(e)}return n="",e.currentLine<e.lineList.length&&(n=e.lineList[e.currentLine],e.currentLine++),new Sk.builtin.str(n)},Sk.builtin.file.prototype.readline=new Sk.builtin.func(function(e,n){return Sk.builtin.file.$readline(e,n,void 0)}),Sk.builtin.file.prototype.readlines=new Sk.builtin.func(function(e,n){if(e.fileno===0)return new Sk.builtin.NotImplementedError("readlines ins't implemented because the web doesn't support Ctrl+D");var t=[];for(n=e.currentLine;n<e.lineList.length;n++)t.push(new Sk.builtin.str(e.lineList[n]));return new Sk.builtin.list(t)}),Sk.builtin.file.prototype.seek=new Sk.builtin.func(function(e,n,t){return n=Sk.ffi.remapToJs(n),t===void 0&&(t=0),t===0?e.pos$=n:(t==1||t==2)&&(e.pos$=e.data$.length+n),Sk.builtin.none.none$}),Sk.builtin.file.prototype.tell=new Sk.builtin.func(function(e){return Sk.ffi.remapToPy(e.pos$)}),Sk.builtin.file.prototype.truncate=new Sk.builtin.func(function(e,n){Sk.asserts.fail()}),Sk.builtin.file.prototype.write=new Sk.builtin.func(function(e,n){var t=Sk.ffi.remapToJs(e.mode);if(t==="w"||t==="wb"||t==="a"||t==="ab")if(Sk.filewrite){if(e.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");e.fileno===1?Sk.output(Sk.ffi.remapToJs(n)):Sk.filewrite(e,n)}else e.fileno===1?Sk.output(Sk.ffi.remapToJs(n)):Sk.asserts.fail();else throw new Sk.builtin.IOError("File not open for writing");return Sk.builtin.none.none$}),Sk.exportSymbol("Sk.builtin.file",Sk.builtin.file)},function(j,F){Sk.ffi=Sk.ffi||{},Sk.ffi.remapToPy=function(e){var n;if(e===null||typeof e=="undefined")return Sk.builtin.none.none$;if(e.ob$type||e instanceof Sk.misceval.Suspension)return e;if(Object.prototype.toString.call(e)==="[object Array]"){var t=[];for(n=0;n<e.length;++n)t.push(Sk.ffi.remapToPy(e[n]));return new Sk.builtin.list(t)}if(typeof e=="object"){t=[];for(n in e)t.push(Sk.ffi.remapToPy(n)),t.push(Sk.ffi.remapToPy(e[n]));return new Sk.builtin.dict(t)}if(typeof e=="string")return new Sk.builtin.str(e);if(typeof e=="number")return Sk.builtin.assk$(e);if(typeof e=="boolean")return new Sk.builtin.bool(e);if(typeof e=="undefined")return Sk.builtin.none.none$;if(typeof e=="function")return new Sk.builtin.func(e);Sk.asserts.fail("unhandled remap type "+typeof e)},Sk.exportSymbol("Sk.ffi.remapToPy",Sk.ffi.remapToPy),Sk.ffi.remapToJs=function(e){var n,t;if(e instanceof Sk.builtin.dict){var r={};return e.$items().forEach(([l,c])=>{t=Sk.ffi.remapToJs(l),r[t]=Sk.ffi.remapToJs(c)}),r}if(e instanceof Sk.builtin.list||e instanceof Sk.builtin.tuple){for(r=[],n=0;n<e.v.length;++n)r.push(Sk.ffi.remapToJs(e.v[n]));return r}if(e instanceof Sk.builtin.bool)return!!e.v;if(e instanceof Sk.builtin.int_||e instanceof Sk.builtin.float_||e instanceof Sk.builtin.lng)return Sk.builtin.asnum$(e);if(typeof e=="number"||typeof e=="boolean"||typeof e=="string")return e;if(e!==void 0)return e.v},Sk.exportSymbol("Sk.ffi.remapToJs",Sk.ffi.remapToJs),Sk.ffi.callback=function(e){return e===void 0?e:function(){return Sk.misceval.apply(e,void 0,void 0,void 0,Array.prototype.slice.call(arguments,0))}},Sk.exportSymbol("Sk.ffi.callback",Sk.ffi.callback),Sk.ffi.stdwrap=function(e,n){return e=new e,e.v=n,e},Sk.exportSymbol("Sk.ffi.stdwrap",Sk.ffi.stdwrap),Sk.ffi.basicwrap=function(e){if(e instanceof Sk.builtin.int_||e instanceof Sk.builtin.float_||e instanceof Sk.builtin.lng)return Sk.builtin.asnum$(e);if(typeof e=="number"||typeof e=="boolean")return e;if(typeof e=="string")return new Sk.builtin.str(e);Sk.asserts.fail("unexpected type for basicwrap")},Sk.exportSymbol("Sk.ffi.basicwrap",Sk.ffi.basicwrap),Sk.ffi.unwrapo=function(e){if(e!==void 0)return e.v},Sk.exportSymbol("Sk.ffi.unwrapo",Sk.ffi.unwrapo),Sk.ffi.unwrapn=function(e){return e===null?null:e.v},Sk.exportSymbol("Sk.ffi.unwrapn",Sk.ffi.unwrapn)},function(j,F){function e(l,c,u){if(l=l===void 0?l:Sk.misceval.asIndexOrThrow(l),c=c===void 0?c:Sk.misceval.asIndexOrThrow(c),u=u===void 0?u:Sk.misceval.asIndexOrThrow(u),c===void 0&&u===void 0)c=l,l=0,u=1;else if(u===void 0)u=1;else if(u===0)throw new Sk.builtin.ValueError("range() step argument must not be zero");const i=[];if(typeof l=="number"&&typeof c=="number"&&typeof u=="number")if(0<u)for(var o=l;o<c;o+=u)i.push(new Sk.builtin.int_(o));else for(o=l;o>c;o+=u)i.push(new Sk.builtin.int_(o));else{if(l=o=JSBI.BigInt(l),u=JSBI.BigInt(u),c=JSBI.BigInt(c),JSBI.greaterThan(u,JSBI.__ZERO))for(;JSBI.lessThan(o,c);)i.push(new Sk.builtin.int_(n(o))),o=JSBI.add(o,u);else for(;JSBI.greaterThan(o,c);)i.push(new Sk.builtin.int_(n(o))),o=JSBI.add(o,u);l=n(l),u=n(u),c=n(c)}return new Sk.builtin.range_(l,c,u,i)}function n(l){return JSBI.lessThan(l,JSBI.__MAX_SAFE)&&JSBI.greaterThan(l,JSBI.__MIN_SAFE)?JSBI.toNumber(l):l}Sk.builtin.range_=Sk.abstr.buildNativeClass("range",{constructor:function(l,c,u,i){this.start=l,this.stop=c,this.step=u,this.v=i},slots:{tp$getattr:Sk.generic.getAttr,tp$as_sequence_or_mapping:!0,tp$doc:`range(stop) -> range object
range(start, stop[, step]) -> range object

Return an object that produces a sequence of integers from start (inclusive)
to stop (exclusive) by step.  range(i, j) produces i, i+1, i+2, ..., j-1.
start defaults to 0, and stop is omitted!  range(4) produces 0, 1, 2, 3.
These are exactly the valid indices for a list of 4 elements.
When step is given, it specifies the increment (or decrement).`,tp$new(l,c){return Sk.abstr.checkNoKwargs("range",c),Sk.abstr.checkArgsLen("range",l,1,3),e(l[0],l[1],l[2])},$r(){let l="range("+this.start+", "+this.stop;return this.step!=1&&(l+=", "+this.step),new Sk.builtin.str(l+")")},tp$richcompare(l,c){return c!=="Eq"&&c!=="NotEq"||l.ob$type!==Sk.builtin.range_?Sk.builtin.NotImplemented.NotImplemented$:(l=new Sk.builtin.list(l.v),new Sk.builtin.list(this.v).tp$richcompare(l,c))},tp$iter(){return new t(this)},nb$bool(){return this.v.length!==0},sq$contains(l){const c=this.v;for(let u=0;u<c.length;u++)if(Sk.misceval.richCompareBool(l,c[u],"Eq"))return!0;return!1},sq$length(){return this.v.length},mp$subscript(l){if(Sk.misceval.isIndex(l)){if(l=Sk.misceval.asIndexSized(l),0>l&&(l=this.v.length+l),0>l||l>=this.v.length)throw new Sk.builtin.IndexError("range object index out of range");return this.v[l]}if(l.constructor===Sk.builtin.slice){const c=[],u=this.v;l.sssiter$(u.length,s=>{c.push(u[s])});let{start:i,stop:o,step:p}=l.slice$indices(u.length);return i=Sk.misceval.asIndex(u[i])||this.start,o=Sk.misceval.asIndex(u[o])||this.stop,p=typeof this.step=="number"?p*this.step:JSBI.multiply(this.step,JSBI.BigInt(p)),new Sk.builtin.range_(i,o,p,c)}throw new Sk.builtin.TypeError("range indices must be integers or slices, not "+Sk.abstr.typeName(l))}},getsets:{start:{$get(){return new Sk.builtin.int_(this.start)}},step:{$get(){return new Sk.builtin.int_(this.step)}},stop:{$get(){return new Sk.builtin.int_(this.stop)}}},methods:{__reversed__:{$meth(){return new r(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a reverse iterator."},count:{$meth(l){let c=0;for(let u=0;u<this.v.length;u++)Sk.misceval.richCompareBool(l,this.v[u],"Eq")&&c++;return new Sk.builtin.int_(c)},$flags:{OneArg:!0},$textsig:null,$doc:"rangeobject.count(value) -> integer -- return number of occurrences of value"},index:{$meth(l){for(let c=0;c<this.v.length;c++)if(Sk.misceval.richCompareBool(l,this.v[c],"Eq"))return new Sk.builtin.int_(c);throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(l)+"is not in range")},$flags:{OneArg:!0},$textsig:null,$doc:`rangeobject.index(value, [start, [stop]]) -> integer -- return index of value.
Raise ValueError if the value is not present.`}},proto:{sk$asarray(){return this.v.slice(0)}},flags:{sk$acceptable_as_base_class:!1}});var t=Sk.abstr.buildIteratorClass("range_iterator",{constructor:function(l){this.$index=0,this.$seq=l.v},iternext(){return this.$seq[this.$index++]},methods:{__length_hint__:Sk.generic.iterLengthHintWithArrayMethodDef},flags:{sk$acceptable_as_base_class:!1}}),r=Sk.abstr.buildIteratorClass("range_reverseiterator",{constructor:function(l){this.$seq=l.v,this.$index=this.$seq.length-1},iternext(){return this.$seq[this.$index--]},methods:{__length_hint__:Sk.generic.iterReverseLengthHintMethodDef},flags:{sk$acceptable_as_base_class:!1}});Sk.builtin.range=Sk.builtin.xrange=function(l,c,u){return l=e(l,c,u),new Sk.builtin.list(l.v)}},function(j,F){Sk.builtin.enumerate=Sk.abstr.buildIteratorClass("enumerate",{constructor:function(e,n){if(!(this instanceof Sk.builtin.enumerate))throw TypeError("Failed to construct 'enumerate': Please use the 'new' operator");return this.$iterable=e,this.$index=n,this},iternext(e){const n=Sk.misceval.chain(this.$iterable.tp$iternext(e),t=>{if(t!==void 0)return new Sk.builtin.tuple([new Sk.builtin.int_(this.$index++),t])});return e?n:Sk.misceval.retryOptionalSuspensionOrThrow(n)},slots:{tp$doc:`Return an enumerate object.

  iterable
    an object supporting iteration

The enumerate object yields pairs containing a count (from start, which
defaults to zero) and a value yielded by the iterable argument.

enumerate is useful for obtaining an indexed list:
    (0, seq[0]), (1, seq[1]), (2, seq[2]), ...`,tp$new(e,n){let[t,r]=Sk.abstr.copyKeywordsToNamedArgs("enumerate",["iterable","start"],e,n,[new Sk.builtin.int_(0)]);return t=Sk.abstr.iter(t),r=Sk.misceval.asIndexOrThrow(r),this===Sk.builtin.enumerate.prototype?new Sk.builtin.enumerate(t,r):(e=new this.constructor,Sk.builtin.enumerate.call(e,t,r),e)}}}),Sk.exportSymbol("Sk.builtin.enumerate",Sk.builtin.enumerate)},function(j,F){Sk.builtin.filter_=Sk.abstr.buildIteratorClass("filter",{constructor:function(e,n){this.$func=e,this.$iterable=n},iternext(e){const n=Sk.misceval.iterFor(this.$iterable,t=>Sk.misceval.chain(this.check$filter(t),r=>r?new Sk.misceval.Break(r):void 0));return e?n:Sk.misceval.retryOptionalSuspensionOrThrow(n)},slots:{tp$doc:`Return an iterator yielding those items of iterable for which function(item)
is true. If function is None, return the items that are true.`,tp$new(e,n){let[t,r]=Sk.abstr.copyKeywordsToNamedArgs("filter",["predicate","iterable"],e,n,[]);return t=Sk.builtin.checkNone(t)?null:t,r=Sk.abstr.iter(r),this===Sk.builtin.filter_.prototype?new Sk.builtin.filter_(t,r):(e=new this.constructor,Sk.builtin.filter_.call(e,t,r),e)}},proto:{check$filter(e){let n;return n=this.$func===null?e:Sk.misceval.callsimOrSuspendArray(this.$func,[e]),Sk.misceval.chain(n,t=>Sk.misceval.isTrue(t)?e:void 0)}}}),Sk.exportSymbol("Sk.builtin.filter_",Sk.builtin.filter_)},function(j,F){Sk.builtin.map_=Sk.abstr.buildIteratorClass("map",{constructor:function(e,n){this.$func=e,this.$iters=n},iternext(e){const n=[],t=Sk.misceval.chain(Sk.misceval.iterArray(this.$iters,r=>Sk.misceval.chain(r.tp$iternext(e),l=>{if(l===void 0)return new Sk.misceval.Break(!0);n.push(l)})),r=>r?void 0:Sk.misceval.callsimOrSuspendArray(this.$func,n));return e?t:Sk.misceval.retryOptionalSuspensionOrThrow(t)},slots:{tp$doc:`map(func, *iterables) --> map object

Make an iterator that computes the function using arguments from
each of the iterables.  Stops when the shortest iterable is exhausted.`,tp$new(e,n){this===Sk.builtin.map_.prototype&&Sk.abstr.checkNoKwargs("map",n),Sk.abstr.checkArgsLen("map",e,2),n=e[0];const t=[];for(let r=1;r<e.length;r++)t.push(Sk.abstr.iter(e[r]));return this===Sk.builtin.map_.prototype?new Sk.builtin.map_(n,t):(e=new this.constructor,Sk.builtin.map_.call(e,n,t),e)}}}),Sk.exportSymbol("Sk.builtin.map_",Sk.builtin.map_)},function(j,F){Sk.builtin.reversed=Sk.abstr.buildIteratorClass("reversed",{constructor:function(e){return this.$idx=e.sq$length()-1,this.$seq=e,this},iternext(e){if(!(0>this.$idx)){var n=Sk.misceval.tryCatch(()=>Sk.abstr.objectGetItem(this.$seq,new Sk.builtin.int_(this.$idx--),e),t=>{if(t instanceof Sk.builtin.IndexError)this.$idx=-1;else throw t});return e?n:Sk.misceval.retryOptionalSuspensionOrThrow(n)}},slots:{tp$doc:"Return a reverse iterator over the values of the given sequence.",tp$new(e,n){if(this===Sk.builtin.reversed.prototype&&Sk.abstr.checkNoKwargs("reversed",n),Sk.abstr.checkArgsLen("reversed",e,1,1),e=e[0],n=Sk.abstr.lookupSpecial(e,Sk.builtin.str.$reversed),n!==void 0)return Sk.misceval.callsimArray(n,[]);if(!Sk.builtin.checkSequence(e)||Sk.abstr.lookupSpecial(e,Sk.builtin.str.$len)===void 0)throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(e)+"' object is not a sequence");return this===Sk.builtin.reversed.prototype?new Sk.builtin.reversed(e):(n=new this.constructor,Sk.builtin.reversed.call(n,e),n)}},methods:{__length_hint__:{$meth:function(){return 0<=this.$idx?new Sk.builtin.int_(this.$idx):new Sk.builtin.int_(0)},$flags:{NoArgs:!0}}}})},function(j,F){Sk.builtin.zip_=Sk.abstr.buildIteratorClass("zip",{constructor:function(e){this.$iters=e,e.length===0&&(this.tp$iternext=()=>{})},iternext(e){const n=[],t=Sk.misceval.chain(Sk.misceval.iterArray(this.$iters,r=>Sk.misceval.chain(r.tp$iternext(e),l=>{if(l===void 0)return new Sk.misceval.Break(!0);n.push(l)})),r=>r?void 0:new Sk.builtin.tuple(n));return e?t:Sk.misceval.retryOptionalSuspensionOrThrow(t)},slots:{tp$doc:`zip(iter1 [,iter2 [...]]) --> zip object

Return a zip object whose .__next__() method returns a tuple where
the i-th element comes from the i-th iterable argument.  The .__next__()
method continues until the shortest iterable in the argument sequence
is exhausted and then it raises StopIteration.`,tp$new(e,n){this===Sk.builtin.zip_.prototype&&Sk.abstr.checkNoKwargs("zip",n),n=[];for(let t=0;t<e.length;t++)try{n.push(Sk.abstr.iter(e[t]))}catch(r){throw r instanceof Sk.builtin.TypeError?new Sk.builtin.TypeError("zip argument #"+(t+1)+" must support iteration"):r}return this===Sk.builtin.zip_.prototype?new Sk.builtin.zip_(n):(e=new this.constructor,Sk.builtin.zip_.call(e,n),e)}}}),Sk.exportSymbol("Sk.builtin.zip_",Sk.builtin.zip_)},function(j,F){var e={T_ENDMARKER:0,T_NAME:1,T_NUMBER:2,T_STRING:3,T_NEWLINE:4,T_INDENT:5,T_DEDENT:6,T_LPAR:7,T_RPAR:8,T_LSQB:9,T_RSQB:10,T_COLON:11,T_COMMA:12,T_SEMI:13,T_PLUS:14,T_MINUS:15,T_STAR:16,T_SLASH:17,T_VBAR:18,T_AMPER:19,T_LESS:20,T_GREATER:21,T_EQUAL:22,T_DOT:23,T_PERCENT:24,T_LBRACE:25,T_RBRACE:26,T_EQEQUAL:27,T_NOTEQUAL:28,T_LESSEQUAL:29,T_GREATEREQUAL:30,T_TILDE:31,T_CIRCUMFLEX:32,T_LEFTSHIFT:33,T_RIGHTSHIFT:34,T_DOUBLESTAR:35,T_PLUSEQUAL:36,T_MINEQUAL:37,T_STAREQUAL:38,T_SLASHEQUAL:39,T_PERCENTEQUAL:40,T_AMPEREQUAL:41,T_VBAREQUAL:42,T_CIRCUMFLEXEQUAL:43,T_LEFTSHIFTEQUAL:44,T_RIGHTSHIFTEQUAL:45,T_DOUBLESTAREQUAL:46,T_DOUBLESLASH:47,T_DOUBLESLASHEQUAL:48,T_AT:49,T_ATEQUAL:50,T_RARROW:51,T_ELLIPSIS:52,T_OP:53,T_AWAIT:54,T_ASYNC:55,T_ERRORTOKEN:56,T_NT_OFFSET:256,T_N_TOKENS:60,T_COMMENT:57,T_NL:58,T_ENCODING:59};j={"!=":e.T_NOTEQUAL,"%":e.T_PERCENT,"%=":e.T_PERCENTEQUAL,"&":e.T_AMPER,"&=":e.T_AMPEREQUAL,"(":e.T_LPAR,")":e.T_RPAR,"*":e.T_STAR,"**":e.T_DOUBLESTAR,"**=":e.T_DOUBLESTAREQUAL,"*=":e.T_STAREQUAL,"+":e.T_PLUS,"+=":e.T_PLUSEQUAL,",":e.T_COMMA,"-":e.T_MINUS,"-=":e.T_MINEQUAL,"->":e.T_RARROW,".":e.T_DOT,"...":e.T_ELLIPSIS,"/":e.T_SLASH,"//":e.T_DOUBLESLASH,"//=":e.T_DOUBLESLASHEQUAL,"/=":e.T_SLASHEQUAL,":":e.T_COLON,";":e.T_SEMI,"<":e.T_LESS,"<<":e.T_LEFTSHIFT,"<<=":e.T_LEFTSHIFTEQUAL,"<=":e.T_LESSEQUAL,"=":e.T_EQUAL,"==":e.T_EQEQUAL,">":e.T_GREATER,">=":e.T_GREATEREQUAL,">>":e.T_RIGHTSHIFT,">>=":e.T_RIGHTSHIFTEQUAL,"@":e.T_AT,"@=":e.T_ATEQUAL,"[":e.T_LSQB,"]":e.T_RSQB,"^":e.T_CIRCUMFLEX,"^=":e.T_CIRCUMFLEXEQUAL,"{":e.T_LBRACE,"|":e.T_VBAR,"|=":e.T_VBAREQUAL,"}":e.T_RBRACE,"~":e.T_TILDE};var n={};(function(){for(var t in e)n[e[t]]=t})(),["tok_name","ISTERMINAL","ISNONTERMINAL","ISEOF"].concat(Object.keys(n).map(function(t){return n[t]})),Sk.token={},Sk.token.tokens=e,Sk.token.tok_name=n,Sk.token.EXACT_TOKEN_TYPES=j,Sk.token.ISTERMINAL=function(t){return t<e.T_NT_OFFSET},Sk.token.ISNONTERMINAL=function(t){return t>=e.T_NT_OFFSET},Sk.token.ISEOF=function(t){return t==e.T_ENDMARKER},Sk.exportSymbol("Sk.token",Sk.token),Sk.exportSymbol("Sk.token.tokens",Sk.token.tokens),Sk.exportSymbol("Sk.token.tok_name",Sk.token.tok_name),Sk.exportSymbol("Sk.token.EXACT_TOKEN_TYPES"),Sk.exportSymbol("Sk.token.ISTERMINAL",Sk.token.ISTERMINAL),Sk.exportSymbol("Sk.token.ISNONTERMINAL",Sk.token.ISNONTERMINAL),Sk.exportSymbol("Sk.token.ISEOF",Sk.token.ISEOF)},function(j,F){function e(f,b,d,S,g){this.type=f,this.string=b,this.start=d,this.end=S,this.line=g}function n(f){return"("+Array.prototype.slice.call(arguments).join("|")+")"}function t(f){return n.apply(null,arguments)+"?"}function r(f,b){for(var d=f.length;d--;)if(f[d]===b)return!0;return!1}function l(){return" FR RF Br BR Fr r B R b bR f rb rB F Rf U rF u RB br fR fr rf Rb".split(" ")}function c(f){f?delete Sk.token.EXACT_TOKEN_TYPES["<>"]:Sk.token.EXACT_TOKEN_TYPES["<>"]=Sk.token.tokens.T_NOTEQUAL,w=Object.keys(Sk.token.EXACT_TOKEN_TYPES).sort(),m=n.apply(this,w.reverse().map(function(b){return b&&s.test(b)?b.replace(p,"\\$&"):b})),h=n("\\r?\\n",m)}var u=Sk.token.tokens;const i=Sk.builtin.SyntaxError,o=Sk.builtin.SyntaxError;e.prototype.exact_type=function(){return this.type==u.T_OP&&this.string in Sk.token.EXACT_TOKEN_TYPES?Sk.token.EXACT_TOKEN_TYPES[this.string]:this.type};var p=/[\\^$.*+?()[\]{}|]/g,s=RegExp(p.source);const a=function(){var f=n("[A-Z]","[a-z]","[\\u{10B99}-\\u{10B9C}\\u{112A9}\\u{115DC}-\\u{115DD}\\u034F\\u115F-\\u1160\\u17B4-\\u17B5\\u2065\\u3164\\uFFA0\\uFFF0-\\uFFF8\\u{E0000}\\u{E0002}-\\u{E001F}\\u{E0080}-\\u{E00FF}\\u{E01F0}-\\u{E0FFF}\\u{112A9}\\u00D7]","[\\u02B0-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0374\\u037A\\u0559\\u06E5-\\u06E6\\u07F4-\\u07F5\\u0971\\u1C78-\\u1C7D\\u1D2C-\\u1D6A\\u1DFD-\\u1DFF\\u2E2F\\u30FC\\uA67F\\uA69C-\\uA69D\\uA717-\\uA71F\\uA788\\uA7F8-\\uA7F9\\uAB5C-\\uAB5F\\uFF70\\uFF9E-\\uFF9F\\u{16F93}-\\u{16F9F}\\u02D0-\\u02D1\\u0640\\u07FA\\u0E46\\u0EC6\\u1843\\u1AA7\\u1C7B\\u3005\\u3031-\\u3035\\u309D-\\u309E\\u30FC-\\u30FE\\uA015\\uA60C\\uA9CF\\uA9E6\\uAA70\\uAADD\\uAAF3-\\uAAF4\\uFF70\\u{16B42}-\\u{16B43}\\u{16FE0}-\\u{16FE1}\\u02B0-\\u02B8\\u02C0-\\u02C1\\u02E0-\\u02E4\\u037A\\u1D2C-\\u1D6A\\u1D78\\u1D9B-\\u1DBF\\u2071\\u207F\\u2090-\\u209C\\u2C7C-\\u2C7D\\uA69C-\\uA69D\\uA770\\uA7F8-\\uA7F9\\uAB5C-\\uAB5F\\uFF9E-\\uFF9F\\u02B2\\u1D62\\u1DA4\\u1DA8\\u2071\\u2C7C\\u2E18-\\u2E19\\u2E2F]","[\\u2135-\\u2138\\u{1EE00}-\\u{1EE03}\\u{1EE05}-\\u{1EE1F}\\u{1EE21}-\\u{1EE22}\\u{1EE24}\\u{1EE27}\\u{1EE29}-\\u{1EE32}\\u{1EE34}-\\u{1EE37}\\u{1EE39}\\u{1EE3B}\\u{1EE42}\\u{1EE47}\\u{1EE49}\\u{1EE4B}\\u{1EE4D}-\\u{1EE4F}\\u{1EE51}-\\u{1EE52}\\u{1EE54}\\u{1EE57}\\u{1EE59}\\u{1EE5B}\\u{1EE5D}\\u{1EE5F}\\u{1EE61}-\\u{1EE62}\\u{1EE64}\\u{1EE67}-\\u{1EE6A}\\u{1EE6C}-\\u{1EE72}\\u{1EE74}-\\u{1EE77}\\u{1EE79}-\\u{1EE7C}\\u{1EE7E}\\u{1EE80}-\\u{1EE89}\\u{1EE8B}-\\u{1EE9B}\\u{1EEA1}-\\u{1EEA3}\\u{1EEA5}-\\u{1EEA9}\\u{1EEAB}-\\u{1EEBB}\\u3006\\u3400-\\u4DB5\\u4E00-\\u9FEF\\uF900-\\uFA6D\\uFA70-\\uFAD9\\u{17000}-\\u{187F1}\\u{18800}-\\u{18AF2}\\u{1B170}-\\u{1B2FB}\\u{20000}-\\u{2A6D6}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{2F800}-\\u{2FA1D}\\uAAC0\\uAAC2\\uFE20-\\uFE2F\\u{10D22}-\\u{10D23}\\u{1135D}\\u00AA\\u00BA\\u3400-\\u4DB5\\u4E00-\\u9FEF\\uFA0E-\\uFA0F\\uFA11\\uFA13-\\uFA14\\uFA1F\\uFA21\\uFA23-\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6D6}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u115F-\\u1160\\u3164\\uFFA0\\u0673\\u17A3-\\u17A4\\u0E40-\\u0E44\\u0EC0-\\u0EC4\\u19B5-\\u19B7\\u19BA\\uAAB5-\\uAAB6\\uAAB9\\uAABB-\\uAABC]","[\\u3007\\u3021-\\u3029\\u3038-\\u303A\\u2170-\\u217F\\u2160-\\u216F]","_","[\\u1885-\\u1886\\u2118\\u212E\\u309B-\\u309C]"),b=n(f,"[\\u104A-\\u104B\\u102B-\\u102C\\u102D-\\u1030\\u1031\\u1032-\\u1036\\u1038\\u103B-\\u103C\\u103D-\\u103E\\u1056-\\u1057\\u1058-\\u1059\\u105E-\\u1060\\u1062\\u1067-\\u1068\\u1071-\\u1074\\u1082\\u1083-\\u1084\\u1085-\\u1086\\u109C\\u109D\\u1037\\u1039-\\u103A\\u1087-\\u108C\\u108D\\u108F\\u109A-\\u109B\\uA9E5\\uAA7B\\uAA7C\\uAA7D\\uA9E6\\uAA70\\u104A-\\u104B]","[\\u0903\\u093B\\u093E-\\u0940\\u0949-\\u094C\\u094E-\\u094F\\u0982-\\u0983\\u09BE-\\u09C0\\u09C7-\\u09C8\\u09CB-\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB-\\u0ACC\\u0B02-\\u0B03\\u0B3E\\u0B40\\u0B47-\\u0B48\\u0B4B-\\u0B4C\\u0B57\\u0BBE-\\u0BBF\\u0BC1-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82-\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7-\\u0CC8\\u0CCA-\\u0CCB\\u0CD5-\\u0CD6\\u0D02-\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82-\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2-\\u0DF3\\u0F7F\\u102B-\\u102C\\u1031\\u1038\\u103B-\\u103C\\u1056-\\u1057\\u1062\\u1067-\\u1068\\u1083-\\u1084\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7-\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930-\\u1931\\u1933-\\u1938\\u1A19-\\u1A1A\\u1A55\\u1A57\\u1A61\\u1A63-\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B82\\u1BA1\\u1BA6-\\u1BA7\\u1BE7\\u1BEA-\\u1BEC\\u1BEE\\u1C24-\\u1C2B\\u1C34-\\u1C35\\u1CF2-\\u1CF3\\uA823-\\uA824\\uA827\\uA880-\\uA881\\uA8B4-\\uA8C3\\uA952\\uA983\\uA9B4-\\uA9B5\\uA9BA-\\uA9BB\\uA9BD-\\uA9BF\\uAA2F-\\uAA30\\uAA33-\\uAA34\\uAA4D\\uAAEB\\uAAEE-\\uAAEF\\uAAF5\\uABE3-\\uABE4\\uABE6-\\uABE7\\uABE9-\\uABEA\\u{11000}\\u{11002}\\u{11082}\\u{110B0}-\\u{110B2}\\u{110B7}-\\u{110B8}\\u{1112C}\\u{11145}-\\u{11146}\\u{11182}\\u{111B3}-\\u{111B5}\\u{111BF}\\u{1122C}-\\u{1122E}\\u{11232}-\\u{11233}\\u{112E0}-\\u{112E2}\\u{11302}-\\u{11303}\\u{1133E}-\\u{1133F}\\u{11341}-\\u{11344}\\u{11347}-\\u{11348}\\u{1134B}-\\u{1134C}\\u{11357}\\u{11362}-\\u{11363}\\u{11435}-\\u{11437}\\u{11440}-\\u{11441}\\u{11445}\\u{114B0}-\\u{114B2}\\u{114B9}\\u{114BB}-\\u{114BE}\\u{114C1}\\u{115AF}-\\u{115B1}\\u{115B8}-\\u{115BB}\\u{115BE}\\u{11630}-\\u{11632}\\u{1163B}-\\u{1163C}\\u{1163E}\\u{116AC}\\u{116AE}-\\u{116AF}\\u{11720}-\\u{11721}\\u{11726}\\u{1182C}-\\u{1182E}\\u{11838}\\u{11A39}\\u{11A57}-\\u{11A58}\\u{11A97}\\u{11C2F}\\u{11C3E}\\u{11CA9}\\u{11CB1}\\u{11CB4}\\u{11D8A}-\\u{11D8E}\\u{11D93}-\\u{11D94}\\u{11D96}\\u{11EF5}-\\u{11EF6}\\u{16F51}-\\u{16F7E}\\u0F3E-\\u0F3F\\u1087-\\u108C\\u108F\\u109A-\\u109B\\u1B44\\u1BAA\\u1CE1\\u1CF7\\u302E-\\u302F\\uA953\\uA9C0\\uAA7B\\uAA7D\\uABEC\\u{111C0}\\u{11235}\\u{1134D}\\u{116B6}\\u{1D16D}-\\u{1D172}\\u09BE\\u09D7\\u0B3E\\u0B57\\u0BBE\\u0BD7\\u0CC2\\u0CD5-\\u0CD6\\u0D3E\\u0D57\\u0DCF\\u0DDF\\u302E-\\u302F\\u{1133E}\\u{11357}\\u{114B0}\\u{114BD}\\u{115AF}\\u{1D165}\\u{1D16E}-\\u{1D172}]","[\\u{1D7CE}-\\u{1D7FF}\\uFF10-\\uFF19]","\\u2040","[\\u00B7\\u0387\\u1369-\\u1371\\u19DA]");return RegExp().unicode===!1?new RegExp("^"+f+"+"+b+"*$","u"):(f=n("[A-Z]","[a-z]","_"),b=n(f,"[0-9]"),new RegExp("^"+f+"+"+b+"*$"))}();(function(f){return n.apply(null,arguments)+"*"})("\\\\\\r?\\n[ \\f\\t]*"),t("#[^\\r\\n]*"),j=n("[0-9](?:_?[0-9])*\\.(?:[0-9](?:_?[0-9])*)?","\\.[0-9](?:_?[0-9])*")+t("[eE][-+]?[0-9](?:_?[0-9])*");var $=n(j,"[0-9](?:_?[0-9])*[eE][-+]?[0-9](?:_?[0-9])*"),y=n("[0-9](?:_?[0-9])*[jJ]",$+"[jJ]");j=n.apply(null,l()),F=n(j+"'''",j+'"""'),n(j+"'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*'",j+'"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*"');var w,m,h;c(!0),Sk.token.setupTokens=c;var v=n(j+"'[^\\n'\\\\]*(?:\\\\.[^\\n'\\\\]*)*"+n("'","\\\\\\r?\\n"),j+'"[^\\n"\\\\]*(?:\\\\.[^\\n"\\\\]*)*'+n('"',"\\\\\\r?\\n")),k=n("\\\\\\r?\\n|$","#[^\\r\\n]*",F),A={};j=l();for(let f of j)A[f+"'"]="^[^'\\\\]*(?:\\\\.[^'\\\\]*)*'",A[f+'"']='^[^"\\\\]*(?:\\\\.[^"\\\\]*)*"',A[f+"'''"]="^[^'\\\\]*(?:(?:\\\\.|'(?!''))[^'\\\\]*)*'''",A[f+'"""']='^[^"\\\\]*(?:(?:\\\\.|"(?!""))[^"\\\\]*)*"""';let M=[],D=[];for(let f of j)M.push(f+'"'),M.push(f+"'"),D.push(f+'"""'),D.push(f+"'''");Sk._tokenize=function(f,b,d,S){var g=Sk.__future__.python3?"":"(?:L?)";g=n("0[xX](?:_?[0-9a-fA-F])+"+g,"0[bB](?:_?[01])+"+g,Sk.__future__.silent_octal_literal?"0([oO]?)(?:_?[0-7])+"+g:"0([oO])(?:_?[0-7])+"+g,"(?:0(?:_?0)*|[1-9](?:_?[0-9])*)"+g),g=n(y,$,g),g="[ \\f\\t]*"+n(k,g,h,v,"\\w+"),g=new RegExp(g);var x=0,N=0,O=0,P="",W=0,re=null,Q=[0],V,ee=void 0,ie=void 0,te,se;d!==void 0&&(d=="utf-8-sig"&&(d="utf-8"),S(new e(u.T_ENCODING,d,[0,0],[0,0],"")));for(var Z=d="";;){try{d=Z,Z=b()}catch(ae){Z=""}x+=1;var q=0,le=Z.length;if(P){if(!Z)throw new i("EOF in multi-line string",f,ie[0],ie[1]);ee.lastIndex=0;var R=ee.exec(Z);if(R)q=te=R[0].length,S(new e(u.T_STRING,P+Z.substring(0,te),ie,[x,te],re+Z)),P="",W=0,re=null;else{W&&Z.substring(Z.length-2)!==`\\
`&&Z.substring(Z.length-3)!==`\\\r
`?(S(new e(u.T_ERRORTOKEN,P+Z,ie,[x,Z.length],re)),P="",re=null):(P+=Z,re+=Z);continue}}else if(N!=0||O){if(!Z)throw new i("EOF in multi-line statement",f,x,0);O=0}else{if(!Z)break;for(V=0;q<le;){if(Z[q]==" ")V+=1;else if(Z[q]=="	")V=8*Math.floor(V/8+1);else if(Z[q]=="\f")V=0;else break;q+=1}if(q==le)break;if(r(`#\r
`,Z[q])){if(Z[q]=="#"){for(V=Z.substring(q),le=V.length;0<le&&`\r
`.indexOf(V.charAt(le-1))!==-1;--le);le=V.substring(0,le),S(new e(u.T_COMMENT,le,[x,q],[x,q+le.length],Z)),q+=le.length}S(new e(u.T_NL,Z.substring(q),[x,q],[x,Z.length],Z));continue}for(V>Q[Q.length-1]&&(Q.push(V),S(new e(u.T_INDENT,Z.substring(q),[x,0],[x,q],Z)));V<Q[Q.length-1];){if(!r(Q,V))throw new o("unindent does not match any outer indentation level",f,x,q);Q=Q.slice(0,-1),S(new e(u.T_DEDENT,"",[x,q],[x,q],Z))}}for(;q<le;){for(V=Z.charAt(q);V===" "||V==="\f"||V==="	";)q+=1,V=Z.charAt(q);if(se=g.exec(Z.substring(q))){if(V=q,te=V+se[1].length,se=[x,V],R=[x,te],q=te,V!=te){te=Z.substring(V,te);var G=Z[V];if(r("0123456789",G)||G=="."&&te!="."&&te!="...")S(new e(u.T_NUMBER,te,se,R,Z));else if(r(`\r
`,G))0<N?S(new e(u.T_NL,te,se,R,Z)):S(new e(u.T_NEWLINE,te,se,R,Z));else if(G=="#")S(new e(u.T_COMMENT,te,se,R,Z));else if(r(D,te))if(ee=RegExp(A[te]),R=ee.exec(Z.substring(q)))q=R[0].length+q,te=Z.substring(V,q),S(new e(u.T_STRING,te,se,[x,q],Z));else{ie=[x,V],P=Z.substring(V),re=Z;break}else if(r(M,G)||r(M,te.substring(0,2))||r(M,te.substring(0,3)))if(te[te.length-1]==`
`){ie=[x,V],ee=RegExp(A[G]||A[te[1]]||A[te[2]]),P=Z.substring(V),W=1,re=Z;break}else S(new e(u.T_STRING,te,se,R,Z));else V=G.normalize("NFKC"),a.test(V)?S(new e(u.T_NAME,te,se,R,Z)):G=="\\"?O=1:(r("([{",G)?N+=1:r(")]}",G)&&--N,S(new e(u.T_OP,te,se,R,Z)))}}else S(new e(u.T_ERRORTOKEN,Z[q],[x,q],[x,q+1],Z)),q+=1}}d&&!r(`\r
`,d[d.length-1])&&S(new e(u.T_NEWLINE,"",[x-1,d.length],[x-1,d.length+1],""));for(var fe in Q.slice(1))S(new e(u.T_DEDENT,"",[x,0],[x,0],""));S(new e(u.T_ENDMARKER,"",[x,0],[x,0],""))},Sk.exportSymbol("Sk._tokenize",Sk._tokenize)},function(j,F){Sk.OpMap={"(":Sk.token.tokens.T_LPAR,")":Sk.token.tokens.T_RPAR,"[":Sk.token.tokens.T_LSQB,"]":Sk.token.tokens.T_RSQB,":":Sk.token.tokens.T_COLON,",":Sk.token.tokens.T_COMMA,";":Sk.token.tokens.T_SEMI,"+":Sk.token.tokens.T_PLUS,"-":Sk.token.tokens.T_MINUS,"*":Sk.token.tokens.T_STAR,"/":Sk.token.tokens.T_SLASH,"|":Sk.token.tokens.T_VBAR,"&":Sk.token.tokens.T_AMPER,"<":Sk.token.tokens.T_LESS,">":Sk.token.tokens.T_GREATER,"=":Sk.token.tokens.T_EQUAL,".":Sk.token.tokens.T_DOT,"%":Sk.token.tokens.T_PERCENT,"`":Sk.token.tokens.T_BACKQUOTE,"{":Sk.token.tokens.T_LBRACE,"}":Sk.token.tokens.T_RBRACE,"@":Sk.token.tokens.T_AT,"@=":Sk.token.tokens.T_ATEQUAL,"==":Sk.token.tokens.T_EQEQUAL,"!=":Sk.token.tokens.T_NOTEQUAL,"<>":Sk.token.tokens.T_NOTEQUAL,"<=":Sk.token.tokens.T_LESSEQUAL,">=":Sk.token.tokens.T_GREATEREQUAL,"~":Sk.token.tokens.T_TILDE,"^":Sk.token.tokens.T_CIRCUMFLEX,"<<":Sk.token.tokens.T_LEFTSHIFT,">>":Sk.token.tokens.T_RIGHTSHIFT,"**":Sk.token.tokens.T_DOUBLESTAR,"+=":Sk.token.tokens.T_PLUSEQUAL,"-=":Sk.token.tokens.T_MINEQUAL,"*=":Sk.token.tokens.T_STAREQUAL,"/=":Sk.token.tokens.T_SLASHEQUAL,"%=":Sk.token.tokens.T_PERCENTEQUAL,"&=":Sk.token.tokens.T_AMPEREQUAL,"|=":Sk.token.tokens.T_VBAREQUAL,"^=":Sk.token.tokens.T_CIRCUMFLEXEQUAL,"<<=":Sk.token.tokens.T_LEFTSHIFTEQUAL,">>=":Sk.token.tokens.T_RIGHTSHIFTEQUAL,"**=":Sk.token.tokens.T_DOUBLESTAREQUAL,"//":Sk.token.tokens.T_DOUBLESLASH,"//=":Sk.token.tokens.T_DOUBLESLASHEQUAL,"->":Sk.token.tokens.T_RARROW,"...":Sk.token.tokens.T_ELLIPSIS},Sk.ParseTables={sym:{and_expr:257,and_test:258,annassign:259,arglist:260,argument:261,arith_expr:262,assert_stmt:263,async_funcdef:264,async_stmt:265,atom:266,atom_expr:267,augassign:268,break_stmt:269,classdef:270,comp_for:271,comp_if:272,comp_iter:273,comp_op:274,comparison:275,compound_stmt:276,continue_stmt:277,debugger_stmt:278,decorated:279,decorator:280,decorators:281,del_stmt:282,dictorsetmaker:283,dotted_as_name:284,dotted_as_names:285,dotted_name:286,encoding_decl:287,eval_input:288,except_clause:289,expr:290,expr_stmt:291,exprlist:292,factor:293,file_input:294,flow_stmt:295,for_stmt:296,funcdef:297,global_stmt:298,if_stmt:299,import_as_name:300,import_as_names:301,import_from:302,import_name:303,import_stmt:304,lambdef:305,lambdef_nocond:306,nonlocal_stmt:307,not_test:308,or_test:309,parameters:310,pass_stmt:311,power:312,print_stmt:313,raise_stmt:314,return_stmt:315,shift_expr:316,simple_stmt:317,single_input:256,sliceop:318,small_stmt:319,star_expr:320,stmt:321,subscript:322,subscriptlist:323,suite:324,term:325,test:326,test_nocond:327,testlist:328,testlist_comp:329,testlist_star_expr:330,tfpdef:331,trailer:332,try_stmt:333,typedargslist:334,varargslist:335,vfpdef:336,while_stmt:337,with_item:338,with_stmt:339,xor_expr:340,yield_arg:341,yield_expr:342,yield_stmt:343},number2symbol:{256:"single_input",257:"and_expr",258:"and_test",259:"annassign",260:"arglist",261:"argument",262:"arith_expr",263:"assert_stmt",264:"async_funcdef",265:"async_stmt",266:"atom",267:"atom_expr",268:"augassign",269:"break_stmt",270:"classdef",271:"comp_for",272:"comp_if",273:"comp_iter",274:"comp_op",275:"comparison",276:"compound_stmt",277:"continue_stmt",278:"debugger_stmt",279:"decorated",280:"decorator",281:"decorators",282:"del_stmt",283:"dictorsetmaker",284:"dotted_as_name",285:"dotted_as_names",286:"dotted_name",287:"encoding_decl",288:"eval_input",289:"except_clause",290:"expr",291:"expr_stmt",292:"exprlist",293:"factor",294:"file_input",295:"flow_stmt",296:"for_stmt",297:"funcdef",298:"global_stmt",299:"if_stmt",300:"import_as_name",301:"import_as_names",302:"import_from",303:"import_name",304:"import_stmt",305:"lambdef",306:"lambdef_nocond",307:"nonlocal_stmt",308:"not_test",309:"or_test",310:"parameters",311:"pass_stmt",312:"power",313:"print_stmt",314:"raise_stmt",315:"return_stmt",316:"shift_expr",317:"simple_stmt",318:"sliceop",319:"small_stmt",320:"star_expr",321:"stmt",322:"subscript",323:"subscriptlist",324:"suite",325:"term",326:"test",327:"test_nocond",328:"testlist",329:"testlist_comp",330:"testlist_star_expr",331:"tfpdef",332:"trailer",333:"try_stmt",334:"typedargslist",335:"varargslist",336:"vfpdef",337:"while_stmt",338:"with_item",339:"with_stmt",340:"xor_expr",341:"yield_arg",342:"yield_expr",343:"yield_stmt"},dfas:{256:[[[[1,1],[2,1],[3,2]],[[0,1]],[[2,1]]],{2:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1}],257:[[[[44,1]],[[45,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],258:[[[[46,1]],[[47,0],[0,1]]],{6:1,7:1,8:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],259:[[[[48,1]],[[49,2]],[[50,3],[0,2]],[[49,4]],[[0,4]]],{48:1}],260:[[[[51,1]],[[52,2],[0,1]],[[51,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,53:1}],261:[[[[49,1],[15,2],[53,2]],[[50,2],[54,3],[0,1]],[[49,3]],[[0,3]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,53:1}],262:[[[[55,1]],[[30,0],[43,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],263:[[[[24,1]],[[49,2]],[[52,3],[0,2]],[[49,4]],[[0,4]]],{24:1}],264:[[[[10,1]],[[56,2]],[[0,2]]],{10:1}],265:[[[[10,1]],[[57,2],[56,2],[58,2]],[[0,2]]],{10:1}],266:[[[[6,1],[25,1],[33,1],[9,1],[11,1],[12,2],[35,3],[38,4],[19,1],[7,5]],[[0,1]],[[59,1],[60,6]],[[61,1],[62,7],[63,7]],[[64,1],[63,8]],[[7,5],[0,5]],[[59,1]],[[61,1]],[[64,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,25:1,33:1,35:1,38:1}],267:[[[[29,1],[65,2]],[[65,2]],[[66,2],[0,2]]],{6:1,7:1,9:1,11:1,12:1,19:1,25:1,29:1,33:1,35:1,38:1}],268:[[[[67,1],[68,1],[69,1],[70,1],[71,1],[72,1],[73,1],[74,1],[75,1],[76,1],[77,1],[78,1],[79,1]],[[0,1]]],{67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:1,75:1,76:1,77:1,78:1,79:1}],269:[[[[39,1]],[[0,1]]],{39:1}],270:[[[[13,1]],[[25,2]],[[48,3],[35,4]],[[80,5]],[[61,6],[81,7]],[[0,5]],[[48,3]],[[61,6]]],{13:1}],271:[[[[10,1],[34,2]],[[34,2]],[[82,3]],[[83,4]],[[84,5]],[[85,6],[0,5]],[[0,6]]],{10:1,34:1}],272:[[[[37,1]],[[86,2]],[[85,3],[0,2]],[[0,3]]],{37:1}],273:[[[[87,1],[54,1]],[[0,1]]],{10:1,34:1,37:1}],274:[[[[88,1],[89,1],[8,2],[90,1],[88,1],[83,1],[91,1],[92,3],[93,1],[94,1]],[[0,1]],[[83,1]],[[8,1],[0,3]]],{8:1,83:1,88:1,89:1,90:1,91:1,92:1,93:1,94:1}],275:[[[[95,1]],[[96,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],276:[[[[97,1],[98,1],[58,1],[99,1],[57,1],[100,1],[56,1],[101,1],[102,1]],[[0,1]]],{4:1,10:1,13:1,20:1,21:1,34:1,37:1,41:1,42:1}],277:[[[[40,1]],[[0,1]]],{40:1}],278:[[[[17,1]],[[0,1]]],{17:1}],279:[[[[103,1]],[[56,2],[104,2],[99,2]],[[0,2]]],{41:1}],280:[[[[41,1]],[[105,2]],[[2,4],[35,3]],[[61,5],[81,6]],[[0,4]],[[2,4]],[[61,5]]],{41:1}],281:[[[[106,1]],[[106,1],[0,1]]],{41:1}],282:[[[[27,1]],[[82,2]],[[0,2]]],{27:1}],283:[[[[49,1],[107,2],[53,3]],[[48,4],[54,5],[52,6],[0,1]],[[54,5],[52,6],[0,2]],[[95,7]],[[49,7]],[[0,5]],[[49,8],[107,8],[0,6]],[[54,5],[52,9],[0,7]],[[52,6],[0,8]],[[49,10],[53,11],[0,9]],[[48,12]],[[95,13]],[[49,13]],[[52,9],[0,13]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,53:1}],284:[[[[105,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],{25:1}],285:[[[[109,1]],[[52,0],[0,1]]],{25:1}],286:[[[[25,1]],[[110,0],[0,1]]],{25:1}],287:[[[[25,1]],[[0,1]]],{25:1}],288:[[[[111,1]],[[2,1],[112,2]],[[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],289:[[[[113,1]],[[49,2],[0,1]],[[108,3],[52,3],[0,2]],[[49,4]],[[0,4]]],{113:1}],290:[[[[114,1]],[[115,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],291:[[[[116,1]],[[117,2],[50,3],[118,4],[0,1]],[[111,4],[62,4]],[[116,5],[62,5]],[[0,4]],[[50,3],[0,5]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],292:[[[[95,1],[107,1]],[[52,2],[0,1]],[[95,1],[107,1],[0,2]]],{6:1,7:1,9:1,11:1,12:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],293:[[[[119,2],[30,1],[22,1],[43,1]],[[120,2]],[[0,2]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],294:[[[[2,0],[112,1],[121,0]],[[0,1]]],{2:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1,112:1}],295:[[[[122,1],[123,1],[124,1],[125,1],[126,1]],[[0,1]]],{5:1,23:1,31:1,39:1,40:1}],296:[[[[34,1]],[[82,2]],[[83,3]],[[111,4]],[[48,5]],[[80,6]],[[127,7],[0,6]],[[48,8]],[[80,9]],[[0,9]]],{34:1}],297:[[[[4,1]],[[25,2]],[[128,3]],[[48,4],[129,5]],[[80,6]],[[49,7]],[[0,6]],[[48,4]]],{4:1}],298:[[[[26,1]],[[25,2]],[[52,1],[0,2]]],{26:1}],299:[[[[37,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[130,1],[0,4]],[[48,6]],[[80,7]],[[0,7]]],{37:1}],300:[[[[25,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],{25:1}],301:[[[[131,1]],[[52,2],[0,1]],[[131,1],[0,2]]],{25:1}],302:[[[[36,1]],[[105,2],[19,3],[110,3]],[[32,4]],[[105,2],[19,3],[32,4],[110,3]],[[132,5],[15,5],[35,6]],[[0,5]],[[132,7]],[[61,5]]],{36:1}],303:[[[[32,1]],[[133,2]],[[0,2]]],{32:1}],304:[[[[134,1],[135,1]],[[0,1]]],{32:1,36:1}],305:[[[[14,1]],[[48,2],[136,3]],[[49,4]],[[48,2]],[[0,4]]],{14:1}],306:[[[[14,1]],[[48,2],[136,3]],[[86,4]],[[48,2]],[[0,4]]],{14:1}],307:[[[[18,1]],[[25,2]],[[52,1],[0,2]]],{18:1}],308:[[[[8,1],[137,2]],[[46,2]],[[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],309:[[[[138,1]],[[139,0],[0,1]]],{6:1,7:1,8:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],310:[[[[35,1]],[[61,2],[140,3]],[[0,2]],[[61,2]]],{35:1}],311:[[[[28,1]],[[0,1]]],{28:1}],312:[[[[141,1]],[[53,2],[0,1]],[[120,3]],[[0,3]]],{6:1,7:1,9:1,11:1,12:1,19:1,25:1,29:1,33:1,35:1,38:1}],313:[[[[16,1]],[[49,2],[142,3],[0,1]],[[52,4],[0,2]],[[49,5]],[[49,2],[0,4]],[[52,6],[0,5]],[[49,7]],[[52,8],[0,7]],[[49,7],[0,8]]],{16:1}],314:[[[[5,1]],[[49,2],[0,1]],[[36,3],[52,3],[0,2]],[[49,4]],[[52,5],[0,4]],[[49,6]],[[0,6]]],{5:1}],315:[[[[23,1]],[[111,2],[0,1]],[[0,2]]],{23:1}],316:[[[[143,1]],[[144,0],[142,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],317:[[[[145,1]],[[2,2],[146,3]],[[0,2]],[[145,1],[2,2]]],{5:1,6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,16:1,17:1,18:1,19:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,35:1,36:1,38:1,39:1,40:1,43:1}],318:[[[[48,1]],[[49,2],[0,1]],[[0,2]]],{48:1}],319:[[[[147,1],[148,1],[149,1],[150,1],[151,1],[152,1],[153,1],[154,1],[155,1],[156,1]],[[0,1]]],{5:1,6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,16:1,17:1,18:1,19:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,35:1,36:1,38:1,39:1,40:1,43:1}],320:[[[[15,1]],[[95,2]],[[0,2]]],{15:1}],321:[[[[1,1],[3,1]],[[0,1]]],{4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,34:1,35:1,36:1,37:1,38:1,39:1,40:1,41:1,42:1,43:1}],322:[[[[49,1],[48,2]],[[48,2],[0,1]],[[49,3],[157,4],[0,2]],[[157,4],[0,3]],[[0,4]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,48:1}],323:[[[[158,1]],[[52,2],[0,1]],[[158,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1,48:1}],324:[[[[1,1],[2,2]],[[0,1]],[[159,3]],[[121,4]],[[160,1],[121,4]]],{2:1,5:1,6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,16:1,17:1,18:1,19:1,22:1,23:1,24:1,25:1,26:1,27:1,28:1,29:1,30:1,31:1,32:1,33:1,35:1,36:1,38:1,39:1,40:1,43:1}],325:[[[[120,1]],[[161,0],[15,0],[162,0],[41,0],[163,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],326:[[[[84,1],[164,2]],[[37,3],[0,1]],[[0,2]],[[84,4]],[[127,5]],[[49,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],327:[[[[165,1],[84,1]],[[0,1]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],328:[[[[49,1]],[[52,2],[0,1]],[[49,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],329:[[[[49,1],[107,1]],[[54,2],[52,3],[0,1]],[[0,2]],[[49,4],[107,4],[0,3]],[[52,3],[0,4]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],330:[[[[49,1],[107,1]],[[52,2],[0,1]],[[49,1],[107,1],[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,15:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],331:[[[[25,1]],[[48,2],[0,1]],[[49,3]],[[0,3]]],{25:1}],332:[[[[35,1],[110,2],[38,3]],[[61,4],[81,5]],[[25,4]],[[166,6]],[[0,4]],[[61,4]],[[64,4]]],{35:1,38:1,110:1}],333:[[[[20,1]],[[48,2]],[[80,3]],[[167,4],[168,5]],[[48,6]],[[48,7]],[[80,8]],[[80,9]],[[167,4],[127,10],[168,5],[0,8]],[[0,9]],[[48,11]],[[80,12]],[[168,5],[0,12]]],{20:1}],334:[[[[15,1],[169,2],[53,3]],[[169,4],[52,5],[0,1]],[[50,6],[52,7],[0,2]],[[169,8]],[[52,5],[0,4]],[[169,9],[53,3],[0,5]],[[49,10]],[[15,11],[169,2],[53,3],[0,7]],[[52,12],[0,8]],[[50,13],[52,5],[0,9]],[[52,7],[0,10]],[[169,14],[52,15],[0,11]],[[0,12]],[[49,4]],[[52,15],[0,14]],[[169,16],[53,3],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],{15:1,25:1,53:1}],335:[[[[15,1],[53,2],[170,3]],[[170,5],[52,4],[0,1]],[[170,6]],[[50,7],[52,8],[0,3]],[[53,2],[170,9],[0,4]],[[52,4],[0,5]],[[52,10],[0,6]],[[49,11]],[[15,12],[53,2],[170,3],[0,8]],[[50,13],[52,4],[0,9]],[[0,10]],[[52,8],[0,11]],[[52,15],[170,14],[0,12]],[[49,5]],[[52,15],[0,14]],[[53,2],[170,16],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],{15:1,25:1,53:1}],336:[[[[25,1]],[[0,1]]],{25:1}],337:[[[[21,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[0,4]],[[48,6]],[[80,7]],[[0,7]]],{21:1}],338:[[[[49,1]],[[108,2],[0,1]],[[95,3]],[[0,3]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],339:[[[[42,1]],[[171,2]],[[48,3],[52,1]],[[80,4]],[[0,4]]],{42:1}],340:[[[[172,1]],[[173,0],[0,1]]],{6:1,7:1,9:1,11:1,12:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,38:1,43:1}],341:[[[[111,2],[36,1]],[[49,2]],[[0,2]]],{6:1,7:1,8:1,9:1,11:1,12:1,14:1,19:1,22:1,25:1,29:1,30:1,33:1,35:1,36:1,38:1,43:1}],342:[[[[31,1]],[[174,2],[0,1]],[[0,2]]],{31:1}],343:[[[[62,1]],[[0,1]]],{31:1}]},states:[[[[1,1],[2,1],[3,2]],[[0,1]],[[2,1]]],[[[44,1]],[[45,0],[0,1]]],[[[46,1]],[[47,0],[0,1]]],[[[48,1]],[[49,2]],[[50,3],[0,2]],[[49,4]],[[0,4]]],[[[51,1]],[[52,2],[0,1]],[[51,1],[0,2]]],[[[49,1],[15,2],[53,2]],[[50,2],[54,3],[0,1]],[[49,3]],[[0,3]]],[[[55,1]],[[30,0],[43,0],[0,1]]],[[[24,1]],[[49,2]],[[52,3],[0,2]],[[49,4]],[[0,4]]],[[[10,1]],[[56,2]],[[0,2]]],[[[10,1]],[[57,2],[56,2],[58,2]],[[0,2]]],[[[6,1],[25,1],[33,1],[9,1],[11,1],[12,2],[35,3],[38,4],[19,1],[7,5]],[[0,1]],[[59,1],[60,6]],[[61,1],[62,7],[63,7]],[[64,1],[63,8]],[[7,5],[0,5]],[[59,1]],[[61,1]],[[64,1]]],[[[29,1],[65,2]],[[65,2]],[[66,2],[0,2]]],[[[67,1],[68,1],[69,1],[70,1],[71,1],[72,1],[73,1],[74,1],[75,1],[76,1],[77,1],[78,1],[79,1]],[[0,1]]],[[[39,1]],[[0,1]]],[[[13,1]],[[25,2]],[[48,3],[35,4]],[[80,5]],[[61,6],[81,7]],[[0,5]],[[48,3]],[[61,6]]],[[[10,1],[34,2]],[[34,2]],[[82,3]],[[83,4]],[[84,5]],[[85,6],[0,5]],[[0,6]]],[[[37,1]],[[86,2]],[[85,3],[0,2]],[[0,3]]],[[[87,1],[54,1]],[[0,1]]],[[[88,1],[89,1],[8,2],[90,1],[88,1],[83,1],[91,1],[92,3],[93,1],[94,1]],[[0,1]],[[83,1]],[[8,1],[0,3]]],[[[95,1]],[[96,0],[0,1]]],[[[97,1],[98,1],[58,1],[99,1],[57,1],[100,1],[56,1],[101,1],[102,1]],[[0,1]]],[[[40,1]],[[0,1]]],[[[17,1]],[[0,1]]],[[[103,1]],[[56,2],[104,2],[99,2]],[[0,2]]],[[[41,1]],[[105,2]],[[2,4],[35,3]],[[61,5],[81,6]],[[0,4]],[[2,4]],[[61,5]]],[[[106,1]],[[106,1],[0,1]]],[[[27,1]],[[82,2]],[[0,2]]],[[[49,1],[107,2],[53,3]],[[48,4],[54,5],[52,6],[0,1]],[[54,5],[52,6],[0,2]],[[95,7]],[[49,7]],[[0,5]],[[49,8],[107,8],[0,6]],[[54,5],[52,9],[0,7]],[[52,6],[0,8]],[[49,10],[53,11],[0,9]],[[48,12]],[[95,13]],[[49,13]],[[52,9],[0,13]]],[[[105,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],[[[109,1]],[[52,0],[0,1]]],[[[25,1]],[[110,0],[0,1]]],[[[25,1]],[[0,1]]],[[[111,1]],[[2,1],[112,2]],[[0,2]]],[[[113,1]],[[49,2],[0,1]],[[108,3],[52,3],[0,2]],[[49,4]],[[0,4]]],[[[114,1]],[[115,0],[0,1]]],[[[116,1]],[[117,2],[50,3],[118,4],[0,1]],[[111,4],[62,4]],[[116,5],[62,5]],[[0,4]],[[50,3],[0,5]]],[[[95,1],[107,1]],[[52,2],[0,1]],[[95,1],[107,1],[0,2]]],[[[119,2],[30,1],[22,1],[43,1]],[[120,2]],[[0,2]]],[[[2,0],[112,1],[121,0]],[[0,1]]],[[[122,1],[123,1],[124,1],[125,1],[126,1]],[[0,1]]],[[[34,1]],[[82,2]],[[83,3]],[[111,4]],[[48,5]],[[80,6]],[[127,7],[0,6]],[[48,8]],[[80,9]],[[0,9]]],[[[4,1]],[[25,2]],[[128,3]],[[48,4],[129,5]],[[80,6]],[[49,7]],[[0,6]],[[48,4]]],[[[26,1]],[[25,2]],[[52,1],[0,2]]],[[[37,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[130,1],[0,4]],[[48,6]],[[80,7]],[[0,7]]],[[[25,1]],[[108,2],[0,1]],[[25,3]],[[0,3]]],[[[131,1]],[[52,2],[0,1]],[[131,1],[0,2]]],[[[36,1]],[[105,2],[19,3],[110,3]],[[32,4]],[[105,2],[19,3],[32,4],[110,3]],[[132,5],[15,5],[35,6]],[[0,5]],[[132,7]],[[61,5]]],[[[32,1]],[[133,2]],[[0,2]]],[[[134,1],[135,1]],[[0,1]]],[[[14,1]],[[48,2],[136,3]],[[49,4]],[[48,2]],[[0,4]]],[[[14,1]],[[48,2],[136,3]],[[86,4]],[[48,2]],[[0,4]]],[[[18,1]],[[25,2]],[[52,1],[0,2]]],[[[8,1],[137,2]],[[46,2]],[[0,2]]],[[[138,1]],[[139,0],[0,1]]],[[[35,1]],[[61,2],[140,3]],[[0,2]],[[61,2]]],[[[28,1]],[[0,1]]],[[[141,1]],[[53,2],[0,1]],[[120,3]],[[0,3]]],[[[16,1]],[[49,2],[142,3],[0,1]],[[52,4],[0,2]],[[49,5]],[[49,2],[0,4]],[[52,6],[0,5]],[[49,7]],[[52,8],[0,7]],[[49,7],[0,8]]],[[[5,1]],[[49,2],[0,1]],[[36,3],[52,3],[0,2]],[[49,4]],[[52,5],[0,4]],[[49,6]],[[0,6]]],[[[23,1]],[[111,2],[0,1]],[[0,2]]],[[[143,1]],[[144,0],[142,0],[0,1]]],[[[145,1]],[[2,2],[146,3]],[[0,2]],[[145,1],[2,2]]],[[[48,1]],[[49,2],[0,1]],[[0,2]]],[[[147,1],[148,1],[149,1],[150,1],[151,1],[152,1],[153,1],[154,1],[155,1],[156,1]],[[0,1]]],[[[15,1]],[[95,2]],[[0,2]]],[[[1,1],[3,1]],[[0,1]]],[[[49,1],[48,2]],[[48,2],[0,1]],[[49,3],[157,4],[0,2]],[[157,4],[0,3]],[[0,4]]],[[[158,1]],[[52,2],[0,1]],[[158,1],[0,2]]],[[[1,1],[2,2]],[[0,1]],[[159,3]],[[121,4]],[[160,1],[121,4]]],[[[120,1]],[[161,0],[15,0],[162,0],[41,0],[163,0],[0,1]]],[[[84,1],[164,2]],[[37,3],[0,1]],[[0,2]],[[84,4]],[[127,5]],[[49,2]]],[[[165,1],[84,1]],[[0,1]]],[[[49,1]],[[52,2],[0,1]],[[49,1],[0,2]]],[[[49,1],[107,1]],[[54,2],[52,3],[0,1]],[[0,2]],[[49,4],[107,4],[0,3]],[[52,3],[0,4]]],[[[49,1],[107,1]],[[52,2],[0,1]],[[49,1],[107,1],[0,2]]],[[[25,1]],[[48,2],[0,1]],[[49,3]],[[0,3]]],[[[35,1],[110,2],[38,3]],[[61,4],[81,5]],[[25,4]],[[166,6]],[[0,4]],[[61,4]],[[64,4]]],[[[20,1]],[[48,2]],[[80,3]],[[167,4],[168,5]],[[48,6]],[[48,7]],[[80,8]],[[80,9]],[[167,4],[127,10],[168,5],[0,8]],[[0,9]],[[48,11]],[[80,12]],[[168,5],[0,12]]],[[[15,1],[169,2],[53,3]],[[169,4],[52,5],[0,1]],[[50,6],[52,7],[0,2]],[[169,8]],[[52,5],[0,4]],[[169,9],[53,3],[0,5]],[[49,10]],[[15,11],[169,2],[53,3],[0,7]],[[52,12],[0,8]],[[50,13],[52,5],[0,9]],[[52,7],[0,10]],[[169,14],[52,15],[0,11]],[[0,12]],[[49,4]],[[52,15],[0,14]],[[169,16],[53,3],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],[[[15,1],[53,2],[170,3]],[[170,5],[52,4],[0,1]],[[170,6]],[[50,7],[52,8],[0,3]],[[53,2],[170,9],[0,4]],[[52,4],[0,5]],[[52,10],[0,6]],[[49,11]],[[15,12],[53,2],[170,3],[0,8]],[[50,13],[52,4],[0,9]],[[0,10]],[[52,8],[0,11]],[[52,15],[170,14],[0,12]],[[49,5]],[[52,15],[0,14]],[[53,2],[170,16],[0,15]],[[50,17],[52,15],[0,16]],[[49,14]]],[[[25,1]],[[0,1]]],[[[21,1]],[[49,2]],[[48,3]],[[80,4]],[[127,5],[0,4]],[[48,6]],[[80,7]],[[0,7]]],[[[49,1]],[[108,2],[0,1]],[[95,3]],[[0,3]]],[[[42,1]],[[171,2]],[[48,3],[52,1]],[[80,4]],[[0,4]]],[[[172,1]],[[173,0],[0,1]]],[[[111,2],[36,1]],[[49,2]],[[0,2]]],[[[31,1]],[[174,2],[0,1]],[[0,2]]],[[[62,1]],[[0,1]]]],labels:[[0,"EMPTY"],[317,null],[4,null],[276,null],[1,"def"],[1,"raise"],[1,"True"],[3,null],[1,"not"],[1,"null"],[55,null],[2,null],[25,null],[1,"class"],[1,"lambda"],[16,null],[1,"print"],[1,"debugger"],[1,"nonlocal"],[52,null],[1,"try"],[1,"while"],[31,null],[1,"return"],[1,"assert"],[1,null],[1,"global"],[1,"del"],[1,"pass"],[54,null],[15,null],[1,"yield"],[1,"import"],[1,"False"],[1,"for"],[7,null],[1,"from"],[1,"if"],[9,null],[1,"break"],[1,"continue"],[49,null],[1,"with"],[14,null],[316,null],[19,null],[308,null],[1,"and"],[11,null],[326,null],[22,null],[261,null],[12,null],[35,null],[271,null],[325,null],[297,null],[339,null],[296,null],[26,null],[283,null],[8,null],[342,null],[329,null],[10,null],[266,null],[332,null],[45,null],[38,null],[40,null],[50,null],[46,null],[41,null],[42,null],[36,null],[43,null],[48,null],[44,null],[37,null],[39,null],[324,null],[260,null],[292,null],[1,"in"],[309,null],[273,null],[327,null],[272,null],[28,null],[21,null],[27,null],[29,null],[1,"is"],[30,null],[20,null],[290,null],[274,null],[333,null],[299,null],[270,null],[337,null],[279,null],[265,null],[281,null],[264,null],[286,null],[280,null],[320,null],[1,"as"],[284,null],[23,null],[328,null],[0,null],[1,"except"],[340,null],[18,null],[330,null],[268,null],[259,null],[312,null],[293,null],[321,null],[269,null],[277,null],[314,null],[315,null],[343,null],[1,"else"],[310,null],[51,null],[1,"elif"],[300,null],[301,null],[285,null],[303,null],[302,null],[335,null],[275,null],[258,null],[1,"or"],[334,null],[267,null],[34,null],[262,null],[33,null],[319,null],[13,null],[295,null],[263,null],[291,null],[311,null],[307,null],[313,null],[282,null],[298,null],[304,null],[278,null],[318,null],[322,null],[5,null],[6,null],[47,null],[17,null],[24,null],[305,null],[306,null],[323,null],[289,null],[1,"finally"],[331,null],[336,null],[338,null],[257,null],[32,null],[341,null]],keywords:{False:33,null:9,True:6,and:47,as:108,assert:24,break:39,class:13,continue:40,debugger:17,def:4,del:27,elif:130,else:127,except:113,finally:168,for:34,from:36,global:26,if:37,import:32,in:83,is:92,lambda:14,nonlocal:18,not:8,or:139,pass:28,print:16,raise:5,return:23,try:20,while:21,with:42,yield:31},tokens:{0:112,1:25,2:11,3:7,4:2,5:159,6:160,7:35,8:61,9:38,10:64,11:48,12:52,13:146,14:43,15:30,16:15,17:162,18:115,19:45,20:94,21:89,22:50,23:110,24:163,25:12,26:59,27:90,28:88,29:91,30:93,31:22,32:173,33:144,34:142,35:53,36:74,37:78,38:68,39:79,40:69,41:72,42:73,43:75,44:77,45:67,46:71,47:161,48:76,49:41,50:70,51:129,52:19,54:29,55:10},start:256}},function(j,F){function e(t,r){return this.filename=t,this.grammar=r,this.p_flags=0,this}function n(t,r){return r===void 0&&(r="file_input"),t=new e(t,Sk.ParseTables),r==="file_input"?t.setup(Sk.ParseTables.sym.file_input):Sk.asserts.fail("todo;"),t}e.FUTURE_PRINT_FUNCTION="print_function",e.FUTURE_UNICODE_LITERALS="unicode_literals",e.FUTURE_DIVISION="division",e.FUTURE_ABSOLUTE_IMPORT="absolute_import",e.FUTURE_WITH_STATEMENT="with_statement",e.FUTURE_NESTED_SCOPES="nested_scopes",e.FUTURE_GENERATORS="generators",e.CO_FUTURE_PRINT_FUNCTION=65536,e.CO_FUTURE_UNICODE_LITERALS=131072,e.CO_FUTURE_DIVISON=8192,e.CO_FUTURE_ABSOLUTE_IMPORT=16384,e.CO_FUTURE_WITH_STATEMENT=32768,e.prototype.setup=function(t){t=t||this.grammar.start,this.stack=[{dfa:this.grammar.dfas[t],state:0,node:{type:t,value:null,context:null,children:[]}}],this.used_names={}},e.prototype.addtoken=function(t,r,l){var c,u=this.classify(t,r,l);e:for(;;){var i=this.stack[this.stack.length-1],o=i.dfa[0],p=o[i.state];for(c=0;c<p.length;++c){var s=p[c][0],a=p[c][1],$=this.grammar.labels[s][0];if(u===s){for(Sk.asserts.assert(256>$),this.shift(t,r,a,l),l=a;o[l].length===1&&o[l][0][0]===0&&o[l][0][1]===l;){if(this.pop(),this.stack.length===0)return!0;i=this.stack[this.stack.length-1],l=i.state,o=i.dfa[0]}return!1}if(256<=$&&(s=this.grammar.dfas[$],s=s[1],s.hasOwnProperty(u))){this.push($,this.grammar.dfas[$],a,l);continue e}}t:{for(o=[0,i.state],i=p.length;i--;)if(p[i][0]===o[0]&&p[i][1]===o[1]){p=!0;break t}p=!1}if(p){if(this.pop(),this.stack.length===0)throw new Sk.builtin.SyntaxError("too much input",this.filename)}else throw t=l[0][0],new Sk.builtin.SyntaxError("bad input",this.filename,t,l)}},e.prototype.classify=function(t,r,l){if(t===Sk.token.tokens.T_NAME){this.used_names[r]=!0;var c=this.grammar.keywords.hasOwnProperty(r)&&this.grammar.keywords[r];if(r==="print"&&(this.p_flags&e.CO_FUTURE_PRINT_FUNCTION||Sk.__future__.print_function===!0)&&(c=!1),c)return c}if(c=this.grammar.tokens.hasOwnProperty(t)&&this.grammar.tokens[t],!c){r="#"+t;for(let u in Sk.token.tokens)if(Sk.token.tokens[u]==t){r=u;break}throw new Sk.builtin.SyntaxError("bad token "+r,this.filename,l[0][0],l)}return c},e.prototype.shift=function(t,r,l,c){var u=this.stack[this.stack.length-1].dfa,i=this.stack[this.stack.length-1].node;i.children.push({type:t,value:r,lineno:c[0][0],col_offset:c[0][1],children:null}),this.stack[this.stack.length-1]={dfa:u,state:l,node:i}},e.prototype.push=function(t,r,l,c){t={type:t,value:null,lineno:c[0][0],col_offset:c[0][1],children:[]},this.stack[this.stack.length-1]={dfa:this.stack[this.stack.length-1].dfa,state:l,node:this.stack[this.stack.length-1].node},this.stack.push({dfa:r,state:0,node:t})},e.prototype.pop=function(){var t=this.stack.pop().node;if(t)if(this.stack.length!==0){var r=this.stack[this.stack.length-1].node;r.children.push(t)}else this.rootnode=t,this.rootnode.used_names=this.used_names},Sk.parse=function(t,r){var l=Sk.token.tokens.T_COMMENT,c=Sk.token.tokens.T_NL,u=Sk.token.tokens.T_OP,i=Sk.token.tokens.T_ENDMARKER,o=Sk.token.tokens.T_ENCODING,p=!1,s=n(t);if(Sk._tokenize(t,function(a){var $=a.split(`
`).reverse().map(function(y){return y+`
`});return function(){if($.length===0)throw new Sk.builtin.Exception("EOF");return $.pop()}}(r),"utf-8",function(a){var $=null;a.type!==l&&a.type!==c&&a.type!==o&&(a.type===u&&($=Sk.OpMap[a.string]),s.addtoken($||a.type,a.string,[a.start,a.end,a.line]),a.type===i&&(p=!0))}),!p)throw new Sk.builtin.SyntaxError("incomplete input",this.filename);return{cst:s.rootnode,flags:s.p_flags}},Sk.parseTreeDump=function(t,r){var l;r=r||"";var c=""+r;if(256<=t.type)for(c+=Sk.ParseTables.number2symbol[t.type]+`
`,l=0;l<t.children.length;++l)c+=Sk.parseTreeDump(t.children[l],r+"  ");else c+=Sk.token.tok_name[t.type]+": "+new Sk.builtin.str(t.value).$r().v+`
`;return c},Sk.exportSymbol("Sk.Parser",e),Sk.exportSymbol("Sk.parse",Sk.parse),Sk.exportSymbol("Sk.parseTreeDump",Sk.parseTreeDump)},function(j,F){Sk.astnodes={},Sk.astnodes.Load=function(){},Sk.astnodes.Store=function(){},Sk.astnodes.Del=function(){},Sk.astnodes.AugLoad=function(){},Sk.astnodes.AugStore=function(){},Sk.astnodes.Param=function(){},Sk.astnodes.And=function(){},Sk.astnodes.Or=function(){},Sk.astnodes.Add=function(){},Sk.astnodes.Sub=function(){},Sk.astnodes.Mult=function(){},Sk.astnodes.MatMult=function(){},Sk.astnodes.Div=function(){},Sk.astnodes.Mod=function(){},Sk.astnodes.Pow=function(){},Sk.astnodes.LShift=function(){},Sk.astnodes.RShift=function(){},Sk.astnodes.BitOr=function(){},Sk.astnodes.BitXor=function(){},Sk.astnodes.BitAnd=function(){},Sk.astnodes.FloorDiv=function(){},Sk.astnodes.Invert=function(){},Sk.astnodes.Not=function(){},Sk.astnodes.UAdd=function(){},Sk.astnodes.USub=function(){},Sk.astnodes.Eq=function(){},Sk.astnodes.NotEq=function(){},Sk.astnodes.Lt=function(){},Sk.astnodes.LtE=function(){},Sk.astnodes.Gt=function(){},Sk.astnodes.GtE=function(){},Sk.astnodes.Is=function(){},Sk.astnodes.IsNot=function(){},Sk.astnodes.In=function(){},Sk.astnodes.NotIn=function(){},Sk.astnodes.Module=function(e,n){return this.body=e,this.docstring=n,this},Sk.astnodes.Interactive=function(e){return this.body=e,this},Sk.astnodes.Expression=function(e){return this.body=e,this},Sk.astnodes.Suite=function(e){return this.body=e,this},Sk.astnodes.FunctionDef=function(e,n,t,r,l,c,u,i){return Sk.asserts.assert(u!=null),Sk.asserts.assert(i!=null),this.name=e,this.args=n,this.body=t,this.decorator_list=r,this.returns=l,this.docstring=c,this.lineno=u,this.col_offset=i,this},Sk.astnodes.AsyncFunctionDef=function(e,n,t,r,l,c,u,i){return Sk.asserts.assert(u!=null),Sk.asserts.assert(i!=null),this.name=e,this.args=n,this.body=t,this.decorator_list=r,this.returns=l,this.docstring=c,this.lineno=u,this.col_offset=i,this},Sk.astnodes.ClassDef=function(e,n,t,r,l,c,u,i){return Sk.asserts.assert(u!=null),Sk.asserts.assert(i!=null),this.name=e,this.bases=n,this.keywords=t,this.body=r,this.decorator_list=l,this.docstring=c,this.lineno=u,this.col_offset=i,this},Sk.astnodes.Return=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Delete=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.targets=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Assign=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.targets=e,this.value=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.AugAssign=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.target=e,this.op=n,this.value=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.AnnAssign=function(e,n,t,r,l,c){return Sk.asserts.assert(l!=null),Sk.asserts.assert(c!=null),this.target=e,this.annotation=n,this.value=t,this.simple=r,this.lineno=l,this.col_offset=c,this},Sk.astnodes.For=function(e,n,t,r,l,c){return Sk.asserts.assert(l!=null),Sk.asserts.assert(c!=null),this.target=e,this.iter=n,this.body=t,this.orelse=r,this.lineno=l,this.col_offset=c,this},Sk.astnodes.AsyncFor=function(e,n,t,r,l,c){return Sk.asserts.assert(l!=null),Sk.asserts.assert(c!=null),this.target=e,this.iter=n,this.body=t,this.orelse=r,this.lineno=l,this.col_offset=c,this},Sk.astnodes.While=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.test=e,this.body=n,this.orelse=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.If=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.test=e,this.body=n,this.orelse=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.With=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.items=e,this.body=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.AsyncWith=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.items=e,this.body=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Raise=function(e,n,t,r,l,c){return Sk.asserts.assert(l!=null),Sk.asserts.assert(c!=null),this.exc=e,this.cause=n,this.inst=t,this.tback=r,this.lineno=l,this.col_offset=c,this},Sk.astnodes.Try=function(e,n,t,r,l,c){return Sk.asserts.assert(l!=null),Sk.asserts.assert(c!=null),this.body=e,this.handlers=n,this.orelse=t,this.finalbody=r,this.lineno=l,this.col_offset=c,this},Sk.astnodes.Assert=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.test=e,this.msg=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Import=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.names=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.ImportFrom=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.module=e,this.names=n,this.level=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Global=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.names=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Nonlocal=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.names=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Expr=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Pass=function(e,n){return Sk.asserts.assert(e!=null),Sk.asserts.assert(n!=null),this.lineno=e,this.col_offset=n,this},Sk.astnodes.Break=function(e,n){return Sk.asserts.assert(e!=null),Sk.asserts.assert(n!=null),this.lineno=e,this.col_offset=n,this},Sk.astnodes.Continue=function(e,n){return Sk.asserts.assert(e!=null),Sk.asserts.assert(n!=null),this.lineno=e,this.col_offset=n,this},Sk.astnodes.Print=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.dest=e,this.values=n,this.nl=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Debugger=function(e,n){return Sk.asserts.assert(e!=null),Sk.asserts.assert(n!=null),this.lineno=e,this.col_offset=n,this},Sk.astnodes.BoolOp=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.op=e,this.values=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.BinOp=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.left=e,this.op=n,this.right=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.UnaryOp=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.op=e,this.operand=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Lambda=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.args=e,this.body=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.IfExp=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.test=e,this.body=n,this.orelse=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Dict=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.keys=e,this.values=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Set=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.elts=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.ListComp=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.elt=e,this.generators=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.SetComp=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.elt=e,this.generators=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.DictComp=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.key=e,this.value=n,this.generators=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.GeneratorExp=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.elt=e,this.generators=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Await=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Yield=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.YieldFrom=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Compare=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.left=e,this.ops=n,this.comparators=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Call=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.func=e,this.args=n,this.keywords=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Num=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.n=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Str=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.s=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.FormattedValue=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.value=e,this.conversion=n,this.format_spec=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.JoinedStr=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.values=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Bytes=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.s=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.NameConstant=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Ellipsis=function(e,n){return Sk.asserts.assert(e!=null),Sk.asserts.assert(n!=null),this.lineno=e,this.col_offset=n,this},Sk.astnodes.Constant=function(e,n,t){return Sk.asserts.assert(n!=null),Sk.asserts.assert(t!=null),this.value=e,this.lineno=n,this.col_offset=t,this},Sk.astnodes.Attribute=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.value=e,this.attr=n,this.ctx=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Subscript=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.value=e,this.slice=n,this.ctx=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.Starred=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.value=e,this.ctx=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Name=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.id=e,this.ctx=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.List=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.elts=e,this.ctx=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Tuple=function(e,n,t,r){return Sk.asserts.assert(t!=null),Sk.asserts.assert(r!=null),this.elts=e,this.ctx=n,this.lineno=t,this.col_offset=r,this},Sk.astnodes.Slice=function(e,n,t){return this.lower=e,this.upper=n,this.step=t,this},Sk.astnodes.ExtSlice=function(e){return this.dims=e,this},Sk.astnodes.Index=function(e){return this.value=e,this},Sk.astnodes.comprehension=function(e,n,t,r){return this.target=e,this.iter=n,this.ifs=t,this.is_async=r,this},Sk.astnodes.ExceptHandler=function(e,n,t,r,l){return Sk.asserts.assert(r!=null),Sk.asserts.assert(l!=null),this.type=e,this.name=n,this.body=t,this.lineno=r,this.col_offset=l,this},Sk.astnodes.arguments_=function(e,n,t,r,l,c){return this.args=e,this.vararg=n,this.kwonlyargs=t,this.kw_defaults=r,this.kwarg=l,this.defaults=c,this},Sk.astnodes.arg=function(e,n){return this.arg=e,this.annotation=n,this},Sk.astnodes.keyword=function(e,n){return this.arg=e,this.value=n,this},Sk.astnodes.alias=function(e,n){return this.name=e,this.asname=n,this},Sk.astnodes.withitem=function(e,n){return this.context_expr=e,this.optional_vars=n,this},Sk.astnodes.Module.prototype._astname="Module",Sk.astnodes.Module.prototype._fields=["body",function(e){return e.body},"docstring",function(e){return e.docstring}],Sk.astnodes.Interactive.prototype._astname="Interactive",Sk.astnodes.Interactive.prototype._fields=["body",function(e){return e.body}],Sk.astnodes.Expression.prototype._astname="Expression",Sk.astnodes.Expression.prototype._fields=["body",function(e){return e.body}],Sk.astnodes.Suite.prototype._astname="Suite",Sk.astnodes.Suite.prototype._fields=["body",function(e){return e.body}],Sk.astnodes.FunctionDef.prototype._astname="FunctionDef",Sk.astnodes.FunctionDef.prototype._fields=["name",function(e){return e.name},"args",function(e){return e.args},"body",function(e){return e.body},"decorator_list",function(e){return e.decorator_list},"returns",function(e){return e.returns},"docstring",function(e){return e.docstring}],Sk.astnodes.AsyncFunctionDef.prototype._astname="AsyncFunctionDef",Sk.astnodes.AsyncFunctionDef.prototype._fields=["name",function(e){return e.name},"args",function(e){return e.args},"body",function(e){return e.body},"decorator_list",function(e){return e.decorator_list},"returns",function(e){return e.returns},"docstring",function(e){return e.docstring}],Sk.astnodes.ClassDef.prototype._astname="ClassDef",Sk.astnodes.ClassDef.prototype._fields=["name",function(e){return e.name},"bases",function(e){return e.bases},"keywords",function(e){return e.keywords},"body",function(e){return e.body},"decorator_list",function(e){return e.decorator_list},"docstring",function(e){return e.docstring}],Sk.astnodes.Return.prototype._astname="Return",Sk.astnodes.Return.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.Delete.prototype._astname="Delete",Sk.astnodes.Delete.prototype._fields=["targets",function(e){return e.targets}],Sk.astnodes.Assign.prototype._astname="Assign",Sk.astnodes.Assign.prototype._fields=["targets",function(e){return e.targets},"value",function(e){return e.value}],Sk.astnodes.AugAssign.prototype._astname="AugAssign",Sk.astnodes.AugAssign.prototype._fields=["target",function(e){return e.target},"op",function(e){return e.op},"value",function(e){return e.value}],Sk.astnodes.AnnAssign.prototype._astname="AnnAssign",Sk.astnodes.AnnAssign.prototype._fields=["target",function(e){return e.target},"annotation",function(e){return e.annotation},"value",function(e){return e.value},"simple",function(e){return e.simple}],Sk.astnodes.For.prototype._astname="For",Sk.astnodes.For.prototype._fields=["target",function(e){return e.target},"iter",function(e){return e.iter},"body",function(e){return e.body},"orelse",function(e){return e.orelse}],Sk.astnodes.AsyncFor.prototype._astname="AsyncFor",Sk.astnodes.AsyncFor.prototype._fields=["target",function(e){return e.target},"iter",function(e){return e.iter},"body",function(e){return e.body},"orelse",function(e){return e.orelse}],Sk.astnodes.While.prototype._astname="While",Sk.astnodes.While.prototype._fields=["test",function(e){return e.test},"body",function(e){return e.body},"orelse",function(e){return e.orelse}],Sk.astnodes.If.prototype._astname="If",Sk.astnodes.If.prototype._fields=["test",function(e){return e.test},"body",function(e){return e.body},"orelse",function(e){return e.orelse}],Sk.astnodes.With.prototype._astname="With",Sk.astnodes.With.prototype._fields=["items",function(e){return e.items},"body",function(e){return e.body}],Sk.astnodes.AsyncWith.prototype._astname="AsyncWith",Sk.astnodes.AsyncWith.prototype._fields=["items",function(e){return e.items},"body",function(e){return e.body}],Sk.astnodes.Raise.prototype._astname="Raise",Sk.astnodes.Raise.prototype._fields=["exc",function(e){return e.exc},"cause",function(e){return e.cause},"inst",function(e){return e.inst},"tback",function(e){return e.tback}],Sk.astnodes.Try.prototype._astname="Try",Sk.astnodes.Try.prototype._fields=["body",function(e){return e.body},"handlers",function(e){return e.handlers},"orelse",function(e){return e.orelse},"finalbody",function(e){return e.finalbody}],Sk.astnodes.Assert.prototype._astname="Assert",Sk.astnodes.Assert.prototype._fields=["test",function(e){return e.test},"msg",function(e){return e.msg}],Sk.astnodes.Import.prototype._astname="Import",Sk.astnodes.Import.prototype._fields=["names",function(e){return e.names}],Sk.astnodes.ImportFrom.prototype._astname="ImportFrom",Sk.astnodes.ImportFrom.prototype._fields=["module",function(e){return e.module},"names",function(e){return e.names},"level",function(e){return e.level}],Sk.astnodes.Global.prototype._astname="Global",Sk.astnodes.Global.prototype._fields=["names",function(e){return e.names}],Sk.astnodes.Nonlocal.prototype._astname="Nonlocal",Sk.astnodes.Nonlocal.prototype._fields=["names",function(e){return e.names}],Sk.astnodes.Expr.prototype._astname="Expr",Sk.astnodes.Expr.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.Pass.prototype._astname="Pass",Sk.astnodes.Pass.prototype._fields=[],Sk.astnodes.Break.prototype._astname="Break",Sk.astnodes.Break.prototype._fields=[],Sk.astnodes.Continue.prototype._astname="Continue",Sk.astnodes.Continue.prototype._fields=[],Sk.astnodes.Print.prototype._astname="Print",Sk.astnodes.Print.prototype._fields=["dest",function(e){return e.dest},"values",function(e){return e.values},"nl",function(e){return e.nl}],Sk.astnodes.Debugger.prototype._astname="Debugger",Sk.astnodes.Debugger.prototype._fields=[],Sk.astnodes.BoolOp.prototype._astname="BoolOp",Sk.astnodes.BoolOp.prototype._fields=["op",function(e){return e.op},"values",function(e){return e.values}],Sk.astnodes.BinOp.prototype._astname="BinOp",Sk.astnodes.BinOp.prototype._fields=["left",function(e){return e.left},"op",function(e){return e.op},"right",function(e){return e.right}],Sk.astnodes.UnaryOp.prototype._astname="UnaryOp",Sk.astnodes.UnaryOp.prototype._fields=["op",function(e){return e.op},"operand",function(e){return e.operand}],Sk.astnodes.Lambda.prototype._astname="Lambda",Sk.astnodes.Lambda.prototype._fields=["args",function(e){return e.args},"body",function(e){return e.body}],Sk.astnodes.IfExp.prototype._astname="IfExp",Sk.astnodes.IfExp.prototype._fields=["test",function(e){return e.test},"body",function(e){return e.body},"orelse",function(e){return e.orelse}],Sk.astnodes.Dict.prototype._astname="Dict",Sk.astnodes.Dict.prototype._fields=["keys",function(e){return e.keys},"values",function(e){return e.values}],Sk.astnodes.Set.prototype._astname="Set",Sk.astnodes.Set.prototype._fields=["elts",function(e){return e.elts}],Sk.astnodes.ListComp.prototype._astname="ListComp",Sk.astnodes.ListComp.prototype._fields=["elt",function(e){return e.elt},"generators",function(e){return e.generators}],Sk.astnodes.SetComp.prototype._astname="SetComp",Sk.astnodes.SetComp.prototype._fields=["elt",function(e){return e.elt},"generators",function(e){return e.generators}],Sk.astnodes.DictComp.prototype._astname="DictComp",Sk.astnodes.DictComp.prototype._fields=["key",function(e){return e.key},"value",function(e){return e.value},"generators",function(e){return e.generators}],Sk.astnodes.GeneratorExp.prototype._astname="GeneratorExp",Sk.astnodes.GeneratorExp.prototype._fields=["elt",function(e){return e.elt},"generators",function(e){return e.generators}],Sk.astnodes.Await.prototype._astname="Await",Sk.astnodes.Await.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.Yield.prototype._astname="Yield",Sk.astnodes.Yield.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.YieldFrom.prototype._astname="YieldFrom",Sk.astnodes.YieldFrom.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.Compare.prototype._astname="Compare",Sk.astnodes.Compare.prototype._fields=["left",function(e){return e.left},"ops",function(e){return e.ops},"comparators",function(e){return e.comparators}],Sk.astnodes.Call.prototype._astname="Call",Sk.astnodes.Call.prototype._fields=["func",function(e){return e.func},"args",function(e){return e.args},"keywords",function(e){return e.keywords}],Sk.astnodes.Num.prototype._astname="Num",Sk.astnodes.Num.prototype._fields=["n",function(e){return e.n}],Sk.astnodes.Str.prototype._astname="Str",Sk.astnodes.Str.prototype._fields=["s",function(e){return e.s}],Sk.astnodes.FormattedValue.prototype._astname="FormattedValue",Sk.astnodes.FormattedValue.prototype._fields=["value",function(e){return e.value},"conversion",function(e){return e.conversion},"format_spec",function(e){return e.format_spec}],Sk.astnodes.JoinedStr.prototype._astname="JoinedStr",Sk.astnodes.JoinedStr.prototype._fields=["values",function(e){return e.values}],Sk.astnodes.Bytes.prototype._astname="Bytes",Sk.astnodes.Bytes.prototype._fields=["s",function(e){return e.s}],Sk.astnodes.NameConstant.prototype._astname="NameConstant",Sk.astnodes.NameConstant.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.Ellipsis.prototype._astname="Ellipsis",Sk.astnodes.Ellipsis.prototype._fields=[],Sk.astnodes.Constant.prototype._astname="Constant",Sk.astnodes.Constant.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.Attribute.prototype._astname="Attribute",Sk.astnodes.Attribute.prototype._fields=["value",function(e){return e.value},"attr",function(e){return e.attr},"ctx",function(e){return e.ctx}],Sk.astnodes.Subscript.prototype._astname="Subscript",Sk.astnodes.Subscript.prototype._fields=["value",function(e){return e.value},"slice",function(e){return e.slice},"ctx",function(e){return e.ctx}],Sk.astnodes.Starred.prototype._astname="Starred",Sk.astnodes.Starred.prototype._fields=["value",function(e){return e.value},"ctx",function(e){return e.ctx}],Sk.astnodes.Name.prototype._astname="Name",Sk.astnodes.Name.prototype._fields=["id",function(e){return e.id},"ctx",function(e){return e.ctx}],Sk.astnodes.List.prototype._astname="List",Sk.astnodes.List.prototype._fields=["elts",function(e){return e.elts},"ctx",function(e){return e.ctx}],Sk.astnodes.Tuple.prototype._astname="Tuple",Sk.astnodes.Tuple.prototype._fields=["elts",function(e){return e.elts},"ctx",function(e){return e.ctx}],Sk.astnodes.Load.prototype._astname="Load",Sk.astnodes.Load.prototype._isenum=!0,Sk.astnodes.Store.prototype._astname="Store",Sk.astnodes.Store.prototype._isenum=!0,Sk.astnodes.Del.prototype._astname="Del",Sk.astnodes.Del.prototype._isenum=!0,Sk.astnodes.AugLoad.prototype._astname="AugLoad",Sk.astnodes.AugLoad.prototype._isenum=!0,Sk.astnodes.AugStore.prototype._astname="AugStore",Sk.astnodes.AugStore.prototype._isenum=!0,Sk.astnodes.Param.prototype._astname="Param",Sk.astnodes.Param.prototype._isenum=!0,Sk.astnodes.Slice.prototype._astname="Slice",Sk.astnodes.Slice.prototype._fields=["lower",function(e){return e.lower},"upper",function(e){return e.upper},"step",function(e){return e.step}],Sk.astnodes.ExtSlice.prototype._astname="ExtSlice",Sk.astnodes.ExtSlice.prototype._fields=["dims",function(e){return e.dims}],Sk.astnodes.Index.prototype._astname="Index",Sk.astnodes.Index.prototype._fields=["value",function(e){return e.value}],Sk.astnodes.And.prototype._astname="And",Sk.astnodes.And.prototype._isenum=!0,Sk.astnodes.Or.prototype._astname="Or",Sk.astnodes.Or.prototype._isenum=!0,Sk.astnodes.Add.prototype._astname="Add",Sk.astnodes.Add.prototype._isenum=!0,Sk.astnodes.Sub.prototype._astname="Sub",Sk.astnodes.Sub.prototype._isenum=!0,Sk.astnodes.Mult.prototype._astname="Mult",Sk.astnodes.Mult.prototype._isenum=!0,Sk.astnodes.MatMult.prototype._astname="MatMult",Sk.astnodes.MatMult.prototype._isenum=!0,Sk.astnodes.Div.prototype._astname="Div",Sk.astnodes.Div.prototype._isenum=!0,Sk.astnodes.Mod.prototype._astname="Mod",Sk.astnodes.Mod.prototype._isenum=!0,Sk.astnodes.Pow.prototype._astname="Pow",Sk.astnodes.Pow.prototype._isenum=!0,Sk.astnodes.LShift.prototype._astname="LShift",Sk.astnodes.LShift.prototype._isenum=!0,Sk.astnodes.RShift.prototype._astname="RShift",Sk.astnodes.RShift.prototype._isenum=!0,Sk.astnodes.BitOr.prototype._astname="BitOr",Sk.astnodes.BitOr.prototype._isenum=!0,Sk.astnodes.BitXor.prototype._astname="BitXor",Sk.astnodes.BitXor.prototype._isenum=!0,Sk.astnodes.BitAnd.prototype._astname="BitAnd",Sk.astnodes.BitAnd.prototype._isenum=!0,Sk.astnodes.FloorDiv.prototype._astname="FloorDiv",Sk.astnodes.FloorDiv.prototype._isenum=!0,Sk.astnodes.Invert.prototype._astname="Invert",Sk.astnodes.Invert.prototype._isenum=!0,Sk.astnodes.Not.prototype._astname="Not",Sk.astnodes.Not.prototype._isenum=!0,Sk.astnodes.UAdd.prototype._astname="UAdd",Sk.astnodes.UAdd.prototype._isenum=!0,Sk.astnodes.USub.prototype._astname="USub",Sk.astnodes.USub.prototype._isenum=!0,Sk.astnodes.Eq.prototype._astname="Eq",Sk.astnodes.Eq.prototype._isenum=!0,Sk.astnodes.NotEq.prototype._astname="NotEq",Sk.astnodes.NotEq.prototype._isenum=!0,Sk.astnodes.Lt.prototype._astname="Lt",Sk.astnodes.Lt.prototype._isenum=!0,Sk.astnodes.LtE.prototype._astname="LtE",Sk.astnodes.LtE.prototype._isenum=!0,Sk.astnodes.Gt.prototype._astname="Gt",Sk.astnodes.Gt.prototype._isenum=!0,Sk.astnodes.GtE.prototype._astname="GtE",Sk.astnodes.GtE.prototype._isenum=!0,Sk.astnodes.Is.prototype._astname="Is",Sk.astnodes.Is.prototype._isenum=!0,Sk.astnodes.IsNot.prototype._astname="IsNot",Sk.astnodes.IsNot.prototype._isenum=!0,Sk.astnodes.In.prototype._astname="In",Sk.astnodes.In.prototype._isenum=!0,Sk.astnodes.NotIn.prototype._astname="NotIn",Sk.astnodes.NotIn.prototype._isenum=!0,Sk.astnodes.comprehension.prototype._astname="comprehension",Sk.astnodes.comprehension.prototype._fields=["target",function(e){return e.target},"iter",function(e){return e.iter},"ifs",function(e){return e.ifs},"is_async",function(e){return e.is_async}],Sk.astnodes.ExceptHandler.prototype._astname="ExceptHandler",Sk.astnodes.ExceptHandler.prototype._fields=["type",function(e){return e.type},"name",function(e){return e.name},"body",function(e){return e.body}],Sk.astnodes.arguments_.prototype._astname="arguments",Sk.astnodes.arguments_.prototype._fields=["args",function(e){return e.args},"vararg",function(e){return e.vararg},"kwonlyargs",function(e){return e.kwonlyargs},"kw_defaults",function(e){return e.kw_defaults},"kwarg",function(e){return e.kwarg},"defaults",function(e){return e.defaults}],Sk.astnodes.arg.prototype._astname="arg",Sk.astnodes.arg.prototype._fields=["arg",function(e){return e.arg},"annotation",function(e){return e.annotation}],Sk.astnodes.keyword.prototype._astname="keyword",Sk.astnodes.keyword.prototype._fields=["arg",function(e){return e.arg},"value",function(e){return e.value}],Sk.astnodes.alias.prototype._astname="alias",Sk.astnodes.alias.prototype._fields=["name",function(e){return e.name},"asname",function(e){return e.asname}],Sk.astnodes.withitem.prototype._astname="withitem",Sk.astnodes.withitem.prototype._fields=["context_expr",function(e){return e.context_expr},"optional_vars",function(e){return e.optional_vars}],Sk.exportSymbol("Sk.astnodes",Sk.astnodes)},function(j,F){function e(T,_,E){this.c_encoding=T,this.c_filename=_,this.c_flags=E||0}function n(T){return Sk.asserts.assert(T!==void 0,"node must be defined"),T.children===null?0:T.children.length}function t(T,_){return Sk.asserts.assert(T!==void 0,"node must be defined"),Sk.asserts.assert(_!==void 0,"index of child must be specified"),T.children[_]}function r(T,_){Sk.asserts.assert(T.type===_,"node wasn't expected type")}function l(T,_,E){throw new Sk.builtin.SyntaxError(E,T.c_filename,_.lineno)}function c(T){return Sk.asserts.assert(typeof T=="string","expecting string, got "+typeof T),new Sk.builtin.str(T)}function u(T){var _,E;switch(T.type){case R.single_input:if(t(T,0).type===G.T_NEWLINE)break;return u(t(T,0));case R.file_input:for(_=E=0;_<n(T);++_){var I=t(T,_);I.type===R.stmt&&(E+=u(I))}return E;case R.stmt:return u(t(T,0));case R.compound_stmt:return 1;case R.simple_stmt:return Math.floor(n(T)/2);case R.suite:if(n(T)===1)return u(t(T,0));for(E=0,_=2;_<n(T)-1;++_)E+=u(t(T,_));return E;default:Sk.asserts.fail("Non-statement found")}return 0}function i(T,_,E,I){if(E instanceof Sk.builtin.str&&(E=E.v),E==="None")throw new Sk.builtin.SyntaxError("assignment to None",T.c_filename,I);if(E==="True"||E==="False")throw new Sk.builtin.SyntaxError("assignment to True or False is forbidden",T.c_filename,I)}function o(T,_,E,I){var C;Sk.asserts.assert(E!==Sk.astnodes.AugStore&&E!==Sk.astnodes.AugLoad,"context not AugStore or AugLoad");var B=C=null;switch(_.constructor){case Sk.astnodes.Attribute:case Sk.astnodes.Name:E===Sk.astnodes.Store&&i(T,I,_.attr,I.lineno),_.ctx=E;break;case Sk.astnodes.Starred:_.ctx=E,o(T,_.value,E,I);break;case Sk.astnodes.Subscript:_.ctx=E;break;case Sk.astnodes.List:_.ctx=E,C=_.elts;break;case Sk.astnodes.Tuple:if(_.elts.length===0)throw new Sk.builtin.SyntaxError("can't assign to ()",T.c_filename,I.lineno);_.ctx=E,C=_.elts;break;case Sk.astnodes.Lambda:B="lambda";break;case Sk.astnodes.Call:B="function call";break;case Sk.astnodes.BoolOp:case Sk.astnodes.BinOp:case Sk.astnodes.UnaryOp:B="operator";break;case Sk.astnodes.GeneratorExp:B="generator expression";break;case Sk.astnodes.Yield:B="yield expression";break;case Sk.astnodes.ListComp:B="list comprehension";break;case Sk.astnodes.SetComp:B="set comprehension";break;case Sk.astnodes.DictComp:B="dict comprehension";break;case Sk.astnodes.Dict:case Sk.astnodes.Set:case Sk.astnodes.Num:case Sk.astnodes.Str:B="literal";break;case Sk.astnodes.NameConstant:B="True, False or None";break;case Sk.astnodes.Compare:B="comparison";break;case Sk.astnodes.Repr:B="repr";break;case Sk.astnodes.IfExp:B="conditional expression";break;default:Sk.asserts.fail("unhandled expression in assignment")}if(B)throw new Sk.builtin.SyntaxError("can't "+(E===Sk.astnodes.Store?"assign to":"delete")+" "+B,T.c_filename,I.lineno);if(C)for(_=0;_<C.length;++_)o(T,C[_],E,I)}function p(T){if(ae[T.type]===void 0)throw new Sk.builtin.SyntaxError("invalid syntax",T.type,T.lineno);return ae[T.type]}function s(T,_){return T.value?new Sk.builtin.str(T.value):new Sk.builtin.str(T)}function a(T,_){if(r(_,R.comp_op),n(_)===1)switch(_=t(_,0),_.type){case G.T_LESS:return Sk.astnodes.Lt;case G.T_GREATER:return Sk.astnodes.Gt;case G.T_EQEQUAL:return Sk.astnodes.Eq;case G.T_LESSEQUAL:return Sk.astnodes.LtE;case G.T_GREATEREQUAL:return Sk.astnodes.GtE;case G.T_NOTEQUAL:return Sk.astnodes.NotEq;case G.T_NAME:if(_.value==="in")return Sk.astnodes.In;if(_.value==="is")return Sk.astnodes.Is}else if(n(_)===2&&t(_,0).type===G.T_NAME){if(t(_,1).value==="in")return Sk.astnodes.NotIn;if(t(_,0).value==="is")return Sk.astnodes.IsNot}Sk.asserts.fail("invalid comp_op")}function $(T,_){return T&&(T.lineno=_.lineno,T.col_offset=_.col_offset,T.end_lineno=_.end_lineno,T.end_col_offset=_.end_col_offset),T}function y(T,_){var E,I=[];for(Sk.asserts.assert(_.type===R.testlist||_.type===R.testlist_star_expr||_.type===R.listmaker||_.type===R.testlist_comp||_.type===R.testlist_safe||_.type===R.testlist1,"node type must be listlike"),E=0;E<n(_);E+=2)Sk.asserts.assert(t(_,E).type===R.test||t(_,E).type===R.old_test||t(_,E).type===R.star_expr),I[E/2]=q(T,t(_,E));return I}function w(T,_){var E;r(_,R.suite);var I=[],C=0;if(t(_,0).type===R.simple_stmt){_=t(_,0);var B=n(_)-1;for(t(_,B-1).type===G.T_SEMI&&--B,E=0;E<B;E+=2)I[C++]=le(T,t(_,E))}else for(E=2;E<n(_)-1;++E){B=t(_,E),r(B,R.stmt);var L=u(B);if(L===1)I[C++]=le(T,B);else for(B=t(B,0),r(B,R.simple_stmt),L=0;L<n(B);L+=2){if(n(t(B,L))===0){Sk.asserts.assert(L+1===n(B));break}I[C++]=le(T,t(B,L))}}return Sk.asserts.assert(C===u(_)),I}function m(T,_,E){var I;r(_,R.exprlist);var C=[];for(I=0;I<n(_);I+=2){var B=q(T,t(_,I));C[I/2]=B,E&&o(T,B,E,t(_,I))}return C}function h(T,_){e:for(;;)switch(_.type){case R.import_as_name:T=null;var E=c(t(_,0).value);return n(_)===3&&(T=t(_,2).value),new Sk.astnodes.alias(E,T==null?null:c(T));case R.dotted_as_name:if(n(_)===1){_=t(_,0);continue e}else return T=h(T,t(_,0)),Sk.asserts.assert(!T.asname),T.asname=c(t(_,2).value),T;case R.dotted_name:if(n(_)===1)return new Sk.astnodes.alias(c(t(_,0).value),null);for(T="",E=0;E<n(_);E+=2)T+=t(_,E).value+".";return new Sk.astnodes.alias(c(T.substr(0,T.length-1)),null);case G.T_STAR:return new Sk.astnodes.alias(c("*"),null);default:throw new Sk.builtin.SyntaxError("unexpected import name",T.c_filename,_.lineno)}}function v(T,_){return Sk.asserts.assert(_.type==R.testlist_comp||_.type==R.argument),O(T,_,0)}function k(T,_){if(t(_,0).type===G.T_MINUS&&n(_)===2){var E=t(_,1);if(E.type===R.factor&&n(E)===1&&(E=t(E,0),E.type===R.power&&n(E)===1)){var I=t(E,0);if(I.type===R.atom&&(E=t(I,0),E.type===G.T_NUMBER))return E.value="-"+E.value,se(T,I)}}switch(T=q(T,t(_,1)),t(_,0).type){case G.T_PLUS:return new Sk.astnodes.UnaryOp(Sk.astnodes.UAdd,T,_.lineno,_.col_offset);case G.T_MINUS:return new Sk.astnodes.UnaryOp(Sk.astnodes.USub,T,_.lineno,_.col_offset);case G.T_TILDE:return new Sk.astnodes.UnaryOp(Sk.astnodes.Invert,T,_.lineno,_.col_offset)}Sk.asserts.fail("unhandled factor")}function A(T,_,E,I){var C,B,L;for(r(_,R.arglist),C=L=B=0;C<n(_);C++){var z=t(_,C);z.type==R.argument&&(n(z)==1?B++:t(z,1).type==R.comp_for?(B++,I||l(T,z,"invalid syntax"),1<n(_)&&l(T,z,"Generator expression must be parenthesized")):t(z,0).type==G.T_STAR?B++:L++)}var H=[],U=[];for(C=I=L=B=0;C<n(_);C++)if(z=t(_,C),z.type==R.argument){var Y=t(z,0);if(n(z)==1){L&&(I?l(T,Y,"positional argument follows keyword argument unpacking"):l(T,Y,"positional argument follows keyword argument"));var J=q(T,Y);if(!J)return null;H[B++]=J}else if(Y.type==G.T_STAR){if(I)return l(T,Y,"iterable argument unpacking follows keyword argument unpacking"),null;if(J=q(T,t(z,1)),!J)return null;z=new Sk.astnodes.Starred(J,Sk.astnodes.Load,Y.lineno,Y.col_offset),H[B++]=z}else if(Y.type==G.T_DOUBLESTAR){if(C++,J=q(T,t(z,1)),!J)return null;z=new Sk.astnodes.keyword(null,J),U[L++]=z,I++}else if(t(z,1).type==R.comp_for){if(J=v(T,z),!J)return null;H[B++]=J}else{var K;if(J=q(T,Y),!J)return null;if(J.constructor===Sk.astnodes.Lambda)return l(T,Y,"lambda cannot contain assignment"),null;if(J.constructor!==Sk.astnodes.Name)return l(T,Y,"keyword can't be an expression"),null;if(i(T,J.id,z,1))return null;var oe=J.id;for(K=0;K<L;K++)if((J=U[K].arg)&&J===oe)return l(T,Y,"keyword argument repeated"),null;if(J=q(T,t(z,2)),!J)return null;z=new Sk.astnodes.keyword(oe,J),U[L++]=z}}return new Sk.astnodes.Call(E,H,U,E.lineno,E.col_offset)}function M(T,_,E){if(r(_,R.trailer),t(_,0).type==G.T_LPAR)return n(_)==2?new Sk.astnodes.Call(E,null,null,_.lineno,_.col_offset):A(T,t(_,1),E,!0);if(t(_,0).type==G.T_DOT){var I=s(t(_,1));return I?new Sk.astnodes.Attribute(E,I,Sk.astnodes.Load,_.lineno,_.col_offset):null}if(r(t(_,0),G.T_LSQB),r(t(_,2),G.T_RSQB),_=t(_,1),n(_)==1)return(I=te(T,t(_,0)))?new Sk.astnodes.Subscript(E,I,Sk.astnodes.Load,_.lineno,_.col_offset):null;var C,B=1,L=[];for(C=0;C<n(_);C+=2){if(I=te(T,t(_,C)),!I)return null;I.kind!=fe.Index_kind&&(B=0),L[C/2]=I}if(!B)return new Sk.astnodes.Subscript(E,new Sk.astnodes.ExtSlice(L),Sk.astnodes.Load,_.lineno,_.col_offset);for(T=[],C=0;C<L.length;++C)I=L[C],Sk.asserts.assert(I.kind==fe.Index_kind&&I.v.Index.value),T[C]=I.v.Index.value;return I=new Sk.astnodes.Tuple(T,Sk.astnodes.Load,_.lineno,_.col_offset),new Sk.astnodes.Subscript(E,new Sk.astnodes.Index(I),Sk.astnodes.Load,_.lineno,_.col_offset)}function D(T,_){r(_,R.flow_stmt);var E=t(_,0);switch(E.type){case R.break_stmt:return new Sk.astnodes.Break(_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);case R.continue_stmt:return new Sk.astnodes.Continue(_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);case R.yield_stmt:return(T=q(T,t(E,0)))?new Sk.astnodes.Expr(T,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):null;case R.return_stmt:if(n(E)==1)return new Sk.astnodes.Return(null,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);var I=W(T,t(E,1));return I?new Sk.astnodes.Return(I,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):null;case R.raise_stmt:if(n(E)==1)return new Sk.astnodes.Raise(null,null,null,null,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);if(2<=n(E)){var C=null;I=q(T,t(E,1));var B=null,L=null;return n(E)==4&&t(E,2).value=="from"?(Sk.__future__.python3||l(T,t(E,2),"raise ... from ... is not available in Python 2"),C=q(T,t(E,3))):4<=n(E)&&t(E,2).value==","&&(Sk.__future__.python3&&l(T,_,"Old raise syntax is not available in Python 3"),B=q(T,t(E,3)),n(E)==6&&(L=q(T,t(E,5)))),new Sk.astnodes.Raise(I,C,B,L,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset)}default:return Sk.asserts.fail("unexpected flow_stmt: ",E.type),null}}function f(T,_){var E=null;Sk.asserts.assert(_.type===R.tfpdef||_.type===R.vfpdef);var I=t(_,0);return i(T,I,I.value,I.lineno),I=c(I.value),n(_)==3&&t(_,1).type===G.T_COLON&&(E=q(T,t(_,2))),new Sk.astnodes.arg(I,E,_.lineno,_.col_offset)}function b(T,_,E,I,C){var B=E,L=0;for(I||l(T,t(_,E),"named arguments must follow bare *"),Sk.asserts.assert(C);B<n(_);){var z=t(_,B);switch(z.type){case R.vfpdef:case R.tfpdef:B+1<n(_)&&t(_,B+1).type==G.T_EQUAL?(C[L]=q(T,t(_,B+2)),B+=2):C[L]=null;var H=n(z)==3?q(T,t(z,2)):null;z=t(z,0),i(T,z,z.value,z.lineno),E=c(z.value),I[L++]=new Sk.astnodes.arg(E,H,z.lineno,z.col_offset),B+=2;break;case G.T_DOUBLESTAR:return B;default:l(T,z,"unexpected node")}}return B}function d(T,_){var E,I,C,B=[],L=[],z=[],H=[],U=null,Y=null;if(_.type===R.parameters){if(n(_)===2)return new Sk.astnodes.arguments_([],null,[],[],null,[]);_=t(_,1)}for(Sk.asserts.assert(_.type===R.varargslist||_.type===R.typedargslist),E=I=C=0;C<n(_);){var J=t(_,C);switch(J.type){case R.tfpdef:case R.vfpdef:if(C+1<n(_)&&t(_,C+1).type==G.T_EQUAL){L[I++]=q(T,t(_,C+2)),C+=2;var K=1}else if(K)throw new Sk.builtin.SyntaxError("non-default argument follows default argument",T.c_filename,_.lineno);B[E++]=f(T,J),C+=2;break;case G.T_STAR:if(C+1>=n(_)||C+2==n(_)&&t(_,C+1).type==G.T_COMMA)throw new Sk.builtin.SyntaxError("named arguments must follow bare *",T.c_filename,_.lineno);J=t(_,C+1),J.type==G.T_COMMA?(C+=2,C=b(T,_,C,z,H)):(U=f(T,J),C+=3,C<n(_)&&(t(_,C).type==R.tfpdef||t(_,C).type==R.vfpdef)&&(C=b(T,_,C,z,H)));break;case G.T_DOUBLESTAR:J=t(_,C+1),Sk.asserts.assert(J.type==R.tfpdef||J.type==R.vfpdef),Y=f(T,J),C+=3;break;default:Sk.asserts.fail("unexpected node in varargslist");return}}return new Sk.astnodes.arguments_(B,U,z,H,Y,L)}function S(T,_,E,I){var C=I?t(_,1):_,B=null,L=1,z=null;if(I&&5>T.c_feature_version)return l(T,C,"Async functions are only supported in Python 3.5 and greater"),null;r(C,R.funcdef);var H=s(t(C,L));if(i(T,H,t(C,L),0))return null;var U=d(T,t(C,L+1));if(!U)return null;if(t(C,L+2).type==G.T_RARROW){if(B=q(T,t(C,L+3)),!B)return null;L+=2}if(t(C,L+3).type==G.T_TYPE_COMMENT){if(z=G.T_NEW_TYPE_COMMENT(t(C,L+3)),!z)return null;L+=1}var Y=w(T,t(C,L+3));if(!Y)return null;if(1<n(t(C,L+3))&&(L=t(t(C,L+3),1),L.type==G.T_TYPE_COMMENT)){if(z!=null)return l(T,C,"Cannot have two type comments on def"),null;if(z=G.T_NEW_TYPE_COMMENT(L),!z)return null}return I?new Sk.astnodes.AsyncFunctionDef(H,U,Y,E,B,z,_.lineno,_.col_offset,void 0,void 0):new Sk.astnodes.FunctionDef(H,U,Y,E,B,z,C.lineno,C.col_offset,void 0,void 0)}function g(T,_,E){if(r(_,R.classdef),n(_)==4){var I=w(T,t(_,3)),C=s(t(_,1).value);return i(T,t(_,3),C,_.lineno),new Sk.astnodes.ClassDef(C,[],[],I,E,null,_.lineno,_.col_offset)}if(t(_,3).type===G.T_RPAR)return I=w(T,t(_,5)),C=s(t(_,1).value),i(T,t(_,3),C,t(_,3).lineno),new Sk.astnodes.ClassDef(C,[],[],I,E,null,_.lineno,_.col_offset);C=s(t(_,1)),C=new Sk.astnodes.Name(C,Sk.astnodes.Load,_.lineno,_.col_offset);var B=A(T,t(_,3),C,!1);return I=w(T,t(_,6)),C=s(t(_,1).value),i(T,t(_,1),C,t(_,1).lineno),new Sk.astnodes.ClassDef(C,B.args,B.keywords,I,E,null,_.lineno,_.col_offset)}function x(T,_){function E(J,K){for(J=0;;){if(r(K,R.comp_iter),t(K,0).type===R.comp_for||(K=t(K,0),r(K,R.comp_if),J++,n(K)===2))return J;K=t(K,2)}}var I,C=function(J,K){J=0;e:for(;;){if(J++,r(K,R.comp_for),n(K)===5)K=t(K,4);else return J;t:for(;;){if(r(K,R.comp_iter),K=t(K,0),K.type===R.comp_for)continue e;if(K.type===R.comp_if)if(n(K)===3){K=t(K,2);continue t}else return J;break}break}Sk.asserts.fail("logic error in countCompFors")}(T,_),B=[];for(I=0;I<C;++I){r(_,R.comp_for);var L=t(_,1),z=m(T,L,Sk.astnodes.Store),H=q(T,t(_,3)),U=n(L)===1?new Sk.astnodes.comprehension(z[0],H,[]):new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(z,Sk.astnodes.Store,_.lineno,_.col_offset),H,[]);if(n(_)===5){_=t(_,4);var Y=E(T,_);for(L=[],z=0;z<Y;++z)r(_,R.comp_iter),_=t(_,0),r(_,R.comp_if),H=q(T,t(_,1)),L[z]=H,n(_)===3&&(_=t(_,2));_.type===R.comp_iter&&(_=t(_,0)),U.ifs=L}B[I]=U}return B}function N(T,_){var E=[];e:{var I=_,C=0;t:for(;;){var B=0;if(C++,r(I,R.comp_for),t(I,0).type==G.T_ASYNC&&(B=1),n(I)==5+B)I=t(I,4+B);else break e;n:for(;;){if(r(I,R.comp_iter),I=t(I,0),I.type===R.comp_for)continue t;if(I.type===R.comp_if)if(n(I)===3){I=t(I,2);continue n}else break e;break}break}C=void 0}for(I=0;I<C;I++){var L=0;t(_,0).type==G.T_ASYNC&&(L=1);var z=t(_,1+L),H=m(T,z,Sk.astnodes.Store);if(!H||(B=q(T,t(_,3+L)),!B))return null;var U=H[0];if(H=n(z)==1?new Sk.astnodes.comprehension(U,B,null,L):new Sk.astnodes.comprehension(new Sk.astnodes.Tuple(H,Sk.astnodes.Store,U.lineno,U.col_offset,z.end_lineno,z.end_col_offset),B,null,L),n(_)==5+L){U=[],_=t(_,4+L);e:for(B=_,L=0;;){if(r(B,R.comp_iter),t(B,0).type==R.comp_for){z=L;break e}if(B=t(B,0),r(B,R.comp_if),L++,n(B)==2){z=L;break e}B=t(B,2)}if(z==-1)return null;for(L=0;L<z;L++){if(r(_,R.comp_iter),_=t(_,0),r(_,R.comp_if),B=q(T,t(_,1)),!B)return null;U[L]=B,n(_)==3&&(_=t(_,2))}_.type==R.comp_iter&&(_=t(_,0)),H.ifs=U}E[I]=H}return E}function O(T,_,E){Sk.asserts.assert(1<n(_));var I=t(_,0),C=q(T,I);return C.constructor===Sk.astnodes.Starred?(l(T,I,"iterable unpacking cannot be used in comprehension"),null):(T=N(T,t(_,1)),E==0?new Sk.astnodes.GeneratorExp(C,T,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):E==1?new Sk.astnodes.ListComp(C,T,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):E==2?new Sk.astnodes.SetComp(C,T,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):null)}function P(T,_){switch(r(_,R.augassign),_=t(_,0),_.value.charAt(0)){case"+":return Sk.astnodes.Add;case"-":return Sk.astnodes.Sub;case"/":return _.value.charAt(1)==="/"?Sk.astnodes.FloorDiv:Sk.astnodes.Div;case"%":return Sk.astnodes.Mod;case"<":return Sk.astnodes.LShift;case">":return Sk.astnodes.RShift;case"&":return Sk.astnodes.BitAnd;case"^":return Sk.astnodes.BitXor;case"|":return Sk.astnodes.BitOr;case"*":return _.value.charAt(1)==="*"?Sk.astnodes.Pow:Sk.astnodes.Mult;case"@":if(Sk.__future__.python3)return Sk.astnodes.MatMult;default:Sk.asserts.fail("invalid augassign")}}function W(T,_){return Sk.asserts.assert(0<n(_)),_.type===R.testlist_comp?1<n(_)&&Sk.asserts.assert(t(_,1).type!==R.comp_for):Sk.asserts.assert(_.type===R.testlist||_.type===R.testlist_star_expr),n(_)===1?q(T,t(_,0)):new Sk.astnodes.Tuple(y(T,_),Sk.astnodes.Load,_.lineno,_.col_offset)}function re(T,_){if(r(_,R.expr_stmt),n(_)===1)return new Sk.astnodes.Expr(W(T,t(_,0)),_.lineno,_.col_offset);if(t(_,1).type===R.augassign){var E=t(_,0),I=W(T,E);switch(o(T,I,Sk.astnodes.Store,E),I.constructor){case Sk.astnodes.Name:var C=I.id;i(T,E,C,_.lineno);break;case Sk.astnodes.Attribute:case Sk.astnodes.Subscript:break;case Sk.astnodes.GeneratorExp:throw new Sk.builtin.SyntaxError("augmented assignment to generator expression not possible",T.c_filename,_.lineno);case Sk.astnodes.Yield:throw new Sk.builtin.SyntaxError("augmented assignment to yield expression not possible",T.c_filename,_.lineno);default:throw new Sk.builtin.SyntaxError("illegal expression for augmented assignment",T.c_filename,_.lineno)}return E=t(_,2),C=E.type===R.testlist?W(T,E):q(T,E),new Sk.astnodes.AugAssign(I,P(T,t(_,1)),C,_.lineno,_.col_offset)}if(t(_,1).type===R.annassign){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("Annotated assignment is not supported in Python 2",T.c_filename,_.lineno);E=t(_,0);var B=t(_,1),L=1;for(I=E;n(I)==1;)I=t(I,0);switch(0<n(I)&&t(I,0).type==G.T_LPAR&&(L=0),I=W(T,E),I.constructor){case Sk.astnodes.Name:C=I.id,i(T,E,C,_.lineno),o(T,I,Sk.astnodes.Store,E);break;case Sk.astnodes.Attribute:C=I.attr,i(T,E,C,_.lineno),o(T,I,Sk.astnodes.Store,E);break;case Sk.astnodes.Subscript:o(T,I,Sk.astnodes.Store,E);break;case Sk.astnodes.List:throw new Sk.builtin.SyntaxError("only single target (not list) can be annotated",T.c_filename,_.lineno);case Sk.astnodes.Tuple:throw new Sk.builtin.SyntaxError("only single target (not tuple) can be annotated",T.c_filename,_.lineno);default:throw new Sk.builtin.SyntaxError("illegal target for annotation",T.c_filename,_.lineno)}return I.constructor!=Sk.astnodes.Name&&(L=0),E=t(B,1),C=q(T,E),n(B)==2?new Sk.astnodes.AnnAssign(I,C,null,L,_.lineno,_.col_offset):(E=t(B,3),T=q(T,E),new Sk.astnodes.AnnAssign(I,C,T,L,_.lineno,_.col_offset))}for(r(t(_,1),G.T_EQUAL),L=[],I=0;I<n(_)-2;I+=2){if(E=t(_,I),E.type===R.yield_expr)throw new Sk.builtin.SyntaxError("assignment to yield expression not possible",T.c_filename,_.lineno);E=W(T,E),o(T,E,Sk.astnodes.Store,t(_,I)),L[I/2]=E}return E=t(_,n(_)-1),T=E.type===R.testlist_star_expr?W(T,E):q(T,E),new Sk.astnodes.Assign(L,T,_.lineno,_.col_offset)}function Q(T,_,E,I,C){Sk.asserts.assert(E>=_),Sk.asserts.assert(T.charAt(_-1)=="{"),Sk.asserts.assert(T.charAt(E)=="}"||T.charAt(E)=="!"||T.charAt(E)==":"),T=T.substring(_,E),/^\s*$/.test(T)&&l(I,C,"f-string: empty expression not allowed");try{let L=Sk.parse("<fstring>","("+T+")");var B=Sk.astFromParse(L.cst,"<fstring>",L.flags)}catch(L){throw L.traceback&&L.traceback[0]&&(B=L.traceback[0],B.lineno=(B.lineno||1)-1+C.lineno,B.filename=I.c_filename),L}return Sk.asserts.assert(B.body.length==1&&B.body[0].constructor===Sk.astnodes.Expr),B.body[0].value}function V(T,_,E,I,C,B,L){Sk.asserts.assert(T.charAt(_)=="{"),_++;var z=_;let H=null,U=0,Y=0,J,K,oe=()=>l(B,L,"f-string: expecting '}'");for(Sk.asserts.assert(_<=E);_<E;_++){let ne=T.charAt(_);if(ne=="\\"&&l(B,L,"f-string expression part cannot include a backslash"),H)ne==H&&(U==3?_+2<E&&T.charAt(_+1)==ne&&T.charAt(_+2)==ne&&(_+=2,H=U=0):U=H=0);else if(ne=="'"||ne=='"')_+2<E&&T.charAt(_+1)==ne&&T.charAt(_+2)==ne?(U=3,_+=2):U=1,H=ne;else if(ne=="["||ne=="{"||ne=="(")Y++;else if(Y!=0&&(ne=="]"||ne=="}"||ne==")"))Y--;else if(ne=="#")l(B,L,"f-string expression part cannot include '#'");else if(!(Y!=0||ne!="!"&&ne!=":"&&ne!="}"||ne=="!"&&_+1<E&&T.charAt(_+1)=="="))break}return H&&l(B,L,"f-string: unterminated string"),Y&&l(B,L,"f-string: mismatched '(', '{', or '['"),z=Q(T,z,_,B,L),T.charAt(_)=="!"&&(_++,_>=E&&oe(),K=T.charAt(_),_++,K!="s"&&K!="r"&&K!="a"&&l(B,L,"f-string: invalid conversion character: expected 's', 'r', or 'a'")),_>=E&&oe(),T.charAt(_)==":"&&(_++,_>=E&&oe(),[J,_]=ee(T,_,E,I,C+1,B,L)),(_>=E||T.charAt(_)!="}")&&oe(),_++,[new Sk.astnodes.FormattedValue(z,K,J,L.lineno,L.col_offset),_]}function ee(T,_,E,I,C,B,L){let z=[],H=U=>{if(U.indexOf("}")!==-1){if(/(^|[^}])}(}})*($|[^}])/.test(U))throw new SyntaxError("f-string: single '}' is not allowed",L.lineno,L.col_offset);U=U.replace(/}}/g,"}")}z.push(new Sk.astnodes.Str(new Sk.builtin.str(U),L.lineno,L.col_offset,B.end_lineno,L.end_col_offset))};for(;_<E;){let U=T.indexOf("{",_);if(C!==0){let Y=T.indexOf("}",_);Y!==-1&&(U===-1?E=Y:U>Y&&(U=-1,E=Y))}if(U===-1){H(T.substring(_,E)),_=E;break}else if(U+1<E&&T.charAt(U+1)==="{")H(T.substring(_,U+1)),_=U+2;else{H(T.substring(_,U)),_=U;let[Y,J]=V(T,U,E,I,C,B,L);z.push(Y),_=J}}return[new Sk.astnodes.JoinedStr(z,L.lineno,L.col_offset),_]}function ie(T,_,E){var I=_.charAt(_.length-1);if(_.indexOf("_")!==-1){if(he.test(_))throw new Sk.builtin.SyntaxError("invalid syntax",T.c_filename,E);if(me.test(_))throw new Sk.builtin.SyntaxError("invalid decimal literal",T.c_filename,E);_=_.replace(be,"")}if(I==="j"||I==="J")return Sk.builtin.complex.complex_subtype_from_string(_);if(I==="l"||I==="L")return Sk.longFromStr(_.substr(0,_.length-1),0);if(_.indexOf(".")!==-1)return new Sk.builtin.float_(parseFloat(_));if(E=_,T=!1,_.charAt(0)==="-"&&(E=_.substr(1),T=!0),E.charAt(0)!=="0"||E.charAt(1)!=="x"&&E.charAt(1)!=="X"){if(_.indexOf("e")!==-1||_.indexOf("E")!==-1)return new Sk.builtin.float_(parseFloat(_));E.charAt(0)!=="0"||E.charAt(1)!=="b"&&E.charAt(1)!=="B"?E.charAt(0)==="0"?E==="0"?E=0:(E=E.substring(1),(E.charAt(0)==="o"||E.charAt(0)==="O")&&(E=E.substring(1)),E=parseInt(E,8)):E=parseInt(E,10):(E=E.substring(2),E=parseInt(E,2))}else E=E.substring(2),E=parseInt(E,16);return E>Number.MAX_SAFE_INTEGER&&Math.floor(E)===E&&_.indexOf("e")===-1&&_.indexOf("E")===-1?Sk.longFromStr(_,0):T?new Sk.builtin.int_(-E):new Sk.builtin.int_(E)}function te(T,_){var E,I;r(_,R.subscript);var C=t(_,0),B=E=I=null;return C.type===G.T_DOT?new Sk.astnodes.Ellipsis:n(_)===1&&C.type===R.test?new Sk.astnodes.Index(q(T,C)):(C.type===R.test&&(I=q(T,C)),C.type===G.T_COLON?1<n(_)&&(C=t(_,1),C.type===R.test&&(E=q(T,C))):2<n(_)&&(C=t(_,2),C.type===R.test&&(E=q(T,C))),C=t(_,n(_)-1),C.type===R.sliceop&&(n(C)===1?(C=t(C,0),B=new Sk.astnodes.NameConstant(Sk.builtin.none.none$,Sk.astnodes.Load,C.lineno,C.col_offset)):(C=t(C,1),C.type===R.test&&(B=q(T,C)))),new Sk.astnodes.Slice(I,E,B))}function se(T,_){var E=t(_,0);switch(E.type){case G.T_NAME:var I=E.value;if(4<=I.length&&5>=I.length){if(I==="None")return new Sk.astnodes.NameConstant(Sk.builtin.none.none$,_.lineno,_.col_offset);if(I==="True")return new Sk.astnodes.NameConstant(Sk.builtin.bool.true$,_.lineno,_.col_offset);if(I==="False")return new Sk.astnodes.NameConstant(Sk.builtin.bool.false$,_.lineno,_.col_offset)}return T=s(I),new Sk.astnodes.Name(T,Sk.astnodes.Load,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);case G.T_STRING:E=[];for(var C=0;C<n(_);++C){for(var B=t(_,C).value,L=T,z=t(_,C),H=B,U=H.charAt(0),Y=!1,J=B=!1;;){if(U!=="u"&&U!=="U")if(U==="r"||U==="R")Y=!0;else if(U==="b"||U==="B")J=!0;else if(U==="f"||U==="F")B=!0;else break;H=H.substr(1),U=H.charAt(0)}if(Sk.asserts.assert(U==="'"||U==='"'&&H.charAt(H.length-1)===U),H=H.substr(1,H.length-2),4<=H.length&&H.charAt(0)===U&&H.charAt(1)===U&&(Sk.asserts.assert(H.charAt(H.length-1)===U&&H.charAt(H.length-2)===U),H=H.substr(2,H.length-4)),Y||H.indexOf("\\")===-1){if(J)for(U=0;U<H.length;U++)127<H.charCodeAt(U)&&l(L,z,"bytes can only contain ASCII literal characters");L=[c(H),B,J]}else{Y=H;var K=Y.length,oe="";for(H=0;H<K;++H)U=Y.charAt(H),U==="\\"?(++H,U=Y.charAt(H),U==="n"?oe+=`
`:U==="\\"?oe+="\\":U==="t"?oe+="	":U==="r"?oe+="\r":U==="b"?oe+="\b":U==="f"?oe+="\f":U==="v"?oe+="\v":U==="0"?oe+="\0":U==='"'?oe+='"':U==="'"?oe+="'":U!==`
`&&(U==="x"?(H+2>=K&&l(L,z,"Truncated \\xNN escape"),oe+=String.fromCharCode(parseInt(Y.substr(H+1,2),16)),H+=2):J||U!=="u"?J||U!=="U"?oe+="\\"+U:(H+8>=K&&l(L,z,"Truncated \\UXXXXXXXX escape"),oe+=String.fromCodePoint(parseInt(Y.substr(H+1,8),16)),H+=8):(H+4>=K&&l(L,z,"Truncated \\uXXXX escape"),oe+=String.fromCharCode(parseInt(Y.substr(H+1,4),16)),H+=4))):J&&127<U.charCodeAt(0)?l(L,z,"bytes can only contain ASCII literal characters"):oe+=U;L=oe,L=[c(L),B,J]}if(B=L,L=B[0],z=B[1],B=B[2],C!=0&&I!==B&&l(T,_,"cannot mix bytes and nonbytes literals"),I=B,z){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("invalid string (f-strings are not supported in Python 2)",T.c_filename,t(_,C).lineno);var ne=L.$jsstr();[ne]=ee(ne,0,ne.length,!1,0,T,t(_,C)),E.push.apply(E,ne.values),ne=null}else ne?ne.s=ne.s.sq$concat(L):(ne=new(I?Sk.astnodes.Bytes:Sk.astnodes.Str)(L,_.lineno,_.col_offset,T.end_lineno,_.end_col_offset),E.push(ne))}return _=E.length===1&&E[0].constructor===Sk.astnodes.Str?E[0]:new Sk.astnodes.JoinedStr(E,_.lineno,_.col_offset,T.end_lineno,_.end_col_offset),_;case G.T_NUMBER:return new Sk.astnodes.Num(ie(T,E.value,_.lineno),_.lineno,_.col_offset);case G.T_ELLIPSIS:return new Sk.astnodes.Ellipsis(_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);case G.T_LPAR:return E=t(_,1),E.type==G.T_RPAR?new Sk.astnodes.Tuple([],Sk.astnodes.Load,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):E.type==R.yield_expr?q(T,E):n(E)==1?W(T,E):t(E,1).type==R.comp_for?$(v(T,E),_):$(W(T,E),_);case G.T_LSQB:return E=t(_,1),E.type==G.T_RSQB?new Sk.astnodes.List([],Sk.astnodes.Load,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):(r(E,R.testlist_comp),n(E)==1||t(E,1).type==G.T_COMMA?(T=y(T,E))?new Sk.astnodes.List(T,Sk.astnodes.Load,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset):null:(I=E,Sk.asserts.assert(I.type==R.testlist_comp),T=O(T,I,1),$(T,_)));case G.T_LBRACE:if(E=t(_,1),E.type==G.T_RBRACE)return new Sk.astnodes.Dict(null,null,_.lineno,_.col_offset,_.end_lineno,_.end_col_offset);if(I=t(E,0).type==G.T_DOUBLESTAR,n(E)==1||1<n(E)&&t(E,1).type==G.T_COMMA){for(I=E,C=[],Sk.asserts.assert(I.type===R.dictorsetmaker),E=0;E<n(I);E+=2)ne=q(T,t(I,E)),C[E/2]=ne;T=new Sk.astnodes.Set(C,I.lineno,I.col_offset)}else if(1<n(E)&&t(E,1).type==R.comp_for)I=E,Sk.asserts.assert(I.type===R.dictorsetmaker),Sk.asserts.assert(1<n(I)),E=q(T,t(I,0)),T=x(T,t(I,1)),T=new Sk.astnodes.SetComp(E,T,I.lineno,I.col_offset);else if(n(E)>3-I&&t(E,3-I).type==R.comp_for){if(I)return l(T,_,"dict unpacking cannot be used in dict comprehension"),null;I=E,Sk.asserts.assert(3<n(I)),r(t(I,1),G.T_COLON),E=q(T,t(I,0)),C=q(T,t(I,2)),T=x(T,t(I,3)),T=new Sk.astnodes.DictComp(E,C,T,I.lineno,I.col_offset)}else{for(I=E,C=[],ne=[],B=E=0;B<n(I);B++)L=T,z=I,J=B,t(z,J).type==G.T_DOUBLESTAR?(Sk.asserts.assert(2<=n(z)-J),B=q(L,t(z,J+1)),L={key:null,value:B,i:J+2}):(Sk.asserts.assert(3<=n(z)-J),(B=q(L,t(z,J)))?(H=B,r(t(z,J+1),G.T_COLON),L=(B=q(L,t(z,J+2)))?{key:H,value:B,i:J+3}:!1):L=0),B=L.i,C[E]=L.key,ne[E]=L.value,E++;T=new Sk.astnodes.Dict(C,ne,I.lineno,I.col_offset,I.end_lineno,I.end_col_offset)}return $(T,_);default:return Sk.asserts.fail("unhandled atom "+E.type),null}}function Z(T,_){var E,I=0;r(_,R.atom_expr);var C=n(_);t(_,0).type===G.T_AWAIT&&(I=1,Sk.asserts.assert(1<C));var B=se(T,t(_,I));if(!B)return null;if(C===1)return B;if(I&&C===2)return new Sk.astnodes.Await(B,_.lineno,_.col_offset);for(E=I+1;E<C;E++){var L=t(_,E);if(L.type!==R.trailer)break;if(L=M(T,L,B),!L)return null;L.lineno=B.lineno,L.col_offset=B.col_offset,B=L}return I?new Sk.astnodes.Await(B,_.line,_.col_offset):B}function q(T,_){e:for(;;){switch(_.type){case R.test:case R.test_nocond:if(t(_,0).type===R.lambdef||t(_,0).type===R.lambdef_nocond){var E=t(_,0);return n(E)===3?(_=new Sk.astnodes.arguments_([],null,null,[]),T=q(T,t(E,2))):(_=d(T,t(E,1)),T=q(T,t(E,3))),new Sk.astnodes.Lambda(_,T,E.lineno,E.col_offset)}if(1<n(_))return Sk.asserts.assert(n(_)===5),new Sk.astnodes.IfExp(q(T,t(_,2)),q(T,t(_,0)),q(T,t(_,4)),_.lineno,_.col_offset);case R.or_test:case R.and_test:if(n(_)===1){_=t(_,0);continue e}var I=[];for(E=0;E<n(_);E+=2)I[E/2]=q(T,t(_,E));return t(_,1).value==="and"?new Sk.astnodes.BoolOp(Sk.astnodes.And,I,_.lineno,_.col_offset):(Sk.asserts.assert(t(_,1).value==="or"),new Sk.astnodes.BoolOp(Sk.astnodes.Or,I,_.lineno,_.col_offset));case R.not_test:if(n(_)===1){_=t(_,0);continue e}else return new Sk.astnodes.UnaryOp(Sk.astnodes.Not,q(T,t(_,1)),_.lineno,_.col_offset);case R.comparison:if(n(_)===1){_=t(_,0);continue e}else{var C=[];for(I=[],E=1;E<n(_);E+=2)C[(E-1)/2]=a(T,t(_,E)),I[(E-1)/2]=q(T,t(_,E+1));return new Sk.astnodes.Compare(q(T,t(_,0)),C,I,_.lineno,_.col_offset)}case R.star_expr:return r(_,R.star_expr),new Sk.astnodes.Starred(q(T,t(_,1)),Sk.astnodes.Load,_.lineno,_.col_offset);case R.expr:case R.xor_expr:case R.and_expr:case R.shift_expr:case R.arith_expr:case R.term:if(n(_)===1){_=t(_,0);continue e}var B=_,L=new Sk.astnodes.BinOp(q(T,t(B,0)),p(t(B,1)),q(T,t(B,2)),B.lineno,B.col_offset),z=(n(B)-1)/2;for(_=1;_<z;++_)E=t(B,2*_+1),I=p(E),C=q(T,t(B,2*_+2)),L=new Sk.astnodes.BinOp(L,I,C,E.lineno,E.col_offset);return L;case R.yield_expr:return I=!1,C=null,1<n(_)&&(E=t(_,1)),E&&(C=t(E,n(E)-1),n(E)==2?(I=!0,C=q(T,C)):C=W(T,C)),I?new Sk.astnodes.YieldFrom(C,_.lineno,_.col_offset):new Sk.astnodes.Yield(C,_.lineno,_.col_offset);case R.factor:if(n(_)===1){_=t(_,0);continue e}return k(T,_);case R.power:return E=_,r(E,R.power),_=Z(T,t(E,0)),n(E)!==1&&t(E,n(E)-1).type===R.factor&&(T=q(T,t(E,n(E)-1)),_=new Sk.astnodes.BinOp(_,Sk.astnodes.Pow,T,E.lineno,E.col_offset)),_;default:Sk.asserts.fail("unhandled expr","n.type: %d",_.type)}break}}function le(T,_){if(_.type===R.stmt&&(Sk.asserts.assert(n(_)===1),_=t(_,0)),_.type===R.simple_stmt&&(Sk.asserts.assert(u(_)===1),_=t(_,0)),_.type===R.small_stmt)switch(_=t(_,0),_.type){case R.expr_stmt:return re(T,_);case R.del_stmt:var E=_;return r(E,R.del_stmt),new Sk.astnodes.Delete(m(T,t(E,1),Sk.astnodes.Del),E.lineno,E.col_offset);case R.pass_stmt:return new Sk.astnodes.Pass(_.lineno,_.col_offset);case R.flow_stmt:return D(T,_);case R.import_stmt:var I=_,C;r(I,R.import_stmt);var B=I.lineno;if(_=I.col_offset,I=t(I,0),I.type===R.import_name){I=t(I,1),r(I,R.dotted_as_names);var L=[];for(C=0;C<n(I);C+=2)L[C/2]=h(T,t(I,C));T=new Sk.astnodes.Import(L,B,_)}else if(I.type===R.import_from){var z=null;for(E=0,L=1;L<n(I);++L)if(t(I,L).type===R.dotted_name){z=h(T,t(I,L)),L++;break}else if(t(I,L).type===G.T_DOT)E++;else if(t(I,L).type===G.T_ELLIPSIS)E+=3;else break;switch(++L,t(I,L).type){case G.T_STAR:I=t(I,L);break;case G.T_LPAR:I=t(I,L+1),n(I);break;case R.import_as_names:if(I=t(I,L),L=n(I),L%2===0)throw new Sk.builtin.SyntaxError("trailing comma not allowed without surrounding parentheses",T.c_filename,I.lineno);break;default:throw new Sk.builtin.SyntaxError("Unexpected node-type in from-import",T.c_filename,I.lineno)}if(L=[],I.type===G.T_STAR)L[0]=h(T,I);else for(C=0;C<n(I);C+=2)L[C/2]=h(T,t(I,C));T=z?z.name.v:"",T=new Sk.astnodes.ImportFrom(c(T),L,E,B,_)}else throw new Sk.builtin.SyntaxError("unknown import statement",T.c_filename,I.lineno);return T;case R.global_stmt:for(T=_,_=[],r(T,R.global_stmt),E=1;E<n(T);E+=2)_[(E-1)/2]=c(t(T,E).value);return new Sk.astnodes.Global(_,T.lineno,T.col_offset);case R.nonlocal_stmt:l(T,_,"Not implemented: nonlocal");break;case R.assert_stmt:return E=_,r(E,R.assert_stmt),n(E)===2?T=new Sk.astnodes.Assert(q(T,t(E,1)),null,E.lineno,E.col_offset):n(E)===4?T=new Sk.astnodes.Assert(q(T,t(E,1)),q(T,t(E,3)),E.lineno,E.col_offset):(Sk.asserts.fail("improper number of parts to assert stmt"),T=void 0),T;case R.print_stmt:for(E=_,Sk.__future__.print_function&&l(T,E,"Missing parentheses in call to 'print'"),I=1,B=null,r(E,R.print_stmt),2<=n(E)&&t(E,1).type===G.T_RIGHTSHIFT&&(B=q(T,t(E,2)),I=4),_=[],z=0;I<n(E);I+=2,++z)_[z]=q(T,t(E,I));return T=t(E,n(E)-1).type!==G.T_COMMA,new Sk.astnodes.Print(B,_,T,E.lineno,E.col_offset);case R.debugger_stmt:return new Sk.astnodes.Debugger(_.lineno,_.col_offset);default:Sk.asserts.fail("unhandled small_stmt")}else switch(E=t(_,0),r(_,R.compound_stmt),E.type){case R.if_stmt:if(r(E,R.if_stmt),n(E)===4)T=new Sk.astnodes.If(q(T,t(E,1)),w(T,t(E,3)),[],E.lineno,E.col_offset);else if(_=t(E,4).value.charAt(2),_==="s")T=new Sk.astnodes.If(q(T,t(E,1)),w(T,t(E,3)),w(T,t(E,6)),E.lineno,E.col_offset);else if(_==="i"){for(B=n(E)-4,I=!1,_=[],t(E,B+1).type===G.T_NAME&&t(E,B+1).value.charAt(2)==="s"&&(I=!0,B-=3),B/=4,I&&(_=[new Sk.astnodes.If(q(T,t(E,n(E)-6)),w(T,t(E,n(E)-4)),w(T,t(E,n(E)-1)),t(E,n(E)-6).lineno,t(E,n(E)-6).col_offset)],B--),z=0;z<B;++z)I=5+4*(B-z-1),_=[new Sk.astnodes.If(q(T,t(E,I)),w(T,t(E,I+2)),_,t(E,I).lineno,t(E,I).col_offset)];T=new Sk.astnodes.If(q(T,t(E,1)),w(T,t(E,3)),_,E.lineno,E.col_offset)}else Sk.asserts.fail("unexpected token in 'if' statement"),T=void 0;return T;case R.while_stmt:return r(E,R.while_stmt),n(E)===4?T=new Sk.astnodes.While(q(T,t(E,1)),w(T,t(E,3)),[],E.lineno,E.col_offset):n(E)===7?T=new Sk.astnodes.While(q(T,t(E,1)),w(T,t(E,3)),w(T,t(E,6)),E.lineno,E.col_offset):(Sk.asserts.fail("wrong number of tokens for 'while' stmt"),T=void 0),T;case R.for_stmt:return _=[],r(E,R.for_stmt),n(E)===9&&(_=w(T,t(E,8))),I=t(E,1),B=m(T,I,Sk.astnodes.Store),B=n(I)===1?B[0]:new Sk.astnodes.Tuple(B,Sk.astnodes.Store,E.lineno,E.col_offset),new Sk.astnodes.For(B,W(T,t(E,3)),w(T,t(E,5)),_,E.lineno,E.col_offset);case R.try_stmt:if(_=[],C=n(E),B=(C-3)/3,z=[],L=null,r(E,R.try_stmt),I=w(T,t(E,2)),t(E,C-3).type===G.T_NAME)t(E,C-3).value==="finally"?(9<=C&&t(E,C-6).type===G.T_NAME&&(z=w(T,t(E,C-4)),B--),L=w(T,t(E,C-1))):z=w(T,t(E,C-1)),B--;else if(t(E,C-3).type!==R.except_clause)throw new Sk.builtin.SyntaxError("malformed 'try' statement",T.c_filename,E.lineno);if(0<B)for(C=0;C<B;C++){var H=C,U=T,Y=t(E,3+3*C),J=t(E,5+3*C);if(r(Y,R.except_clause),r(J,R.suite),n(Y)===1)var K=new Sk.astnodes.ExceptHandler(null,null,w(U,J),Y.lineno,Y.col_offset);else n(Y)===2?K=new Sk.astnodes.ExceptHandler(q(U,t(Y,1)),null,w(U,J),Y.lineno,Y.col_offset):n(Y)===4?(Sk.__future__.python3&&t(Y,2).value==","&&l(U,Y,"Old-style 'except' clauses are not supported in Python 3"),q(U,t(Y,1)),K=q(U,t(Y,3)),o(U,K,Sk.astnodes.Store,t(Y,3)),K=new Sk.astnodes.ExceptHandler(q(U,t(Y,1)),K,w(U,J),Y.lineno,Y.col_offset)):(Sk.asserts.fail("wrong number of children for except clause"),K=void 0);_[H]=K}return Sk.asserts.assert(!!L||_.length!=0),new Sk.astnodes.Try(I,_,z,L,E.lineno,E.col_offset);case R.with_stmt:for(_=[],r(E,R.with_stmt),B=1;B<n(E)-2;B+=2)I=void 0,L=T,C=t(E,B),r(C,R.with_item),z=q(L,t(C,0)),n(C)==3&&(I=q(L,t(C,2)),o(L,I,Sk.astnodes.Store,C)),I=new Sk.astnodes.withitem(z,I),_[(B-1)/2]=I;return T=w(T,t(E,n(E)-1)),T=new Sk.astnodes.With(_,T,E.lineno,E.col_offset),T;case R.funcdef:return S(T,E,[],!1);case R.classdef:return g(T,E,[]);case R.decorated:for(B=null,r(E,R.decorated),I=t(E,0),r(I,R.decorators),_=[],z=0;z<n(I);++z){L=_,C=z,H=T,K=t(I,z),r(K,R.decorator),r(t(K,0),G.T_AT),r(t(K,n(K)-1),G.T_NEWLINE);var oe,ne=t(K,1);r(ne,R.dotted_name),U=ne.lineno,Y=ne.col_offset,J=c(t(ne,0).value);var de=new Sk.astnodes.Name(J,Sk.astnodes.Load,U,Y);for(oe=2;oe<n(ne);oe+=2)J=c(t(ne,oe).value),de=new Sk.astnodes.Attribute(de,J,Sk.astnodes.Load,U,Y);U=de,H=n(K)===3?U:n(K)===5?new Sk.astnodes.Call(U,[],[],null,null,K.lineno,K.col_offset):A(H,t(K,3),U),L[C]=H}return Sk.asserts.assert(t(E,1).type==R.funcdef||t(E,1).type==R.async_funcdef||t(E,1).type==R.classdef),t(E,1).type==R.funcdef?(B=t(E,1),B=S(T,B,_,!1)):t(E,1).type==R.classdef?B=g(T,t(E,1),_):t(E,1).type==R.async_funcdef&&(B=t(E,1),r(B,R.async_funcdef),r(t(B,0),G.T_NAME),Sk.asserts.assert((t(B,0)==="async").value),r(t(B,1),R.funcdef),B=S(T,B,_,!0)),B&&(B.lineno=E.lineno,B.col_offset=E.col_offset),B;case R.async_stmt:l(T,E,"Not implemented: async");break;default:Sk.asserts.assert("unhandled compound_stmt")}}var R=Sk.ParseTables.sym,G=Sk.token.tokens,fe={Slice_kind:1,ExtSlice_kind:2,Index_kind:3},ae={};ae[G.T_VBAR]=Sk.astnodes.BitOr,ae[G.T_CIRCUMFLEX]=Sk.astnodes.BitXor,ae[G.T_AMPER]=Sk.astnodes.BitAnd,ae[G.T_LEFTSHIFT]=Sk.astnodes.LShift,ae[G.T_RIGHTSHIFT]=Sk.astnodes.RShift,ae[G.T_PLUS]=Sk.astnodes.Add,ae[G.T_MINUS]=Sk.astnodes.Sub,ae[G.T_STAR]=Sk.astnodes.Mult,ae[G.T_SLASH]=Sk.astnodes.Div,ae[G.T_DOUBLESLASH]=Sk.astnodes.FloorDiv,ae[G.T_PERCENT]=Sk.astnodes.Mod,Sk.setupOperators=function(T){T?ae[G.T_AT]=Sk.astnodes.MatMult:ae[G.T_AT]&&delete ae[G.T_AT]},Sk.exportSymbol("Sk.setupOperators",Sk.setupOperators);const he=/_[eE]|[eE]_|\._|j_/,me=/_\.|[+-]_|^0_\D|_j/,be=/_(?=[^_])/g;Sk.astFromParse=function(T,_,E){var I,C=new e("utf-8",_,E),B=[],L=0;switch(T.type){case R.file_input:for(I=0;I<n(T)-1;++I){var z=t(T,I);if(T.type!==G.T_NEWLINE)if(r(z,R.stmt),E=u(z),E===1)B[L++]=le(C,z);else for(z=t(z,0),r(z,R.simple_stmt),_=0;_<E;++_)B[L++]=le(C,t(z,2*_))}return new Sk.astnodes.Module(B);case R.eval_input:Sk.asserts.fail("todo;");case R.single_input:Sk.asserts.fail("todo;");default:Sk.asserts.fail("todo;")}},Sk.astDump=function(T){var _=function(I){var C,B="";for(C=0;C<I;++C)B+=" ";return B},E=function(I,C){var B;if(I===null)return C+"None";if(I.prototype&&I.prototype._astname!==void 0&&I.prototype._isenum)return C+I.prototype._astname+"()";if(I._astname!==void 0){var L=_(I._astname.length+1),z=[];for(B=0;B<I._fields.length;B+=2){var H=I._fields[B],U=I._fields[B+1](I),Y=_(H.length+1);z.push([H,E(U,C+L+Y)])}for(U=[],B=0;B<z.length;++B)Y=z[B],U.push(Y[0]+"="+Y[1].replace(/^\s+/,""));return B=U.join(`,
`+C+L),C+I._astname+"("+B+")"}if(Sk.isArrayLike(I)){for(L=[],B=0;B<I.length;++B)z=I[B],L.push(E(z,C+" "));return I=L.join(`,
`),C+"["+I.replace(/^\s+/,"")+"]"}return I=I===!0?"True":I===!1?"False":I instanceof Sk.builtin.lng?I.tp$str().v:I instanceof Sk.builtin.str?I.$r().v:""+I,C+I};return E(T,"")},Sk.exportSymbol("Sk.astFromParse",Sk.astFromParse),Sk.exportSymbol("Sk.astDump",Sk.astDump)},function(j,F){function e(u,i,o){this.__name=u,this.__flags=i,this.__scope=i>>11&7,this.__namespaces=o||[]}function n(u,i,o,p,s){this.symFlags={},this.name=i,this.varnames=[],this.children=[],this.blockType=o,this.returnsValue=this.varkeywords=this.varargs=this.generator=this.childHasFree=this.hasFree=this.isNested=!1,this.lineno=s,this.table=u,u.cur&&(u.cur.nested||u.cur.blockType==="function")&&(this.isNested=!0),p.scopeId=c++,u.stss[p.scopeId]=this,this.symbols={}}function t(u){this.filename=u,this.top=this.cur=null,this.stack=[],this.curClass=this.global=null,this.tmpname=0,this.stss={}}function r(u,i){var o;for(o=0;o<i.length;o++)u(i[o])}function l(u,i){for(var o in i)u[o]=i[o]}Sk.exportSymbol("Sk.SYMTAB_CONSTS",{DEF_GLOBAL:1,DEF_LOCAL:2,DEF_PARAM:4,USE:8,DEF_STAR:16,DEF_DOUBLESTAR:32,DEF_INTUPLE:64,DEF_FREE:128,DEF_FREE_GLOBAL:256,DEF_FREE_CLASS:512,DEF_IMPORT:1024,DEF_BOUND:1030,SCOPE_OFF:11,SCOPE_MASK:7,LOCAL:1,GLOBAL_EXPLICIT:2,GLOBAL_IMPLICIT:3,FREE:4,CELL:5,OPT_IMPORT_STAR:1,OPT_EXEC:2,OPT_BARE_EXEC:4,OPT_TOPLEVEL:8,GENERATOR:2,GENERATOR_EXPRESSION:2,ModuleBlock:"module",FunctionBlock:"function",ClassBlock:"class"}),e.prototype.get_name=function(){return this.__name},e.prototype.is_referenced=function(){return!!(this.__flags&8)},e.prototype.is_parameter=function(){return!!(this.__flags&4)},e.prototype.is_global=function(){return this.__scope===3||this.__scope==2},e.prototype.is_declared_global=function(){return this.__scope==2},e.prototype.is_local=function(){return!!(this.__flags&1030)},e.prototype.is_free=function(){return this.__scope==4},e.prototype.is_imported=function(){return!!(this.__flags&1024)},e.prototype.is_assigned=function(){return!!(this.__flags&2)},e.prototype.is_namespace=function(){return this.__namespaces&&0<this.__namespaces.length},e.prototype.get_namespaces=function(){return this.__namespaces};var c=0;n.prototype.get_type=function(){return this.blockType},n.prototype.get_name=function(){return this.name},n.prototype.get_lineno=function(){return this.lineno},n.prototype.is_nested=function(){return this.isNested},n.prototype.has_children=function(){return 0<this.children.length},n.prototype.get_identifiers=function(){return this._identsMatching(function(){return!0})},n.prototype.lookup=function(u){if(this.symbols.hasOwnProperty(u))u=this.symbols[u];else{var i=this.symFlags[u],o=this.__check_children(u);u=this.symbols[u]=new e(u,i,o)}return u},n.prototype.__check_children=function(u){var i,o=[];for(i=0;i<this.children.length;++i){var p=this.children[i];p.name===u&&o.push(p)}return o},n.prototype._identsMatching=function(u){var i,o=[];for(i in this.symFlags)this.symFlags.hasOwnProperty(i)&&u(this.symFlags[i])&&o.push(i);return o.sort(),o},n.prototype.get_parameters=function(){return Sk.asserts.assert(this.get_type()=="function","get_parameters only valid for function scopes"),this._funcParams||(this._funcParams=this._identsMatching(function(u){return u&4})),this._funcParams},n.prototype.get_locals=function(){return Sk.asserts.assert(this.get_type()=="function","get_locals only valid for function scopes"),this._funcLocals||(this._funcLocals=this._identsMatching(function(u){return u&1030})),this._funcLocals},n.prototype.get_globals=function(){return Sk.asserts.assert(this.get_type()=="function","get_globals only valid for function scopes"),this._funcGlobals||(this._funcGlobals=this._identsMatching(function(u){return u=u>>11&7,u==3||u==2})),this._funcGlobals},n.prototype.get_frees=function(){return Sk.asserts.assert(this.get_type()=="function","get_frees only valid for function scopes"),this._funcFrees||(this._funcFrees=this._identsMatching(function(u){return(u>>11&7)==4})),this._funcFrees},n.prototype.get_methods=function(){var u;if(Sk.asserts.assert(this.get_type()=="class","get_methods only valid for class scopes"),!this._classMethods){var i=[];for(u=0;u<this.children.length;++u)i.push(this.children[u].name);i.sort(),this._classMethods=i}return this._classMethods},n.prototype.getScope=function(u){return u=this.symFlags[u],u===void 0?0:u>>11&7},t.prototype.getStsForAst=function(u){return Sk.asserts.assert(u.scopeId!==void 0,"ast wasn't added to st?"),u=this.stss[u.scopeId],Sk.asserts.assert(u!==void 0,"unknown sym tab entry"),u},t.prototype.SEQStmt=function(u){var i,o;if(u!==null){Sk.asserts.assert(Sk.isArrayLike(u),"SEQ: nodes isn't array? got "+u.toString());var p=u.length;for(o=0;o<p;++o)(i=u[o])&&this.visitStmt(i)}},t.prototype.SEQExpr=function(u){var i,o;if(u!==null){Sk.asserts.assert(Sk.isArrayLike(u),"SEQ: nodes isn't array? got "+u.toString());var p=u.length;for(o=0;o<p;++o)(i=u[o])&&this.visitExpr(i)}},t.prototype.enterBlock=function(u,i,o,p){u=Sk.fixReserved(u);var s=null;this.cur&&(s=this.cur,this.stack.push(this.cur)),this.cur=new n(this,u,i,o,p),u==="top"&&(this.global=this.cur.symFlags),s&&s.children.push(this.cur)},t.prototype.exitBlock=function(){this.cur=null,0<this.stack.length&&(this.cur=this.stack.pop())},t.prototype.visitParams=function(u,i){var o;for(o=0;o<u.length;++o)if(i=u[o],i.constructor===Sk.astnodes.arg)this.addDef(i.arg,4,i.lineno);else throw new Sk.builtin.SyntaxError("invalid expression in parameter list",this.filename)},t.prototype.visitArguments=function(u,i){u.args&&this.visitParams(u.args,!0),u.kwonlyargs&&this.visitParams(u.kwonlyargs,!0),u.vararg&&(this.addDef(u.vararg.arg,4,i),this.cur.varargs=!0),u.kwarg&&(this.addDef(u.kwarg.arg,4,i),this.cur.varkeywords=!0)},t.prototype.newTmpname=function(u){this.addDef(new Sk.builtin.str("_["+ ++this.tmpname+"]"),2,u)},t.prototype.addDef=function(u,i,o){var p=Sk.mangleName(this.curClass,u).v;p=Sk.fixReserved(p);var s=this.cur.symFlags[p];if(s!==void 0){if(i&4&&s&4)throw new Sk.builtin.SyntaxError("duplicate argument '"+u.v+"' in function definition",this.filename,o);s|=i}else s=i;this.cur.symFlags[p]=s,i&4?this.cur.varnames.push(p):i&1&&(s=i,u=this.global[p],u!==void 0&&(s|=u),this.global[p]=s)},t.prototype.visitSlice=function(u){var i;switch(u.constructor){case Sk.astnodes.Slice:u.lower&&this.visitExpr(u.lower),u.upper&&this.visitExpr(u.upper),u.step&&this.visitExpr(u.step);break;case Sk.astnodes.ExtSlice:for(i=0;i<u.dims.length;++i)this.visitSlice(u.dims[i]);break;case Sk.astnodes.Index:this.visitExpr(u.value)}},t.prototype.visitStmt=function(u){var i;switch(Sk.asserts.assert(u!==void 0,"visitStmt called with undefined"),u.constructor){case Sk.astnodes.FunctionDef:this.addDef(u.name,2,u.lineno),u.args.defaults&&this.SEQExpr(u.args.defaults),u.decorator_list&&this.SEQExpr(u.decorator_list),this.enterBlock(u.name.v,"function",u,u.lineno),this.visitArguments(u.args,u.lineno),this.SEQStmt(u.body),this.exitBlock();break;case Sk.astnodes.ClassDef:this.addDef(u.name,2,u.lineno),this.SEQExpr(u.bases),u.decorator_list&&this.SEQExpr(u.decorator_list),this.enterBlock(u.name.v,"class",u,u.lineno),this.curClass=u.name,this.SEQStmt(u.body),this.exitBlock();break;case Sk.astnodes.Return:if(u.value&&(this.visitExpr(u.value),this.cur.returnsValue=!0,this.cur.generator))throw new Sk.builtin.SyntaxError("'return' with argument inside generator",this.filename);break;case Sk.astnodes.Delete:this.SEQExpr(u.targets);break;case Sk.astnodes.Assign:this.SEQExpr(u.targets),this.visitExpr(u.value);break;case Sk.astnodes.AnnAssign:if(u.target.constructor==Sk.astnodes.Name){var o=u.target,p=Sk.mangleName(this.curClass,o.id).v;if(p=Sk.fixReserved(p),o=this.cur.symFlags[p],o&2049&&this.global!=this.cur.symFlags&&u.simple)throw new Sk.builtin.SyntaxError("annotated name '"+p+"' can't be global",this.filename,u.lineno);u.simple?this.addDef(new Sk.builtin.str(p),4098,u.lineno):u.value&&this.addDef(new Sk.builtin.str(p),2,u.lineno)}else this.visitExpr(u.target);this.visitExpr(u.annotation),u.value&&this.visitExpr(u.value);break;case Sk.astnodes.AugAssign:this.visitExpr(u.target),this.visitExpr(u.value);break;case Sk.astnodes.Print:u.dest&&this.visitExpr(u.dest),this.SEQExpr(u.values);break;case Sk.astnodes.For:this.visitExpr(u.target),this.visitExpr(u.iter),this.SEQStmt(u.body),u.orelse&&this.SEQStmt(u.orelse);break;case Sk.astnodes.While:this.visitExpr(u.test),this.SEQStmt(u.body),u.orelse&&this.SEQStmt(u.orelse);break;case Sk.astnodes.If:this.visitExpr(u.test),this.SEQStmt(u.body),u.orelse&&this.SEQStmt(u.orelse);break;case Sk.astnodes.Raise:u.exc&&(this.visitExpr(u.exc),u.inst&&(this.visitExpr(u.inst),u.tback&&this.visitExpr(u.tback)),u.cause&&this.visitExpr(u.cause));break;case Sk.astnodes.Assert:this.visitExpr(u.test),u.msg&&this.visitExpr(u.msg);break;case Sk.astnodes.Import:case Sk.astnodes.ImportFrom:this.visitAlias(u.names,u.lineno);break;case Sk.astnodes.Global:var s=u.names.length;for(i=0;i<s;++i){if(p=Sk.mangleName(this.curClass,u.names[i]).v,p=Sk.fixReserved(p),o=this.cur.symFlags[p],o&10)throw o&2?new Sk.builtin.SyntaxError("name '"+p+"' is assigned to before global declaration",this.filename,u.lineno):new Sk.builtin.SyntaxError("name '"+p+"' is used prior to global declaration",this.filename,u.lineno);this.addDef(new Sk.builtin.str(p),1,u.lineno)}break;case Sk.astnodes.Expr:this.visitExpr(u.value);break;case Sk.astnodes.Pass:case Sk.astnodes.Break:case Sk.astnodes.Continue:case Sk.astnodes.Debugger:break;case Sk.astnodes.With:r(this.visit_withitem.bind(this),u.items),r(this.visitStmt.bind(this),u.body);break;case Sk.astnodes.Try:this.SEQStmt(u.body),this.visitExcepthandlers(u.handlers),this.SEQStmt(u.orelse),this.SEQStmt(u.finalbody);break;default:Sk.asserts.fail("Unhandled type "+u.constructor.name+" in visitStmt")}},t.prototype.visit_withitem=function(u){this.visitExpr(u.context_expr),u.optional_vars&&this.visitExpr(u.optional_vars)},t.prototype.visitExpr=function(u){switch(Sk.asserts.assert(u!==void 0,"visitExpr called with undefined"),u.constructor){case Sk.astnodes.BoolOp:this.SEQExpr(u.values);break;case Sk.astnodes.BinOp:this.visitExpr(u.left),this.visitExpr(u.right);break;case Sk.astnodes.UnaryOp:this.visitExpr(u.operand);break;case Sk.astnodes.Lambda:this.addDef(new Sk.builtin.str("lambda"),2,u.lineno),u.args.defaults&&this.SEQExpr(u.args.defaults),this.enterBlock("lambda","function",u,u.lineno),this.visitArguments(u.args,u.lineno),this.visitExpr(u.body),this.exitBlock();break;case Sk.astnodes.IfExp:this.visitExpr(u.test),this.visitExpr(u.body),this.visitExpr(u.orelse);break;case Sk.astnodes.Dict:this.SEQExpr(u.keys),this.SEQExpr(u.values);break;case Sk.astnodes.DictComp:case Sk.astnodes.SetComp:this.visitComprehension(u.generators,0);break;case Sk.astnodes.ListComp:this.newTmpname(u.lineno),this.visitExpr(u.elt),this.visitComprehension(u.generators,0);break;case Sk.astnodes.GeneratorExp:this.visitGenexp(u);break;case Sk.astnodes.Yield:if(u.value&&this.visitExpr(u.value),this.cur.generator=!0,this.cur.returnsValue)throw new Sk.builtin.SyntaxError("'return' with argument inside generator",this.filename);break;case Sk.astnodes.Compare:this.visitExpr(u.left),this.SEQExpr(u.comparators);break;case Sk.astnodes.Call:if(this.visitExpr(u.func),u.args)for(let i of u.args)i.constructor===Sk.astnodes.Starred?this.visitExpr(i.value):this.visitExpr(i);if(u.keywords)for(let i of u.keywords)this.visitExpr(i.value);break;case Sk.astnodes.Num:case Sk.astnodes.Str:case Sk.astnodes.Bytes:break;case Sk.astnodes.JoinedStr:for(let i of u.values)this.visitExpr(i);break;case Sk.astnodes.FormattedValue:this.visitExpr(u.value),u.format_spec&&this.visitExpr(u.format_spec);break;case Sk.astnodes.Attribute:this.visitExpr(u.value);break;case Sk.astnodes.Subscript:this.visitExpr(u.value),this.visitSlice(u.slice);break;case Sk.astnodes.Name:this.addDef(u.id,u.ctx===Sk.astnodes.Load?8:2,u.lineno);break;case Sk.astnodes.NameConstant:break;case Sk.astnodes.List:case Sk.astnodes.Tuple:case Sk.astnodes.Set:this.SEQExpr(u.elts);break;case Sk.astnodes.Starred:this.visitExpr(u.value);break;default:Sk.asserts.fail("Unhandled type "+u.constructor.name+" in visitExpr")}},t.prototype.visitComprehension=function(u,i){var o,p=u.length;for(o=i;o<p;++o)i=u[o],this.visitExpr(i.target),this.visitExpr(i.iter),this.SEQExpr(i.ifs)},t.prototype.visitAlias=function(u,i){var o,p;for(p=0;p<u.length;++p){var s=u[p],a=o=s.asname===null?s.name.v:s.asname.v;if(s=o.indexOf("."),s!==-1&&(a=o.substr(0,s)),o!=="*")this.addDef(new Sk.builtin.str(a),1024,i);else if(this.cur.blockType!=="module")throw new Sk.builtin.SyntaxError("import * only allowed at module level",this.filename)}},t.prototype.visitGenexp=function(u){var i=u.generators[0];this.visitExpr(i.iter),this.enterBlock("genexpr","function",u,u.lineno),this.cur.generator=!0,this.addDef(new Sk.builtin.str(".0"),4,u.lineno),this.visitExpr(i.target),this.SEQExpr(i.ifs),this.visitComprehension(u.generators,1),this.visitExpr(u.elt),this.exitBlock()},t.prototype.visitExcepthandlers=function(u){var i,o;for(i=0;o=u[i];++i)o.type&&this.visitExpr(o.type),o.name&&this.visitExpr(o.name),this.SEQStmt(o.body)},t.prototype.analyzeBlock=function(u,i,o,p){var s={},a={},$={},y={},w={};u.blockType=="class"&&(l($,p),i&&l(y,i));for(h in u.symFlags){var m=u.symFlags[h];this.analyzeName(u,a,h,m,i,s,o,p)}u.blockType!=="class"&&(u.blockType==="function"&&l(y,s),i&&l(y,i),l($,p)),s={};var h=u.children.length;for(m=0;m<h;++m)p=u.children[m],this.analyzeChildBlock(p,y,w,$,s),(p.hasFree||p.childHasFree)&&(u.childHasFree=!0);l(w,s),u.blockType==="function"&&this.analyzeCells(a,w),i=this.updateSymbols(u.symFlags,a,i,w,u.blockType==="class"),u.hasFree=u.hasFree||i,l(o,w)},t.prototype.analyzeChildBlock=function(u,i,o,p,s){var a={};l(a,i),i={},l(i,o),o={},l(o,p),this.analyzeBlock(u,a,i,o),l(s,i)},t.prototype.analyzeCells=function(u,i){var o;for(o in u){var p=u[o];p===1&&i[o]!==void 0&&(u[o]=5,delete i[o])}},t.prototype.updateSymbols=function(u,i,o,p,s){var a,$=!1;for(a in u){var y=u[a],w=i[a];y|=w<<11,u[a]=y}for(a in p)i=u[a],i!==void 0?s&&i&1031&&(i|=512,u[a]=i):o[a]!==void 0&&(u[a]=8192,$=!0);return $},t.prototype.analyzeName=function(u,i,o,p,s,a,$,y){if(p&1){if(p&4)throw new Sk.builtin.SyntaxError("name '"+o+"' is local and global",this.filename,u.lineno);i[o]=2,y[o]=null,s&&s[o]!==void 0&&delete s[o]}else p&1030?(i[o]=1,a[o]=null,delete y[o]):s&&s[o]!==void 0?(i[o]=4,u.hasFree=!0,$[o]=null):(y&&y[o]!==void 0||!u.isNested||(u.hasFree=!0),i[o]=3)},t.prototype.analyze=function(){this.analyzeBlock(this.top,null,{},{})},Sk.symboltable=function(u,i){var o=new t(i);for(o.enterBlock("top","module",u,0),o.top=o.cur,i=0;i<u.body.length;++i)o.visitStmt(u.body[i]);return o.exitBlock(),o.analyze(),o},Sk.dumpSymtab=function(u){var i=function(s){return s?"True":"False"},o=function(s){var a,$=[];for(a=0;a<s.length;++a)$.push(new Sk.builtin.str(s[a]).$r().v);return"["+$.join(", ")+"]"},p=function(s,a){var $,y;a===void 0&&(a="");var w=a+"Sym_type: "+s.get_type()+`
`;w+=a+"Sym_name: "+s.get_name()+`
`,w+=a+"Sym_lineno: "+s.get_lineno()+`
`,w+=a+"Sym_nested: "+i(s.is_nested())+`
`,w+=a+"Sym_haschildren: "+i(s.has_children())+`
`,s.get_type()==="class"?w+=a+"Class_methods: "+o(s.get_methods())+`
`:s.get_type()==="function"&&(w+=a+"Func_params: "+o(s.get_parameters())+`
`,w+=a+"Func_locals: "+o(s.get_locals())+`
`,w+=a+"Func_globals: "+o(s.get_globals())+`
`,w+=a+"Func_frees: "+o(s.get_frees())+`
`),w+=a+`-- Identifiers --
`;var m=s.get_identifiers(),h=m.length;for(y=0;y<h;++y){var v=s.lookup(m[y]);w+=a+"name: "+v.get_name()+`
`,w+=a+"  is_referenced: "+i(v.is_referenced())+`
`,w+=a+"  is_imported: "+i(v.is_imported())+`
`,w+=a+"  is_parameter: "+i(v.is_parameter())+`
`,w+=a+"  is_global: "+i(v.is_global())+`
`,w+=a+"  is_declared_global: "+i(v.is_declared_global())+`
`,w+=a+"  is_local: "+i(v.is_local())+`
`,w+=a+"  is_free: "+i(v.is_free())+`
`,w+=a+"  is_assigned: "+i(v.is_assigned())+`
`,w+=a+"  is_namespace: "+i(v.is_namespace())+`
`;var k=v.get_namespaces(),A=k.length;w+=a+`  namespaces: [
`;var M=[];for($=0;$<A;++$)v=k[$],M.push(p(v,a+"    "));w+=M.join(`
`),w+=a+`  ]
`}return w};return p(u.top,"")},Sk.exportSymbol("Sk.symboltable",Sk.symboltable),Sk.exportSymbol("Sk.dumpSymtab",Sk.dumpSymtab)},function(j,F){function e(i,o,p,s,a){this.filename=i,this.st=o,this.flags=p,this.canSuspend=s,this.interactive=!1,this.nestlevel=0,this.u=null,this.stack=[],this.result=[],this.allUnits=[],this.source=a?a.split(`
`):!1}function n(){this.name=this.ste=null,this.doesSuspend=this.canSuspend=!1,this.private_=null,this.lineno=this.firstlineno=0,this.linenoSet=!1,this.localnames=[],this.localtemps=[],this.tempsToSave=[],this.blocknum=0,this.blocks=[],this.curblock=0,this.consts={},this.scopename=null,this.suffixCode=this.switchCode=this.varDeclsCode=this.prefixCode="",this.breakBlocks=[],this.continueBlocks=[],this.exceptBlocks=[],this.finallyBlocks=[]}function t(i){return u[i]===void 0?i:i+"_$rw$"}function r(i,o){var p=o.v;if(i===null||p===null||p.charAt(0)!=="_"||p.charAt(1)!=="_"||p.charAt(p.length-1)==="_"&&p.charAt(p.length-2)==="_")return o;var s=i.v;return s.replace(/_/g,""),s===""?o:(s=i.v,s.replace(/^_*/,""),s=new Sk.builtin.str("_"+s+p))}function l(i){let o='"';for(let p=0;p<i.length;p++){let s=i.charCodeAt(p);o=s==10?o+"\\n":s==92?o+"\\\\":s==34||32>s||127<=s&&256>s?o+("\\x"+("0"+s.toString(16)).substr(-2)):256<=s?o+("\\u"+("000"+s.toString(16)).substr(-4)):o+i.charAt(p)}return o+'"'}var c;Sk.gensymcount=0,n.prototype.activateScope=function(){var i=this;c=function(){var o,p=i.blocks[i.curblock];if(p._next===null)for(o=0;o<arguments.length;++o)p.push(arguments[o])}},e.prototype.getSourceLine=function(i){return Sk.asserts.assert(this.source),this.source[i-1]},e.prototype.annotateSource=function(i){var o;if(this.source){var p=i.lineno,s=i.col_offset;for(c(`
//
// line `,p,`:
// `,this.getSourceLine(p),`
// `),o=0;o<s;++o)c(" ");c(`^
//
`),Sk.asserts.assert(i.lineno!==void 0&&i.col_offset!==void 0),c("$currLineNo = ",p,`;
$currColNo = `,s,`;

`)}},e.prototype.gensym=function(i){return i="$"+(i||"")+Sk.gensymcount++},e.prototype.niceName=function(i){return this.gensym(i.replace("<","").replace(">","").replace(" ","_"))};var u=Sk.builtin.str.reservedWords_;e.prototype.makeConstant=function(i){var o,p="";for(o=0;o<arguments.length;++o)p+=arguments[o];for(s in this.u.consts)if(this.u.consts.hasOwnProperty(s)&&(o=this.u.consts[s],o==p))return s;var s=this.u.scopename+"."+this.gensym("const");return this.u.consts[s]=p,s},e.prototype._gr=function(i,o){var p,s=this.gensym(i);for(this.u.localtemps.push(s),c("var ",s,"="),p=1;p<arguments.length;++p)c(arguments[p]);return c(";"),s},e.prototype.outputInterruptTest=function(){var i="";return(Sk.execLimit!==null||Sk.yieldLimit!==null&&this.u.canSuspend)&&(i+="var $dateNow = Date.now();",Sk.execLimit!==null&&(i+="if ($dateNow - Sk.execStart > Sk.execLimit) {throw new Sk.builtin.TimeLimitError(Sk.timeoutMsg())}"),Sk.yieldLimit!==null&&this.u.canSuspend&&(i=i+"if ($dateNow - Sk.lastYield > Sk.yieldLimit) {"+("var $susp = $saveSuspension({data: {type: 'Sk.yield'}, resume: function() {}}, '"+this.filename+"',$currLineNo,$currColNo);"),i+="$susp.$blk = $blk;$susp.optional = true;return $susp;}",this.u.doesSuspend=!0)),i},e.prototype._jumpfalse=function(i,o){i=this._gr("jfalse","(",i,"===false||!Sk.misceval.isTrue(",i,"))"),c("if(",i,"){/*test failed */$blk=",o,";continue;}")},e.prototype._jumpundef=function(i,o){c("if(",i,"===undefined){$blk=",o,";continue;}")},e.prototype._jumpnotundef=function(i,o){c("if(",i,"!==undefined){$blk=",o,";continue;}")},e.prototype._jumptrue=function(i,o){i=this._gr("jtrue","(",i,"===true||Sk.misceval.isTrue(",i,"))"),c("if(",i,"){/*test passed */$blk=",o,";continue;}")},e.prototype._jump=function(i){this.u.blocks[this.u.curblock]._next===null&&(c("$blk=",i,";"),this.u.blocks[this.u.curblock]._next=i)},e.prototype._checkSuspension=function(i){if(this.u.canSuspend){var o=this.newBlock("function return or resume suspension");this._jump(o),this.setBlock(o),i=i||{lineno:"$currLineNo",col_offset:"$currColNo"},c("if ($ret && $ret.$isSuspension) { return $saveSuspension($ret,'"+this.filename+"',"+i.lineno+","+i.col_offset+"); }"),this.u.doesSuspend=!0,this.u.tempsToSave=this.u.tempsToSave.concat(this.u.localtemps)}else c("if ($ret && $ret.$isSuspension) { $ret = Sk.misceval.retryOptionalSuspensionOrThrow($ret); }")},e.prototype.cunpackstarstoarray=function(i,o){if(!i||i.length==0)return"[]";let p=!1;for(let s of i){if(o&&p)throw new Sk.builtin.SyntaxError("Extended argument unpacking is not permitted in Python 2");s.constructor===Sk.astnodes.Starred&&(p=!0)}if(p){o=this._gr("unpack","[]");for(let s of i)s.constructor!==Sk.astnodes.Starred?c(o,".push(",this.vexpr(s),");"):(c("$ret = Sk.misceval.iterFor(Sk.abstr.iter(",this.vexpr(s.value),"), function(e) { ",o,".push(e); });"),this._checkSuspension());return o}return"["+i.map(s=>this.vexpr(s)).join(",")+"]"},e.prototype.ctuplelistorset=function(i,o,p){var s;Sk.asserts.assert(p==="tuple"||p==="list"||p==="set");var a=!1;for(s=0;s<i.elts.length;s++)if(i.elts[s].constructor===Sk.astnodes.Starred){a=!0;var $=s;break}if(i.ctx===Sk.astnodes.Store){if(a){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("assignment unpacking with stars is not supported in Python 2",this.filename,i.lineno);for(s=$+1;s<i.elts.length;s++)if(i.elts[s].constructor===Sk.astnodes.Starred)throw new Sk.builtin.SyntaxError("multiple starred expressions in assignment",this.filename,i.lineno)}for(p=a?$:i.elts.length,c("$ret = Sk.abstr.sequenceUnpack("+o+","+p+","+(a?i.elts.length-1:p)+", "+a+");"),this._checkSuspension(),o=this._gr("items","$ret"),s=0;s<i.elts.length;++s)s===$?this.vexpr(i.elts[s].value,o+"["+s+"]"):this.vexpr(i.elts[s],o+"["+s+"]")}else if(i.ctx===Sk.astnodes.Load||p==="set"){if(a){if(!Sk.__future__.python3)throw new Sk.builtin.SyntaxError("List packing with stars is not supported in Python 2");return this._gr("load"+p,"new Sk.builtins['",p,"'](",this.cunpackstarstoarray(i.elts),")")}if(p==="tuple"){for(a=!0,o=[],s=0;s<i.elts.length;++s)$=this.vexpr(i.elts[s]),a&&$.indexOf("$const")==-1&&(a=!1),o.push($);if(a)return this.makeConstant("new Sk.builtin.tuple(["+o+"])");for(s=0;s<o.length;++s)o[s]=this._gr("elem",o[s]);return this._gr("load"+p,"new Sk.builtins['",p,"']([",o,"])")}for(o=[],s=0;s<i.elts.length;++s)o.push(this._gr("elem",this.vexpr(i.elts[s])));return this._gr("load"+p,"new Sk.builtins['",p,"']([",o,"])")}},e.prototype.cdict=function(i){var o,p=[];if(i.keys!==null)for(Sk.asserts.assert(i.values.length===i.keys.length),o=0;o<i.values.length;++o){var s=this.vexpr(i.values[o]);p.push(this.vexpr(i.keys[o])),p.push(s)}return this._gr("loaddict","new Sk.builtins['dict']([",p,"])")},e.prototype.clistcomp=function(i){Sk.asserts.assert(i instanceof Sk.astnodes.ListComp);var o=this._gr("_compr","new Sk.builtins['list']([])");return this.ccompgen("list",o,i.generators,0,i.elt,null,i)},e.prototype.cdictcomp=function(i){Sk.asserts.assert(i instanceof Sk.astnodes.DictComp);var o=this._gr("_dcompr","new Sk.builtins.dict([])");return this.ccompgen("dict",o,i.generators,0,i.value,i.key,i)},e.prototype.csetcomp=function(i){Sk.asserts.assert(i instanceof Sk.astnodes.SetComp);var o=this._gr("_setcompr","new Sk.builtins.set([])");return this.ccompgen("set",o,i.generators,0,i.elt,null,i)},e.prototype.ccompgen=function(i,o,p,s,a,$,y){var w=this.newBlock(i+" comp start"),m=this.newBlock(i+" comp skip"),h=this.newBlock(i+" comp anchor"),v=p[s],k=this.vexpr(v.iter);k=this._gr("iter","Sk.abstr.iter(",k,")");var A;this._jump(w),this.setBlock(w),c("$ret = Sk.abstr.iternext(",k,", true);"),this._checkSuspension(y),k=this._gr("next","$ret"),this._jumpundef(k,h),this.vexpr(v.target,k);var M=v.ifs?v.ifs.length:0;for(A=0;A<M;++A)k=this.vexpr(v.ifs[A]),this._jumpfalse(k,w);return++s<p.length&&this.ccompgen(i,o,p,s,a,$,y),s>=p.length&&(p=this.vexpr(a),i==="dict"?(i=this.vexpr($),c(o,".mp$ass_subscript(",i,",",p,");")):i==="list"?c(o,".v.push(",p,");"):i==="set"&&c(o,".v.mp$ass_subscript(",p,", true);"),this._jump(m),this.setBlock(m)),this._jump(w),this.setBlock(h),o},e.prototype.cyield=function(i){if(this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock)throw new Sk.builtin.SyntaxError("'yield' outside function",this.filename,i.lineno);var o="Sk.builtin.none.none$";return i.value&&(o=this.vexpr(i.value)),i=this.newBlock("after yield"),c("return [/*resume*/",i,",/*ret*/",o,"];"),this.setBlock(i),"$gen.gi$sentvalue"},e.prototype.ccompare=function(i){var o;Sk.asserts.assert(i.ops.length===i.comparators.length);var p=this.vexpr(i.left),s=i.ops.length,a=this.newBlock("done"),$=this._gr("compareres","null");for(o=0;o<s;++o){var y=this.vexpr(i.comparators[o]);c("$ret = Sk.builtin.bool(Sk.misceval.richCompareBool(",p,",",y,",'",i.ops[o].prototype._astname,"', true));"),this._checkSuspension(i),c($,"=$ret;"),this._jumpfalse("$ret",a),p=y}return this._jump(a),this.setBlock(a),$},e.prototype.ccall=function(i){var o=this.vexpr(i.func);let p=this.cunpackstarstoarray(i.args,!Sk.__future__.python3);var s="undefined";if(i.keywords&&0<i.keywords.length){let a=!1;s=[];for(let $ of i.keywords){if(a&&!Sk.__future__.python3)throw new SyntaxError("Advanced unpacking of function arguments is not supported in Python 2");$.arg?(s.push("'"+$.arg.v+"'"),s.push(this.vexpr($.value))):a=!0}if(s="["+s.join(",")+"]",a){s=this._gr("keywordArgs",s);for(let $ of i.keywords)$.arg||(c("$ret = Sk.abstr.mappingUnpackIntoKeywordArray(",s,",",this.vexpr($.value),",",o,");"),this._checkSuspension())}}return Sk.__future__.super_args&&i.func.id&&i.func.id.v==="super"&&p==="[]"&&(c('if (typeof self === "undefined" || self.toString().indexOf("Window") > 0) { throw new Sk.builtin.RuntimeError("super(): no arguments") };'),p="[$gbl.__class__,self]"),c("$ret = (",o,".tp$call)?",o,".tp$call(",p,",",s,") : Sk.misceval.applyOrSuspend(",o,",undefined,undefined,",s,",",p,");"),this._checkSuspension(i),this._gr("call","$ret")},e.prototype.cslice=function(i){if(Sk.asserts.assert(i instanceof Sk.astnodes.Slice),Sk.__future__.python3)var o=i.lower?this.vexpr(i.lower):"Sk.builtin.none.none$",p=i.upper?this.vexpr(i.upper):"Sk.builtin.none.none$";else o=i.lower?this.vexpr(i.lower):i.step?"Sk.builtin.none.none$":"new Sk.builtin.int_(0)",p=i.upper?this.vexpr(i.upper):i.step?"Sk.builtin.none.none$":"new Sk.builtin.int_(2147483647)";return i=i.step?this.vexpr(i.step):"Sk.builtin.none.none$",this._gr("slice","new Sk.builtins['slice'](",o,",",p,",",i,")")},e.prototype.eslice=function(i){var o;Sk.asserts.assert(i instanceof Array);var p=[];for(o=0;o<i.length;o++)p.push(this.vslicesub(i[o]));return this._gr("extslice","new Sk.builtins['tuple']([",p,"])")},e.prototype.vslicesub=function(i){switch(i.constructor){case Sk.astnodes.Index:var o=this.vexpr(i.value);break;case Sk.astnodes.Slice:o=this.cslice(i);break;case Sk.astnodes.Ellipsis:Sk.asserts.fail("todo compile.js Ellipsis;");break;case Sk.astnodes.ExtSlice:o=this.eslice(i.dims);break;default:Sk.asserts.fail("invalid subscript kind")}return o},e.prototype.vslice=function(i,o,p,s){return i=this.vslicesub(i),this.chandlesubscr(o,p,i,s)},e.prototype.chandlesubscr=function(i,o,p,s){if(i===Sk.astnodes.Load||i===Sk.astnodes.AugLoad)return c("$ret = Sk.abstr.objectGetItem(",o,",",p,", true);"),this._checkSuspension(),this._gr("lsubscr","$ret");i===Sk.astnodes.Store||i===Sk.astnodes.AugStore?(c("$ret = Sk.abstr.objectSetItem(",o,",",p,",",s,", true);"),this._checkSuspension()):i===Sk.astnodes.Del?c("Sk.abstr.objectDelItem(",o,",",p,");"):Sk.asserts.fail("handlesubscr fail")},e.prototype.cboolop=function(i){var o,p;Sk.asserts.assert(i instanceof Sk.astnodes.BoolOp);var s=i.op===Sk.astnodes.And?this._jumpfalse:this._jumptrue,a=this.newBlock("end of boolop"),$=i.values,y=$.length;for(o=0;o<y;++o)i=this.vexpr($[o]),o===0&&(p=this._gr("boolopsucc",i)),c(p,"=",i,";"),s.call(this,i,a);return this._jump(a),this.setBlock(a),p},e.prototype.cjoinedstr=function(i){let o;Sk.asserts.assert(i instanceof Sk.astnodes.JoinedStr);for(let p of i.values)i=this.vexpr(p),o?c(o,"=",o,".sq$concat(",i,");"):o=this._gr("joinedstr",i);return o||(o="Sk.builtin.str.$emptystr"),o},e.prototype.cformattedvalue=function(i){let o=this.vexpr(i.value);switch(i.conversion){case"s":o=this._gr("value","new Sk.builtin.str(",o,")");break;case"a":o=this._gr("value","Sk.builtin.ascii(",o,")");break;case"r":o=this._gr("value","Sk.builtin.repr(",o,")")}return i=i.format_spec?this.vexpr(i.format_spec):"Sk.builtin.str.$emptystr",this._gr("formatted","Sk.abstr.objectFormat("+o+","+i+")")},e.prototype.vexpr=function(i,o,p,s){var a;switch(i.lineno>this.u.lineno&&(this.u.lineno=i.lineno,this.u.linenoSet=!1),i.constructor){case Sk.astnodes.BoolOp:return this.cboolop(i);case Sk.astnodes.BinOp:return this._gr("binop","Sk.abstr.numberBinOp(",this.vexpr(i.left),",",this.vexpr(i.right),",'",i.op.prototype._astname,"')");case Sk.astnodes.UnaryOp:return this._gr("unaryop","Sk.abstr.numberUnaryOp(",this.vexpr(i.operand),",'",i.op.prototype._astname,"')");case Sk.astnodes.Lambda:return this.clambda(i);case Sk.astnodes.IfExp:return this.cifexp(i);case Sk.astnodes.Dict:return this.cdict(i);case Sk.astnodes.ListComp:return this.clistcomp(i);case Sk.astnodes.DictComp:return this.cdictcomp(i);case Sk.astnodes.SetComp:return this.csetcomp(i);case Sk.astnodes.GeneratorExp:return this.cgenexp(i);case Sk.astnodes.Yield:return this.cyield(i);case Sk.astnodes.Compare:return this.ccompare(i);case Sk.astnodes.Call:return o=this.ccall(i),this.annotateSource(i),o;case Sk.astnodes.Num:if(typeof i.n=="number")return i.n;if(i.n instanceof Sk.builtin.lng)return this.makeConstant("new Sk.builtin.lng('"+i.n.v.toString()+"')");if(i.n instanceof Sk.builtin.int_)return typeof i.n.v=="number"?this.makeConstant("new Sk.builtin.int_("+i.n.v+")"):this.makeConstant("new Sk.builtin.int_('"+i.n.v.toString()+"')");if(i.n instanceof Sk.builtin.float_)return i=i.n.v===0&&1/i.n.v===-1/0?"-0":i.n.v,this.makeConstant("new Sk.builtin.float_("+i+")");if(i.n instanceof Sk.builtin.complex)return this.makeConstant("new Sk.builtin.complex("+(i.n.real===0&&1/i.n.real===-1/0?"-0":i.n.real)+", "+(i.n.imag===0&&1/i.n.imag===-1/0?"-0":i.n.imag)+")");Sk.asserts.fail("unhandled Num type");case Sk.astnodes.Bytes:if(Sk.__future__.python3){for(o=[],i=i.s.$jsstr(),p=0;p<i.length;p++)o.push(i.charCodeAt(p));return this.makeConstant("new Sk.builtin.bytes([",o.join(", "),"])")}case Sk.astnodes.Str:return this.makeConstant("new Sk.builtin.str(",l(i.s.$jsstr()),")");case Sk.astnodes.Attribute:switch(i.ctx!==Sk.astnodes.AugLoad&&i.ctx!==Sk.astnodes.AugStore&&(a=this.vexpr(i.value)),s=i.attr.$r().v,s=s.substring(1,s.length-1),s=r(this.u.private_,new Sk.builtin.str(s)).v,s=this.makeConstant("new Sk.builtin.str('"+s+"')"),i.ctx){case Sk.astnodes.AugLoad:return c("$ret = ",p,".tp$getattr(",s,", true);"),this._checkSuspension(i),c(`
if ($ret === undefined) {`),c(`
throw new Sk.builtin.AttributeError(`,p,`.sk$attrError() + " has no attribute '" + `,s,`.$jsstr() + "'");`),c(`
};`),this._gr("lattr","$ret");case Sk.astnodes.Load:return c("$ret = ",a,".tp$getattr(",s,", true);"),this._checkSuspension(i),c(`
if ($ret === undefined) {`),c(`
throw new Sk.builtin.AttributeError(`,a,`.sk$attrError() + " has no attribute '" + `,s,`.$jsstr() + "'");`),c(`
};`),this._gr("lattr","$ret");case Sk.astnodes.AugStore:c("$ret = undefined;"),c("if(",o,"!==undefined){"),c("$ret = ",p,".tp$setattr(",s,",",o,", true);"),c("}"),this._checkSuspension(i);break;case Sk.astnodes.Store:c("$ret = ",a,".tp$setattr(",s,",",o,", true);"),this._checkSuspension(i);break;case Sk.astnodes.Del:c("$ret = ",a,".tp$setattr(",s,", undefined, true);"),this._checkSuspension(i);break;default:Sk.asserts.fail("invalid attribute expression")}break;case Sk.astnodes.Subscript:switch(i.ctx){case Sk.astnodes.AugLoad:return c("$ret = Sk.abstr.objectGetItem(",p,",",s,", true);"),this._checkSuspension(i),this._gr("gitem","$ret");case Sk.astnodes.Load:case Sk.astnodes.Store:case Sk.astnodes.Del:return this.vslice(i.slice,i.ctx,this.vexpr(i.value),o);case Sk.astnodes.AugStore:c("$ret=undefined;"),c("if(",o,"!==undefined){"),c("$ret=Sk.abstr.objectSetItem(",p,",",s,",",o,", true)"),c("}"),this._checkSuspension(i);break;default:Sk.asserts.fail("invalid subscript expression")}break;case Sk.astnodes.Name:return this.nameop(i.id,i.ctx,o);case Sk.astnodes.NameConstant:if(i.ctx===Sk.astnodes.Store||i.ctx===Sk.astnodes.AugStore||i.ctx===Sk.astnodes.Del)throw new Sk.builtin.SyntaxError("can not assign to a constant name");switch(i.value){case Sk.builtin.none.none$:return"Sk.builtin.none.none$";case Sk.builtin.bool.true$:return"Sk.builtin.bool.true$";case Sk.builtin.bool.false$:return"Sk.builtin.bool.false$";default:Sk.asserts.fail("invalid named constant")}break;case Sk.astnodes.List:return this.ctuplelistorset(i,o,"list");case Sk.astnodes.Tuple:return this.ctuplelistorset(i,o,"tuple");case Sk.astnodes.Set:return this.ctuplelistorset(i,o,"set");case Sk.astnodes.Starred:switch(i.ctx){case Sk.astnodes.Store:throw new Sk.builtin.SyntaxError("starred assignment target must be in a list or tuple",this.filename,i.lineno);default:throw new Sk.builtin.SyntaxError("can't use starred expression here",this.filename,i.lineno)}case Sk.astnodes.JoinedStr:return this.cjoinedstr(i);case Sk.astnodes.FormattedValue:return this.cformattedvalue(i);default:Sk.asserts.fail("unhandled case "+i.constructor.name+" vexpr")}},e.prototype.vseqexpr=function(i,o){var p;Sk.asserts.assert(o===void 0||i.length===o.length);var s=[];for(p=0;p<i.length;++p)s.push(this.vexpr(i[p],o===void 0?void 0:o[p]));return s},e.prototype.caugassign=function(i){Sk.asserts.assert(i instanceof Sk.astnodes.AugAssign);var o=i.target;switch(o.constructor){case Sk.astnodes.Attribute:var p=this.vexpr(o.value);o=new Sk.astnodes.Attribute(o.value,o.attr,Sk.astnodes.AugLoad,o.lineno,o.col_offset);var s=this.vexpr(o,void 0,p),a=this.vexpr(i.value);return i=this._gr("inplbinopattr","Sk.abstr.numberInplaceBinOp(",s,",",a,",'",i.op.prototype._astname,"')"),o.ctx=Sk.astnodes.AugStore,this.vexpr(o,i,p);case Sk.astnodes.Subscript:p=this.vexpr(o.value);var $=this.vslicesub(o.slice);return o=new Sk.astnodes.Subscript(o.value,$,Sk.astnodes.AugLoad,o.lineno,o.col_offset),s=this.vexpr(o,void 0,p,$),a=this.vexpr(i.value),i=this._gr("inplbinopsubscr","Sk.abstr.numberInplaceBinOp(",s,",",a,",'",i.op.prototype._astname,"')"),o.ctx=Sk.astnodes.AugStore,this.vexpr(o,i,p,$);case Sk.astnodes.Name:return p=this.nameop(o.id,Sk.astnodes.Load),a=this.vexpr(i.value),i=this._gr("inplbinop","Sk.abstr.numberInplaceBinOp(",p,",",a,",'",i.op.prototype._astname,"')"),this.nameop(o.id,Sk.astnodes.Store,i);default:Sk.asserts.fail("unhandled case in augassign")}},e.prototype.exprConstant=function(i){switch(i.constructor){case Sk.astnodes.Num:return Sk.misceval.isTrue(i.n)?1:0;case Sk.astnodes.Str:return Sk.misceval.isTrue(i.s)?1:0;default:return-1}},e.prototype.newBlock=function(i){var o=this.u.blocknum++;return this.u.blocks[o]=[],this.u.blocks[o]._name=i||"<unnamed>",this.u.blocks[o]._next=null,o},e.prototype.setBlock=function(i){Sk.asserts.assert(0<=i&&i<this.u.blocknum),this.u.curblock=i},e.prototype.pushBreakBlock=function(i){Sk.asserts.assert(0<=i&&i<this.u.blocknum),this.u.breakBlocks.push(i)},e.prototype.popBreakBlock=function(){this.u.breakBlocks.pop()},e.prototype.pushContinueBlock=function(i){Sk.asserts.assert(0<=i&&i<this.u.blocknum),this.u.continueBlocks.push(i)},e.prototype.popContinueBlock=function(){this.u.continueBlocks.pop()},e.prototype.pushExceptBlock=function(i){Sk.asserts.assert(0<=i&&i<this.u.blocknum),this.u.exceptBlocks.push(i)},e.prototype.popExceptBlock=function(){this.u.exceptBlocks.pop()},e.prototype.pushFinallyBlock=function(i){Sk.asserts.assert(0<=i&&i<this.u.blocknum),Sk.asserts.assert(this.u.breakBlocks.length===this.u.continueBlocks.length),this.u.finallyBlocks.push({blk:i,breakDepth:this.u.breakBlocks.length})},e.prototype.popFinallyBlock=function(){this.u.finallyBlocks.pop()},e.prototype.peekFinallyBlock=function(){return 0<this.u.finallyBlocks.length?this.u.finallyBlocks[this.u.finallyBlocks.length-1]:void 0},e.prototype.setupExcept=function(i){c("$exc.push(",i,");")},e.prototype.endExcept=function(){c("$exc.pop();")},e.prototype.outputLocals=function(i){var o,p={};for(o=0;i.argnames&&o<i.argnames.length;++o)p[i.argnames[o]]=!0;i.localnames.sort();var s=[];for(o=0;o<i.localnames.length;++o){var a=i.localnames[o];p[a]===void 0&&(s.push(a),p[a]=!0)}return 0<s.length?"var "+s.join(",")+"; /* locals */":""},e.prototype.outputSuspensionHelpers=function(i){var o,p=[],s=i.localnames.concat(i.tempsToSave),a={},$=i.ste.blockType===Sk.SYMTAB_CONSTS.FunctionBlock&&i.ste.childHasFree,y=(0<s.length?"var "+s.join(",")+";":"")+"var $wakeFromSuspension = function() {var susp = "+i.scopename+".$wakingSuspension; "+i.scopename+".$wakingSuspension = undefined;$blk=susp.$blk; $loc=susp.$loc; $gbl=susp.$gbl; $exc=susp.$exc; $err=susp.$err; $postfinally=susp.$postfinally;$currLineNo=susp.$lineno; $currColNo=susp.$colno; Sk.lastYield=Date.now();"+($?"$cell=susp.$cell;":"");for(o=0;o<s.length;o++){var w=s[o];a[w]===void 0&&(y+=w+"=susp.$tmps."+w+";",a[w]=!0)}for(y+="try { $ret=susp.child.resume(); } catch(err) { if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if($exc.length>0) { $err=err; $blk=$exc.pop(); } else { throw err; } }};",y+="var $saveSuspension = function($child, $filename, $lineno, $colno) {var susp = new Sk.misceval.Suspension(); susp.child=$child;susp.resume=function(){"+i.scopename+".$wakingSuspension=susp; return "+i.scopename+"("+(i.ste.generator?"$gen":"")+"); };susp.data=susp.child.data;susp.$blk=$blk;susp.$loc=$loc;susp.$gbl=$gbl;susp.$exc=$exc;susp.$err=$err;susp.$postfinally=$postfinally;susp.$filename=$filename;susp.$lineno=$lineno;susp.$colno=$colno;susp.optional=susp.child.optional;"+($?"susp.$cell=$cell;":""),a={},o=0;o<s.length;o++)w=s[o],a[w]===void 0&&(p.push('"'+w+'":'+w),a[w]=!0);return y+="susp.$tmps={"+p.join(",")+"};return susp;};"},e.prototype.outputAllUnits=function(){var i,o,p="";for(o=0;o<this.allUnits.length;++o){var s=this.allUnits[o];p+=s.prefixCode,p+=this.outputLocals(s),s.doesSuspend&&(p+=this.outputSuspensionHelpers(s)),p+=s.varDeclsCode,p+=s.switchCode;var a=s.blocks,$=Object.create(null);for(i=0;i<a.length;++i){var y=i;if(!(y in $))for(;;)if($[y]=!0,p+="case "+y+": /* --- "+a[y]._name+" --- */",p+=a[y].join(""),a[y]._next!==null)if(a[y]._next in $){p+="/* jump */ continue;";break}else p+="/* allowing case fallthrough */",y=a[y]._next;else{p+="throw new Sk.builtin.SystemError('internal error: unterminated block');";break}}p+=s.suffixCode}return p},e.prototype.cif=function(i){var o;Sk.asserts.assert(i instanceof Sk.astnodes.If);var p=this.exprConstant(i.test);if(p===0)i.orelse&&0<i.orelse.length&&this.vseqstmt(i.orelse);else if(p===1)this.vseqstmt(i.body);else{var s=this.newBlock("end of if");i.orelse&&0<i.orelse.length&&(o=this.newBlock("next branch of if")),p=this.vexpr(i.test),i.orelse&&0<i.orelse.length?(this._jumpfalse(p,o),this.vseqstmt(i.body),this._jump(s),this.setBlock(o),this.vseqstmt(i.orelse)):(this._jumpfalse(p,s),this.vseqstmt(i.body)),this._jump(s),this.setBlock(s)}},e.prototype.cwhile=function(i){if(this.exprConstant(i.test)===0)i.orelse&&this.vseqstmt(i.orelse);else{var o=this.newBlock("while test");this._jump(o),this.setBlock(o);var p=this.newBlock("after while"),s=0<i.orelse.length?this.newBlock("while orelse"):null,a=this.newBlock("while body");this.annotateSource(i),this._jumpfalse(this.vexpr(i.test),s||p),this._jump(a),this.pushBreakBlock(p),this.pushContinueBlock(o),this.setBlock(a),(Sk.debugging||Sk.killableWhile)&&this.u.canSuspend&&(a=this.newBlock("debug breakpoint for line "+i.lineno),c("if (Sk.breakpoints('"+this.filename+"',"+i.lineno+","+i.col_offset+")) {","var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '"+this.filename+"',"+i.lineno+","+i.col_offset+");","$susp.$blk = "+a+";","$susp.optional = true;","return $susp;","}"),this._jump(a),this.setBlock(a),this.u.doesSuspend=!0),this.vseqstmt(i.body),this._jump(o),this.popContinueBlock(),this.popBreakBlock(),0<i.orelse.length&&(this.setBlock(s),this.vseqstmt(i.orelse),this._jump(p)),this.setBlock(p)}},e.prototype.cfor=function(i){var o=this.newBlock("for start"),p=this.newBlock("for cleanup"),s=this.newBlock("for end");this.pushBreakBlock(s),this.pushContinueBlock(o);var a=this.vexpr(i.iter);if(this.u.ste.generator){var $="$loc."+this.gensym("iter");c($,"=Sk.abstr.iter(",a,");")}else $=this._gr("iter","Sk.abstr.iter(",a,")"),this.u.tempsToSave.push($);this._jump(o),this.setBlock(o),c("$ret = Sk.abstr.iternext(",$,this.u.canSuspend?", true":", false",");"),this._checkSuspension(i),$=this._gr("next","$ret"),this._jumpundef($,p),this.vexpr(i.target,$),(Sk.debugging||Sk.killableFor)&&this.u.canSuspend&&($=this.newBlock("debug breakpoint for line "+i.lineno),c("if (Sk.breakpoints('"+this.filename+"',"+i.lineno+","+i.col_offset+")) {","var $susp = $saveSuspension({data: {type: 'Sk.delay'}, resume: function() {}}, '"+this.filename+"',"+i.lineno+","+i.col_offset+");","$susp.$blk = "+$+";","$susp.optional = true;","return $susp;","}"),this._jump($),this.setBlock($),this.u.doesSuspend=!0),this.vseqstmt(i.body),this._jump(o),this.setBlock(p),this.popContinueBlock(),this.popBreakBlock(),this.vseqstmt(i.orelse),this._jump(s),this.setBlock(s)},e.prototype.craise=function(i){if(i.exc){var o=this._gr("exc",this.vexpr(i.exc)),p=this.newBlock("exception now instantiated"),s=this._gr("isclass",o+".prototype instanceof Sk.builtin.BaseException");this._jumpfalse(s,p),i.inst?(s=this._gr("inst",this.vexpr(i.inst)),c("if(!(",s," instanceof Sk.builtin.tuple)) {",s,"= new Sk.builtin.tuple([",s,"]);","}"),c("$ret = Sk.misceval.callsimOrSuspendArray(",o,",",s,".v);")):c("$ret = Sk.misceval.callsimOrSuspend(",o,");"),this._checkSuspension(i),c(o,"=$ret;"),this._jump(p),this.setBlock(p),c("if (",o," instanceof Sk.builtin.BaseException) {throw ",o,";} else {throw new Sk.builtin.TypeError('exceptions must derive from BaseException');};")}else c("throw $err;")},e.prototype.outputFinallyCascade=function(i){if(this.u.finallyBlocks.length==0)c("if($postfinally!==undefined) { if ($postfinally.returning) { return $postfinally.returning; } else { $blk=$postfinally.gotoBlock; $postfinally=undefined; continue; } }");else{var o=this.peekFinallyBlock();c("if($postfinally!==undefined) {","if ($postfinally.returning",o.breakDepth==i.breakDepth?"|| $postfinally.isBreak":"",") {","$blk=",o.blk,";continue;","} else {","$blk=$postfinally.gotoBlock;$postfinally=undefined;continue;","}","}")}},e.prototype.ctry=function(i){var o,p=i.handlers.length;if(i.finalbody){var s=this.newBlock("finalbody"),a=this.newBlock("finalexh"),$=this._gr("finally_reraise","undefined");this.u.tempsToSave.push($),this.pushFinallyBlock(s);var y=this.peekFinallyBlock();this.setupExcept(a)}var w=[];for(o=0;o<p;++o)w.push(this.newBlock("except_"+o+"_"));var m=this.newBlock("unhandled"),h=this.newBlock("orelse"),v=this.newBlock("end");for(w.length!=0&&this.setupExcept(w[0]),this.vseqstmt(i.body),w.length!=0&&this.endExcept(),this._jump(h),o=0;o<p;++o){this.setBlock(w[o]);var k=i.handlers[o];if(!k.type&&o<p-1)throw new Sk.builtin.SyntaxError("default 'except:' must be last",this.filename,k.lineno);if(k.type){var A=this.vexpr(k.type),M=o==p-1?m:w[o+1];A=this._gr("instance","Sk.misceval.isTrue(Sk.builtin.isinstance($err, ",A,"))"),this._jumpfalse(A,M)}k.name&&this.vexpr(k.name,"$err"),this.vseqstmt(k.body),this._jump(v)}this.setBlock(m),c("throw $err;"),this.setBlock(h),this.vseqstmt(i.orelse),this._jump(v),this.setBlock(v),i.finalbody&&(this.endExcept(),this._jump(s),this.setBlock(a),c($,"=$err;"),this._jump(s),this.setBlock(s),this.popFinallyBlock(),this.vseqstmt(i.finalbody),c("if(",$,"!==undefined) { throw ",$,";}"),this.outputFinallyCascade(y))},e.prototype.cwith=function(i,o){var p=this.newBlock("withexh"),s=this.newBlock("withtidyup"),a=this.newBlock("withcarryon"),$=this._gr("mgr",this.vexpr(i.items[o].context_expr));c("$ret = Sk.abstr.lookupSpecial(",$,",Sk.builtin.str.$exit);"),this._checkSuspension(i);var y=this._gr("exit","$ret");this.u.tempsToSave.push(y),c("$ret = Sk.abstr.lookupSpecial(",$,",Sk.builtin.str.$enter);"),this._checkSuspension(i),c("$ret = Sk.misceval.callsimOrSuspendArray($ret);"),this._checkSuspension(i),$=this._gr("value","$ret"),this.pushFinallyBlock(s);var w=this.u.finallyBlocks[this.u.finallyBlocks.length-1];this.setupExcept(p),i.items[o].optional_vars&&this.nameop(i.items[o].optional_vars.id,Sk.astnodes.Store,$),o+1<i.items.length?this.cwith(i,o+1):this.vseqstmt(i.body),this.endExcept(),this._jump(s),this.setBlock(p),c("$ret = Sk.misceval.applyOrSuspend(",y,",undefined,Sk.builtin.getExcInfo($err),undefined,[]);"),this._checkSuspension(i),this._jumptrue("$ret",a),c("throw $err;"),this.setBlock(s),this.popFinallyBlock(),c("$ret = Sk.misceval.callsimOrSuspendArray(",y,",[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.none.none$]);"),this._checkSuspension(i),this.outputFinallyCascade(w),this._jump(a),this.setBlock(a)},e.prototype.cassert=function(i){var o=this.vexpr(i.test),p=this.newBlock("end");this._jumptrue(o,p),c("throw new Sk.builtin.AssertionError(",i.msg?this.vexpr(i.msg):"",");"),this.setBlock(p)},e.prototype.cimportas=function(i,o,p){i=i.v;var s=i.indexOf("."),a=p;if(s!==-1)for(i=i.substr(s+1);s!==-1;)s=i.indexOf("."),p=s!==-1?i.substr(0,s):i,a=this._gr("lattr","Sk.abstr.gattr(",a,", new Sk.builtin.str('",p,"'))"),i=i.substr(s+1);return this.nameop(o,Sk.astnodes.Store,a)},e.prototype.cimport=function(i){var o,p=i.names.length;for(o=0;o<p;++o){var s=i.names[o];c("$ret = Sk.builtin.__import__(",s.name.$r().v,",$gbl,$loc,[],",Sk.__future__.absolute_import?0:-1,");"),this._checkSuspension(i);var a=this._gr("module","$ret");if(s.asname)this.cimportas(s.name,s.asname,a);else{var $=s.name;s=$.v.indexOf("."),s!==-1&&($=new Sk.builtin.str($.v.substr(0,s))),this.nameop($,Sk.astnodes.Store,a)}}},e.prototype.cfromimport=function(i){var o,p=i.names.length,s=[],a=i.level;for(a!=0||Sk.__future__.absolute_import||(a=-1),o=0;o<p;++o)s[o]="'"+t(i.names[o].name.v)+"'";for(c("$ret = Sk.builtin.__import__(",i.module.$r().v,",$gbl,$loc,[",s,"],",a,");"),this._checkSuspension(i),a=this._gr("module","$ret"),o=0;o<p;++o){s=i.names[o];var $="'"+s.name.v+"'";if(o===0&&s.name.v==="*"){Sk.asserts.assert(p===1),c("Sk.importStar(",a,",$loc, $gbl);");break}var y=this._gr("item","Sk.abstr.gattr(",a,", new Sk.builtin.str(",$,"), undefined)");$=s.name,s.asname&&($=s.asname),this.nameop($,Sk.astnodes.Store,y)}},e.prototype.buildcodeobj=function(i,o,p,s,a,$){var y=[],w,m=[],h=[],v=[],k=null,A=null;if(p&&(m=this.vseqexpr(p)),s&&s.defaults&&(h=this.vseqexpr(s.defaults)),s&&s.kw_defaults&&(v=s.kw_defaults.map(x=>x?this.vexpr(x):"undefined")),s&&s.vararg&&(k=s.vararg),s&&s.kwarg&&(A=s.kwarg),!Sk.__future__.python3&&s&&s.kwonlyargs&&s.kwonlyargs.length!=0)throw new Sk.builtin.SyntaxError("Keyword-only arguments are not supported in Python 2");var M=this.enterScope(o,i,i.lineno,this.canSuspend);p=this.u.ste.generator;var D=this.u.ste.hasFree,f=this.u.ste.childHasFree,b=this.newBlock("codeobj entry");this.u.prefixCode="var "+M+"=(function "+this.niceName(o.v)+"$(";var d=[];if(p){if(A)throw new Sk.builtin.SyntaxError(o.v+"(): keyword arguments in generators not supported",this.filename,i.lineno);if(k)throw new Sk.builtin.SyntaxError(o.v+"(): variable number of arguments in generators not supported",this.filename,i.lineno);d.push("$gen")}else{for(A&&(d.push("$kwa"),this.u.tempsToSave.push("$kwa")),w=0;s&&w<s.args.length;++w)d.push(this.nameop(s.args[w].arg,Sk.astnodes.Param));for(w=0;s&&s.kwonlyargs&&w<s.kwonlyargs.length;++w)d.push(this.nameop(s.kwonlyargs[w].arg,Sk.astnodes.Param));k&&d.push(this.nameop(s.vararg.arg,Sk.astnodes.Param))}let S=!p;D&&(S||d.push("$free"),this.u.tempsToSave.push("$free")),this.u.prefixCode=S?this.u.prefixCode+"$posargs,$kwargs":this.u.prefixCode+d.join(","),this.u.prefixCode+="){",p&&(this.u.prefixCode+=`
// generator
`),D&&(this.u.prefixCode+=`
// has free
`),f&&(this.u.prefixCode+=`
// has cell
`),S&&(this.u.prefixCode+=`
// fast call
`);var g="{}";if(p&&(b="$gen.gi$resumeat",g="$gen.gi$locals"),w=",$cell={}",f&&p&&(w=",$cell=$gen.gi$cells"),this.u.varDeclsCode+="var $blk="+b+",$exc=[],$loc="+g+w+",$gbl="+(S?"this && this.func_globals":"this")+(S&&D?",$free=this && this.func_closure":"")+",$err=undefined,$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;",Sk.execLimit!==null&&(this.u.varDeclsCode+="if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}"),Sk.yieldLimit!==null&&this.u.canSuspend&&(this.u.varDeclsCode+="if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}"),this.u.varDeclsCode+="if ("+M+".$wakingSuspension!==undefined) { $wakeFromSuspension(); } else {",S){for(this.u.varDeclsCode=A||k||s&&s.kwonlyargs&&s.kwonlyargs.length!==0?this.u.varDeclsCode+`
var $args = this.$resolveArgs($posargs,$kwargs)
`:this.u.varDeclsCode+("var $args = ((!$kwargs || $kwargs.length===0) && $posargs.length==="+d.length+") ? $posargs : this.$resolveArgs($posargs,$kwargs)"),w=0;w<d.length;w++)this.u.varDeclsCode+=","+d[w]+"=$args["+w+"]";this.u.varDeclsCode+=`;
`}if(p&&0<h.length)for(b=s.args.length-h.length,w=0;w<h.length;++w)d=this.nameop(s.args[w+b].arg,Sk.astnodes.Param),this.u.varDeclsCode+="if("+d+"===undefined)"+d+"="+M+".$defaults["+w+"];";for(w=0;s&&w<s.args.length;++w)d=s.args[w].arg,this.isCell(d)&&(d=t(r(this.u.private_,d).v),this.u.varDeclsCode+="$cell."+d+"="+d+";");for(w=0;s&&s.kwonlyargs&&w<s.kwonlyargs.length;++w)d=s.kwonlyargs[w].arg,this.isCell(d)&&(d=t(r(this.u.private_,d).v),this.u.varDeclsCode+="$cell."+d+"="+d+";");if(k&&this.isCell(k.arg)&&(w=t(r(this.u.private_,k.arg).v),this.u.varDeclsCode+="$cell."+w+"="+w+";"),A&&(this.u.localnames.push(A.arg.v),this.u.varDeclsCode+=A.arg.v+"=new Sk.builtins['dict']($kwa);",this.isCell(A.arg)&&(w=t(r(this.u.private_,A.arg).v),this.u.varDeclsCode+="$cell."+w+"="+w+";")),this.u.varDeclsCode+="}",Sk.__future__.python3&&$&&(this.u.varDeclsCode+="$gbl.__class__=$gbl."+$.v+";"),this.u.switchCode="while(true){try{",this.u.switchCode+=this.outputInterruptTest(),this.u.switchCode+="switch($blk){",this.u.suffixCode="} }catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} }});",a.call(this,M),s){for(let x of s.args)y.push(x.arg.v);for(let x of s.kwonlyargs||[])y.push(x.arg.v);this.u.argnames=y}if(this.exitScope(),0<h.length&&c(M,".$defaults=[",h.join(","),"];"),s&&s.kwonlyargs&&0<s.kwonlyargs.length&&(c(M,".co_argcount=",s.args.length,";"),c(M,".co_kwonlyargcount=",s.kwonlyargs.length,";"),c(M,".$kwdefs=[",v.join(","),"];")),0<y.length?c(M,".co_varnames=['",y.join("','"),"'];"):c(M,".co_varnames=[];"),c(M,".co_docstring=",this.cDocstringOfCode(i),";"),A&&c(M,".co_kwargs=1;"),k&&c(M,".co_varargs=1;"),p||c(M,".co_fastcall=1;"),i="",D&&(i=",$cell",(a=this.u.ste.hasFree)&&(i+=",$free")),p)return s&&0<s.args.length?this._gr("gener",`new Sk.builtins['function']((function(){var $origargs=Array.prototype.slice.call(arguments);Sk.builtin.pyCheckArgsLen("`,o.v,'",arguments.length,',s.args.length-h.length,",",s.args.length,");return new Sk.builtins['generator'](",M,",$gbl,$origargs",i,");}))"):this._gr("gener",`new Sk.builtins['function']((function(){Sk.builtin.pyCheckArgsLen("`,o.v,`",arguments.length,0,0);return new Sk.builtins['generator'](`,M,",$gbl,[]",i,");}))");if(0<m.length){c("$ret = new Sk.builtins['function'](",M,",$gbl",i,");");for(let x of m.reverse())c("$ret = Sk.misceval.callsimOrSuspendArray(",x,",[$ret]);"),this._checkSuspension();return this._gr("funcobj","$ret")}return this._gr("funcobj","new Sk.builtins['function'](",M,",$gbl",i,")")},e.prototype.maybeCDocstringOfBody=function(i){return i.length===0||(i=i[0],i.constructor!==Sk.astnodes.Expr)?null:(i=i.value,i.constructor!==Sk.astnodes.Str?null:this.vexpr(i))},e.prototype.cDocstringOfCode=function(i){switch(i.constructor){case Sk.astnodes.AsyncFunctionDef:case Sk.astnodes.FunctionDef:return this.maybeCDocstringOfBody(i.body)||"Sk.builtin.none.none$";case Sk.astnodes.Lambda:case Sk.astnodes.GeneratorExp:return"Sk.builtin.none.none$";default:Sk.asserts.fail(`unexpected node kind ${i.constructor.name}`)}},e.prototype.cfunction=function(i,o){Sk.asserts.assert(i instanceof Sk.astnodes.FunctionDef),o=this.buildcodeobj(i,i.name,i.decorator_list,i.args,function(p){this.vseqstmt(i.body),c("return Sk.builtin.none.none$;")},o),this.nameop(i.name,Sk.astnodes.Store,o)},e.prototype.clambda=function(i){return Sk.asserts.assert(i instanceof Sk.astnodes.Lambda),this.buildcodeobj(i,new Sk.builtin.str("<lambda>"),null,i.args,function(o){o=this.vexpr(i.body),c("return ",o,";")})},e.prototype.cifexp=function(i){var o=this.newBlock("next of ifexp"),p=this.newBlock("end of ifexp"),s=this._gr("res","null"),a=this.vexpr(i.test);return this._jumpfalse(a,o),c(s,"=",this.vexpr(i.body),";"),this._jump(p),this.setBlock(o),c(s,"=",this.vexpr(i.orelse),";"),this._jump(p),this.setBlock(p),s},e.prototype.cgenexpgen=function(i,o,p){var s=this.newBlock("start for "+o),a=this.newBlock("skip for "+o);this.newBlock("if cleanup for "+o);var $=this.newBlock("end for "+o),y=i[o];if(o===0)var w="$loc.$iter0";else{var m=this.vexpr(y.iter);w="$loc."+this.gensym("iter"),c(w,"=","Sk.abstr.iter(",m,");")}this._jump(s),this.setBlock(s),this.annotateSource(p),c("$ret = Sk.abstr.iternext(",w,this.u.canSuspend?", true":", false",");"),this._checkSuspension(p),m=this._gr("next","$ret"),this._jumpundef(m,$),this.vexpr(y.target,m);var h=y.ifs?y.ifs.length:0;for(w=0;w<h;++w)this.annotateSource(y.ifs[w]),m=this.vexpr(y.ifs[w]),this._jumpfalse(m,s);++o<i.length&&this.cgenexpgen(i,o,p),o>=i.length&&(this.annotateSource(p),i=this.vexpr(p),c("return [",a,"/*resume*/,",i,"/*ret*/];"),this.setBlock(a)),this._jump(s),this.setBlock($),o===1&&c("return Sk.builtin.none.none$;")},e.prototype.cgenexp=function(i){var o=this.buildcodeobj(i,new Sk.builtin.str("<genexpr>"),null,null,function(p){this.cgenexpgen(i.generators,0,i.elt)});return o=this._gr("gener","Sk.misceval.callsimArray(",o,");"),c(o,".gi$locals.$iter0=Sk.abstr.iter(",this.vexpr(i.generators[0].iter),");"),o},e.prototype.cclass=function(i){Sk.asserts.assert(i instanceof Sk.astnodes.ClassDef);var o=this.vseqexpr(i.decorator_list),p=this.vseqexpr(i.bases),s=this.enterScope(i.name,i,i.lineno),a=this.newBlock("class entry");this.u.prefixCode="var "+s+"=(function $"+i.name.v+"$class_outer($globals,$locals,$cell){var $gbl=$globals,$loc=$locals;$free=$globals;",this.u.switchCode+="(function $"+i.name.v+"$_closure($cell){",this.u.switchCode+="var $blk="+a+",$exc=[],$ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;",Sk.execLimit!==null&&(this.u.switchCode+="if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}"),Sk.yieldLimit!==null&&this.u.canSuspend&&(this.u.switchCode+="if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}"),this.u.switchCode+="while(true){try{",this.u.switchCode+=this.outputInterruptTest(),this.u.switchCode+="switch($blk){",this.u.suffixCode="}}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }}}",this.u.suffixCode+="}).call(null, $cell);});",this.u.private_=i.name,this.cbody(i.body,i.name),c("return;"),this.exitScope(),c("$ret = Sk.misceval.buildClass($gbl,",s,",",i.name.$r().v,",[",p,"], $cell);");for(let $ of o)c("$ret = Sk.misceval.callsimOrSuspendArray(",$,", [$ret]);"),this._checkSuspension();this.nameop(i.name,Sk.astnodes.Store,"$ret")},e.prototype.ccontinue=function(i){var o=this.peekFinallyBlock();if(this.u.continueBlocks.length==0)throw new Sk.builtin.SyntaxError("'continue' outside loop",this.filename,i.lineno);i=this.u.continueBlocks[this.u.continueBlocks.length-1],Sk.asserts.assert(this.u.breakBlocks.length===this.u.continueBlocks.length),o&&o.breakDepth==this.u.continueBlocks.length?c("$postfinally={isBreak:true,gotoBlock:",i,"};"):this._jump(i)},e.prototype.cbreak=function(i){var o=this.peekFinallyBlock();if(this.u.breakBlocks.length===0)throw new Sk.builtin.SyntaxError("'break' outside loop",this.filename,i.lineno);i=this.u.breakBlocks[this.u.breakBlocks.length-1],o&&o.breakDepth==this.u.breakBlocks.length?c("$postfinally={isBreak:true,gotoBlock:",i,"};"):this._jump(i)},e.prototype.vstmt=function(i,o){if(this.u.lineno=i.lineno,this.u.linenoSet=!1,this.u.localtemps=[],Sk.debugging&&this.u.canSuspend){var p=this.newBlock("debug breakpoint for line "+i.lineno);c("if (Sk.breakpoints('"+this.filename+"',"+i.lineno+","+i.col_offset+")) {","var $susp = $saveSuspension({data: {type: 'Sk.debug'}, resume: function() {}}, '"+this.filename+"',"+i.lineno+","+i.col_offset+");","$susp.$blk = "+p+";","$susp.optional = true;","return $susp;","}"),this._jump(p),this.setBlock(p),this.u.doesSuspend=!0}switch(this.annotateSource(i),i.constructor){case Sk.astnodes.FunctionDef:this.cfunction(i,o);break;case Sk.astnodes.ClassDef:this.cclass(i);break;case Sk.astnodes.Return:if(this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock)throw new Sk.builtin.SyntaxError("'return' outside function",this.filename,i.lineno);p=i.value?this.vexpr(i.value):"Sk.builtin.none.none$",this.u.finallyBlocks.length==0?c("return ",p,";"):(c("$postfinally={returning:",p,"};"),this._jump(this.peekFinallyBlock().blk));break;case Sk.astnodes.Delete:this.vseqexpr(i.targets);break;case Sk.astnodes.Assign:var s=i.targets.length;for(p=this.vexpr(i.value),o=0;o<s;++o)this.vexpr(i.targets[o],p);break;case Sk.astnodes.AnnAssign:p=this.vexpr(i.value),this.vexpr(i.target,p),this.vexpr(i.annotation);break;case Sk.astnodes.AugAssign:return this.caugassign(i);case Sk.astnodes.Print:this.cprint(i);break;case Sk.astnodes.For:return this.cfor(i);case Sk.astnodes.While:return this.cwhile(i);case Sk.astnodes.If:return this.cif(i);case Sk.astnodes.Raise:return this.craise(i);case Sk.astnodes.Try:return this.ctry(i);case Sk.astnodes.With:return this.cwith(i,0);case Sk.astnodes.Assert:return this.cassert(i);case Sk.astnodes.Import:return this.cimport(i);case Sk.astnodes.ImportFrom:return this.cfromimport(i);case Sk.astnodes.Global:break;case Sk.astnodes.Expr:this.vexpr(i.value);break;case Sk.astnodes.Pass:break;case Sk.astnodes.Break:this.cbreak(i);break;case Sk.astnodes.Continue:this.ccontinue(i);break;case Sk.astnodes.Debugger:c("debugger;");break;default:Sk.asserts.fail("unhandled case in vstmt: "+JSON.stringify(i))}},e.prototype.vseqstmt=function(i){var o;for(o=0;o<i.length;++o)this.vstmt(i[o])},e.prototype.isCell=function(i){return i=t(r(this.u.private_,i).v),this.u.ste.getScope(i)===Sk.SYMTAB_CONSTS.CELL},e.prototype.nameop=function(i,o,p){if((o===Sk.astnodes.Store||o===Sk.astnodes.AugStore||o===Sk.astnodes.Del)&&i.v==="__debug__")throw new Sk.builtin.SyntaxError("can not assign to __debug__",this.filename,this.u.lineno);if(Sk.asserts.assert(i.v!=="None"),i.v==="NotImplemented")return"Sk.builtin.NotImplemented.NotImplemented$";var s=r(this.u.private_,i).v;s=t(s);var a=3,$=this.u.ste.getScope(s),y=null;switch($){case Sk.SYMTAB_CONSTS.FREE:y="$free",a=2;break;case Sk.SYMTAB_CONSTS.CELL:y="$cell",a=2;break;case Sk.SYMTAB_CONSTS.LOCAL:this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock||this.u.ste.generator||(a=0);break;case Sk.SYMTAB_CONSTS.GLOBAL_IMPLICIT:this.u.ste.blockType===Sk.SYMTAB_CONSTS.FunctionBlock&&(a=1);break;case Sk.SYMTAB_CONSTS.GLOBAL_EXPLICIT:a=1}switch(Sk.asserts.assert($||i.v.charAt(1)==="_"),i=s,this.u.ste.generator||this.u.ste.blockType!==Sk.SYMTAB_CONSTS.FunctionBlock?s="$loc."+s:(a===0||a===3)&&this.u.localnames.push(s),a){case 0:switch(o){case Sk.astnodes.Load:case Sk.astnodes.Param:return c("if (",s," === undefined) { throw new Sk.builtin.UnboundLocalError('local variable \\'",s,`\\' referenced before assignment'); }
`),s;case Sk.astnodes.Store:c(s,"=",p,";");break;case Sk.astnodes.Del:c("delete ",s,";");break;default:Sk.asserts.fail("unhandled")}break;case 3:switch(o){case Sk.astnodes.Load:return this._gr("loadname",s,"!==undefined?",s,":Sk.misceval.loadname('",i,"',$gbl);");case Sk.astnodes.Store:c(s,"=",p,";");break;case Sk.astnodes.Del:c("delete ",s,";");break;case Sk.astnodes.Param:return s;default:Sk.asserts.fail("unhandled")}break;case 1:switch(o){case Sk.astnodes.Load:return this._gr("loadgbl","Sk.misceval.loadname('",i,"',$gbl)");case Sk.astnodes.Store:c("$gbl.",i,"=",p,";");break;case Sk.astnodes.Del:c("delete $gbl.",i);break;default:Sk.asserts.fail("unhandled case in name op_global")}break;case 2:switch(o){case Sk.astnodes.Load:return y+"."+i;case Sk.astnodes.Store:c(y,".",i,"=",p,";");break;case Sk.astnodes.Param:return i;default:Sk.asserts.fail("unhandled case in name op_deref")}break;default:Sk.asserts.fail("unhandled case")}},e.prototype.enterScope=function(i,o,p,s){var a=new n;return a.ste=this.st.getStsForAst(o),a.name=i,a.firstlineno=p,a.canSuspend=s||!1,this.u&&this.u.private_&&(a.private_=this.u.private_),this.stack.push(this.u),this.allUnits.push(a),i=this.gensym("scope"),a.scopename=i,this.u=a,this.u.activateScope(),this.nestlevel++,i},e.prototype.exitScope=function(){var i=this.u;if(this.nestlevel--,(this.u=0<=this.stack.length-1?this.stack.pop():null)&&this.u.activateScope(),i.name.v!=="<module>"){var o=i.name.$r().v;o=o.substring(1,o.length-1),c(i.scopename,".co_name=new Sk.builtins['str']('",o,"');"),this.stack.length&&this.u.ste.blockType=="class"&&c(i.scopename,".co_qualname=new Sk.builtins['str']('"+this.u.name.v+"."+o+"');")}for(var p in i.consts)i.consts.hasOwnProperty(p)&&(i.suffixCode+=p+" = "+i.consts[p]+";")},e.prototype.cbody=function(i,o){var p=0;const s=this.maybeCDocstringOfBody(i);for(s!==null&&(c("$loc.__doc__ = ",s,";"),p=1);p<i.length;++p)this.vstmt(i[p],o)},e.prototype.cprint=function(i){var o;Sk.asserts.assert(i instanceof Sk.astnodes.Print),i.dest&&this.vexpr(i.dest);var p=i.values.length;for(o=0;o<p;++o)c("$ret = Sk.misceval.print_(","new Sk.builtins['str'](",this.vexpr(i.values[o]),").v);"),this._checkSuspension(i);i.nl&&(c("$ret = Sk.misceval.print_(",'"\\n");'),this._checkSuspension(i))},e.prototype.cmod=function(i){var o=this.enterScope(new Sk.builtin.str("<module>"),i,0,this.canSuspend),p=this.newBlock("module entry");switch(this.u.prefixCode="var "+o+"=(function($forcegbl){",this.u.varDeclsCode="var $gbl = $forcegbl || {}, $blk="+p+",$exc=[],$loc=$gbl,$cell={},$err=undefined;$loc.__file__=new Sk.builtins.str('"+this.filename+"');var $ret=undefined,$postfinally=undefined,$currLineNo=undefined,$currColNo=undefined;",Sk.execLimit!==null&&(this.u.varDeclsCode+="if (typeof Sk.execStart === 'undefined') {Sk.execStart = Date.now()}"),Sk.yieldLimit!==null&&this.u.canSuspend&&(this.u.varDeclsCode+="if (typeof Sk.lastYield === 'undefined') {Sk.lastYield = Date.now()}"),this.u.varDeclsCode+="if ("+o+".$wakingSuspension!==undefined) { $wakeFromSuspension(); }if (Sk.retainGlobals) {    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; }    if (Sk.globals) { $gbl = Sk.globals; Sk.globals = $gbl; $loc = $gbl; $loc.__file__=new Sk.builtins.str('"+this.filename+"');}    else { Sk.globals = $gbl; }} else { Sk.globals = $gbl; }",this.u.switchCode="while(true){try{",this.u.switchCode+=this.outputInterruptTest(),this.u.switchCode+="switch($blk){",this.u.suffixCode="}",this.u.suffixCode+="}catch(err){ if (!(err instanceof Sk.builtin.BaseException)) { err = new Sk.builtin.ExternalError(err); } err.traceback.push({lineno: $currLineNo, colno: $currColNo, filename: '"+this.filename+"'}); if ($exc.length>0) { $err = err; $blk=$exc.pop(); continue; } else { throw err; }} } });",i.constructor){case Sk.astnodes.Module:this.cbody(i.body),c("return $loc;");break;default:Sk.asserts.fail("todo; unhandled case in compilerMod")}return this.exitScope(),this.result.push(this.outputAllUnits()),o},Sk.compile=function(i,o,p,s){p=Sk.__future__,Sk.__future__=Object.create(Sk.__future__);var a=Sk.parse(o,i),$=Sk.astFromParse(a.cst,o,a.flags);a=a.flags;var y=Sk.symboltable($,o);return i=new e(o,y,a,s,i),o=i.cmod($),Sk.__future__=p,{funcname:"$compiledmod",code:"$compiledmod = function() {"+i.result.join("")+`
return `+o+";}();"}},Sk.exportSymbol("Sk.compile",Sk.compile),Sk.resetCompiler=function(){Sk.gensymcount=0},Sk.exportSymbol("Sk.resetCompiler",Sk.resetCompiler),Sk.fixReserved=t,Sk.exportSymbol("Sk.fixReserved",Sk.fixReserved),Sk.unfixReserved=function(i){return i.replace(/_\$rw\$$/,"")},Sk.exportSymbol("Sk.unfixReserved",Sk.unfixReserved),Sk.mangleName=r,Sk.exportSymbol("Sk.mangleName",Sk.mangleName),Sk.reservedWords_=u,Sk.exportSymbol("Sk.reservedWords_",Sk.reservedWords_)},function(j,F){Sk.sysmodules=new Sk.builtin.dict([]),Sk.realsyspath=void 0,Sk.importSearchPathForName=function(e,n,t){var r=e.replace(/\./g,"/"),l=function(c,u){return Sk.misceval.chain(Sk.misceval.tryCatch(function(){return Sk.read(c)},function(i){}),function(i){if(i!==void 0)return new Sk.misceval.Break({filename:c,code:i,packagePath:u})})};return t===void 0&&(t=Sk.realsyspath),Sk.misceval.iterFor(t.tp$iter(),function(c){return Sk.misceval.chain(l(c.v+"/"+r+n,!1),function(u){return u||l(c.v+"/"+r+"/__init__"+n,c.v+"/"+r)})})},Sk.importSetUpPath=function(e){if(!Sk.realsyspath){var n=[new Sk.builtin.str("src/builtin"),new Sk.builtin.str("src/lib"),new Sk.builtin.str(".")];for(e=0;e<Sk.syspath.length;++e)n.push(new Sk.builtin.str(Sk.syspath[e]));Sk.realsyspath=new Sk.builtin.list(n)}},Sk.importModuleInternal_=function(e,n,t,r,l,c,u){var i,o,p,s,a=null,$=l!==void 0?l.tp$getattr(Sk.builtin.str.$name):void 0,y=$!==void 0?$.v+".":"",w=l!==void 0?l.tp$getattr(Sk.builtin.str.$path):void 0;if(Sk.importSetUpPath(u),l&&!$){if(c)return;throw new Sk.builtin.ValueError("Attempted to import relative to invalid package (no name)")}t===void 0&&(t=y+e);var m=e.split(".");if(1<m.length){var h=m.slice(0,m.length-1).join(".");a=Sk.importModuleInternal_(h,n,void 0,void 0,l,c,u)}var v=Sk.misceval.chain(a,function(k){return a=k,o=Sk.sysmodules.quick$lookup(new Sk.builtin.str(t)),o!==void 0?a||o:Sk.misceval.chain(void 0,function(){var A=e;if(1<m.length){if(!a)return;p=Sk.sysmodules.mp$subscript(new Sk.builtin.str(y+h)),A=m[m.length-1],w=p.tp$getattr(Sk.builtin.str.$path)}if(s=new Sk.builtin.module,typeof r=="string"){i=e+".py";var M=Sk.compile(r,i,"exec",u)}else M=Sk.misceval.chain(void 0,function(){if(Sk.onBeforeImport&&typeof Sk.onBeforeImport=="function")return Sk.onBeforeImport(e)},function(D){if(D===!1)throw new Sk.builtin.ImportError("Importing "+e+" is not allowed");if(typeof D=="string")throw new Sk.builtin.ImportError(D);return Sk.importSearchPathForName(A,".js",w)},function(D){return D?{funcname:"$builtinmodule",code:D.code,filename:D.filename,packagePath:D.packagePath}:Sk.misceval.chain(Sk.importSearchPathForName(A,".py",w),function(f){if(D=f)return Sk.compile(D.code,D.filename,"exec",u)},function(f){if(f)return f.packagePath=D.packagePath,f})});return M},function(A){if(A){Sk.sysmodules.mp$ass_subscript(new Sk.builtin.str(t),s);var M=s.$js=A.code;if(i==null&&(i=A.filename),Sk.dateSet!=null&&Sk.dateSet||(M=`Sk.execStart = Sk.lastYield = new Date();
`+A.code,Sk.dateSet=!0),n){var D=function(f){var b,d=Sk.js_beautify(f).split(`
`);for(b=1;b<=d.length;++b){var S=(""+b).length;for(f="";5>S;++S)f+=" ";d[b-1]="/* "+f+b+" */ "+d[b-1]}return d.join(`
`)};M=D(M),Sk.debugout(M)}return M+=`
`+A.funcname+";",M=Sk.global.eval(M),s.$d={__name__:new Sk.builtin.str(t),__doc__:Sk.builtin.none.none$,__package__:A.packagePath?new Sk.builtin.str(t):h?new Sk.builtin.str(y+h):$||Sk.builtin.none.none$},A.packagePath&&(s.$d.__path__=new Sk.builtin.tuple([new Sk.builtin.str(A.packagePath)])),M(s.$d)}},function(A){var M;if(A===void 0){if(c&&!a)return;throw new Sk.builtin.ImportError("No module named "+e)}if(A!==s.$d){for(M in s.$d)A[M]||(A[M]=s.$d[M]);s.$d=A}if(Sk.onAfterImport&&typeof Sk.onAfterImport=="function")try{Sk.onAfterImport(e)}catch(D){}return a?(p.tp$setattr(new Sk.builtin.str(m[m.length-1]),s),a):(l&&l.tp$setattr(new Sk.builtin.str(e),s),s)})});return u?v:Sk.misceval.retryOptionalSuspensionOrThrow(v)},Sk.importModule=function(e,n,t){return Sk.importModuleInternal_(e,n,void 0,void 0,void 0,!1,t)},Sk.importMain=function(e,n,t){return Sk.dateSet=!1,Sk.filesLoaded=!1,Sk.sysmodules=new Sk.builtin.dict([]),Sk.realsyspath=void 0,Sk.resetCompiler(),Sk.importModuleInternal_(e,n,"__main__",void 0,void 0,!1,t)},Sk.importMainWithBody=function(e,n,t,r){return Sk.dateSet=!1,Sk.filesLoaded=!1,Sk.sysmodules=new Sk.builtin.dict([]),Sk.realsyspath=void 0,Sk.resetCompiler(),Sk.importModuleInternal_(e,n,"__main__",t,void 0,!1,r)},Sk.importBuiltinWithBody=function(e,n,t,r){return Sk.importModuleInternal_(e,n,"__builtin__."+e,t,void 0,!1,r)},Sk.builtin.__import__=function(e,n,t,r,l){var c=Sk.globals,u;if(l===void 0&&(l=Sk.__future__.absolute_import?0:-1),l!==0&&n.__package__&&n.__package__!==Sk.builtin.none.none$){if((u=n.__package__.v)&&0<l){if(n=u.split("."),l-1>=n.length)throw new Sk.builtin.ValueError("Attempted relative import beyond toplevel package");n.length-=l-1,u=n.join(".")}var i=Sk.sysmodules.quick$lookup(new Sk.builtin.str(u))}if(0<l&&i===void 0)throw new Sk.builtin.ValueError("Attempted relative import in non-package");return e.split("."),Sk.misceval.chain(void 0,function(){if(l!==0&&i!==void 0)return e===""?i:Sk.importModuleInternal_(e,void 0,u+"."+e,void 0,i,l==-1,!0)},function(o){return o===void 0?(u=i=void 0,Sk.importModuleInternal_(e,void 0,void 0,void 0,void 0,!1,!0)):o},function(o){if(r&&r.length!==0){var p,s=Sk.sysmodules.mp$subscript(new Sk.builtin.str((u||"")+(u&&e?".":"")+e));for(o=0;o<r.length;o++){var a=r[o];a!="*"&&s.tp$getattr(new Sk.builtin.str(a))===void 0&&(p=Sk.misceval.chain(p,Sk.importModuleInternal_.bind(null,a,void 0,void 0,void 0,s,!0,!0)))}return Sk.misceval.chain(p,function(){return Sk.asserts.assert(s),s})}return o},function(o){return c!==Sk.globals&&(Sk.globals=c),o})},Sk.importStar=function(e,n,t){if(t=e.tp$getattr(new Sk.builtin.str("__all__")))for(let r=Sk.abstr.iter(t),l=r.tp$iternext();l!==void 0;l=r.tp$iternext())n[l.v]=Sk.abstr.gattr(e,l);else{t=Object.getOwnPropertyNames(e.$d);for(let r in t)t[r].charAt(0)!="_"&&(n[t[r]]=e.$d[t[r]])}},Sk.exportSymbol("Sk.importMain",Sk.importMain),Sk.exportSymbol("Sk.importMainWithBody",Sk.importMainWithBody),Sk.exportSymbol("Sk.importBuiltinWithBody",Sk.importBuiltinWithBody),Sk.exportSymbol("Sk.builtin.__import__",Sk.builtin.__import__),Sk.exportSymbol("Sk.importStar",Sk.importStar)},function(j,F){Sk.builtin.timSort=function(e,n){this.list=new Sk.builtin.list(e.v),this.MIN_GALLOP=7,this.listlength=n||e.sq$length()},Sk.builtin.timSort.prototype.lt=function(e,n){return Sk.misceval.richCompareBool(e,n,"Lt")},Sk.builtin.timSort.prototype.le=function(e,n){return!this.lt(n,e)},Sk.builtin.timSort.prototype.setitem=function(e,n){this.list.v[e]=n},Sk.builtin.timSort.prototype.binary_sort=function(e,n){var t;for(t=e.base+n;t<e.base+e.len;t++){var r=e.base,l=t;for(n=e.getitem(l);r<l;){var c=r+(l-r>>1);this.lt(n,e.getitem(c))?l=c:r=c+1}for(Sk.asserts.assert(r===l),c=t;c>r;c--)e.setitem(c,e.getitem(c-1));e.setitem(r,n)}},Sk.builtin.timSort.prototype.count_run=function(e){var n;if(1>=e.len)var t=e.len,r=!1;else if(t=2,this.lt(e.getitem(e.base+1),e.getitem(e.base)))for(r=!0,n=e.base+2;n<e.base+e.len&&this.lt(e.getitem(n),e.getitem(n-1));n++)t++;else for(r=!1,n=e.base+2;n<e.base+e.len&&!this.lt(e.getitem(n),e.getitem(n-1));n++)t++;return{run:new Sk.builtin.listSlice(e.list,e.base,t),descending:r}},Sk.builtin.timSort.prototype.sort=function(){var e,n=new Sk.builtin.listSlice(this.list,0,this.listlength);if(!(2>n.len)){for(this.merge_init(),e=this.merge_compute_minrun(n.len);0<n.len;){var t=this.count_run(n);if(t.descending&&t.run.reverse(),t.run.len<e){var r=t.run.len;t.run.len=e<n.len?e:n.len,this.binary_sort(t.run,r)}n.advance(t.run.len),this.pending.push(t.run),this.merge_collapse()}Sk.asserts.assert(n.base==this.listlength),this.merge_force_collapse(),Sk.asserts.assert(this.pending.length==1),Sk.asserts.assert(this.pending[0].base===0),Sk.asserts.assert(this.pending[0].len==this.listlength)}},Sk.builtin.timSort.prototype.gallop=function(e,n,t,r){var l;Sk.asserts.assert(0<=t&&t<n.len);var c=this;r=r?function(p,s){return c.le(p,s)}:function(p,s){return c.lt(p,s)};var u=n.base+t,i=0,o=1;if(r(n.getitem(u),e)){for(l=n.len-t;o<l&&r(n.getitem(u+o),e);){i=o;try{o=(o<<1)+1}catch(p){o=l}}o>l&&(o=l),i+=t,o+=t}else{for(l=t+1;o<l&&!r(n.getitem(u-o),e);){i=o;try{o=(o<<1)+1}catch(p){o=l}}o>l&&(o=l),u=t-i,i=t-o,o=u}for(Sk.asserts.assert(-1<=i<o<=n.len),i+=1;i<o;)t=i+(o-i>>1),r(n.getitem(n.base+t),e)?i=t+1:o=t;return Sk.asserts.assert(i==o),o},Sk.builtin.timSort.prototype.merge_init=function(){this.min_gallop=this.MIN_GALLOP,this.pending=[]},Sk.builtin.timSort.prototype.merge_lo=function(e,n){var t,r,l;Sk.asserts.assert(0<e.len&&0<n.len&&e.base+e.len==n.base);var c=this.min_gallop,u=e.base;e=e.copyitems();try{if(this.setitem(u,n.popleft()),u++,e.len!=1&&n.len!==0)for(;;){for(r=t=0;;)if(this.lt(n.getitem(n.base),e.getitem(e.base))){if(this.setitem(u,n.popleft()),u++,n.len===0)return;if(r++,t=0,r>=c)break}else{if(this.setitem(u,e.popleft()),u++,e.len==1)return;if(t++,r=0,t>=c)break}for(c+=1;;){for(this.min_gallop=c-=1<c,t=this.gallop(n.getitem(n.base),e,0,!0),l=e.base;l<e.base+t;l++)this.setitem(u,e.getitem(l)),u++;if(e.advance(t),1>=e.len||(this.setitem(u,n.popleft()),u++,n.len===0))return;for(r=this.gallop(e.getitem(e.base),n,0,!1),l=n.base;l<n.base+r;l++)this.setitem(u,n.getitem(l)),u++;if(n.advance(r),n.len===0||(this.setitem(u,e.popleft()),u++,e.len==1))return;if(t<this.MIN_GALLOP&&r<this.MIN_GALLOP)break;c++,this.min_gallop=c}}}finally{for(Sk.asserts.assert(0<=e.len&&0<=n.len),l=n.base;l<n.base+n.len;l++)this.setitem(u,n.getitem(l)),u++;for(l=e.base;l<e.base+e.len;l++)this.setitem(u,e.getitem(l)),u++}},Sk.builtin.timSort.prototype.merge_hi=function(e,n){var t,r,l;Sk.asserts.assert(0<e.len&&0<n.len&&e.base+e.len==n.base);var c=this.min_gallop,u=n.base+n.len;n=n.copyitems();try{if(u--,this.setitem(u,e.popright()),e.len!==0&&n.len!=1)for(;;){for(r=t=0;;){var i=e.getitem(e.base+e.len-1),o=n.getitem(n.base+n.len-1);if(this.lt(o,i)){if(u--,this.setitem(u,i),e.len--,e.len===0)return;if(t++,r=0,t>=c)break}else{if(u--,this.setitem(u,o),n.len--,n.len==1)return;if(r++,t=0,r>=c)break}}for(c+=1;;){this.min_gallop=c-=1<c,o=n.getitem(n.base+n.len-1);var p=this.gallop(o,e,e.len-1,!0);for(t=e.len-p,l=e.base+e.len-1;l>e.base+p-1;l--)u--,this.setitem(u,e.getitem(l));if(e.len-=t,e.len===0||(u--,this.setitem(u,n.popright()),n.len==1))return;for(i=e.getitem(e.base+e.len-1),p=this.gallop(i,n,n.len-1,!1),r=n.len-p,l=n.base+n.len-1;l>n.base+p-1;l--)u--,this.setitem(u,n.getitem(l));if(n.len-=r,1>=n.len||(u--,this.setitem(u,e.popright()),e.len===0))return;if(t<this.MIN_GALLOP&&r<this.MIN_GALLOP)break;c++,this.min_gallop=c}}}finally{for(Sk.asserts.assert(0<=e.len&&0<=n.len),l=e.base+e.len-1;l>e.base-1;l--)u--,this.setitem(u,e.getitem(l));for(l=n.base+n.len-1;l>n.base-1;l--)u--,this.setitem(u,n.getitem(l))}},Sk.builtin.timSort.prototype.merge_at=function(e){0>e&&(e=this.pending.length+e);var n=this.pending[e],t=this.pending[e+1];Sk.asserts.assert(0<n.len&&0<t.len),Sk.asserts.assert(n.base+n.len==t.base),this.pending[e]=new Sk.builtin.listSlice(this.list,n.base,n.len+t.len),this.pending.splice(e+1,1),e=this.gallop(t.getitem(t.base),n,0,!0),n.advance(e),n.len!==0&&(t.len=this.gallop(n.getitem(n.base+n.len-1),t,t.len-1,!1),t.len!==0&&(n.len<=t.len?this.merge_lo(n,t):this.merge_hi(n,t)))},Sk.builtin.timSort.prototype.merge_collapse=function(){for(var e=this.pending;1<e.length;)if(3<=e.length&&e[e.length-3].len<=e[e.length-2].len+e[e.length-1].len)e[e.length-3].len<e[e.length-1].len?this.merge_at(-3):this.merge_at(-2);else if(e[e.length-2].len<=e[e.length-1].len)this.merge_at(-2);else break},Sk.builtin.timSort.prototype.merge_force_collapse=function(){for(var e=this.pending;1<e.length;)3<=e.length&&e[e.length-3].len<e[e.length-1].len?this.merge_at(-3):this.merge_at(-2)},Sk.builtin.timSort.prototype.merge_compute_minrun=function(e){for(var n=0;64<=e;)n|=e&1,e>>=1;return e+n},Sk.builtin.listSlice=function(e,n,t){this.list=e,this.base=n,this.len=t},Sk.builtin.listSlice.prototype.copyitems=function(){var e=this.base,n=this.base+this.len;return Sk.asserts.assert(0<=e<=n),new Sk.builtin.listSlice(new Sk.builtin.list(this.list.v.slice(e,n)),0,this.len)},Sk.builtin.listSlice.prototype.advance=function(e){this.base+=e,this.len-=e,Sk.asserts.assert(this.base<=this.list.sq$length())},Sk.builtin.listSlice.prototype.getitem=function(e){return this.list.v[e]},Sk.builtin.listSlice.prototype.setitem=function(e,n){this.list.v[e]=n},Sk.builtin.listSlice.prototype.popleft=function(){var e=this.list.v[this.base];return this.base++,this.len--,e},Sk.builtin.listSlice.prototype.popright=function(){return this.len--,this.list.v[this.base+this.len]},Sk.builtin.listSlice.prototype.reverse=function(){for(var e,n,t=this.list,r=this.base,l=r+this.len-1;r<l;)e=t.v[l],n=t.v[r],t.v[r]=e,t.v[l]=n,r++,l--},Sk.exportSymbol("Sk.builtin.listSlice",Sk.builtin.listSlice),Sk.exportSymbol("Sk.builtin.timSort",Sk.builtin.timSort)},function(j,F){Sk.builtin.super_=Sk.abstr.buildNativeClass("super",{constructor:function(e,n){if(Sk.asserts.assert(this instanceof Sk.builtin.super_,"bad call to super, use 'new'"),this.type=e,this.obj=n,e!==void 0&&!Sk.builtin.checkClass(e))throw new Sk.builtin.TypeError("must be type, not "+Sk.abstr.typeName(e));this.obj_type=this.obj!==void 0?this.$supercheck(e,this.obj):null},slots:{tp$doc:`super() -> same as super(__class__, <first argument>)
super(type) -> unbound super object
super(type, obj) -> bound super object; requires isinstance(obj, type)
super(type, type2) -> bound super object; requires issubclass(type2, type)
Typical use to call a cooperative superclass method:
class C(B):
    def meth(self, arg):
        super().meth(arg)
This works for class methods too:
class C(B):
    @classmethod
    def cmeth(cls, arg):
        super().cmeth(arg)
`,tp$new:Sk.generic.new,tp$init(e,n){if(Sk.abstr.checkNoKwargs("super",n),Sk.abstr.checkArgsLen("super",e,1,2),n=e[0],e=e[1],!Sk.builtin.checkClass(n))throw new Sk.builtin.TypeError("must be type, not "+Sk.abstr.typeName(n));this.obj=e,this.type=n,this.obj!=null&&(this.obj_type=this.$supercheck(n,this.obj))},$r(){return this.obj?new Sk.builtin.str("<super: <class '"+this.type.prototype.tp$name+"'>, <"+Sk.abstr.typeName(this.obj)+" object>>"):new Sk.builtin.str("<super: <class '"+this.type.prototype.tp$name+"'>, NULL>")},tp$getattr(e,n){let t=this.obj_type;if(t==null)return Sk.generic.getAttr.call(this,e,n);var r=t.prototype.tp$mro;const l=r.length;if(e===Sk.builtin.str.$class)return Sk.generic.getAttr.call(this,e,n);let c;for(c=0;c+1<l&&this.type!==r[c];c++);if(c++,c>=l)return Sk.generic.getAttr.call(this,e,n);e=e.$mangled;let u;for(;c<l;){if(n=r[c].prototype,n.hasOwnProperty(e)&&(u=n[e]),u!==void 0)return r=u.tp$descr_get,r!==void 0&&(u=r.call(u,this.obj===t?null:this.obj,t)),u;c++}},tp$descr_get(e,n){if(e===null||this.obj!=null)return this;if(this.ob$type!==Sk.builtin.super_)return Sk.misceval.callsimOrSuspendArray(this.ob$type,[this.type,e]);{n=this.$supercheck(this.type,e);const t=new Sk.builtin.super_;return t.type=this.type,t.obj=e,t.obj_type=n,t}}},getsets:{__thisclass__:{$get(){return this.type},$doc:"the class invoking super()"},__self__:{$get(){return this.obj||Sk.builtin.none.none$},$doc:"the instance invoking super(); may be None"},__self_class__:{$get(){return this.obj_type||Sk.builtin.none.none$},$doc:"the type of the instance invoking super(); may be None"}},proto:{$supercheck(e,n){if(Sk.builtin.checkClass(n)&&n.$isSubType(e))return n;if(n.ob$type.$isSubType(e))return n.ob$type;{const t=n.tp$getattr(Sk.builtin.str.$class);if(t!==void 0&&t!==n.ob$type&&Sk.builtin.checkClass(t)&&t.$isSubType(e))return t}throw new Sk.builtin.TypeError("super(type, obj): obj must be an instance or subtype of type")}}})},function(j,F){Sk.builtins={round:null,len:null,min:null,max:null,sum:null,abs:null,fabs:null,ord:null,chr:null,hex:null,oct:null,bin:null,dir:null,repr:null,open:null,isinstance:null,hash:null,getattr:null,hasattr:null,id:null,reduce:new Sk.builtin.func(Sk.builtin.reduce),sorted:null,any:null,all:null,enumerate:Sk.builtin.enumerate,filter:Sk.builtin.filter_,map:Sk.builtin.map_,range:Sk.builtin.range_,reversed:Sk.builtin.reversed,zip:Sk.builtin.zip_,BaseException:Sk.builtin.BaseException,AttributeError:Sk.builtin.AttributeError,ValueError:Sk.builtin.ValueError,Exception:Sk.builtin.Exception,ZeroDivisionError:Sk.builtin.ZeroDivisionError,AssertionError:Sk.builtin.AssertionError,ImportError:Sk.builtin.ImportError,IndentationError:Sk.builtin.IndentationError,IndexError:Sk.builtin.IndexError,LookupError:Sk.builtin.LookupError,KeyError:Sk.builtin.KeyError,TypeError:Sk.builtin.TypeError,UnicodeDecodeError:Sk.builtin.UnicodeDecodeError,UnicodeEncodeError:Sk.builtin.UnicodeEncodeError,NameError:Sk.builtin.NameError,IOError:Sk.builtin.IOError,NotImplementedError:Sk.builtin.NotImplementedError,SystemExit:Sk.builtin.SystemExit,OverflowError:Sk.builtin.OverflowError,OperationError:Sk.builtin.OperationError,NegativePowerError:Sk.builtin.NegativePowerError,RuntimeError:Sk.builtin.RuntimeError,RecursionError:Sk.builtin.RecursionError,StopIteration:Sk.builtin.StopIteration,SyntaxError:Sk.builtin.SyntaxError,SystemError:Sk.builtin.SystemError,float_$rw$:Sk.builtin.float_,int_$rw$:Sk.builtin.int_,bool:Sk.builtin.bool,complex:Sk.builtin.complex,dict:Sk.builtin.dict,file:Sk.builtin.file,frozenset:Sk.builtin.frozenset,function:Sk.builtin.func,generator:Sk.builtin.generator,list:Sk.builtin.list,long_$rw$:Sk.builtin.lng,method:Sk.builtin.method,object:Sk.builtin.object,slice:Sk.builtin.slice,str:Sk.builtin.str,set:Sk.builtin.set,tuple:Sk.builtin.tuple,type:Sk.builtin.type,input:null,raw_input:new Sk.builtin.func(Sk.builtin.raw_input),setattr:null,jseval:Sk.builtin.jseval,jsmillis:Sk.builtin.jsmillis,quit:new Sk.builtin.func(Sk.builtin.quit),exit:new Sk.builtin.func(Sk.builtin.quit),print:null,divmod:null,format:null,globals:null,issubclass:null,iter:null,execfile:Sk.builtin.execfile,help:Sk.builtin.help,memoryview:Sk.builtin.memoryview,reload:Sk.builtin.reload,super_$rw$:Sk.builtin.super_,unichr:Sk.builtin.unichr,vars:Sk.builtin.vars,apply_$rw$:Sk.builtin.apply_,buffer:Sk.builtin.buffer,coerce:Sk.builtin.coerce,intern:Sk.builtin.intern,property:Sk.builtin.property,classmethod:Sk.builtin.classmethod,staticmethod:Sk.builtin.staticmethod},Sk.abstr.setUpModuleMethods("builtins",Sk.builtins,{__import__:{$meth:Sk.builtin.__import__,$flags:{NamedArgs:["name","globals","locals","fromlist","level"]},$textsig:null,$doc:`__import__(name, globals=None, locals=None, fromlist=(), level=0) -> module

Import a module. Because this function is meant for use by the Python
interpreter and not for general use, it is better to use
importlib.import_module() to programmatically import a module.

The globals argument is only used to determine the context;
they are not modified.  The locals argument is unused.  The fromlist
should be a list of names to emulate \`\`from name import ...'', or an
empty list to emulate \`\`import name''.
When importing a module from a package, note that __import__('A.B', ...)
returns package A when fromlist is empty, but its submodule B when
fromlist is not empty.  The level argument is used to determine whether to
perform absolute or relative imports: 0 is absolute, while a positive number
is the number of parent directories to search relative to the current module.`},abs:{$meth:Sk.builtin.abs,$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the absolute value of the argument."},all:{$meth:Sk.builtin.all,$flags:{OneArg:!0},$textsig:"($module, iterable, /)",$doc:`Return True if bool(x) is True for all values x in the iterable.

If the iterable is empty, return True.`},any:{$meth:Sk.builtin.any,$flags:{OneArg:!0},$textsig:"($module, iterable, /)",$doc:`Return True if bool(x) is True for any x in the iterable.

If the iterable is empty, return False.`},ascii:{$meth:Sk.builtin.ascii,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:`Return an ASCII-only representation of an object.

As repr(), return a string containing a printable representation of an
object, but escape the non-ASCII characters in the string returned by
repr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar
to that returned by repr() in Python 2.`},bin:{$meth:Sk.builtin.bin,$flags:{OneArg:!0},$textsig:"($module, number, /)",$doc:`Return the binary representation of an integer.

   >>> bin(2796202)
   '0b1010101010101010101010'`},callable:{$meth:Sk.builtin.callable,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:`Return whether the object is callable (i.e., some kind of function).

Note that classes are callable, as are instances of classes with a
__call__() method.`},chr:{$meth:Sk.builtin.chr,$flags:{OneArg:!0},$textsig:"($module, i, /)",$doc:"Return a Unicode string of one character with ordinal i; 0 <= i <= 0x10ffff."},delattr:{$meth:Sk.builtin.delattr,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, obj, name, /)",$doc:"Deletes the named attribute from the given object.\n\ndelattr(x, 'y') is equivalent to ``del x.y''"},dir:{$meth:Sk.builtin.dir,$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:`dir([object]) -> list of strings

If called without an argument, return the names in the current scope.
Else, return an alphabetized list of names comprising (some of) the attributes
of the given object, and of attributes reachable from it.
If the object supplies a method named __dir__, it will be used; otherwise
the default dir() logic is used and returns:
  for a module object: the module's attributes.
  for a class object:  its attributes, and recursively the attributes
    of its bases.
  for any other object: its attributes, its class's attributes, and
    recursively the attributes of its class's base classes.`},divmod:{$meth:Sk.builtin.divmod,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return the tuple (x//y, x%y).  Invariant: div*y + mod == x."},eval_$rw$:{$name:"eval",$meth:Sk.builtin.eval_,$flags:{MinArgs:1,MaxArgs:3},$textsig:"($module, source, globals=None, locals=None, /)",$doc:`Evaluate the given source in the context of globals and locals.

The source may be a string representing a Python expression
or a code object as returned by compile().
The globals must be a dictionary and locals can be any mapping,
defaulting to the current globals and locals.
If only globals is given, locals defaults to it.`},format:{$meth:Sk.builtin.format,$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, value, format_spec='', /)",$doc:`Return value.__format__(format_spec)

format_spec defaults to the empty string.
See the Format Specification Mini-Language section of help('FORMATTING') for
details.`},getattr:{$meth:Sk.builtin.getattr,$flags:{MinArgs:2,MaxArgs:3},$textsig:null,$doc:`getattr(object, name[, default]) -> value

Get a named attribute from an object; getattr(x, 'y') is equivalent to x.y.
When a default argument is given, it is returned when the attribute doesn't
exist; without it, an exception is raised in that case.`},globals:{$meth:Sk.builtin.globals,$flags:{NoArgs:!0},$textsig:"($module, /)",$doc:`Return the dictionary containing the current scope's global variables.

NOTE: Updates to this dictionary *will* affect name lookups in the current
global scope and vice-versa.`},hasattr:{$meth:Sk.builtin.hasattr,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, obj, name, /)",$doc:`Return whether the object has an attribute with the given name.

This is done by calling getattr(obj, name) and catching AttributeError.`},hash:{$meth:Sk.builtin.hash,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:`Return the hash value for the given object.

Two objects that compare equal must also have the same hash value, but the
reverse is not necessarily true.`},hex:{$meth:Sk.builtin.hex,$flags:{OneArg:!0},$textsig:"($module, number, /)",$doc:`Return the hexadecimal representation of an integer.

   >>> hex(12648430)
   '0xc0ffee'`},id:{$meth:Sk.builtin.id,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:`Return the identity of an object.

This is guaranteed to be unique among simultaneously existing objects.
(CPython uses the object's memory address.)`},input:{$meth:Sk.builtin.input,$flags:{MinArgs:0,MaxArgs:1},$textsig:"($module, prompt=None, /)",$doc:`Read a string from standard input.  The trailing newline is stripped.

The prompt string, if given, is printed to standard output without a
trailing newline before reading input.

If the user hits EOF (*nix: Ctrl-D, Windows: Ctrl-Z+Return), raise EOFError.
On *nix systems, readline is used if available.`},isinstance:{$meth:Sk.builtin.isinstance,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, obj, class_or_tuple, /)",$doc:"Return whether an object is an instance of a class or of a subclass thereof.\n\nA tuple, as in ``isinstance(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``isinstance(x, A) or isinstance(x, B)\nor ...`` etc."},issubclass:{$meth:Sk.builtin.issubclass,$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, cls, class_or_tuple, /)",$doc:"Return whether 'cls' is a derived from another class or is the same class.\n\nA tuple, as in ``issubclass(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``issubclass(x, A) or issubclass(x, B)\nor ...`` etc."},iter:{$meth:Sk.builtin.iter,$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, iterable /)",$doc:`iter(iterable) -> iterator
iter(callable, sentinel) -> iterator

Get an iterator from an object.  In the first form, the argument must
supply its own iterator, or be a sequence.
In the second form, the callable is called until it returns the sentinel.`},len:{$meth:Sk.builtin.len,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:"Return the number of items in a container."},locals:{$meth:Sk.builtin.locals,$flags:{NoArgs:!0},$textsig:"($module, /)",$doc:`Return a dictionary containing the current scope's local variables.

NOTE: Whether or not updates to this dictionary will affect name lookups in
the local scope and vice-versa is *implementation dependent* and not
covered by any backwards compatibility guarantees.`},max:{$meth:Sk.builtin.max,$flags:{FastCall:!0},$textsig:null,$doc:`max(iterable, *[, default=obj, key=func]) -> value
max(arg1, arg2, *args, *[, key=func]) -> value

With a single iterable argument, return its biggest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the largest argument.`},min:{$meth:Sk.builtin.min,$flags:{FastCall:!0},$textsig:null,$doc:`min(iterable, *[, default=obj, key=func]) -> value
min(arg1, arg2, *args, *[, key=func]) -> value

With a single iterable argument, return its smallest item. The
default keyword-only argument specifies an object to return if
the provided iterable is empty.
With two or more arguments, return the smallest argument.`},next:{$name:"next",$meth:Sk.builtin.next_,$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:`next(iterator[, default])

Return the next item from the iterator. If default is given and the iterator
is exhausted, it is returned instead of raising StopIteration.`},oct:{$meth:Sk.builtin.oct,$flags:{OneArg:!0},$textsig:"($module, number, /)",$doc:`Return the octal representation of an integer.

   >>> oct(342391)
   '0o1234567'`},open:{$meth:Sk.builtin.open,$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:`open(name[, mode[, buffering]]) -> file object

Open a file using the file() type, returns a file object.  This is the
preferred way to open a file.  See file.__doc__ for further information.`},ord:{$meth:Sk.builtin.ord,$flags:{OneArg:!0},$textsig:"($module, c, /)",$doc:"Return the Unicode code point for a one-character string."},pow:{$meth:Sk.builtin.pow,$flags:{MinArgs:2,MaxArgs:3},$textsig:"($module, x, y, z=None, /)",$doc:`Equivalent to x**y (with two arguments) or x**y % z (with three arguments)

Some types, such as ints, are able to use a more efficient algorithm when
invoked using the three argument form.`},print:{$meth:Sk.builtin.print,$flags:{FastCall:!0},$textsig:null,$doc:`print(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)

Prints the values to a stream, or to sys.stdout by default.
Optional keyword arguments:
file:  a file-like object (stream); defaults to the current sys.stdout.
sep:   string inserted between values, default a space.
end:   string appended after the last value, default a newline.
flush: whether to forcibly flush the stream.`},repr:{$meth:Sk.builtin.repr,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:`Return the canonical string representation of the object.

For many object types, including most builtins, eval(repr(obj)) == obj.`},round:{$meth:Sk.builtin.round,$flags:{NamedArgs:["number","ndigits"]},$textsig:"($module, /, number, ndigits=None)",$doc:`Round a number to a given precision in decimal digits.

The return value is an integer if ndigits is omitted or None.  Otherwise
the return value has the same type as the number.  ndigits may be negative.`},setattr:{$meth:Sk.builtin.setattr,$flags:{MinArgs:3,MaxArgs:3},$textsig:"($module, obj, name, value, /)",$doc:"Sets the named attribute on the given object to the specified value.\n\nsetattr(x, 'y', v) is equivalent to ``x.y = v''"},sorted:{$meth:Sk.builtin.sorted,$flags:{NamedArgs:[null,"cmp","key","reverse"],Defaults:[Sk.builtin.none.none$,Sk.builtin.none.none$,Sk.builtin.bool.false$]},$textsig:"($module, iterable, /, *, key=None, reverse=False)",$doc:`Return a new list containing all items from the iterable in ascending order.

A custom key function can be supplied to customize the sort order, and the
reverse flag can be set to request the result in descending order.`},sum:{$meth:Sk.builtin.sum,$flags:{NamedArgs:[null,"start"],Defaults:[new Sk.builtin.int_(0)]},$textsig:"($module, iterable, /, start=0)",$doc:`Return the sum of a 'start' value (default: 0) plus an iterable of numbers

When the iterable is empty, return the start value.
This function is intended specifically for use with numeric values and may
reject non-numeric types.`},vars:{$meth:Sk.builtin.vars,$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:`vars([object]) -> dictionary

Without arguments, equivalent to locals().
With an argument, equivalent to object.__dict__.`}}),Sk.setupObjects=function(e){e?(Sk.builtins.filter=Sk.builtin.filter_,Sk.builtins.map=Sk.builtin.map_,Sk.builtins.zip=Sk.builtin.zip_,Sk.builtins.range=Sk.builtin.range_,delete Sk.builtins.xrange,delete Sk.builtins.StandardError,delete Sk.builtins.unicode,delete Sk.builtins.basestring,delete Sk.builtins.long_$rw$,Sk.builtin.int_.prototype.$r=function(){return new Sk.builtin.str(this.v.toString())},delete Sk.builtin.int_.prototype.tp$str,delete Sk.builtin.bool.prototype.tp$str,delete Sk.builtins.raw_input,delete Sk.builtin.str.prototype.decode,Sk.builtins.bytes=Sk.builtin.bytes,Sk.builtins.ascii=new Sk.builtin.sk_method({$meth:Sk.builtin.ascii,$flags:{OneArg:!0},$textsig:"($module, obj, /)",$doc:`Return an ASCII-only representation of an object.

As repr(), return a string containing a printable representation of an
object, but escape the non-ASCII characters in the string returned by
repr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar
to that returned by repr() in Python 2.`},null,"builtins")):(Sk.builtins.range=new Sk.builtin.sk_method({$meth:Sk.builtin.range,$name:"range",$flags:{MinArgs:1,MaxArgs:3}},void 0,"builtins"),Sk.builtins.xrange=new Sk.builtin.sk_method({$meth:Sk.builtin.xrange,$name:"xrange",$flags:{MinArgs:1,MaxArgs:3}},null,"builtins"),Sk.builtins.filter=new Sk.builtin.func(Sk.builtin.filter),Sk.builtins.map=new Sk.builtin.func(Sk.builtin.map),Sk.builtins.zip=new Sk.builtin.func(Sk.builtin.zip),Sk.builtins.StandardError=Sk.builtin.Exception,Sk.builtins.unicode=Sk.builtin.str,Sk.builtins.basestring=Sk.builtin.str,Sk.builtins.long_$rw$=Sk.builtin.lng,Sk.builtin.int_.prototype.$r=function(){const n=this.v;return typeof n=="number"?new Sk.builtin.str(n.toString()):new Sk.builtin.str(n.toString()+"L")},Sk.builtin.int_.prototype.tp$str=function(){return new Sk.builtin.str(this.v.toString())},Sk.builtin.bool.prototype.tp$str=function(){return this.$r()},Sk.builtins.raw_input=new Sk.builtin.func(Sk.builtin.raw_input),Sk.builtin.str.prototype.decode=Sk.builtin.str.$py2decode,delete Sk.builtins.bytes,delete Sk.builtins.ascii)},Sk.exportSymbol("Sk.setupObjects",Sk.setupObjects),Sk.exportSymbol("Sk.builtins",Sk.builtins)},function(j,F){Sk.builtin.str.$empty=new Sk.builtin.str(""),Sk.builtin.str.$emptystr=Sk.builtin.str.$empty,Sk.builtin.str.$utf8=new Sk.builtin.str("utf-8"),Sk.builtin.str.$ascii=new Sk.builtin.str("ascii"),Sk.builtin.str.$default_factory=new Sk.builtin.str("default_factory"),Sk.builtin.str.$imag=new Sk.builtin.str("imag"),Sk.builtin.str.$real=new Sk.builtin.str("real"),Sk.builtin.str.$abs=new Sk.builtin.str("__abs__"),Sk.builtin.str.$bytes=new Sk.builtin.str("__bytes__"),Sk.builtin.str.$call=new Sk.builtin.str("__call__"),Sk.builtin.str.$class=new Sk.builtin.str("__class__"),Sk.builtin.str.$cmp=new Sk.builtin.str("__cmp__"),Sk.builtin.str.$complex=new Sk.builtin.str("__complex__"),Sk.builtin.str.$contains=new Sk.builtin.str("__contains__"),Sk.builtin.str.$copy=new Sk.builtin.str("__copy__"),Sk.builtin.str.$dict=new Sk.builtin.str("__dict__"),Sk.builtin.str.$dir=new Sk.builtin.str("__dir__"),Sk.builtin.str.$doc=new Sk.builtin.str("__doc__"),Sk.builtin.str.$enter=new Sk.builtin.str("__enter__"),Sk.builtin.str.$eq=new Sk.builtin.str("__eq__"),Sk.builtin.str.$exit=new Sk.builtin.str("__exit__"),Sk.builtin.str.$index=new Sk.builtin.str("__index__"),Sk.builtin.str.$init=new Sk.builtin.str("__init__"),Sk.builtin.str.$int_=new Sk.builtin.str("__int__"),Sk.builtin.str.$iter=new Sk.builtin.str("__iter__"),Sk.builtin.str.$file=new Sk.builtin.str("__file__"),Sk.builtin.str.$float_=new Sk.builtin.str("__float__"),Sk.builtin.str.$format=new Sk.builtin.str("__format__"),Sk.builtin.str.$ge=new Sk.builtin.str("__ge__"),Sk.builtin.str.$getattr=new Sk.builtin.str("__getattr__"),Sk.builtin.str.$getattribute=new Sk.builtin.str("__getattribute__"),Sk.builtin.str.$getitem=new Sk.builtin.str("__getitem__"),Sk.builtin.str.$gt=new Sk.builtin.str("__gt__"),Sk.builtin.str.$keys=new Sk.builtin.str("keys"),Sk.builtin.str.$le=new Sk.builtin.str("__le__"),Sk.builtin.str.$len=new Sk.builtin.str("__len__"),Sk.builtin.str.$length_hint=new Sk.builtin.str("__length_hint__"),Sk.builtin.str.$loader=new Sk.builtin.str("__loader__"),Sk.builtin.str.$lt=new Sk.builtin.str("__lt__"),Sk.builtin.str.$module=new Sk.builtin.str("__module__"),Sk.builtin.str.$missing=new Sk.builtin.str("__missing__"),Sk.builtin.str.$name=new Sk.builtin.str("__name__"),Sk.builtin.str.$ne=new Sk.builtin.str("__ne__"),Sk.builtin.str.$new=new Sk.builtin.str("__new__"),Sk.builtin.str.$next=new Sk.builtin.str("__next__"),Sk.builtin.str.$path=new Sk.builtin.str("__path__"),Sk.builtin.str.$qualname=new Sk.builtin.str("__qualname__"),Sk.builtin.str.$repr=new Sk.builtin.str("__repr__"),Sk.builtin.str.$reversed=new Sk.builtin.str("__reversed__"),Sk.builtin.str.$round=new Sk.builtin.str("__round__"),Sk.builtin.str.$setattr=new Sk.builtin.str("__setattr__"),Sk.builtin.str.$setitem=new Sk.builtin.str("__setitem__"),Sk.builtin.str.$str=new Sk.builtin.str("__str__"),Sk.builtin.str.$trunc=new Sk.builtin.str("__trunc__"),Sk.builtin.str.$write=new Sk.builtin.str("write"),Sk.misceval.op2method_={Eq:Sk.builtin.str.$eq,NotEq:Sk.builtin.str.$ne,Gt:Sk.builtin.str.$gt,GtE:Sk.builtin.str.$ge,Lt:Sk.builtin.str.$lt,LtE:Sk.builtin.str.$le}}])}).call(ce||window);Sk.builtinFiles={files:{"src/builtin/sys.js":'var $builtinmodule=function(){var b,a=Math.pow,c={},d=[],e=Sk.getSysArgv();for(b=0;b<e.length;++b)d.push(new Sk.builtin.str(e[b]));return c.argv=new Sk.builtins.list(d),c.copyright=new Sk.builtin.str("Copyright 2009-2010 Scott Graham.\\nAll Rights Reserved.\\n"),Sk.__future__.python3?(c.version="3.7(ish) [Skulpt]",c.version_info=new Sk.builtin.tuple([new Sk.builtin.int_(3),new Sk.builtin.int_(7)])):(c.version="2.7(ish) [Skulpt]",c.version_info=new Sk.builtin.tuple([new Sk.builtin.int_(2),new Sk.builtin.int_(7)])),c.maxint=new Sk.builtin.int_(a(2,53)-1),c.maxsize=new Sk.builtin.int_(a(2,53)-1),c.modules=Sk.sysmodules,c.path=Sk.realsyspath,c.getExecutionLimit=new Sk.builtin.func(function(){return null===Sk.execLimit?Sk.builtin.none.none$:new Sk.builtin.int_(Sk.execLimit)}),c.setExecutionLimit=new Sk.builtin.func(function(a){if(null===Sk.execLimit)throw new Sk.builtin.NotImplementedError("Execution limiting is not enabled");void 0!==a&&(Sk.execLimit=Sk.builtin.asnum$(a))}),c.resetTimeout=new Sk.builtin.func(function(){Sk.execStart=new Date}),c.getYieldLimit=new Sk.builtin.func(function(){return null===Sk.yieldLimit?Sk.builtin.none.none$:new Sk.builtin.int_(Sk.yieldLimit)}),c.setYieldLimit=new Sk.builtin.func(function(a){if(null===Sk.yieldLimit)throw new Sk.builtin.NotImplementedError("Yielding is not enabled");void 0!==a&&(Sk.yieldLimit=Sk.builtin.asnum$(a))}),c.debug=new Sk.builtin.func(function(){return Sk.builtin.none.none$}),c.__stdout__=new Sk.builtin.file(new Sk.builtin.str("/dev/stdout"),new Sk.builtin.str("w")),c.__stdin__=new Sk.builtin.file(new Sk.builtin.str("/dev/stdin"),new Sk.builtin.str("r")),c.stdout=c.__stdout__,c.stdin=c.__stdin__,c};',"src/builtin/this.py":`s = """Gur Mra bs Clguba, ol Gvz Crgref

Ornhgvshy vf orggre guna htyl.
Rkcyvpvg vf orggre guna vzcyvpvg.
Fvzcyr vf orggre guna pbzcyrk.
Pbzcyrk vf orggre guna pbzcyvpngrq.
Syng vf orggre guna arfgrq.
Fcnefr vf orggre guna qrafr.
Ernqnovyvgl pbhagf.
Fcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.
Nygubhtu cenpgvpnyvgl orngf chevgl.
Reebef fubhyq arire cnff fvyragyl.
Hayrff rkcyvpvgyl fvyraprq.
Va gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff.
Gurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.
Nygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.
Abj vf orggre guna arire.
Nygubhtu arire vf bsgra orggre guna *evtug* abj.
Vs gur vzcyrzragngvba vf uneq gb rkcynva, vg'f n onq vqrn.
Vs gur vzcyrzragngvba vf rnfl gb rkcynva, vg znl or n tbbq vqrn.
Anzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!"""

d = {}
for c in (65, 97):
    for i in range(26):
        d[chr(i+c)] = chr((i+13) % 26 + c)

print("".join([d.get(c, c) for c in s]))
`,"src/lib/BaseHTTPServer.py":`raise NotImplementedError("BaseHTTPServer is not yet implemented in Skulpt")
`,"src/lib/Bastion.py":`raise NotImplementedError("Bastion is not yet implemented in Skulpt")
`,"src/lib/CGIHTTPServer.py":`raise NotImplementedError("CGIHTTPServer is not yet implemented in Skulpt")
`,"src/lib/ConfigParser.py":`raise NotImplementedError("ConfigParser is not yet implemented in Skulpt")
`,"src/lib/Cookie.py":`raise NotImplementedError("Cookie is not yet implemented in Skulpt")
`,"src/lib/DocXMLRPCServer.py":`raise NotImplementedError("DocXMLRPCServer is not yet implemented in Skulpt")
`,"src/lib/HTMLParser.py":`raise NotImplementedError("HTMLParser is not yet implemented in Skulpt")
`,"src/lib/MimeWriter.py":`raise NotImplementedError("MimeWriter is not yet implemented in Skulpt")
`,"src/lib/Queue.py":`raise NotImplementedError("Queue is not yet implemented in Skulpt")
`,"src/lib/SimpleHTTPServer.py":`raise NotImplementedError("SimpleHTTPServer is not yet implemented in Skulpt")
`,"src/lib/SimpleXMLRPCServer.py":`raise NotImplementedError("SimpleXMLRPCServer is not yet implemented in Skulpt")
`,"src/lib/SocketServer.py":`raise NotImplementedError("SocketServer is not yet implemented in Skulpt")
`,"src/lib/StringIO.py":`r"""File-like objects that read from or write to a string buffer.

This implements (nearly) all stdio methods.

f = StringIO()      # ready for writing
f = StringIO(buf)   # ready for reading
f.close()           # explicitly release resources held
flag = f.isatty()   # always false
pos = f.tell()      # get current position
f.seek(pos)         # set current position
f.seek(pos, mode)   # mode 0: absolute; 1: relative; 2: relative to EOF
buf = f.read()      # read until EOF
buf = f.read(n)     # read up to n bytes
buf = f.readline()  # read until end of line ('\\n') or EOF
list = f.readlines()# list of f.readline() results until EOF
f.truncate([size])  # truncate file at to at most size (default: current pos)
f.write(buf)        # write at current position
f.writelines(list)  # for line in list: f.write(line)
f.getvalue()        # return whole file's contents as a string

Notes:
- Using a real file is often faster (but less convenient).
- There's also a much faster implementation in C, called cStringIO, but
  it's not subclassable.
- fileno() is left unimplemented so that code which uses it triggers
  an exception early.
- Seeking far beyond EOF and then writing will insert real null
  bytes that occupy space in the buffer.
- There's a simple test set (see end of this file).
"""

__all__ = ["StringIO"]

def _complain_ifclosed(closed):
    if closed:
        raise ValueError("I/O operation on closed file")

class StringIO:
    """class StringIO([buffer])

    When a StringIO object is created, it can be initialized to an existing
    string by passing the string to the constructor. If no string is given,
    the StringIO will start empty.

    The StringIO object can accept either Unicode or 8-bit strings, but
    mixing the two may take some care. If both are used, 8-bit strings that
    cannot be interpreted as 7-bit ASCII (that use the 8th bit) will cause
    a UnicodeError to be raised when getvalue() is called.
    """
    def __init__(self, buf = ''):
        # Force self.buf to be a string or unicode
        if not isinstance(buf, str):
            buf = str(buf)
        self.buf = buf
        self.len = len(buf)
        self.buflist = []
        self.pos = 0
        self.closed = False
        self.softspace = 0

    def __iter__(self):
        return self

    def next(self):
        """A file object is its own iterator, for example iter(f) returns f
        (unless f is closed). When a file is used as an iterator, typically
        in a for loop (for example, for line in f: print line), the next()
        method is called repeatedly. This method returns the next input line,
        or raises StopIteration when EOF is hit.
        """
        _complain_ifclosed(self.closed)
        r = self.readline()
        if not r:
            raise StopIteration
        return r

    def close(self):
        """Free the memory buffer.
        """
        if not self.closed:
            self.closed = True
            self.buf = None
            self.pos = None

    def isatty(self):
        """Returns False because StringIO objects are not connected to a
        tty-like device.
        """
        _complain_ifclosed(self.closed)
        return False

    def seek(self, pos, mode = 0):
        """Set the file's current position.

        The mode argument is optional and defaults to 0 (absolute file
        positioning); other values are 1 (seek relative to the current
        position) and 2 (seek relative to the file's end).

        There is no return value.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        if mode == 1:
            pos += self.pos
        elif mode == 2:
            pos += self.len
        self.pos = max(0, pos)

    def tell(self):
        """Return the file's current position."""
        _complain_ifclosed(self.closed)
        return self.pos

    def read(self, n = -1):
        """Read at most size bytes from the file
        (less if the read hits EOF before obtaining size bytes).

        If the size argument is negative or omitted, read all data until EOF
        is reached. The bytes are returned as a string object. An empty
        string is returned when EOF is encountered immediately.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        if n is None or n < 0:
            newpos = self.len
        else:
            newpos = min(self.pos+n, self.len)
        r = self.buf[self.pos:newpos]
        self.pos = newpos
        return r

    def readline(self, length=None):
        r"""Read one entire line from the file.

        A trailing newline character is kept in the string (but may be absent
        when a file ends with an incomplete line). If the size argument is
        present and non-negative, it is a maximum byte count (including the
        trailing newline) and an incomplete line may be returned.

        An empty string is returned only when EOF is encountered immediately.

        Note: Unlike stdio's fgets(), the returned string contains null
        characters ('\\0') if they occurred in the input.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        i = self.buf.find('\\n', self.pos)
        if i < 0:
            newpos = self.len
        else:
            newpos = i+1
        if length is not None and length >= 0:
            if self.pos + length < newpos:
                newpos = self.pos + length
        r = self.buf[self.pos:newpos]
        self.pos = newpos
        return r

    def readlines(self, sizehint = 0):
        """Read until EOF using readline() and return a list containing the
        lines thus read.

        If the optional sizehint argument is present, instead of reading up
        to EOF, whole lines totalling approximately sizehint bytes (or more
        to accommodate a final whole line).
        """
        total = 0
        lines = []
        line = self.readline()
        while line:
            lines.append(line)
            total += len(line)
            if 0 < sizehint <= total:
                break
            line = self.readline()
        return lines

    def truncate(self, size=None):
        """Truncate the file's size.

        If the optional size argument is present, the file is truncated to
        (at most) that size. The size defaults to the current position.
        The current file position is not changed unless the position
        is beyond the new file size.

        If the specified size exceeds the file's current size, the
        file remains unchanged.
        """
        _complain_ifclosed(self.closed)
        if size is None:
            size = self.pos
        elif size < 0:
            raise IOError(22, "Negative size not allowed")
        elif size < self.pos:
            self.pos = size
        self.buf = self.getvalue()[:size]
        self.len = size

    def write(self, s):
        """Write a string to the file.

        There is no return value.
        """
        _complain_ifclosed(self.closed)
        if not s: return
        # Force s to be a string or unicode
        if not isinstance(s, str):
            s = str(s)
        spos = self.pos
        slen = self.len
        if spos == slen:
            self.buflist.append(s)
            self.len = self.pos = spos + len(s)
            return
        if spos > slen:
            self.buflist.append('\\0'*(spos - slen))
            slen = spos
        newpos = spos + len(s)
        if spos < slen:
            if self.buflist:
                self.buf += ''.join(self.buflist)
            self.buflist = [self.buf[:spos], s, self.buf[newpos:]]
            self.buf = ''
            if newpos > slen:
                slen = newpos
        else:
            self.buflist.append(s)
            slen = newpos
        self.len = slen
        self.pos = newpos

    def writelines(self, iterable):
        """Write a sequence of strings to the file. The sequence can be any
        iterable object producing strings, typically a list of strings. There
        is no return value.

        (The name is intended to match readlines(); writelines() does not add
        line separators.)
        """
        write = self.write
        for line in iterable:
            write(line)

    def flush(self):
        """Flush the internal buffer
        """
        _complain_ifclosed(self.closed)

    def getvalue(self):
        """
        Retrieve the entire contents of the "file" at any time before
        the StringIO object's close() method is called.

        The StringIO object can accept either Unicode or 8-bit strings,
        but mixing the two may take some care. If both are used, 8-bit
        strings that cannot be interpreted as 7-bit ASCII (that use the
        8th bit) will cause a UnicodeError to be raised when getvalue()
        is called.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        return self.buf
`,"src/lib/UserDict.py":`raise NotImplementedError("UserDict is not yet implemented in Skulpt")
`,"src/lib/UserList.py":`raise NotImplementedError("UserList is not yet implemented in Skulpt")
`,"src/lib/UserString.py":`raise NotImplementedError("UserString is not yet implemented in Skulpt")
`,"src/lib/_LWPCookieJar.py":`raise NotImplementedError("_LWPCookieJar is not yet implemented in Skulpt")
`,"src/lib/_MozillaCookieJar.py":`raise NotImplementedError("_MozillaCookieJar is not yet implemented in Skulpt")
`,"src/lib/__future__.py":`raise NotImplementedError("__future__ is not yet implemented in Skulpt")
`,"src/lib/__phello__.foo.py":`raise NotImplementedError("__phello__.foo is not yet implemented in Skulpt")
`,"src/lib/_abcoll.py":`raise NotImplementedError("_abcoll is not yet implemented in Skulpt")
`,"src/lib/_strptime.py":`raise NotImplementedError("_strptime is not yet implemented in Skulpt")
`,"src/lib/_threading_local.py":`raise NotImplementedError("_threading_local is not yet implemented in Skulpt")
`,"src/lib/abc.py":`raise NotImplementedError("abc is not yet implemented in Skulpt")
`,"src/lib/aifc.py":`raise NotImplementedError("aifc is not yet implemented in Skulpt")
`,"src/lib/antigravity.py":`import webbrowser

webbrowser.open("https://xkcd.com/353/")
`,"src/lib/anydbm.py":`raise NotImplementedError("anydbm is not yet implemented in Skulpt")
`,"src/lib/array.js":`$builtinmodule=function(){var a={},b=["c","b","B","u","h","H","i","I","l","L","f","d"];return a.__name__=new Sk.builtin.str("array"),a.array=Sk.misceval.buildClass(a,function(a,c){c.__init__=new Sk.builtin.func(function(a,c,d){if(Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,3),-1==b.indexOf(Sk.ffi.remapToJs(c)))throw new Sk.builtin.ValueError("bad typecode (must be c, b, B, u, h, H, i, I, l, L, f or d)");if(d&&!Sk.builtin.checkIterable(d))throw new Sk.builtin.TypeError("iteration over non-sequence");if(a.$d.mp$ass_subscript(new Sk.builtin.str("typecode"),c),a.$d.mp$ass_subscript(new Sk.builtin.str("__module__"),new Sk.builtin.str("array")),a.typecode=c,void 0===d)a.internalIterable=new Sk.builtin.list;else if(d instanceof Sk.builtin.list)a.internalIterable=d;else for(a.internalIterable=new Sk.builtin.list,iter=Sk.abstr.iter(d),item=iter.tp$iternext();void 0!==item;item=iter.tp$iternext())Sk.misceval.callsimArray(a.internalIterable.append,[a.internalIterable,item])}),c.__repr__=new Sk.builtin.func(function(a){var b=Sk.ffi.remapToJs(a.typecode),c="";return Sk.ffi.remapToJs(a.internalIterable).length&&("c"==Sk.ffi.remapToJs(a.typecode)?c=", '"+Sk.ffi.remapToJs(a.internalIterable).join("")+"'":c=", "+Sk.ffi.remapToJs(Sk.misceval.callsimArray(a.internalIterable.__repr__,[a.internalIterable]))),new Sk.builtin.str("array('"+b+"'"+c+")")}),c.__str__=c.__repr__,c.__getattribute__=new Sk.builtin.func(function(a,b){return a.tp$getattr(b)}),c.append=new Sk.builtin.func(function(a,b){return Sk.misceval.callsimArray(a.internalIterable.append,[a.internalIterable,b]),Sk.builtin.none.none$}),c.extend=new Sk.builtin.func(function(a,b){if(Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,2),!Sk.builtin.checkIterable(b))throw new Sk.builtin.TypeError("iteration over non-sequence");for(iter=Sk.abstr.iter(b),item=iter.tp$iternext();void 0!==item;item=iter.tp$iternext())Sk.misceval.callsimArray(a.internalIterable.append,[a.internalIterable,item])})},"array",[]),a};`,"src/lib/ast.py":`raise NotImplementedError("ast is not yet implemented in Skulpt")
`,"src/lib/asynchat.py":`raise NotImplementedError("asynchat is not yet implemented in Skulpt")
`,"src/lib/asyncore.py":`raise NotImplementedError("asyncore is not yet implemented in Skulpt")
`,"src/lib/atexit.py":`raise NotImplementedError("atexit is not yet implemented in Skulpt")
`,"src/lib/audiodev.py":`raise NotImplementedError("audiodev is not yet implemented in Skulpt")
`,"src/lib/base64.py":`raise NotImplementedError("base64 is not yet implemented in Skulpt")
`,"src/lib/bdb.py":`raise NotImplementedError("bdb is not yet implemented in Skulpt")
`,"src/lib/binhex.py":`raise NotImplementedError("binhex is not yet implemented in Skulpt")
`,"src/lib/bisect.py":`"""Bisection algorithms."""

def insort_right(a, x, lo=0, hi=None):
    """Insert item x in list a, and keep it sorted assuming a is sorted.

    If x is already in a, insert it to the right of the rightmost x.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    a.insert(lo, x)

def bisect_right(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e <= x, and all e in
    a[i:] have e > x.  So if x already appears in the list, a.insert(x) will
    insert just after the rightmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    return lo

def insort_left(a, x, lo=0, hi=None):
    """Insert item x in list a, and keep it sorted assuming a is sorted.

    If x is already in a, insert it to the left of the leftmost x.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    a.insert(lo, x)


def bisect_left(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e < x, and all e in
    a[i:] have e >= x.  So if x already appears in the list, a.insert(x) will
    insert just before the leftmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo

# Overwrite above definitions with a fast C implementation
try:
    from _bisect import *
except ImportError:
    pass

# Create aliases
bisect = bisect_right
insort = insort_right
`,"src/lib/bsddb/__init__.py":`raise NotImplementedError("bsddb is not yet implemented in Skulpt")
`,"src/lib/cProfile.py":`raise NotImplementedError("cProfile is not yet implemented in Skulpt")
`,"src/lib/calendar.py":`raise NotImplementedError("calendar is not yet implemented in Skulpt")
`,"src/lib/cgi.py":`raise NotImplementedError("cgi is not yet implemented in Skulpt")
`,"src/lib/cgitb.py":`raise NotImplementedError("cgitb is not yet implemented in Skulpt")
`,"src/lib/chunk.py":`raise NotImplementedError("chunk is not yet implemented in Skulpt")
`,"src/lib/cmd.py":`raise NotImplementedError("cmd is not yet implemented in Skulpt")
`,"src/lib/code.py":`raise NotImplementedError("code is not yet implemented in Skulpt")
`,"src/lib/codecs.py":`raise NotImplementedError("codecs is not yet implemented in Skulpt")
`,"src/lib/codeop.py":`raise NotImplementedError("codeop is not yet implemented in Skulpt")
`,"src/lib/collections.js":`function $builtinmodule(){const a={};return Sk.misceval.chain(Sk.importModule("keyword",!1,!0),b=>(a._iskeyword=b.$d.iskeyword,Sk.importModule("itertools",!1,!0)),b=>(a._chain=b.$d.chain,a._starmap=b.$d.starmap,a._repeat=b.$d.repeat,Sk.importModule("operator",!1,!0)),b=>{a._itemgetter=b.$d.itemgetter},()=>collections_mod(a))}function collections_mod(a){function counterNumberSlot(b){return function(c){if(void 0!==c&&!(c instanceof a.Counter))return Sk.builtin.NotImplemented.NotImplemented$;const d=new a.Counter;return b.call(this,d,c),d}}function counterInplaceSlot(a,b){return function(c){if(!(c instanceof Sk.builtin.dict))throw new Sk.builtin.TypeError("Counter "+a+"= "+Sk.abstr.typeName(c)+" is not supported");return b.call(this,c),this.keep$positive()}}function namedtuple(b,c,d,l,m){function _make(a,b){return a.prototype.tp$new(Sk.misceval.arrayFromIterable(b))}function _asdict(a){const b=[];for(let c=0;c<a._fields.v.length;c++)b.push(a._fields.v[c]),b.push(a.v[c]);return new Sk.builtin.dict(b)}function _replace(a,b){a=new Sk.builtin.dict(a);const c=a.tp$getattr(new Sk.builtin.str("pop")),d=Sk.abstr.gattr(b,new Sk.builtin.str("_make")),e=Sk.misceval.callsimArray,f=e(d,[e(Sk.builtin.map_,[c,r,b])]);if(a.sq$length()){const b=a.sk$asarray();throw new Sk.builtin.ValueError("Got unexpectd field names: ["+b.map(a=>"'"+a.$jsstr()+"'")+"]")}return f}if(b=b.tp$str(),Sk.misceval.isTrue(Sk.misceval.callsimArray(a._iskeyword,[b])))throw new Sk.builtin.ValueError("Type names and field names cannot be a keyword: '"+Sk.misceval.objectRepr(b)+"'");const n=b.$jsstr();if(e.test(n)||!g.test(n)||!n)throw new Sk.builtin.ValueError("Type names and field names must be valid identifiers: '"+n+"'");let o,p;if(Sk.builtin.checkString(c))o=c.$jsstr().replace(h," ").split(j),1==o.length&&""===o[0]&&(o=[]),p=o.map(a=>new Sk.builtin.str(a));else{o=[],p=[];for(let a=Sk.abstr.iter(c),b=a.tp$iternext();void 0!==b;b=a.tp$iternext())b=b.tp$str(),p.push(b),o.push(b.$jsstr())}let q=new Set;if(Sk.misceval.isTrue(d))for(i=0;i<o.length;i++)(Sk.misceval.isTrue(Sk.misceval.callsimArray(a._iskeyword,[p[i]]))||f.test(o[i])||!g.test(o[i])||!o[i]||q.has(o[i]))&&(o[i]="_"+i,p[i]=new Sk.builtin.str("_"+i)),q.add(o[i]);else for(i=0;i<o.length;i++){if(Sk.misceval.isTrue(Sk.misceval.callsimArray(a._iskeyword,[p[i]])))throw new Sk.builtin.ValueError("Type names and field names cannot be a keyword: '"+o[i]+"'");else if(f.test(o[i]))throw new Sk.builtin.ValueError("Field names cannot start with an underscore: '"+o[i]+"'");else if(!g.test(o[i])||!o[i])throw new Sk.builtin.ValueError("Type names and field names must be valid identifiers: '"+o[i]+"'");else if(q.has(o[i]))throw new Sk.builtin.ValueError("Encountered duplicate field name: '"+o[i]+"'");q.add(o[i])}const r=new Sk.builtin.tuple(p),s=[];let t=[];if(!Sk.builtin.checkNone(l)){if(t=Sk.misceval.arrayFromIterable(l),t.length>o.length)throw new Sk.builtin.TypeError("Got more default values than field names");for(let a=0,b=p.length-t.length;b<p.length;a++,b++)s.push(p[b]),s.push(t[a])}const u=new Sk.builtin.dict(s);_make.co_varnames=["_cls","iterable"],_asdict.co_varnames=["self"],_replace.co_kwargs=1,_replace.co_varnames=["_self"];const v={};for(let e=0;e<o.length;e++)v[p[e].$mangled]=new Sk.builtin.property(new a._itemgetter([new Sk.builtin.int_(e)]),void 0,void 0,new Sk.builtin.str("Alias for field number "+e));return Sk.abstr.buildNativeClass(n,{constructor:function NamedTuple(){},base:Sk.builtin.tuple,slots:{tp$doc:n+"("+o.join(", ")+")",tp$new(a,b){a=Sk.abstr.copyKeywordsToNamedArgs("__new__",o,a,b,t);const c=new this.constructor;return Sk.builtin.tuple.call(c,a),c},$r(){const a=this.v.map((a,b)=>o[b]+"="+Sk.misceval.objectRepr(a));return new Sk.builtin.str(Sk.abstr.typeName(this)+"("+a.join(", ")+")")}},proto:Object.assign({__module__:Sk.builtin.checkNone(m)?Sk.globals.__name__:m,__slots__:new Sk.builtin.tuple,_fields:r,_field_defaults:u,_make:new Sk.builtin.classmethod(new Sk.builtin.func(_make)),_asdict:new Sk.builtin.func(_asdict),_replace:new Sk.builtin.func(_replace)},v)})}a.__all__=new Sk.builtin.list(["deque","defaultdict","namedtuple","Counter","OrderedDict"].map(a=>new Sk.builtin.str(a))),a.defaultdict=Sk.abstr.buildNativeClass("collections.defaultdict",{constructor:function defaultdict(a,b){this.default_factory=a,Sk.builtin.dict.call(this,b)},base:Sk.builtin.dict,methods:{copy:{$meth(){return this.$copy()},$flags:{NoArgs:!0}},__copy__:{$meth(){return this.$copy()},$flags:{NoArgs:!0}},__missing__:{$meth(a){if(Sk.builtin.checkNone(this.default_factory))throw new Sk.builtin.KeyError(Sk.misceval.objectRepr(a));else{const b=Sk.misceval.callsimArray(this.default_factory,[]);return this.mp$ass_subscript(a,b),b}},$flags:{OneArg:!0}}},getsets:{default_factory:{$get(){return this.default_factory},$set(a){a=a||Sk.builtin.none.none$,this.default_factory=a}}},slots:{tp$doc:"defaultdict(default_factory[, ...]) --> dict with default factory\\n\\nThe default factory is called without arguments to produce\\na new value when a key is not present, in __getitem__ only.\\nA defaultdict compares equal to a dict with the same items.\\nAll remaining arguments are treated the same as if they were\\npassed to the dict constructor, including keyword arguments.\\n",tp$init(a,b){const c=a.shift();if(void 0===c)this.default_factory=Sk.builtin.none.none$;else if(!Sk.builtin.checkCallable(c)&&!Sk.builtin.checkNone(c))throw new Sk.builtin.TypeError("first argument must be callable");else this.default_factory=c;return Sk.builtin.dict.prototype.tp$init.call(this,a,b)},$r(){const a=Sk.misceval.objectRepr(this.default_factory),b=Sk.builtin.dict.prototype.$r.call(this).v;return new Sk.builtin.str("defaultdict("+a+", "+b+")")}},proto:{$copy(){const b=[];return Sk.misceval.iterFor(Sk.abstr.iter(this),a=>{b.push(a),b.push(this.mp$subscript(a))}),new a.defaultdict(this.default_factory,b)}}}),a.Counter=Sk.abstr.buildNativeClass("Counter",{constructor:function Counter(){this.$d=new Sk.builtin.dict,Sk.builtin.dict.apply(this)},base:Sk.builtin.dict,methods:{elements:{$flags:{NoArgs:!0},$meth(){const b=a._chain.tp$getattr(new Sk.builtin.str("from_iterable")),c=a._starmap,d=a._repeat,e=Sk.misceval.callsimArray;return e(b,[e(c,[d,e(this.tp$getattr(this.str$items))])])}},most_common:{$flags:{NamedArgs:["n"],Defaults:[Sk.builtin.none.none$]},$meth(a){length=this.sq$length(),Sk.builtin.checkNone(a)?a=length:(a=Sk.misceval.asIndexOrThrow(a),a=a>length?length:0>a?0:a);const b=this.$items().sort((c,a)=>Sk.misceval.richCompareBool(c[1],a[1],"Lt")?1:Sk.misceval.richCompareBool(c[1],a[1],"Gt")?-1:0);return new Sk.builtin.list(b.slice(0,a).map(a=>new Sk.builtin.tuple(a)))}},update:{$flags:{FastCall:!0},$meth(a,b){return Sk.abstr.checkArgsLen("update",a,0,1),this.counter$update(a,b)}},subtract:{$flags:{FastCall:!0},$meth(a,b){Sk.abstr.checkArgsLen("subtract",a,0,1);const c=a[0];if(void 0!==c)if(c instanceof Sk.builtin.dict)for(let a=Sk.abstr.iter(c),b=a.tp$iternext();void 0!==b;b=a.tp$iternext()){const a=this.mp$subscript(b);this.mp$ass_subscript(b,Sk.abstr.numberBinOp(a,c.mp$subscript(b),"Sub"))}else for(iter=Sk.abstr.iter(c),k=iter.tp$iternext();void 0!==k;k=iter.tp$iternext()){const a=this.mp$subscript(k);this.mp$ass_subscript(k,Sk.abstr.numberBinOp(a,this.$one,"Sub"))}b=b||[];for(let c=0;c<b.length;c+=2){const a=new Sk.builtin.str(b[c]),d=this.mp$subscript(a);this.mp$ass_subscript(a,Sk.abstr.numberBinOp(d,b[c+1],"Sub"))}return Sk.builtin.none.none$}},__missing__:{$meth(){return this.$zero},$flags:{OneArg:!0}},copy:{$meth(){return Sk.misceval.callsimArray(a.Counter,[this])},$flags:{NoArgs:!0}}},getsets:{__dict__:Sk.generic.getSetDict},slots:{tp$doc:"Dict subclass for counting hashable items.  Sometimes called a bag\\n    or multiset.  Elements are stored as dictionary keys and their counts\\n    are stored as dictionary values.\\n\\n    >>> c = Counter('abcdeabcdabcaba')  # count elements from a string\\n\\n    >>> c.most_common(3)                # three most common elements\\n    [('a', 5), ('b', 4), ('c', 3)]\\n    >>> sorted(c)                       # list all unique elements\\n    ['a', 'b', 'c', 'd', 'e']\\n    >>> ''.join(sorted(c.elements()))   # list elements with repetitions\\n    'aaaaabbbbcccdde'\\n    >>> sum(c.values())                 # total of all counts\\n    15\\n\\n    >>> c['a']                          # count of letter 'a'\\n    5\\n    >>> for elem in 'shazam':           # update counts from an iterable\\n    ...     c[elem] += 1                # by adding 1 to each element's count\\n    >>> c['a']                          # now there are seven 'a'\\n    7\\n    >>> del c['b']                      # remove all 'b'\\n    >>> c['b']                          # now there are zero 'b'\\n    0\\n\\n    >>> d = Counter('simsalabim')       # make another counter\\n    >>> c.update(d)                     # add in the second counter\\n    >>> c['a']                          # now there are nine 'a'\\n    9\\n\\n    >>> c.clear()                       # empty the counter\\n    >>> c\\n    Counter()\\n\\n    Note:  If a count is set to zero or reduced to zero, it will remain\\n    in the counter until the entry is deleted or the counter is cleared:\\n\\n    >>> c = Counter('aaabbc')\\n    >>> c['b'] -= 2                     # reduce the count of 'b' by two\\n    >>> c.most_common()                 # 'b' is still in, but its count is zero\\n    [('a', 3), ('c', 1), ('b', 0)]\\n\\n",tp$init(a,b){return Sk.abstr.checkArgsLen(this.tpjs_name,a,0,1),this.counter$update(a,b)},$r(){const a=0<this.size?Sk.builtin.dict.prototype.$r.call(this).v:"";return new Sk.builtin.str(Sk.abstr.typeName(this)+"("+a+")")},tp$as_sequence_or_mapping:!0,mp$ass_subscript(a,b){return void 0===b?this.mp$lookup(a)&&Sk.builtin.dict.prototype.mp$ass_subscript.call(this,a,b):Sk.builtin.dict.prototype.mp$ass_subscript.call(this,a,b)},tp$as_number:!0,nb$positive:counterNumberSlot(function(a){this.$items().forEach(([b,c])=>{Sk.misceval.richCompareBool(c,this.$zero,"Gt")&&a.mp$ass_subscript(b,c)})}),nb$negative:counterNumberSlot(function(a){this.$items().forEach(([b,c])=>{Sk.misceval.richCompareBool(c,this.$zero,"Lt")&&a.mp$ass_subscript(b,Sk.abstr.numberBinOp(this.$zero,c,"Sub"))})}),nb$subtract:counterNumberSlot(function(a,b){this.$items().forEach(([c,d])=>{const e=Sk.abstr.numberBinOp(d,b.mp$subscript(c),"Sub");Sk.misceval.richCompareBool(e,this.$zero,"Gt")&&a.mp$ass_subscript(c,e)}),b.$items().forEach(([b,c])=>{void 0===this.mp$lookup(b)&&Sk.misceval.richCompareBool(c,this.$zero,"Lt")&&a.mp$ass_subscript(b,Sk.abstr.numberBinOp(this.$zero,c,"Sub"))})}),nb$add:counterNumberSlot(function(a,b){this.$items().forEach(([c,d])=>{const e=Sk.abstr.numberBinOp(d,b.mp$subscript(c),"Add");Sk.misceval.richCompareBool(e,this.$zero,"Gt")&&a.mp$ass_subscript(c,e)}),b.$items().forEach(([b,c])=>{void 0===this.mp$lookup(b)&&Sk.misceval.richCompareBool(c,this.$zero,"Gt")&&a.mp$ass_subscript(b,c)})}),nb$inplace_add:counterInplaceSlot("+",function(a){a.$items().forEach(([a,b])=>{const c=Sk.abstr.numberInplaceBinOp(this.mp$subscript(a),b,"Add");this.mp$ass_subscript(a,c)})}),nb$inplace_subtract:counterInplaceSlot("-",function(a){a.$items().forEach(([a,b])=>{const c=Sk.abstr.numberInplaceBinOp(this.mp$subscript(a),b,"Sub");this.mp$ass_subscript(a,c)})}),nb$or:counterNumberSlot(function(a,b){this.$items().forEach(([c,d])=>{const e=b.mp$subscript(c),f=Sk.misceval.richCompareBool(d,e,"Lt")?e:d;Sk.misceval.richCompareBool(f,this.$zero,"Gt")&&a.mp$ass_subscript(c,f)}),b.$items().forEach(([b,c])=>{void 0===this.mp$lookup(b)&&Sk.misceval.richCompareBool(c,this.$zero,"Gt")&&a.mp$ass_subscript(b,c)})}),nb$and:counterNumberSlot(function(a,b){this.$items().forEach(([c,d])=>{const e=b.mp$subscript(c),f=Sk.misceval.richCompareBool(d,e,"Lt")?d:e;Sk.misceval.richCompareBool(f,this.$zero,"Gt")&&a.mp$ass_subscript(c,f)})}),nb$inplace_and:counterInplaceSlot("&",function(a){this.$items().forEach(([b,c])=>{const d=a.mp$subscript(b);Sk.misceval.richCompareBool(d,c,"Lt")&&this.mp$ass_subscript(b,d)})}),nb$inplace_or:counterInplaceSlot("|",function(a){a.$items().forEach(([a,b])=>{Sk.misceval.richCompareBool(b,this.mp$subscript(a),"Gt")&&this.mp$ass_subscript(a,b)})}),nb$reflected_and:null,nb$reflected_or:null,nb$reflected_add:null,nb$reflected_subtract:null},proto:{keep$positive(){return this.$items().forEach(([a,b])=>{Sk.misceval.richCompareBool(b,this.$zero,"LtE")&&this.mp$ass_subscript(a)}),this},$zero:new Sk.builtin.int_(0),$one:new Sk.builtin.int_(1),str$items:new Sk.builtin.str("items"),counter$update(a,b){const c=a[0];if(void 0!==c)if(!Sk.builtin.checkMapping(c))for(let a=Sk.abstr.iter(c),b=a.tp$iternext();void 0!==b;b=a.tp$iternext()){const a=this.mp$subscript(b);this.mp$ass_subscript(b,Sk.abstr.numberBinOp(a,this.$one,"Add"))}else if(!this.sq$length())this.update$common(a,void 0,"update");else for(let a=Sk.abstr.iter(c),b=a.tp$iternext();void 0!==b;b=a.tp$iternext()){const a=this.mp$subscript(b);this.mp$ass_subscript(b,Sk.abstr.numberBinOp(a,c.mp$subscript(b),"Add"))}if(b&&b.length)if(!this.sq$length())this.update$common([],b,"update");else for(let a=0;a<b.length;a+=2){const c=new Sk.builtin.str(b[a]),d=this.mp$subscript(c);this.mp$ass_subscript(c,Sk.abstr.numberBinOp(d,b[a+1],"Add"))}return Sk.builtin.none.none$}},classmethods:{fromkeys:{$meth:function fromkeys(){throw new Sk.builtin.NotImplementedError("Counter.fromkeys() is undefined.  Use Counter(iterable) instead.")},$flags:{MinArgs:1,MaxArgs:2}}}});const b=Sk.abstr.buildIteratorClass("odict_iterator",{constructor:function odict_iter_(a){this.$index=0,this.$seq=a.sk$asarray(),this.$orig=a},iternext:Sk.generic.iterNextWithArrayCheckSize,flags:{sk$acceptable_as_base_class:!1}});a.OrderedDict=Sk.abstr.buildNativeClass("OrderedDict",{constructor:function OrderedDict(){return this.orderedkeys=[],Sk.builtin.dict.call(this),this},base:Sk.builtin.dict,slots:{tp$as_sequence_or_mapping:!0,tp$init(a,b){Sk.abstr.checkArgsLen("OrderedDict",a,0,1),a.unshift(this),res=Sk.misceval.callsimArray(this.update,a,b)},tp$doc:"Dictionary that remembers insertion order",$r(){let a,b;const c=[];for(let b=this.tp$iter(),d=b.tp$iternext();void 0!==d;d=b.tp$iternext())a=this.mp$subscript(d),void 0===a&&(a=null),c.push("("+Sk.misceval.objectRepr(d)+", "+Sk.misceval.objectRepr(a)+")");return b=c.join(", "),0<c.length&&(b="["+b+"]"),new Sk.builtin.str("OrderedDict("+b+")")},tp$richcompare(b,c){if("Eq"!=c&&"Ne"!=c)return Sk.builtin.NotImplemented.NotImplemented$;const d="Eq"==c;if(!(b instanceof a.OrderedDict))return Sk.builtin.dict.prototype.tp$richcompare.call(this,b,c);const e=this.size,f=b.size;if(e!==f)return!d;for(let a=this.tp$iter(),e=b.tp$iter(),f=a.tp$iternext(),g=e.tp$iternext();void 0!==f;f=a.tp$iternext(),g=e.tp$iternext()){if(!Sk.misceval.isTrue(Sk.misceval.richCompareBool(f,g,"Eq")))return!d;const a=this.mp$subscript(f),c=b.mp$subscript(g);if(!Sk.misceval.isTrue(Sk.misceval.richCompareBool(a,c,"Eq")))return!d}return d},mp$ass_subscript(a,b){if(void 0===b){const b=this.pop$item(a);if(void 0===b)throw new Sk.builtin.KeyError(a)}else this.set$item(a,b)},tp$iter(){return new b(this)}},methods:{pop:{$flags:{NamedArgs:["key","default"],Defaults:[null]},$meth(a,b){return null===b?Sk.misceval.callsimArray(Sk.builtin.dict.prototype.pop,[this,a]):Sk.misceval.callsimArray(Sk.builtin.dict.prototype.pop,[this,a,b])}},popitem:{$flags:{NamedArgs:["last"],Defaults:[Sk.builtin.bool.true$]},$meth(a){let b,c;if(!this.orderedkeys.length)throw new Sk.builtin.KeyError("dictionary is empty");return b=this.orderedkeys[0],Sk.misceval.isTrue(a)&&(b=this.orderedkeys[this.orderedkeys.length-1]),c=Sk.misceval.callsimArray(this.pop,[this,b]),new Sk.builtin.tuple([b,c])}},move_to_end:{$flags:{NamedArgs:["key","last"],Defaults:[Sk.builtin.bool.true$]},$meth(a,b){let c,d=-1;for(let e=0;e<this.orderedkeys.length;e++)if(c=this.orderedkeys[e],c===a||Sk.misceval.richCompareBool(c,a,"Eq")){d=e;break}if(-1!==d)this.orderedkeys.splice(d,1);else throw new Sk.builtin.KeyError(a);return Sk.misceval.isTrue(b)?this.orderedkeys.push(a):this.orderedkeys.unshift(a),Sk.builtin.none.none$}}},proto:{sk$asarray(){return this.orderedkeys.slice(0)},set$item(a,b){const c=this.orderedkeys.indexOf(a);-1==c&&this.orderedkeys.push(a),Sk.builtin.dict.prototype.set$item.call(this,a,b)},pop$item(a){var b=this.orderedkeys.indexOf(a);if(-1!=b)return this.orderedkeys.splice(b,1),Sk.builtin.dict.prototype.pop$item.call(this,a)}}}),a.deque=Sk.abstr.buildNativeClass("collections.deque",{constructor:function deque(a,b,c,d,e){this.head=c||0,this.tail=d||0,this.mask=e||1,this.maxlen=b,this.v=a||[,,]},slots:{tp$doc:"deque([iterable[, maxlen]]) --> deque object\\n\\nA list-like sequence optimized for data accesses near its endpoints.",tp$hash:Sk.builtin.none.none$,tp$new:Sk.generic.new,tp$init(a,b){if([iterable,maxlen]=Sk.abstr.copyKeywordsToNamedArgs("deque",["iterable","maxlen"],a,b),void 0!==maxlen&&!Sk.builtin.checkNone(maxlen))if(maxlen=Sk.misceval.asIndexSized(maxlen,Sk.builtin.OverflowError,"an integer is required"),0>maxlen)throw new Sk.builtin.ValueError("maxlen must be non-negative");else this.maxlen=maxlen;this.$clear(),void 0!==iterable&&this.$extend(iterable)},tp$getattr:Sk.generic.getAttr,tp$richcompare(b,c){var d=Math.max;if(this===b&&Sk.misceval.opAllowsEquality(c))return!0;if(!(b instanceof a.deque))return Sk.builtin.NotImplemented.NotImplemented$;const e=b,f=this.v;b=b.v;const g=this.tail-this.head&this.mask,h=e.tail-e.head&e.mask;let j,l=d(g,h);if(g===h)for(l=0;l<g&&l<h&&(j=Sk.misceval.richCompareBool(f[this.head+l&this.mask],b[e.head+l&e.mask],"Eq"),!!j);++l);if(l>=g||l>=h)switch(c){case"Lt":return g<h;case"LtE":return g<=h;case"Eq":return g===h;case"NotEq":return g!==h;case"Gt":return g>h;case"GtE":return g>=h;}return"Eq"!==c&&("NotEq"===c||Sk.misceval.richCompareBool(f[this.head+l&this.mask],b[e.head+l&e.mask],c))},tp$iter(){return new c(this)},$r(){const a=[],b=this.tail-this.head&this.mask;if(this.$entered_repr)return new Sk.builtin.str("[...]");this.$entered_repr=!0;for(let c=0;c<b;c++)a.push(Sk.misceval.objectRepr(this.v[this.head+c&this.mask]));const c=Sk.abstr.typeName(this);return void 0===this.maxlen?(this.$entered_repr=void 0,new Sk.builtin.str(c+"(["+a.filter(Boolean).join(", ")+"])")):new Sk.builtin.str(c+"(["+a.filter(Boolean).join(", ")+"], maxlen="+this.maxlen+")")},tp$as_number:!0,nb$bool(){return 0!=(this.tail-this.head&this.mask)},tp$as_sequence_or_mapping:!0,sq$contains(a){for(let b=this.tp$iter(),c=b.tp$iternext();void 0!==c;c=b.tp$iternext())if(Sk.misceval.richCompareBool(c,a,"Eq"))return!0;return!1},sq$concat(b){if(!(b instanceof a.deque))throw new Sk.builtin.TypeError("can only concatenate deque (not '"+Sk.abstr.typeName(b)+"') to deque");const c=this.$copy();for(let a=b.tp$iter(),d=a.tp$iternext();void 0!==d;d=a.tp$iternext())c.$push(d);return c},sq$length(){return this.tail-this.head&this.mask},sq$repeat(a){a=Sk.misceval.asIndexOrThrow(a,"can't multiply sequence by non-int of type '{tp$name}'");const b=this.tail-this.head&this.mask,c=this.$copy();let d;0>=a&&c.$clear();for(let e=1;e<a;e++)for(let a=0;a<b;a++)d=this.head+a&this.mask,c.$push(this.v[d]);return c},mp$subscript(a){a=Sk.misceval.asIndexOrThrow(a);const b=this.tail-this.head&this.mask;if(a>=b||a<-b)throw new Sk.builtin.IndexError("deque index out of range");const c=(0<=a?this.head:this.tail)+a&this.mask;return this.v[c]},mp$ass_subscript(a,b){a=Sk.misceval.asIndexOrThrow(a);const c=this.tail-this.head&this.mask;if(a>=c||a<-c)throw new Sk.builtin.IndexError("deque index out of range");void 0===b?this.del$item(a):this.set$item(a,b)},nb$inplace_add(a){for(this.maxlen=void 0,it=Sk.abstr.iter(a),i=it.tp$iternext();void 0!==i;i=it.tp$iternext())this.$push(i);return this},nb$inplace_multiply(a){a=Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError,"can't multiply sequence by non-int of type '{tp$name}'"),0>=a&&this.$clear();const b=this.$copy(),c=this.tail-this.head&this.mask;for(let d=1;d<a;d++)for(let a=0;a<c;a++){const c=this.head+a&this.mask;b.$push(this.v[c])}return this.v=b.v,this.head=b.head,this.tail=b.tail,this.mask=b.mask,this}},methods:{append:{$meth(a){return this.$push(a),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Add an element to the right side of the deque."},appendleft:{$meth(a){return this.$pushLeft(a),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Add an element to the left side of the deque."},clear:{$meth(){return this.$clear(),Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove all elements from the deque."},__copy__:{$meth(){return this.$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a shallow copy of a deque."},copy:{$meth(){return this.$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a shallow copy of a deque."},count:{$meth(a){const b=this.tail-this.head&this.mask;let c=0;for(let d=0;d<b;d++)Sk.misceval.richCompareBool(this.v[this.head+d&this.mask],a,"Eq")&&c++;return new Sk.builtin.int_(c)},$flags:{OneArg:!0},$textsig:null,$doc:"D.count(value) -> integer -- return number of occurrences of value"},extend:{$meth(a){return this.$extend(a),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Extend the right side of the deque with elements from the iterable"},extendleft:{$meth(a){for(it=Sk.abstr.iter(a),i=it.tp$iternext();void 0!==i;i=it.tp$iternext())this.$pushLeft(i);return Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Extend the left side of the deque with elements from the iterable"},index:{$meth(a,b,c){const d=this.$index(a,b,c);if(void 0!==d)return new Sk.builtin.int_(d);throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(a)+" is not in deque")},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"D.index(value, [start, [stop]]) -> integer -- return first index of value.\\nRaises ValueError if the value is not present."},insert:{$meth(a,b){a=Sk.misceval.asIndexOrThrow(a,"integer argument expected, got {tp$name}");const c=this.tail-this.head&this.mask;if(void 0!==this.maxlen&&c>=this.maxlen)throw new Sk.builtin.IndexError("deque already at its maximum size");a>c&&(a=c),a<=-c&&(a=0);const d=(0<=a?this.head:this.tail)+a&this.mask;let e=this.tail;for(this.tail=this.tail+1&this.mask;e!==d;){const a=e-1&this.mask;this.v[e]=this.v[a],e=a}return this.v[d]=b,this.head===this.tail&&this.$resize(this.v.length,this.v.length<<1),Sk.builtin.none.none$},$flags:{MinArgs:2,MaxArgs:2},$textsig:null,$doc:"D.insert(index, object) -- insert object before index"},pop:{$meth(){return this.$pop()},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove and return the rightmost element."},popleft:{$meth(){return this.$popLeft()},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove and return the leftmost element."},remove:{$meth(a){const b=this.$index(a);if(void 0===b)throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(a)+" is not in deque");const c=this.head+b&this.mask;for(let b=c;b!==this.tail;){const a=b+1&this.mask;this.v[b]=this.v[a],b=a}this.tail=this.tail-1&this.mask;var d=this.tail-this.head&this.mask;d<this.mask>>>1&&this.$resize(d,this.v.length>>>1)},$flags:{OneArg:!0},$textsig:null,$doc:"D.remove(value) -- remove first occurrence of value."},__reversed__:{$meth(){return new d(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.__reversed__() -- return a reverse iterator over the deque"},reverse:{$meth(){const c=this.head,d=this.tail,e=this.mask,f=this.tail-this.head&this.mask;for(let g=0;g<~~(f/2);g++){const f=d-g-1&e,a=c+g&e,b=this.v[f];this.v[f]=this.v[a],this.v[a]=b}return Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:null,$doc:"D.reverse() -- reverse *IN PLACE*"},rotate:{$meth(a){a=void 0===a?1:Sk.misceval.asIndexSized(a,Sk.builtin.OverflowError);const c=this.head,d=this.tail;if(0===a||c===d)return this;if(this.head=c-a&this.mask,this.tail=d-a&this.mask,0<a)for(let e=1;e<=a;e++){const f=c-e&this.mask,a=d-e&this.mask;this.v[f]=this.v[a],this.v[a]=void 0}else for(let e=0;e>a;e--){const f=d-e&this.mask,a=c-e&this.mask;this.v[f]=this.v[a],this.v[a]=void 0}return Sk.builtin.none.none$},$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:"Rotate the deque n steps to the right (default n=1).  If n is negative, rotates left."}},getsets:{maxlen:{$get(){return void 0===this.maxlen?Sk.builtin.none.none$:new Sk.builtin.int_(this.maxlen)},$doc:"maximum size of a deque or None if unbounded"}},proto:{$clear(){this.head=0,this.tail=0,this.mask=1,this.v=[,,]},$copy(){return new a.deque(this.v.slice(0),this.maxlen,this.head,this.tail,this.mask)},$extend(a){for(it=Sk.abstr.iter(a),i=it.tp$iternext();void 0!==i;i=it.tp$iternext())this.$push(i)},set$item(a,b){const c=(0<=a?this.head:this.tail)+a&this.mask;this.v[c]=b},del$item(a){const b=(0<=a?this.head:this.tail)+a&this.mask;for(let c=b;c!==this.tail;){const a=c+1&this.mask;this.v[c]=this.v[a],c=a}const c=this.tail-this.head&this.mask;this.tail=this.tail-1&this.mask,c<this.mask>>>1&&this.$resize(c,this.v.length>>>1)},$push(a){this.v[this.tail]=a,this.tail=this.tail+1&this.mask,this.head===this.tail&&this.$resize(this.v.length,this.v.length<<1);const b=this.tail-this.head&this.mask;return void 0!==this.maxlen&&b>this.maxlen&&this.$popLeft(),this},$pushLeft(a){this.head=this.head-1&this.mask,this.v[this.head]=a,this.head===this.tail&&this.$resize(this.v.length,this.v.length<<1);const b=this.tail-this.head&this.mask;return void 0!==this.maxlen&&b>this.maxlen&&this.$pop(),this},$pop(){if(this.head===this.tail)throw new Sk.builtin.IndexError("pop from an empty deque");this.tail=this.tail-1&this.mask;const a=this.v[this.tail];this.v[this.tail]=void 0;const b=this.tail-this.head&this.mask;return b<this.mask>>>1&&this.$resize(b,this.v.length>>>1),a},$popLeft(){if(this.head===this.tail)throw new Sk.builtin.IndexError("pop from an empty deque");const a=this.v[this.head];this.v[this.head]=void 0,this.head=this.head+1&this.mask;const b=this.tail-this.head&this.mask;return b<this.mask>>>1&&this.$resize(b,this.v.length>>>1),a},$resize(a,b){const c=this.head,d=this.mask;if(this.head=0,this.tail=a,this.mask=b-1,0===c)return void(this.v.length=b);const e=Array(b);for(let f=0;f<a;f++)e[f]=this.v[c+f&d];this.v=e},$index(a,b,c){const d=this.tail-this.head&this.mask;b=void 0===b?0:Sk.misceval.asIndexOrThrow(b),c=c===void 0?d:Sk.misceval.asIndexOrThrow(c);const e=this.head,f=this.mask,g=this.v,h=0<=b?b:b<-d?0:d+b;c=0<=c?c:c<-d?0:d+c;for(let d=h;d<c;d++)if(g[e+d&f]===a)return d},sk$asarray(){const a=[],b=this.tail-this.head&this.mask;for(let c=0;c<b;++c){const b=this.head+c&this.mask;a.push(this.v[b])}return a}}});const c=Sk.abstr.buildIteratorClass("_collections._deque_iterator",{constructor:function _deque_iterator(a){this.$index=0,this.dq=a.v,this.$length=a.tail-a.head&a.mask,this.$head=a.head,this.$tail=a.tail,this.$mask=a.mask},iternext(){if(!(this.$index>=this.$length)){const a=(0<=this.$index?this.$head:this.$tail)+this.$index&this.$mask;return this.$index++,this.dq[a]}},methods:{__length_hint__:{$meth:function __length_hint__(){return new Sk.builtin.int_(this.$length-this.$index)},$flags:{NoArgs:!0}}}}),d=Sk.abstr.buildIteratorClass("_collections._deque_reverse_iterator",{constructor:function _deque_reverse_iterator(a){this.$index=(a.tail-a.head&a.mask)-1,this.dq=a.v,this.$head=a.head,this.$mask=a.mask},iternext(){if(!(0>this.$index)){const a=this.$head+this.$index&this.$mask;return this.$index--,this.dq[a]}},methods:{__length_hint__:Sk.generic.iterReverseLengthHintMethodDef}}),e=new RegExp(/^[0-9].*/),f=new RegExp(/^[0-9_].*/),g=new RegExp(/^\\w*$/),h=/,/g,j=/\\s+/;return namedtuple.co_argcount=2,namedtuple.co_kwonlyargcount=3,namedtuple.$kwdefs=[Sk.builtin.bool.false$,Sk.builtin.none.none$,Sk.builtin.none.none$],namedtuple.co_varnames=["typename","field_names","rename","defaults","module"],a.namedtuple=new Sk.builtin.func(namedtuple),a}`,"src/lib/colorsys.py":`raise NotImplementedError("colorsys is not yet implemented in Skulpt")
`,"src/lib/commands.py":`raise NotImplementedError("commands is not yet implemented in Skulpt")
`,"src/lib/compileall.py":`raise NotImplementedError("compileall is not yet implemented in Skulpt")
`,"src/lib/compiler/__init__.py":`raise NotImplementedError("compiler is not yet implemented in Skulpt")
`,"src/lib/config/__init__.py":`raise NotImplementedError("config is not yet implemented in Skulpt")
`,"src/lib/contextlib.py":`raise NotImplementedError("contextlib is not yet implemented in Skulpt")
`,"src/lib/cookielib.py":`raise NotImplementedError("cookielib is not yet implemented in Skulpt")
`,"src/lib/copy.py":`"""
This file was modified from CPython.
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
2011, 2012, 2013, 2014, 2015 Python Software Foundation; All Rights Reserved
"""
import types
class Error(Exception):
    pass
error = Error 
class _EmptyClass:
    pass
try:
    long
except NameError:
    long = int

def copy(x):
    cls = type(x)
    if callable(x):
        return x
    copier = getattr(cls, "__copy__", None)
    if copier:
        return copier(x)
    if cls in (type(None), int, float, bool, str, tuple, type, frozenset, long):
        return x
    if (cls == list) or (cls == dict) or (cls == set) or (cls == slice):
        return cls(x)
    try:
        getstate = getattr(x, "__getstate__", None)
        setstate = getattr(x, "__setstate__", None)
        initargs = getattr(x, "__getinitargs__", None)
    except:
        reductor = False
    if getstate or setstate or initargs:
        raise NotImplementedError("Skulpt does not yet support copying with user-defined __getstate__, __setstate__ or __getinitargs__()")
    reductor = getattr(x, "__reduce_ex__", None)
    if reductor:
        rv = reductor(4)
    else:
        reductor = getattr(x, "__reduce__", None)
        if reductor:
            rv = reductor()
        elif str(cls)[1:6] == "class":
            copier = _copy_inst
            return copier(x)
        else:
            raise Error("un(shallow)copyable object of type %s" % cls)
    if isinstance(rv, str):
        return x
    return _reconstruct(x, rv, 0)

def _copy_inst(x):
    if hasattr(x, '__copy__'):
        return x.__copy__()
    if hasattr(x, '__getinitargs__'):
        args = x.__getinitargs__()
        y = x.__class__(*args)
    else:
        y = _EmptyClass()
        y.__class__ = x.__class__
    if hasattr(x, '__getstate__'):
        state = x.__getstate__()
    else:
        state = x.__dict__
    if hasattr(y, '__setstate__'):
        y.__setstate__(state)
    else:
        y.__dict__.update(state)
    return y

d = _deepcopy_dispatch = {}

def deepcopy(x, memo=None, _nil=[]):
    """Deep copy operation on arbitrary Python objects.
    See the module's __doc__ string for more info.
    """
    if memo is None:
        memo = {}
    idx = id(x)
    y = memo.get(idx, _nil)
    if y is not _nil:
        return y
    cls = type(x)
    try:
        getstate = getattr(x, "__getstate__", None)
        setstate = getattr(x, "__setstate__", None)
        initargs = getattr(x, "__getinitargs__", None)
    except:
        reductor = False
    if getstate or setstate or initargs:
        raise NotImplementedError("Skulpt does not yet support copying with user-defined __getstate__, __setstate__ or __getinitargs__()")
    copier = _deepcopy_dispatch.get(cls)
    if copier:
        y = copier(x, memo)
    elif str(cls)[1:6] == "class":
        copier = _deepcopy_dispatch["InstanceType"]
        y = copier(x, memo)
    else:
        try:
            issc = issubclass(cls, type)
        except TypeError: # cls is not a class (old Boost; see SF #502085)
            issc = 0
        if issc:
            y = _deepcopy_atomic(x, memo)
        else:
            copier = getattr(x, "__deepcopy__", None)
            if copier:
                y = copier(memo)
            else:
                reductor = getattr(x, "__reduce_ex__", None)
                if reductor:
                    rv = reductor(2)
                else:
                    reductor = getattr(x, "__reduce__", None)
                    if reductor:
                        rv = reductor()
                    else:
                        raise Error(
                            "un(deep)copyable object of type %s" % cls)
                y = _reconstruct(x, rv, 1, memo)
    memo[idx] = y
    _keep_alive(x, memo) # Make sure x lives at least as long as d
    return y

def _deepcopy_atomic(x, memo):
    return x
d[type(None)] = _deepcopy_atomic
# d[type(Ellipsis)] = _deepcopy_atomic
d[type(NotImplemented)] = _deepcopy_atomic
d[int] = _deepcopy_atomic
d[float] = _deepcopy_atomic
d[bool] = _deepcopy_atomic
d[complex] = _deepcopy_atomic
# d[bytes] = _deepcopy_atomic
d[str] = _deepcopy_atomic
# try:
# d[types.CodeType] = _deepcopy_atomic
# except AttributeError:
#   pass
d[type] = _deepcopy_atomic
# d[types.BuiltinFunctionType] = _deepcopy_atomic
d[types.FunctionType] = _deepcopy_atomic
# d[weakref.ref] = _deepcopy_atomic

def _deepcopy_list(x, memo):
    y = []
    memo[id(x)] = y
    for a in x:
        y.append(deepcopy(a, memo))
    return y
d[list] = _deepcopy_list

def _deepcopy_set(x, memo):
    result = set([])  # make empty set
    memo[id(x)] = result  # register this set in the memo for loop checking
    for a in x:   # go through elements of set
        result.add(deepcopy(a, memo))  # add the copied elements into the new set
    return result # return the new set
d[set] = _deepcopy_set

def _deepcopy_frozenset(x, memo):
    result = frozenset(_deepcopy_set(x,memo)) 
    memo[id(x)] = result 
    return result
d[frozenset] = _deepcopy_frozenset

def _deepcopy_tuple(x, memo):
    y = [deepcopy(a, memo) for a in x]
    # We're not going to put the tuple in the memo, but it's still important we
    # check for it, in case the tuple contains recursive mutable structures.
    try:
        return memo[id(x)]
    except KeyError:
        pass
    for k, j in zip(x, y):
        if k is not j:
            y = tuple(y)
            break
    else:
        y = x
    return y
d[tuple] = _deepcopy_tuple

def _deepcopy_dict(x, memo):
    y = {}
    memo[id(x)] = y
    for key, value in x.items():
        y[deepcopy(key, memo)] = deepcopy(value, memo)
    return y
d[dict] = _deepcopy_dict

# def _deepcopy_method(x, memo): # Copy instance methods
#     y = type(x)(x.im_func, deepcopy(x.im_self, memo), x.im_class);
#     return y
d[types.MethodType] = _deepcopy_atomic

def _deepcopy_inst(x, memo):
    if hasattr(x, '__deepcopy__'):
         return x.__deepcopy__(memo)
    if hasattr(x, '__getinitargs__'):
        args = x.__getinitargs__()
        args = deepcopy(args, memo)
        y = x.__class__(*args)
    else:
        y = _EmptyClass()
        y.__class__ = x.__class__
    memo[id(x)] = y
    if hasattr(x, '__getstate__'):
        state = x.__getstate__()
    else:
        state = x.__dict__
    state = deepcopy(state, memo)
    if hasattr(y, '__setstate__'):
        y.__setstate__(state)
    else:
        y.__dict__.update(state)
        return y
d["InstanceType"] = _deepcopy_inst

def _keep_alive(x, memo):
    """Keeps a reference to the object x in the memo.
    Because we remember objects by their id, we have
    to assure that possibly temporary objects are kept
    alive by referencing them.
    We store a reference at the id of the memo, which should
    normally not be used unless someone tries to deepcopy
    the memo itself...
    """
    try:
        memo[id(memo)].append(x)
    except KeyError:
        # aha, this is the first one :-)
        memo[id(memo)]=[x]

def _reconstruct(x, info, deep, memo=None):
    if isinstance(info, str):
        return x
    assert isinstance(info, tuple)
    if memo is None:
        memo = {}
    n = len(info)
    assert n in (2, 3, 4, 5)
    callable, args = info[:2]
    if n > 2:
        state = info[2]
    else:
        state = None
    if n > 3:
        listiter = info[3]
    else:
        listiter = None
    if n > 4:
        dictiter = info[4]
    else:
        dictiter = None
    if deep:
        args = deepcopy(args, memo)
    y = callable(*args)
    memo[id(x)] = y

    if state is not None:
        if deep:
            state = deepcopy(state, memo)
        if hasattr(y, '__setstate__'):
            y.__setstate__(state)
        else:
            if isinstance(state, tuple) and len(state) == 2:
                state, slotstate = state
            else:
                slotstate = None
            if state is not None:
                y.__dict__.update(state)
            if slotstate is not None:
                for key, value in slotstate.items():
                    setattr(y, key, value)

    if listiter is not None:
        for item in listiter:
            if deep:
                item = deepcopy(item, memo)
            y.append(item)
    if dictiter is not None:
        for key, value in dictiter:
            if deep:
                key = deepcopy(key, memo)
                value = deepcopy(value, memo)
            y[key] = value
    return y

del d

del types

# Helper for instance creation without calling __init__
class _EmptyClass:
    pass`,"src/lib/copy_reg.py":`raise NotImplementedError("copy_reg is not yet implemented in Skulpt")
`,"src/lib/csv.py":`raise NotImplementedError("csv is not yet implemented in Skulpt")
`,"src/lib/ctypes/__init__.py":`raise NotImplementedError("ctypes is not yet implemented in Skulpt")
`,"src/lib/ctypes/macholib/__init__.py":`raise NotImplementedError("macholib is not yet implemented in Skulpt")
`,"src/lib/curses/__init__.py":`raise NotImplementedError("curses is not yet implemented in Skulpt")
`,"src/lib/datetime.py":`"""Concrete date/time and related types -- prototype implemented in Python.

See http://www.zope.org/Members/fdrake/DateTimeWiki/FrontPage

See also http://dir.yahoo.com/Reference/calendars/

For a primer on DST, including many current DST rules, see
http://webexhibits.org/daylightsaving/

For more about DST than you ever wanted to know, see
ftp://elsie.nci.nih.gov/pub/

Sources for time zone and DST data: http://www.twinsun.com/tz/tz-link.htm

This was originally copied from the sandbox of the CPython CVS repository.
Thanks to Tim Peters for suggesting using it.

This was then copied from PyPy v5.1.0 into Skulpt by Meredydd Luff, removing
'from __future__ import division' (and replacing division operators accordingly)
and pickle support (which requires 'struct', which Skulpt does not currently
[as of 31/8/2016] have)
"""

import time as _time
import math as _math

# Python 2-vs-3 compat hack
import sys
unicode = unicode if sys.version_info < (3,) else str

_SENTINEL = object()

def _cmp(x, y):
    return 0 if x == y else 1 if x > y else -1

def _round(x):
    return int(_math.floor(x + 0.5) if x >= 0.0 else _math.ceil(x - 0.5))

MINYEAR = 1
MAXYEAR = 9999
_MINYEARFMT = 1900

_MAX_DELTA_DAYS = 999999999

# Utility functions, adapted from Python's Demo/classes/Dates.py, which
# also assumes the current Gregorian calendar indefinitely extended in
# both directions.  Difference:  Dates.py calls January 1 of year 0 day
# number 1.  The code here calls January 1 of year 1 day number 1.  This is
# to match the definition of the "proleptic Gregorian" calendar in Dershowitz
# and Reingold's "Calendrical Calculations", where it's the base calendar
# for all computations.  See the book for algorithms for converting between
# proleptic Gregorian ordinals and many other calendar systems.

_DAYS_IN_MONTH = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

_DAYS_BEFORE_MONTH = [-1]
dbm = 0
for dim in _DAYS_IN_MONTH[1:]:
    _DAYS_BEFORE_MONTH.append(dbm)
    dbm += dim
del dbm, dim

def _is_leap(year):
    "year -> 1 if leap year, else 0."
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def _days_before_year(year):
    "year -> number of days before January 1st of year."
    y = year - 1
    return y*365 + y//4 - y//100 + y//400

def _days_in_month(year, month):
    "year, month -> number of days in that month in that year."
    assert 1 <= month <= 12, month
    if month == 2 and _is_leap(year):
        return 29
    return _DAYS_IN_MONTH[month]

def _days_before_month(year, month):
    "year, month -> number of days in year preceding first day of month."
    assert 1 <= month <= 12, 'month must be in 1..12'
    return _DAYS_BEFORE_MONTH[month] + (month > 2 and _is_leap(year))

def _ymd2ord(year, month, day):
    "year, month, day -> ordinal, considering 01-Jan-0001 as day 1."
    assert 1 <= month <= 12, 'month must be in 1..12'
    dim = _days_in_month(year, month)
    assert 1 <= day <= dim, ('day must be in 1..%d' % dim)
    return (_days_before_year(year) +
            _days_before_month(year, month) +
            day)

_DI400Y = _days_before_year(401)    # number of days in 400 years
_DI100Y = _days_before_year(101)    #    "    "   "   " 100   "
_DI4Y   = _days_before_year(5)      #    "    "   "   "   4   "

# A 4-year cycle has an extra leap day over what we'd get from pasting
# together 4 single years.
assert _DI4Y == 4 * 365 + 1

# Similarly, a 400-year cycle has an extra leap day over what we'd get from
# pasting together 4 100-year cycles.
assert _DI400Y == 4 * _DI100Y + 1

# OTOH, a 100-year cycle has one fewer leap day than we'd get from
# pasting together 25 4-year cycles.
assert _DI100Y == 25 * _DI4Y - 1

_US_PER_US = 1
_US_PER_MS = 1000
_US_PER_SECOND = 1000000
_US_PER_MINUTE = 60000000
_SECONDS_PER_DAY = 24 * 3600
_US_PER_HOUR = 3600000000
_US_PER_DAY = 86400000000
_US_PER_WEEK = 604800000000

def _ord2ymd(n):
    "ordinal -> (year, month, day), considering 01-Jan-0001 as day 1."

    # n is a 1-based index, starting at 1-Jan-1.  The pattern of leap years
    # repeats exactly every 400 years.  The basic strategy is to find the
    # closest 400-year boundary at or before n, then work with the offset
    # from that boundary to n.  Life is much clearer if we subtract 1 from
    # n first -- then the values of n at 400-year boundaries are exactly
    # those divisible by _DI400Y:
    #
    #     D  M   Y            n              n-1
    #     -- --- ----        ----------     ----------------
    #     31 Dec -400        -_DI400Y       -_DI400Y -1
    #      1 Jan -399         -_DI400Y +1   -_DI400Y      400-year boundary
    #     ...
    #     30 Dec  000        -1             -2
    #     31 Dec  000         0             -1
    #      1 Jan  001         1              0            400-year boundary
    #      2 Jan  001         2              1
    #      3 Jan  001         3              2
    #     ...
    #     31 Dec  400         _DI400Y        _DI400Y -1
    #      1 Jan  401         _DI400Y +1     _DI400Y      400-year boundary
    n -= 1
    n400, n = divmod(n, _DI400Y)
    year = n400 * 400 + 1   # ..., -399, 1, 401, ...

    # Now n is the (non-negative) offset, in days, from January 1 of year, to
    # the desired date.  Now compute how many 100-year cycles precede n.
    # Note that it's possible for n100 to equal 4!  In that case 4 full
    # 100-year cycles precede the desired day, which implies the desired
    # day is December 31 at the end of a 400-year cycle.
    n100, n = divmod(n, _DI100Y)

    # Now compute how many 4-year cycles precede it.
    n4, n = divmod(n, _DI4Y)

    # And now how many single years.  Again n1 can be 4, and again meaning
    # that the desired day is December 31 at the end of the 4-year cycle.
    n1, n = divmod(n, 365)

    year += n100 * 100 + n4 * 4 + n1
    if n1 == 4 or n100 == 4:
        assert n == 0
        return year-1, 12, 31

    # Now the year is correct, and n is the offset from January 1.  We find
    # the month via an estimate that's either exact or one too large.
    leapyear = n1 == 3 and (n4 != 24 or n100 == 3)
    assert leapyear == _is_leap(year)
    month = (n + 50) >> 5
    preceding = _DAYS_BEFORE_MONTH[month] + (month > 2 and leapyear)
    if preceding > n:  # estimate is too large
        month -= 1
        preceding -= _DAYS_IN_MONTH[month] + (month == 2 and leapyear)
    n -= preceding
    assert 0 <= n < _days_in_month(year, month)

    # Now the year and month are correct, and n is the offset from the
    # start of that month:  we're done!
    return year, month, n+1

# Month and day names.  For localized versions, see the calendar module.
_MONTHNAMES = [None, "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
_DAYNAMES = [None, "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]


def _build_struct_time(y, m, d, hh, mm, ss, dstflag):
    wday = (_ymd2ord(y, m, d) + 6) % 7
    dnum = _days_before_month(y, m) + d
    return _time.struct_time((y, m, d, hh, mm, ss, wday, dnum, dstflag))

def _format_time(hh, mm, ss, us):
    # Skip trailing microseconds when us==0.
    result = "%02d:%02d:%02d" % (hh, mm, ss)
    if us:
        result += ".%06d" % us
    return result

# Correctly substitute for %z and %Z escapes in strftime formats.
def _wrap_strftime(object, format, timetuple):
    year = timetuple[0]
    if year < _MINYEARFMT:
        raise ValueError("year=%d is before %d; the datetime strftime() "
                         "methods require year >= %d" %
                         (year, _MINYEARFMT, _MINYEARFMT))
    # Don't call utcoffset() or tzname() unless actually needed.
    freplace = None  # the string to use for %f
    zreplace = None  # the string to use for %z
    Zreplace = None  # the string to use for %Z

    # Scan format for %z and %Z escapes, replacing as needed.
    newformat = []
    push = newformat.append
    i, n = 0, len(format)
    while i < n:
        ch = format[i]
        i += 1
        if ch == '%':
            if i < n:
                ch = format[i]
                i += 1
                if ch == 'f':
                    if freplace is None:
                        freplace = '%06d' % getattr(object,
                                                    'microsecond', 0)
                    newformat.append(freplace)
                elif ch == 'z':
                    if zreplace is None:
                        zreplace = ""
                        if hasattr(object, "_utcoffset"):
                            offset = object._utcoffset()
                            if offset is not None:
                                sign = '+'
                                if offset < 0:
                                    offset = -offset
                                    sign = '-'
                                h, m = divmod(offset, 60)
                                zreplace = '%c%02d%02d' % (sign, h, m)
                    assert '%' not in zreplace
                    newformat.append(zreplace)
                elif ch == 'Z':
                    if Zreplace is None:
                        Zreplace = ""
                        if hasattr(object, "tzname"):
                            s = object.tzname()
                            if s is not None:
                                # strftime is going to have at this: escape %
                                Zreplace = s.replace('%', '%%')
                    newformat.append(Zreplace)
                else:
                    push('%')
                    push(ch)
            else:
                push('%')
        else:
            push(ch)
    newformat = "".join(newformat)
    return _time.strftime(newformat, timetuple)

# Just raise TypeError if the arg isn't None or a string.
def _check_tzname(name):
    if name is not None and not isinstance(name, str):
        raise TypeError("tzinfo.tzname() must return None or string, "
                        "not '%s'" % type(name))

# name is the offset-producing method, "utcoffset" or "dst".
# offset is what it returned.
# If offset isn't None or timedelta, raises TypeError.
# If offset is None, returns None.
# Else offset is checked for being in range, and a whole # of minutes.
# If it is, its integer value is returned.  Else ValueError is raised.
def _check_utc_offset(name, offset):
    assert name in ("utcoffset", "dst")
    if offset is None:
        return
    if not isinstance(offset, timedelta):
        raise TypeError("tzinfo.%s() must return None "
                        "or timedelta, not '%s'" % (name, type(offset)))
    days = offset.days
    if days < -1 or days > 0:
        offset = 1440  # trigger out-of-range
    else:
        seconds = days * 86400 + offset.seconds
        minutes, seconds = divmod(seconds, 60)
        if seconds or offset.microseconds:
            raise ValueError("tzinfo.%s() must return a whole number "
                             "of minutes" % name)
        offset = minutes
    if not -1440 < offset < 1440:
        raise ValueError("%s()=%d, must be in -1439..1439" % (name, offset))
    return offset

def _check_int_field(value):
    if isinstance(value, int):
        return int(value)
    if not isinstance(value, float):
        try:
            value = value.__int__()
        except AttributeError:
            pass
        else:
            if isinstance(value, int):
                return int(value)
            raise TypeError('__int__ method should return an integer')
        raise TypeError('an integer is required')
    raise TypeError('integer argument expected, got float')

def _check_date_fields(year, month, day):
    year = _check_int_field(year)
    month = _check_int_field(month)
    day = _check_int_field(day)
    if not MINYEAR <= year <= MAXYEAR:
        raise ValueError('year must be in %d..%d' % (MINYEAR, MAXYEAR), year)
    if not 1 <= month <= 12:
        raise ValueError('month must be in 1..12', month)
    dim = _days_in_month(year, month)
    if not 1 <= day <= dim:
        raise ValueError('day must be in 1..%d' % dim, day)
    return year, month, day

def _check_time_fields(hour, minute, second, microsecond):
    hour = _check_int_field(hour)
    minute = _check_int_field(minute)
    second = _check_int_field(second)
    microsecond = _check_int_field(microsecond)
    if not 0 <= hour <= 23:
        raise ValueError('hour must be in 0..23', hour)
    if not 0 <= minute <= 59:
        raise ValueError('minute must be in 0..59', minute)
    if not 0 <= second <= 59:
        raise ValueError('second must be in 0..59', second)
    if not 0 <= microsecond <= 999999:
        raise ValueError('microsecond must be in 0..999999', microsecond)
    return hour, minute, second, microsecond

def _check_tzinfo_arg(tz):
    if tz is not None and not isinstance(tz, tzinfo):
        raise TypeError("tzinfo argument must be None or of a tzinfo subclass")


# Notes on comparison:  In general, datetime module comparison operators raise
# TypeError when they don't know how to do a comparison themself.  If they
# returned NotImplemented instead, comparison could (silently) fall back to
# the default compare-objects-by-comparing-their-memory-addresses strategy,
# and that's not helpful.  There are two exceptions:
#
# 1. For date and datetime, if the other object has a "timetuple" attr,
#    NotImplemented is returned.  This is a hook to allow other kinds of
#    datetime-like objects a chance to intercept the comparison.
#
# 2. Else __eq__ and __ne__ return False and True, respectively.  This is
#    so opertaions like
#
#        x == y
#        x != y
#        x in sequence
#        x not in sequence
#        dict[x] = y
#
#    don't raise annoying TypeErrors just because a datetime object
#    is part of a heterogeneous collection.  If there's no known way to
#    compare X to a datetime, saying they're not equal is reasonable.

def _cmperror(x, y):
    raise TypeError("can't compare '%s' to '%s'" % (
                    type(x).__name__, type(y).__name__))

def _normalize_pair(hi, lo, factor):
    if not 0 <= lo <= factor-1:
        inc, lo = divmod(lo, factor)
        hi += inc
    return hi, lo

def _normalize_datetime(y, m, d, hh, mm, ss, us, ignore_overflow=False):
    # Normalize all the inputs, and store the normalized values.
    ss, us = _normalize_pair(ss, us, 1000000)
    mm, ss = _normalize_pair(mm, ss, 60)
    hh, mm = _normalize_pair(hh, mm, 60)
    d, hh = _normalize_pair(d, hh, 24)
    y, m, d = _normalize_date(y, m, d, ignore_overflow)
    return y, m, d, hh, mm, ss, us

def _normalize_date(year, month, day, ignore_overflow=False):
    # That was easy.  Now it gets muddy:  the proper range for day
    # can't be determined without knowing the correct month and year,
    # but if day is, e.g., plus or minus a million, the current month
    # and year values make no sense (and may also be out of bounds
    # themselves).
    # Saying 12 months == 1 year should be non-controversial.
    if not 1 <= month <= 12:
        year, month = _normalize_pair(year, month-1, 12)
        month += 1
        assert 1 <= month <= 12

    # Now only day can be out of bounds (year may also be out of bounds
    # for a datetime object, but we don't care about that here).
    # If day is out of bounds, what to do is arguable, but at least the
    # method here is principled and explainable.
    dim = _days_in_month(year, month)
    if not 1 <= day <= dim:
        # Move day-1 days from the first of the month.  First try to
        # get off cheap if we're only one day out of range (adjustments
        # for timezone alone can't be worse than that).
        if day == 0:    # move back a day
            month -= 1
            if month > 0:
                day = _days_in_month(year, month)
            else:
                year, month, day = year-1, 12, 31
        elif day == dim + 1:    # move forward a day
            month += 1
            day = 1
            if month > 12:
                month = 1
                year += 1
        else:
            ordinal = _ymd2ord(year, month, 1) + (day - 1)
            year, month, day = _ord2ymd(ordinal)

    if not ignore_overflow and not MINYEAR <= year <= MAXYEAR:
        raise OverflowError("date value out of range")
    return year, month, day

def _accum(tag, sofar, num, factor, leftover):
    if isinstance(num, int):
        prod = num * factor
        rsum = sofar + prod
        return rsum, leftover
    if isinstance(num, float):
        fracpart, intpart = _math.modf(num)
        prod = int(intpart) * factor
        rsum = sofar + prod
        if fracpart == 0.0:
            return rsum, leftover
        assert isinstance(factor, int)
        fracpart, intpart = _math.modf(factor * fracpart)
        rsum += int(intpart)
        return rsum, leftover + fracpart
    raise TypeError("unsupported type for timedelta %s component: %s" %
                    (tag, type(num)))

class timedelta(object):
    """Represent the difference between two datetime objects.

    Supported operators:

    - add, subtract timedelta
    - unary plus, minus, abs
    - compare to timedelta
    - multiply, divide by int/long

    In addition, datetime supports subtraction of two datetime objects
    returning a timedelta, and addition or subtraction of a datetime
    and a timedelta giving a datetime.

    Representation: (days, seconds, microseconds).  Why?  Because I
    felt like it.
    """
    __slots__ = '_days', '_seconds', '_microseconds', '_hashcode'

    def __new__(cls, days=_SENTINEL, seconds=_SENTINEL, microseconds=_SENTINEL,
                milliseconds=_SENTINEL, minutes=_SENTINEL, hours=_SENTINEL, weeks=_SENTINEL):
        x = 0
        leftover = 0.0
        if microseconds is not _SENTINEL:
            x, leftover = _accum("microseconds", x, microseconds, _US_PER_US, leftover)
        if milliseconds is not _SENTINEL:
            x, leftover = _accum("milliseconds", x, milliseconds, _US_PER_MS, leftover)
        if seconds is not _SENTINEL:
            x, leftover = _accum("seconds", x, seconds, _US_PER_SECOND, leftover)
        if minutes is not _SENTINEL:
            x, leftover = _accum("minutes", x, minutes, _US_PER_MINUTE, leftover)
        if hours is not _SENTINEL:
            x, leftover = _accum("hours", x, hours, _US_PER_HOUR, leftover)
        if days is not _SENTINEL:
            x, leftover = _accum("days", x, days, _US_PER_DAY, leftover)
        if weeks is not _SENTINEL:
            x, leftover = _accum("weeks", x, weeks, _US_PER_WEEK, leftover)
        if leftover != 0.0:
            x += _round(leftover)
        return cls._from_microseconds(x)

    @classmethod
    def _from_microseconds(cls, us):
        s, us = divmod(us, _US_PER_SECOND)
        d, s = divmod(s, _SECONDS_PER_DAY)
        return cls._create(d, s, us, False)

    @classmethod
    def _create(cls, d, s, us, normalize):
        if normalize:
            s, us = _normalize_pair(s, us, 1000000)
            d, s = _normalize_pair(d, s, 24*3600)

        if not -_MAX_DELTA_DAYS <= d <= _MAX_DELTA_DAYS:
            raise OverflowError("days=%d; must have magnitude <= %d" % (d, _MAX_DELTA_DAYS))

        self = object.__new__(cls)
        self._days = d
        self._seconds = s
        self._microseconds = us
        self._hashcode = -1
        return self

    def _to_microseconds(self):
        return ((self._days * _SECONDS_PER_DAY + self._seconds) * _US_PER_SECOND +
                self._microseconds)

    def __repr__(self):
        module = "datetime." if self.__class__ is timedelta else ""
        if self._microseconds:
            return "%s(%d, %d, %d)" % (module + self.__class__.__name__,
                                       self._days,
                                       self._seconds,
                                       self._microseconds)
        if self._seconds:
            return "%s(%d, %d)" % (module + self.__class__.__name__,
                                   self._days,
                                   self._seconds)
        return "%s(%d)" % (module + self.__class__.__name__, self._days)

    def __str__(self):
        mm, ss = divmod(self._seconds, 60)
        hh, mm = divmod(mm, 60)
        s = "%d:%02d:%02d" % (hh, mm, ss)
        if self._days:
            def plural(n):
                return n, abs(n) != 1 and "s" or ""
            s = ("%d day%s, " % plural(self._days)) + s
        if self._microseconds:
            s = s + ".%06d" % self._microseconds
        return s

    def total_seconds(self):
        """Total seconds in the duration."""
        return self._to_microseconds() / 10.0**6

    # Read-only field accessors
    @property
    def days(self):
        """days"""
        return self._days

    @property
    def seconds(self):
        """seconds"""
        return self._seconds

    @property
    def microseconds(self):
        """microseconds"""
        return self._microseconds

    def __add__(self, other):
        if isinstance(other, timedelta):
            # for CPython compatibility, we cannot use
            # our __class__ here, but need a real timedelta
            return timedelta._create(self._days + other._days,
                                     self._seconds + other._seconds,
                                     self._microseconds + other._microseconds,
                                     True)
        return NotImplemented

    def __sub__(self, other):
        if isinstance(other, timedelta):
            # for CPython compatibility, we cannot use
            # our __class__ here, but need a real timedelta
            return timedelta._create(self._days - other._days,
                                     self._seconds - other._seconds,
                                     self._microseconds - other._microseconds,
                                     True)
        return NotImplemented

    def __neg__(self):
        # for CPython compatibility, we cannot use
        # our __class__ here, but need a real timedelta
        return timedelta._create(-self._days,
                                 -self._seconds,
                                 -self._microseconds,
                                 True)

    def __pos__(self):
        # for CPython compatibility, we cannot use
        # our __class__ here, but need a real timedelta
        return timedelta._create(self._days,
                                 self._seconds,
                                 self._microseconds,
                                 False)

    def __abs__(self):
        if self._days < 0:
            return -self
        else:
            return self

    def __mul__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        usec = self._to_microseconds()
        return timedelta._from_microseconds(usec * other)

    __rmul__ = __mul__

    def __div__(self, other):
        if not isinstance(other, int):
            return NotImplemented
        usec = self._to_microseconds()
        return timedelta._from_microseconds(usec // other)

    __floordiv__ = __div__

    # Comparisons of timedelta objects with other.

    def __eq__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) == 0
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) != 0
        else:
            return True

    def __le__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) <= 0
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) < 0
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) >= 0
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, timedelta):
            return self._cmp(other) > 0
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, timedelta)
        return _cmp(self._getstate(), other._getstate())

    def __hash__(self):
        if self._hashcode == -1:
            self._hashcode = hash(self._getstate())
        return self._hashcode

    def __nonzero__(self):
        return (self._days != 0 or
                self._seconds != 0 or
                self._microseconds != 0)

timedelta.min = timedelta(-_MAX_DELTA_DAYS)
timedelta.max = timedelta(_MAX_DELTA_DAYS, 24*3600-1, 1000000-1)
timedelta.resolution = timedelta(microseconds=1)

class date(object):
    """Concrete date type.

    Constructors:

    __new__()
    fromtimestamp()
    today()
    fromordinal()

    Operators:

    __repr__, __str__
    __cmp__, __hash__
    __add__, __radd__, __sub__ (add/radd only with timedelta arg)

    Methods:

    timetuple()
    toordinal()
    weekday()
    isoweekday(), isocalendar(), isoformat()
    ctime()
    strftime()

    Properties (readonly):
    year, month, day
    """
    __slots__ = '_year', '_month', '_day', '_hashcode'

    def __new__(cls, year, month=None, day=None):
        """Constructor.

        Arguments:

        year, month, day (required, base 1)
        """
        year, month, day = _check_date_fields(year, month, day)
        self = object.__new__(cls)
        self._year = year
        self._month = month
        self._day = day
        self._hashcode = -1
        return self

    # Additional constructors

    @classmethod
    def fromtimestamp(cls, t):
        "Construct a date from a POSIX timestamp (like time.time())."
        y, m, d, hh, mm, ss, weekday, jday, dst = _time.localtime(t)
        return cls(y, m, d)

    @classmethod
    def today(cls):
        "Construct a date from time.time()."
        t = _time.time()
        return cls.fromtimestamp(t)

    @classmethod
    def fromordinal(cls, n):
        """Contruct a date from a proleptic Gregorian ordinal.

        January 1 of year 1 is day 1.  Only the year, month and day are
        non-zero in the result.
        """
        y, m, d = _ord2ymd(n)
        return cls(y, m, d)

    # Conversions to string

    def __repr__(self):
        """Convert to formal string, for repr().

        >>> dt = datetime(2010, 1, 1)
        >>> repr(dt)
        'datetime.datetime(2010, 1, 1, 0, 0)'

        >>> dt = datetime(2010, 1, 1, tzinfo=timezone.utc)
        >>> repr(dt)
        'datetime.datetime(2010, 1, 1, 0, 0, tzinfo=datetime.timezone.utc)'
        """
        module = "datetime." if self.__class__ is date else ""
        return "%s(%d, %d, %d)" % (module + self.__class__.__name__,
                                   self._year,
                                   self._month,
                                   self._day)

    # XXX These shouldn't depend on time.localtime(), because that
    # clips the usable dates to [1970 .. 2038).  At least ctime() is
    # easily done without using strftime() -- that's better too because
    # strftime("%c", ...) is locale specific.

    def ctime(self):
        "Return ctime() style string."
        weekday = self.toordinal() % 7 or 7
        return "%s %s %2d 00:00:00 %04d" % (
            _DAYNAMES[weekday],
            _MONTHNAMES[self._month],
            self._day, self._year)

    def strftime(self, format):
        "Format using strftime()."
        return _wrap_strftime(self, format, self.timetuple())

    def __format__(self, fmt):
        if not isinstance(fmt, (str, unicode)):
            raise ValueError("__format__ expects str or unicode, not %s" %
                             fmt.__class__.__name__)
        if len(fmt) != 0:
            return self.strftime(fmt)
        return str(self)

    def isoformat(self):
        """Return the date formatted according to ISO.

        This is 'YYYY-MM-DD'.

        References:
        - http://www.w3.org/TR/NOTE-datetime
        - http://www.cl.cam.ac.uk/~mgk25/iso-time.html
        """
        return "%04d-%02d-%02d" % (self._year, self._month, self._day)

    __str__ = isoformat

    # Read-only field accessors
    @property
    def year(self):
        """year (1-9999)"""
        return self._year

    @property
    def month(self):
        """month (1-12)"""
        return self._month

    @property
    def day(self):
        """day (1-31)"""
        return self._day

    # Standard conversions, __cmp__, __hash__ (and helpers)

    def timetuple(self):
        "Return local time tuple compatible with time.localtime()."
        return _build_struct_time(self._year, self._month, self._day,
                                  0, 0, 0, -1)

    def toordinal(self):
        """Return proleptic Gregorian ordinal for the year, month and day.

        January 1 of year 1 is day 1.  Only the year, month and day values
        contribute to the result.
        """
        return _ymd2ord(self._year, self._month, self._day)

    def replace(self, year=None, month=None, day=None):
        """Return a new date with new values for the specified fields."""
        if year is None:
            year = self._year
        if month is None:
            month = self._month
        if day is None:
            day = self._day
        return date(year, month, day)

    # Comparisons of date objects with other.

    def __eq__(self, other):
        if isinstance(other, date):
            return self._cmp(other) == 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, date):
            return self._cmp(other) != 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            return True

    def __le__(self, other):
        if isinstance(other, date):
            return self._cmp(other) <= 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, date):
            return self._cmp(other) < 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, date):
            return self._cmp(other) >= 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, date):
            return self._cmp(other) > 0
        elif hasattr(other, "timetuple"):
            return NotImplemented
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, date)
        y, m, d = self._year, self._month, self._day
        y2, m2, d2 = other._year, other._month, other._day
        return _cmp((y, m, d), (y2, m2, d2))

    def __hash__(self):
        "Hash."
        if self._hashcode == -1:
            self._hashcode = hash(self._getstate())
        return self._hashcode

    # Computations

    def _add_timedelta(self, other, factor):
        y, m, d = _normalize_date(
            self._year,
            self._month,
            self._day + other.days * factor)
        return date(y, m, d)

    def __add__(self, other):
        "Add a date to a timedelta."
        if isinstance(other, timedelta):
            return self._add_timedelta(other, 1)
        return NotImplemented

    __radd__ = __add__

    def __sub__(self, other):
        """Subtract two dates, or a date and a timedelta."""
        if isinstance(other, date):
            days1 = self.toordinal()
            days2 = other.toordinal()
            return timedelta._create(days1 - days2, 0, 0, False)
        if isinstance(other, timedelta):
            return self._add_timedelta(other, -1)
        return NotImplemented

    def weekday(self):
        "Return day of the week, where Monday == 0 ... Sunday == 6."
        return (self.toordinal() + 6) % 7

    # Day-of-the-week and week-of-the-year, according to ISO

    def isoweekday(self):
        "Return day of the week, where Monday == 1 ... Sunday == 7."
        # 1-Jan-0001 is a Monday
        return self.toordinal() % 7 or 7

    def isocalendar(self):
        """Return a 3-tuple containing ISO year, week number, and weekday.

        The first ISO week of the year is the (Mon-Sun) week
        containing the year's first Thursday; everything else derives
        from that.

        The first week is 1; Monday is 1 ... Sunday is 7.

        ISO calendar algorithm taken from
        http://www.phys.uu.nl/~vgent/calendar/isocalendar.htm
        """
        year = self._year
        week1monday = _isoweek1monday(year)
        today = _ymd2ord(self._year, self._month, self._day)
        # Internally, week and day have origin 0
        week, day = divmod(today - week1monday, 7)
        if week < 0:
            year -= 1
            week1monday = _isoweek1monday(year)
            week, day = divmod(today - week1monday, 7)
        elif week >= 52:
            if today >= _isoweek1monday(year+1):
                year += 1
                week = 0
        return year, week+1, day+1

_date_class = date  # so functions w/ args named "date" can get at the class

date.min = date(1, 1, 1)
date.max = date(9999, 12, 31)
date.resolution = timedelta(days=1)

class tzinfo(object):
    """Abstract base class for time zone info classes.

    Subclasses must override the name(), utcoffset() and dst() methods.
    """
    __slots__ = ()

    def tzname(self, dt):
        "datetime -> string name of time zone."
        raise NotImplementedError("tzinfo subclass must override tzname()")

    def utcoffset(self, dt):
        "datetime -> minutes east of UTC (negative for west of UTC)"
        raise NotImplementedError("tzinfo subclass must override utcoffset()")

    def dst(self, dt):
        """datetime -> DST offset in minutes east of UTC.

        Return 0 if DST not in effect.  utcoffset() must include the DST
        offset.
        """
        raise NotImplementedError("tzinfo subclass must override dst()")

    def fromutc(self, dt):
        "datetime in UTC -> datetime in local time."

        if not isinstance(dt, datetime):
            raise TypeError("fromutc() requires a datetime argument")
        if dt.tzinfo is not self:
            raise ValueError("dt.tzinfo is not self")

        dtoff = dt.utcoffset()
        if dtoff is None:
            raise ValueError("fromutc() requires a non-None utcoffset() "
                             "result")

        # See the long comment block at the end of this file for an
        # explanation of this algorithm.
        dtdst = dt.dst()
        if dtdst is None:
            raise ValueError("fromutc() requires a non-None dst() result")
        delta = dtoff - dtdst
        if delta:
            dt = dt + delta
            dtdst = dt.dst()
            if dtdst is None:
                raise ValueError("fromutc(): dt.dst gave inconsistent "
                                 "results; cannot convert")
        if dtdst:
            return dt + dtdst
        else:
            return dt

_tzinfo_class = tzinfo

class time(object):
    """Time with time zone.

    Constructors:

    __new__()

    Operators:

    __repr__, __str__
    __cmp__, __hash__

    Methods:

    strftime()
    isoformat()
    utcoffset()
    tzname()
    dst()

    Properties (readonly):
    hour, minute, second, microsecond, tzinfo
    """
    __slots__ = '_hour', '_minute', '_second', '_microsecond', '_tzinfo', '_hashcode'

    def __new__(cls, hour=0, minute=0, second=0, microsecond=0, tzinfo=None):
        """Constructor.

        Arguments:

        hour, minute (required)
        second, microsecond (default to zero)
        tzinfo (default to None)
        """
        hour, minute, second, microsecond = _check_time_fields(
            hour, minute, second, microsecond)
        _check_tzinfo_arg(tzinfo)
        self = object.__new__(cls)
        self._hour = hour
        self._minute = minute
        self._second = second
        self._microsecond = microsecond
        self._tzinfo = tzinfo
        self._hashcode = -1
        return self

    # Read-only field accessors
    @property
    def hour(self):
        """hour (0-23)"""
        return self._hour

    @property
    def minute(self):
        """minute (0-59)"""
        return self._minute

    @property
    def second(self):
        """second (0-59)"""
        return self._second

    @property
    def microsecond(self):
        """microsecond (0-999999)"""
        return self._microsecond

    @property
    def tzinfo(self):
        """timezone info object"""
        return self._tzinfo

    # Standard conversions, __hash__ (and helpers)

    # Comparisons of time objects with other.

    def __eq__(self, other):
        if isinstance(other, time):
            return self._cmp(other) == 0
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, time):
            return self._cmp(other) != 0
        else:
            return True

    def __le__(self, other):
        if isinstance(other, time):
            return self._cmp(other) <= 0
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, time):
            return self._cmp(other) < 0
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, time):
            return self._cmp(other) >= 0
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, time):
            return self._cmp(other) > 0
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, time)
        mytz = self._tzinfo
        ottz = other._tzinfo
        myoff = otoff = None

        if mytz is ottz:
            base_compare = True
        else:
            myoff = self._utcoffset()
            otoff = other._utcoffset()
            base_compare = myoff == otoff

        if base_compare:
            return _cmp((self._hour, self._minute, self._second,
                         self._microsecond),
                        (other._hour, other._minute, other._second,
                         other._microsecond))
        if myoff is None or otoff is None:
            raise TypeError("can't compare offset-naive and offset-aware times")
        myhhmm = self._hour * 60 + self._minute - myoff
        othhmm = other._hour * 60 + other._minute - otoff
        return _cmp((myhhmm, self._second, self._microsecond),
                    (othhmm, other._second, other._microsecond))

    def __hash__(self):
        """Hash."""
        if self._hashcode == -1:
            tzoff = self._utcoffset()
            if not tzoff:  # zero or None
                self._hashcode = hash(self._getstate()[0])
            else:
                h, m = divmod(self.hour * 60 + self.minute - tzoff, 60)
                if 0 <= h < 24:
                    self._hashcode = hash(time(h, m, self.second, self.microsecond))
                else:
                    self._hashcode = hash((h, m, self.second, self.microsecond))
        return self._hashcode

    # Conversion to string

    def _tzstr(self, sep=":"):
        """Return formatted timezone offset (+xx:xx) or None."""
        off = self._utcoffset()
        if off is not None:
            if off < 0:
                sign = "-"
                off = -off
            else:
                sign = "+"
            hh, mm = divmod(off, 60)
            assert 0 <= hh < 24
            off = "%s%02d%s%02d" % (sign, hh, sep, mm)
        return off

    def __repr__(self):
        """Convert to formal string, for repr()."""
        if self._microsecond != 0:
            s = ", %d, %d" % (self._second, self._microsecond)
        elif self._second != 0:
            s = ", %d" % self._second
        else:
            s = ""
        module = "datetime." if self.__class__ is time else ""
        s= "%s(%d, %d%s)" % (module + self.__class__.__name__,
                             self._hour, self._minute, s)
        if self._tzinfo is not None:
            assert s[-1:] == ")"
            s = s[:-1] + ", tzinfo=%r" % self._tzinfo + ")"
        return s

    def isoformat(self):
        """Return the time formatted according to ISO.

        This is 'HH:MM:SS.mmmmmm+zz:zz', or 'HH:MM:SS+zz:zz' if
        self.microsecond == 0.
        """
        s = _format_time(self._hour, self._minute, self._second,
                         self._microsecond)
        tz = self._tzstr()
        if tz:
            s += tz
        return s

    __str__ = isoformat

    def strftime(self, format):
        """Format using strftime().  The date part of the timestamp passed
        to underlying strftime should not be used.
        """
        # The year must be >= _MINYEARFMT else Python's strftime implementation
        # can raise a bogus exception.
        timetuple = (1900, 1, 1,
                     self._hour, self._minute, self._second,
                     0, 1, -1)
        return _wrap_strftime(self, format, timetuple)

    def __format__(self, fmt):
        if not isinstance(fmt, (str, unicode)):
            raise ValueError("__format__ expects str or unicode, not %s" %
                             fmt.__class__.__name__)
        if len(fmt) != 0:
            return self.strftime(fmt)
        return str(self)

    # Timezone functions

    def utcoffset(self):
        """Return the timezone offset in minutes east of UTC (negative west of
        UTC)."""
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(None)
        offset = _check_utc_offset("utcoffset", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _utcoffset(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(None)
        offset = _check_utc_offset("utcoffset", offset)
        return offset

    def tzname(self):
        """Return the timezone name.

        Note that the name is 100% informational -- there's no requirement that
        it mean anything in particular. For example, "GMT", "UTC", "-500",
        "-5:00", "EDT", "US/Eastern", "America/New York" are all valid replies.
        """
        if self._tzinfo is None:
            return None
        name = self._tzinfo.tzname(None)
        _check_tzname(name)
        return name

    def dst(self):
        """Return 0 if DST is not in effect, or the DST offset (in minutes
        eastward) if DST is in effect.

        This is purely informational; the DST offset has already been added to
        the UTC offset returned by utcoffset() if applicable, so there's no
        need to consult dst() unless you're interested in displaying the DST
        info.
        """
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(None)
        offset = _check_utc_offset("dst", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _dst(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(None)
        offset = _check_utc_offset("dst", offset)
        return offset

    def replace(self, hour=None, minute=None, second=None, microsecond=None,
                tzinfo=True):
        """Return a new time with new values for the specified fields."""
        if hour is None:
            hour = self.hour
        if minute is None:
            minute = self.minute
        if second is None:
            second = self.second
        if microsecond is None:
            microsecond = self.microsecond
        if tzinfo is True:
            tzinfo = self.tzinfo
        return time(hour, minute, second, microsecond, tzinfo)

    def __nonzero__(self):
        if self.second or self.microsecond:
            return True
        offset = self._utcoffset() or 0
        return self.hour * 60 + self.minute != offset

_time_class = time  # so functions w/ args named "time" can get at the class

time.min = time(0, 0, 0)
time.max = time(23, 59, 59, 999999)
time.resolution = timedelta(microseconds=1)

class datetime(date):
    """datetime(year, month, day[, hour[, minute[, second[, microsecond[,tzinfo]]]]])

    The year, month and day arguments are required. tzinfo may be None, or an
    instance of a tzinfo subclass. The remaining arguments may be ints or longs.
    """
    __slots__ = date.__slots__ + time.__slots__

    def __new__(cls, year, month=None, day=None, hour=0, minute=0, second=0,
                microsecond=0, tzinfo=None):
        year, month, day = _check_date_fields(year, month, day)
        hour, minute, second, microsecond = _check_time_fields(
            hour, minute, second, microsecond)
        _check_tzinfo_arg(tzinfo)
        self = object.__new__(cls)
        self._year = year
        self._month = month
        self._day = day
        self._hour = hour
        self._minute = minute
        self._second = second
        self._microsecond = microsecond
        self._tzinfo = tzinfo
        self._hashcode = -1
        return self

    # Read-only field accessors
    @property
    def hour(self):
        """hour (0-23)"""
        return self._hour

    @property
    def minute(self):
        """minute (0-59)"""
        return self._minute

    @property
    def second(self):
        """second (0-59)"""
        return self._second

    @property
    def microsecond(self):
        """microsecond (0-999999)"""
        return self._microsecond

    @property
    def tzinfo(self):
        """timezone info object"""
        return self._tzinfo

    @classmethod
    def fromtimestamp(cls, timestamp, tz=None):
        """Construct a datetime from a POSIX timestamp (like time.time()).

        A timezone info object may be passed in as well.
        """
        _check_tzinfo_arg(tz)
        converter = _time.localtime if tz is None else _time.gmtime
        self = cls._from_timestamp(converter, timestamp, tz)
        if tz is not None:
            self = tz.fromutc(self)
        return self

    @classmethod
    def utcfromtimestamp(cls, t):
        "Construct a UTC datetime from a POSIX timestamp (like time.time())."
        return cls._from_timestamp(_time.gmtime, t, None)

    @classmethod
    def _from_timestamp(cls, converter, timestamp, tzinfo):
        t_full = timestamp
        timestamp = int(_math.floor(timestamp))
        frac = t_full - timestamp
        us = _round(frac * 1e6)

        # If timestamp is less than one microsecond smaller than a
        # full second, us can be rounded up to 1000000.  In this case,
        # roll over to seconds, otherwise, ValueError is raised
        # by the constructor.
        if us == 1000000:
            timestamp += 1
            us = 0
        y, m, d, hh, mm, ss, weekday, jday, dst = converter(timestamp)
        ss = min(ss, 59)    # clamp out leap seconds if the platform has them
        return cls(y, m, d, hh, mm, ss, us, tzinfo)

    @classmethod
    def now(cls, tz=None):
        "Construct a datetime from time.time() and optional time zone info."
        t = _time.time()
        return cls.fromtimestamp(t, tz)

    @classmethod
    def utcnow(cls):
        "Construct a UTC datetime from time.time()."
        t = _time.time()
        return cls.utcfromtimestamp(t)

    @classmethod
    def combine(cls, date, time):
        "Construct a datetime from a given date and a given time."
        if not isinstance(date, _date_class):
            raise TypeError("date argument must be a date instance")
        if not isinstance(time, _time_class):
            raise TypeError("time argument must be a time instance")
        return cls(date.year, date.month, date.day,
                   time.hour, time.minute, time.second, time.microsecond,
                   time.tzinfo)

    def timetuple(self):
        "Return local time tuple compatible with time.localtime()."
        dst = self._dst()
        if dst is None:
            dst = -1
        elif dst:
            dst = 1
        return _build_struct_time(self.year, self.month, self.day,
                                  self.hour, self.minute, self.second,
                                  dst)

    def utctimetuple(self):
        "Return UTC time tuple compatible with time.gmtime()."
        y, m, d = self.year, self.month, self.day
        hh, mm, ss = self.hour, self.minute, self.second
        offset = self._utcoffset()
        if offset:  # neither None nor 0
            mm -= offset
            y, m, d, hh, mm, ss, _ = _normalize_datetime(
                y, m, d, hh, mm, ss, 0, ignore_overflow=True)
        return _build_struct_time(y, m, d, hh, mm, ss, 0)

    def date(self):
        "Return the date part."
        return date(self._year, self._month, self._day)

    def time(self):
        "Return the time part, with tzinfo None."
        return time(self.hour, self.minute, self.second, self.microsecond)

    def timetz(self):
        "Return the time part, with same tzinfo."
        return time(self.hour, self.minute, self.second, self.microsecond,
                    self._tzinfo)

    def replace(self, year=None, month=None, day=None, hour=None,
                minute=None, second=None, microsecond=None, tzinfo=True):
        """Return a new datetime with new values for the specified fields."""
        if year is None:
            year = self.year
        if month is None:
            month = self.month
        if day is None:
            day = self.day
        if hour is None:
            hour = self.hour
        if minute is None:
            minute = self.minute
        if second is None:
            second = self.second
        if microsecond is None:
            microsecond = self.microsecond
        if tzinfo is True:
            tzinfo = self.tzinfo
        return datetime(year, month, day, hour, minute, second, microsecond,
                        tzinfo)

    def astimezone(self, tz):
        if not isinstance(tz, tzinfo):
            raise TypeError("tz argument must be an instance of tzinfo")

        mytz = self.tzinfo
        if mytz is None:
            raise ValueError("astimezone() requires an aware datetime")

        if tz is mytz:
            return self

        # Convert self to UTC, and attach the new time zone object.
        myoffset = self.utcoffset()
        if myoffset is None:
            raise ValueError("astimezone() requires an aware datetime")
        utc = (self - myoffset).replace(tzinfo=tz)

        # Convert from UTC to tz's local time.
        return tz.fromutc(utc)

    # Ways to produce a string.

    def ctime(self):
        "Return ctime() style string."
        weekday = self.toordinal() % 7 or 7
        return "%s %s %2d %02d:%02d:%02d %04d" % (
            _DAYNAMES[weekday],
            _MONTHNAMES[self._month],
            self._day,
            self._hour, self._minute, self._second,
            self._year)

    def isoformat(self, sep='T'):
        """Return the time formatted according to ISO.

        This is 'YYYY-MM-DD HH:MM:SS.mmmmmm', or 'YYYY-MM-DD HH:MM:SS' if
        self.microsecond == 0.

        If self.tzinfo is not None, the UTC offset is also attached, giving
        'YYYY-MM-DD HH:MM:SS.mmmmmm+HH:MM' or 'YYYY-MM-DD HH:MM:SS+HH:MM'.

        Optional argument sep specifies the separator between date and
        time, default 'T'.
        """
        s = ("%04d-%02d-%02d%c" % (self._year, self._month, self._day, sep) +
             _format_time(self._hour, self._minute, self._second,
                          self._microsecond))
        off = self._utcoffset()
        if off is not None:
            if off < 0:
                sign = "-"
                off = -off
            else:
                sign = "+"
            hh, mm = divmod(off, 60)
            s += "%s%02d:%02d" % (sign, hh, mm)
        return s

    def __repr__(self):
        """Convert to formal string, for repr()."""
        L = [self._year, self._month, self._day,  # These are never zero
             self._hour, self._minute, self._second, self._microsecond]
        if L[-1] == 0:
            del L[-1]
        if L[-1] == 0:
            del L[-1]
        s = ", ".join(map(str, L))
        module = "datetime." if self.__class__ is datetime else ""
        s = "%s(%s)" % (module + self.__class__.__name__, s)
        if self._tzinfo is not None:
            assert s[-1:] == ")"
            s = s[:-1] + ", tzinfo=%r" % self._tzinfo + ")"
        return s

    def __str__(self):
        "Convert to string, for str()."
        return self.isoformat(sep=' ')

    @classmethod
    def strptime(cls, date_string, format):
        'string, format -> new datetime parsed from a string (like time.strptime()).'
        from _strptime import _strptime
        # _strptime._strptime returns a two-element tuple.  The first
        # element is a time.struct_time object.  The second is the
        # microseconds (which are not defined for time.struct_time).
        struct, micros = _strptime(date_string, format)
        return cls(*(struct[0:6] + (micros,)))

    def utcoffset(self):
        """Return the timezone offset in minutes east of UTC (negative west of
        UTC)."""
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(self)
        offset = _check_utc_offset("utcoffset", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _utcoffset(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.utcoffset(self)
        offset = _check_utc_offset("utcoffset", offset)
        return offset

    def tzname(self):
        """Return the timezone name.

        Note that the name is 100% informational -- there's no requirement that
        it mean anything in particular. For example, "GMT", "UTC", "-500",
        "-5:00", "EDT", "US/Eastern", "America/New York" are all valid replies.
        """
        if self._tzinfo is None:
            return None
        name = self._tzinfo.tzname(self)
        _check_tzname(name)
        return name

    def dst(self):
        """Return 0 if DST is not in effect, or the DST offset (in minutes
        eastward) if DST is in effect.

        This is purely informational; the DST offset has already been added to
        the UTC offset returned by utcoffset() if applicable, so there's no
        need to consult dst() unless you're interested in displaying the DST
        info.
        """
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(self)
        offset = _check_utc_offset("dst", offset)
        if offset is not None:
            offset = timedelta._create(0, offset * 60, 0, True)
        return offset

    # Return an integer (or None) instead of a timedelta (or None).
    def _dst(self):
        if self._tzinfo is None:
            return None
        offset = self._tzinfo.dst(self)
        offset = _check_utc_offset("dst", offset)
        return offset

    # Comparisons of datetime objects with other.

    def __eq__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) == 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            return False

    def __ne__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) != 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            return True

    def __le__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) <= 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __lt__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) < 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __ge__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) >= 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def __gt__(self, other):
        if isinstance(other, datetime):
            return self._cmp(other) > 0
        elif hasattr(other, "timetuple") and not isinstance(other, date):
            return NotImplemented
        else:
            _cmperror(self, other)

    def _cmp(self, other):
        assert isinstance(other, datetime)
        mytz = self._tzinfo
        ottz = other._tzinfo
        myoff = otoff = None

        if mytz is ottz:
            base_compare = True
        else:
            if mytz is not None:
                myoff = self._utcoffset()
            if ottz is not None:
                otoff = other._utcoffset()
            base_compare = myoff == otoff

        if base_compare:
            return _cmp((self._year, self._month, self._day,
                         self._hour, self._minute, self._second,
                         self._microsecond),
                        (other._year, other._month, other._day,
                         other._hour, other._minute, other._second,
                         other._microsecond))
        if myoff is None or otoff is None:
            raise TypeError("can't compare offset-naive and offset-aware datetimes")
        # XXX What follows could be done more efficiently...
        diff = self - other     # this will take offsets into account
        if diff.days < 0:
            return -1
        return diff and 1 or 0

    def _add_timedelta(self, other, factor):
        y, m, d, hh, mm, ss, us = _normalize_datetime(
            self._year,
            self._month,
            self._day + other.days * factor,
            self._hour,
            self._minute,
            self._second + other.seconds * factor,
            self._microsecond + other.microseconds * factor)
        return datetime(y, m, d, hh, mm, ss, us, tzinfo=self._tzinfo)

    def __add__(self, other):
        "Add a datetime and a timedelta."
        if not isinstance(other, timedelta):
            return NotImplemented
        return self._add_timedelta(other, 1)

    __radd__ = __add__

    def __sub__(self, other):
        "Subtract two datetimes, or a datetime and a timedelta."
        if not isinstance(other, datetime):
            if isinstance(other, timedelta):
                return self._add_timedelta(other, -1)
            return NotImplemented

        delta_d = self.toordinal() - other.toordinal()
        delta_s = (self._hour - other._hour) * 3600 + \\
                  (self._minute - other._minute) * 60 + \\
                  (self._second - other._second)
        delta_us = self._microsecond - other._microsecond
        base = timedelta._create(delta_d, delta_s, delta_us, True)
        if self._tzinfo is other._tzinfo:
            return base
        myoff = self._utcoffset()
        otoff = other._utcoffset()
        if myoff == otoff:
            return base
        if myoff is None or otoff is None:
            raise TypeError("can't subtract offset-naive and offset-aware datetimes")
        return base + timedelta(minutes = otoff-myoff)

    def __hash__(self):
        if self._hashcode == -1:
            tzoff = self._utcoffset()
            if tzoff is None:
                self._hashcode = hash(self._getstate()[0])
            else:
                days = _ymd2ord(self.year, self.month, self.day)
                seconds = self.hour * 3600 + (self.minute - tzoff) * 60 + self.second
                self._hashcode = hash(timedelta(days, seconds, self.microsecond))
        return self._hashcode



datetime.min = datetime(1, 1, 1)
datetime.max = datetime(9999, 12, 31, 23, 59, 59, 999999)
datetime.resolution = timedelta(microseconds=1)


def _isoweek1monday(year):
    # Helper to calculate the day number of the Monday starting week 1
    # XXX This could be done more efficiently
    THURSDAY = 3
    firstday = _ymd2ord(year, 1, 1)
    firstweekday = (firstday + 6) % 7  # See weekday() above
    week1monday = firstday - firstweekday
    if firstweekday > THURSDAY:
        week1monday += 7
    return week1monday

"""
Some time zone algebra.  For a datetime x, let
    x.n = x stripped of its timezone -- its naive time.
    x.o = x.utcoffset(), and assuming that doesn't raise an exception or
          return None
    x.d = x.dst(), and assuming that doesn't raise an exception or
          return None
    x.s = x's standard offset, x.o - x.d

Now some derived rules, where k is a duration (timedelta).

1. x.o = x.s + x.d
   This follows from the definition of x.s.

2. If x and y have the same tzinfo member, x.s = y.s.
   This is actually a requirement, an assumption we need to make about
   sane tzinfo classes.

3. The naive UTC time corresponding to x is x.n - x.o.
   This is again a requirement for a sane tzinfo class.

4. (x+k).s = x.s
   This follows from #2, and that datimetimetz+timedelta preserves tzinfo.

5. (x+k).n = x.n + k
   Again follows from how arithmetic is defined.

Now we can explain tz.fromutc(x).  Let's assume it's an interesting case
(meaning that the various tzinfo methods exist, and don't blow up or return
None when called).

The function wants to return a datetime y with timezone tz, equivalent to x.
x is already in UTC.

By #3, we want

    y.n - y.o = x.n                             [1]

The algorithm starts by attaching tz to x.n, and calling that y.  So
x.n = y.n at the start.  Then it wants to add a duration k to y, so that [1]
becomes true; in effect, we want to solve [2] for k:

   (y+k).n - (y+k).o = x.n                      [2]

By #1, this is the same as

   (y+k).n - ((y+k).s + (y+k).d) = x.n          [3]

By #5, (y+k).n = y.n + k, which equals x.n + k because x.n=y.n at the start.
Substituting that into [3],

   x.n + k - (y+k).s - (y+k).d = x.n; the x.n terms cancel, leaving
   k - (y+k).s - (y+k).d = 0; rearranging,
   k = (y+k).s - (y+k).d; by #4, (y+k).s == y.s, so
   k = y.s - (y+k).d

On the RHS, (y+k).d can't be computed directly, but y.s can be, and we
approximate k by ignoring the (y+k).d term at first.  Note that k can't be
very large, since all offset-returning methods return a duration of magnitude
less than 24 hours.  For that reason, if y is firmly in std time, (y+k).d must
be 0, so ignoring it has no consequence then.

In any case, the new value is

    z = y + y.s                                 [4]

It's helpful to step back at look at [4] from a higher level:  it's simply
mapping from UTC to tz's standard time.

At this point, if

    z.n - z.o = x.n                             [5]

we have an equivalent time, and are almost done.  The insecurity here is
at the start of daylight time.  Picture US Eastern for concreteness.  The wall
time jumps from 1:59 to 3:00, and wall hours of the form 2:MM don't make good
sense then.  The docs ask that an Eastern tzinfo class consider such a time to
be EDT (because it's "after 2"), which is a redundant spelling of 1:MM EST
on the day DST starts.  We want to return the 1:MM EST spelling because that's
the only spelling that makes sense on the local wall clock.

In fact, if [5] holds at this point, we do have the standard-time spelling,
but that takes a bit of proof.  We first prove a stronger result.  What's the
difference between the LHS and RHS of [5]?  Let

    diff = x.n - (z.n - z.o)                    [6]

Now
    z.n =                       by [4]
    (y + y.s).n =               by #5
    y.n + y.s =                 since y.n = x.n
    x.n + y.s =                 since z and y are have the same tzinfo member,
                                    y.s = z.s by #2
    x.n + z.s

Plugging that back into [6] gives

    diff =
    x.n - ((x.n + z.s) - z.o) =     expanding
    x.n - x.n - z.s + z.o =         cancelling
    - z.s + z.o =                   by #2
    z.d

So diff = z.d.

If [5] is true now, diff = 0, so z.d = 0 too, and we have the standard-time
spelling we wanted in the endcase described above.  We're done.  Contrarily,
if z.d = 0, then we have a UTC equivalent, and are also done.

If [5] is not true now, diff = z.d != 0, and z.d is the offset we need to
add to z (in effect, z is in tz's standard time, and we need to shift the
local clock into tz's daylight time).

Let

    z' = z + z.d = z + diff                     [7]

and we can again ask whether

    z'.n - z'.o = x.n                           [8]

If so, we're done.  If not, the tzinfo class is insane, according to the
assumptions we've made.  This also requires a bit of proof.  As before, let's
compute the difference between the LHS and RHS of [8] (and skipping some of
the justifications for the kinds of substitutions we've done several times
already):

    diff' = x.n - (z'.n - z'.o) =           replacing z'.n via [7]
            x.n  - (z.n + diff - z'.o) =    replacing diff via [6]
            x.n - (z.n + x.n - (z.n - z.o) - z'.o) =
            x.n - z.n - x.n + z.n - z.o + z'.o =    cancel x.n
            - z.n + z.n - z.o + z'.o =              cancel z.n
            - z.o + z'.o =                      #1 twice
            -z.s - z.d + z'.s + z'.d =          z and z' have same tzinfo
            z'.d - z.d

So z' is UTC-equivalent to x iff z'.d = z.d at this point.  If they are equal,
we've found the UTC-equivalent so are done.  In fact, we stop with [7] and
return z', not bothering to compute z'.d.

How could z.d and z'd differ?  z' = z + z.d [7], so merely moving z' by
a dst() offset, and starting *from* a time already in DST (we know z.d != 0),
would have to change the result dst() returns:  we start in DST, and moving
a little further into it takes us out of DST.

There isn't a sane case where this can happen.  The closest it gets is at
the end of DST, where there's an hour in UTC with no spelling in a hybrid
tzinfo class.  In US Eastern, that's 5:MM UTC = 0:MM EST = 1:MM EDT.  During
that hour, on an Eastern clock 1:MM is taken as being in standard time (6:MM
UTC) because the docs insist on that, but 0:MM is taken as being in daylight
time (4:MM UTC).  There is no local time mapping to 5:MM UTC.  The local
clock jumps from 1:59 back to 1:00 again, and repeats the 1:MM hour in
standard time.  Since that's what the local clock *does*, we want to map both
UTC hours 5:MM and 6:MM to 1:MM Eastern.  The result is ambiguous
in local time, but so it goes -- it's the way the local clock works.

When x = 5:MM UTC is the input to this algorithm, x.o=0, y.o=-5 and y.d=0,
so z=0:MM.  z.d=60 (minutes) then, so [5] doesn't hold and we keep going.
z' = z + z.d = 1:MM then, and z'.d=0, and z'.d - z.d = -60 != 0 so [8]
(correctly) concludes that z' is not UTC-equivalent to x.

Because we know z.d said z was in daylight time (else [5] would have held and
we would have stopped then), and we know z.d != z'.d (else [8] would have held
and we have stopped then), and there are only 2 possible values dst() can
return in Eastern, it follows that z'.d must be 0 (which it is in the example,
but the reasoning doesn't depend on the example -- it depends on there being
two possible dst() outcomes, one zero and the other non-zero).  Therefore
z' must be in standard time, and is the spelling we want in this case.

Note again that z' is not UTC-equivalent as far as the hybrid tzinfo class is
concerned (because it takes z' as being in standard time rather than the
daylight time we intend here), but returning it gives the real-life "local
clock repeats an hour" behavior when mapping the "unspellable" UTC hour into
tz.

When the input is 6:MM, z=1:MM and z.d=0, and we stop at once, again with
the 1:MM standard time spelling we want.

So how can this break?  One of the assumptions must be violated.  Two
possibilities:

1) [2] effectively says that y.s is invariant across all y belong to a given
   time zone.  This isn't true if, for political reasons or continental drift,
   a region decides to change its base offset from UTC.

2) There may be versions of "double daylight" time where the tail end of
   the analysis gives up a step too early.  I haven't thought about that
   enough to say.

In any case, it's clear that the default fromutc() is strong enough to handle
"almost all" time zones:  so long as the standard offset is invariant, it
doesn't matter if daylight time transition points change from year to year, or
if daylight time is skipped in some years; it doesn't matter how large or
small dst() may get within its bounds; and it doesn't even matter if some
perverse time zone returns a negative dst()).  So a breaking case must be
pretty bizarre, and a tzinfo subclass can override fromutc() if it is.
"""
`,"src/lib/dbhash.py":`raise NotImplementedError("dbhash is not yet implemented in Skulpt")
`,"src/lib/decimal.py":`raise NotImplementedError("decimal is not yet implemented in Skulpt")
`,"src/lib/difflib.py":`raise NotImplementedError("difflib is not yet implemented in Skulpt")
`,"src/lib/dircache.py":`raise NotImplementedError("dircache is not yet implemented in Skulpt")
`,"src/lib/dis.py":`raise NotImplementedError("dis is not yet implemented in Skulpt")
`,"src/lib/distutils/__init__.py":`raise NotImplementedError("distutils is not yet implemented in Skulpt")
`,"src/lib/distutils/command/__init__.py":`raise NotImplementedError("command is not yet implemented in Skulpt")
`,"src/lib/distutils/tests/__init__.py":`raise NotImplementedError("tests is not yet implemented in Skulpt")
`,"src/lib/doctest.py":`raise NotImplementedError("doctest is not yet implemented in Skulpt")
`,"src/lib/document.js":'var $builtinmodule=function(){var a,b={__name__:new Sk.builtin.str("document")};return b.getElementById=new Sk.builtin.func(function(a){var c=document.getElementById(a.v);return c?Sk.misceval.callsimArray(b.Element,[c]):Sk.builtin.none.none$}),b.createElement=new Sk.builtin.func(function(a){var c=document.createElement(a.v);if(c)return Sk.misceval.callsimArray(b.Element,[c])}),b.getElementsByTagName=new Sk.builtin.func(function(a){for(var c=document.getElementsByTagName(a.v),d=[],e=c.length-1;0<=e;e--)d.push(Sk.misceval.callsimArray(b.Element,[c[e]]));return new Sk.builtin.list(d)}),b.getElementsByClassName=new Sk.builtin.func(function(a){for(var c=document.getElementsByClassName(a.v),d=[],e=0;e<c.length;e++)d.push(Sk.misceval.callsimArray(b.Element,[c[e]]));return new Sk.builtin.list(d)}),b.getElementsByName=new Sk.builtin.func(function(a){for(var c=document.getElementsByName(a.v),d=[],e=0;e<c.length;e++)d.push(Sk.misceval.callsimArray(b.Element,[c[e]]));return new Sk.builtin.list(d)}),b.currentDiv=new Sk.builtin.func(function(){if(void 0!==Sk.divid)return new Sk.builtin.str(Sk.divid);throw new Sk.builtin.AttributeError("There is no value set for divid")}),a=function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v=b,a.innerHTML=b.innerHTML,a.innerText=b.innerText,void 0!==b.value&&(a.value=b.value,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("value"),new Sk.builtin.str(a.value))),void 0!==b.checked&&(a.checked=b.checked,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("checked"),new Sk.builtin.str(a.checked))),Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerHTML"),new Sk.builtin.str(a.innerHTML)),Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerText"),new Sk.builtin.str(a.innerText))}),b.tp$getattr=Sk.generic.getAttr,b.__setattr__=new Sk.builtin.func(function(a,b,c){b=Sk.ffi.remapToJs(b),"innerHTML"===b&&(a.innerHTML=c,a.v.innerHTML=c.v,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerHTML"),c)),"innerText"===b&&(a.innerText=c,a.v.innerText=c.v,Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str("innerText"),c))}),b.appendChild=new Sk.builtin.func(function(a,b){a.v.appendChild(b.v)}),b.removeChild=new Sk.builtin.func(function(a,b){a.v.removeChild(b.v)}),b.getCSS=new Sk.builtin.func(function(a,b){return new Sk.builtin.str(a.v.style[b.v])}),b.setCSS=new Sk.builtin.func(function(a,b,c){a.v.style[b.v]=c.v}),b.getAttribute=new Sk.builtin.func(function(a,b){var c=a.v.getAttribute(b.v);return c?new Sk.builtin.str(c):Sk.builtin.none.none$}),b.setAttribute=new Sk.builtin.func(function(a,b,c){a.v.setAttribute(b.v,c.v)}),b.getProperty=new Sk.builtin.func(function(a,b){var c=a.v[b.v];return c?new Sk.builtin.str(c):Sk.builtin.none.none$}),b.__str__=new Sk.builtin.func(function(a){return console.log(a.v.tagName),new Sk.builtin.str(a.v.tagName)}),b.__repr__=new Sk.builtin.func(function(){return new Sk.builtin.str("[DOM Element]")})},b.Element=Sk.misceval.buildClass(b,a,"Element",[]),b};',"src/lib/dumbdbm.py":`raise NotImplementedError("dumbdbm is not yet implemented in Skulpt")
`,"src/lib/dummy_thread.py":`raise NotImplementedError("dummy_thread is not yet implemented in Skulpt")
`,"src/lib/dummy_threading.py":`raise NotImplementedError("dummy_threading is not yet implemented in Skulpt")
`,"src/lib/email/__init__.py":`raise NotImplementedError("email is not yet implemented in Skulpt")
`,"src/lib/email/mime/__init__.py":`raise NotImplementedError("mime is not yet implemented in Skulpt")
`,"src/lib/email/test/data/__init__.py":`raise NotImplementedError("data is not yet implemented in Skulpt")
`,"src/lib/encodings/__init__.py":`raise NotImplementedError("encodings is not yet implemented in Skulpt")
`,"src/lib/filecmp.py":`raise NotImplementedError("filecmp is not yet implemented in Skulpt")
`,"src/lib/fileinput.py":`raise NotImplementedError("fileinput is not yet implemented in Skulpt")
`,"src/lib/fnmatch.py":`raise NotImplementedError("fnmatch is not yet implemented in Skulpt")
`,"src/lib/formatter.py":`raise NotImplementedError("formatter is not yet implemented in Skulpt")
`,"src/lib/fpformat.py":`raise NotImplementedError("fpformat is not yet implemented in Skulpt")
`,"src/lib/fractions.py":`raise NotImplementedError("fractions is not yet implemented in Skulpt")
`,"src/lib/ftplib.py":`raise NotImplementedError("ftplib is not yet implemented in Skulpt")
`,"src/lib/functools.py":`raise NotImplementedError("functools is not yet implemented in Skulpt")
`,"src/lib/genericpath.py":`raise NotImplementedError("genericpath is not yet implemented in Skulpt")
`,"src/lib/getopt.py":`raise NotImplementedError("getopt is not yet implemented in Skulpt")
`,"src/lib/getpass.py":`raise NotImplementedError("getpass is not yet implemented in Skulpt")
`,"src/lib/gettext.py":`raise NotImplementedError("gettext is not yet implemented in Skulpt")
`,"src/lib/glob.py":`raise NotImplementedError("glob is not yet implemented in Skulpt")
`,"src/lib/gzip.py":`raise NotImplementedError("gzip is not yet implemented in Skulpt")
`,"src/lib/hashlib.py":`raise NotImplementedError("hashlib is not yet implemented in Skulpt")
`,"src/lib/heapq.py":`raise NotImplementedError("heapq is not yet implemented in Skulpt")
`,"src/lib/hmac.py":`raise NotImplementedError("hmac is not yet implemented in Skulpt")
`,"src/lib/hotshot/__init__.py":`raise NotImplementedError("hotshot is not yet implemented in Skulpt")
`,"src/lib/htmlentitydefs.py":`raise NotImplementedError("htmlentitydefs is not yet implemented in Skulpt")
`,"src/lib/htmllib.py":`raise NotImplementedError("htmllib is not yet implemented in Skulpt")
`,"src/lib/httplib.py":`raise NotImplementedError("httplib is not yet implemented in Skulpt")
`,"src/lib/idlelib/Icons/__init__.py":`raise NotImplementedError("Icons is not yet implemented in Skulpt")
`,"src/lib/idlelib/__init__.py":`raise NotImplementedError("idlelib is not yet implemented in Skulpt")
`,"src/lib/ihooks.py":`raise NotImplementedError("ihooks is not yet implemented in Skulpt")
`,"src/lib/image.js":'var ImageMod,$builtinmodule;ImageMod||(ImageMod={},ImageMod.canvasLib=[]),$builtinmodule=function(){var a,b,c,d,e,f,g,h={__name__:new Sk.builtin.str("image")};return h.Image=Sk.misceval.buildClass(h,function(a,b){var c=Math.floor;e=function(a){a.width=a.image.width,a.height=a.image.height,a.delay=0,a.updateCount=0,a.updateInterval=1,a.lastx=0,a.lasty=0,a.canvas=document.createElement("canvas"),a.canvas.height=a.height,a.canvas.width=a.width,a.ctx=a.canvas.getContext("2d"),a.ctx.drawImage(a.image,0,0),a.imagedata=a.ctx.getImageData(0,0,a.width,a.height)},b.__init__=new Sk.builtin.func(function(a,b){var c;Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,2);try{a.image=document.getElementById(Sk.ffi.remapToJs(b)),e(a)}catch(b){a.image=null}if(null==a.image)return c=new Sk.misceval.Suspension,c.resume=function(){if(c.data.error)throw new Sk.builtin.IOError(c.data.error.message)},c.data={type:"Sk.promise",promise:new Promise(function(c,d){var f=new Image;f.crossOrigin="",f.onerror=function(){d(Error("Failed to load URL: "+f.src))},f.onload=function(){a.image=this,e(a),c()},f.src=g(b)})},c}),g=function(a){var b,c,d="function"==typeof Sk.imageProxy?Sk.imageProxy:function(a){return b=document.createElement("a"),b.href=c,window.location.host===b.host?a:Sk.imageProxy+"/"+a};return c=Sk.ffi.remapToJs(a),c=d(c),c},f=function(a,b,c){if(0>b||0>c||b>=a.width||c>=a.height)throw new Sk.builtin.ValueError("Pixel index out of range.")};var i=function(a,b,c){var d;Sk.builtin.pyCheckArgsLen("setdelay",arguments.length,2,3),a.delay=Sk.ffi.remapToJs(b),d=Sk.builtin.asnum$(c),a.updateInterval=d?d:1};b.set_delay=new Sk.builtin.func(i),b.setDelay=new Sk.builtin.func(i);var j=function(a){var b,d=[];for(Sk.builtin.pyCheckArgsLen("getpixels",arguments.length,1,1),b=0;b<a.image.height*a.image.width;b++)d[b]=Sk.misceval.callsimArray(a.getPixel,[a,b%a.image.width,c(b/a.image.width)]);return new Sk.builtin.tuple(d)};b.get_pixels=new Sk.builtin.func(j),b.getPixels=new Sk.builtin.func(j),b.getData=new Sk.builtin.func(function(a){var b,d,e,g,h,j,k,l=[];for(Sk.builtin.pyCheckArgsLen("getData",arguments.length,1,1),b=0;b<a.image.height*a.image.width;b++)d=b%a.image.width,e=c(b/a.image.width),f(a,d,e),k=4*e*a.width+4*d,g=a.imagedata.data[k],h=a.imagedata.data[k+1],j=a.imagedata.data[k+2],l[b]=new Sk.builtin.tuple([new Sk.builtin.int_(g),new Sk.builtin.int_(h),new Sk.builtin.int_(j)]);return new Sk.builtin.list(l)});var k=function(a,b,c){var d,e,g,i;return Sk.builtin.pyCheckArgsLen("getpixel",arguments.length,3,3),b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),f(a,b,c),i=4*c*a.width+4*b,d=a.imagedata.data[i],g=a.imagedata.data[i+1],e=a.imagedata.data[i+2],Sk.misceval.callsimArray(h.Pixel,[d,g,e,b,c])};b.get_pixel=new Sk.builtin.func(k),b.getPixel=new Sk.builtin.func(k),d=function(a,b,c){var d=new Sk.misceval.Suspension;return d.resume=function(){return Sk.builtin.none.none$},d.data={type:"Sk.promise",promise:new Promise(function(d){var e=Math.max,f=Math.abs,g=Math.min;a.updateCount++,0==a.updateCount%a.updateInterval?(a.lastx+a.updateInterval>=a.width?a.lastCtx.putImageData(a.imagedata,a.lastUlx,a.lastUly,0,a.lasty,a.width,2):a.lasty+a.updateInterval>=a.height?a.lastCtx.putImageData(a.imagedata,a.lastUlx,a.lastUly,a.lastx,0,2,a.height):a.lastCtx.putImageData(a.imagedata,a.lastUlx,a.lastUly,g(b,a.lastx),g(c,a.lasty),e(f(b-a.lastx),1),e(f(c-a.lasty),1)),a.lastx=b,a.lasty=c,0<a.delay?window.setTimeout(d,a.delay):d()):d()})},d};var l=function(a,b,c,e){var g;return Sk.builtin.pyCheckArgsLen("setpixel",arguments.length,4,4),b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),f(a,b,c),g=4*c*a.width+4*b,a.imagedata.data[g]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getRed,[e])),a.imagedata.data[g+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getGreen,[e])),a.imagedata.data[g+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getBlue,[e])),a.imagedata.data[g+3]=255,d(a,b,c)};b.set_pixel=new Sk.builtin.func(l),b.setPixel=new Sk.builtin.func(l);var m=function(a,b,e){var g,h,i;return Sk.builtin.pyCheckArgsLen("setpixelat",arguments.length,3,3),b=Sk.builtin.asnum$(b),g=b%a.image.width,h=c(b/a.image.width),f(a,g,h),i=4*h*a.width+4*g,a.imagedata.data[i]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getRed,[e])),a.imagedata.data[i+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getGreen,[e])),a.imagedata.data[i+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(e.getBlue,[e])),a.imagedata.data[i+3]=255,d(a,g,h)};b.set_pixel_at=new Sk.builtin.func(m),b.setPixelAt=new Sk.builtin.func(m);var n=function(a,b){var c,e,g;return Sk.builtin.pyCheckArgsLen("updatepixel",arguments.length,2,2),c=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getX,[b])),e=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getY,[b])),f(a,c,e),g=4*e*a.width+4*c,a.imagedata.data[g]=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getRed,[b])),a.imagedata.data[g+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getGreen,[b])),a.imagedata.data[g+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(b.getBlue,[b])),a.imagedata.data[g+3]=255,d(a,c,e)};b.update_pixel=new Sk.builtin.func(n),b.updatePixel=new Sk.builtin.func(n);var o=function(a){return Sk.builtin.pyCheckArgsLen("getheight",arguments.length,1,1),new Sk.builtin.int_(a.height)};b.get_height=new Sk.builtin.func(o),b.getHeight=new Sk.builtin.func(o);var p=function(a){return Sk.builtin.pyCheckArgsLen("getwidth",arguments.length,1,1),new Sk.builtin.int_(a.width)};b.get_width=new Sk.builtin.func(p),b.getWidth=new Sk.builtin.func(p),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"height"===b)?Sk.builtin.assk$(a.height):"width"===b?Sk.builtin.assk$(a.width):void 0}),b.__setattr__=new Sk.builtin.func(function(a,b){if(b=Sk.ffi.remapToJs(b),"height"===b||"width"===b)throw new Sk.builtin.Exception("Cannot change height or width they can only be set on creation");else throw new Sk.builtin.Exception("Unknown attribute: "+b)}),b.draw=new Sk.builtin.func(function(a,b,c,d){var e;return Sk.builtin.pyCheckArgsLen("draw",arguments.length,2,4),e=new Sk.misceval.Suspension,e.resume=function(){return Sk.builtin.none.none$},e.data={type:"Sk.promise",promise:new Promise(function(e){var f,g;b=Sk.builtin.asnum$(b),c=Sk.builtin.asnum$(c),d=Sk.builtin.asnum$(d),f=Sk.misceval.callsimArray(b.getWin,[b]),g=f.getContext("2d"),void 0===c&&(c=0,d=0),a.lastUlx=c,a.lastUly=d,a.lastCtx=g,g.putImageData(a.imagedata,c,d),0<a.delay?window.setTimeout(e,a.delay):window.setTimeout(e,200)})},e})},"Image",[]),c=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c){Sk.builtin.pyCheckArgsLen("__init__",arguments.length,3,3),a.width=Sk.builtin.asnum$(b),a.height=Sk.builtin.asnum$(c),a.canvas=document.createElement("canvas"),a.ctx=a.canvas.getContext("2d"),a.canvas.height=a.height,a.canvas.width=a.width,a.imagedata=a.ctx.getImageData(0,0,a.width,a.height)})},h.EmptyImage=Sk.misceval.buildClass(h,c,"EmptyImage",[h.Image]),b=function(a,b){b.__init__=new Sk.builtin.func(function(a,c,d,e,b,f){Sk.builtin.pyCheckArgsLen("__init__",arguments.length,4,6),a.red=Sk.builtin.asnum$(c),a.green=Sk.builtin.asnum$(d),a.blue=Sk.builtin.asnum$(e),a.x=Sk.builtin.asnum$(b),a.y=Sk.builtin.asnum$(f)});var c=function(a){return Sk.builtin.pyCheckArgsLen("getred",arguments.length,1,1),Sk.builtin.assk$(a.red)};b.get_red=new Sk.builtin.func(c),b.getRed=new Sk.builtin.func(c);var d=function(a){return Sk.builtin.pyCheckArgsLen("getgreen",arguments.length,1,1),Sk.builtin.assk$(a.green)};b.get_green=new Sk.builtin.func(d),b.getGreen=new Sk.builtin.func(d);var e=function(a){return Sk.builtin.pyCheckArgsLen("getblue",arguments.length,1,1),Sk.builtin.assk$(a.blue)};b.get_blue=new Sk.builtin.func(e),b.getBlue=new Sk.builtin.func(e);var f=function(a){return Sk.builtin.pyCheckArgsLen("getx",arguments.length,1,1),Sk.builtin.assk$(a.x)};b.get_x=new Sk.builtin.func(f),b.getX=new Sk.builtin.func(f);var g=function(a){return Sk.builtin.pyCheckArgsLen("gety",arguments.length,1,1),Sk.builtin.assk$(a.y)};b.get_y=new Sk.builtin.func(g),b.getY=new Sk.builtin.func(g);var h=function(a,b){Sk.builtin.pyCheckArgsLen("setred",arguments.length,2,2),a.red=Sk.builtin.asnum$(b)};b.set_red=new Sk.builtin.func(h),b.setRed=new Sk.builtin.func(h);var i=function(a,b){Sk.builtin.pyCheckArgsLen("setgreen",arguments.length,2,2),a.green=Sk.builtin.asnum$(b)};b.set_green=new Sk.builtin.func(i),b.setGreen=new Sk.builtin.func(i);var j=function(a,c){Sk.builtin.pyCheckArgsLen("setblue",arguments.length,2,2),a.blue=Sk.builtin.asnum$(c)};b.set_blue=new Sk.builtin.func(j),b.setBlue=new Sk.builtin.func(j),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"red"===b)?Sk.builtin.assk$(a.red):"green"===b?Sk.builtin.assk$(a.green):"blue"===b?Sk.builtin.assk$(a.blue):void 0}),b.__setattr__=new Sk.builtin.func(function(a,b,c){b=Sk.ffi.remapToJs(b),("red"===b||"green"===b||"blue"===b)&&(a[b]=Sk.builtin.asnum$(c))});var k=function(a,b){Sk.builtin.pyCheckArgsLen("setx",arguments.length,2,2),a.x=Sk.builtin.asnum$(b)};b.set_x=new Sk.builtin.func(k),b.setX=new Sk.builtin.func(k);var l=function(a,b){Sk.builtin.pyCheckArgsLen("sety",arguments.length,2,2),a.y=Sk.builtin.asnum$(b)};b.set_y=new Sk.builtin.func(l),b.setY=new Sk.builtin.func(l),b.__getitem__=new Sk.builtin.func(function(a,b){return(b=Sk.builtin.asnum$(b),0===b)?a.red:1==b?a.green:2==b?a.blue:void 0}),b.__str__=new Sk.builtin.func(function(a){return Sk.ffi.remapToPy("["+a.red+","+a.green+","+a.blue+"]")}),b.getColorTuple=new Sk.builtin.func(function(){}),b.setRange=new Sk.builtin.func(function(a,b){a.max=Sk.builtin.asnum$(b)})},h.Pixel=Sk.misceval.buildClass(h,b,"Pixel",[]),a=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c){var d,e,f;Sk.builtin.pyCheckArgsLen("__init__",arguments.length,1,3),d=ImageMod.canvasLib[Sk.canvas],void 0===d?(e=document.createElement("canvas"),f=document.getElementById(Sk.canvas),a.theScreen=e,f.appendChild(e),ImageMod.canvasLib[Sk.canvas]=e,ImageMod.canvasLib[Sk.canvas]=a.theScreen):(a.theScreen=d,a.theScreen.height=a.theScreen.height),void 0===b?(Sk.availableHeight&&(a.theScreen.height=Sk.availableHeight),Sk.availableWidth&&(a.theScreen.width=Sk.availableWidth)):(a.theScreen.height=c.v,a.theScreen.width=b.v),a.theScreen.style.display="block"}),b.getWin=new Sk.builtin.func(function(a){return a.theScreen}),b.exitonclick=new Sk.builtin.func(function(a){var b=a.theScreen.id;a.theScreen.onclick=function(){document.getElementById(b).style.display="none",document.getElementById(b).onclick=null,delete ImageMod.canvasLib[b]}})},h.ImageWin=Sk.misceval.buildClass(h,a,"ImageWin",[]),h};',"src/lib/imaplib.py":`raise NotImplementedError("imaplib is not yet implemented in Skulpt")
`,"src/lib/imghdr.py":`raise NotImplementedError("imghdr is not yet implemented in Skulpt")
`,"src/lib/imputil.py":`raise NotImplementedError("imputil is not yet implemented in Skulpt")
`,"src/lib/io.py":`raise NotImplementedError("io is not yet implemented in Skulpt")
`,"src/lib/itertools.js":`var $builtinmodule=function(){function combinationsNew(a,b,c){let d,e;[d,e]=Sk.abstr.copyKeywordsToNamedArgs(a.tp$name,["iterable","r"],b,c,[]);const f=Sk.misceval.arrayFromIterable(d);if(e=Sk.misceval.asIndexSized(e,Sk.builtin.OverFlowError),0>e)throw new Sk.builtin.ValueError("r must be non-negative");if(this===a)return new a.constructor(f,e);else{const b=new this.constructor;return a.constructor.call(b,f,e),b}}var a={};return a.accumulate=Sk.abstr.buildIteratorClass("itertools.accumulate",{constructor:function accumulate(a,b,c){this.iter=a,this.func=b,this.total=c,this.tp$iternext=()=>(this.total=Sk.builtin.checkNone(this.total)?this.iter.tp$iternext():this.total,this.tp$iternext=this.constructor.prototype.tp$iternext,this.total)},iternext(){let a=this.iter.tp$iternext();if(void 0!==a)return this.total=Sk.misceval.callsimArray(this.func,[this.total,a]),this.total},slots:{tp$doc:"accumulate(iterable[, func, initial]) --> accumulate object\\n\\nReturn series of accumulated sums (or other binary function results).",tp$new(b,c){Sk.abstr.checkArgsLen("accumulate",b,0,2);let[d,e,f]=Sk.abstr.copyKeywordsToNamedArgs("accumulate",["iterable","func","initial"],b,c,[Sk.builtin.none.none$,Sk.builtin.none.none$]);if(d=Sk.abstr.iter(d),e=Sk.builtin.checkNone(e)?new Sk.builtin.func((c,a)=>Sk.abstr.numberBinOp(c,a,"Add")):e,this===a.accumulate.prototype)return new a.accumulate(d,e,f);else{const b=new this.constructor;return a.accumulate.call(b,d,e,f),b}}}}),a.chain=Sk.abstr.buildIteratorClass("itertools.chain",{constructor:function chain(a){this.iterables=a,this.current_it=null,this.tp$iternext=()=>(this.tp$iternext=this.constructor.prototype.tp$iternext,this.current_it=this.iterables.tp$iternext(),void 0===this.current_it)?void(this.tp$iternext=()=>void 0):(this.current_it=Sk.abstr.iter(this.current_it),this.tp$iternext())},iternext(){for(let a;void 0===a;)if(a=this.current_it.tp$iternext(),void 0===a){if(this.current_it=this.iterables.tp$iternext(),void 0===this.current_it)return void(this.tp$iternext=()=>void 0);this.current_it=Sk.abstr.iter(this.current_it)}else return a},slots:{tp$doc:"chain(*iterables) --> chain object\\n\\nReturn a chain object whose .__next__() method returns elements from the\\nfirst iterable until it is exhausted, then elements from the next\\niterable, until all of the iterables are exhausted.",tp$new(b,c){if(Sk.abstr.checkNoKwargs("chain",c),b=new Sk.builtin.tuple(b.slice(0)).tp$iter(),this===a.chain.prototype)return new a.chain(b);else{const c=new this.constructor;return a.chain.call(c,b),c}}},classmethods:{from_iterable:{$meth(b){const c=Sk.abstr.iter(b);return new a.chain(c)},$flags:{OneArg:!0},$doc:"chain.from_iterable(iterable) --> chain object\\n\\nAlternate chain() constructor taking a single iterable argument\\nthat evaluates lazily.",$textsig:null}}}),a.combinations=Sk.abstr.buildIteratorClass("itertools.combinations",{constructor:function combinations(a,b){this.pool=a,this.r=b,this.indices=Array(b).fill().map((a,b)=>b),this.n=a.length,this.tp$iternext=()=>{if(!(this.r>this.n))return this.tp$iternext=this.constructor.prototype.tp$iternext,new Sk.builtin.tuple(this.pool.slice(0,this.r))}},iternext(){let a,b=!1;for(a=this.r-1;0<=a;a--)if(this.indices[a]!=a+this.n-this.r){b=!0;break}if(!b)return void(this.r=0);this.indices[a]++;for(let b=a+1;b<this.r;b++)this.indices[b]=this.indices[b-1]+1;const c=this.indices.map(a=>this.pool[a]);return new Sk.builtin.tuple(c)},slots:{tp$doc:"combinations(iterable, r) --> combinations object\\n\\nReturn successive r-length combinations of elements in the iterable.\\n\\ncombinations(range(4), 3) --> (0,1,2), (0,1,3), (0,2,3), (1,2,3)",tp$new(b,c){return combinationsNew.call(this,a.combinations.prototype,b,c)}}}),a.combinations_with_replacement=Sk.abstr.buildIteratorClass("itertools.combinations_with_replacement",{constructor:function combinations_with_replacement(a,b){this.pool=a,this.r=b,this.indices=Array(b).fill(0),this.n=a.length,this.tp$iternext=()=>{if(!this.r||this.n){this.tp$iternext=this.constructor.prototype.tp$iternext;const a=this.indices.map(a=>this.pool[a]);return new Sk.builtin.tuple(a)}}},iternext(){let a,b=!1;for(a=this.r-1;0<=a;a--)if(this.indices[a]!=this.n-1){b=!0;break}if(!b)return void(this.r=0);const c=this.indices[a]+1;for(let b=a;b<this.r;b++)this.indices[b]=c;const d=this.indices.map(a=>this.pool[a]);return new Sk.builtin.tuple(d)},slots:{tp$doc:"combinations_with_replacement(iterable, r) --> combinations_with_replacement object\\n\\nReturn successive r-length combinations of elements in the iterable\\nallowing individual elements to have successive repeats.\\ncombinations_with_replacement('ABC', 2) --> AA AB AC BB BC CC",tp$new(b,c){return combinationsNew.call(this,a.combinations_with_replacement.prototype,b,c)}}}),a.compress=Sk.abstr.buildIteratorClass("itertools.compress",{constructor:function compress(a,b){this.data=a,this.selectors=b},iternext(){let a=this.data.tp$iternext(),b=this.selectors.tp$iternext();for(;void 0!==a&&void 0!==b;){if(Sk.misceval.isTrue(b))return a;a=this.data.tp$iternext(),b=this.selectors.tp$iternext()}},slots:{tp$doc:"compress(data, selectors) --> iterator over selected data\\n\\nReturn data elements corresponding to true selector elements.\\nForms a shorter iterator from selected data elements using the\\nselectors to choose the data elements.",tp$new(b,c){let d,e;if([d,e]=Sk.abstr.copyKeywordsToNamedArgs("compress",["data","selectors"],b,c,[]),d=Sk.abstr.iter(d),e=Sk.abstr.iter(e),this===a.count.prototype)return new a.compress(d,e);else{const b=new this.constructor;return a.compress.call(b,d,e),b}}}}),a.count=Sk.abstr.buildIteratorClass("itertools.count",{constructor:function count(a,b){this.start=a,this.step=b},iternext(){const a=this.start;return this.start=Sk.abstr.numberBinOp(this.start,this.step,"Add"),a},slots:{tp$doc:"count(start=0, step=1) --> count object\\n\\nReturn a count object whose .__next__() method returns consecutive values.\\nEquivalent to:\\n\\n    def count(firstval=0, step=1):\\n        x = firstval\\n        while 1:\\n            yield x\\n            x += step\\n",tp$new(b,c){const[d,e]=Sk.abstr.copyKeywordsToNamedArgs("count",["start","step"],b,c,[new Sk.builtin.int_(0),new Sk.builtin.int_(1)]);if(!Sk.builtin.checkNumber(d)&&!Sk.builtin.checkComplex(d))throw new Sk.builtin.TypeError("a number is required");if(!Sk.builtin.checkNumber(e)&&!Sk.builtin.checkComplex(e))throw new Sk.builtin.TypeError("a number is required");if(this===a.count.prototype)return new a.count(d,e);else{const b=new this.constructor;return a.count.call(b,d,e),b}},$r(){const a=Sk.misceval.objectRepr(this.start);let b=Sk.misceval.objectRepr(this.step);return b="1"===b?"":", "+b,new Sk.builtin.str(Sk.abstr.typeName(this)+"("+a+b+")")}}}),a.cycle=Sk.abstr.buildIteratorClass("itertools.cycle",{constructor:function cycle(a){this.iter=a,this.saved=[],this.consumed=!1,this.i=0,this.length},iternext(){let a;if(!this.consumed){if(a=this.iter.tp$iternext(),void 0!==a)return this.saved.push(a),a;if(this.consumed=!0,this.length=this.saved.length,!this.length)return}return a=this.saved[this.i],this.i=(this.i+1)%this.length,a},slots:{tp$doc:"cycle(iterable) --> cycle object\\n\\nReturn elements from the iterable until it is exhausted.\\nThen repeat the sequence indefinitely.",tp$new(b,c){Sk.abstr.checkOneArg("cycle",b,c);const d=Sk.abstr.iter(b[0]);if(this===a.cycle.prototype)return new a.cycle(d);else{const b=new this.constructor;return a.cycle.call(b,d),b}}}}),a.dropwhile=Sk.abstr.buildIteratorClass("itertools.dropwhile",{constructor:function dropwhile(a,b){this.predicate=a,this.iter=b,this.passed},iternext(){let a=this.iter.tp$iternext();for(;void 0===this.passed&&void 0!==a;){const b=Sk.misceval.callsimArray(this.predicate,[a]);if(!Sk.misceval.isTrue(b))return this.passed=!0,a;a=this.iter.tp$iternext()}return a},slots:{tp$doc:"dropwhile(predicate, iterable) --> dropwhile object\\n\\nDrop items from the iterable while predicate(item) is true.\\nAfterwards, return every element until the iterable is exhausted.",tp$new(b,c){Sk.abstr.checkNoKwargs("dropwhile",c),Sk.abstr.checkArgsLen("dropwhile",b,2,2);const d=b[0],e=Sk.abstr.iter(b[1]);if(this===a.dropwhile.prototype)return new a.dropwhile(d,e);else{const b=new this.constructor;return a.dropwhile.call(b,d,e),b}}}}),a.filterfalse=Sk.abstr.buildIteratorClass("itertools.filterfalse",{constructor:function filterfalse(a,b){this.predicate=a,this.iter=b},iternext(){let a=this.iter.tp$iternext();if(void 0!==a){for(let b=Sk.misceval.callsimArray(this.predicate,[a]);Sk.misceval.isTrue(b);){if(a=this.iter.tp$iternext(),void 0===a)return;b=Sk.misceval.callsimArray(this.predicate,[a])}return a}},slots:{tp$doc:"filterfalse(function or None, sequence) --> filterfalse object\\n\\nReturn those items of sequence for which function(item) is false.\\nIf function is None, return the items that are false.",tp$new(b,c){Sk.abstr.checkNoKwargs("filterfalse",c),Sk.abstr.checkArgsLen("filterfalse",b,2,2);const d=Sk.builtin.checkNone(b[0])?Sk.builtin.bool:b[0],e=Sk.abstr.iter(b[1]);if(this===a.filterfalse.prototype)return new a.filterfalse(d,e);else{const b=new this.constructor;return a.filterfalse.call(b,d,e),b}}}}),a._grouper=Sk.abstr.buildIteratorClass("itertools._grouper",{constructor:function _grouper(a){this.groupby=a,this.tgtkey=a.tgtkey,this.id=a.id},iternext(){const a=Sk.misceval.richCompareBool(this.groupby.currkey,this.tgtkey,"Eq");if(this.groupby.id===this.id&&a){let a=this.groupby.currval;return this.groupby.currval=this.groupby.iter.tp$iternext(),void 0!==this.groupby.currval&&(this.groupby.currkey=Sk.misceval.callsimArray(this.groupby.keyf,[this.groupby.currval])),a}}}),a.groupby=Sk.abstr.buildIteratorClass("itertools.groupby",{constructor:function groupby(a,b){this.iter=a,this.keyf=b,this.currval,this.currkey=this.tgtkey=new Sk.builtin.object,this.id},iternext(){this.id={};for(let a=Sk.misceval.richCompareBool(this.currkey,this.tgtkey,"Eq");a;){if(this.currval=this.iter.tp$iternext(),void 0===this.currval)return;this.currkey=Sk.misceval.callsimArray(this.keyf,[this.currval]),a=Sk.misceval.richCompareBool(this.currkey,this.tgtkey,"Eq")}this.tgtkey=this.currkey;const b=new a._grouper(this);return new Sk.builtin.tuple([this.currkey,b])},slots:{tp$doc:"groupby(iterable, key=None) -> make an iterator that returns consecutive\\nkeys and groups from the iterable.  If the key function is not specified or\\nis None, the element itself is used for grouping.\\n",tp$new(b,c){let d,e;if([d,e]=Sk.abstr.copyKeywordsToNamedArgs("groupby",["iterable","key"],b,c,[Sk.builtin.none.none$]),d=Sk.abstr.iter(d),e=Sk.builtin.checkNone(e)?new Sk.builtin.func(a=>a):e,this===a.groupby.prototype)return new a.groupby(d,e);else{const b=new this.constructor;return a.groupby.call(b,d,e),b}}}}),a.islice=Sk.abstr.buildIteratorClass("itertools.islice",{constructor:function islice(a,b,c,d){this.iter=a,this.previt=b,this.stop=c,this.step=d,this.tp$iternext=()=>{if(this.tp$iternext=this.constructor.prototype.tp$iternext,this.previt>=this.stop){for(let a=0;a<this.stop;a++)this.iter.tp$iternext();return}for(let a=0;a<this.previt;a++)this.iter.tp$iternext();return this.iter.tp$iternext()}},iternext(){if(this.previt+this.step>=this.stop){for(let a=this.previt+1;a<this.stop;a++)this.previt+=this.step,this.iter.tp$iternext();return}for(let a=this.previt+1;a<this.previt+this.step;a++)this.iter.tp$iternext();return this.previt+=this.step,this.iter.tp$iternext()},slots:{tp$doc:"islice(iterable, stop) --> islice object\\nislice(iterable, start, stop[, step]) --> islice object\\n\\nReturn an iterator whose next() method returns selected values from an\\niterable.  If start is specified, will skip all preceding elements;\\notherwise, start defaults to zero.  Step defaults to one.  If\\nspecified as another value, step determines how many values are \\nskipped between successive calls.  Works like a slice() on a list\\nbut returns an iterator.",tp$new(b,c){var d=Number.MAX_SAFE_INTEGER;Sk.abstr.checkNoKwargs("islice",c),Sk.abstr.checkArgsLen("islice",b,2,4);const e=Sk.abstr.iter(b[0]);let f=b[1],g=b[2],h=b[3];if(void 0===g?(g=f,f=Sk.builtin.none.none$,h=Sk.builtin.none.none$):void 0===h&&(h=Sk.builtin.none.none$),!(Sk.builtin.checkNone(g)||Sk.misceval.isIndex(g)))throw new Sk.builtin.ValueError("Stop for islice() must be None or an integer: 0 <= x <= sys.maxsize.");else if(g=Sk.builtin.checkNone(g)?d:Sk.misceval.asIndexSized(g),0>g||g>d)throw new Sk.builtin.ValueError("Stop for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(!(Sk.builtin.checkNone(f)||Sk.misceval.isIndex(f)))throw new Sk.builtin.ValueError("Indices for islice() must be None or an integer: 0 <= x <= sys.maxsize.");else if(f=Sk.builtin.checkNone(f)?0:Sk.misceval.asIndexSized(f),0>f||f>d)throw new Sk.builtin.ValueError("Indices for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(!(Sk.builtin.checkNone(h)||Sk.misceval.isIndex(h)))throw new Sk.builtin.ValueError("Step for islice() must be a positive integer or None");else if(h=Sk.builtin.checkNone(h)?1:Sk.misceval.asIndexSized(h),0>=h||h>d)throw new Sk.builtin.ValueError("Step for islice() must be a positive integer or None.");if(this===a.islice.prototype)return new a.islice(e,f,g,h);else{const b=new this.constructor;return a.islice.call(b,e,f,g,h),b}}}}),a.permutations=Sk.abstr.buildIteratorClass("itertools.permutations",{constructor:function permutations(a,b){this.pool=a,this.r=b;const c=a.length;this.indices=Array(c).fill().map((a,b)=>b),this.cycles=Array(b).fill().map((a,b)=>c-b),this.n=c,this.tp$iternext=()=>{if(!(this.r>this.n))return this.tp$iternext=this.constructor.prototype.tp$iternext,new Sk.builtin.tuple(this.pool.slice(0,this.r))}},iternext(){for(let a=this.r-1;0<=a;a--)if(this.cycles[a]--,0==this.cycles[a])this.indices.push(this.indices.splice(a,1)[0]),this.cycles[a]=this.n-a;else{j=this.cycles[a],[this.indices[a],this.indices[this.n-j]]=[this.indices[this.n-j],this.indices[a]];const b=this.indices.map(a=>this.pool[a]).slice(0,this.r);return new Sk.builtin.tuple(b)}this.r=0},slots:{tp$doc:"permutations(iterable[, r]) --> permutations object\\n\\nReturn successive r-length permutations of elements in the iterable.\\n\\npermutations(range(3), 2) --> (0,1), (0,2), (1,0), (1,2), (2,0), (2,1)",tp$new(b,c){let d,e;[d,e]=Sk.abstr.copyKeywordsToNamedArgs("permutations",["iterable","r"],b,c,[Sk.builtin.none.none$]);const f=Sk.misceval.arrayFromIterable(d);if(e=Sk.builtin.checkNone(e)?f.length:Sk.misceval.asIndexSized(e,Sk.builtin.OverFlowError),0>e)throw new Sk.builtin.ValueError("r must be non-negative");if(this===a.permutations.prototype)return new a.permutations(f,e);else{const b=new this.constructor;return a.permutations.call(b,f,e),b}}}}),a.product=Sk.abstr.buildIteratorClass("itertools.product",{constructor:function product(a){this.pools=a,this.n=a.length,this.indices=Array(a.length).fill(0),this.pool_sizes=a.map(a=>a.length),this.tp$iternext=()=>{this.tp$iternext=this.constructor.prototype.tp$iternext;const a=this.indices.map((a,b)=>this.pools[b][this.indices[b]]);return a.some(a=>void 0===a)?void(this.n=0):new Sk.builtin.tuple(a)}},iternext(){for(let a=this.n-1;0<=a&&a<this.n;)this.indices[a]++,this.indices[a]>=this.pool_sizes[a]?(this.indices[a]=-1,a--):a++;if(!this.n||this.indices.every(a=>-1===a))return void(this.n=0);else{const a=this.indices.map((a,b)=>this.pools[b][this.indices[b]]);return new Sk.builtin.tuple(a)}},slots:{tp$doc:"product(*iterables, repeat=1) --> product object\\n\\nCartesian product of input iterables.  Equivalent to nested for-loops.\\n\\nFor example, product(A, B) returns the same as:  ((x,y) for x in A for y in B).\\nThe leftmost iterators are in the outermost for-loop, so the output tuples\\ncycle in a manner similar to an odometer (with the rightmost element changing\\non every iteration).\\n\\nTo compute the product of an iterable with itself, specify the number\\nof repetitions with the optional repeat keyword argument. For example,\\nproduct(A, repeat=4) means the same as product(A, A, A, A).\\n\\nproduct('ab', range(3)) --> ('a',0) ('a',1) ('a',2) ('b',0) ('b',1) ('b',2)\\nproduct((0,1), (0,1), (0,1)) --> (0,0,0) (0,0,1) (0,1,0) (0,1,1) (1,0,0) ...",tp$new(b,c){let[d]=Sk.abstr.copyKeywordsToNamedArgs("product",["repeat"],[],c,[new Sk.builtin.int_(1)]);if(d=Sk.misceval.asIndexSized(d,Sk.builtin.OverFlowError),0>d)throw new Sk.builtin.ValueError("repeat argument cannot be negative");const e=[];for(let a=0;a<b.length;a++)e.push(Sk.misceval.arrayFromIterable(b[a]));const f=[].concat(...Array(d).fill(e));if(this===a.product.prototype)return new a.product(f);else{const b=new this.constructor;return a.product.call(b,f),b}}}}),a.repeat=Sk.abstr.buildIteratorClass("itertools.repeat",{constructor:function repeat(a,b){this.object=a,this.times=b,void 0===b&&(this.tp$iternext=()=>this.object)},iternext(){return 0<this.times--?this.object:void 0},slots:{tp$doc:"repeat(object [,times]) -> create an iterator which returns the object\\nfor the specified number of times.  If not specified, returns the object\\nendlessly.",tp$new(b,c){let d,e;if([d,e]=Sk.abstr.copyKeywordsToNamedArgs("repeat",["object","times"],b,c,[null]),e=null===e?void 0:Sk.misceval.asIndexSized(e,Sk.builtin.OverFlowError),this===a.repeat.prototype)return new a.repeat(d,e);else{const b=new this.constructor;return a.repeat.call(b,d,e),b}},$r(){return object_repr=Sk.misceval.objectRepr(this.object),times_repr=void 0===this.times?"":", "+(0<=this.times?this.times:0),new Sk.builtin.str(Sk.abstr.typeName(this)+"("+object_repr+times_repr+")")}},methods:{__lenght_hint__:{$meth(){if(void 0===this.times)throw new Sk.builtin.TypeError("len() of unsized object");return new Sk.builtin.int_(this.times)},$flags:{NoArgs:!0},$textsig:null}}}),a.starmap=Sk.abstr.buildIteratorClass("itertools.starmap",{constructor:function starmap(a,b){this.func=a,this.iter=b},iternext(){const a=this.iter.tp$iternext();if(void 0===a)return;const b=Sk.misceval.arrayFromIterable(a),c=Sk.misceval.callsimArray(this.func,b);return c},slots:{tp$new(b,c){let d,e;if([d,e]=Sk.abstr.copyKeywordsToNamedArgs("starmap",["func","iterable"],b,c,[]),e=Sk.abstr.iter(e),d=Sk.builtin.checkNone(d)?Sk.builtin.bool:d,this===a.starmap.prototype)return new a.starmap(d,e);else{const b=new this.constructor;return a.starmap.call(b,d,e),b}}}}),a.takewhile=Sk.abstr.buildIteratorClass("itertools.takewhile",{constructor:function takewhile(a,b){this.predicate=a,this.iter=b},iternext(){const a=this.iter.tp$iternext();if(void 0!==a){const b=Sk.misceval.callsimArray(this.predicate,[a]);if(Sk.misceval.isTrue(b))return a;this.tp$iternext=()=>void 0}},slots:{tp$doc:"takewhile(predicate, iterable) --> takewhile object\\n\\nReturn successive entries from an iterable as long as the \\npredicate evaluates to true for each entry.",tp$new(b,c){Sk.abstr.checkNoKwargs("takewhile",c),Sk.abstr.checkArgsLen("takewhile",b,2,2);const d=b[0],e=Sk.abstr.iter(b[1]);if(this===a.takewhile.prototype)return new a.takewhile(d,e);else{const b=new this.constructor;return a.takewhile.call(b,d,e),b}}}}),a.tee=new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("tee is not yet implemented in Skulpt")}),a.zip_longest=Sk.abstr.buildIteratorClass("itertools.zip_longest",{constructor:function zip_longest(a,b){this.iters=a,this.fillvalue=b,this.active=this.iters.length},iternext(){if(!this.active)return;let b;const c=[];for(let d=0;d<this.iters.length;d++){if(b=this.iters[d].tp$iternext(),void 0===b){if(this.active--,!this.active)return;this.iters[d]=new a.repeat(this.fillvalue),b=this.fillvalue}c.push(b)}return new Sk.builtin.tuple(c)},slots:{tp$doc:"zip_longest(iter1 [,iter2 [...]], [fillvalue=None]) --> zip_longest object\\n\\nReturn a zip_longest object whose .__next__() method returns a tuple where\\nthe i-th element comes from the i-th iterable argument.  The .__next__()\\nmethod continues until the longest iterable in the argument sequence\\nis exhausted and then it raises StopIteration.  When the shorter iterables\\nare exhausted, the fillvalue is substituted in their place.  The fillvalue\\ndefaults to None or can be specified by a keyword argument.\\n",tp$new(b,c){const[d]=Sk.abstr.copyKeywordsToNamedArgs("zip_longest",["fillvalue"],[],c,[Sk.builtin.none.none$]),e=[];for(let a=0;a<b.length;a++)e.push(Sk.abstr.iter(b[a]));if(this===a.zip_longest.prototype)return new a.zip_longest(e,d);else{const b=new this.constructor;return a.zip_longest.call(b,e,d),b}}}}),a.__doc__=new Sk.builtin.str("An implementation of the python itertools module in Skulpt"),a.__package__=new Sk.builtin.str(""),a};`,"src/lib/json/__init__.py":`raise NotImplementedError("json is not yet implemented in Skulpt")
`,"src/lib/json/tests/__init__.py":`raise NotImplementedError("tests is not yet implemented in Skulpt")
`,"src/lib/keyword.py":`
__all__ = ["iskeyword", "kwlist"]

kwlist = [
#--start keywords--
        'and',
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'exec',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'not',
        'or',
        'pass',
        'print',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
#--end keywords--
        ]

iskeyword = frozenset(kwlist).__contains__

`,"src/lib/lib-dynload/__init__.py":`raise NotImplementedError("lib-dynload is not yet implemented in Skulpt")
`,"src/lib/lib-tk/__init__.py":`raise NotImplementedError("lib-tk is not yet implemented in Skulpt")
`,"src/lib/lib2to3/__init__.py":`raise NotImplementedError("lib2to3 is not yet implemented in Skulpt")
`,"src/lib/lib2to3/fixes/__init__.py":`raise NotImplementedError("fixes is not yet implemented in Skulpt")
`,"src/lib/lib2to3/pgen2/__init__.py":`raise NotImplementedError("pgen2 is not yet implemented in Skulpt")
`,"src/lib/lib2to3/tests/__init__.py":`raise NotImplementedError("tests is not yet implemented in Skulpt")
`,"src/lib/linecache.py":`raise NotImplementedError("linecache is not yet implemented in Skulpt")
`,"src/lib/locale.py":`raise NotImplementedError("locale is not yet implemented in Skulpt")
`,"src/lib/logging/__init__.py":`raise NotImplementedError("logging is not yet implemented in Skulpt")
`,"src/lib/macpath.py":`raise NotImplementedError("macpath is not yet implemented in Skulpt")
`,"src/lib/macurl2path.py":`raise NotImplementedError("macurl2path is not yet implemented in Skulpt")
`,"src/lib/mailbox.py":`raise NotImplementedError("mailbox is not yet implemented in Skulpt")
`,"src/lib/mailcap.py":`raise NotImplementedError("mailcap is not yet implemented in Skulpt")
`,"src/lib/markupbase.py":`raise NotImplementedError("markupbase is not yet implemented in Skulpt")
`,"src/lib/math.js":`const $builtinmodule=function(){var a=Math.PI,b=Math.sqrt,c=Number.MAX_SAFE_INTEGER,d=Math.E,e=Math.log,f=Math.exp,g=Math.pow,h=Math.log2,i=Number.isFinite,j=Math.floor,k=Math.abs;const l={pi:new Sk.builtin.float_(a),e:new Sk.builtin.float_(d),tau:new Sk.builtin.float_(2*a),nan:new Sk.builtin.float_(NaN),inf:new Sk.builtin.float_(1/0)},n=function(a){return a=a?0>a?-1:1:0>1/a?-1:1,a},o=18;return Sk.abstr.setUpModuleMethods("math",l,{acos:{$meth:function acos(a){var b=Math.acos;return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the arc cosine (measured in radians) of x."},acosh:{$meth:function acosh(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);const c=a+b(a*a-1);return new Sk.builtin.float_(e(c))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the inverse hyperbolic cosine of x."},asin:{$meth:function asin(a){var b=Math.asin;return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the arc sine (measured in radians) of x."},asinh:{$meth:function asinh(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);const c=a+b(a*a+1);return new Sk.builtin.float_(e(c))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the inverse hyperbolic sine of x."},atan:{$meth:function atan(a){var b=Math.atan;return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the arc tangent (measured in radians) of x."},atan2:{$meth:function atan2(a,b){var c=Math.atan2;return Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(b)),new Sk.builtin.float_(c(Sk.builtin.asnum$(a),Sk.builtin.asnum$(b)))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, y, x, /)",$doc:"Return the arc tangent (measured in radians) of y/x.\\n\\nUnlike atan(y/x), the signs of both x and y are considered."},atanh:{$meth:function atanh(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);const b=(1+a)/(1-a);return new Sk.builtin.float_(e(b)/2)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the inverse hyperbolic tangent of x."},ceil:{$meth:function ceil(a){var b=Math.ceil;Sk.builtin.pyCheckType("","real number",Sk.builtin.checkNumber(a));const c=Sk.builtin.asnum$(a);return Sk.__future__.ceil_floor_int?new Sk.builtin.int_(b(c)):new Sk.builtin.float_(b(c))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the ceiling of x as an Integral.\\n\\nThis is the smallest integer >= x."},copysign:{$meth:function copysign(a,b){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));const c=Sk.builtin.asnum$(b),d=Sk.builtin.asnum$(a),e=n(d),f=n(c);return new Sk.builtin.float_(d*(e*f))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return a float with the magnitude (absolute value) of x but the sign of y.\\n\\nOn platforms that support signed zeros, copysign(1.0, -0.0)\\nreturns -1.0.\\n"},cos:{$meth:function cos(a){var b=Math.cos;return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the cosine of x (measured in radians)."},cosh:{$meth:function cosh(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);const b=g(d,a);return new Sk.builtin.float_((b+1/b)/2)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the hyperbolic cosine of x."},degrees:{$meth:function degrees(b){Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(b));const c=180/a*Sk.builtin.asnum$(b);return new Sk.builtin.float_(c)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Convert angle x from radians to degrees."},erf:{$meth:function erf(){throw new Sk.builtin.NotImplementedError("math.erf() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Error function at x."},erfc:{$meth:function erfc(){throw new Sk.builtin.NotImplementedError("math.erfc() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Complementary error function at x."},exp:{$meth:function exp(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=a.v;if("number"!=typeof b&&(b=a.nb$float().v),b==1/0||b==-Infinity||isNaN(b))return new Sk.builtin.float_(f(b));const c=f(b);if(!isFinite(c))throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(c)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return e raised to the power of x."},expm1:{$meth:function expm1(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);if(.7>k(b)){const a=f(b);if(1==a)return new Sk.builtin.float_(b);else{const c=(a-1)*b/e(a);return new Sk.builtin.float_(c)}}else{const a=f(b)-1;return new Sk.builtin.float_(a)}},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return exp(x)-1.\\n\\nThis function avoids the loss of precision involved in the direct evaluation of exp(x)-1 for small x."},fabs:{$meth:function fabs(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=a.v;return JSBI.__isBigInt(b)&&(b=a.nb$float().v),b=k(b),new Sk.builtin.float_(b)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the absolute value of the float x."},factorial:{$meth:function factorial(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=Sk.builtin.asnum$(a);if(a=j(b),a!=b)throw new Sk.builtin.ValueError("factorial() only accepts integral values");if(0>a)throw new Sk.builtin.ValueError("factorial() not defined for negative numbers");let c=1;for(let b=2;b<=a&&b<=o;b++)c*=b;if(a<=o)return new Sk.builtin.int_(c);c=JSBI.BigInt(c);for(let b=19;b<=a;b++)c=JSBI.multiply(c,JSBI.BigInt(b));return new Sk.builtin.int_(c)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Find x!.\\n\\nRaise a ValueError if x is negative or non-integral."},floor:{$meth:function floor(a){return Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.__future__.ceil_floor_int?new Sk.builtin.int_(j(Sk.builtin.asnum$(a))):new Sk.builtin.float_(j(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the floor of x as an Integral.\\n\\nThis is the largest integer <= x."},fmod:{$meth:function fmod(a,b){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));let c=a.v,d=b.v;if("number"!=typeof c&&(c=a.nb$float().v),"number"!=typeof d&&(d=b.nb$float().v),(d==1/0||d==-Infinity)&&isFinite(c))return new Sk.builtin.float_(c);const e=c%d;if(isNaN(e)&&!isNaN(c)&&!isNaN(d))throw new Sk.builtin.ValueError("math domain error");return new Sk.builtin.float_(e)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return fmod(x, y), according to platform C.\\n\\nx % y may differ."},frexp:{$meth:function frexp(a){var b=Math.max;Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const c=Sk.builtin.asnum$(a),d=[c,0];if(0!==c&&i(c)){const a=k(c);let e=b(-1023,j(h(a))+1),f=a*g(2,-e);for(;.5>f;)f*=2,e--;for(;1<=f;)f*=.5,e++;0>c&&(f=-f),d[0]=f,d[1]=e}return d[0]=new Sk.builtin.float_(d[0]),d[1]=new Sk.builtin.int_(d[1]),new Sk.builtin.tuple(d)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the mantissa and exponent of x, as pair (m, e).\\n\\nm is a float and e is an int, such that x = m * 2.**e.\\nIf x is 0, m and e are both 0.  Else 0.5 <= abs(m) < 1.0."},fsum:{$meth:function fsum(a){if(!Sk.builtin.checkIterable(a))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(a)+"' object is not iterable");let b=[];a=Sk.abstr.iter(a);let c,d,e;for(let f=a.tp$iternext();void 0!==f;f=a.tp$iternext()){Sk.builtin.pyCheckType("","real number",Sk.builtin.checkNumber(f)),c=0;let a=f.v;"number"!=typeof a&&(a=f.nb$float().v),f=a;for(let a,g=0,h=b.length;g<h;g++){if(a=b[g],k(f)<k(a)){let b=f;f=a,a=b}d=f+a,e=a-(d-f),e&&(b[c]=e,c++),f=d}b=b.slice(0,c).concat([f])}const f=b.reduce(function(c,a){return c+a},0);return new Sk.builtin.float_(f)},$flags:{OneArg:!0},$textsig:"($module, seq, /)",$doc:"Return an accurate floating point sum of values in the iterable seq.\\n\\nAssumes IEEE-754 floating point arithmetic."},gamma:{$meth:function gamma(){throw new Sk.builtin.NotImplementedError("math.gamma() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Gamma function at x."},gcd:{$meth:function gcd(c,a){function _gcd(c,a){return 0==a?c:_gcd(a,c%a)}function _biggcd(c,a){return JSBI.equal(a,JSBI.__ZERO)?c:_biggcd(a,JSBI.remainder(c,a))}Sk.builtin.pyCheckType("a","integer",Sk.builtin.checkInt(c)),Sk.builtin.pyCheckType("b","integer",Sk.builtin.checkInt(a));let b,d=Sk.builtin.asnum$(c),e=Sk.builtin.asnum$(a);return"number"==typeof d&&"number"==typeof e?(d=k(d),e=k(e),b=_gcd(d,e),b=0>b?-b:b,new Sk.builtin.int_(b)):(d=JSBI.BigInt(d),e=JSBI.BigInt(e),b=_biggcd(d,e),JSBI.lessThan(b,JSBI.__ZERO)&&(b=JSBI.multiply(b,JSBI.BigInt(-1))),new Sk.builtin.int_(b.toString()))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"greatest common divisor of x and y"},hypot:{$meth:function hypot(a,c){return Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(c)),a=Sk.builtin.asnum$(a),c=Sk.builtin.asnum$(c),new Sk.builtin.float_(b(a*a+c*c))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return the Euclidean distance, sqrt(x*x + y*y)."},isclose:{$meth:function isclose(c,d){Sk.abstr.checkArgsLen("isclose",c,2,2),rel_abs_vals=Sk.abstr.copyKeywordsToNamedArgs("isclose",["rel_tol","abs_tol"],[],d,[new Sk.builtin.float_(1e-9),new Sk.builtin.float_(0)]);const e=c[0],a=c[1],b=rel_abs_vals[0],f=rel_abs_vals[1];Sk.builtin.pyCheckType("a","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("b","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("rel_tol","number",Sk.builtin.checkNumber(b)),Sk.builtin.pyCheckType("abs_tol","number",Sk.builtin.checkNumber(f));const g=Sk.builtin.asnum$(e),h=Sk.builtin.asnum$(a),i=Sk.builtin.asnum$(b),j=Sk.builtin.asnum$(f);if(0>i||0>j)throw new Sk.builtin.ValueError("tolerances must be non-negative");if(g==h)return Sk.builtin.bool.true$;if(g==1/0||g==-Infinity||h==1/0||h==-Infinity)return Sk.builtin.bool.false$;const l=k(h-g),m=l<=k(i*h)||l<=k(i*g)||l<=j;return new Sk.builtin.bool(m)},$flags:{FastCall:!0},$textsig:"($module, /, a, b, *, rel_tol=1e-09, abs_tol=0.0)",$doc:"Determine whether two floating point numbers are close in value.\\n\\n  rel_tol\\n    maximum difference for being considered \\"close\\", relative to the\\n    magnitude of the input values\\n  abs_tol\\n    maximum difference for being considered \\"close\\", regardless of the\\n    magnitude of the input values\\n\\nReturn True if a is close in value to b, and False otherwise.\\n\\nFor the values to be considered close, the difference between them\\nmust be smaller than at least one of the tolerances.\\n\\n-inf, inf and NaN behave similarly to the IEEE 754 Standard.  That\\nis, NaN is not close to anything, even itself.  inf and -inf are\\nonly close to themselves."},isfinite:{$meth:function isfinite(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);return Sk.builtin.checkInt(a)?Sk.builtin.bool.true$:isFinite(b)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return True if x is neither an infinity nor a NaN, and False otherwise."},isinf:{$meth:function isinf(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);return Sk.builtin.checkInt(a)?Sk.builtin.bool.false$:isFinite(b)||isNaN(b)?Sk.builtin.bool.false$:Sk.builtin.bool.true$},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return True if x is a positive or negative infinity, and False otherwise."},isnan:{$meth:function isnan(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);return isNaN(b)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return True if x is a NaN (not a number), and False otherwise."},ldexp:{$meth:function ldexp(a,b){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("i","integer",Sk.builtin.checkInt(b));let c=a.v;"number"!=typeof c&&(c=a.nb$float().v);const d=Sk.builtin.asnum$(b);if(c==1/0||c==-Infinity||0==c||isNaN(c))return a;const e=c*g(2,d);if(!isFinite(e))throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(e)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, i, /)",$doc:"Return x * (2**i).\\n\\nThis is essentially the inverse of frexp()."},lgamma:{$meth:function lgamma(){throw new Sk.builtin.NotImplementedError("math.lgamma() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Natural logarithm of absolute value of Gamma function at x."},log:{$meth:function log(a,b){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let f,g,h=Sk.builtin.asnum$(a);if(0>=h)throw new Sk.builtin.ValueError("math domain error");if(void 0===b?f=d:(Sk.builtin.pyCheckType("base","number",Sk.builtin.checkNumber(b)),f=Sk.builtin.asnum$(b)),0>=f)throw new Sk.builtin.ValueError("math domain error");else if(Sk.builtin.checkFloat(a)||h<c)g=e(h)/e(f);else{h=new Sk.builtin.str(a).$jsstr();const b=h.length,c=parseFloat("0."+h);g=(b*e(10)+e(c))/e(f)}return new Sk.builtin.float_(g)},$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:"log(x, [base=e])\\nReturn the logarithm of x to the given base.\\n\\nIf the base not specified, returns the natural logarithm (base e) of x."},log10:{$meth:function log10(a){var b=Math.log10;Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let d,e=Sk.builtin.asnum$(a);if(0>e)throw new Sk.builtin.ValueError("math domain error");else if(Sk.builtin.checkFloat(a)||e<c)d=b(e);else{e=new Sk.builtin.str(a).$jsstr();const c=e.length,f=parseFloat("0."+e);d=c+b(f)}return new Sk.builtin.float_(d)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the base 10 logarithm of x."},log1p:{$meth:function log1p(a){var b=Number.EPSILON;Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let c=a.v;if("number"!=typeof c&&(c=a.nb$float().v),-1>=c)throw new Sk.builtin.ValueError("math domain error");else{if(0==c)return new Sk.builtin.float_(c);if(k(c)<b/2)return new Sk.builtin.float_(c);if(-.5<=c&&1>=c){const a=1+c,b=e(a)-(a-1-c)/a;return new Sk.builtin.float_(b)}else{const a=e(1+c);return new Sk.builtin.float_(a)}}},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the natural logarithm of 1+x (base e).\\n\\nThe result is computed in a way which is accurate for x near zero."},log2:{$meth:function log2(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b,d=Sk.builtin.asnum$(a);if(0>d)throw new Sk.builtin.ValueError("math domain error");else if(Sk.builtin.checkFloat(a)||d<c)b=h(d);else{d=new Sk.builtin.str(a).$jsstr();const c=d.length,e=parseFloat("0."+d);b=c*h(10)+h(e)}return new Sk.builtin.float_(b)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the base 2 logarithm of x."},modf:{$meth:function modf(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));let b=Sk.builtin.asnum$(a);if(!isFinite(b)){if(b==1/0)return new Sk.builtin.tuple([new Sk.builtin.float_(0),new Sk.builtin.float_(b)]);if(b==-Infinity)return new Sk.builtin.tuple([new Sk.builtin.float_(-0),new Sk.builtin.float_(b)]);if(isNaN(b))return new Sk.builtin.tuple([new Sk.builtin.float_(b),new Sk.builtin.float_(b)])}const c=n(b);b=k(b);const e=c*j(b),f=c*(b-j(b));return new Sk.builtin.tuple([new Sk.builtin.float_(f),new Sk.builtin.float_(e)])},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the fractional and integer parts of x.\\n\\nBoth results carry the sign of x and are floats."},pow:{$meth:function pow(a,b){var c=Number.isInteger;Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));let d=a.v,e=b.v;if("number"!=typeof d&&(d=a.nb$float().v),"number"!=typeof e&&(e=b.nb$float().v),0==d&&0>e)throw new Sk.builtin.ValueError("math domain error");else{if(1==d)return new Sk.builtin.float_(1);if(i(d)&&i(e)&&0>d&&!c(e))throw new Sk.builtin.ValueError("math domain error");else if(-1==d&&(e==-Infinity||e==1/0))return new Sk.builtin.float_(1)}const f=g(d,e);if(!i(d)||!i(e))return new Sk.builtin.float_(f);if(f==1/0||f==-Infinity)throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(f)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return x**y (x to the power of y)."},radians:{$meth:function radians(b){Sk.builtin.pyCheckType("deg","number",Sk.builtin.checkNumber(b));const c=a/180*Sk.builtin.asnum$(b);return new Sk.builtin.float_(c)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Convert angle x from degrees to radians."},remainder:{$meth:function remainder(a,b){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(b));let d=a.v,e=b.v;if("number"!=typeof d&&(d=a.nb$float().v),"number"!=typeof e&&(e=b.nb$float().v),isFinite(d)&&isFinite(e)){let a,b,f,c,g;if(0==e)throw new Sk.builtin.ValueError("math domain error");if(a=k(d),b=k(e),c=a%b,f=b-c,c<f)g=c;else if(c>f)g=-f;else{if(c!=f)throw new Sk.builtin.AssertionError;g=c-2*(.5*(a-c)%b)}return new Sk.builtin.float_(n(d)*g)}if(isNaN(d))return a;if(isNaN(e))return b;if(d==1/0||d==-Infinity)throw new Sk.builtin.ValueError("math domain error");if(e!=1/0&&e!=-Infinity)throw new Sk.builtin.AssertionError;return new Sk.builtin.float_(d)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Difference between x and the closest integer multiple of y.\\n\\nReturn x - n*y where n*y is the closest integer multiple of y.\\nIn the case where x is exactly halfway between two multiples of\\ny, the nearest even value of n is used. The result is always exact."},sin:{$meth:function sin(a){var b=Math.sin;return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the sine of x (measured in radians)."},sinh:{$meth:function sinh(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),a=Sk.builtin.asnum$(a);const b=g(d,a);return new Sk.builtin.float_((b-1/b)/2)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the hyperbolic sine of x."},sqrt:{$meth:function sqrt(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const c=Sk.builtin.asnum$(a);if(0>c)throw new Sk.builtin.ValueError("math domain error");return new Sk.builtin.float_(b(c))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the square root of x."},tan:{$meth:function tan(a){var b=Math.tan;return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(a)),new Sk.builtin.float_(b(Sk.builtin.asnum$(a)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the tangent of x (measured in radians)."},tanh:{$meth:function tanh(a){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a));const b=Sk.builtin.asnum$(a);if(0===b)return new Sk.builtin.float_(b);const c=g(d,b),e=1/c;return new Sk.builtin.float_((c-e)/2/((c+e)/2))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the hyperbolic tangent of x."},trunc:{$meth:function trunc(a){return Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(a)),Sk.builtin.checkInt(a)?a:new Sk.builtin.int_(0|Sk.builtin.asnum$(a))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Truncates the Real x to the nearest Integral toward 0.\\n\\nUses the __trunc__ magic method."}}),l};`,"src/lib/md5.py":`raise NotImplementedError("md5 is not yet implemented in Skulpt")
`,"src/lib/mhlib.py":`raise NotImplementedError("mhlib is not yet implemented in Skulpt")
`,"src/lib/mimetools.py":`raise NotImplementedError("mimetools is not yet implemented in Skulpt")
`,"src/lib/mimetypes.py":`raise NotImplementedError("mimetypes is not yet implemented in Skulpt")
`,"src/lib/mimify.py":`raise NotImplementedError("mimify is not yet implemented in Skulpt")
`,"src/lib/modulefinder.py":`raise NotImplementedError("modulefinder is not yet implemented in Skulpt")
`,"src/lib/multifile.py":`raise NotImplementedError("multifile is not yet implemented in Skulpt")
`,"src/lib/multiprocessing/__init__.py":`raise NotImplementedError("multiprocessing is not yet implemented in Skulpt")
`,"src/lib/multiprocessing/dummy/__init__.py":`raise NotImplementedError("dummy is not yet implemented in Skulpt")
`,"src/lib/mutex.py":`raise NotImplementedError("mutex is not yet implemented in Skulpt")
`,"src/lib/netrc.py":`raise NotImplementedError("netrc is not yet implemented in Skulpt")
`,"src/lib/new.py":`raise NotImplementedError("new is not yet implemented in Skulpt")
`,"src/lib/nntplib.py":`raise NotImplementedError("nntplib is not yet implemented in Skulpt")
`,"src/lib/ntpath.py":`raise NotImplementedError("ntpath is not yet implemented in Skulpt")
`,"src/lib/nturl2path.py":`raise NotImplementedError("nturl2path is not yet implemented in Skulpt")
`,"src/lib/numbers.py":`Number = (int, float, complex)
Integral = int
Complex = complex
`,"src/lib/opcode.py":`raise NotImplementedError("opcode is not yet implemented in Skulpt")
`,"src/lib/operator.js":`function $builtinmodule(){return operator={__name__:new Sk.builtin.str("operator"),__doc__:new Sk.builtin.str("Operator interface.\\n\\nThis module exports a set of functions implemented in javascript corresponding\\nto the intrinsic operators of Python.  For example, operator.add(x, y)\\nis equivalent to the expression x+y.  The function names are those\\nused for special methods; variants without leading and trailing\\n'__' are also provided for convenience."),__all__:new Sk.builtin.list(["abs","add","and_","attrgetter","concat","contains","countOf","delitem","eq","floordiv","ge","getitem","gt","iadd","iand","iconcat","ifloordiv","ilshift","imatmul","imod","imul","index","indexOf","inv","invert","ior","ipow","irshift","is_","is_not","isub","itemgetter","itruediv","ixor","le","length_hint","lshift","lt","matmul","methodcaller","mod","mul","ne","neg","not_","or_","pos","pow","rshift","setitem","sub","truediv","truth","xor"].map(a=>new Sk.builtin.str(a)))},operator.itemgetter=Sk.abstr.buildNativeClass("operator.itemgetter",{constructor:function itemgetter(a){this.items=a,this.oneitem=1===a.length,this.item=a[0],this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$new(a,b){return Sk.abstr.checkNoKwargs("itemgetter",b),Sk.abstr.checkArgsLen("itemgetter",a,1),new operator.itemgetter(a)},tp$call(a,b){Sk.abstr.checkNoKwargs("itemgetter",b),Sk.abstr.checkArgsLen("itemgetter",a,1,1);const c=a[0];return this.oneitem?Sk.abstr.objectGetItem(c,this.item,!0):new Sk.builtin.tuple(this.items.map(a=>Sk.abstr.objectGetItem(c,a)))},tp$doc:"Return a callable object that fetches the given item(s) from its operand.\\n            After f = itemgetter(2), the call f(r) returns r[2].\\n            After g = itemgetter(2, 5, 3), the call g(r) returns (r[2], r[5], r[3])",$r(){if(this.in$repr)return new Sk.builtin.str(this.tp$name+"(...)");this.in$repr=!0;const a=this.tp$name+"("+this.items.map(a=>Sk.misceval.objectRepr(a)).join(", ")+")";return this.in$repr=!1,a}}}),operator.attrgetter=Sk.abstr.buildNativeClass("operator.attrgetter",{constructor:function attrgetter(a){this.attrs=a,this.oneattr=1===a.length,this.attr=a[0],this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$new(a,b){Sk.abstr.checkNoKwargs("attrgetter",b),Sk.abstr.checkArgsLen("attrgetter",a,1);const c=[];for(let d=0;d<a.length;d++){const b=a[d];if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("attribute name must be a string");b.v.includes(".")?c.push(b.$jsstr().split(".").map(a=>new Sk.builtin.str(a))):c.push([b])}return new operator.attrgetter(c)},tp$call(a,b){Sk.abstr.checkNoKwargs("attrgetter",b),Sk.abstr.checkArgsLen("attrgetter",a,1,1);const c=a[0];if(this.oneattr)return this.attr.reduce((a,b)=>Sk.abstr.gattr(a,b),c);const d=this.attrs.map(a=>a.reduce((a,b)=>Sk.abstr.gattr(a,b),c));return new Sk.builtin.tuple(d)},tp$doc:"attrgetter(attr, ...) --> attrgetter object\\n\\nReturn a callable object that fetches the given attribute(s) from its operand.\\nAfter f = attrgetter('name'), the call f(r) returns r.name.\\nAfter g = attrgetter('name', 'date'), the call g(r) returns (r.name, r.date).\\nAfter h = attrgetter('name.first', 'name.last'), the call h(r) returns\\n(r.name.first, r.name.last).",$r(){if(this.in$repr)return new Sk.builtin.str(this.tp$name+"(...)");this.in$repr=!0;const a=this.tp$name+"("+this.items.map(a=>Sk.misceval.objectRepr(a)).join(", ")+")";return this.in$repr=!1,a}}}),operator.methodcaller=Sk.abstr.buildNativeClass("operator.methodcaller",{constructor:function methodcaller(a,b,c){this.$name=a,this.args=b,this.kwargs=c||[],this.in$repr=!1},slots:{tp$getattr:Sk.generic.getAttr,tp$new(a,b){Sk.abstr.checkArgsLen("methodcaller",a,1);const c=a[0];if(!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("method name must be a string");return new operator.methodcaller(c,a.slice(1),b)},tp$call(a,b){Sk.abstr.checkNoKwargs("methodcaller",b),Sk.abstr.checkArgsLen("methodcaller",a,1,1);const c=a[0];return Sk.misceval.chain(Sk.abstr.gattr(c,this.$name,!0),a=>Sk.misceval.callsimOrSuspendArray(a,this.args,this.kwargs))},tp$doc:"methodcaller(name, ...) --> methodcaller object\\n\\nReturn a callable object that calls the given method on its operand.\\nAfter f = methodcaller('name'), the call f(r) returns r.name().\\nAfter g = methodcaller('name', 'date', foo=1), the call g(r) returns\\nr.name('date', foo=1).",$r(){if(this.in$repr)return new Sk.builtin.str(this.tp$name+"(...)");this.in$repr=!0;let a=[Sk.misceval.objectRepr(this.$name),...this.args.map(a=>Sk.misceval.objectRepr(a))];for(let b=0;b<this.kwargs.length;b+=2)a.push(this.kwargs[b]+"="+Sk.misceval.objectRepr(this.kwargs[b+1]));return a=this.tp$name+"("+a.join(", ")+")",this.in$repr=!1,a}}}),Sk.abstr.setUpModuleMethods("operator",operator,{lt:{$meth:function lt(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Lt"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a < b."},le:{$meth:function le(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"LtE"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a <= b."},eq:{$meth:function eq(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Eq"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a == b."},ne:{$meth:function ne(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"NotEq"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a != b."},ge:{$meth:function ge(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"GtE"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a >= b."},gt:{$meth:function gt(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Gt"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a > b."},not_:{$meth:function not_(a){return Sk.abstr.numberUnaryOp(a,"Not")},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Same as not a."},truth:{$meth:function truth(a){return Sk.builtin.bool(a)},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Return True if a is true, False otherwise."},is_:{$meth:function is_(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"Is"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a is b."},is_not:{$meth:function is_not(c,a){return Sk.builtin.bool(Sk.misceval.richCompareBool(c,a,"IsNot"))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a is not b."},abs:{$meth:function abs(a){return Sk.builtin.abs(a)},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Same as abs(a)."},add:{$meth:function add(c,a){return Sk.abstr.numberBinOp(c,a,"Add")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a + b."},and_:{$meth:function and_(c,a){return Sk.abstr.numberBinOp(c,a,"BitAnd")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a & b."},floordiv:{$meth:function floordiv(c,a){return Sk.abstr.numberBinOp(c,a,"FloorDiv")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a // b."},index:{$meth:function index(b){return new Sk.builtin.int_(Sk.misceval.asIndexOrThrow(b))},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Same as a.__index__()"},inv:{$meth:function inv(a){return Sk.abstr.numberUnaryOp(a,"Invert")},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Same as ~a."},invert:{$meth:function invert(a){return Sk.abstr.numberUnaryOp(a,"Invert")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, /)",$doc:"Same as ~a."},lshift:{$meth:function lshift(c,a){return Sk.abstr.numberBinOp(c,a,"LShift")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a << b."},mod:{$meth:function mod(c,a){return Sk.abstr.numberBinOp(c,a,"Mod")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a % b."},mul:{$meth:function mul(c,a){return Sk.abstr.numberBinOp(c,a,"Mult")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a * b."},matmul:{$meth:function matmul(c,a){return Sk.abstr.numberBinOp(c,a,"MatMult")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a @ b."},neg:{$meth:function neg(a){return Sk.abstr.numberUnaryOp(a,"USub")},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Same as -a."},or_:{$meth:function or_(c,a){return Sk.abstr.numberBinOp(c,a,"BitOr")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a | b."},pos:{$meth:function pos(a){return Sk.abstr.numberUnaryOp(a,"UAdd")},$flags:{OneArg:!0},$textsig:"($module, a, /)",$doc:"Same as +a."},pow:{$meth:function pow(c,a){return Sk.abstr.numberBinOp(c,a,"Pow")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a ** b."},rshift:{$meth:function rshift(c,a){return Sk.abstr.numberBinOp(c,a,"RShift")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a >> b."},sub:{$meth:function sub(c,a){return Sk.abstr.numberBinOp(c,a,"Sub")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a - b."},truediv:{$meth:function div(c,a){return Sk.abstr.numberBinOp(c,a,"Div")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a / b."},xor:{$meth:function xor(c,a){return Sk.abstr.numberBinOp(c,a,"BitXor")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a ^ b."},concat:{$meth:function concat(c,a){return Sk.abstr.sequenceConcat(c,a)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a + b, for a and b sequences."},contains:{$meth:function contains(c,a){return Sk.builtin.bool(Sk.abstr.sequenceContains(c,a))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as b in a (note reversed operands)."},countOf:{$meth:function countOf(c,a){return Sk.abstr.sequenceGetCountOf(c,a)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Return the number of times b occurs in a."},delitem:{$meth:function delitem(c,a){return Sk.misceval.chain(Sk.abstr.objectDelItem(c,a,!0),()=>Sk.builtin.none.none$)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as del a[b]."},getitem:{$meth:function getitem(c,a){return Sk.abstr.objectGetItem(c,a)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a[b]."},indexOf:{$meth:function indexOf(c,a){return Sk.abstr.sequenceGetIndexOf(c,a)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Return the first index of b in a."},setitem:{$meth:function setitem(d,a,b){return Sk.misceval.chain(Sk.abstr.objectSetItem(d,a,b,!0),()=>Sk.builtin.none.none$)},$flags:{MinArgs:3,MaxArgs:3},$textsig:"($module, a, b, c, /)",$doc:"Same as a[b] = c."},length_hint:{$meth:function length_hint(a,b){if(void 0===b)b=new Sk.builtin.int_(0);else if(!Sk.builtin.checkInt(b))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(b)+"' object cannot be interpreted as an integer");try{return Sk.builtin.len(a)}catch(a){if(!(a instanceof Sk.builtin.TypeError))throw a}const c=Sk.abstr.lookupSpecial(a,Sk.builtin.str.$length_hint);if(void 0!==c){const a=Sk.misceval.callsimArray(c,[]);if(a===Sk.builtin.NotImplemented.NotImplemented$)return b;if(!Sk.builtin.checkInteger(a))throw new Sk.builtin.TypeError("__length_hint__ must be an integer, not "+Sk.abstr.typeName(a));else if(a.nb$isnegative())throw new Sk.builtin.TypeError("__length_hint__() should return >= 0");return a}return b},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, obj, default=0, /)",$doc:"Return an estimate of the number of items in obj.\\n\\nThis is useful for presizing containers when building from an iterable.\\n\\nIf the object supports len(), the result will be exact.\\nOtherwise, it may over- or under-estimate by an arbitrary amount.\\nThe result will be an integer >= 0."},iadd:{$meth:function iadd(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"Add")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a += b."},iand:{$meth:function iand(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"BitAnd")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a &= b."},iconcat:{$meth:function iconcat(c,a){if(void 0!==c.sq$inplace_concat)return c.sq$inplace_concat(a);if(void 0!==c.sq$concat)return c.sq$concat(a);if(!Sk.builtin.checkSequence(c)||!Sk.builtin.checkSequence(a))throw new Sk.builtin.TypeError(Sk.abstr.typeName(c)+" object can't be concatenated");return Sk.abstr.numberInplaceBinOp(c,a,"Add")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a += b, for a and b sequences."},ifloordiv:{$meth:function ifloordiv(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"FloorDiv")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a //= b."},ilshift:{$meth:function ilshift(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"LShift")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a <<= b."},imod:{$meth:function imod(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"Mod")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a %= b."},imul:{$meth:function imul(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"Mult")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a *= b."},imatmul:{$meth:function imatmul(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"MatMult")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a @= b."},ior:{$meth:function ior(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"BitOr")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a |= b."},ipow:{$meth:function ipow(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"Pow")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a **= b."},irshift:{$meth:function irshift(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"LRhift")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a >>= b."},isub:{$meth:function isub(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"Sub")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a -= b."},itruediv:{$meth:function idiv(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"Div")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a /= b."},ixor:{$meth:function ixor(c,a){return Sk.abstr.numberInplaceBinOp(c,a,"BitXor")},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)",$doc:"Same as a ^= b."}}),Object.assign(operator,{__abs__:operator.abs,__add__:operator.add,__and__:operator.and,__concat__:operator.concat,__contains__:operator.contains,__delitem__:operator.delitem,__eq__:operator.eq,__floordiv__:operator.floordiv,__ge__:operator.ge,__getitem__:operator.getitem,__gt__:operator.gt,__iadd__:operator.iadd,__iand__:operator.iand,__iconcat__:operator.iconcat,__ifloordiv__:operator.ifloordiv,__ilshift__:operator.ilshift,__imatmul__:operator.imatmul,__imod__:operator.imod,__imul__:operator.imul,__index__:operator.index,__inv__:operator.inv,__invert__:operator.invert,__ior__:operator.ior,__ipow__:operator.ipow,__irshift__:operator.irshift,__isub__:operator.isub,__itruediv__:operator.itruediv,__ixor__:operator.ixor,__le__:operator.le,__lshift__:operator.lshift,__lt__:operator.lt,__matmul__:operator.matmul,__mod__:operator.mod,__mul__:operator.mul,__ne__:operator.ne,__neg__:operator.neg,__not__:operator.not,__or__:operator.or,__pos__:operator.pos,__pow__:operator.pow,__rshift__:operator.rshift,__setitem__:operator.setitem,__sub__:operator.sub,__truediv__:operator.truediv,__xor__:operator.xor,_abs:Sk.builtins.abs,div:operator.truediv,__div__:operator.truediv}),operator}`,"src/lib/optparse.py":`raise NotImplementedError("optparse is not yet implemented in Skulpt")
`,"src/lib/os.py":`raise NotImplementedError("os is not yet implemented in Skulpt")
`,"src/lib/os2emxpath.py":`raise NotImplementedError("os2emxpath is not yet implemented in Skulpt")
`,"src/lib/pdb.py":`raise NotImplementedError("pdb is not yet implemented in Skulpt")
`,"src/lib/pickle.py":`raise NotImplementedError("pickle is not yet implemented in Skulpt")
`,"src/lib/pickletools.py":`raise NotImplementedError("pickletools is not yet implemented in Skulpt")
`,"src/lib/pipes.py":`raise NotImplementedError("pipes is not yet implemented in Skulpt")
`,"src/lib/pkgutil.py":`raise NotImplementedError("pkgutil is not yet implemented in Skulpt")
`,"src/lib/platform.js":'var $builtinmodule=function(){var a={},b="undefined"!=typeof window&&"undefined"!=typeof window.navigator;return a.python_implementation=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("python_implementation",arguments.length,0,0),new Sk.builtin.str("Skulpt")}),a.node=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("node",arguments.length,0,0),new Sk.builtin.str("")}),a.version=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("version",arguments.length,0,0),new Sk.builtin.str("")}),a.python_version=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("python_version",arguments.length,0,0),a=Sk.__future__.python_version?"3.2.0":"2.7.0",new Sk.builtin.str(a)}),a.system=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("system",arguments.length,0,0),a=b?window.navigator.appCodeName:"",new Sk.builtin.str(a)}),a.machine=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("machine",arguments.length,0,0),a=b?window.navigator.platform:"",new Sk.builtin.str(a)}),a.release=new Sk.builtin.func(function(){var a;return Sk.builtin.pyCheckArgsLen("release",arguments.length,0,0),a=b?window.navigator.appVersion:"",new Sk.builtin.str(a)}),a.architecture=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("architecture",arguments.length,0,0),new Sk.builtin.tuple([new Sk.builtin.str("64bit"),new Sk.builtin.str("")])}),a.processor=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("processor",arguments.length,0,0),new Sk.builtin.str("")}),a};',"src/lib/platform.py":`raise NotImplementedError("platform is not yet implemented in Skulpt")
`,"src/lib/plistlib.py":`raise NotImplementedError("plistlib is not yet implemented in Skulpt")
`,"src/lib/popen2.py":`raise NotImplementedError("popen2 is not yet implemented in Skulpt")
`,"src/lib/poplib.py":`raise NotImplementedError("poplib is not yet implemented in Skulpt")
`,"src/lib/posixfile.py":`raise NotImplementedError("posixfile is not yet implemented in Skulpt")
`,"src/lib/posixpath.py":`raise NotImplementedError("posixpath is not yet implemented in Skulpt")
`,"src/lib/pprint.py":`raise NotImplementedError("pprint is not yet implemented in Skulpt")
`,"src/lib/processing.js":`var $builtinmodule=function(){var b,c,d,e,f,g,h,a=Math.PI,j={__name__:new Sk.builtin.str("processing")},k=[],l=!0,m=null;return j.processing=null,j.p=null,j.X=new Sk.builtin.int_(0),j.Y=new Sk.builtin.int_(1),j.Z=new Sk.builtin.int_(2),j.R=new Sk.builtin.int_(3),j.G=new Sk.builtin.int_(4),j.B=new Sk.builtin.int_(5),j.A=new Sk.builtin.int_(6),j.U=new Sk.builtin.int_(7),j.V=new Sk.builtin.int_(8),j.NX=new Sk.builtin.int_(9),j.NY=new Sk.builtin.int_(10),j.NZ=new Sk.builtin.int_(11),j.EDGE=new Sk.builtin.int_(12),j.SR=new Sk.builtin.int_(13),j.SG=new Sk.builtin.int_(14),j.SB=new Sk.builtin.int_(15),j.SA=new Sk.builtin.int_(16),j.SW=new Sk.builtin.int_(17),j.TX=new Sk.builtin.int_(18),j.TY=new Sk.builtin.int_(19),j.TZ=new Sk.builtin.int_(20),j.VX=new Sk.builtin.int_(21),j.VY=new Sk.builtin.int_(22),j.VZ=new Sk.builtin.int_(23),j.VW=new Sk.builtin.int_(24),j.AR=new Sk.builtin.int_(25),j.AG=new Sk.builtin.int_(26),j.AB=new Sk.builtin.int_(27),j.DR=new Sk.builtin.int_(3),j.DG=new Sk.builtin.int_(4),j.DB=new Sk.builtin.int_(5),j.DA=new Sk.builtin.int_(6),j.SPR=new Sk.builtin.int_(28),j.SPG=new Sk.builtin.int_(29),j.SPB=new Sk.builtin.int_(30),j.SHINE=new Sk.builtin.int_(31),j.ER=new Sk.builtin.int_(32),j.EG=new Sk.builtin.int_(33),j.EB=new Sk.builtin.int_(34),j.BEEN_LIT=new Sk.builtin.int_(35),j.VERTEX_FIELD_COUNT=new Sk.builtin.int_(36),j.CENTER=new Sk.builtin.int_(3),j.RADIUS=new Sk.builtin.int_(2),j.CORNERS=new Sk.builtin.int_(1),j.CORNER=new Sk.builtin.int_(0),j.DIAMETER=new Sk.builtin.int_(3),j.BASELINE=new Sk.builtin.int_(0),j.TOP=new Sk.builtin.int_(101),j.BOTTOM=new Sk.builtin.int_(102),j.NORMAL=new Sk.builtin.int_(1),j.NORMALIZED=new Sk.builtin.int_(1),j.IMAGE=new Sk.builtin.int_(2),j.MODEL=new Sk.builtin.int_(4),j.SHAPE=new Sk.builtin.int_(5),j.AMBIENT=new Sk.builtin.int_(0),j.DIRECTIONAL=new Sk.builtin.int_(1),j.SPOT=new Sk.builtin.int_(3),j.RGB=new Sk.builtin.int_(1),j.ARGB=new Sk.builtin.int_(2),j.HSB=new Sk.builtin.int_(3),j.ALPHA=new Sk.builtin.int_(4),j.CMYK=new Sk.builtin.int_(5),j.TIFF=new Sk.builtin.int_(0),j.TARGA=new Sk.builtin.int_(1),j.JPEG=new Sk.builtin.int_(2),j.GIF=new Sk.builtin.int_(3),j.MITER=new Sk.builtin.str("miter"),j.BEVEL=new Sk.builtin.str("bevel"),j.ROUND=new Sk.builtin.str("round"),j.SQUARE=new Sk.builtin.str("butt"),j.PROJECT=new Sk.builtin.str("square"),j.P2D=new Sk.builtin.int_(1),j.JAVA2D=new Sk.builtin.int_(1),j.WEBGL=new Sk.builtin.int_(2),j.P3D=new Sk.builtin.int_(2),j.OPENGL=new Sk.builtin.int_(2),j.PDF=new Sk.builtin.int_(0),j.DXF=new Sk.builtin.int_(0),j.OTHER=new Sk.builtin.int_(0),j.WINDOWS=new Sk.builtin.int_(1),j.MAXOSX=new Sk.builtin.int_(2),j.LINUX=new Sk.builtin.int_(3),j.EPSILON=new Sk.builtin.float_(1e-4),j.MAX_FLOAT=new Sk.builtin.float_(34028235e31),j.MIN_FLOAT=new Sk.builtin.float_(-34028235e31),j.MAX_INT=new Sk.builtin.int_(2147483647),j.MIN_INT=new Sk.builtin.int_(-2147483648),j.HALF_PI=new Sk.builtin.float_(a/2),j.THIRD_PI=new Sk.builtin.float_(a/3),j.PI=new Sk.builtin.float_(a),j.TWO_PI=new Sk.builtin.float_(2*a),j.TAU=new Sk.builtin.float_(2*a),j.QUARTER_PI=new Sk.builtin.float_(a/4),j.DEG_TO_RAD=new Sk.builtin.float_(a/180),j.RAD_TO_DEG=new Sk.builtin.float_(180/a),j.WHITESPACE=new Sk.builtin.str(" \\t\\n\\r\\f\\xA0"),j.POINT=new Sk.builtin.int_(2),j.POINTS=new Sk.builtin.int_(2),j.LINE=new Sk.builtin.int_(4),j.LINES=new Sk.builtin.int_(4),j.TRIANGLE=new Sk.builtin.int_(8),j.TRIANGLES=new Sk.builtin.int_(9),j.TRIANGLE_FAN=new Sk.builtin.int_(11),j.TRIANGLE_STRIP=new Sk.builtin.int_(10),j.QUAD=new Sk.builtin.int_(16),j.QUADS=new Sk.builtin.int_(16),j.QUAD_STRIP=new Sk.builtin.int_(17),j.POLYGON=new Sk.builtin.int_(20),j.PATH=new Sk.builtin.int_(21),j.RECT=new Sk.builtin.int_(30),j.ELLIPSE=new Sk.builtin.int_(31),j.ARC=new Sk.builtin.int_(32),j.SPHERE=new Sk.builtin.int_(40),j.BOX=new Sk.builtin.int_(41),j.GROUP=new Sk.builtin.int_(0),j.PRIMITIVE=new Sk.builtin.int_(1),j.GEOMETRY=new Sk.builtin.int_(3),j.VERTEX=new Sk.builtin.int_(0),j.BEZIER_VERTEX=new Sk.builtin.int_(1),j.CURVE_VERTEX=new Sk.builtin.int_(2),j.BREAK=new Sk.builtin.int_(3),j.CLOSESHAPE=new Sk.builtin.int_(4),j.REPLACE=new Sk.builtin.int_(0),j.BLEND=new Sk.builtin.int_(1),j.ADD=new Sk.builtin.int_(2),j.SUBTRACT=new Sk.builtin.int_(4),j.LIGHTEST=new Sk.builtin.int_(8),j.DARKEST=new Sk.builtin.int_(16),j.DIFFERENCE=new Sk.builtin.int_(32),j.EXCLUSION=new Sk.builtin.int_(64),j.MULTIPLY=new Sk.builtin.int_(128),j.SCREEN=new Sk.builtin.int_(256),j.OVERLAY=new Sk.builtin.int_(512),j.HARD_LIGHT=new Sk.builtin.int_(1024),j.SOFT_LIGHT=new Sk.builtin.int_(2048),j.DODGE=new Sk.builtin.int_(4096),j.BURN=new Sk.builtin.int_(8192),j.ALPHA_MASK=new Sk.builtin.int_(4278190080),j.RED_MASK=new Sk.builtin.int_(16711680),j.GREEN_MASK=new Sk.builtin.int_(65280),j.BLUE_MASK=new Sk.builtin.int_(255),j.CUSTOM=new Sk.builtin.int_(0),j.ORTHOGRAPHIC=new Sk.builtin.int_(2),j.PERSPECTIVE=new Sk.builtin.int_(3),j.ARROW=new Sk.builtin.str("default"),j.CROSS=new Sk.builtin.str("crosshair"),j.HAND=new Sk.builtin.str("pointer"),j.MOVE=new Sk.builtin.str("move"),j.TEXT=new Sk.builtin.str("text"),j.WAIT=new Sk.builtin.str("wait"),j.NOCURSOR=Sk.builtin.assk$("url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto"),j.DISABLE_OPENGL_2X_SMOOTH=new Sk.builtin.int_(1),j.ENABLE_OPENGL_2X_SMOOTH=new Sk.builtin.int_(-1),j.ENABLE_OPENGL_4X_SMOOTH=new Sk.builtin.int_(2),j.ENABLE_NATIVE_FONTS=new Sk.builtin.int_(3),j.DISABLE_DEPTH_TEST=new Sk.builtin.int_(4),j.ENABLE_DEPTH_TEST=new Sk.builtin.int_(-4),j.ENABLE_DEPTH_SORT=new Sk.builtin.int_(5),j.DISABLE_DEPTH_SORT=new Sk.builtin.int_(-5),j.DISABLE_OPENGL_ERROR_REPORT=new Sk.builtin.int_(6),j.ENABLE_OPENGL_ERROR_REPORT=new Sk.builtin.int_(-6),j.ENABLE_ACCURATE_TEXTURES=new Sk.builtin.int_(7),j.DISABLE_ACCURATE_TEXTURES=new Sk.builtin.int_(-7),j.HINT_COUNT=new Sk.builtin.int_(10),j.OPEN=new Sk.builtin.int_(1),j.CLOSE=new Sk.builtin.int_(2),j.BLUR=new Sk.builtin.int_(11),j.GRAY=new Sk.builtin.int_(12),j.INVERT=new Sk.builtin.int_(13),j.OPAQUE=new Sk.builtin.int_(14),j.POSTERIZE=new Sk.builtin.int_(15),j.THRESHOLD=new Sk.builtin.int_(16),j.ERODE=new Sk.builtin.int_(17),j.DILATE=new Sk.builtin.int_(18),j.BACKSPACE=new Sk.builtin.int_(8),j.TAB=new Sk.builtin.int_(9),j.ENTER=new Sk.builtin.int_(10),j.RETURN=new Sk.builtin.int_(13),j.ESC=new Sk.builtin.int_(27),j.DELETE=new Sk.builtin.int_(127),j.CODED=new Sk.builtin.int_(65535),j.SHIFT=new Sk.builtin.int_(16),j.CONTROL=new Sk.builtin.int_(17),j.ALT=new Sk.builtin.int_(18),j.CAPSLK=new Sk.builtin.int_(20),j.PGUP=new Sk.builtin.int_(33),j.PGDN=new Sk.builtin.int_(34),j.END=new Sk.builtin.int_(35),j.HOME=new Sk.builtin.int_(36),j.LEFT=new Sk.builtin.int_(37),j.UP=new Sk.builtin.int_(38),j.RIGHT=new Sk.builtin.int_(39),j.DOWN=new Sk.builtin.int_(40),j.F1=new Sk.builtin.int_(112),j.F2=new Sk.builtin.int_(113),j.F3=new Sk.builtin.int_(114),j.F4=new Sk.builtin.int_(115),j.F5=new Sk.builtin.int_(116),j.F6=new Sk.builtin.int_(117),j.F7=new Sk.builtin.int_(118),j.F8=new Sk.builtin.int_(119),j.F9=new Sk.builtin.int_(120),j.F10=new Sk.builtin.int_(121),j.F11=new Sk.builtin.int_(122),j.F12=new Sk.builtin.int_(123),j.NUMLK=new Sk.builtin.int_(144),j.META=new Sk.builtin.int_(157),j.INSERT=new Sk.builtin.int_(155),j.SINCOS_LENGTH=new Sk.builtin.int_(720),j.PRECISIONB=new Sk.builtin.int_(15),j.PRECISIONF=new Sk.builtin.int_(32768),j.PREC_MAXVAL=new Sk.builtin.int_(32767),j.PREC_ALPHA_SHIFT=new Sk.builtin.int_(9),j.PREC_RED_SHIFT=new Sk.builtin.int_(1),j.NORMAL_MODE_AUTO=new Sk.builtin.int_(0),j.NORMAL_MODE_SHAPE=new Sk.builtin.int_(1),j.NORMAL_MODE_VERTEX=new Sk.builtin.int_(2),j.MAX_LIGHTS=new Sk.builtin.int_(8),j.line=new Sk.builtin.func(function(a,b,c,d){j.processing.line(a.v,b.v,c.v,d.v)}),j.ellipse=new Sk.builtin.func(function(a,b,c,d){j.processing.ellipse(a.v,b.v,c.v,d.v)}),j.text=new Sk.builtin.func(function(a,b,c){j.processing.text(a.v,b.v,c.v)}),j.point=new Sk.builtin.func(function(a,b){j.processing.point(a.v,b.v)}),j.arc=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.arc(a.v,b.v,c.v,d.v,e.v,f.v)}),j.quad=new Sk.builtin.func(function(a,b,c,d,e,f,g,h){j.processing.quad(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v)}),j.rect=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof e?j.processing.rect(a.v,b.v,c.v,d.v):j.processing.rect(a.v,b.v,c.v,d.v,e.v)}),j.triangle=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.triangle(a.v,b.v,c.v,d.v,e.v,f.v)}),j.bezier=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i,k,l,m){"undefined"==typeof i?j.processing.bezier(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):j.processing.bezier(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v,l.v,m.v)}),j.alpha=new Sk.builtin.func(function(a,c,d){return"undefined"==typeof c?new Sk.builtin.float_(j.processing.alpha(a.v)):"undefined"==typeof d?new Sk.builtin.float_(j.processing.alpha(a.v,c.v)):new Sk.builtin.float_(j.processing.alpha(a.v,c.v,d.v))}),j.ambient=new Sk.builtin.func(function(a,c,d){"undefined"==typeof c?j.processing.ambient(a.v):"undefined"==typeof d?j.processing.ambient(a.v,c.v):j.processing.ambient(a.v,c.v,d.v)}),j.ambientLight=new Sk.builtin.func(function(a,b,c,d,e,f){"undefined"==typeof d?j.processing.ambientLight(a.v,b.v,c.v):"undefined"==typeof e?j.processing.ambientLight(a.v,b.v,c.v,d.v):"undefined"==typeof f?j.processing.ambientLight(a.v,b.v,c.v,d.v,e.v):j.processing.ambientLight(a.v,b.v,c.v,d.v,e.v,f.v)}),j.beginCamera=new Sk.builtin.func(function(){j.processing.beginCamera()}),j.beginShape=new Sk.builtin.func(function(a){"undefined"==typeof a&&(a=j.POLYGON),j.processing.beginShape(a.v)}),j.bezierDetail=new Sk.builtin.func(function(a){a="undefined"==typeof a?20:a.v,j.processing.bezierDetail(a)}),j.bezierPoint=new Sk.builtin.func(function(e,a,b,c,d){j.processing.bezierPoint(e.v,a.v,b.v,c.v,d.v)}),j.bezierTangent=new Sk.builtin.func(function(e,a,b,c,d){j.processing.bezierTangent(e.v,a.v,b.v,c.v,d.v)}),j.bezierVertex=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i){"undefined"==typeof g?j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v):"undefined"==typeof h?j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v,g.v):"undefined"==typeof i?j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):j.processing.bezierVertex(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v)}),j.blend=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i,k){other instanceof Sk.builtin.int_||other instanceof Sk.builtin.float_?j.processing.blend(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v):j.processing.blend(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v)}),j.blendColor=new Sk.builtin.func(function(a,b,d){var e=Sk.misceval.callsimArray(j.color,[new Sk.builtin.int_(0),new Sk.builtin.int_(0),new Sk.builtin.int_(0)]);return e.v=j.processing.blendColor(a.v,b.v,d.v),e}),j.brightness=new Sk.builtin.func(function(a,c,d){return"undefined"==typeof c?new Sk.builtin.float_(j.processing.brightness(a.v)):"undefined"==typeof d?new Sk.builtin.float_(j.processing.brightness(a.v,c.v)):new Sk.builtin.float_(j.processing.brightness(a.v,c.v,d.v))}),j.camera=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i){"undefined"==typeof a?j.processing.camera():j.processing.camera(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v)}),j.constrain=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.constrain(a.v,b.v,c.v))}),j.copy=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i){other instanceof Sk.builtin.int_||other instanceof Sk.builtin.float_?j.processing.copy(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):j.processing.copy(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v)}),j.createFont=new Sk.builtin.func(function(a,b,c,d){var e=Sk.misceval.callsimArray(j.PFont);return e.v="undefined"==typeof c?j.processing.createFont(a.v,b.v):"undefined"==typeof d?j.processing.createFont(a.v,b.v,c.v):j.processing.createFont(a.v,b.v,c.v,d.v),e}),j.createGraphics=new Sk.builtin.func(function(a,b,c,d){var e=Sk.misceval.callsimArray(j.PGraphics);return e.v="undefined"==typeof d?j.processing.createGraphics(a.v,b.v,c.v):j.processing.createGraphics(a.v,b.v,c.v,d.v),e}),j.createImage=new Sk.builtin.func(function(a,b,c){var d=Sk.misceval.callsimArray(j.PImage);return d.v=j.processing.createImage(a.v,b.v,c.v),d}),j.cursor=new Sk.builtin.func(function(a,b,c){"undefined"==typeof a?j.processing.cursor():"undefined"==typeof b?j.processing.cursor(a.v):"undefined"==typeof c?j.processing.cursor(a.v,b.v):j.processing.cursor(a.v,b.v,c.v)}),j.curve=new Sk.builtin.func(function(a,b,c,d,e,f,g,h,i,k,l,m){"undefined"==typeof i?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v):"undefined"==typeof k?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v):"undefined"==typeof l?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v):"undefined"==typeof m?j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v,l.v):j.processing.curve(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v,i.v,k.v,l.v,m.v)}),j.curveDetail=new Sk.builtin.func(function(a){j.processing.curveDetail(a.v)}),j.curvePoint=new Sk.builtin.func(function(e,a,b,c,d){j.processing.curvePoint(e.v,a.v,b.v,c.v,d.v)}),j.curveTangent=new Sk.builtin.func(function(e,a,b,c,d){j.processing.curveTangent(e.v,a.v,b.v,c.v,d.v)}),j.curveTightness=new Sk.builtin.func(function(a){j.processing.curveTightness(a.v)}),j.curveVertex=new Sk.builtin.func(function(a,b,c){"undefined"==typeof c?j.processing.curveVertex(a.v,b.v):j.processing.curveVertex(a.v,b.v,c.v)}),j.day=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.day())}),j.degrees=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.degrees(a.v))}),j.directionalLight=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.directionalLight(a.v,b.v,c.v,d.v,e.v,f.v)}),j.dist=new Sk.builtin.func(function(a,b,c,d,e,f){return"undefined"==typeof e?new Sk.builtin.float_(j.processing.dist(a.v,b.v,c.v,d.v)):"undefined"==typeof f?new Sk.builtin.float_(j.processing.dist(a.v,b.v,c.v,d.v,e.v)):new Sk.builtin.float_(j.processing.dist(a.v,b.v,c.v,d.v,e.v,f.v))}),j.emissive=new Sk.builtin.func(function(a,b,c){"undefined"==typeof b?j.processing.emissive(a.v):"undefined"==typeof c?j.processing.emissive(a.v,b.v):j.processing.emissive(a.v,b.v,c.v)}),j.endCamera=new Sk.builtin.func(function(){j.processing.endCamera()}),j.endShape=new Sk.builtin.func(function(a){"undefined"==typeof a?j.processing.endShape():j.processing.endShape(a.v)}),j.filter=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.filter(a.v):j.processing.filter(a.v,b.v)}),j.frustum=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.frustum(a,b,c,d,e,f)}),j.hint=new Sk.builtin.func(function(a){j.processing.hint(a)}),j.hour=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.hour())}),j.hue=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.hue(a.v))}),j.imageMode=new Sk.builtin.func(function(a){j.processing.imageMode(a.v)}),j.lerp=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.lerp(a.v,b.v,c.v))}),j.lerpColor=new Sk.builtin.func(function(a,b,d){var e=Sk.misceval.callsimArray(j.color,[new Sk.builtin.int_(0),new Sk.builtin.int_(0),new Sk.builtin.int_(0)]);return e.v=j.processing.lerpColor(a.v,b.v,d.v),e}),j.lightFalloff=new Sk.builtin.func(function(a,b,c){j.processing.lightFalloff(a.v,b.v,c.v)}),j.lights=new Sk.builtin.func(function(){j.processing.lights()}),j.lightSpecular=new Sk.builtin.func(function(a,b,c){j.processing.lightSpecular(a.v,b.v,c.v)}),j.loadBytes=new Sk.builtin.func(function(a){return new Sk.builtin.list(j.processing.loadBytes(a.v))}),j.loadFont=new Sk.builtin.func(function(a){var b=Sk.misceval.callsimArray(j.PFont);return b.v=j.processing.loadFont(a.v),b}),j.loadShape=new Sk.builtin.func(function(a){var b=Sk.misceval.callsimArray(j.PShapeSVG,[new Sk.builtin.str("string"),a]);return b}),j.loadStrings=new Sk.builtin.func(function(a){return new Sk.builtin.list(j.processing.loadStrings(a.v))}),j.mag=new Sk.builtin.func(function(d,a,b){return"undefined"==typeof b?new Sk.builtin.float_(j.processing.mag(d.v,a.v)):new Sk.builtin.float_(j.processing.mag(d.v,a.v,b.v))}),j.map=new Sk.builtin.func(function(a,b,c,d,e){return new Sk.builtin.float_(j.processing.map(a.v,b.v,c.v,d.v,e.v))}),j.millis=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.millis())}),j.minute=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.minute())}),j.modelX=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.modelX(a.v,b.v,c.v))}),j.modelY=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.modelY(a.v,b.v,c.v))}),j.modelZ=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.modelZ(a.v,b.v,c.v))}),j.month=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.month())}),j.noCursor=new Sk.builtin.func(function(){j.processing.noCursor()}),j.noise=new Sk.builtin.func(function(a,b,c){return"undefined"==typeof b?new Sk.builtin.float_(j.processing.noise(a.v)):"undefined"==typeof c?new Sk.builtin.float_(j.processing.noise(a.v,b.v)):new Sk.builtin.float_(j.processing.noise(a.v,b.v,c.v))}),j.noiseDetail=new Sk.builtin.func(function(a,b){j.processing.noiseDetail(a.v,b.v)}),j.noiseSeed=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.noiseSeed(a.v))}),j.noLights=new Sk.builtin.func(function(){j.processing.noLights()}),j.norm=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.norm(a.v,b.v,c.v))}),j.normal=new Sk.builtin.func(function(a,b,c){j.processing.normal(a.v,b.v,c.v)}),j.noTint=new Sk.builtin.func(function(){j.processing.noTint()}),j.ortho=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.ortho(a.v,b.v,c.v,d.v,e.v,f.v)}),j.perspective=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof a?j.processing.perspective():"undefined"==typeof b?j.processing.perspective(a.v):"undefined"==typeof c?j.processing.perspective(a.v,b.v):"undefined"==typeof d?j.processing.perspective(a.v,b.v,c.v):j.processing.perspective(a.v,b.v,c.v,d.v)}),j.pointLight=new Sk.builtin.func(function(a,b,c,d,e,f){j.processing.pointLight(a.v,b.v,c.v,d.v,e.v,f.v)}),j.printCamera=new Sk.builtin.func(function(){j.processing.printCamera()}),j.println=new Sk.builtin.func(function(a){j.processing.println(a.v)}),j.printProjection=new Sk.builtin.func(function(){j.processing.printProjection()}),j.radians=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.radians(a.v))}),j.randomSeed=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.randomSeed(a.v))}),j.random=new Sk.builtin.func(function(a,b){return"undefined"==typeof a?new Sk.builtin.float_(j.processing.random()):"undefined"==typeof b?new Sk.builtin.float_(j.processing.random(a.v)):new Sk.builtin.float_(j.processing.random(a.v,b.v))}),j.requestImage=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PImage);return c.v="undefined"==typeof b?j.processing.requestImage(a.v):j.processing.requestImage(a.v,b.v),c}),j.saturation=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.saturation(a.v))}),j.save=new Sk.builtin.func(function(a){j.processing.save(a.v)}),j.saveFrame=new Sk.builtin.func(function(a){"undefined"==typeof a?j.processing.saveFrame():j.processing.saveFrame(a.v)}),j.saveStrings=new Sk.builtin.func(function(a,b){j.processing.saveStrings(a.v,b.v)}),j.screenX=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.screenX(a.v,b.v,c.v))}),j.screenY=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.screenY(a.v,b.v,c.v))}),j.screenZ=new Sk.builtin.func(function(a,b,c){return new Sk.builtin.float_(j.processing.screenZ(a.v,b.v,c.v))}),j.second=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.second())}),j.shape=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof b?j.processing.shape(a.v):"undefined"==typeof c?j.processing.shape(a.v,b.v):"undefined"==typeof d?j.processing.shape(a.v,b.v,c.v):"undefined"==typeof e?j.processing.shape(a.v,b.v,c.v,d.v):j.processing.shape(a.v,b.v,c.v,d.v,e.v)}),j.shapeMode=new Sk.builtin.func(function(a){j.processing.shapeMode(a.v)}),j.shininess=new Sk.builtin.func(function(a){j.processing.shininess(a.v)}),j.specular=new Sk.builtin.func(function(a,b,c){"undefined"==typeof b?j.processing.specular(a.v):"undefined"==typeof c?j.processing.specular(a.v,b.v):j.processing.specular(a.v,b.v,c.v)}),j.spotLight=new Sk.builtin.func(function(a,b,c,d,e,f,g,h){j.processing.spotLight(a.v,b.v,c.v,d.v,e.v,f.v,g.v,h.v)}),j.sq=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.sq(a))}),j.status=new Sk.builtin.func(function(a){j.processing.status(a.v)}),j.textAlign=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.textAlign(a.v):j.processing.textAlign(a.v,b.v)}),j.textAscent=new Sk.builtin.func(function(){return new Sk.builtin.float_(j.processing.textAscent())}),j.textDescent=new Sk.builtin.func(function(){return new Sk.builtin.float_(j.processing.textDescent())}),j.textFont=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.textFont(a.v):j.processing.textFont(a.v,b.v)}),j.textLeading=new Sk.builtin.func(function(a){j.processing.textLeading(a.v)}),j.textMode=new Sk.builtin.func(function(a){j.processing.textMode(a.v)}),j.textSize=new Sk.builtin.func(function(a){j.processing.textSize(a.v)}),j.texture=new Sk.builtin.func(function(a){j.processing.texture(a.v)}),j.textureMode=new Sk.builtin.func(function(a){j.processing.textureMode(a.v)}),j.textWidth=new Sk.builtin.func(function(a){return new Sk.builtin.float_(j.processing.textWidth(a.v))}),j.tint=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof b?j.processing.tint(a.v):"undefined"==typeof c?j.processing.tint(a.v,b.v):"undefined"==typeof d?j.processing.tint(a.v,b.v,c.v):j.processing.tint(a.v,b.v,c.v,d.v)}),j.updatePixels=new Sk.builtin.func(function(){j.processing.updatePixels()}),j.vertex=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof c?j.processing.vertex(a.v,b.v):"undefined"==typeof d?j.processing.vertex(a.v,b.v,c.v):"undefined"==typeof e?j.processing.vertex(a.v,b.v,c.v,d.v):j.processing.vertex(a.v,b.v,c.v,d.v,e.v)}),j.year=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.year())}),j.box=new Sk.builtin.func(function(a){j.processing.box(a.v)}),j.sphere=new Sk.builtin.func(function(a){j.processing.sphere(a.v)}),j.sphereDetail=new Sk.builtin.func(function(a,b){"undefined"==typeof b?j.processing.sphereDetail(a.v):j.processing.sphereDetail(a.v,b.v)}),j.background=new Sk.builtin.func(function(a,c,d){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),j.processing.background(a.v,c,d)}),j.fill=new Sk.builtin.func(function(a,c,d,e){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),j.processing.fill(a.v,c,d,e)}),j.stroke=new Sk.builtin.func(function(a,c,d,e){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),j.processing.stroke(a.v,c,d,e)}),j.noStroke=new Sk.builtin.func(function(){j.processing.noStroke()}),j.colorMode=new Sk.builtin.func(function(a,b,c,d,e){b="undefined"==typeof b?255:b.v,"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),j.processing.colorMode(a.v,b,c,d,e)}),j.noFill=new Sk.builtin.func(function(){j.processing.noFill()}),j.loop=new Sk.builtin.func(function(){if(null===j.processing)throw new Sk.builtin.Exception("loop() should be called after run()");l=!0,j.processing.loop()}),j.noLoop=new Sk.builtin.func(function(){if(null===j.processing)throw new Sk.builtin.Exception("noLoop() should be called after run()");l=!1,j.processing.noLoop()}),j.frameRate=new Sk.builtin.func(function(a){j.processing.frameRate(a.v)}),j.width=new Sk.builtin.int_(0),j.height=new Sk.builtin.int_(0),j.renderMode=j.P2D,j.size=new Sk.builtin.func(function(a,b,c){"undefined"==typeof c&&(c=j.P2D),j.processing.size(a.v,b.v,c.v),j.width=new Sk.builtin.int_(j.processing.width),j.height=new Sk.builtin.int_(j.processing.height),j.renderMode=c}),j.exitp=new Sk.builtin.func(function(){j.processing.exit()}),j.mouseX=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.mouseX)}),j.mouseY=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.mouseY)}),j.pmouseX=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.pmouseX)}),j.pmouseY=new Sk.builtin.func(function(){return new Sk.builtin.int_(j.processing.pmouseY)}),j.rectMode=new Sk.builtin.func(function(a){j.processing.rectMode(a.v)}),j.strokeWeight=new Sk.builtin.func(function(a){j.processing.strokeWeight(a.v)}),j.smooth=new Sk.builtin.func(function(){j.processing.smooth()}),j.noSmooth=new Sk.builtin.func(function(){j.processing.noSmooth()}),j.ellipseMode=new Sk.builtin.func(function(a){j.processing.ellipseMode(a.v)}),j.strokeCap=new Sk.builtin.func(function(a){j.processing.strokeCap(a.v)}),j.strokeJoin=new Sk.builtin.func(function(a){j.processing.strokeJoin(a.v)}),j.rotate=new Sk.builtin.func(function(a){j.processing.rotate(a.v)}),j.rotateX=new Sk.builtin.func(function(a){j.processing.rotateX(a.v)}),j.rotateY=new Sk.builtin.func(function(a){j.processing.rotateY(a.v)}),j.rotateZ=new Sk.builtin.func(function(a){j.processing.rotateZ(a.v)}),j.scale=new Sk.builtin.func(function(a,b,c){b="undefined"==typeof b?1:b.v,c="undefined"==typeof c?1:c.v,j.processing.scale(a.v,b,c)}),j.translate=new Sk.builtin.func(function(a,b,c){b="undefined"==typeof b?1:b.v,c="undefined"==typeof c?1:c.v,j.processing.translate(a.v,b,c)}),j.popMatrix=new Sk.builtin.func(function(){j.processing.popMatrix()}),j.pushMatrix=new Sk.builtin.func(function(){j.processing.pushMatrix()}),j.applyMatrix=new Sk.builtin.func(function(){var a,b=Array.prototype.slice.call(arguments,0,16);for(a=0;a<b.length;a++)b[a]="undefined"==typeof b[a]?0:b[a].v;j.processing.applyMatrix.apply(j.processing,b)}),j.resetMatrix=new Sk.builtin.func(function(){j.processing.resetMatrix()}),j.printMatrix=new Sk.builtin.func(function(){return Sk.ffi.remapToPy(j.processing.printMatrix())}),j.run=new Sk.builtin.func(function(){var a=document.getElementById(Sk.canvas);if(!a)throw new Error("Processing module: Canvas element not specified");if(window.Processing.logger={log:function(a){Sk.misceval.print_(a)}},m=window.Processing.getInstanceById(Sk.canvas),m&&m.exit(),j.p=new window.Processing(a,function sketchProc(a){j.processing=a,a.draw=function(){var b=!1;for(var c in k)0===k[c].width&&(b=!0);if(!0==b)return!0===l?void 0:void a.loop();if(!1===l&&a.noLoop(),j.frameCount=a.frameCount,Sk.globals.draw)try{Sk.misceval.callsimArray(Sk.globals.draw)}catch(a){Sk.uncaughtException(a)}};var b=["setup","mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var c in b)Sk.globals[b[c]]&&(a[b[c]]=new Function("try {Sk.misceval.callsimArray(Sk.globals['"+b[c]+"']);} catch(e) {Sk.uncaughtException(e);}"))}),0===j.width.v&&0===j.height.v){var b=a.offsetWidth,c=a.offsetHeight;Sk.misceval.callsimArray(j.size,[new Sk.builtin.int_(b),new Sk.builtin.int_(c),j.renderMode])}}),g=function(a,b){b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"x"===b)?Sk.builtin.assk$(j.processing.mouseX):"y"===b?Sk.builtin.assk$(j.processing.mouseY):"px"===b?Sk.builtin.assk$(j.processing.pmouseX):"py"===b?Sk.builtin.assk$(j.processing.pmouseY):"pressed"===b?new Sk.builtin.bool(j.processing.__mousePressed):"button"===b?Sk.builtin.assk$(j.processing.mouseButton):void 0})},j.Mouse=Sk.misceval.buildClass(j,g,"Mouse",[]),j.mouse=Sk.misceval.callsimArray(j.Mouse),f=function(a,b){b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"key"===b)?new Sk.builtin.str(j.processing.key.toString()):"keyCode"===b?Sk.builtin.assk$(j.processing.keyCode):"keyPressed"===b?new Sk.builtin.str(j.processing.keyPressed):void 0})},j.Keyboard=Sk.misceval.buildClass(j,f,"Keyboard",[]),j.keyboard=Sk.misceval.callsimArray(j.Keyboard),e=function(a,b){b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"frameCount"===b)?Sk.builtin.assk$(j.processing.frameCount):"frameRate"===b?Sk.builtin.assk$(j.processing.frameRate):"height"===b?Sk.builtin.assk$(j.processing.height):"width"===b?Sk.builtin.assk$(j.processing.width):"online"===b?new Sk.builtin.bool(j.processing.online):"focused"===b?new Sk.builtin.bool(j.processing.focused):void 0})},j.Environment=Sk.misceval.buildClass(j,e,"Environment",[]),j.environment=Sk.misceval.callsimArray(j.Environment),d=function(a,b){b.__init__=new Sk.builtin.func(function(a){a.pixels=null}),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"height"===b)?Sk.builtin.assk$(j.processing.height):"width"===b?Sk.builtin.assk$(j.processing.width):("pixels"===b&&null==a.pixels&&(a.pixels=new Sk.builtin.list(j.processing.pixels.toArray())),a.pixels)})},j.Screen=Sk.misceval.buildClass(j,d,"Screen",[]),j.screen=Sk.misceval.callsimArray(j.Screen),j.loadPixels=new Sk.builtin.func(function(){j.processing.loadPixels()}),c=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d,e){"undefined"!=typeof c&&(c=c.v),"undefined"!=typeof d&&(d=d.v),"undefined"!=typeof e&&(e=e.v),a.v=j.processing.color(b.v,c,d,e)})},j.color=Sk.misceval.buildClass(j,c,"color",[]),j.red=new Sk.builtin.func(function(a){return new Sk.builtin.int_(j.processing.red(a.v))}),j.green=new Sk.builtin.func(function(a){return new Sk.builtin.int_(j.processing.green(a.v))}),j.blue=new Sk.builtin.func(function(a){return new Sk.builtin.int_(j.processing.blue(a.v))}),b=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?new j.processing.PImage:"undefined"==typeof c?new j.processing.PImage(b.v):"undefined"==typeof d?new j.processing.PImage(b.v,c.v):new j.processing.PImage(b.v,c.v,d.v)}),b.__getattr__=new Sk.builtin.func(function(a,b){return b=Sk.ffi.remapToJs(b),"width"===b?Sk.builtin.assk$(a.v.width):"height"===b?Sk.builtin.assk$(a.v.height):void 0})},j.loadImage=new Sk.builtin.func(function(a){var b=j.processing.loadImage(a.v);k.push(b);var c=Sk.misceval.callsimArray(j.PImage);return c.v=b,c}),j.image=new Sk.builtin.func(function(a,b,c,d,e){"undefined"==typeof d?j.processing.image(a.v,b.v,c.v):j.processing.image(a.v,b.v,c.v,d.v,e.v)}),j.get=new Sk.builtin.func(function(a,b){var c=j.processing.get(a.v,b.v);return Sk.misceval.callsimArray(j.color,[new Sk.builtin.int_(j.processing.red(c)),new Sk.builtin.int_(j.processing.green(c)),new Sk.builtin.int_(j.processing.blue(c))])}),j.set=new Sk.builtin.func(function(a,b,c){j.processing.set(a.v,b.v,c.v)}),h=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?new j.processing.PVector:"undefined"==typeof d?new j.processing.PVector(b.v,c.v):new j.processing.PVector(b.v,c.v,d.v)}),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"x"===b)?Sk.builtin.assk$(a.v.x):"y"===b?Sk.builtin.assk$(a.v.y):"z"===b?Sk.builtin.assk$(a.v.z):void 0}),b.get=new Sk.builtin.func(function(a){var b=Sk.misceval.callsimArray(j.PVector);return b.v=a.v.get(),b}),b.set=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof d?a.v.set(b.v,c.v):a.v.set(b.v,c.v,d.v)}),b.mag=new Sk.builtin.func(function(a){return Sk.builtin.assk$(a.v.mag())}),b.add=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.add(b.v),c}),b.sub=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.sub(b.v),c}),b.mult=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.mult(b.v),c}),b.div=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.div(b.v),c}),b.dist=new Sk.builtin.func(function(a,b){return Sk.builtin.assk$(a.v.dist(b.v))}),b.dot=new Sk.builtin.func(function(a,b,c,d){return"undefined"==typeof c?Sk.builtin.assk$(a.v.dot(b.v)):Sk.builtin.assk$(a.v.dot(b.v,c.v,d.v))}),b.cross=new Sk.builtin.func(function(a,b){var c=Sk.misceval.callsimArray(j.PVector);return c.v=a.v.cross(b.v),c}),b.normalize=new Sk.builtin.func(function(a){a.v.normalize()}),b.limit=new Sk.builtin.func(function(a,b){a.v.limit(b.v)}),b.angleBetween=new Sk.builtin.func(function(a,b){return Sk.builtin.assk$(a.v.angleBetween(b.v))}),b.array=new Sk.builtin.func(function(a){return new Sk.builtin.list(a.v.array())})},fontClass=function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v="undefined"==typeof b?new j.processing.PFont:new j.processing.PVector(b.v)}),b.list=new Sk.builtin.func(function(a){return new Sk.builtin.list(a.v.list())})},graphicsClass=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?new j.processing.PVector:"undefined"==typeof d?new j.processing.PVector(b.v,c.v):new j.processing.PVector(b.v,c.v,d.v)}),b.beginDraw=new Sk.builtin.func(function(a){a.v.beginDraw()}),b.endDraw=new Sk.builtin.func(function(a){a.v.endDraw()})},shapeClass=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){a.v="undefined"==typeof b?null:"undefined"==typeof c?new j.processing.PShapeSVG(b.v):"undefined"==typeof d?new j.processing.PShapeSVG(b.v,c.v):new j.processing.PShapeSVG(b.v,c.v,d.v)}),b.__getattr__=new Sk.builtin.func(function(a,b){return(b=Sk.ffi.remapToJs(b),"width"===b)?Sk.builtin.assk$(a.v.width):"height"===b?Sk.builtin.assk$(a.v.height):void 0}),b.isVisible=new Sk.builtin.func(function(a){return new Sk.builtin.bool(a.v.isVisible())}),b.setVisible=new Sk.builtin.func(function(a,b){a.v.setVisible(b.v)}),b.disableStyle=new Sk.builtin.func(function(a){a.v.disableStyle()}),b.enableStyle=new Sk.builtin.func(function(a){a.v.enableStyle()}),b.getChild=new Sk.builtin.func(function(a,b){var c=a.v.getChild(b.v);if(null!=c){var d=Sk.misceval.callsimArray(j.PShapeSVG);return d.v=c,d}return null}),b.translate=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof d?a.v.translate(b.v,c.v):a.v.translate(b.v,c.v,d.v)}),b.rotate=new Sk.builtin.func(function(a,b){a.v.rotate(b.v)}),b.rotateX=new Sk.builtin.func(function(a,b){a.v.rotateX(b.v)}),b.rotateY=new Sk.builtin.func(function(a){a.v.rotateY(angle.v)}),b.rotateZ=new Sk.builtin.func(function(a){a.v.rotateZ(angle.v)}),b.scale=new Sk.builtin.func(function(a,b,c,d){"undefined"==typeof c?a.v.scale(b.v):"undefined"==typeof d?a.v.scale(b.v,c.v):a.v.scale(b.v,c.v,d.v)})},j.PFont=Sk.misceval.buildClass(j,fontClass,"PFont",[]),j.PGraphics=Sk.misceval.buildClass(j,graphicsClass,"PGraphics",[]),j.PShapeSVG=Sk.misceval.buildClass(j,shapeClass,"PShapeSVG",[]),j.PVector=Sk.misceval.buildClass(j,h,"PVector",[]),j.PImage=Sk.misceval.buildClass(j,b,"PImage",[]),j};`,"src/lib/profile.py":`raise NotImplementedError("profile is not yet implemented in Skulpt")
`,"src/lib/pstats.py":`raise NotImplementedError("pstats is not yet implemented in Skulpt")
`,"src/lib/pty.py":`raise NotImplementedError("pty is not yet implemented in Skulpt")
`,"src/lib/py_compile.py":`raise NotImplementedError("py_compile is not yet implemented in Skulpt")
`,"src/lib/pyclbr.py":`raise NotImplementedError("pyclbr is not yet implemented in Skulpt")
`,"src/lib/pydoc.py":`raise NotImplementedError("pydoc is not yet implemented in Skulpt")
`,"src/lib/pydoc_topics.py":`raise NotImplementedError("pydoc_topics is not yet implemented in Skulpt")
`,"src/lib/pythonds/__init__.py":"","src/lib/pythonds/basic/__init__.py":`
#__all__ = ["stack"]


#from .stack import Stack
#from .queue import Queue



`,"src/lib/pythonds/basic/deque.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#deque.py


class Deque:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def addFront(self, item):
        self.items.append(item)

    def addRear(self, item):
        self.items.insert(0,item)

    def removeFront(self):
        return self.items.pop()

    def removeRear(self):
        return self.items.pop(0)

    def size(self):
        return len(self.items)
`,"src/lib/pythonds/basic/queue.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#queue.py

class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)
`,"src/lib/pythonds/basic/stack.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#stack.py

class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)

`,"src/lib/pythonds/graphs/__init__.py":`

from .adjGraph import Graph
from .adjGraph import Vertex
from .priorityQueue import PriorityQueue
`,"src/lib/pythonds/graphs/adjGraph.py":`#
#  adjGraph
#
#  Created by Brad Miller on 2005-02-24.
#  Copyright (c) 2005 Brad Miller, David Ranum, Luther College. All rights reserved.
#

import sys
import os
import unittest

class Graph:
    def __init__(self):
        self.vertices = {}
        self.numVertices = 0
        
    def addVertex(self,key):
        self.numVertices = self.numVertices + 1
        newVertex = Vertex(key)
        self.vertices[key] = newVertex
        return newVertex
    
    def getVertex(self,n):
        if n in self.vertices:
            return self.vertices[n]
        else:
            return None

    def __contains__(self,n):
        return n in self.vertices
    
    def addEdge(self,f,t,cost=0):
            if f not in self.vertices:
                nv = self.addVertex(f)
            if t not in self.vertices:
                nv = self.addVertex(t)
            self.vertices[f].addNeighbor(self.vertices[t],cost)
    
    def getVertices(self):
        return list(self.vertices.keys())
        
    def __iter__(self):
        return iter(self.vertices.values())
                
class Vertex:
    def __init__(self,num):
        self.id = num
        self.connectedTo = {}
        self.color = 'white'
        self.dist = sys.maxsize
        self.pred = None
        self.disc = 0
        self.fin = 0

    # def __lt__(self,o):
    #     return self.id < o.id
    
    def addNeighbor(self,nbr,weight=0):
        self.connectedTo[nbr] = weight
        
    def setColor(self,color):
        self.color = color
        
    def setDistance(self,d):
        self.dist = d

    def setPred(self,p):
        self.pred = p

    def setDiscovery(self,dtime):
        self.disc = dtime
        
    def setFinish(self,ftime):
        self.fin = ftime
        
    def getFinish(self):
        return self.fin
        
    def getDiscovery(self):
        return self.disc
        
    def getPred(self):
        return self.pred
        
    def getDistance(self):
        return self.dist
        
    def getColor(self):
        return self.color
    
    def getConnections(self):
        return self.connectedTo.keys()
        
    def getWeight(self,nbr):
        return self.connectedTo[nbr]
                
    def __str__(self):
        return str(self.id) + ":color " + self.color + ":disc " + str(self.disc) + ":fin " + str(self.fin) + ":dist " + str(self.dist) + ":pred \\n\\t[" + str(self.pred)+ "]\\n"
    
    def getId(self):
        return self.id

class adjGraphTests(unittest.TestCase):
    def setUp(self):
        self.tGraph = Graph()
        
    def testMakeGraph(self):
        gFile = open("test.dat")
        for line in gFile:
            fVertex, tVertex = line.split('|')
            fVertex = int(fVertex)
            tVertex = int(tVertex)
            self.tGraph.addEdge(fVertex,tVertex)
        for i in self.tGraph:
            adj = i.getAdj()
            for k in adj:
                print(i, k)

        
if __name__ == '__main__':
    unittest.main()
              
`,"src/lib/pythonds/graphs/priorityQueue.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
import unittest

# this implementation of binary heap takes key value pairs,
# we will assume that the keys are all comparable

class PriorityQueue:
    def __init__(self):
        self.heapArray = [(0,0)]
        self.currentSize = 0

    def buildHeap(self,alist):
        self.currentSize = len(alist)
        self.heapArray = [(0,0)]
        for i in alist:
            self.heapArray.append(i)
        i = len(alist) // 2            
        while (i > 0):
            self.percDown(i)
            i = i - 1
                        
    def percDown(self,i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.heapArray[i][0] > self.heapArray[mc][0]:
                tmp = self.heapArray[i]
                self.heapArray[i] = self.heapArray[mc]
                self.heapArray[mc] = tmp
            i = mc
                
    def minChild(self,i):
        if i*2 > self.currentSize:
            return -1
        else:
            if i*2 + 1 > self.currentSize:
                return i*2
            else:
                if self.heapArray[i*2][0] < self.heapArray[i*2+1][0]:
                    return i*2
                else:
                    return i*2+1

    def percUp(self,i):
        while i // 2 > 0:
            if self.heapArray[i][0] < self.heapArray[i//2][0]:
               tmp = self.heapArray[i//2]
               self.heapArray[i//2] = self.heapArray[i]
               self.heapArray[i] = tmp
            i = i//2
 
    def add(self,k):
        self.heapArray.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def delMin(self):
        retval = self.heapArray[1][1]
        self.heapArray[1] = self.heapArray[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heapArray.pop()
        self.percDown(1)
        return retval
        
    def isEmpty(self):
        if self.currentSize == 0:
            return True
        else:
            return False

    def decreaseKey(self,val,amt):
        # this is a little wierd, but we need to find the heap thing to decrease by
        # looking at its value
        done = False
        i = 1
        myKey = 0
        while not done and i <= self.currentSize:
            if self.heapArray[i][1] == val:
                done = True
                myKey = i
            else:
                i = i + 1
        if myKey > 0:
            self.heapArray[myKey] = (amt,self.heapArray[myKey][1])
            self.percUp(myKey)
            
    def __contains__(self,vtx):
        for pair in self.heapArray:
            if pair[1] == vtx:
                return True
        return False
        
class TestBinHeap(unittest.TestCase):
    def setUp(self):
        self.theHeap = PriorityQueue()
        self.theHeap.add((2,'x'))
        self.theHeap.add((3,'y'))
        self.theHeap.add((5,'z'))
        self.theHeap.add((6,'a'))
        self.theHeap.add((4,'d'))


    def testInsert(self):
        assert self.theHeap.currentSize == 5

    def testDelmin(self):
        assert self.theHeap.delMin() == 'x'
        assert self.theHeap.delMin() == 'y'
    
    def testDecKey(self):
        self.theHeap.decreaseKey('d',1)
        assert self.theHeap.delMin() == 'd'
        
if __name__ == '__main__':
    unittest.main()
`,"src/lib/pythonds/trees/__init__.py":`
# from .binaryTree import BinaryTree
# from .balance import AVLTree
# from .bst import BinarySearchTree
# from .binheap import BinHeap


`,"src/lib/pythonds/trees/balance.py":`#!/bin/env python3.1
# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005, 2010
# 

from .bst import BinarySearchTree, TreeNode

class AVLTree(BinarySearchTree):
    '''
    Author:  Brad Miller
    Date:  1/15/2005
    Description:  Imlement a binary search tree with the following interface
                  functions:  
                  __contains__(y) <==> y in x
                  __getitem__(y) <==> x[y]
                  __init__()
                  __len__() <==> len(x)
                  __setitem__(k,v) <==> x[k] = v
                  clear()
                  get(k)
                  has_key(k)
                  items() 
                  keys() 
                  values()
                  put(k,v)
    '''


    def _put(self,key,val,currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key,val,currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key,val,parent=currentNode)
                self.updateBalance(currentNode.leftChild)
        else:
            if currentNode.hasRightChild():
                self._put(key,val,currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key,val,parent=currentNode)
                self.updateBalance(currentNode.rightChild)                

    def updateBalance(self,node):
        if node.balanceFactor > 1 or node.balanceFactor < -1:
            self.rebalance(node)
            return
        if node.parent != None:
            if node.isLeftChild():
                node.parent.balanceFactor += 1
            elif node.isRightChild():
                node.parent.balanceFactor -= 1

            if node.parent.balanceFactor != 0:
                self.updateBalance(node.parent)

    def rebalance(self,node):
        if node.balanceFactor < 0:
            if node.rightChild.balanceFactor > 0:
                # Do an LR Rotation
                self.rotateRight(node.rightChild)
                self.rotateLeft(node)
            else:
                # single left
                self.rotateLeft(node)
        elif node.balanceFactor > 0:
            if node.leftChild.balanceFactor < 0:
                # Do an RL Rotation
                self.rotateLeft(node.leftChild)
                self.rotateRight(node)
            else:
                # single right
                self.rotateRight(node)

    def rotateLeft(self,rotRoot):
        newRoot = rotRoot.rightChild
        rotRoot.rightChild = newRoot.leftChild
        if newRoot.leftChild != None:
            newRoot.leftChild.parent = rotRoot
        newRoot.parent = rotRoot.parent
        if rotRoot.isRoot():
            self.root = newRoot
        else:
            if rotRoot.isLeftChild():
                rotRoot.parent.leftChild = newRoot
            else:
                rotRoot.parent.rightChild = newRoot
        newRoot.leftChild = rotRoot
        rotRoot.parent = newRoot
        rotRoot.balanceFactor = rotRoot.balanceFactor + 1 - min(newRoot.balanceFactor, 0)
        newRoot.balanceFactor = newRoot.balanceFactor + 1 + max(rotRoot.balanceFactor, 0)


    def rotateRight(self,rotRoot):
        newRoot = rotRoot.leftChild
        rotRoot.leftChild = newRoot.rightChild
        if newRoot.rightChild != None:
            newRoot.rightChild.parent = rotRoot
        newRoot.parent = rotRoot.parent
        if rotRoot.isRoot():
            self.root = newRoot
        else:
            if rotRoot.isRightChild():
                rotRoot.parent.rightChild = newRoot
            else:
                rotRoot.parent.leftChild = newRoot
        newRoot.rightChild = rotRoot
        rotRoot.parent = newRoot
        rotRoot.balanceFactor = rotRoot.balanceFactor - 1 - max(newRoot.balanceFactor, 0)
        newRoot.balanceFactor = newRoot.balanceFactor - 1 + min(rotRoot.balanceFactor, 0)
        
`,"src/lib/pythonds/trees/binaryTree.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 

class BinaryTree:
    """
    A recursive implementation of Binary Tree
    Using links and Nodes approach.
    """    
    def __init__(self,rootObj):
        self.key = rootObj
        self.leftChild = None
        self.rightChild = None

    def insertLeft(self,newNode):
        if self.leftChild == None:
            self.leftChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.left = self.leftChild
            self.leftChild = t
    
    def insertRight(self,newNode):
        if self.rightChild == None:
            self.rightChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.right = self.rightChild
            self.rightChild = t

    def isLeaf(self):
        return ((not self.leftChild) and (not self.rightChild))

    def getRightChild(self):
        return self.rightChild

    def getLeftChild(self):
        return self.leftChild

    def setRootVal(self,obj):
        self.key = obj

    def getRootVal(self,):
        return self.key

    def inorder(self):
        if self.leftChild:
            self.leftChild.inorder()
        print(self.key)
        if self.rightChild:
            self.rightChild.inorder()

    def postorder(self):
        if self.leftChild:
            self.leftChild.postorder()
        if self.rightChild:
            self.rightChild.postorder()
        print(self.key)


    def preorder(self):
        print(self.key)
        if self.leftChild:
            self.leftChild.preorder()
        if self.rightChild:
            self.rightChild.preorder()

    def printexp(self):
        if self.leftChild:
            print('(')
            self.leftChild.printexp()
        print(self.key)
        if self.rightChild:
            self.rightChild.printexp()
            print(')')

    def postordereval(self):
        opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}
        res1 = None
        res2 = None
        if self.leftChild:
            res1 = self.leftChild.postordereval()  #// \\label{peleft}
        if self.rightChild:
            res2 = self.rightChild.postordereval() #// \\label{peright}
        if res1 and res2:
            return opers[self.key](res1,res2) #// \\label{peeval}
        else:
            return self.key

def inorder(tree):
    if tree != None:
        inorder(tree.getLeftChild())
        print(tree.getRootVal())
        inorder(tree.getRightChild())

def printexp(tree):
    if tree.leftChild:
        print('(')
        printexp(tree.getLeftChild())
    print(tree.getRootVal())
    if tree.rightChild:
        printexp(tree.getRightChild())
        print(')') 

def printexp(tree):
    sVal = ""
    if tree:
        sVal = '(' + printexp(tree.getLeftChild())
        sVal = sVal + str(tree.getRootVal())
        sVal = sVal + printexp(tree.getRightChild()) + ')'
    return sVal

def postordereval(tree):
    opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}
    res1 = None
    res2 = None
    if tree:
        res1 = postordereval(tree.getLeftChild())  #// \\label{peleft}
        res2 = postordereval(tree.getRightChild()) #// \\label{peright}
        if res1 and res2:
            return opers[tree.getRootVal()](res1,res2) #// \\label{peeval}
        else:
            return tree.getRootVal()

def height(tree):
    if tree == None:
        return -1
    else:
        return 1 + max(height(tree.leftChild),height(tree.rightChild))

# t = BinaryTree(7)
# t.insertLeft(3)
# t.insertRight(9)
# inorder(t)
# import operator
# x = BinaryTree('*')
# x.insertLeft('+')
# l = x.getLeftChild()
# l.insertLeft(4)
# l.insertRight(5)
# x.insertRight(7)
# print(printexp(x))
# print(postordereval(x))
# print(height(x))
`,"src/lib/pythonds/trees/binheap.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 

# this heap takes key value pairs, we will assume that the keys are integers
class BinHeap:
    def __init__(self):
        self.heapList = [0]
        self.currentSize = 0


    def buildHeap(self,alist):
        i = len(alist) // 2
        self.currentSize = len(alist)
        self.heapList = [0] + alist[:]
        print(len(self.heapList), i)
        while (i > 0):
            print(self.heapList, i)
            self.percDown(i)
            i = i - 1
        print(self.heapList,i)
                        
    def percDown(self,i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.heapList[i] > self.heapList[mc]:
                tmp = self.heapList[i]
                self.heapList[i] = self.heapList[mc]
                self.heapList[mc] = tmp
            i = mc
                
    def minChild(self,i):
        if i * 2 + 1 > self.currentSize:
            return i * 2
        else:
            if self.heapList[i * 2] < self.heapList[i * 2 + 1]:
                return i * 2
            else:
                return i * 2 + 1

    def percUp(self,i):
        while i // 2 > 0:
            if self.heapList[i] < self.heapList[i//2]:
               tmp = self.heapList[i // 2]
               self.heapList[i // 2] = self.heapList[i]
               self.heapList[i] = tmp
            i = i // 2
 
    def insert(self,k):
        self.heapList.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def delMin(self):
        retval = self.heapList[1]
        self.heapList[1] = self.heapList[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heapList.pop()
        self.percDown(1)
        return retval
        
    def isEmpty(self):
        if currentSize == 0:
            return True
        else:
            return False
`,"src/lib/pythonds/trees/bst.py":`#!/bin/env python3.1
# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005, 2010
# 

class BinarySearchTree:
    '''
    Author:  Brad Miller
    Date:  1/15/2005
    Description:  Imlement a binary search tree with the following interface
                  functions:  
                  __contains__(y) <==> y in x
                  __getitem__(y) <==> x[y]
                  __init__()
                  __len__() <==> len(x)
                  __setitem__(k,v) <==> x[k] = v
                  clear()
                  get(k)
                  items() 
                  keys() 
                  values()
                  put(k,v)
                  in
                  del <==> 
    '''

    def __init__(self):
        self.root = None
        self.size = 0
    
    def put(self,key,val):
        if self.root:
            self._put(key,val,self.root)
        else:
            self.root = TreeNode(key,val)
        self.size = self.size + 1

    def _put(self,key,val,currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key,val,currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key,val,parent=currentNode)
        else:
            if currentNode.hasRightChild():
                self._put(key,val,currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key,val,parent=currentNode)
            
    def __setitem__(self,k,v):
        self.put(k,v)

    def get(self,key):
        if self.root:
            res = self._get(key,self.root)
            if res:
                return res.payload
            else:
                return None
        else:
            return None
        
    def _get(self,key,currentNode):
        if not currentNode:
            return None
        elif currentNode.key == key:
            return currentNode
        elif key < currentNode.key:
            return self._get(key,currentNode.leftChild)
        else:
            return self._get(key,currentNode.rightChild)
            
        
    def __getitem__(self,key):
        res = self.get(key)
        if res:
            return res
        else:
            raise KeyError('Error, key not in tree')
            

    def __contains__(self,key):
        if self._get(key,self.root):
            return True
        else:
            return False
        
    def length(self):
        return self.size

    def __len__(self):
        return self.size

    def __iter__(self):
        return self.root.__iter__()
    
    def delete(self,key):
        if self.size > 1:
            nodeToRemove = self._get(key,self.root)
            if nodeToRemove:
                self.remove(nodeToRemove)
                self.size = self.size-1
            else:
                raise KeyError('Error, key not in tree')
        elif self.size == 1 and self.root.key == key:
            self.root = None
            self.size = self.size - 1
        else:
            raise KeyError('Error, key not in tree')

    def __delitem__(self,key):
        self.delete(key)
    
    def remove(self,currentNode):
        if currentNode.isLeaf(): #leaf
            if currentNode == currentNode.parent.leftChild:
                currentNode.parent.leftChild = None
            else:
                currentNode.parent.rightChild = None
        elif currentNode.hasBothChildren(): #interior
            succ = currentNode.findSuccessor()
            succ.spliceOut()
            currentNode.key = succ.key
            currentNode.payload = succ.payload
        else: # this node has one child
            if currentNode.hasLeftChild():
                if currentNode.isLeftChild():
                    currentNode.leftChild.parent = currentNode.parent
                    currentNode.parent.leftChild = currentNode.leftChild
                elif currentNode.isRightChild():
                    currentNode.leftChild.parent = currentNode.parent
                    currentNode.parent.rightChild = currentNode.leftChild
                else:
                    currentNode.replaceNodeData(currentNode.leftChild.key,
                                       currentNode.leftChild.payload,
                                       currentNode.leftChild.leftChild,
                                       currentNode.leftChild.rightChild)
            else:
                if currentNode.isLeftChild():
                    currentNode.rightChild.parent = currentNode.parent
                    currentNode.parent.leftChild = currentNode.rightChild
                elif currentNode.isRightChild():
                    currentNode.rightChild.parent = currentNode.parent
                    currentNode.parent.rightChild = currentNode.rightChild
                else:
                    currentNode.replaceNodeData(currentNode.rightChild.key,
                                       currentNode.rightChild.payload,
                                       currentNode.rightChild.leftChild,
                                       currentNode.rightChild.rightChild)

    def inorder(self):
        self._inorder(self.root)

    def _inorder(self,tree):
        if tree != None:
            self._inorder(tree.leftChild)
            print(tree.key)
            self._inorder(tree.rightChild)

    def postorder(self):
        self._postorder(self.root)

    def _postorder(self, tree):
        if tree:
            self._postorder(tree.rightChild)
            self._postorder(tree.leftChild)
            print(tree.key)            

    def preorder(self):
        self._preorder(self,self.root)

    def _preorder(self,tree):
        if tree:
            print(tree.key)            
            self._preorder(tree.leftChild)
            self._preorder(tree.rightChild)

                
class TreeNode:
    def __init__(self,key,val,left=None,right=None,parent=None):
        self.key = key
        self.payload = val
        self.leftChild = left
        self.rightChild = right
        self.parent = parent
        self.balanceFactor = 0
        
    def hasLeftChild(self):
        return self.leftChild

    def hasRightChild(self):
        return self.rightChild
    
    def isLeftChild(self):
        return self.parent and self.parent.leftChild == self

    def isRightChild(self):
        return self.parent and self.parent.rightChild == self

    def isRoot(self):
        return not self.parent

    def isLeaf(self):
        return not (self.rightChild or self.leftChild)

    def hasAnyChildren(self):
        return self.rightChild or self.leftChild

    def hasBothChildren(self):
        return self.rightChild and self.leftChild
    
    def replaceNodeData(self,key,value,lc,rc):
        self.key = key
        self.payload = value
        self.leftChild = lc
        self.rightChild = rc
        if self.hasLeftChild():
            self.leftChild.parent = self
        if self.hasRightChild():
            self.rightChild.parent = self
        
    def findSuccessor(self):
        succ = None
        if self.hasRightChild():
            succ = self.rightChild.findMin()
        else:
            if self.parent:
                if self.isLeftChild():
                    succ = self.parent
                else:
                    self.parent.rightChild = None
                    succ = self.parent.findSuccessor()
                    self.parent.rightChild = self
        return succ


    def spliceOut(self):
        if self.isLeaf():
            if self.isLeftChild():
                self.parent.leftChild = None
            else:
                self.parent.rightChild = None
        elif self.hasAnyChildren():
            if self.hasLeftChild():
                if self.isLeftChild():
                    self.parent.leftChild = self.leftChild
                else:
                    self.parent.rightChild = self.leftChild
                self.leftChild.parent = self.parent
            else:
                if self.isLeftChild():
                    self.parent.leftChild = self.rightChild
                else:
                    self.parent.rightChild = self.rightChild
                self.rightChild.parent = self.parent

    def findMin(self):
        current = self
        while current.hasLeftChild():
            current = current.leftChild
        return current

    def __iter__(self):
        """The standard inorder traversal of a binary tree."""
        if self:
            if self.hasLeftChild():
                for elem in self.leftChild:
                    yield elem
            yield self.key
            if self.hasRightChild():
                for elem in self.rightChild:
                    yield elem

            
`,"src/lib/quopri.py":`raise NotImplementedError("quopri is not yet implemented in Skulpt")
`,"src/lib/random.js":'var MersenneTwister=function(a){a==null&&(a=new Date().getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=Array(this.N),this.mti=this.N+1,this.init_genrand(a)};MersenneTwister.prototype.init_genrand=function(a){for(this.mt[0]=a>>>0,this.mti=1;this.mti<this.N;this.mti++){var a=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&a)>>>16)<<16)+1812433253*(65535&a)+this.mti,this.mt[this.mti]>>>=0}},MersenneTwister.prototype.init_by_array=function(a,b){var d,e,f;for(this.init_genrand(19650218),d=1,e=0,f=this.N>b?this.N:b;f;f--){var g=this.mt[d-1]^this.mt[d-1]>>>30;this.mt[d]=(this.mt[d]^(1664525*((4294901760&g)>>>16)<<16)+1664525*(65535&g))+a[e]+e,this.mt[d]>>>=0,d++,e++,d>=this.N&&(this.mt[0]=this.mt[this.N-1],d=1),e>=b&&(e=0)}for(f=this.N-1;f;f--){var g=this.mt[d-1]^this.mt[d-1]>>>30;this.mt[d]=(this.mt[d]^(1566083941*((4294901760&g)>>>16)<<16)+1566083941*(65535&g))-d,this.mt[d]>>>=0,d++,d>=this.N&&(this.mt[0]=this.mt[this.N-1],d=1)}this.mt[0]=2147483648},MersenneTwister.prototype.genrand_int32=function(){var a,b=[0,this.MATRIX_A];if(this.mti>=this.N){var d;for(this.mti==this.N+1&&this.init_genrand(5489),d=0;d<this.N-this.M;d++)a=this.mt[d]&this.UPPER_MASK|this.mt[d+1]&this.LOWER_MASK,this.mt[d]=this.mt[d+this.M]^a>>>1^b[1&a];for(;d<this.N-1;d++)a=this.mt[d]&this.UPPER_MASK|this.mt[d+1]&this.LOWER_MASK,this.mt[d]=this.mt[d+(this.M-this.N)]^a>>>1^b[1&a];a=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^a>>>1^b[1&a],this.mti=0}return a=this.mt[this.mti++],a^=a>>>11,a^=2636928640&a<<7,a^=4022730752&a<<15,a^=a>>>18,a>>>0},MersenneTwister.prototype.genrand_int31=function(){return this.genrand_int32()>>>1},MersenneTwister.prototype.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},MersenneTwister.prototype.random=function(){return this.genrand_int32()*(1/4294967296)},MersenneTwister.prototype.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},MersenneTwister.prototype.genrand_res53=function(){var d=this.genrand_int32()>>>5,a=this.genrand_int32()>>>6;return(67108864*d+a)*(1/9007199254740992)};var $builtinmodule=function(){var a=Math.log,b=Math.sqrt,d={},e=new MersenneTwister,f=void 0;d.seed=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("seed",arguments.length,0,1),a=Sk.builtin.asnum$(a),e=0<arguments.length?new MersenneTwister(a):new MersenneTwister,Sk.builtin.none.none$}),d.random=new Sk.builtin.func(function(){return Sk.builtin.pyCheckArgsLen("random",arguments.length,0,0),new Sk.builtin.float_(e.genrand_res53())});var g=function(a){return 0|a},h=function(a,b,d){var f,h,i;if(!Sk.builtin.checkInt(a))throw new Sk.builtin.ValueError("non-integer first argument for randrange()");if(void 0===b)return i=g(e.genrand_res53()*a),new Sk.builtin.int_(i);if(!Sk.builtin.checkInt(b))throw new Sk.builtin.ValueError("non-integer stop for randrange()");if(void 0===d&&(d=1),f=b-a,1==d&&0<f)return i=a+g(e.genrand_res53()*f),new Sk.builtin.int_(i);if(1==d)throw new Sk.builtin.ValueError("empty range for randrange() ("+a+", "+b+", "+f+")");if(!Sk.builtin.checkInt(d))throw new Sk.builtin.ValueError("non-integer step for randrange()");if(0<d)h=g((f+d-1)/d);else if(0>d)h=g((f+d+1)/d);else throw new Sk.builtin.ValueError("zero step for randrange()");if(0>=h)throw new Sk.builtin.ValueError("empty range for randrange()");return i=a+d*g(e.genrand_res53()*h),new Sk.builtin.int_(i)};d.randint=new Sk.builtin.func(function(d,e){return Sk.builtin.pyCheckArgsLen("randint",arguments.length,2,2),d=Sk.builtin.asnum$(d),e=Sk.builtin.asnum$(e),h(d,e+1)}),d.randrange=new Sk.builtin.func(function(a,b,d){return Sk.builtin.pyCheckArgsLen("randrange",arguments.length,1,3),a=Sk.builtin.asnum$(a),b=Sk.builtin.asnum$(b),d=Sk.builtin.asnum$(d),h(a,b,d)}),d.uniform=new Sk.builtin.func(function(d,f){Sk.builtin.pyCheckArgsLen("uniform",arguments.length,2,2),d=Sk.builtin.asnum$(d),f=Sk.builtin.asnum$(f);var g=e.genrand_res53();return c=d+g*(f-d),new Sk.builtin.float_(c)}),d.triangular=new Sk.builtin.func(function(a,d,f){Sk.builtin.pyCheckArgsLen("triangular",arguments.length,2,3),Sk.builtin.pyCheckType("low","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("high","number",Sk.builtin.checkNumber(d));var g,h,i;return a=Sk.builtin.asnum$(a),d=Sk.builtin.asnum$(d),a>d&&(i=a,a=d,d=i),void 0===f||f===Sk.builtin.none.none$?f=(d-a)/2:(Sk.builtin.pyCheckType("mode","number",Sk.builtin.checkNumber(f)),f=Sk.builtin.asnum$(f)),g=e.genrand_res53(),h=g<(f-a)/(d-a)?a+b(g*(d-a)*(f-a)):d-b((1-g)*(d-a)*(d-f)),new Sk.builtin.float_(h)});var i=function(d,g){var k,l,m,n,o,h=Math.sin,i=Math.cos,j=Math.PI;return void 0===f?(k=e.genrand_res53(),l=e.genrand_res53(),m=b(-2*a(k)),n=2*j*l,o=m*i(n),f=m*h(n)):(o=f,f=void 0),d+g*o};return d.gauss=new Sk.builtin.func(function(a,b){return Sk.builtin.pyCheckArgsLen("gauss",arguments.length,2,2),Sk.builtin.pyCheckType("mu","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("sigma","number",Sk.builtin.checkNumber(b)),a=Sk.builtin.asnum$(a),b=Sk.builtin.asnum$(b),new Sk.builtin.float_(i(a,b))}),d.normalvariate=d.gauss,d.lognormvariate=new Sk.builtin.func(function(a,b){var d=Math.exp;return Sk.builtin.pyCheckArgsLen("lognormvariate",arguments.length,2,2),Sk.builtin.pyCheckType("mu","number",Sk.builtin.checkNumber(a)),Sk.builtin.pyCheckType("sigma","number",Sk.builtin.checkNumber(b)),a=Sk.builtin.asnum$(a),b=Sk.builtin.asnum$(b),new Sk.builtin.float_(d(i(a,b)))}),d.expovariate=new Sk.builtin.func(function(b){Sk.builtin.pyCheckArgsLen("expovariate",arguments.length,1,1),Sk.builtin.pyCheckType("lambd","number",Sk.builtin.checkNumber(b)),b=Sk.builtin.asnum$(b);var d=e.genrand_res53();return new Sk.builtin.float_(-a(d)/b)}),d.choice=new Sk.builtin.func(function(a){if(Sk.builtin.pyCheckArgsLen("choice",arguments.length,1,1),Sk.builtin.pyCheckType("seq","sequence",Sk.builtin.checkSequence(a)),void 0!==a.sq$length){var b=new Sk.builtin.int_(g(e.genrand_res53()*a.sq$length()));return a.mp$subscript(b)}throw new Sk.builtin.TypeError("object has no length")}),d.shuffle=new Sk.builtin.func(function(a){if(Sk.builtin.pyCheckArgsLen("shuffle",arguments.length,1,1),Sk.builtin.pyCheckType("x","sequence",Sk.builtin.checkSequence(a)),a.constructor===Sk.builtin.list){const h=a.v;for(var b=h.length-1;0<b;b-=1){var d=g(e.genrand_res53()*(b+1)),f=h[d];h[d]=h[b],h[b]=f}}else if(void 0===a.sq$length)throw new Sk.builtin.TypeError("object has no length");else if(void 0!==a.mp$ass_subscript)for(var d,b=a.sq$length()-1;0<b;b-=1){d=new Sk.builtin.int_(g(e.genrand_res53()*(b+1))),b=new Sk.builtin.int_(b);var f=a.mp$subscript(d);a.mp$ass_subscript(d,a.mp$subscript(b)),a.mp$ass_subscript(b,f)}else throw new Sk.builtin.TypeError("object is immutable");return Sk.builtin.none.none$}),d.sample=new Sk.builtin.func(function(a,b){var f,g,h,l,m,d=Math.floor;for(Sk.builtin.pyCheckArgsLen("sample",arguments.length,2,2),Sk.builtin.pyCheckType("population","iterable",Sk.builtin.checkIterable(a)),Sk.builtin.pyCheckType("k","integer",Sk.builtin.checkInt(b)),b=Sk.builtin.asnum$(b),m=[],h=Sk.abstr.iter(a),(f=0,l=h.tp$iternext());void 0!==l;f++,l=h.tp$iternext())g=d(e.genrand_res53()*(f+1)),f<b?(g<f&&(m[f]=m[g]),m[g]=l):g<b&&(m[g]=l);if(f<b)throw new Sk.builtin.ValueError("sample larger than population");return new Sk.builtin.list(m)}),d};',"src/lib/re.js":`var $builtinmodule=function(name){var validGroups,convert,getFlags,_split,_findall,matchobj,_search,_match,regexobj,mod={__name__:new Sk.builtin.str("re")};return mod.I=2,mod.IGNORECASE=2,mod.M=8,mod.MULTILINE=8,validGroups=["(?:","(?=","(?!"],convert=function(a){var b,c,d;if(c=a.match(/\\(\\?./g),c)for(d=0;d<c.length;d++)if(-1==validGroups.indexOf(c[d]))throw new Sk.builtin.ValueError("Disallowed group in pattern: '"+c[d]+"'");return b=a.replace("/\\\\/g","\\\\\\\\"),b=a.replace(/([^\\\\]){,(?![^\\[]*\\])/g,"$1{0,"),b},getFlags=function(a){var b="g";return(a&mod.IGNORECASE)==mod.IGNORECASE&&(b+="i"),(a&mod.MULTILINE)==mod.MULTILINE&&(b+="m"),b},_split=function(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(Sk.builtin.pyCheckArgsLen("split",arguments.length,2,4),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("maxsplit must be a number");if(void 0===d&&(d=0),!Sk.builtin.checkNumber(d))throw new Sk.builtin.TypeError("flags must be a number");for(c=Sk.builtin.asnum$(c),e=Sk.ffi.unwrapo(a),f=Sk.ffi.unwrapo(b),e=convert(e),g=null!==e.match(/^\\(.*\\)$/),h=getFlags(d),i=new RegExp(e,h),j=[],k,l=0,m=0;null!=(k=i.exec(f))&&k.index!==i.lastIndex&&(j.push(new Sk.builtin.str(f.substring(l,k.index))),g&&j.push(new Sk.builtin.str(k[0])),l=i.lastIndex,m+=1,!(c&&m>=c)););return j.push(new Sk.builtin.str(f.substring(l))),new Sk.builtin.list(j)},_split.co_varnames=["pattern","string","maxsplit","flags"],_split.$defaults=[new Sk.builtin.int_(0),new Sk.builtin.int_(0)],mod.split=new Sk.builtin.func(_split),_findall=function(a,b,c){var d,e,f,g,h,j;if(Sk.builtin.pyCheckArgsLen("findall",arguments.length,2,3),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("flags must be a number");if(d=Sk.ffi.unwrapo(a),e=Sk.ffi.unwrapo(b),d=convert(d),f=getFlags(c),g=new RegExp(d,f),d.match(/\\$/)){var k=new RegExp(/\\n$/);e.match(k)&&(e=e.slice(0,-1))}for(h=[],j;null!=(j=g.exec(e));){if(2>j.length)h.push(new Sk.builtin.str(j[0]));else if(2==j.length)h.push(new Sk.builtin.str(j[1]));else{for(var l=[],m=1;m<j.length;m++)l.push(new Sk.builtin.str(j[m]));h.push(new Sk.builtin.tuple(l))}j.index===g.lastIndex&&(g.lastIndex+=1)}return new Sk.builtin.list(h)},_findall.co_varnames=["pattern","string","flags"],_findall.$defaults=[new Sk.builtin.int_(0)],mod.findall=new Sk.builtin.func(_findall),matchobj=function(a,b){b.__init__=new Sk.builtin.func(function(a,b,c,d){return a.thematch=b,a.re=c,a.string=d,Sk.builtin.none.none$}),b.groups=new Sk.builtin.func(function(a){var b=a.thematch.v.slice(1);return new Sk.builtin.tuple(b)}),b.group=new Sk.builtin.func(function(a,b){if(b=void 0===b?0:Sk.builtin.asnum$(b),b>=a.thematch.v.length)throw new Sk.builtin.IndexError("Index out of range: "+b);return a.thematch.v[b]})},mod.MatchObject=Sk.misceval.buildClass(mod,matchobj,"MatchObject",[]),mod._findre=function(res,string){res=res.replace(/([^\\\\]){,(?![^\\[]*\\])/g,"$1{0,");var matches,sitem,retval,re=eval(res),patt=/\\n$/,str=Sk.ffi.remapToJs(string);if(matches=str.match(patt)?str.slice(0,-1).match(re):str.match(re),retval=new Sk.builtin.list,null==matches)return retval;for(var i=0;i<matches.length;++i)sitem=new Sk.builtin.str(matches[i]),retval.v.push(sitem);return retval},_search=function(a,b,c){var d,e;if(Sk.builtin.pyCheckArgsLen("search",arguments.length,2,3),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("flags must be a number");return(e="/"+a.v.replace(/\\//g,"\\\\/")+"/",lst=mod._findre(e,b),1>lst.v.length)?Sk.builtin.none.none$:(d=Sk.misceval.callsimArray(mod.MatchObject,[lst,a,b]),d)},_search.co_varnames=["pattern","string","flags"],_search.$defaults=[new Sk.builtin.int_(0)],mod.search=new Sk.builtin.func(_search),_match=function(a,b,c){var d,e;if(Sk.builtin.pyCheckArgsLen("match",arguments.length,2,3),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("string must be a string");if(void 0===c&&(c=0),!Sk.builtin.checkNumber(c))throw new Sk.builtin.TypeError("flags must be a number");return(pat=Sk.ffi.remapToJs(a),e="/^"+pat.replace(/\\//g,"\\\\/")+"/",lst=mod._findre(e,b),1>Sk.ffi.remapToJs(lst).length)?Sk.builtin.none.none$:(d=Sk.misceval.callsimArray(mod.MatchObject,[lst,a,b]),d)},_match.co_varnames=["pattern","string","flags"],_match.$defaults=[new Sk.builtin.int_(0)],mod.match=new Sk.builtin.func(_match),regexobj=function(a,b){var c,d,e,f,g,h;b.__init__=new Sk.builtin.func(function(a,b,c){return a.re=b,a.flags=void 0===c?0:c,Sk.builtin.none.none$}),h=new Sk.builtin.func(function(a){var b="re.compile('"+Sk.ffi.remapToJs(a.re)+"')";return Sk.ffi.remapToPy(b.substring(0,212))}),b.__str__=h,b.__repr__=h,c=function(a,b,c){var d=Sk.ffi.remapToJs(a),e=null==b?0:Sk.ffi.remapToJs(b),f=null==c?d.length:Sk.ffi.remapToJs(c);return"^"==e&&(e=d.indexOf("\\n")+1),null===f&&(f=d.length),Sk.ffi.remapToPy(d.substring(e,f))},d=function(a,b,d,e){Sk.builtin.pyCheckArgsLen("search",arguments.length,2,4);var f=c(b,d,e);return _search(a.re,f,a.flags)},d.co_varnames=["self","string","pos","endpos"],d.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],b.search=new Sk.builtin.func(d),e=function(a,b,d,e){Sk.builtin.pyCheckArgsLen("match",arguments.length,2,4);var f=c(b,d,e);return _match(a.re,f,a.flags)},e.co_varnames=["self","string","pos","endpos"],e.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],b.match=new Sk.builtin.func(e),f=function(a,b,c){if(Sk.builtin.pyCheckArgsLen("split",arguments.length,2,3),void 0===c&&(c=0),!Sk.builtin.checkInt(c))throw new Sk.builtin.TypeError("maxsplit must be an integer");return _split(a.re,b,c,a.flags)},f.co_varnames=["self","string","maxsplit"],f.$defaults=[new Sk.builtin.int_(0)],b.split=new Sk.builtin.func(f),g=function(a,b,d,e){Sk.builtin.pyCheckArgsLen("findall",arguments.length,2,4);var f=c(b,d,e);return _findall(a.re,f,a.flags)},g.co_varnames=["self","string","pos","endpos"],g.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],b.findall=new Sk.builtin.func(g)},mod.RegexObject=Sk.misceval.buildClass(mod,regexobj,"RegexObject",[]),mod.compile=new Sk.builtin.func(function(a,b){var c;if(Sk.builtin.pyCheckArgsLen("compile",arguments.length,1,2),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("pattern must be a string");if(void 0===b&&(b=0),!Sk.builtin.checkNumber(b))throw new Sk.builtin.TypeError("flags must be a number");return c=Sk.misceval.callsimArray(mod.RegexObject,[a,b]),c}),mod.purge=new Sk.builtin.func(function(){}),mod};`,"src/lib/repr.py":`raise NotImplementedError("repr is not yet implemented in Skulpt")
`,"src/lib/rexec.py":`raise NotImplementedError("rexec is not yet implemented in Skulpt")
`,"src/lib/rfc822.py":`raise NotImplementedError("rfc822 is not yet implemented in Skulpt")
`,"src/lib/rlcompleter.py":`raise NotImplementedError("rlcompleter is not yet implemented in Skulpt")
`,"src/lib/robotparser.py":`raise NotImplementedError("robotparser is not yet implemented in Skulpt")
`,"src/lib/runpy.py":`raise NotImplementedError("runpy is not yet implemented in Skulpt")
`,"src/lib/sched.py":`raise NotImplementedError("sched is not yet implemented in Skulpt")
`,"src/lib/sets.py":`raise NotImplementedError("sets is not yet implemented in Skulpt")
`,"src/lib/sgmllib.py":`raise NotImplementedError("sgmllib is not yet implemented in Skulpt")
`,"src/lib/sha.py":`raise NotImplementedError("sha is not yet implemented in Skulpt")
`,"src/lib/shelve.py":`raise NotImplementedError("shelve is not yet implemented in Skulpt")
`,"src/lib/shlex.py":`raise NotImplementedError("shlex is not yet implemented in Skulpt")
`,"src/lib/shutil.py":`raise NotImplementedError("shutil is not yet implemented in Skulpt")
`,"src/lib/signal.js":'var $builtinmodule=function(){var a={SIG_DFL:new Sk.builtin.int_(0),SIG_IGN:new Sk.builtin.int_(1),CTRL_C_EVENT:new Sk.builtin.int_(0),CTRL_BREAK_EVENT:new Sk.builtin.int_(0),NSIG:new Sk.builtin.int_(23),SIGHUP:new Sk.builtin.int_(1),SIGNINT:new Sk.builtin.int_(2),SIGILL:new Sk.builtin.int_(4),SIGFPE:new Sk.builtin.int_(8),SIGKILL:new Sk.builtin.int_(9),SIGSEGV:new Sk.builtin.int_(11),SIGTERM:new Sk.builtin.int_(15),SIGBREAK:new Sk.builtin.int_(21),SIGABRT:new Sk.builtin.int_(22),pause:new Sk.builtin.func(function(){Sk.builtin.pyCheckArgsLen("pause",arguments.length,0,0);var a=new Sk.misceval.Suspension;return a.resume=function(){return Sk.builtin.none.none$},a.data={type:"Sk.promise",promise:new Promise(function(a){if(null!=Sk.signals&&Sk.signals.addEventListener){function handleSignal(){Sk.signals.removeEventListener(handleSignal),a()}Sk.signals.addEventListener(handleSignal)}else console.warn("signal.pause() not supported"),Sk.misceval.print_("signal.pause() not supported"),a()})},a}),signal:new Sk.builtin.func(function(){throw new Sk.builtin.NotImplementedError("signal.signal is not supported.")})};return a};',"src/lib/site.py":`raise NotImplementedError("site is not yet implemented in Skulpt")
`,"src/lib/smtpd.py":`raise NotImplementedError("smtpd is not yet implemented in Skulpt")
`,"src/lib/smtplib.py":`raise NotImplementedError("smtplib is not yet implemented in Skulpt")
`,"src/lib/sndhdr.py":`raise NotImplementedError("sndhdr is not yet implemented in Skulpt")
`,"src/lib/socket.py":`raise NotImplementedError("socket is not yet implemented in Skulpt")
`,"src/lib/sqlite3/__init__.py":`raise NotImplementedError("sqlite3 is not yet implemented in Skulpt")
`,"src/lib/sre.py":`raise NotImplementedError("sre is not yet implemented in Skulpt")
`,"src/lib/sre_compile.py":`raise NotImplementedError("sre_compile is not yet implemented in Skulpt")
`,"src/lib/sre_constants.py":`raise NotImplementedError("sre_constants is not yet implemented in Skulpt")
`,"src/lib/sre_parse.py":`raise NotImplementedError("sre_parse is not yet implemented in Skulpt")
`,"src/lib/ssl.py":`raise NotImplementedError("ssl is not yet implemented in Skulpt")
`,"src/lib/stat.py":`raise NotImplementedError("stat is not yet implemented in Skulpt")
`,"src/lib/statvfs.py":`raise NotImplementedError("statvfs is not yet implemented in Skulpt")
`,"src/lib/string.js":'var $builtinmodule=function(){var a={};return a.ascii_lowercase=new Sk.builtin.str("abcdefghijklmnopqrstuvwxyz"),a.ascii_uppercase=new Sk.builtin.str("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a.ascii_letters=new Sk.builtin.str(a.ascii_lowercase.v+a.ascii_uppercase.v),a.lowercase=new Sk.builtin.str("abcdefghijklmnopqrstuvwxyz"),a.uppercase=new Sk.builtin.str("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),a.letters=new Sk.builtin.str(a.lowercase.v+a.uppercase.v),a.digits=new Sk.builtin.str("0123456789"),a.hexdigits=new Sk.builtin.str("0123456789abcdefABCDEF"),a.octdigits=new Sk.builtin.str("01234567"),a.punctuation=new Sk.builtin.str("!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"),a.whitespace=new Sk.builtin.str("\\t\\n\\x0B\\f\\r "),a.printable=new Sk.builtin.str(a.digits.v+a.letters.v+a.punctuation.v+" \\t\\n\\r\\x0B\\f"),a.split=new Sk.builtin.func(function(...a){return Sk.misceval.callsimArray(Sk.builtin.str.prototype.split,a)}),a.capitalize=new Sk.builtin.func(function(a){return Sk.misceval.callsimArray(Sk.builtin.str.prototype.capitalize,[a])}),a.join=new Sk.builtin.func(function(a,b){return void 0===b&&(b=new Sk.builtin.str(" ")),Sk.misceval.callsimArray(Sk.builtin.str.prototype.join,[b,a])}),a.capwords=new Sk.builtin.func(function(b,c){if(Sk.builtin.pyCheckArgsLen("capwords",arguments.length,1,2),!Sk.builtin.checkString(b))throw new Sk.builtin.TypeError("s must be a string");if(void 0===c&&(c=new Sk.builtin.str(" ")),!Sk.builtin.checkString(c))throw new Sk.builtin.TypeError("sep must be a string");for(var d=Sk.misceval.callsimArray(a.split,[b,c]).v,e=[],f=0;f<d.length;f++){var g=d[f],h=Sk.misceval.callsimArray(a.capitalize,[g]);e.push(h)}return Sk.misceval.callsimArray(a.join,[new Sk.builtin.list(e),c])}),a};',"src/lib/string.py":`raise NotImplementedError("string is not yet implemented in Skulpt")
`,"src/lib/stringold.py":`raise NotImplementedError("stringold is not yet implemented in Skulpt")
`,"src/lib/stringprep.py":`raise NotImplementedError("stringprep is not yet implemented in Skulpt")
`,"src/lib/struct.py":`raise NotImplementedError("struct is not yet implemented in Skulpt")
`,"src/lib/subprocess.py":`raise NotImplementedError("subprocess is not yet implemented in Skulpt")
`,"src/lib/sunau.py":`raise NotImplementedError("sunau is not yet implemented in Skulpt")
`,"src/lib/sunaudio.py":`raise NotImplementedError("sunaudio is not yet implemented in Skulpt")
`,"src/lib/symbol.py":`raise NotImplementedError("symbol is not yet implemented in Skulpt")
`,"src/lib/symtable.py":`raise NotImplementedError("symtable is not yet implemented in Skulpt")
`,"src/lib/tabnanny.py":`raise NotImplementedError("tabnanny is not yet implemented in Skulpt")
`,"src/lib/tarfile.py":`raise NotImplementedError("tarfile is not yet implemented in Skulpt")
`,"src/lib/telnetlib.py":`raise NotImplementedError("telnetlib is not yet implemented in Skulpt")
`,"src/lib/tempfile.py":`raise NotImplementedError("tempfile is not yet implemented in Skulpt")
`,"src/lib/test/__init__.py":`__author__ = 'bmiller'

def testEqual(actual, expected):
    if type(expected) == type(1):
        if actual == expected:
            print('Pass')
            return True
    elif type(expected) == type(1.11):
        if abs(actual-expected) < 0.00001:
            print('Pass')
            return True
    else:
        if actual == expected:
            print('Pass')
            return True
    print('Test Failed: expected ' + str(expected) + ' but got ' + str(actual))
    return False

def testNotEqual(actual, expected):
    pass

`,"src/lib/test/bad_getattr.py":`x = 1

__getattr__ = "Surprise!"
__dir__ = "Surprise again!"
`,"src/lib/test/bad_getattr2.py":`def __getattr__():
    "Bad one"

x = 1

def __dir__(bad_sig):
    return []
`,"src/lib/test/bad_getattr3.py":`def __getattr__(name):
    global __getattr__
    if name != 'delgetattr':
        raise AttributeError
    del __getattr__
    raise AttributeError
`,"src/lib/test/decimaltestdata/__init__.py":`raise NotImplementedError("decimaltestdata is not yet implemented in Skulpt")
`,"src/lib/test/good_getattr.py":`x = 1

def __dir__():
    return ['a', 'b', 'c']

def __getattr__(name):
    if name == "yolo":
        raise AttributeError("Deprecated, use whatever instead")
    return f"There is {name}"

y = 2
`,"src/lib/test/test_support.py":`"""Supporting definitions for the Python regression tests."""

if __name__ != 'test.test_support':
    raise ImportError('test_support must be imported from the test package')

import unittest


# def run_unittest(*classes):
#     """Run tests from unittest.TestCase-derived classes."""
#     valid_types = (unittest.TestSuite, unittest.TestCase)
#     suite = unittest.TestSuite()
#     for cls in classes:
#         if isinstance(cls, str):
#             if cls in sys.modules:
#                 suite.addTest(unittest.findTestCases(sys.modules[cls]))
#             else:
#                 raise ValueError("str arguments must be keys in sys.modules")
#         elif isinstance(cls, valid_types):
#             suite.addTest(cls)
#         else:
#             suite.addTest(unittest.makeSuite(cls))
#     _run_suite(suite)

def run_unittest(*classes):
    """Run tests from unittest.TestCase-derived classes."""
    for cls in classes:
        print cls
        if issubclass(cls, unittest.TestCase):
            cls().main()
        else:
            print "Don't know what to do with ", cls
`,"src/lib/textwrap.py":`"""Text wrapping and filling.
"""

# Copyright (C) 1999-2001 Gregory P. Ward.
# Copyright (C) 2002, 2003 Python Software Foundation.
# Written by Greg Ward <gward@python.net>

import re, string

__all__ = ['TextWrapper', 'wrap', 'fill', 'dedent', 'indent', 'shorten']

# Hardcode the recognized whitespace characters to the US-ASCII
# whitespace characters.  The main reason for doing this is that
# some Unicode spaces (like \\u00a0) are non-breaking whitespaces.
_whitespace = '\\t\\n\\x0b\\x0c\\r '

class TextWrapper:
    """
    Object for wrapping/filling text.  The public interface consists of
    the wrap() and fill() methods; the other methods are just there for
    subclasses to override in order to tweak the default behaviour.
    If you want to completely replace the main wrapping algorithm,
    you'll probably have to override _wrap_chunks().
    Several instance attributes control various aspects of wrapping:
      width (default: 70)
        the maximum width of wrapped lines (unless break_long_words
        is false)
      initial_indent (default: "")
        string that will be prepended to the first line of wrapped
        output.  Counts towards the line's width.
      subsequent_indent (default: "")
        string that will be prepended to all lines save the first
        of wrapped output; also counts towards each line's width.
      expand_tabs (default: true)
        Expand tabs in input text to spaces before further processing.
        Each tab will become 0 .. 'tabsize' spaces, depending on its position
        in its line.  If false, each tab is treated as a single character.
      tabsize (default: 8)
        Expand tabs in input text to 0 .. 'tabsize' spaces, unless
        'expand_tabs' is false.
      replace_whitespace (default: true)
        Replace all whitespace characters in the input text by spaces
        after tab expansion.  Note that if expand_tabs is false and
        replace_whitespace is true, every tab will be converted to a
        single space!
      fix_sentence_endings (default: false)
        Ensure that sentence-ending punctuation is always followed
        by two spaces.  Off by default because the algorithm is
        (unavoidably) imperfect.
      break_long_words (default: true)
        Break words longer than 'width'.  If false, those words will not
        be broken, and some lines might be longer than 'width'.
      break_on_hyphens (default: true)
        Allow breaking hyphenated words. If true, wrapping will occur
        preferably on whitespaces and right after hyphens part of
        compound words.
      drop_whitespace (default: true)
        Drop leading and trailing whitespace from lines.
      max_lines (default: None)
        Truncate wrapped lines.
      placeholder (default: ' [...]')
        Append to the last line of truncated text.
    """

    unicode_whitespace_trans = {}
    # uspace = ord(' ')
    uspace = ' '
    for x in _whitespace:
        # unicode_whitespace_trans[ord(x)] = uspace
        unicode_whitespace_trans[x] = uspace

    # This funky little regex is just the trick for splitting
    # text up into word-wrappable chunks.  E.g.
    #   "Hello there -- you goof-ball, use the -b option!"
    # splits into
    #   Hello/ /there/ /--/ /you/ /goof-/ball,/ /use/ /the/ /-b/ /option!
    # (after stripping out empty strings).
    wordsep_re = re.compile(
        r'(\\s+|'                                  # any whitespace
        r'[^\\s\\w]*\\w+[^0-9\\W]-(?=\\w+[^0-9\\W]))')  # hyphenated words
    em_dash = re.compile(r'(\\s+|'                                  # any whitespace
                         r'[^\\s\\w]*\\w+[^0-9\\W]-(?=\\w+[^0-9\\W])|'   # hyphenated words
                         r'(?!^)-{2,}(?=\\w))')                     # em-dash

                         
    # This less funky little regex just split on recognized spaces. E.g.
    #   "Hello there -- you goof-ball, use the -b option!"
    # splits into
    #   Hello/ /there/ /--/ /you/ /goof-ball,/ /use/ /the/ /-b/ /option!/
    wordsep_simple_re = re.compile(r'(\\s+)')


    # XXX this is not locale- or charset-aware -- string.lowercase
    # is US-ASCII only (and therefore English-only)
    sentence_end_re = re.compile(r'[a-z]'             # lowercase letter
                                 r'[\\.\\!\\?]'          # sentence-ending punct.
                                 r'[\\"\\']?'           # optional end-of-quote
                                 r'\\Z')               # end of chunk
    sentence_end_re = r'[a-z][\\.\\!\\?][\\"\\']?'

    def __init__(self,
                 width=70,
                 initial_indent="",
                 subsequent_indent="",
                 expand_tabs=True,
                 replace_whitespace=True,
                 fix_sentence_endings=False,
                 break_long_words=True,
                 drop_whitespace=True,
                 break_on_hyphens=True,
                 tabsize=8,
                 max_lines=None,
                 placeholder=' [...]'):
        self.width = width
        self.initial_indent = initial_indent
        self.subsequent_indent = subsequent_indent
        self.expand_tabs = expand_tabs
        self.replace_whitespace = replace_whitespace
        self.fix_sentence_endings = fix_sentence_endings
        self.break_long_words = break_long_words
        self.drop_whitespace = drop_whitespace
        self.break_on_hyphens = break_on_hyphens
        self.tabsize = tabsize
        self.max_lines = max_lines
        self.placeholder = placeholder


    # -- Private methods -----------------------------------------------
    # (possibly useful for subclasses to override)

    def _munge_whitespace(self, text):
        """_munge_whitespace(text : string) -> string
        Munge whitespace in text: expand tabs and convert all other
        whitespace characters to spaces.  Eg. " foo\\\\tbar\\\\n\\\\nbaz"
        becomes " foo    bar  baz".
        """
        if self.expand_tabs:
            text = text.expandtabs(self.tabsize)
        if self.replace_whitespace:
            for key, val in self.unicode_whitespace_trans.items():
                text = text.replace(key, val)
        return text


    def _split(self, text):
        """_split(text : string) -> [string]
        Split the text to wrap into indivisible chunks.  Chunks are
        not quite the same as words; see _wrap_chunks() for full
        details.  As an example, the text
          Look, goof-ball -- use the -b option!
        breaks into the following chunks:
          'Look,', ' ', 'goof-', 'ball', ' ', '--', ' ',
          'use', ' ', 'the', ' ', '-b', ' ', 'option!'
        if break_on_hyphens is True, or in:
          'Look,', ' ', 'goof-ball', ' ', '--', ' ',
          'use', ' ', 'the', ' ', '-b', ' ', option!'
        otherwise.
        """
        if self.break_on_hyphens is True:
            chunks = self.wordsep_re.split(text)
            if "--" in text:
                chunks = [item 
                            for sublist in [self.em_dash.split(chunk) for chunk in chunks] 
                                for item in sublist]
        else:
            chunks = self.wordsep_simple_re.split(text)
        chunks = [c for c in chunks if c]
        return chunks

    def _fix_sentence_endings(self, chunks):
        """_fix_sentence_endings(chunks : [string])
        Correct for sentence endings buried in 'chunks'.  Eg. when the
        original text contains "... foo.\\\\nBar ...", munge_whitespace()
        and split() will convert that to [..., "foo.", " ", "Bar", ...]
        which has one too few spaces; this method simply changes the one
        space to two.
        """
        i = 0
        # patsearch = self.sentence_end_re.search
        while i < len(chunks)-1:
            if chunks[i+1] == " " and re.search(self.sentence_end_re, chunks[i]) and chunks[i][-1] in ".!?\\"\\'":
                chunks[i+1] = "  "
                i += 2
            else:
                i += 1

    def _handle_long_word(self, reversed_chunks, cur_line, cur_len, width):
        """_handle_long_word(chunks : [string],
                             cur_line : [string],
                             cur_len : int, width : int)
        Handle a chunk of text (most likely a word, not whitespace) that
        is too long to fit in any line.
        """
        # Figure out when indent is larger than the specified width, and make
        # sure at least one character is stripped off on every pass
        if width < 1:
            space_left = 1
        else:
            space_left = width - cur_len

        # If we're allowed to break long words, then do so: put as much
        # of the next chunk onto the current line as will fit.
        if self.break_long_words:
            cur_line.append(reversed_chunks[-1][:space_left])
            reversed_chunks[-1] = reversed_chunks[-1][space_left:]

        # Otherwise, we have to preserve the long word intact.  Only add
        # it to the current line if there's nothing already there --
        # that minimizes how much we violate the width constraint.
        elif not cur_line:
            cur_line.append(reversed_chunks.pop())

        # If we're not allowed to break long words, and there's already
        # text on the current line, do nothing.  Next time through the
        # main loop of _wrap_chunks(), we'll wind up here again, but
        # cur_len will be zero, so the next line will be entirely
        # devoted to the long word that we can't handle right now.

    def _wrap_chunks(self, chunks):
        """_wrap_chunks(chunks : [string]) -> [string]
        Wrap a sequence of text chunks and return a list of lines of
        length 'self.width' or less.  (If 'break_long_words' is false,
        some lines may be longer than this.)  Chunks correspond roughly
        to words and the whitespace between them: each chunk is
        indivisible (modulo 'break_long_words'), but a line break can
        come between any two chunks.  Chunks should not have internal
        whitespace; ie. a chunk is either all whitespace or a "word".
        Whitespace chunks will be removed from the beginning and end of
        lines, but apart from that whitespace is preserved.
        """
        lines = []
        if self.width <= 0:
            raise ValueError("invalid width %r (must be > 0)" % self.width)
        if self.max_lines is not None:
            if self.max_lines > 1:
                indent = self.subsequent_indent
            else:
                indent = self.initial_indent
            if len(indent) + len(self.placeholder.lstrip()) > self.width:
                raise ValueError("placeholder too large for max width")

        # Arrange in reverse order so items can be efficiently popped
        # from a stack of chucks.
        chunks.reverse()

        while chunks:

            # Start the list of chunks that will make up the current line.
            # cur_len is just the length of all the chunks in cur_line.
            cur_line = []
            cur_len = 0

            # Figure out which static string will prefix this line.
            if lines:
                indent = self.subsequent_indent
            else:
                indent = self.initial_indent

            # Maximum width for this line.
            width = self.width - len(indent)

            # First chunk on line is whitespace -- drop it, unless this
            # is the very beginning of the text (ie. no lines started yet).
            if self.drop_whitespace and chunks[-1].strip() == '' and lines:
                del chunks[-1]

            while chunks:
                l = len(chunks[-1])

                # Can at least squeeze this chunk onto the current line.
                if cur_len + l <= width:
                    cur_line.append(chunks.pop())
                    cur_len += l

                # Nope, this line is full.
                else:
                    break

            # The current line is full, and the next chunk is too big to
            # fit on *any* line (not just this one).
            if chunks and len(chunks[-1]) > width:
                self._handle_long_word(chunks, cur_line, cur_len, width)
                cur_len = sum(map(len, cur_line))

            # If the last chunk on this line is all whitespace, drop it.
            if self.drop_whitespace and cur_line and cur_line[-1].strip() == '':
                cur_len -= len(cur_line[-1])
                del cur_line[-1]

            if cur_line:
                if (self.max_lines is None or
                    len(lines) + 1 < self.max_lines or
                    (not chunks or
                     self.drop_whitespace and
                     len(chunks) == 1 and
                     not chunks[0].strip()) and cur_len <= width):
                    # Convert current line back to a string and store it in
                    # list of all lines (return value).
                    lines.append(indent + ''.join(cur_line))
                else:
                    while cur_line:
                        if (cur_line[-1].strip() and
                            cur_len + len(self.placeholder) <= width):
                            cur_line.append(self.placeholder)
                            lines.append(indent + ''.join(cur_line))
                            break
                        cur_len -= len(cur_line[-1])
                        del cur_line[-1]
                    else:
                        if lines:
                            prev_line = lines[-1].rstrip()
                            if (len(prev_line) + len(self.placeholder) <=
                                    self.width):
                                lines[-1] = prev_line + self.placeholder
                                break
                        lines.append(indent + self.placeholder.lstrip())
                    break

        return lines

    def _split_chunks(self, text):
        text = self._munge_whitespace(text)
        return self._split(text)

    # -- Public interface ----------------------------------------------

    def wrap(self, text):
        """wrap(text : string) -> [string]
        Reformat the single paragraph in 'text' so it fits in lines of
        no more than 'self.width' columns, and return a list of wrapped
        lines.  Tabs in 'text' are expanded with string.expandtabs(),
        and all other whitespace characters (including newline) are
        converted to space.
        """
        chunks = self._split_chunks(text)
        if self.fix_sentence_endings:
            self._fix_sentence_endings(chunks)
        return self._wrap_chunks(chunks)

    def fill(self, text):
        """fill(text : string) -> string
        Reformat the single paragraph in 'text' to fit in lines of no
        more than 'self.width' columns, and return a new string
        containing the entire wrapped paragraph.
        """
        return "\\n".join(self.wrap(text))


# -- Convenience interface ---------------------------------------------

def wrap(text, width=70, **kwargs):
    """Wrap a single paragraph of text, returning a list of wrapped lines.
    Reformat the single paragraph in 'text' so it fits in lines of no
    more than 'width' columns, and return a list of wrapped lines.  By
    default, tabs in 'text' are expanded with string.expandtabs(), and
    all other whitespace characters (including newline) are converted to
    space.  See TextWrapper class for available keyword args to customize
    wrapping behaviour.
    """
    w = TextWrapper(width=width, **kwargs)
    return w.wrap(text)

def fill(text, width=70, **kwargs):
    """Fill a single paragraph of text, returning a new string.
    Reformat the single paragraph in 'text' to fit in lines of no more
    than 'width' columns, and return a new string containing the entire
    wrapped paragraph.  As with wrap(), tabs are expanded and other
    whitespace characters converted to space.  See TextWrapper class for
    available keyword args to customize wrapping behaviour.
    """
    w = TextWrapper(width=width, **kwargs)
    return w.fill(text)

def shorten(text, width, **kwargs):
    """Collapse and truncate the given text to fit in the given width.
    The text first has its whitespace collapsed.  If it then fits in
    the *width*, it is returned as is.  Otherwise, as many words
    as possible are joined and then the placeholder is appended::
        >>> textwrap.shorten("Hello  world!", width=12)
        'Hello world!'
        >>> textwrap.shorten("Hello  world!", width=11)
        'Hello [...]'
    """
    w = TextWrapper(width=width, max_lines=1, **kwargs)
    return w.fill(' '.join(text.strip().split()))


# -- Loosely related functionality -------------------------------------

# _whitespace_only_re = re.compile('^[ \\t]+$', re.MULTILINE)
# _leading_whitespace_re = re.compile('(^[ \\t]*)(?:[^ \\t\\n])', re.MULTILINE)

def dedent(text):
    """Remove any common leading whitespace from every line in \`text\`.
    This can be used to make triple-quoted strings line up with the left
    edge of the display, while still presenting them in the source code
    in indented form.
    Note that tabs and spaces are both treated as whitespace, but they
    are not equal: the lines "  hello" and "\\\\thello" are
    considered to have no common leading whitespace.
    Entirely blank lines are normalized to a newline character.
    """
    # Look for the longest leading string of spaces and tabs common to
    # all lines.
    margin = None

    indents = re.findall(r'(^[ \\t]*)(?:[^ \\t\\n])',text, re.MULTILINE)
    for indent in indents:
        if margin is None:
            margin = indent

        # Current line more deeply indented than previous winner:
        # no change (previous winner is still on top).
        elif indent.startswith(margin):
            pass

        # Current line consistent with and no deeper than previous winner:
        # it's the new winner.
        elif margin.startswith(indent):
            margin = indent

        # Find the largest common whitespace between current line and previous
        # winner.
        else:
            for i, (x, y) in enumerate(zip(margin, indent)):
                if x != y:
                    margin = margin[:i]
                    break
    # sanity check (testing/debugging only)
    if 0 and margin:
        for line in text.split("\\n"):
            assert not line or line.startswith(margin), \\
                   "line = %r, margin = %r" % (line, margin)

    if margin:
        lines = [line[len(margin):] 
                    if line.strip()
                        else line.strip() 
                            for line in text.split("\\n")]
        text = "\\n".join(lines)
    return text


def indent(text, prefix, predicate=None):
    """Adds 'prefix' to the beginning of selected lines in 'text'.
    If 'predicate' is provided, 'prefix' will only be added to the lines
    where 'predicate(line)' is True. If 'predicate' is not provided,
    it will default to adding 'prefix' to all non-empty lines that do not
    consist solely of whitespace characters.
    """
    if predicate is None:
        def predicate(line):
            return line.strip()

    def prefixed_lines():
        for line in text.splitlines(True):
            yield (prefix + line if predicate(line) else line)
    return ''.join(prefixed_lines())


if __name__ == "__main__":
    #print dedent("\\tfoo\\n\\tbar")
    #print dedent("  \\thello there\\n  \\t  how are you?")
    print(dedent("Hello there.\\n  This is indented."))`,"src/lib/this.py":`raise NotImplementedError("this is not yet implemented in Skulpt")
`,"src/lib/threading.py":`raise NotImplementedError("threading is not yet implemented in Skulpt")
`,"src/lib/time.js":`var $builtinmodule=function(){function check_struct_time(a){if(!(a instanceof b))throw new Sk.builtin.TypeError("Required argument 'struct_time' must be of type: 'struct_time'");var c,d=a.v.length,e=a.v;for(c=0;c<d;++c)if(!Sk.builtin.checkInt(e[c]))throw new Sk.builtin.TypeError("struct_time may only contain integers");return!0}function padLeft(a,b,d){var c=a.toString();return Array(b-c.length+1).join(d||" ")+c}function isLeapYear(a){return 0==(3&a)&&(0!=a%100||0==a%400)}function getDayOfYear(a,b){b=b||!1;var c=b?a.getUTCMonth():a.getMonth(),d=b?a.getUTCDate():a.getDate(),e=[0,31,59,90,120,151,181,212,243,273,304,334][c]+d;return 1<c&&isLeapYear(b?a.getUTCFullYear():a.getFullYear())&&e++,e}function stdTimezoneOffset(){var a=Math.max,b=new Date(2002,0,1),c=new Date(2002,6,1);return a(b.getTimezoneOffset(),c.getTimezoneOffset())}function dst(a){return a.getTimezoneOffset()<stdTimezoneOffset()}function timeZoneName(a){var b,c=/\\((.*)\\)/.exec(a.toString());if(null!=this.navigator&&(b=this.navigator.userLanguage||this.navigator.language),c&&1<c.length)return c[1];if(void 0===b)return null;try{var d=a.toLocaleString(b,{timeZoneName:"short"});return c=d.split(" "),c[c.length-1]}catch(a){return null}}function date_to_struct_time(a,c){return c=c||!1,new b([Sk.builtin.assk$(c?a.getUTCFullYear():a.getFullYear()),Sk.builtin.assk$((c?a.getUTCMonth():a.getMonth())+1),Sk.builtin.assk$(c?a.getUTCDate():a.getDate()),Sk.builtin.assk$(c?a.getUTCHours():a.getHours()),Sk.builtin.assk$(c?a.getUTCMinutes():a.getMinutes()),Sk.builtin.assk$(c?a.getUTCSeconds():a.getSeconds()),Sk.builtin.assk$(((c?a.getUTCDay():a.getDay())+6)%7),Sk.builtin.assk$(getDayOfYear(a,c)),Sk.builtin.assk$(c?0:dst(a)?1:0)])}function from_seconds(a,b){var c=new Date;if(a){Sk.builtin.pyCheckType("secs","number",Sk.builtin.checkNumber(a));var d=Sk.builtin.asnum$(a);c.setTime(1e3*d)}return date_to_struct_time(c,b)}function asctime_f(a){if(Sk.builtin.pyCheckArgsLen("asctime",arguments.length,0,1),!a||Sk.builtin.checkNone(a)?a=from_seconds():!(a instanceof b)&&(a=new b(a)),a instanceof Sk.builtin.tuple&&9==a.v.length){var e=[d[Sk.builtin.asnum$(a.v[6])],c[Sk.builtin.asnum$(a.v[1])-1],padLeft(Sk.builtin.asnum$(a.v[2]).toString(),2,"0"),padLeft(Sk.builtin.asnum$(a.v[3]).toString(),2,"0")+":"+padLeft(Sk.builtin.asnum$(a.v[4]).toString(),2,"0")+":"+padLeft(Sk.builtin.asnum$(a.v[5]).toString(),2,"0"),padLeft(Sk.builtin.asnum$(a.v[0]).toString(),4,"0")];return new Sk.builtin.str(e.join(" "))}}function mktime_f(a){if(Sk.builtin.pyCheckArgsLen("mktime",arguments.length,1,1),a instanceof Sk.builtin.tuple&&9==a.v.length){var b=new Date(Sk.builtin.asnum$(a.v[0]),Sk.builtin.asnum$(a.v[1])-1,Sk.builtin.asnum$(a.v[2]),Sk.builtin.asnum$(a.v[3]),Sk.builtin.asnum$(a.v[4]),Sk.builtin.asnum$(a.v[5]));return Sk.builtin.assk$(b.getTime()/1e3,void 0)}throw new Sk.builtin.TypeError("mktime() requires a struct_time or 9-tuple")}var a={__package__:new Sk.builtin.str("")},b=Sk.builtin.make_structseq("time","struct_time",{tm_year:"year, for example, 1993",tm_mon:"month of year, range [1, 12]",tm_mday:"day of month, range [1, 31]",tm_hour:"hours, range [0, 23]",tm_min:"minutes, range [0, 59]",tm_sec:"seconds, range [0, 61]",tm_wday:"day of week, range [0, 6], Monday is 0",tm_yday:"day of year, range [1, 366]",tm_isdst:"1 if summer time is in effect, 0 if not, and -1 if unknown"});a.struct_time=b,a.time=new Sk.builtin.func(function(){Sk.builtin.pyCheckArgsLen("time",arguments.length,0,0);var a=Date.now();return this.performance&&this.performance.now&&(a+=performance.now()%1),Sk.builtin.assk$(a/1e3,void 0)}),a.sleep=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("sleep",arguments.length,1,1),Sk.builtin.pyCheckType("delay","float",Sk.builtin.checkNumber(a)),new Sk.misceval.promiseToSuspension(new Promise(function(b){Sk.setTimeout(function(){b(Sk.builtin.none.none$)},1e3*Sk.ffi.remapToJs(a))}))}),a.localtime=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("localtime",arguments.length,0,1),from_seconds(a,!1)}),a.gmtime=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("gmtime",arguments.length,0,1),from_seconds(a,!0)});var c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return a.asctime=new Sk.builtin.func(asctime_f),a.ctime=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("ctime",arguments.length,0,1),asctime_f(from_seconds(a))}),a.mktime=new Sk.builtin.func(mktime_f),a.timezone=new Sk.builtin.int_(60*stdTimezoneOffset()),a.altzone=new Sk.builtin.int_(60*function altTimezoneOffset(){var a=Math.min,b=new Date(2002,0,1),c=new Date(2002,6,1);return a(b.getTimezoneOffset(),c.getTimezoneOffset())}()),a.daylight=new Sk.builtin.int_(dst(new Date)?1:0),a.tzname=new Sk.builtin.tuple(function timeZoneNames(){var a=new Date(2002,0,1),b=new Date(2002,6,1);return dst(a)?[new Sk.builtin.str(timeZoneName(b)),new Sk.builtin.str(timeZoneName(a))]:[new Sk.builtin.str(timeZoneName(a)),new Sk.builtin.str(timeZoneName(b))]}()),a.accept2dyear=Sk.builtin.assk$(1),a.clock=new Sk.builtin.func(function(){var a=0;return a=this.performance&&this.performance.now?performance.now()/1e3:new Date().getTime()/1e3,new Sk.builtin.float_(a)}),a.strftime=new Sk.builtin.func(function strftime_f(a,c){var d;if(Sk.builtin.pyCheckArgsLen("strftime",arguments.length,1,2),!Sk.builtin.checkString(a))throw new Sk.builtin.TypeError("format must be a string");return c?!(c instanceof b)&&(c=new b(c)):c=from_seconds(),check_struct_time(c),d=Sk.ffi.remapToJs(a),Sk.ffi.remapToPy(strftime(d,new Date(1e3*mktime_f(c).v)))}),a.tzset=new Sk.builtin.func(function tzset_f(){throw new Sk.builtin.NotImplementedError("time.tzset() is not yet implemented")}),a.strptime=new Sk.builtin.func(function strptime_f(a,b){Sk.builtin.pyCheckArgsLen("strptime",arguments.length,1,2),Sk.builtin.pyCheckType("string","string",Sk.builtin.checkString(a)),void 0===b?b=new Sk.builtin.str("%a %b %d %H:%M:%S %Y"):Sk.builtin.pyCheckType("format","string",Sk.builtin.checkString(b));let c=date_to_struct_time(strptime(Sk.ffi.remapToJs(a),Sk.ffi.remapToJs(b),!0));return c.v[8]=new Sk.builtin.int_(-1),c}),a};`,"src/lib/timeit.py":`raise NotImplementedError("timeit is not yet implemented in Skulpt")
`,"src/lib/toaiff.py":`raise NotImplementedError("toaiff is not yet implemented in Skulpt")
`,"src/lib/token.js":'var $builtinmodule=function(){var a={__file__:"/src/lib/token.py"};const b=[];for(token in Sk.token.tok_name){const c=Sk.token.tok_name[token].slice(2),d=parseInt(token,10);b.push(Sk.ffi.remapToPy(d)),b.push(Sk.ffi.remapToPy(c)),a[c]=Sk.ffi.remapToPy(d)}return a.tok_name=new Sk.builtin.dict(b),a.ISTERMINAL=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("ISTERMINAL",arguments.length,1,1),Sk.token.ISTERMINAL(Sk.ffi.remapToJs(a))}),a.ISNONTERMINAL=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("ISNONTERMINAL",arguments.length,1,1),Sk.token.ISNONTERMINAL(Sk.ffi.remapToJs(a))}),a.ISEOF=new Sk.builtin.func(function(a){return Sk.builtin.pyCheckArgsLen("ISEOF",arguments.length,1,1),Sk.token.ISEOF(Sk.ffi.remapToJs(a))}),a};',"src/lib/tokenize.js":'var $builtinmodule=function(){var a={tokenize:new Sk.builtin.func(function(a){Sk.builtin.pyCheckArgsLen("tokenize",1,1),Sk.builtin.checkFunction(a);const b=[];return Sk._tokenize("<stdin>",function jsReadline(){const b=Sk.misceval.callsimArray(a);return Sk.ffi.remapToJs(b)},"UTF-8",function receiveToken(a){b.push(new Sk.builtin.tuple([Sk.ffi.remapToPy(a.type),Sk.ffi.remapToPy(a.string),new Sk.builtin.tuple([Sk.ffi.remapToPy(a.start[0]),Sk.ffi.remapToPy(a.start[1])]),new Sk.builtin.tuple([Sk.ffi.remapToPy(a.end[0]),Sk.ffi.remapToPy(a.end[1])]),Sk.ffi.remapToPy(a.line)]))}),new Sk.builtin.list(b)})};return a};',"src/lib/trace.py":`raise NotImplementedError("trace is not yet implemented in Skulpt")
`,"src/lib/traceback.py":`raise NotImplementedError("traceback is not yet implemented in Skulpt")
`,"src/lib/tty.py":`raise NotImplementedError("tty is not yet implemented in Skulpt")
`,"src/lib/turtle.js":`var $builtinmodule=function(){"use strict";var e=function getConfiguredTarget(){var e,t;for(e=Sk.TurtleGraphics&&Sk.TurtleGraphics.target||"turtle",t="string"==typeof e?document.getElementById(e):e;t.firstChild;)t.removeChild(t.firstChild);return t}();return e.turtleInstance?e.turtleInstance.reset():e.turtleInstance=function generateTurtleModule(e){var t=Math.round,r=Math.max,n=Math.sqrt,a=Math.min,s=Math.abs,o=Math.PI,d=Math.atan2,_=Math.sin,c=Math.cos;function getAsset(e){var t=g.assets,r="function"==typeof t?t(e):t[e];return"string"==typeof r?new Promise(function(t,n){var a=new Image;a.onload=function(){g.assets[e]=this,t(a)},a.onerror=function(){n(new Error("Missing asset: "+r))},a.src=r}):new InstantPromise(void 0,r)}function InstantPromise(e,t){this.lastResult=t,this.lastError=e}function FrameManager(){this.reset()}function getFrameManager(){return A||(A=new FrameManager),A}function MouseHandler(){var t=this;for(var r in this._target=getTarget(),this._managers={},this._handlers={mousedown:function(r){t.onEvent("mousedown",r)},mouseup:function(r){t.onEvent("mouseup",r)},mousemove:function(r){t.onEvent("mousemove",r)}},this._handlers)this._target.addEventListener(r,this._handlers[r])}function EventManager(e,t){this._type=e,this._target=t,this._handlers=void 0,getMouseHandler().addManager(e,this)}function Turtle(e){if(getFrameManager().addTurtle(this),this._screen=getScreen(),this._managers={},this._shape=e.v,!v.hasOwnProperty(this._shape))throw new Sk.builtin.ValueError("Shape:'"+this._shape+"' not in default shape, please check shape again!");this.reset()}function Screen(){var e,t;this._frames=1,this._delay=void 0,this._bgcolor="none",this._mode="standard",this._managers={},this._keyLogger={},e=(g.worldWidth||g.width||getWidth())/2,t=(g.worldHeight||g.height||getHeight())/2,this.setUpWorld(-e,-t,e,t)}function ensureAnonymous(){return f||(f=Sk.misceval.callsimArray(y.Turtle)),f.instance}function getTarget(){return e}function getScreen(){return p||(p=new Screen),p}function getMouseHandler(){return h||(h=new MouseHandler),h}function getWidth(){return 0|(p&&p._width||g.width||getTarget().clientWidth||T.width)}function getHeight(){return 0|(p&&p._height||g.height||getTarget().clientHeight||T.height)}function createLayer(e,t){var r,n=document.createElement("canvas"),a=getWidth(),s=getHeight(),l=getTarget().firstChild?-s+"px":"0";return n.width=a,n.height=s,n.style.position="relative",n.style.display="block",n.style.setProperty("margin-top",l),n.style.setProperty("z-index",e),t&&(n.style.display="none"),getTarget().appendChild(n),r=n.getContext("2d"),r.lineCap="round",r.lineJoin="round",applyWorld(getScreen(),r),r}function cancelAnimationFrame(){u&&((window.cancelAnimationFrame||window.mozCancelAnimationFrame)(u),u=void 0),m&&(window.clearTimeout(m),m=void 0)}function applyWorld(e,t){var r=e.llx,n=e.lly,a=e.urx,s=e.ury,l=e.xScale,i=e.yScale;t&&(clearLayer(t),t.restore(),t.save(),t.scale(1/l,1/i),t.translate(-r,-s))}function pushUndo(e){var t,r,n;if(g.allowUndo&&e._bufferSize){for(e._undoBuffer||(e._undoBuffer=[]);e._undoBuffer.length>e._bufferSize;)e._undoBuffer.shift();for(r={},t=["x","y","angle","radians","color","fill","down","filling","shown","shape","size"],n=0;n<t.length;n++)r[t[n]]=e["_"+t[n]];return e._undoBuffer.push(r),e.addUpdate(function(){r.fillBuffer=this.fillBuffer?this.fillBuffer.slice():void 0,e._paper&&e._paper.canvas&&(r.image=e._paper.canvas.toDataURL())},!1)}}function popUndo(e){var t;if(e._bufferSize&&e._undoBuffer&&(t=e._undoBuffer.pop(),!!t)){for(var r in t)"image"!=r&&"fillBuffer"!==r&&(e["_"+r]=t[r]);return e.addUpdate(function(){var e;t.image&&(L.src=t.image,e=L),clearLayer(this.context(),!1,L),delete t.image},!0,t)}}function removeLayer(e){e&&e.canvas&&e.canvas.parentNode&&e.canvas.parentNode.removeChild(e.canvas)}function clearLayer(e,t,r){e&&(e.save(),e.setTransform(1,0,0,1,0,0),t?(e.fillStyle=t,e.fillRect(0,0,e.canvas.width,e.canvas.height)):e.clearRect(0,0,e.canvas.width,e.canvas.height),r&&e.drawImage(r,0,0),e.restore())}function drawTurtle(e,t){var r,n,a,s=v[e.shape],l=getScreen(),u=getWidth(),m=getHeight(),p=l.xScale,g=l.yScale;if(t){if(r=c(e.radians)/p,n=_(e.radians)/g,a=d(n,r)-o/2,t.save(),t.translate(e.x,e.y),t.scale(p,g),s.nodeName){var f=s.naturalWidth,h=s.naturalHeight;t.drawImage(s,0,0,f,h,-f/2,-h/2,f,h)}else{t.rotate(a),t.beginPath(),t.lineWidth=1,t.strokeStyle=e.color,t.fillStyle=e.fill,t.moveTo(-s[0][0],s[0][1]);for(var $=1;$<s.length;$++)t.lineTo(-s[$][0],s[$][1]);t.closePath(),t.fill(),t.stroke()}t.restore()}}function drawDot(e,t){var r=this.context(),n=getScreen(),l=n.xScale,i=n.yScale;r&&(r.beginPath(),r.moveTo(this.x,this.y),e*=a(s(l),s(i)),r.arc(this.x,this.y,e/2,0,Turtle.RADIANS),r.closePath(),r.fillStyle=t||this.color,r.fill())}function measureText(e,t){return t&&(S.font=t),S.measureText(e).width}function drawText(e,t,r){var n=this.context();n&&(n.save(),r&&(n.font=r),t&&t.match(/^(left|right|center)$/)&&(n.textAlign=t),n.scale(1,-1),n.fillStyle=this.fill,n.fillText(e,this.x,-this.y),n.restore())}function drawLine(e,t){var r=this.context();r&&(t&&(r.beginPath(),r.moveTo(this.x,this.y)),r.lineWidth=this.size*getScreen().lineScale,r.strokeStyle=this.color,r.lineTo(e.x,e.y),r.stroke())}function drawFill(){var e,t=this.context(),r=this.fillBuffer;if(t&&r&&r.length){for(t.save(),t.beginPath(),t.moveTo(r[0].x,r[0].y),e=1;e<r.length;e++)t.lineTo(r[e].x,r[e].y);for(t.closePath(),t.fillStyle=this.fill,t.fill(),e=1;e<r.length;e++)r[e].stroke&&(t.beginPath(),t.moveTo(r[e-1].x,r[e-1].y),t.lineWidth=r[e].size*getScreen().lineScale,t.strokeStyle=r[e].color,t.lineTo(r[e].x,r[e].y),t.stroke());t.restore()}}function partialTranslate(e,t,r,n,a){return function(){return e.addUpdate(function(e){this.down&&drawLine.call(this,e,n)},a,{x:t,y:r},n)}}function translate(e,a,l,o,d,_,c){var u,m=e._computed_speed,p=getScreen(),g=s(p.xScale),f=s(p.yScale),h=a,$=l,w=n(o*o*g+d*d*f),b=m?t(r(1,w/m)):1,v=getFrameManager().willRenderNext()?Promise.resolve():new InstantPromise;for(e.addUpdate(function(){this.filling&&this.fillBuffer.push({x:this.x,y:this.y,stroke:this.down,color:this.color,size:this.size})},!1),u=0;u<b;u++)h=a+o/b*(u+1),$=l+d/b*(u+1),v=v.then(partialTranslate(e,h,$,_,m||!c)),_=!1;return v.then(function(){return[a+o,l+d]})}function partialRotate(e,t,r,n){return function(){return e.addUpdate(void 0,n,{angle:t,radians:r})}}function rotate(e,n,a,l){var o,d=e._computed_speed,_=360*(a/e._fullCircle),c=d?t(r(1,s(_)/d)):1,u={},m=getFrameManager().willRenderNext()?Promise.resolve():new InstantPromise;for(o=0;o<c;o++)calculateHeading(e,n+a/c*(o+1),u),m=m.then(partialRotate(e,u.angle,u.radians,d||!l));return m.then(function(){return calculateHeading(e,n+a)})}function getCoordinates(e,t){return void 0===t&&(t=e&&(e.y||e._y||e[1])||0,e=e&&(e.x||e._x||e[0])||0),{x:e,y:t}}function hexToRGB(e){var t,r,n;return(t=/^rgba?\\((\\d+),(\\d+),(\\d+)(?:,([.\\d]+))?\\)$/.exec(e))?(n=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])],t[4]&&n.push(parseFloat(t[4]))):/^#?[a-f\\d]{3}|[a-f\\d]{6}$/i.exec(e)?(4===e.length&&(e=e.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,function(e,t,r,n){return t+t+r+r+n+n})),r=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(e),n=[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]):n=e,n}function createColor(e,t,n,s,l){var o;if(void 0!==n&&(t=[t,n,s,l]),t.constructor===Array&&t.length){if(255===e){for(o=0;3>o;o++)if("number"==typeof t[o])t[o]=r(0,a(255,parseInt(t[o])));else throw new Sk.builtin.ValueError("bad color sequence");}else for(o=0;3>o;o++)if("number"!=typeof t[o])throw new Sk.builtin.ValueError("bad color sequence");else if(1>=t[o])t[o]=r(0,a(255,parseInt(255*t[o])));else throw new Sk.builtin.ValueError("bad color sequence");"number"==typeof t[o]?(t[3]=r(0,a(1,t[o])),t="rgba("+t.join(",")+")"):t="rgb("+t.slice(0,3).join(",")+")"}else if("string"==typeof t&&!t.match(/\\s*url\\s*\\(/i))t=t.replace(/\\s+/g,"");else return"black";return t}function calculateHeading(e,t,r){var n=e._angle||0,a=e._radians||0;return r||(r={}),"number"==typeof t&&(e._isRadians?n=a=t%Turtle.RADIANS:e._fullCircle?(n=t%e._fullCircle,a=n/e._fullCircle*Turtle.RADIANS):n=a=0,0>n&&(n+=e._fullCircle,a+=Turtle.RADIANS)),r.angle=n,r.radians=a,r}function pythonToJavascriptFunction(e,t){return function(){var r=Array.prototype.slice.call(arguments),n=r.map(function(e){return Sk.ffi.remapToPy(e)});return"undefined"!=typeof t&&n.unshift(t),Sk.misceval.applyAsync(void 0,e,void 0,void 0,void 0,n).catch(Sk.uncaughtException)}}function addModuleMethod(e,t,r,n){var a,s=r.replace(/^\\$/,""),l=s.replace(/_\\$[a-z]+\\$$/i,""),o=e.prototype[r].length,d=e.prototype[r].minArgs,_=e.prototype[r].co_varnames||[],c=e.prototype[r].returnType,u=e.prototype[r].isSk;void 0===d&&(d=o),a=function(){var e,t,a,s,_,m=Array.prototype.slice.call(arguments,0),p=n?n():m.shift().instance;if(m.length<d||m.length>o)throw _=d===o?"exactly "+o:"between "+d+" and "+o,new Sk.builtin.TypeError(l+"() takes "+_+" positional argument(s) ("+m.length+" given)");for(e=m.length;0<=--e;)void 0!==m[e]&&(m[e]=m[e]instanceof Sk.builtin.func?pythonToJavascriptFunction(m[e]):m[e]instanceof Sk.builtin.method?pythonToJavascriptFunction(m[e].im_func,m[e].im_self):m[e]&&m[e].$d instanceof Sk.builtin.dict&&m[e].instance?m[e].instance:Sk.ffi.remapToJs(m[e]));var g=m.slice(0);for(m=[],e=g.length;0<=e;--e)null!==g[e]&&(m[e]=g[e]);try{t=p[r].apply(p,m)}catch(t){throw window&&window.console&&(window.console.log("wrapped method failed"),window.console.log(t.stack)),t}return t instanceof InstantPromise&&(t=t.lastResult),t instanceof Promise?(t=t.catch(function(t){throw window&&window.console&&(window.console.log("promise failed"),window.console.log(t.stack)),t}),a=new Sk.misceval.Suspension,a.resume=function(){return void 0===s?Sk.builtin.none.none$:Sk.ffi.remapToPy(s)},a.data={type:"Sk.promise",promise:t.then(function(e){return s=e,e})},a):void 0===t?Sk.builtin.none.none$:u?t:"function"==typeof c?c(t):Sk.ffi.remapToPy(t)},a.co_name=new Sk.builtin.str(l),a.co_varnames=_.slice(),a.$defaults=[];for(var m=d;m<_.length;m++)a.$defaults.push(Sk.builtin.none.none$);n||a.co_varnames.unshift("self"),t[s]=new Sk.builtin.func(a)}function initTurtle(e,t){Sk.builtin.pyCheckArgs("__init__",arguments,2,3,!1,!1),e.instance=new Turtle(t),e.instance.skInstance=e}function focusTurtle(e){return void 0!==e&&(w=!!e,w?getTarget().focus():getTarget().blur()),w}function resetTurtle(){for(cancelAnimationFrame(),getScreen().reset(),getFrameManager().reset();e.firstChild;)e.removeChild(e.firstChild);h&&h.reset(),$=0,p=void 0,f=void 0,h=void 0,k=0}function stopTurtle(){cancelAnimationFrame(),h&&h.reset(),$=0,p=void 0,f=void 0,h=void 0,k=0}var u,m,p,g,f,h,y={__name__:new Sk.builtin.str("turtle")},$=0,w=!0,b=1e3/30,v={},k=0,x={},T={target:"turtle",width:400,height:400,worldWidth:0,worldHeight:0,animate:!0,bufferSize:0,allowUndo:!0,assets:{}};e.hasAttribute("tabindex")||e.setAttribute("tabindex",0),x.FLOAT=function(e){return new Sk.builtin.float_(e)},x.COLOR=function(e){if("string"==typeof e)return new Sk.builtin.str(e);for(var t=0;3>t;t++)e[t]=Sk.builtin.assk$(e[t]);return 4===e.length&&(e[3]=new Sk.builtin.float_(e[3])),new Sk.builtin.tuple(e)},x.TURTLE_LIST=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].skInstance);return new Sk.builtin.tuple(t)},v.arrow=[[-10,0],[10,0],[0,10]],v.square=[[10,-10],[10,10],[-10,10],[-10,-10]],v.triangle=[[10,-5.77],[0,11.55],[-10,-5.77]],v.classic=[[0,0],[-5,-9],[0,-7],[5,-9]],v.turtle=[[0,16],[-2,14],[-1,10],[-4,7],[-7,9],[-9,8],[-6,5],[-7,1],[-5,-3],[-8,-6],[-6,-8],[-4,-5],[0,-7],[4,-5],[6,-8],[8,-6],[5,-3],[7,1],[6,5],[9,8],[7,9],[4,7],[1,10],[2,14]],v.circle=[[10,0],[9.51,3.09],[8.09,5.88],[5.88,8.09],[3.09,9.51],[0,10],[-3.09,9.51],[-5.88,8.09],[-8.09,5.88],[-9.51,3.09],[-10,0],[-9.51,-3.09],[-8.09,-5.88],[-5.88,-8.09],[-3.09,-9.51],[-0,-10],[3.09,-9.51],[5.88,-8.09],[8.09,-5.88],[9.51,-3.09]],g=function(){for(var e in Sk.TurtleGraphics||(Sk.TurtleGraphics={}),T)Sk.TurtleGraphics.hasOwnProperty(e)||(Sk.TurtleGraphics[e]=T[e]);return Sk.TurtleGraphics}(),InstantPromise.prototype.then=function(e){if(this.lastError)return this;try{this.lastResult=e(this.lastResult)}catch(t){this.lastResult=void 0,this.lastError=t}return this.lastResult instanceof Promise?this.lastResult:this},InstantPromise.prototype.catch=function(e){if(this.lastError)try{this.lastResult=e(this.lastError),this.lastError=void 0}catch(t){this.lastResult=void 0,this.lastError=t}return this.lastResult instanceof Promise?this.lastResult:this};var A;(function(e){function animationFrame(e){return g.animate?!e&&t?t:function(t){return m=window.setTimeout(t,e||b),m}:function(e){e()}}var t;(function(e){e&&(t=function(t){return u=e(t)})})(window.requestAnimationFrame||window.mozRequestAnimationFrame),e.willRenderNext=function(){return!!(this._buffer&&this._frameCount+1===this.frameBuffer())},e.turtles=function(){return this._turtles},e.addTurtle=function(e){this._turtles.push(e)},e.reset=function(){if(this._turtles)for(var e=this._turtles.length;0<=--e;)this._turtles[e].reset();this._turtles=[],this._frames=[],this._frameCount=0,this._buffer=1,this._rate=0,this._animationFrame=animationFrame()},e.addFrame=function(e,t){var r=!1;return t&&(this._frameCount+=1),this.frames().push(e),r=!g.animate||this._buffer&&this._frameCount===this.frameBuffer(),r?this.update():new InstantPromise},e.frames=function(){return this._frames},e.frameBuffer=function(e){return"number"==typeof e&&(this._buffer=0|e,e&&e<=this._frameCount)?this.update():this._buffer},e.refreshInterval=function(e){return"number"==typeof e&&(this._rate=0|e,this._animationFrame=animationFrame(e)),this._rate},e.update=function(){return this._frames&&this._frames.length?this.requestAnimationFrame():new InstantPromise},e.requestAnimationFrame=function(){var e,t,r=this._frames,n=this._animationFrame,a=this._turtles,s=getScreen().spriteLayer();return this._frames=[],this._frameCount=0,new Promise(function(l){n(function paint(){for(t=0;t<r.length;t++)r[t]&&r[t]();for(clearLayer(s),t=0;t<a.length;t++)e=a[t],e.getState().shown&&drawTurtle(e.getState(),s);l()})})}})(FrameManager.prototype),function(e){e.onEvent=function(t,r){function computeCoordinates(){if(!_){var t=getScreen(),l=t.spriteLayer().canvas.getBoundingClientRect();e=0|r.clientX-l.left,n=0|r.clientY-l.top,a=e*t.xScale+t.llx,s=n*t.yScale+t.ury,_=!0}}var e,n,a,s,l,o=this._managers[t],d=this._managers.mousemove,_=!1;if(("mousedown"===t||"mouseup"===t)&&d&&d.length)for(computeCoordinates(),l=d.length;0<=--l;)d[l].test(e,n,a,s)&&d[l].canMove("mousedown"===t);if(o&&o.length)for(computeCoordinates(),l=o.length;0<=--l;)"mousemove"===t&&o[l].canMove()&&o[l].test(e,n,a,s)?o[l].trigger([a,s]):"mousedown"===t&&o[l].test(e,n,a,s)&&o[l].trigger([a,s])},e.reset=function(){this._managers={}},e.addManager=function(e,t){this._managers[e]||(this._managers[e]=[]),this._managers[e].push(t)}}(MouseHandler.prototype),function(e){e.reset=function(){this._handlers=void 0},e.canMove=function(e){return!!(this._target&&this._target.hitTest)&&(void 0!==e&&(this._target.hitTest.hit=e),this._target.hitTest.hit)},e.test=function(e,t,r,n){return this._target&&this._target.hitTest?this._target.hitTest(e,t,r,n):!!this._target},e.trigger=function(e){var t,r=this._handlers;if(r&&r.length)for(t=0;t<r.length;t++)r[t].apply({},e)},e.addHandler=function(e,t){var r=this._handlers;if(!t&&r&&r.length)for(;r.shift(););return"function"==typeof e?void(!r&&(r=this._handlers=[]),r.push(e)):void(r&&!r.length&&this.reset())}}(EventManager.prototype),Turtle.RADIANS=2*o,function(e){function circleRotate(e,t,r){return function(){return e.addUpdate(void 0,!1,{angle:t,radians:r})}}function circleSegment(e,t,r,n,a,s){return function(){return e.translate(t,r,n,a,s,!0)}}e.hitTest=function(e,t){var r=getScreen().hitTestLayer();clearLayer(r),drawTurtle(this.getState(),r);var n=r.getImageData(e,t,1,1).data;return n[3]||n[0]||n[1]||n[2]},e.addUpdate=function(e,t,r){var n=this,a=this.getState(),s=Array.prototype.slice.call(arguments,r?2:3);return getFrameManager().addFrame(function(){if(e&&e.apply(a,s),r)for(var t in r)a[t]=r[t]},t)},e.getState=function(){var e=this;return this._state||(this._state={x:this._x,y:this._y,angle:this._angle,radians:this._radians,shape:this._shape,color:this._color,fill:this._fill,filling:this._filling,size:this._size,speed:this._computed_speed,down:this._down,shown:this._shown,colorMode:this._colorMode,context:function(){return e.getPaper()}}),this._state},e.translate=function(e,t,r,n,a,s){var l=this;return translate(this,e,t,r,n,a,s).then(function(e){l._x=e[0],l._y=e[1]})},e.rotate=function(e,t,r){var n=this;return rotate(this,e,t,r).then(function(e){n._angle=e.angle,n._radians=e.radians})},e.queueMoveBy=function(e,t,r,n){var a=c(r)*n,s=_(r)*n;return this.translate(e,t,a,s,!0)},e.queueTurnTo=function(e,t){return t%=this._fullCircle,0>t&&(t+=this._fullCircle),this.rotate(e,t-e)},e.getManager=function(e){return this._managers[e]||(this._managers[e]=new EventManager(e,this)),this._managers[e]},e.getPaper=function(){return this._paper||(this._paper=createLayer(2))},e.reset=function(){for(var e in this._x=0,this._y=0,this._radians=0,this._angle=0,this._shown=!0,this._down=!0,this._color="black",this._fill="black",this._size=1,this._filling=!1,this._undoBuffer=[],this._speed=3,this._computed_speed=5,this._colorMode=1,this._state=void 0,this._managers)this._managers[e].reset();this._isRadians=!1,this._fullCircle=360,this._bufferSize="number"==typeof g.bufferSize?g.bufferSize:0,removeLayer(this._paper),this._paper=void 0},e.$degrees=function(e){return e="number"==typeof e?s(e):360,this._isRadians=!1,this._angle=e&&this._fullCircle?this._angle/this._fullCircle*e:this._radians=0,this._fullCircle=e,this.addUpdate(void 0,!1,{angle:this._angle,radians:this._radians})},e.$degrees.minArgs=0,e.$degrees.co_varnames=["fullcircle"],e.$degrees.returnType=x.FLOAT,e.$radians=function(){return this._isRadians||(this._isRadians=!0,this._angle=this._radians,this._fullCircle=Turtle.RADIANS),this._angle},e.$radians.returnType=x.FLOAT,e.$position=e.$pos=function(){return[this.$xcor(),this.$ycor()]},e.$position.returnType=function(e){return new Sk.builtin.tuple([new Sk.builtin.float_(e[0]),new Sk.builtin.float_(e[1])])},e.$towards=function(e,t){var r=getCoordinates(e,t),n=o+d(this._y-r.y,this._x-r.x),a=n*(this._fullCircle/Turtle.RADIANS);return a},e.$towards.co_varnames=["x","y"],e.$towards.minArgs=1,e.$towards.returnType=x.FLOAT,e.$distance=function(e,t){var r=getCoordinates(e,t),a=r.x-this._x,s=r.y-this._y;return n(a*a+s*s)},e.$distance.co_varnames=["x","y"],e.$distance.minArgs=1,e.$distance.returnType=x.FLOAT,e.$heading=function(){return 1e-13>s(this._angle)?0:this._angle},e.$heading.returnType=x.FLOAT,e.$xcor=function(){return 1e-13>s(this._x)?0:this._x},e.$xcor.returnType=x.FLOAT,e.$ycor=function(){return 1e-13>s(this._y)?0:this._y},e.$ycor.returnType=x.FLOAT,e.$forward=e.$fd=function(e){return pushUndo(this),this.queueMoveBy(this._x,this._y,this._radians,e)},e.$forward.co_varnames=e.$fd.co_varnames=["distance"],e.$undo=function(){popUndo(this)},e.$undobufferentries=function(){return this._undoBuffer.length},e.$setundobuffer=function(e){this._bufferSize="number"==typeof e?a(s(e),1e3):0},e.$setundobuffer.co_varnames=["size"],e.$backward=e.$back=e.$bk=function(e){return pushUndo(this),this.queueMoveBy(this._x,this._y,this._radians,-e)},e.$backward.co_varnames=e.$back.co_varnames=e.$bk.co_varnames=["distance"],e.$goto_$rw$=e.$setpos=e.$setposition=function(e,t){var r=getCoordinates(e,t);return pushUndo(this),this.translate(this._x,this._y,r.x-this._x,r.y-this._y,!0)},e.$goto_$rw$.co_varnames=e.$setpos.co_varnames=e.$setposition.co_varnames=["x","y"],e.$goto_$rw$.minArgs=e.$setpos.minArgs=e.$setposition.minArgs=1,e.$setx=function(e){return this.translate(this._x,this._y,e-this._x,0,!0)},e.$setx.co_varnames=["x"],e.$sety=function(e){return this.translate(this._x,this._y,0,e-this._y,!0)},e.$sety.co_varnames=["y"],e.$home=function(){var e=this,t=this._angle;return pushUndo(this),e.translate(this._x,this._y,-this._x,-this._y,!0).then(function(){return e.queueTurnTo(t,0)}).then(function(){})},e.$right=e.$rt=function(e){return pushUndo(this),this.rotate(this._angle,-e)},e.$right.co_varnames=e.$rt.co_varnames=["angle"],e.$left=e.$lt=function(e){return pushUndo(this),this.rotate(this._angle,e)},e.$left.co_varnames=e.$lt.co_varnames=["angle"],e.$setheading=e.$seth=function(e){return pushUndo(this),this.queueTurnTo(this._angle,e)},e.$setheading.co_varnames=e.$seth.co_varnames=["angle"],e.$circle=function(e,t,r){var n,d,u,m,p,g,f,h,$,b=this,v=this._x,k=this._y,T=this._angle,A={},L=1/getScreen().lineScale,S=!0;for(pushUndo(this),void 0===t&&(t=b._fullCircle),void 0===r&&(d=s(t)/b._fullCircle,r=1+(0|a(11+s(e*L)/6,59)*d)),u=t/r,m=.5*u,p=2*e*_(u*o/b._fullCircle),0>e?(p=-p,u=-u,m=-m,n=T-t):n=T+t,$=getFrameManager().willRenderNext()?Promise.resolve():new InstantPromise,T+=m,g=0;g<r;g++)calculateHeading(b,T+u*g,A),f=c(A.radians)*p,h=_(A.radians)*p,$=$.then(circleRotate(b,A.angle,A.radians)).then(circleSegment(b,v,k,f,h,S)),v+=f,k+=h,S=!1;return $=$.then(function(){return calculateHeading(b,n,A),b._angle=A.angle,b._radians=A.radians,b.addUpdate(void 0,!0,A)}),$},e.$circle.co_varnames=["radius","extent","steps"],e.$circle.minArgs=1,e.$penup=e.$up=e.$pu=function(){return this._down=!1,this.addUpdate(void 0,!1,{down:!1})},e.$pendown=e.$down=e.$pd=function(){return this._down=!0,this.addUpdate(void 0,!1,{down:!0})},e.$isdown=function(){return this._down},e.$speed=function(e){return void 0===e?this._speed:(this._speed=r(0,a(1e3,e)),this._computed_speed=r(0,2*e-1),this.addUpdate(void 0,!1,{speed:this._computed_speed}))},e.$speed.minArgs=0,e.$speed.co_varnames=["speed"],e.$pencolor=function(e,t,r,n){return void 0===e?hexToRGB(this._color):(this._color=createColor(this._colorMode,e,t,r,n),this.addUpdate(void 0,this._shown,{color:this._color}))},e.$pencolor.co_varnames=["r","g","b","a"],e.$pencolor.minArgs=0,e.$pencolor.returnType=x.COLOR,e.$fillcolor=function(e,t,r,n){return void 0===e?hexToRGB(this._fill):(this._fill=createColor(this._colorMode,e,t,r,n),this.addUpdate(void 0,this._shown,{fill:this._fill}))},e.$fillcolor.co_varnames=["r","g","b","a"],e.$fillcolor.minArgs=0,e.$fillcolor.returnType=x.COLOR,e.$color=function(e,t,r,n){return void 0===e?[this.$pencolor(),this.$fillcolor()]:(void 0===t||void 0!==r?(this._color=createColor(this._colorMode,e,t,r,n),this._fill=this._color):(this._color=createColor(this._colorMode,e),this._fill=createColor(this._colorMode,t)),this.addUpdate(void 0,this._shown,{color:this._color,fill:this._fill}))},e.$color.minArgs=0,e.$color.co_varnames=["color","fill","b","a"],e.$color.returnType=function(e){return new Sk.builtin.tuple([x.COLOR(e[0]),x.COLOR(e[1])])},e.$fill=function(e){this;return void 0===e?this._filling:(e=!!e,e===this._filling)?void 0:(this._filling=e,e?(pushUndo(this),this.addUpdate(void 0,!1,{filling:!0,fillBuffer:[{x:this._x,y:this._y}]})):(pushUndo(this),this.addUpdate(function(){this.fillBuffer.push(this),drawFill.call(this)},!0,{filling:!1,fillBuffer:void 0})))},e.$fill.co_varnames=["flag"],e.$fill.minArgs=0,e.$begin_fill=function(){return this.$fill(!0)},e.$end_fill=function(){return this.$fill(!1)},e.$stamp=function(){return pushUndo(this),this.addUpdate(function(){drawTurtle(this,this.context())},!0)},e.$dot=function(e,t,n,l,i){return pushUndo(this),e=Sk.builtin.asnum$(e),e="number"==typeof e?r(1,0|s(e)):r(this._size+4,2*this._size),t=void 0===t?this._color:createColor(this._colorMode,t,n,l,i),this.addUpdate(drawDot,!0,void 0,e,t)},e.$dot.co_varnames=["size","color","g","b","a"],e.$write=function(e,t,r,n){var a,s,l,i,o,d=this;return pushUndo(this),e+="",n&&n.constructor===Array&&(s="string"==typeof n[0]?n[0]:"Arial",l=(n[1]||"12pt")+"",i="string"==typeof n[2]?n[2]:"normal",/^\\d+$/.test(l)&&(l+="pt"),n=[i,l,s].join(" ")),r||(r="left"),a=this.addUpdate(drawText,!0,void 0,e,r,n),t&&("left"===r||"center"===r)&&(o=measureText(e,n),"center"===r&&(o/=2),a=a.then(function(){var e=d.getState();return d.translate(e.x,e.y,o,0,!0)})),a},e.$write.co_varnames=["message","move","align","font"],e.$write.minArgs=1,e.$pensize=e.$width=function(e){return void 0===e?this._size:(this._size=e,this.addUpdate(void 0,this._shown,{size:e}))},e.$pensize.minArgs=e.$width.minArgs=0,e.$pensize.co_varnames=e.$width.co_varnames=["width"],e.$showturtle=e.$st=function(){return this._shown=!0,this.addUpdate(void 0,!0,{shown:!0})},e.$hideturtle=e.$ht=function(){return this._shown=!1,this.addUpdate(void 0,!0,{shown:!1})},e.$isvisible=function(){return this._shown},e.$shape=function(e){return e&&v[e]?(this._shape=e,this.addUpdate(void 0,this._shown,{shape:e})):this._shape},e.$shape.minArgs=0,e.$shape.co_varnames=["name"],e.$colormode=function(e){return void 0===e?this._colorMode:(this._colorMode=255===e?255:1,this.addUpdate(void 0,this._shown,{colorMode:this._colorMode}))},e.$colormode.minArgs=0,e.$colormode.co_varnames=["cmode"],e.$colormode.returnType=function(e){return 255===e?new Sk.builtin.int_(255):new Sk.builtin.float_(1)},e.$window_width=function(){return this._screen.$window_width()},e.$window_height=function(){return this._screen.$window_height()},e.$tracer=function(e,t){return this._screen.$tracer(e,t)},e.$tracer.minArgs=0,e.$tracer.co_varnames=["n","delay"],e.$update=function(){return this._screen.$update()},e.$delay=function(e){return this._screen.$delay(e)},e.$delay.minArgs=0,e.$delay.co_varnames=["delay"],e.$reset=function(){return this.reset(),this.$clear()},e.$mainloop=e.$done=function(){return this._screen.$mainloop()},e.$clear=function(){return this.addUpdate(function(){clearLayer(this.context())},!0)},e.$dot.minArgs=0,e.$onclick=function(e,t,r){this.getManager("mousedown").addHandler(e,r)},e.$onclick.minArgs=1,e.$onclick.co_varnames=["method","btn","add"],e.$onrelease=function(e,t,r){this.getManager("mouseup").addHandler(e,r)},e.$onrelease.minArgs=1,e.$onrelease.co_varnames=["method","btn","add"],e.$ondrag=function(e,t,r){this.getManager("mousemove").addHandler(e,r)},e.$ondrag.minArgs=1,e.$ondrag.co_varnames=["method","btn","add"],e.$getscreen=function(){return Sk.misceval.callsimArray(y.Screen)},e.$getscreen.isSk=!0,e.$clone=function(){var e=Sk.misceval.callsimOrSuspendArray(y.Turtle);return e.instance._x=this._x,e.instance._y=this._y,e.instance._angle=this._angle,e.instance._radians=this._radians,e.instance._shape=this._shape,e.instance._color=this._color,e.instance._fill=this._fill,e.instance._filling=this._filling,e.instance._size=this._size,e.instance._computed_speed=this._computed_speed,e.instance._down=this._down,e.instance._shown=this._shown,e.instance._colorMode=this._colorMode,e.instance._isRadians=this._isRadians,e.instance._fullCircle=this._fullCircle,e.instance._bufferSize=this._bufferSize,e.instance._undoBuffer=this._undoBuffer,e._clonedFrom=this,e},e.$clone.returnType=function(e){return e},e.$getturtle=e.$getpen=function(){return this.skInstance},e.$getturtle.isSk=!0}(Turtle.prototype),function(e){e.spriteLayer=function(){return this._sprites||(this._sprites=createLayer(3))},e.bgLayer=function(){return this._background||(this._background=createLayer(1))},e.hitTestLayer=function(){return this._hitTest||(this._hitTest=createLayer(0,!0))},e.getManager=function(e){return this._managers[e]||(this._managers[e]=new EventManager(e,this)),this._managers[e]},e.reset=function(){for(var e in this._keyListeners=void 0,this._keyLogger)window.clearInterval(this._keyLogger[e]),window.clearTimeout(this._keyLogger[e]),delete this._keyLogger[e];for(e in this._keyDownListener&&(getTarget().removeEventListener("keydown",this._keyDownListener),this._keyDownListener=void 0),this._keyUpListener&&(getTarget().removeEventListener("keyup",this._keyUpListener),this._keyUpListener=void 0),this._timer&&(window.clearTimeout(this._timer),this._timer=void 0),this._managers)this._managers[e].reset();this._mode="standard",removeLayer(this._sprites),this._sprites=void 0,removeLayer(this._background),this._background=void 0},e.setUpWorld=function(e,t,r,n){var l=this;l.llx=e,l.lly=t,l.urx=r,l.ury=n,l.xScale=(r-e)/getWidth(),l.yScale=-1*(n-t)/getHeight(),l.lineScale=a(s(l.xScale),s(l.yScale))},e.$setup=function(e,t,r,n){return isNaN(parseFloat(e))&&(e=getWidth()),isNaN(parseFloat(t))&&(t=getHeight()),1>=e&&(e=getWidth()*e),1>=t&&(t=getHeight()*t),this._width=e,this._height=t,this._xOffset=void 0===r||isNaN(parseInt(r))?0:parseInt(r),this._yOffset=void 0===n||isNaN(parseInt(n))?0:parseInt(n),"world"===this._mode?this._setworldcoordinates(this.llx,this.lly,this.urx,this.ury):this._setworldcoordinates(-e/2,-t/2,e/2,t/2)},e.$setup.minArgs=0,e.$setup.co_varnames=["width","height","startx","starty"],e.$register_shape=e.$addshape=function(e,t){return t?void(v[e]=t):getAsset(e).then(function(t){v[e]=t})},e.$register_shape.minArgs=1,e.$getshapes=function(){return Object.keys(v)},e.$tracer=function(e,t){return void 0!==e||void 0!==t?("number"==typeof t&&(this._delay=t,getFrameManager().refreshInterval(t)),"number"==typeof e?(this._frames=e,getFrameManager().frameBuffer(e)):void 0):this._frames},e.$tracer.co_varnames=["frames","delay"],e.$tracer.minArgs=0,e.$delay=function(e){return void 0===e?void 0===this._delay?b:this._delay:this.$tracer(void 0,e)},e.$delay.co_varnames=["delay"],e._setworldcoordinates=function(e,t,r,n){var a=this,s=getFrameManager().turtles();return this.setUpWorld(e,t,r,n),this._sprites&&applyWorld(this,this._sprites),this._background&&applyWorld(this,this._background),this.$clear()},e.$setworldcoordinates=function(e,t,r,n){return this._mode="world",this._setworldcoordinates(e,t,r,n)},e.$setworldcoordinates.co_varnames=["llx","lly","urx","ury"],e.minArgs=4,e.$clear=e.$clearscreen=function(){return this.reset(),this.$reset()},e.$update=function(){return getFrameManager().update()},e.$reset=e.$resetscreen=function(){var e=this,t=getFrameManager().turtles();return getFrameManager().addFrame(function(){applyWorld(e,e._sprites),applyWorld(e,e._background);for(var r=0;r<t.length;r++)t[r].reset(),applyWorld(e,t[r]._paper)},!0)},e.$window_width=function(){return getWidth()},e.$window_height=function(){return getHeight()},e.$delay.minArgs=0,e.$turtles=function(){return getFrameManager().turtles()},e.$turtles.returnType=x.TURTLE_LIST,e.$bgpic=function(e){var t;return e?(t=this,getAsset(e).then(function(e){clearLayer(t.bgLayer(),void 0,e)})):this._bgpic},e.$bgpic.minArgs=0,e.$bgpic.co_varnames=["name"],e.$bgcolor=function(e,t,r,n){return void 0===e?hexToRGB(this._bgcolor):(this._bgcolor=createColor(this._colorMode,e,t,r,n),void clearLayer(this.bgLayer(),this._bgcolor))},e.$bgcolor.minArgs=0,e.$bgcolor.co_varnames=["color","g","b","a"],e.$bgcolor.returnType=x.COLOR,e.$mainloop=e.$done=function(){},e.$bye=function(){return Sk.TurtleGraphics.reset()},e.$exitonclick=function(){return this._exitOnClick=!0,this.getManager("mousedown").addHandler(function(){resetTurtle()},!1)},e.$onclick=function(e,t,r){this._exitOnClick||this.getManager("mousedown").addHandler(e,r)},e.$onclick.minArgs=1,e.$onclick.co_varnames=["method","btn","add"];var t={8:/^back(space)?$/i,9:/^tab$/i,13:/^(enter|return)$/i,16:/^shift$/i,17:/^(ctrl|control)$/i,18:/^alt$/i,27:/^esc(ape)?$/i,32:/^space$/i,33:/^page[\\s\\-]?up$/i,34:/^page[\\s\\-]?down$/i,35:/^end$/i,36:/^home$/i,37:/^left([\\s\\-]?arrow)?$/i,38:/^up([\\s\\-]?arrow)?$/i,39:/^right([\\s\\-]?arrow)?$/i,40:/^down([\\s\\-]?arrow)?$/i,45:/^insert$/i,46:/^del(ete)?$/i};e._createKeyRepeater=function(e,t){var r=this;r._keyLogger[t]=window.setTimeout(function(){r._keyListeners[e](),r._keyLogger[t]=window.setInterval(function(){r._keyListeners[e]()},50)},333)},e._createKeyDownListener=function(){var r=this;this._keyDownListener||(this._keyDownListener=function(n){var e=String.fromCharCode;if(focusTurtle()){var a,s,l=n.charCode||n.keyCode,i=e(l).toLowerCase();if(!r._keyLogger[l])for(a in r._keyListeners)if(s=1<a.length&&t[l]&&t[l].test(a),a===i||s){r._keyListeners[a](),r._createKeyRepeater(a,l),n.preventDefault();break}}},getTarget().addEventListener("keydown",this._keyDownListener))},e._createKeyUpListener=function(){var t=this;this._keyUpListener||(this._keyUpListener=function(r){var e=t._keyLogger[r.charCode||r.keyCode];void 0!==e&&(r.preventDefault(),window.clearInterval(e),window.clearTimeout(e),delete t._keyLogger[r.charCode||r.keyCode])},getTarget().addEventListener("keyup",this._keyUpListener))},e.$title=function(e){document.title=e},e.$title.minArgs=1,e.$title.co_varnames=["title"],e.$listen=function(){this._createKeyUpListener(),this._createKeyDownListener()},e.$onkey=function(e,t){if("function"==typeof t){var r=e;e=t,t=r}t=(t+"").toLowerCase(),e&&"function"==typeof e?(!this._keyListeners&&(this._keyListeners={}),this._keyListeners[t]=e):delete this._keyListeners[t]},e.$onkey.minArgs=2,e.$onkey.co_varnames=["method","keyValue"],e.$onscreenclick=function(e,t,r){this.getManager("mousedown").addHandler(e,r)},e.$onscreenclick.minArgs=1,e.$onscreenclick.co_varnames=["method","btn","add"],e.$ontimer=function(e,t){this._timer&&(window.clearTimeout(this._timer),this._timer=void 0),e&&"number"==typeof t&&(this._timer=window.setTimeout(e,r(0,0|t)))},e.$ontimer.minArgs=0,e.$ontimer.co_varnames=["method","interval"]}(Screen.prototype);var L=new Image,S=document.createElement("canvas").getContext("2d");for(var C in initTurtle.co_varnames=["self","shape"],initTurtle.co_name=new Sk.builtin.str("Turtle"),initTurtle.co_argcount=2,initTurtle.$defaults=[Sk.builtin.none.none$,new Sk.builtin.str("classic")],Turtle.prototype)/^\\$[a-z_]+/.test(C)&&addModuleMethod(Turtle,y,C,ensureAnonymous);return addModuleMethod(Screen,y,"$mainloop",getScreen),addModuleMethod(Screen,y,"$done",getScreen),addModuleMethod(Screen,y,"$bye",getScreen),addModuleMethod(Screen,y,"$tracer",getScreen),addModuleMethod(Screen,y,"$update",getScreen),addModuleMethod(Screen,y,"$delay",getScreen),addModuleMethod(Screen,y,"$window_width",getScreen),addModuleMethod(Screen,y,"$window_height",getScreen),addModuleMethod(Screen,y,"$title",getScreen),y.Turtle=Sk.misceval.buildClass(y,function TurtleWrapper(e,t){for(var r in t.__init__=new Sk.builtin.func(initTurtle),Turtle.prototype)/^\\$[a-z_]+/.test(r)&&addModuleMethod(Turtle,t,r)},"Turtle",[]),y.Screen=Sk.misceval.buildClass(y,function ScreenWrapper(e,t){for(var r in t.__init__=new Sk.builtin.func(function(e){e.instance=getScreen()}),Screen.prototype)/^\\$[a-z_]+/.test(r)&&addModuleMethod(Screen,t,r)},"Screen",[]),{skModule:y,reset:resetTurtle,stop:stopTurtle,focus:focusTurtle,Turtle:Turtle,Screen:Screen}}(e),Sk.TurtleGraphics.module=e.turtleInstance.skModule,Sk.TurtleGraphics.reset=e.turtleInstance.reset,Sk.TurtleGraphics.stop=e.turtleInstance.stop,Sk.TurtleGraphics.focus=e.turtleInstance.focus,Sk.TurtleGraphics.raw={Turtle:e.turtleInstance.Turtle,Screen:e.turtleInstance.Screen},e.turtleInstance.skModule};`,"src/lib/types.py":`"""
This file was modified from CPython.
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
2011, 2012, 2013, 2014, 2015 Python Software Foundation; All Rights Reserved
"""
"""Define names for all type symbols known in the standard interpreter.
Types that are part of optional modules (e.g. array) are not listed.
"""
import sys

# Iterators in Python aren't a matter of type but of protocol.  A large
# and changing number of builtin types implement *some* flavor of
# iterator.  Don't check the type!  Use hasattr to check for both
# "__iter__" and "next" attributes instead.
MappingProxyType = type(type.__dict__)
WrapperDescriptorType = type(object.__init__)
MethodWrapperType = type(object().__str__)
MethodDescriptorType = type(str.join)
ClassMethodDescriptorType = type(dict.__dict__['fromkeys'])

NoneType = type(None)
TypeType = type
ObjectType = object
IntType = int
try:
    LongType = long
except: pass
FloatType = float
BooleanType = bool
try:
    ComplexType = complex
except NameError:
    pass
StringType = str

# StringTypes is already outdated.  Instead of writing "type(x) in
# types.StringTypes", you should use "isinstance(x, basestring)".  But
# we keep around for compatibility with Python 2.2.
try:
    UnicodeType = unicode
    StringTypes = (StringType, UnicodeType)
except NameError:
    StringTypes = (StringType,)

BufferType = buffer

TupleType = tuple
ListType = list
DictType = DictionaryType = dict

def _f(): pass
FunctionType = type(_f)
LambdaType = type(lambda: None)         # Same as FunctionType
#CodeType = type(_f.func_code)

def _g():
    yield 1
GeneratorType = type(_g())

class _C:
    def _m(self): pass
ClassType = type(_C)
UnboundMethodType = type(_C._m)         # Same as MethodType
_x = _C()
InstanceType = type(_x)
MethodType = type(_x._m)
BuiltinFunctionType = type(len)
BuiltinMethodType = type([].append)     # Same as BuiltinFunctionType

ModuleType = type(sys)
FileType = file
try:
    XRangeType = xrange
except NameError:
    pass

# try:
#     raise TypeError
# except TypeError:
#     tb = sys.exc_info()[2]
#     TracebackType = type(tb)
#     FrameType = type(tb.tb_frame)
#     del tb

SliceType = slice
# EllipsisType = type(Ellipsis)

# DictProxyType = type(TypeType.__dict__)
NotImplementedType = type(NotImplemented)

# For Jython, the following two types are identical
# GetSetDescriptorType = type(FunctionType.func_code)
# MemberDescriptorType = type(FunctionType.func_globals)

del sys, _f, _g, _C, _x                           # Not for export
__all__ = list(n for n in globals() if n[:1] != '_')
`,"src/lib/unittest/__init__.py":`__author__ = 'bmiller'
'''
This is the start of something that behaves like
the unittest module from cpython.

'''
import re

class _AssertRaisesContext(object):
    """A context manager used to implement TestCase.assertRaises* methods."""
    def __init__(self, expected, test_case):
        self.test_case = test_case
        self.expected = expected
        self.exception = None

    def _is_subtype(self, expected, basetype):
        if isinstance(expected, tuple):
            return all(self._is_subtype(e, basetype) for e in expected)
        return isinstance(expected, type) and issubclass(expected, basetype)

    def handle(self, args, kwargs):
        """
        If args is empty, assertRaises is being used as a
        context manager, so return self.
        If args is not empty, call a callable passing positional and keyword
        arguments.
        """
        try:
            if not self._is_subtype(self.expected, BaseException):
                raise TypeError('assertRaises() arg 1 must be an exception type or tuple of exception types')
            if not args:
                return self

            callable_obj = args[0]
            args = args[1:]
            with self:
                callable_obj(*args, **kwargs) 

        finally:
            # bpo-23890: manually break a reference cycle
            self = None

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, tb):
        res = True
        feedback = ""
        self.exception = exc_value
        try:
            act_exc = exc_type.__name__
        except AttributeError:
            act_exc = str(exc_type)
        try:
            exp_exc = self.expected.__name__
        except AttributeError:
            exp_exc = str(self.expected)

        if exc_type is None:
            res = False
            feedback = "{} not raised".format(exp_exc)
        elif not issubclass(exc_type, self.expected):
            res = False
            feedback = "Expected {} but got {}".format(exp_exc, act_exc)

        self.test_case.appendResult(res, act_exc, exp_exc, feedback)
        return True


class TestCase(object):
    def __init__(self):
        self.numPassed = 0
        self.numFailed = 0
        self.assertPassed = 0
        self.assertFailed = 0
        self.verbosity = 1
        self.tlist = []
        testNames = {}
        for name in dir(self):
            if name[:4] == 'test' and name not in testNames:
                self.tlist.append(getattr(self,name))
                testNames[name]=True

    def setUp(self):
        pass

    def tearDown(self):
        pass
    
    def cleanName(self,funcName):
        return funcName.__func__.__name__

    def main(self):

        for func in self.tlist:
            if self.verbosity > 1:
                print('Running %s' % self.cleanName(func))
            try:
                self.setUp()
                self.assertPassed = 0
                self.assertFailed = 0
                func()
                self.tearDown()
                if self.assertFailed == 0:
                    self.numPassed += 1
                else:
                    self.numFailed += 1
                    print('Tests failed in %s ' % self.cleanName(func))
            except Exception as e:
                self.assertFailed += 1
                self.numFailed += 1
                print('Test threw exception in %s (%s)' % (self.cleanName(func), e))
        self.showSummary()

    def assertEqual(self, actual, expected, feedback=""):
        res = actual==expected
        if not res and feedback == "":
            feedback = "Expected %s to equal %s" % (str(actual),str(expected))
        self.appendResult(res, actual ,expected, feedback)

    def assertNotEqual(self, actual, expected, feedback=""):
        res = actual != expected
        if not res and feedback == "":
            feedback = "Expected %s to not equal %s" % (str(actual),str(expected))
        self.appendResult(res, actual, expected, feedback)

    def assertTrue(self,x, feedback=""):
        res = bool(x) is True
        if not res and feedback == "":
            feedback = "Expected %s to be True" % (str(x))
        self.appendResult(res, x, True, feedback)

    def assertFalse(self,x, feedback=""):
        res = not bool(x)
        if not res and feedback == "":
            feedback = "Expected %s to be False" % (str(x))
        self.appendResult(res, x, False, feedback)

    def assertIs(self,a,b, feedback=""):
        res = a is b
        if not res and feedback == "":
            feedback = "Expected %s to be the same object as %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsNot(self,a,b, feedback=""):
        res = a is not b
        if not res and feedback == "":
            feedback = "Expected %s to not be the same object as %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsNone(self,x, feedback=""):
        res = x is None
        if not res and feedback == "":
            feedback = "Expected %s to be None" % (str(x))
        self.appendResult(res, x, None, feedback)

    def assertIsNotNone(self,x, feedback=""):
        res = x is not None
        if not res and feedback == "":
            feedback = "Expected %s to not be None" % (str(x))
        self.appendResult(res, x, None, feedback)

    def assertIn(self, a, b, feedback=""):
        res = a in b
        if not res and feedback == "":
            feedback = "Expected %s to be in %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotIn(self, a, b, feedback=""):
        res = a not in b
        if not res and feedback == "":
            feedback = "Expected %s to not be in %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsInstance(self,a,b, feedback=""):
        res = isinstance(a,b)
        if not res and feedback == "":
            feedback = "Expected %s to be an instance of %s" % (str(a), str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotIsInstance(self,a,b, feedback=""):
        res = not isinstance(a,b)
        if not res and feedback == "":
            feedback = "Expected %s to not be an instance of %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertRegex(self, text, expected_regex, feedback=""):
        """Fail the test unless the text matches the regular expression."""
        if isinstance(expected_regex, (str, )): #bytes
            assert expected_regex, "expected_regex must not be empty."
            expected_regex = re.compile(expected_regex)
        if not expected_regex.search(text):
            res = False
            feedback = "Regex didn't match: %r not found in %r" % (
                repr(expected_regex), text)
        else:
            res = True
        self.appendResult(res, text, expected_regex, feedback)

    def assertNotRegex(self, text, unexpected_regex, feedback=""):
        """Fail the test if the text matches the regular expression."""
        if isinstance(unexpected_regex, (str, )): # bytes
            unexpected_regex = re.compile(unexpected_regex)
        match = unexpected_regex.search(text)
        if match:
            feedback = 'Regex matched: %r matches %r in %r' % (
                text[match.start() : match.end()],
                repr(unexpected_regex),
                text)
            # _formatMessage ensures the longMessage option is respected
        self.appendResult(not bool(match), text, unexpected_regex, feedback)

    def assertAlmostEqual(self, a, b, places=7, feedback="", delta=None):

        if delta is not None:
            res = abs(a-b) <= delta
        else:
            if places is None:
                places = 7
            res = round(a-b, places) == 0
        
        if not res and feedback == "":
            feedback = "Expected %s to equal %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotAlmostEqual(self, a, b, places=7, feedback="", delta=None):

        if delta is not None:
            res = not (a == b) and abs(a - b) > delta
        else:
            if places is None:
                places = 7

            res = round(a-b, places) != 0

        if not res and feedback == "":
            feedback = "Expected %s to not equal %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertGreater(self,a,b, feedback=""):
        res = a > b
        if not res and feedback == "":
            feedback = "Expected %s to be greater than %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertGreaterEqual(self,a,b, feedback=""):
        res = a >= b
        if not res and feedback == "":
            feedback = "Expected %s to be >= %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertLess(self, a, b, feedback=""):
        res = a < b
        if not res and feedback == "":
            feedback = "Expected %s to be less than %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertLessEqual(self,a,b, feedback=""):
        res = a <= b
        if not res and feedback == "":
            feedback = "Expected %s to be <= %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def appendResult(self,res,actual,expected,feedback):
        if res:
            msg = 'Pass'
            self.assertPassed += 1
        else:
            msg = 'Fail: ' +  feedback
            print(msg)
            self.assertFailed += 1

    def assertRaises(self, expected_exception, *args, **kwargs):
        context = _AssertRaisesContext(expected_exception, self)
        try:
            return context.handle(args, kwargs)
        finally:
            # bpo-23890: manually break a reference cycle
            context = None

    def fail(self, msg=None):
        if msg is None:
            msg = 'Fail'
        else:
            msg = 'Fail: ' + msg
        print(msg)
        self.assertFailed += 1

    def showSummary(self):
        pct = self.numPassed / (self.numPassed+self.numFailed) * 100
        print("Ran %d tests, passed: %d failed: %d\\n" % (self.numPassed+self.numFailed,
                                               self.numPassed, self.numFailed))



def main(verbosity=1):
    glob = globals() # globals() still needs work
    for name in glob:
        if type(glob[name]) == type and issubclass(glob[name], TestCase):
            try:
                tc = glob[name]()
                tc.verbosity = verbosity
                tc.main()
            except:
                print("Uncaught Error in: ", name)
`,"src/lib/unittest/gui.py":`import document
from unittest import TestCase

class TestCaseGui(TestCase):
     def __init__(self):
          TestCase.__init__(self)
          self.divid = document.currentDiv()
          self.mydiv = document.getElementById(self.divid)
          res = document.getElementById(self.divid+'_unit_results')
          if res:
              self.resdiv = res
              res.innerHTML = ''
          else:
              self.resdiv = document.createElement('div')
              self.resdiv.setAttribute('id',self.divid+'_unit_results')
              self.resdiv.setAttribute('class','unittest-results')
              self.mydiv.appendChild(self.resdiv)


     def main(self):
         t = document.createElement('table')
         self.resTable = t
         self.resdiv.appendChild(self.resTable)

         headers = ['Result','Actual Value','Expected Value','Notes']
         row = document.createElement('tr')
         for item in headers:
             head = document.createElement('th')
             head.setAttribute('class','ac-feedback')
             head.innerHTML = item
             head.setCSS('text-align','center')
             row.appendChild(head)
         self.resTable.appendChild(row)

         for func in self.tlist:
             try:
                 self.setUp()
                 func()
                 self.tearDown()
             except Exception as e:
                 self.appendResult('Error', None, None, e)
                 self.numFailed += 1
                 self.showSummary()

     def appendResult(self,res,actual,expected,param):
         trimActual = False
         if len(str(actual)) > 15:
             trimActual = True
             actualType = type(actual)
         trimExpected = False
         if len(str(expected)) > 15:
             trimExpected = True
             expectedType = type(expected)
         row = document.createElement('tr')
         err = False
         if res == 'Error':
             err = True
             msg = 'Error: %s' % param
             errorData = document.createElement('td')
             errorData.setAttribute('class','ac-feedback')
             errorData.innerHTML = 'ERROR'
             errorData.setCSS('background-color','#de8e96')
             errorData.setCSS('text-align','center')
             row.appendChild(errorData)
         elif res:
             passed = document.createElement('td')
             passed.setAttribute('class','ac-feedback')
             passed.innerHTML = 'Pass'
             passed.setCSS('background-color','#83d382')
             passed.setCSS('text-align','center')
             row.appendChild(passed)
             self.numPassed += 1
         else:
             fail = document.createElement('td')
             fail.setAttribute('class','ac-feedback')
             fail.innerHTML = 'Fail'
             fail.setCSS('background-color','#de8e96')
             fail.setCSS('text-align','center')
             row.appendChild(fail)
             self.numFailed += 1


         act = document.createElement('td')
         act.setAttribute('class','ac-feedback')
         if trimActual:
             actHTML = str(actual)[:5] + "..." + str(actual)[-5:]
             if actualType == str:
                 actHTML = repr(actHTML)
             act.innerHTML = actHTML
         else:
             act.innerHTML = repr(actual)
         act.setCSS('text-align','center')
         row.appendChild(act)

         expect = document.createElement('td')
         expect.setAttribute('class','ac-feedback')

         if trimExpected:
             expectedHTML = str(expected)[:5] + "..." + str(expected)[-5:]
             if expectedType == str:
                 expectedHTML = repr(expectedHTML)
             expect.innerHTML = expectedHTML
         else:
             expect.innerHTML = repr(expected)
         expect.setCSS('text-align','center')
         row.appendChild(expect)
         inp = document.createElement('td')
         inp.setAttribute('class','ac-feedback')

         if err:
             inp.innerHTML = msg
         else:
             inp.innerHTML = param
         inp.setCSS('text-align','center')
         row.appendChild(inp)
         self.resTable.appendChild(row)


     def showSummary(self):
         pct = self.numPassed / (self.numPassed+self.numFailed) * 100
         pTag = document.createElement('p')
         pTag.innerHTML = "You passed: " + str(pct) + "% of the tests"
         self.resdiv.appendChild(pTag)
`,"src/lib/urllib/__init__.js":"var $builtinmodule=function(){return{}};","src/lib/urllib/request/__init__.js":'var $builtinmodule=function(){var a={};return a.Response=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.data$=b.responseText,a.lineList=a.data$.split("\\n"),a.lineList=a.lineList.slice(0,-1);for(var c=0;c<a.lineList.length;c++)a.lineList[c]+="\\n";a.currentLine=0,a.pos$=0}),b.__str__=new Sk.builtin.func(function(){return Sk.ffi.remapToPy("<Response>")}),b.__iter__=new Sk.builtin.func(function(a){var b=a.lineList;return Sk.builtin.makeGenerator(function(){return this.$index>=this.$lines.length?void 0:new Sk.builtin.str(this.$lines[this.$index++])},{$obj:a,$index:0,$lines:b})}),b.read=new Sk.builtin.func(function(a,b){if(a.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");var c=a.data$.length;void 0===b&&(b=c);var d=new Sk.builtin.str(a.data$.substr(a.pos$,b));return a.pos$+=b,a.pos$>=c&&(a.pos$=c),d}),b.readline=new Sk.builtin.func(function(a){var b="";return a.currentLine<a.lineList.length&&(b=a.lineList[a.currentLine],a.currentLine++),new Sk.builtin.str(b)}),b.readlines=new Sk.builtin.func(function(a){for(var b=[],c=a.currentLine;c<a.lineList.length;c++)b.push(new Sk.builtin.str(a.lineList[c]));return new Sk.builtin.list(b)})},"Response",[]),a.urlopen=new Sk.builtin.func(function(b,c){var d=new Promise(function(d){var e=new XMLHttpRequest;e.addEventListener("loadend",function(){d(Sk.misceval.callsimArray(a.Response,[e]))}),c?(e.open("POST",b.v),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.setRequestHeader("Content-length",c.v.length),e.send(c.v)):(e.open("GET",b.v),e.send(null))}),e=new Sk.misceval.Suspension;return e.resume=function(){return resolution},e.data={type:"Sk.promise",promise:d.then(function(a){return resolution=a,a},function(a){return resolution="",a})},e}),a};',"src/lib/urllib2.py":`raise NotImplementedError("urllib2 is not yet implemented in Skulpt")
`,"src/lib/urlparse.py":`raise NotImplementedError("urlparse is not yet implemented in Skulpt")
`,"src/lib/user.py":`raise NotImplementedError("user is not yet implemented in Skulpt")
`,"src/lib/uu.py":`raise NotImplementedError("uu is not yet implemented in Skulpt")
`,"src/lib/uuid.py":`raise NotImplementedError("uuid is not yet implemented in Skulpt")
`,"src/lib/warnings.py":`raise NotImplementedError("warnings is not yet implemented in Skulpt")
`,"src/lib/wave.py":`raise NotImplementedError("wave is not yet implemented in Skulpt")
`,"src/lib/weakref.py":`raise NotImplementedError("weakref is not yet implemented in Skulpt")
`,"src/lib/webbrowser.js":'var $builtinmodule=function(){function open_tab(a){return(Sk.builtin.pyCheckType("url","string",Sk.builtin.checkString(a)),!b)?Sk.builtin.bool.false$:(a=a.$jsstr(),window.open(a,"_blank"),Sk.builtin.bool.true$)}var a={},b="undefined"!=typeof window&&"undefined"!=typeof window.navigator;return a.__name__=new Sk.builtin.str("webbrowser"),a.open=new Sk.builtin.func(function open(a){return Sk.builtin.pyCheckArgsLen("open",arguments.length+1,1,3),open_tab(a)}),a.open_new=new Sk.builtin.func(function open_new(a){return Sk.builtin.pyCheckArgsLen("open_new",arguments.length,1,1),open_tab(a)}),a.open_new_tab=new Sk.builtin.func(function open_new_tab(a){return Sk.builtin.pyCheckArgsLen("open_new_tab",arguments.length,1,1),open_tab(a)}),a.DefaultBrowser=Sk.misceval.buildClass(a,function dflbrowser(a,b){b.__init__=new Sk.builtin.func(function __init__(){return Sk.builtin.none.none$}),b.open=new Sk.builtin.func(function open(a,b){return Sk.builtin.pyCheckArgsLen("open",arguments.length,2,4),open_tab(b)}),b.open_new=new Sk.builtin.func(function open_new(a,b){return Sk.builtin.pyCheckArgsLen("open_new",arguments.length,2,2),open_tab(b)}),b.open_new_tab=new Sk.builtin.func(function open_new_tab(a,b){return Sk.builtin.pyCheckArgsLen("open_new_tab",arguments.length,2,2),open_tab(b)})},"DefaultBrowser",[]),a.get=new Sk.builtin.func(function get(){return Sk.builtin.pyCheckArgsLen("get",arguments.length,0,1),Sk.misceval.callsimArray(a.DefaultBrowser,[])}),a};',"src/lib/webbrowser.py":`raise NotImplementedError("webbrowser is not yet implemented in Skulpt")
`,"src/lib/webgl/__init__.js":`var $builtinmodule=function(){var a={__name__:new Sk.builtin.str("webgl")},c=function(a){return"<table style=\\"background-color: #8CE; width: 100%; height: 100%;\\"><tr><td align=\\"center\\"><div style=\\"display: table-cell; vertical-align: middle;\\"><div style=\\"\\">"+a+"</div></div></td></tr></table>"},d="This page requires a browser that supports WebGL.<br/><a href=\\"http://get.webgl.org\\">Click here to upgrade your browser.</a>",e=function(a){for(var b=["webgl","experimental-webgl","webkit-3d","moz-webgl"],c=null,d=0;d<b.length;++d){try{c=a.getContext(b[d])}catch(a){}if(c)break}if(c){function returnFalse(){return!1}a.onselectstart=returnFalse,a.onmousedown=returnFalse}return c},f=function(a,f){var g=document.getElementById(a);if(f||(f=g.getElementsByTagName("canvas")[0]),!f)return void(g.innerHTML=c(d));var h=e(f);if(!h){var i=navigator.userAgent.match(/(\\w+\\/.*? )/g),j={};try{for(var k=0;k<i.length;++k){for(var l=i[k].match(/(\\w+)/g),m=[],n=1;n<l.length;++n)m.push(parseInt(l[n]));j[l[0]]=m}}catch(a){}g.innerHTML=j.Chrome&&(7<j.Chrome[0]||7==j.Chrome[0]&&0<j.Chrome[1]||7==j.Chrome[0]&&0==j.Chrome[1]&&521<=j.Chrome[2])?c("It doesn't appear your computer can support WebGL.<br/><a href=\\"http://get.webgl.org\\">Click here for more information.</a>"):c(d)}return h};return a.Context=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){var c=document.getElementById(b.v),d=f(b.v,c);if(!d)throw new Error("Your browser does not appear to support WebGL.");for(var e in a.gl=d,d.__proto__)if("number"==typeof d.__proto__[e])Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str(e),d.__proto__[e]);else if("function"==typeof d.__proto__[e])switch(e){case"bufferData":break;case"clearColor":break;case"drawArrays":break;case"getAttribLocation":break;case"getUniformLocation":break;case"shaderSource":break;case"uniformMatrix4fv":break;case"vertexAttribPointer":break;case"viewport":break;default:(function(b){Sk.abstr.objectSetItem(a.$d,new Sk.builtin.str(e),new Sk.builtin.func(function(){var a=d.__proto__[b];return a.apply(d,arguments)}))})(e);}d.clearColor(100/255,149/255,237/255,1),d.clear(d.COLOR_BUFFER_BIT)}),b.tp$getattr=Sk.generic.getAttr,b.bufferData=new Sk.builtin.func(function(a,b,c,d){a.gl.bufferData(b,c.v,d)}),b.clearColor=new Sk.builtin.func(function(a,b,c,d,e){a.gl.clearColor(Sk.builtin.asnum$(b),Sk.builtin.asnum$(c),Sk.builtin.asnum$(d),Sk.builtin.asnum$(e))}),b.getAttribLocation=new Sk.builtin.func(function(a,b,c){return a.gl.getAttribLocation(b,c.v)}),b.getUniformLocation=new Sk.builtin.func(function(a,b,c){return a.gl.getUniformLocation(b,c.v)}),b.shaderSource=new Sk.builtin.func(function(a,b,c){a.gl.shaderSource(b,c.v)}),b.drawArrays=new Sk.builtin.func(function(a,b,c,d){a.gl.drawArrays(Sk.builtin.asnum$(b),Sk.builtin.asnum$(c),Sk.builtin.asnum$(d))}),b.vertexAttribPointer=new Sk.builtin.func(function(a,b,c,d,e,f,g){a.gl.vertexAttribPointer(b,Sk.builtin.asnum$(c),Sk.builtin.asnum$(d),e,Sk.builtin.asnum$(f),Sk.builtin.asnum$(g))}),b.viewport=new Sk.builtin.func(function(a,b,c,d,e){a.gl.viewport(Sk.builtin.asnum$(b),Sk.builtin.asnum$(c),Sk.builtin.asnum$(d),Sk.builtin.asnum$(e))}),b.uniformMatrix4fv=new Sk.builtin.func(function(a,b,c,d){a.gl.uniformMatrix4fv(Sk.builtin.asnum$(b),c,d.v)}),b.setDrawFunc=new Sk.builtin.func(function(a,b){var c=new Date().getTime(),d=setInterval(function(){Sk.misceval.callsimArray(b,[a,new Date().getTime()-c])},1e3/60)})},"Context",[]),a.Float32Array=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v="number"==typeof b?new Float32Array(b):new Float32Array(Sk.ffi.remapToJs(b))}),b.__repr__=new Sk.builtin.func(function(a){for(var b=[],c=0;c<a.v.length;++c)b.push(a.v[c]);return new Sk.builtin.str("["+b.join(", ")+"]")})},"Float32Array",[]),a.Matrix4x4=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a,b){a.v=new Float32Array(Sk.ffi.remapToJs(b))}),b.identity=new Sk.builtin.func(function(a){var b=a.v;b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=1,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1}),b.perspective=new Sk.builtin.func(function(b,c,d,e,g){var h=Math.tan,i=Math.PI,j=h(.5*i-.5*(Sk.builtin.asnum$(c)*i/180)),l=Sk.builtin.asnum$(d),a=Sk.builtin.asnum$(e),n=Sk.builtin.asnum$(g),f=1/(a-n),k=b.v;k[0]=j/l,k[1]=0,k[2]=0,k[3]=0,k[4]=0,k[5]=j,k[6]=0,k[7]=0,k[8]=0,k[9]=0,k[10]=(a+n)*f,k[11]=-1,k[12]=0,k[13]=0,k[14]=2*(a*n*f),k[15]=0}),b.translate=new Sk.builtin.func(function(a,b){var c=a.v,d=Sk.ffi.remapToJs(b);c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=d[0],c[13]=d[1],c[14]=d[2],c[15]=1}),b.__repr__=new Sk.builtin.func(function(a){for(var b=[],c=0;c<a.v.length;++c)b.push(a.v[c]);return new Sk.builtin.str("["+b.join(", ")+"]")})},"Matrix4x4",[]),a};`,"src/lib/webgl/math.js":'var $builtinmodule=function(){var a={};return a.Mat44=Sk.misceval.buildClass(a,function(b,c){var d=Math.sqrt;c.__init__=new Sk.builtin.func(function(a){Sk.misceval.callsimArray(c.loadIdentity,[a]),a.stack=[]}),c.push=new Sk.builtin.func(function(a){a.stack.push(a.elements.slice(0))}),c.pop=new Sk.builtin.func(function(a){a.elements=a.stack.pop()}),c.loadIdentity=new Sk.builtin.func(function(a){a.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}),c.transform3=new Sk.builtin.func(function(b,c){var d=b.elements;return Sk.misceval.callsimArray(a.Vec3,[d[0]*c.x+d[4]*c.y+d[8]*c.z,d[1]*c.x+d[5]*c.y+d[9]*c.z,d[2]*c.x+d[6]*c.y+d[10]*c.z])}),c.scale=new Sk.builtin.func(function(a,b,c,d){return a.elements[0]*=b,a.elements[1]*=b,a.elements[2]*=b,a.elements[3]*=b,a.elements[4]*=c,a.elements[5]*=c,a.elements[6]*=c,a.elements[7]*=c,a.elements[8]*=d,a.elements[9]*=d,a.elements[10]*=d,a.elements[11]*=d,a}),c.translate=new Sk.builtin.func(function(a,b,c,d){return a.elements[12]+=a.elements[0]*b+a.elements[4]*c+a.elements[8]*d,a.elements[13]+=a.elements[1]*b+a.elements[5]*c+a.elements[9]*d,a.elements[14]+=a.elements[2]*b+a.elements[6]*c+a.elements[10]*d,a.elements[15]+=a.elements[3]*b+a.elements[7]*c+a.elements[11]*d,a}),c.rotate=new Sk.builtin.func(function(b,c,e,f,g){var h=Math.cos,i=Math.sin,j=Math.PI,k=d(e*e+f*f+g*g),l=i(c*j/180),m=h(c*j/180);if(0<k){var n,o,p,q,r,s,t,u,v,w,A;e/=k,f/=k,g/=k,n=e*e,o=f*f,p=g*g,q=e*f,r=f*g,s=g*e,t=e*l,u=f*l,v=g*l,w=1-m,A=Sk.misceval.callsimArray(a.Mat44),A.elements[0]=w*n+m,A.elements[1]=w*q-v,A.elements[2]=w*s+u,A.elements[3]=0,A.elements[4]=w*q+v,A.elements[5]=w*o+m,A.elements[6]=w*r-t,A.elements[7]=0,A.elements[8]=w*s-u,A.elements[9]=w*r+t,A.elements[10]=w*p+m,A.elements[11]=0,A.elements[12]=0,A.elements[13]=0,A.elements[14]=0,A.elements[15]=1,A=A.multiply(b),b.elements=A.elements}return b}),c.multiply=new Sk.builtin.func(function(b,c){for(var d=Sk.misceval.callsimArray(a.Mat44),e=0;4>e;e++)d.elements[4*e+0]=b.elements[4*e+0]*c.elements[0]+b.elements[4*e+1]*c.elements[4]+b.elements[4*e+2]*c.elements[8]+b.elements[4*e+3]*c.elements[12],d.elements[4*e+1]=b.elements[4*e+0]*c.elements[1]+b.elements[4*e+1]*c.elements[5]+b.elements[4*e+2]*c.elements[9]+b.elements[4*e+3]*c.elements[13],d.elements[4*e+2]=b.elements[4*e+0]*c.elements[2]+b.elements[4*e+1]*c.elements[6]+b.elements[4*e+2]*c.elements[10]+b.elements[4*e+3]*c.elements[14],d.elements[4*e+3]=b.elements[4*e+0]*c.elements[3]+b.elements[4*e+1]*c.elements[7]+b.elements[4*e+2]*c.elements[11]+b.elements[4*e+3]*c.elements[15];return b.elements=d.elements,b}),c.lookAt=new Sk.builtin.func(function(b,c,e,f,g,h,i,j,k,l){var m=[c-g,e-h,f-i],n=d(m[0]*m[0]+m[1]*m[1]+m[2]*m[2]);n&&(m[0]/=n,m[1]/=n,m[2]/=n);var o=[j,k,l],p=[];p[0]=o[1]*m[2]-o[2]*m[1],p[1]=-o[0]*m[2]+o[2]*m[0],p[2]=o[0]*m[1]-o[1]*m[0],o[0]=m[1]*p[2]-m[2]*p[1],o[1]=-m[0]*p[2]+m[2]*p[0],o[2]=m[0]*p[1]-m[1]*p[0],n=d(p[0]*p[0]+p[1]*p[1]+p[2]*p[2]),n&&(p[0]/=n,p[1]/=n,p[2]/=n),n=d(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]),n&&(o[0]/=n,o[1]/=n,o[2]/=n);var q=Sk.misceval.callsimArray(a.Mat44);return q.elements[0]=p[0],q.elements[4]=p[1],q.elements[8]=p[2],q.elements[12]=0,q.elements[1]=o[0],q.elements[5]=o[1],q.elements[9]=o[2],q.elements[13]=0,q.elements[2]=m[0],q.elements[6]=m[1],q.elements[10]=m[2],q.elements[14]=0,q.elements[3]=0,q.elements[7]=0,q.elements[11]=0,q.elements[15]=1,q=q.multiply(b),b.elements=q.elements,b.translate(-c,-e,-f),b})},"Mat44",[]),a.Mat33=Sk.misceval.buildClass(a,function(a,b){b.__init__=new Sk.builtin.func(function(a){Sk.misceval.callsimArray(b.loadIdentity,[a])}),b.loadIdentity=new Sk.builtin.func(function(a){a.elements=[1,0,0,0,1,0,0,0,1]})},"Mat33",[]),a.Vec3=Sk.misceval.buildClass(a,function(b,c){c.__init__=new Sk.builtin.func(function(a,b,c,d){a.x=b,a.y=c,a.z=d}),c.__sub__=new Sk.builtin.func(function(b,c){return Sk.misceval.callsimArray(a.Vec3,[b.x-c.x,b.y-c.y,b.z-c.z])})},"Vec3",[]),a.cross=new Sk.builtin.func(function(b,c){return Sk.asserts.assert(b instanceof a.Vec3&&c instanceof a.Vec3),Sk.misceval.callsimArray(a.Vec3,[b.y*c.z-b.z*c.y,b.z*c.x-b.x*c.z,b.x*c.y-b.y*c.x])}),a};',"src/lib/webgl/matrix4.js":"var $builtinmodule=function(){var a=Math.PI,b={},c=new Float32Array(3),d=new Float32Array(3),e=new Float32Array(3),f=new Float32Array(4),g=new Float32Array(4),h=new Float32Array(4),i=new Float32Array(16),j=new Float32Array(16),k=new Float32Array(16),l=function(b,c){for(var a=Math.sqrt,d=0,e=c.length,f=0;f<e;++f)d+=c[f]*c[f];if(d=a(d),1e-5<d)for(var f=0;f<e;++f)b[f]=c[f]/d;else for(var f=0;f<e;++f)b[f]=0;return b},m=function(c,d,a){return c[0]=d[1]*a[2]-d[2]*a[1],c[1]=d[2]*a[0]-d[0]*a[2],c[2]=d[0]*a[1]-d[1]*a[0],c},n=function(c,d,a){for(var b=d.length,e=0;e<b;++e)c[e]=d[e]-a[e];return c},o=function(c,a){return c[0]*a[0]+c[1]*a[1]+c[2]*a[2]};return b.lookAt=new Sk.builtin.func(function(a,b,f,g){var h=c,i=d,j=l(h,n(h,b.v,f.v)),k=l(i,m(i,g.v,j)),p=m(e,j,k),q=a.v;return q[0]=k[0],q[1]=p[0],q[2]=j[0],q[3]=0,q[4]=k[1],q[5]=p[1],q[6]=j[1],q[7]=0,q[8]=k[2],q[9]=p[2],q[10]=j[2],q[11]=0,q[12]=-o(k,b.v),q[13]=-o(p,b.v),q[14]=-o(j,b.v),q[15]=1,a}),b.perspective=new Sk.builtin.func(function(b,c,d,e,g){var h=Math.tan,i=h(.5*a-.5*(c*a/180)),f=1/(e-g),j=b.v;return j[0]=i/d,j[1]=0,j[2]=0,j[3]=0,j[4]=0,j[5]=i,j[6]=0,j[7]=0,j[8]=0,j[9]=0,j[10]=(e+g)*f,j[11]=-1,j[12]=0,j[13]=0,j[14]=2*(e*g*f),j[15]=0,b}),b.rotationY=new Sk.builtin.func(function(b,d){var e=Math.sin,f=Math.cos,g=b.v,h=f(d*a/180),c=e(d*a/180);return g[0]=h,g[1]=0,g[2]=-c,g[3]=0,g[4]=0,g[5]=1,g[6]=0,g[7]=0,g[8]=c,g[9]=0,g[10]=h,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,b}),b.identity=new Sk.builtin.func(function(a){var b=a.v;return b[0]=1,b[1]=0,b[2]=0,b[3]=0,b[4]=0,b[5]=1,b[6]=0,b[7]=0,b[8]=0,b[9]=0,b[10]=1,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,a}),b.mul=new Sk.builtin.func(function(c,d,e){var f=c.v,g=d.v,a=e.v,b=g[0],h=g[1],i=g[2],j=g[3],k=g[4],l=g[5],m=g[6],n=g[7],o=g[8],p=g[9],q=g[10],r=g[11],s=g[12],t=g[13],u=g[14],v=g[15],w=a[0],x=a[1],y=a[2],z=a[3],A=a[4],B=a[5],C=a[6],D=a[7],E=a[8],F=a[9],G=a[10],H=a[11],I=a[12],J=a[13],K=a[14],L=a[15];return f[0]=b*w+h*A+i*E+j*I,f[1]=b*x+h*B+i*F+j*J,f[2]=b*y+h*C+i*G+j*K,f[3]=b*z+h*D+i*H+j*L,f[4]=k*w+l*A+m*E+n*I,f[5]=k*x+l*B+m*F+n*J,f[6]=k*y+l*C+m*G+n*K,f[7]=k*z+l*D+m*H+n*L,f[8]=o*w+p*A+q*E+r*I,f[9]=o*x+p*B+q*F+r*J,f[10]=o*y+p*C+q*G+r*K,f[11]=o*z+p*D+q*H+r*L,f[12]=s*w+t*A+u*E+v*I,f[13]=s*x+t*B+u*F+v*J,f[14]=s*y+t*C+u*G+v*K,f[15]=s*z+t*D+u*H+v*L,c}),b.invert=new Sk.builtin.func(function(a,b){var c=a.v,e=b.v,f=e[0],g=e[1],h=e[2],i=e[3],j=e[4],k=e[5],l=e[6],m=e[7],n=e[8],o=e[9],p=e[10],q=e[11],r=e[12],s=e[13],t=e[14],u=e[15],v=p*u,w=t*q,x=l*u,y=t*m,z=l*q,A=p*m,B=h*u,C=t*i,D=h*q,E=p*i,F=h*m,G=l*i,H=n*s,I=r*o,J=j*s,K=r*k,L=j*o,M=n*k,N=f*s,O=r*g,P=f*o,Q=n*g,R=f*k,S=j*g,T=v*k+y*o+z*s-(w*k+x*o+A*s),U=w*g+B*o+E*s-(v*g+C*o+D*s),V=x*g+C*k+F*s-(y*g+B*k+G*s),W=A*g+D*k+G*o-(z*g+E*k+F*o),X=1/(f*T+j*U+n*V+r*W);return c[0]=X*T,c[1]=X*U,c[2]=X*V,c[3]=X*W,c[4]=X*(w*j+x*n+A*r-(v*j+y*n+z*r)),c[5]=X*(v*f+C*n+D*r-(w*f+B*n+E*r)),c[6]=X*(y*f+B*j+G*r-(x*f+C*j+F*r)),c[7]=X*(z*f+E*j+F*n-(A*f+D*j+G*n)),c[8]=X*(H*m+K*q+L*u-(I*m+J*q+M*u)),c[9]=X*(I*i+N*q+Q*u-(H*i+O*q+P*u)),c[10]=X*(J*i+O*m+R*u-(K*i+N*m+S*u)),c[11]=X*(M*i+P*m+S*q-(L*i+Q*m+R*q)),c[12]=X*(J*p+M*t+I*l-(L*t+H*l+K*p)),c[13]=X*(P*t+H*h+O*p-(N*p+Q*t+I*h)),c[14]=X*(N*l+S*t+K*h-(R*t+J*h+O*l)),c[15]=X*(R*p+L*h+Q*l-(P*l+S*p+M*h)),a}),b.transpose=new Sk.builtin.func(function(a,b){for(var c=a.v,d=b.v,e=0;4>e;++e)for(var f=0;4>f;++f)c[4*e+f]=d[4*f+e];return c}),b};","src/lib/webgl/models.js":'var $builtinmodule=function(a){var c={},d=function(a,c){var d=c||gl.ARRAY_BUFFER,e=gl.createBuffer();if(this.target=d,this.buf=e,this.set(a),this.numComponents_=a.numComponents,this.numElements_=a.numElements,this.totalComponents_=this.numComponents_*this.numElements_,a.buffer instanceof Float32Array)this.type_=gl.FLOAT;else if(a.buffer instanceof Uint8Array)this.type_=gl.UNSIGNED_BYTE;else if(a.buffer instanceof Int8Array)this.type_=gl._BYTE;else if(a.buffer instanceof Uint16Array)this.type_=gl.UNSIGNED_SHORT;else if(a.buffer instanceof Int16Array)this.type_=gl.SHORT;else throw"unhandled type:"+typeof a.buffer};return d.prototype.set=function(a){gl.bindBuffer(this.target,this.buf),gl.bufferData(this.target,a.buffer,gl.STATIC_DRAW)},d.prototype.type=function(){return this.type_},d.prototype.numComponents=function(){return this.numComponents_},d.prototype.numElements=function(){return this.numElements_},d.prototype.totalComponents=function(){return this.totalComponents_},d.prototype.buffer=function(){return this.buf},d.prototype.stride=function(){return 0},d.prototype.offset=function(){return 0},c.Model=Sk.misceval.buildClass(c,function(c,e){e.__init__=new Sk.builtin.func(function(c,e,f,g){c.buffers={};var h=function(a,e){var f="indices"==a?gl.ELEMENT_ARRAY_BUFFER:gl.ARRAY_BUFFER;b=c.buffers[a],b?b.set(e):b=new d(e,f),c.buffers[a]=b};for(a in f)h(a,f[a]);var i={},j=0;for(var k in g)i[k]=j++;c.mode=gl.TRIANGLES,c.textures=g.v,c.textureUnits=i,c.shader=e}),e.drawPrep=new Sk.builtin.func(function(a,c){var d=a.shader,e=a.buffers,f=a.textures;for(var g in c=Sk.ffi.remapToJs(c),Sk.misceval.callsimArray(d.use,[d]),e){var h=e[g];if("indices"==g)gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,h.buffer());else{var i=d.attrib[g];i&&i(h)}}for(var j in f){var k=a.textureUnits[j];d.setUniform$impl(d,textuer,k),f[j].bindToUnit(k)}for(var l in c)d.setUniform$impl(d,l,c[l])}),e.draw=new Sk.builtin.func(function(a,c,d){var e=a.shader;for(uniform in c=Sk.ffi.remapToJs(c),c)e.setUniform$impl(e,uniform,c[uniform]);if(d)for(var f in d){var g=a.textureUnits[f];e.setUniform$impl(e,f,g),d[f].bindToUnit(g)}var h=a.buffers;gl.drawElements(a.mode,h.indices.totalComponents(),gl.UNSIGNED_SHORT,0)})},"Model",[]),c};',"src/lib/webgl/primitives.js":'var $builtinmodule=function(){var a={},b=function(a,b,c){c=c||"Float32Array";var d=window[c];b.length?(this.buffer=new d(b),b=this.buffer.length/a,this.cursor=b):(this.buffer=new d(a*b),this.cursor=0),this.numComponents=a,this.numElements=b,this.type=c};return b.prototype.stride=function(){return 0},b.prototype.offset=function(){return 0},b.prototype.getElement=function(a){for(var b=a*this.numComponents,c=[],d=0;d<this.numComponents;++d)c.push(this.buffer[b+d]);return c},b.prototype.setElement=function(a,b){for(var c=a*this.numComponents,d=0;d<this.numComponents;++d)this.buffer[c+d]=b[d]},b.prototype.clone=function(){var a=new b(this.numComponents,this.numElements,this.type);return a.pushArray(this),a},b.prototype.push=function(a){this.setElement(this.cursor++,a)},b.prototype.pushArray=function(a){for(var b=0;b<a.numElements;++b)this.push(a.getElement(b))},b.prototype.pushArrayWithOffset=function(a,b){for(var c,d=0;d<a.numElements;++d){c=a.getElement(d);for(var e=0;e<b.length;++e)c[e]+=b[e];this.push(c)}},b.prototype.computeExtents=function(){for(var a=Math.max,b=Math.min,c,d=this.numElements,e=this.numComponents,f=this.getElement(0),g=this.getElement(0),h=1;h<d;++h){c=this.getElement(h);for(var i=0;i<e;++i)f[i]=b(f[i],c[i]),g[i]=a(g[i],c[i])}return{min:f,max:g}},a.createCube=new Sk.builtin.func(function(a){for(var c,d=[[3,7,5,1],[0,4,6,2],[6,7,3,2],[0,1,5,4],[5,7,6,4],[2,3,1,0]],e=a/2,g=[[-e,-e,-e],[+e,-e,-e],[-e,+e,-e],[+e,+e,-e],[-e,-e,+e],[+e,-e,+e],[-e,+e,+e],[+e,+e,+e]],h=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],i=[[0,0],[1,0],[1,1],[0,1]],j=24,k=new b(3,j),l=new b(3,j),m=new b(2,j),n=new b(3,12,"Uint16Array"),o=0;6>o;++o){c=d[o];for(var p=0;4>p;++p){var q=g[c[p]],r=h[o],s=i[p];k.push(q),l.push(r),m.push(s)}var t=4*o;n.push([t+0,t+1,t+2]),n.push([t+0,t+2,t+3])}return{position:k,normal:l,texCoord:m,indices:n}}),a};',"src/lib/whichdb.py":`raise NotImplementedError("whichdb is not yet implemented in Skulpt")
`,"src/lib/wsgiref/__init__.py":`raise NotImplementedError("wsgiref is not yet implemented in Skulpt")
`,"src/lib/xdrlib.py":`raise NotImplementedError("xdrlib is not yet implemented in Skulpt")
`,"src/lib/xml/__init__.py":`raise NotImplementedError("xml is not yet implemented in Skulpt")
`,"src/lib/xml/dom/__init__.py":`raise NotImplementedError("dom is not yet implemented in Skulpt")
`,"src/lib/xml/etree/__init__.py":`raise NotImplementedError("etree is not yet implemented in Skulpt")
`,"src/lib/xml/parsers/__init__.py":`raise NotImplementedError("parsers is not yet implemented in Skulpt")
`,"src/lib/xml/sax/__init__.py":`raise NotImplementedError("sax is not yet implemented in Skulpt")
`,"src/lib/xmllib.py":`raise NotImplementedError("xmllib is not yet implemented in Skulpt")
`,"src/lib/xmlrpclib.py":`raise NotImplementedError("xmlrpclib is not yet implemented in Skulpt")
`,"src/lib/zipfile.py":`raise NotImplementedError("zipfile is not yet implemented in Skulpt")
`}};var ue=Sk;const Se=pe("textarea",{id:"editor-code",style:{border:"0","border-radius":"5px","background-color":"rgba(241,241,241,.98)",width:"100%",height:"200px",padding:"10px",resize:"none"}},`\r
import turtle\r
print('hello')\r
t = turtle.Turtle()\r
t.color('red')\r
t.forward(75)\r
        `,-1),ge=pe("div",{id:"mycanvas",width:"600",height:"600"},null,-1),ve={setup(X){function j(n){console.log(n)}function F(n){if(ue.builtinFiles===void 0||ue.builtinFiles.files[n]===void 0)throw"File not found: '"+n+"'";return ue.builtinFiles.files[n]}function e(){const n=document.getElementById("editor-code").value;ue.pre="output",ue.configure({output:j,read:F,__future__:ue.python3}),(ue.TurtleGraphics||(ue.TurtleGraphics={})).target="mycanvas",ue.TurtleGraphics.width=600,ue.TurtleGraphics.height=600;var t=ue.misceval.asyncToPromise(function(){return console.log(ue.TurtleGraphics,"mxc"),ue.importMainWithBody("<stdin>",!1,n,!0)});t.then(function(r){console.log("success")},function(r){console.error("error")})}return(n,t)=>(ke(),_e("div",null,[Se,pe("button",{onClick:t[0]||(t[0]=r=>e())},"\u8FD0\u884C"),ge]))}};export{ve as default};
//# sourceMappingURL=index.183c0bf3.js.map
