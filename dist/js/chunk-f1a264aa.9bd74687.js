(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1a264aa"],{"0cb2":function(a,t,e){var i=e("7b0b"),n=Math.floor,s="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;a.exports=function(a,t,e,c,o,d){var u=e+a.length,k=c.length,f=l;return void 0!==o&&(o=i(o),f=r),s.call(d,f,(function(i,s){var r;switch(s.charAt(0)){case"$":return"$";case"&":return a;case"`":return t.slice(0,e);case"'":return t.slice(u);case"<":r=o[s.slice(1,-1)];break;default:var l=+s;if(0===l)return i;if(l>k){var d=n(l/10);return 0===d?i:d<=k?void 0===c[d-1]?s.charAt(1):c[d-1]+s.charAt(1):i}r=c[l-1]}return void 0===r?"":r}))}},"107c":function(a,t,e){var i=e("d039");a.exports=i((function(){var a=RegExp("(?<a>b)","string".charAt(5));return"b"!==a.exec("b").groups.a||"bc"!=="b".replace(a,"$<a>c")}))},"14c3":function(a,t,e){var i=e("c6b6"),n=e("9263");a.exports=function(a,t){var e=a.exec;if("function"===typeof e){var s=e.call(a,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(a))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(a,t)}},"1da1":function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));e("d3b7");function i(a,t,e,i,n,s,r){try{var l=a[s](r),c=l.value}catch(o){return void e(o)}l.done?t(c):Promise.resolve(c).then(i,n)}function n(a){return function(){var t=this,e=arguments;return new Promise((function(n,s){var r=a.apply(t,e);function l(a){i(r,n,s,l,c,"next",a)}function c(a){i(r,n,s,l,c,"throw",a)}l(void 0)}))}}},3872:function(a,t,e){"use strict";e("9f32")},"3cea":function(a,t,e){"use strict";e("c27b")},5319:function(a,t,e){"use strict";var i=e("d784"),n=e("d039"),s=e("825a"),r=e("a691"),l=e("50c4"),c=e("577e"),o=e("1d80"),d=e("8aa5"),u=e("0cb2"),k=e("14c3"),f=e("b622"),h=f("replace"),g=Math.max,p=Math.min,v=function(a){return void 0===a?a:String(a)},m=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),x=!n((function(){var a=/./;return a.exec=function(){var a=[];return a.groups={a:"7"},a},"7"!=="".replace(a,"$<a>")}));i("replace",(function(a,t,e){var i=b?"$":"$0";return[function(a,e){var i=o(this),n=void 0==a?void 0:a[h];return void 0!==n?n.call(a,i,e):t.call(c(i),a,e)},function(a,n){var o=s(this),f=c(a);if("string"===typeof n&&-1===n.indexOf(i)&&-1===n.indexOf("$<")){var h=e(t,o,f,n);if(h.done)return h.value}var m="function"===typeof n;m||(n=c(n));var b=o.global;if(b){var x=o.unicode;o.lastIndex=0}var _=[];while(1){var C=k(o,f);if(null===C)break;if(_.push(C),!b)break;var I=c(C[0]);""===I&&(o.lastIndex=d(f,l(o.lastIndex),x))}for(var y="",w=0,K=0;K<_.length;K++){C=_[K];for(var L=c(C[0]),E=g(p(r(C.index),f.length),0),S=[],j=1;j<C.length;j++)S.push(v(C[j]));var O=C.groups;if(m){var A=[L].concat(S,E,f);void 0!==O&&A.push(O);var $=c(n.apply(void 0,A))}else $=u(L,f,E,S,O,n);E>=w&&(y+=f.slice(w,E)+$,w=E+L.length)}return y+f.slice(w)}]}),!x||!m||b)},"56d0":function(a,t,e){},"7ecd":function(a,t,e){"use strict";e("92dc")},"8aa5":function(a,t,e){"use strict";var i=e("6547").charAt;a.exports=function(a,t,e){return t+(e?i(a,t).length:1)}},"8b88":function(a,t,e){"use strict";e("a26d")},9263:function(a,t,e){"use strict";var i=e("577e"),n=e("ad6d"),s=e("9f7f"),r=e("5692"),l=e("7c73"),c=e("69f3").get,o=e("fce3"),d=e("107c"),u=RegExp.prototype.exec,k=r("native-string-replace",String.prototype.replace),f=u,h=function(){var a=/a/,t=/b*/g;return u.call(a,"a"),u.call(t,"a"),0!==a.lastIndex||0!==t.lastIndex}(),g=s.UNSUPPORTED_Y||s.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],v=h||p||g||o||d;v&&(f=function(a){var t,e,s,r,o,d,v,m=this,b=c(m),x=i(a),_=b.raw;if(_)return _.lastIndex=m.lastIndex,t=f.call(_,x),m.lastIndex=_.lastIndex,t;var C=b.groups,I=g&&m.sticky,y=n.call(m),w=m.source,K=0,L=x;if(I&&(y=y.replace("y",""),-1===y.indexOf("g")&&(y+="g"),L=x.slice(m.lastIndex),m.lastIndex>0&&(!m.multiline||m.multiline&&"\n"!==x.charAt(m.lastIndex-1))&&(w="(?: "+w+")",L=" "+L,K++),e=new RegExp("^(?:"+w+")",y)),p&&(e=new RegExp("^"+w+"$(?!\\s)",y)),h&&(s=m.lastIndex),r=u.call(I?e:m,L),I?r?(r.input=r.input.slice(K),r[0]=r[0].slice(K),r.index=m.lastIndex,m.lastIndex+=r[0].length):m.lastIndex=0:h&&r&&(m.lastIndex=m.global?r.index+r[0].length:s),p&&r&&r.length>1&&k.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r&&C)for(r.groups=d=l(null),o=0;o<C.length;o++)v=C[o],d[v[0]]=r[v[1]];return r}),a.exports=f},"92dc":function(a,t,e){},"96cf":function(a,t,e){var i=function(a){"use strict";var t,e=Object.prototype,i=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(a,t,e){return Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),a[t]}try{c({},"")}catch(A){c=function(a,t,e){return a[t]=e}}function o(a,t,e,i){var n=t&&t.prototype instanceof p?t:p,s=Object.create(n.prototype),r=new S(i||[]);return s._invoke=w(a,e,r),s}function d(a,t,e){try{return{type:"normal",arg:a.call(t,e)}}catch(A){return{type:"throw",arg:A}}}a.wrap=o;var u="suspendedStart",k="suspendedYield",f="executing",h="completed",g={};function p(){}function v(){}function m(){}var b={};c(b,s,(function(){return this}));var x=Object.getPrototypeOf,_=x&&x(x(j([])));_&&_!==e&&i.call(_,s)&&(b=_);var C=m.prototype=p.prototype=Object.create(b);function I(a){["next","throw","return"].forEach((function(t){c(a,t,(function(a){return this._invoke(t,a)}))}))}function y(a,t){function e(n,s,r,l){var c=d(a[n],a,s);if("throw"!==c.type){var o=c.arg,u=o.value;return u&&"object"===typeof u&&i.call(u,"__await")?t.resolve(u.__await).then((function(a){e("next",a,r,l)}),(function(a){e("throw",a,r,l)})):t.resolve(u).then((function(a){o.value=a,r(o)}),(function(a){return e("throw",a,r,l)}))}l(c.arg)}var n;function s(a,i){function s(){return new t((function(t,n){e(a,i,t,n)}))}return n=n?n.then(s,s):s()}this._invoke=s}function w(a,t,e){var i=u;return function(n,s){if(i===f)throw new Error("Generator is already running");if(i===h){if("throw"===n)throw s;return O()}e.method=n,e.arg=s;while(1){var r=e.delegate;if(r){var l=K(r,e);if(l){if(l===g)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(i===u)throw i=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i=f;var c=d(a,t,e);if("normal"===c.type){if(i=e.done?h:k,c.arg===g)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(i=h,e.method="throw",e.arg=c.arg)}}}function K(a,e){var i=a.iterator[e.method];if(i===t){if(e.delegate=null,"throw"===e.method){if(a.iterator["return"]&&(e.method="return",e.arg=t,K(a,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=d(i,a.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var s=n.arg;return s?s.done?(e[a.resultName]=s.value,e.next=a.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function L(a){var t={tryLoc:a[0]};1 in a&&(t.catchLoc=a[1]),2 in a&&(t.finallyLoc=a[2],t.afterLoc=a[3]),this.tryEntries.push(t)}function E(a){var t=a.completion||{};t.type="normal",delete t.arg,a.completion=t}function S(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(L,this),this.reset(!0)}function j(a){if(a){var e=a[s];if(e)return e.call(a);if("function"===typeof a.next)return a;if(!isNaN(a.length)){var n=-1,r=function e(){while(++n<a.length)if(i.call(a,n))return e.value=a[n],e.done=!1,e;return e.value=t,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:t,done:!0}}return v.prototype=m,c(C,"constructor",m),c(m,"constructor",v),v.displayName=c(m,l,"GeneratorFunction"),a.isGeneratorFunction=function(a){var t="function"===typeof a&&a.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,m):(a.__proto__=m,c(a,l,"GeneratorFunction")),a.prototype=Object.create(C),a},a.awrap=function(a){return{__await:a}},I(y.prototype),c(y.prototype,r,(function(){return this})),a.AsyncIterator=y,a.async=function(t,e,i,n,s){void 0===s&&(s=Promise);var r=new y(o(t,e,i,n),s);return a.isGeneratorFunction(e)?r:r.next().then((function(a){return a.done?a.value:r.next()}))},I(C),c(C,l,"Generator"),c(C,s,(function(){return this})),c(C,"toString",(function(){return"[object Generator]"})),a.keys=function(a){var t=[];for(var e in a)t.push(e);return t.reverse(),function e(){while(t.length){var i=t.pop();if(i in a)return e.value=i,e.done=!1,e}return e.done=!0,e}},a.values=j,S.prototype={constructor:S,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!a)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var a=this.tryEntries[0],t=a.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var e=this;function n(i,n){return l.type="throw",l.arg=a,e.next=i,n&&(e.method="next",e.arg=t),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var r=this.tryEntries[s],l=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var c=i.call(r,"catchLoc"),o=i.call(r,"finallyLoc");if(c&&o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(a,t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===a||"continue"===a)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var r=s?s.completion:{};return r.type=a,r.arg=t,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(r)},complete:function(a,t){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&t&&(this.next=t),g},finish:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===a)return this.complete(e.completion,e.afterLoc),E(e),g}},catch:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===a){var i=e.completion;if("throw"===i.type){var n=i.arg;E(e)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(a,e,i){return this.delegate={iterator:j(a),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=t),g}},a}(a.exports);try{regeneratorRuntime=i}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},"9f32":function(a,t,e){},"9f7f":function(a,t,e){var i=e("d039"),n=function(a,t){return RegExp(a,t)};t.UNSUPPORTED_Y=i((function(){var a=n("a","y");return a.lastIndex=2,null!=a.exec("abcd")})),t.BROKEN_CARET=i((function(){var a=n("^r","gy");return a.lastIndex=2,null!=a.exec("str")}))},a26d:function(a,t,e){},ac1f:function(a,t,e){"use strict";var i=e("23e7"),n=e("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(a,t,e){"use strict";var i=e("825a");a.exports=function(){var a=i(this),t="";return a.global&&(t+="g"),a.ignoreCase&&(t+="i"),a.multiline&&(t+="m"),a.dotAll&&(t+="s"),a.unicode&&(t+="u"),a.sticky&&(t+="y"),t}},c248:function(a,t,e){},c27b:function(a,t,e){},c63a:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"detailKata mainMenu"},[e("section",{staticClass:"gray-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-md-12 col-sm-12",staticStyle:{padding:"0 15px","margin-top":"-20px"}},["kbbi"===a.bidang?e("b-card-group",{staticClass:"mt-4",attrs:{deck:""}},[e("Kbbi",{attrs:{dataKata:a.dataKata,kata:a.kata,dataIklan:a.dataIklan}})],1):a._e(),"glosarium"===a.bidang?e("b-card-group",{staticClass:"mt-4",attrs:{deck:""}},[e("Istilah",{attrs:{dataIklan:a.dataIklan,dataKata:a.dataKata,kata:a.kata}})],1):a._e(),"artiNama"===a.bidang?e("b-card-group",{staticClass:"mt-4",attrs:{deck:""}},[e("ArtiNama",{attrs:{dataIklan:a.dataIklan,dataKata:a.dataKata,kata:a.kata}})],1):a._e(),"engInd"===a.bidang?e("b-card-group",{staticClass:"mt-4",attrs:{deck:""}},[e("EngIn",{attrs:{dataIklan:a.dataIklan,dataKata:a.dataKata,kata:a.kata}})],1):a._e(),"indEng"===a.bidang?e("b-card-group",{staticClass:"mt-4",attrs:{deck:""}},[e("InEng",{attrs:{dataIklan:a.dataIklan,dataKata:a.dataKata,kata:a.kata}})],1):a._e()],1),e("div",{staticClass:"col-lg-4 col-md-12 col-sm-12"},[e("Side",{attrs:{dataIklan:a.dataIklan}})],1)])])])])},n=[],s=e("1da1"),r=(e("96cf"),e("ac1f"),e("5319"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"sideKata"},[e("div",{staticClass:"kartu-kata light-box p-4"},[e("h4",[a._v("Kamus Istilah Populer")]),a._l(a.popIstilah.slice(0,5),(function(t){return e("ul",{key:t.id_glos},[e("li",{staticClass:"d-flex w-100 transform"},[e("a",{attrs:{href:"#"}},[a._v(a._s(t.judul_glos)+" ")]),e("span",{staticClass:"badge badge-primary ml-auto viewer"},[a._v(a._s(t.view/2))])])])}))],2),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"kartu-kata light-box p-4"},[e("h4",[a._v("Kamus KBBI Populer")]),a._l(a.popKbbi.slice(0,5),(function(t){return e("ul",{key:t._id},[e("li",{staticClass:"d-flex w-100 transform"},[e("a",{attrs:{href:"#"}},[a._v(a._s(t.kata)+" ")]),e("span",{staticClass:"badge badge-primary ml-auto viewer"},[a._v(a._s(t.view/2))])])])}))],2),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan2?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()])])}),l=[],c={props:["dataKata","dataIklan"],data:function(){return{iklan1:"",iklan2:"",popKbbi:[],popIstilah:[]}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[2].images,this.iklan2=t+this.dataIklan[3].images,this.popKbbi=JSON.parse(localStorage.popKbbi),this.popIstilah=JSON.parse(localStorage.popIstilah)}},o=c,d=(e("f103"),e("2877")),u=Object(d["a"])(o,r,l,!1,null,null,null),k=u.exports,f=e("bc3a"),h=e.n(f),g=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail mx-3"},[e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-slice"},[e("div",{staticClass:"box-detail-single"},[e("h1",[a._v("Arti Kata "+a._s(a.kata)+" KBBI Kamus Bahasa Indonesia")])]),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),e("p",[a._v(" Arti kata "+a._s(a.kata)+", maksud, definisi, pengertian dan makna kata terkait dengan arti kata "+a._s(a.kata)+". ")]),e("h2",[a._v("Arti Kata "+a._s(a.kata))]),a._l(a.dataKata.kbbi,(function(t){return e("p",{key:t._id},[e("strong",[a._v(a._s(t.kata))]),a._v(": "),e("span",{domProps:{innerHTML:a._s(t.keterangan)}})])})),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan2?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Related Word")]),e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.related,fields:a.fields,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan3?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])],1),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Arti Kata Lainnya")]),e("div",{staticClass:"box-detail-single"},[e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.random,fields:a.random,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()])],1)]),a._m(0)],2)])},p=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail-single flexeo"},[e("div",{staticClass:"box-detail-single-flex"},[e("ul",{staticClass:"shares-makna"},[e("li",[a._v("Bagikan Makna")]),e("li",[e("a",{staticClass:"share fb",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"share tw",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"share gp",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google"})])])])])])}],v={props:["dataKata","kata","dataIklan"],data:function(){return{iklan1:"",iklan2:"",iklan3:"",iklan4:"",dataKbbi:[],fields:[{key:"judul_artikel",label:"Indonesia"},{key:"isi_artikel",label:"Inggris"}],random:[{key:"judul_nama",label:"Nama"},{key:"isi_nama",label:"Makna"}]}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[5].images,this.iklan2=t+this.dataIklan[4].images,this.iklan3=t+this.dataIklan[3].images,this.iklan4=t+this.dataIklan[2].images,this.dataKbbi=this.dataKata.kbbi}},m=v,b=(e("cc19"),Object(d["a"])(m,g,p,!1,null,"ed4124da",null)),x=b.exports,_=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail mx-3"},[e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-slice"},[e("div",{staticClass:"box-detail-single"},[e("h1",[a._v("Arti Istilah "+a._s(a.kata)+" KBBI Kamus Bahasa Indonesia")])]),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),e("p",[a._v(" Arti Istilah "+a._s(a.kata)+", maksud, definisi, pengertian dan makna kata terkait dengan arti istilah "+a._s(a.kata)+". ")]),e("h2",[a._v("Arti Istilah "+a._s(a.kata))]),a._l(a.dataKata.kbbi,(function(t){return e("p",{key:t.id_glos},[e("strong",[a._v(a._s(t.judul_glos))]),a._v(": "),e("span",{domProps:{innerHTML:a._s(t.isi_glos)}})])})),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan2?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Related Word")]),e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.related,fields:a.fields,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan3?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])],1),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Arti Kata Lainnya")]),e("div",{staticClass:"box-detail-single"},[e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.random,fields:a.random,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()])],1)]),a._m(0)],2)])},C=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail-single flexeo"},[e("div",{staticClass:"box-detail-single-flex"},[e("ul",{staticClass:"shares-makna"},[e("li",[a._v("Bagikan Makna")]),e("li",[e("a",{staticClass:"share fb",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"share tw",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"share gp",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google"})])])])])])}],I={props:["dataKata","kata","dataIklan"],data:function(){return{iklan1:"",iklan2:"",iklan3:"",iklan4:"",data:[],fields:[{key:"judul_artikel",label:"Inggris"},{key:"isi_artikel",label:"Indonesia"}],random:[{key:"judul_artikel",label:"Indonesia"},{key:"isi_artikel",label:"Inggris"}]}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[2].images,this.iklan2=t+this.dataIklan[3].images,this.iklan3=t+this.dataIklan[4].images,this.iklan4=t+this.dataIklan[5].images}},y=I,w=(e("8b88"),Object(d["a"])(y,_,C,!1,null,"055828c4",null)),K=w.exports,L=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail mx-3"},[e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-slice"},[e("div",{staticClass:"box-detail-single"},[e("h1",[a._v("Arti Nama "+a._s(a.kata)+" dalam database KBBI Kamus Bahasa Indonesia")])]),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),e("p",[a._v(" Arti nama "+a._s(a.kata)+", maksud, definisi, pengertian dan makna nama terkait dengan arti nama "+a._s(a.kata)+". ")]),e("h2",[a._v("Arti Nama "+a._s(a.kata))]),a._l(a.dataKata.nama,(function(t){return e("div",{key:t.id},[e("strong",[a._v(a._s(t.judul_nama))]),a._v(": "),e("span",[a._v(a._s(t.isi_nama))]),e("p",[e("strong",[a._v("Asal nama")]),a._v(": "+a._s(t.asal_nama)+",")])])})),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan2?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Related Word")]),e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.related,fields:a.fields,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan3?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])],1),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Arti Kata Lainnya")]),e("div",{staticClass:"box-detail-single"},[e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.random,fields:a.random,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()])],1)]),a._m(0)],2)])},E=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail-single flexeo"},[e("div",{staticClass:"box-detail-single-flex"},[e("ul",{staticClass:"shares-makna"},[e("li",[a._v("Bagikan Makna")]),e("li",[e("a",{staticClass:"share fb",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"share tw",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"share gp",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google"})])])])])])}],S={props:["dataKata","kata","dataIklan"],data:function(){return{iklan:"",iklan1:"",iklan2:"",iklan3:"",iklan4:"",fields:[{key:"judul_artikel",label:"Kata"},{key:"isi_artikel",label:"Makna"}],random:[{key:"judul_nama",label:"Nama"},{key:"isi_nama",label:"Makna"}]}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[7].images,this.iklan2=t+this.dataIklan[4].images,this.iklan3=t+this.dataIklan[2].images,this.iklan4=t+this.dataIklan[0].images,this.iklan=t+this.dataIklan[5].images}},j=S,O=Object(d["a"])(j,L,E,!1,null,"30f01ecd",null),A=O.exports,$=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail mx-3"},[e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-slice"},[e("div",{staticClass:"box-detail-single"},[e("h1",[a._v("Terjemahan Kata "+a._s(a.kata)+" KBBI Kamus Bahasa Indonesia")])]),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),e("p",[a._v(" Terjemahan kata "+a._s(a.kata)+", maksud, definisi, pengertian dan makna kata terkait dengan arti kata "+a._s(a.kata)+". ")]),e("h2",[a._v("Terjemahan Kata "+a._s(a.kata))]),a._l(a.dataKata.engin,(function(t){return e("p",{key:t.id},[e("strong",[a._v(a._s(t.judul_artikel))]),a._v(": "),e("span",{domProps:{innerHTML:a._s(t.isi_artikel)}})])})),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan2?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Related Word")]),e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.related,fields:a.fields,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan3?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])],1),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Arti Kata Lainnya")]),e("div",{staticClass:"box-detail-single"},[e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.random,fields:a.random,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()])],1)]),a._m(0)],2)])},N=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail-single flexeo"},[e("div",{staticClass:"box-detail-single-flex"},[e("ul",{staticClass:"shares-makna"},[e("li",[a._v("Bagikan Makna")]),e("li",[e("a",{staticClass:"share fb",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"share tw",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"share gp",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google"})])])])])])}],R={props:["dataKata","kata","dataIklan"],data:function(){return{iklan1:"",iklan2:"",iklan3:"",iklan4:"",fields:[{key:"judul_glos",label:"Istilah"},{key:"isi_glos",label:"Makna"}],random:[{key:"judul_nama",label:"Nama"},{key:"isi_nama",label:"Makna"}]}},mounted:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[9].images,this.iklan2=t+this.dataIklan[8].images,this.iklan3=t+this.dataIklan[7].images,this.iklan4=t+this.dataIklan[5].images}},U=R,B=(e("3cea"),Object(d["a"])(U,$,N,!1,null,"19c2f44b",null)),T=B.exports,M=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail mx-3"},[e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-slice"},[e("div",{staticClass:"box-detail-single"},[e("h1",[a._v("Terjemahan Kata "+a._s(a.kata)+" KBBI Kamus Bahasa Indonesia")])]),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),e("p",[a._v(" Terjemahan kata "+a._s(a.kata)+", maksud, definisi, pengertian dan makna kata terkait dengan terjemahan kata "+a._s(a.kata)+". ")]),e("h2",[a._v("Terjemahan Kata "+a._s(a.kata))]),a._l(a.dataKata.idEng,(function(t){return e("p",{key:t.id},[e("strong",[a._v(a._s(t.judul_artikel))]),a._v(": "),e("span",{domProps:{innerHTML:a._s(t.isi_artikel)}})])})),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan2?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()]),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Related Word")]),e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.related,fields:a.fields,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan3?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])],1),e("div",{staticClass:"box-detail-single"},[e("h3",[a._v("Arti Kata Lainnya")]),e("div",{staticClass:"box-detail-single"},[e("b-table",{staticClass:"text-left mt-2",attrs:{items:a.dataKata.random,fields:a.random,striped:"",hover:"","head-variant":"dark",responsive:"sm"}}),e("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan4?e("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan4,alt:"Slot Iklan"}}):a._e()])],1)]),a._m(0)],2)])},P=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"box-detail-single flexeo"},[e("div",{staticClass:"box-detail-single-flex"},[e("ul",{staticClass:"shares-makna"},[e("li",[a._v("Bagikan Makna")]),e("li",[e("a",{staticClass:"share fb",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"})])]),e("li",[e("a",{staticClass:"share tw",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-twitter"})])]),e("li",[e("a",{staticClass:"share gp",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-google"})])])])])])}],G={props:["dataKata","kata","dataIklan"],data:function(){return{iklan1:"",iklan2:"",iklan3:"",iklan4:"",fields:[{key:"judul_nama",label:"Nama"},{key:"isi_nama",label:"Makna"}],random:[{key:"judul_glos",label:"Istilah"},{key:"isi_glos",label:"Makna"}]}},mounted:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[4].images,this.iklan2=t+this.dataIklan[5].images,this.iklan3=t+this.dataIklan[7].images,this.iklan4=t+this.dataIklan[8].images}},J=G,F=(e("3872"),Object(d["a"])(J,M,P,!1,null,"0307ecae",null)),W=F.exports,H={data:function(){return{kata:"",bidang:"",dataKata:[],dataIklan:[],mainUrl:"",iklan:"",findUrl:{kbbi:"/find/",glos:"/findGlos/",nama:"/findNama/",eng:"/translateEng/",ind:"/translateInd/"}}},created:function(){this.dataIklan=JSON.parse(localStorage.dataIklan),this.mainUrl=localStorage.mainUrl;var a=this.mainUrl+"/images/client/";this.iklan=a+this.dataIklan[1].images,console.log(this.$route.params.kata),this.kata=this.$route.params.kata,this.bidang=this.$route.params.bidang,this.cariKata()},components:{Side:k,Kbbi:x,Istilah:K,ArtiNama:A,EngIn:T,InEng:W},methods:{cariKata:function(){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,n,s,r,l,c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"kbbi"!==a.bidang){t.next=12;break}return t.next=4,h.a.get(a.mainUrl+a.findUrl.kbbi+a.kata);case 4:e=t.sent,i=e.data,String.prototype.jsonEncode=function(){return this.replace(/&lt;\/b&gt;/g,"</b>").replace(/&lt;b&gt;/g,"<b>").replace(/&lt;\/sup&gt;/g,"</sup>").replace(/&lt;sup&gt;/g,"<sup>").replace(/&lt;\/i&gt;/g,"</i>").replace(/&lt;i&gt;/g,"<i>").replace(/&lt;br&gt;/g,"<br>").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f")},n=JSON.stringify(i),s=n.jsonEncode(),a.dataKata=JSON.parse(s),t.next=39;break;case 12:if("glosarium"!==a.bidang){t.next=19;break}return t.next=15,h.a.get(a.mainUrl+a.findUrl.glos+a.kata);case 15:r=t.sent,a.dataKata=r.data,t.next=39;break;case 19:if("artiNama"!==a.bidang){t.next=26;break}return t.next=22,h.a.get(a.mainUrl+a.findUrl.nama+a.kata);case 22:l=t.sent,a.dataKata=l.data,t.next=39;break;case 26:if("engInd"!==a.bidang){t.next=33;break}return t.next=29,h.a.get(a.mainUrl+a.findUrl.eng+a.kata);case 29:c=t.sent,a.dataKata=c.data,t.next=39;break;case 33:if("indEng"!==a.bidang){t.next=39;break}return t.next=36,h.a.get(a.mainUrl+a.findUrl.ind+a.kata);case 36:o=t.sent,a.dataKata=o.data,console.log(a.dataKata);case 39:t.next=44;break;case 41:t.prev=41,t.t0=t["catch"](0),console.log(t.t0);case 44:case"end":return t.stop()}}),t,null,[[0,41]])})))()}}},Y=H,D=(e("7ecd"),Object(d["a"])(Y,i,n,!1,null,"3b412030",null));t["default"]=D.exports},cc19:function(a,t,e){"use strict";e("c248")},d784:function(a,t,e){"use strict";e("ac1f");var i=e("6eeb"),n=e("9263"),s=e("d039"),r=e("b622"),l=e("9112"),c=r("species"),o=RegExp.prototype;a.exports=function(a,t,e,d){var u=r(a),k=!s((function(){var t={};return t[u]=function(){return 7},7!=""[a](t)})),f=k&&!s((function(){var t=!1,e=/a/;return"split"===a&&(e={},e.constructor={},e.constructor[c]=function(){return e},e.flags="",e[u]=/./[u]),e.exec=function(){return t=!0,null},e[u](""),!t}));if(!k||!f||e){var h=/./[u],g=t(u,""[a],(function(a,t,e,i,s){var r=t.exec;return r===n||r===o.exec?k&&!s?{done:!0,value:h.call(t,e,i)}:{done:!0,value:a.call(e,t,i)}:{done:!1}}));i(String.prototype,a,g[0]),i(o,u,g[1])}d&&l(o[u],"sham",!0)}},f103:function(a,t,e){"use strict";e("56d0")},fce3:function(a,t,e){var i=e("d039");a.exports=i((function(){var a=RegExp(".","string".charAt(0));return!(a.dotAll&&a.exec("\n")&&"s"===a.flags)}))}}]);
//# sourceMappingURL=chunk-f1a264aa.9bd74687.js.map