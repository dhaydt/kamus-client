(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d7e970d"],{"04f0":function(t,e,a){},"1da1":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7");function n(t,e,a,n,i,r,s){try{var o=t[r](s),l=o.value}catch(c){return void a(c)}o.done?e(l):Promise.resolve(l).then(n,i)}function i(t){return function(){var e=this,a=arguments;return new Promise((function(i,r){var s=t.apply(e,a);function o(t){n(s,i,r,o,l,"next",t)}function l(t){n(s,i,r,o,l,"throw",t)}o(void 0)}))}}},"96cf":function(t,e,a){var n=function(t){"use strict";var e,a=Object.prototype,n=a.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function l(t,e,a){return Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(A){l=function(t,e,a){return t[e]=a}}function c(t,e,a,n){var i=e&&e.prototype instanceof v?e:v,r=Object.create(i.prototype),s=new U(n||[]);return r._invoke=I(t,a,s),r}function u(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(A){return{type:"throw",arg:A}}}t.wrap=c;var m="suspendedStart",d="suspendedYield",h="executing",p="completed",g={};function v(){}function f(){}function b(){}var k={};l(k,r,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(K([])));w&&w!==a&&n.call(w,r)&&(k=w);var _=b.prototype=v.prototype=Object.create(k);function x(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function a(i,r,s,o){var l=u(t[i],t,r);if("throw"!==l.type){var c=l.arg,m=c.value;return m&&"object"===typeof m&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){a("next",t,s,o)}),(function(t){a("throw",t,s,o)})):e.resolve(m).then((function(t){c.value=t,s(c)}),(function(t){return a("throw",t,s,o)}))}o(l.arg)}var i;function r(t,n){function r(){return new e((function(e,i){a(t,n,e,i)}))}return i=i?i.then(r,r):r()}this._invoke=r}function I(t,e,a){var n=m;return function(i,r){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw r;return L()}a.method=i,a.arg=r;while(1){var s=a.delegate;if(s){var o=E(s,a);if(o){if(o===g)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(n===m)throw n=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n=h;var l=u(t,e,a);if("normal"===l.type){if(n=a.done?p:d,l.arg===g)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n=p,a.method="throw",a.arg=l.arg)}}}function E(t,a){var n=t.iterator[a.method];if(n===e){if(a.delegate=null,"throw"===a.method){if(t.iterator["return"]&&(a.method="return",a.arg=e,E(t,a),"throw"===a.method))return g;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=u(n,t.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,g;var r=i.arg;return r?r.done?(a[t.resultName]=r.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,g):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function U(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function K(t){if(t){var a=t[r];if(a)return a.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,s=function a(){while(++i<t.length)if(n.call(t,i))return a.value=t[i],a.done=!1,a;return a.value=e,a.done=!0,a};return s.next=s}}return{next:L}}function L(){return{value:e,done:!0}}return f.prototype=b,l(_,"constructor",b),l(b,"constructor",f),f.displayName=l(b,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,o,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(C.prototype),l(C.prototype,s,(function(){return this})),t.AsyncIterator=C,t.async=function(e,a,n,i,r){void 0===r&&(r=Promise);var s=new C(c(e,a,n,i),r);return t.isGeneratorFunction(a)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},x(_),l(_,o,"Generator"),l(_,r,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var n=e.pop();if(n in t)return a.value=n,a.done=!1,a}return a.done=!0,a}},t.values=K,U.prototype={constructor:U,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function i(n,i){return o.type="throw",o.arg=t,a.next=n,i&&(a.method="next",a.arg=e),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var l=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(l&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(l){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=t,s.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),S(a),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var n=a.completion;if("throw"===n.type){var i=n.arg;S(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,n){return this.delegate={iterator:K(t),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},b26e:function(t,e,a){"use strict";a("04f0")},b828:function(t,e,a){"use strict";a("bd80")},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"home"}),a("Hero"),a("Landing"),a("Populer"),a("Konten")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-banner full jumbo-banner"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-7 col-md-8"},[t._m(0),a("p",{staticClass:"lead"},[t._v("Masukkan kata yang kamu cari disini.")]),a("form",{on:{submit:t.onSubmit}},[a("div",{staticClass:"row m-0"},[a("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 p-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control search-slt",attrs:{id:"keyword",required:"",type:"text",placeholder:"Kata"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),a("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 p-0"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-control search-slt",attrs:{required:"",id:"kategori-kamus"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("Pilih Kategori")]),a("option",{attrs:{value:"kbbi"}},[t._v("KBBI")]),a("option",{attrs:{value:"engin"}},[t._v("Eng-Ind")]),a("option",{attrs:{value:"ineng"}},[t._v("Ind-Eng")]),a("option",{attrs:{value:"istilah"}},[t._v("Istilah")]),a("option",{attrs:{value:"artiNama"}},[t._v("Arti Nama")])])]),a("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 p-0"},[a("button",{staticClass:"btn btn-danger wrn-btn",attrs:{type:"submit"}},[t.loading?a("div",[a("b-spinner",{attrs:{small:"",variant:"primary"}})],1):t._e(),t.loading?t._e():a("span",[t._v("Cari")])])])])]),a("b-alert",{staticClass:"mt-2",attrs:{variant:"danger",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.error)+" ")]),a("div",{staticClass:"featured-category dark"},[a("ul",[a("li",[t._v("Browse Category:")]),a("li",[a("router-link",{attrs:{to:"/kbbi","data-toggle":"tooltip","data-original-title":"KBBI"}},[t._v("KBBI")])],1),a("li",[a("router-link",{attrs:{to:"/terjemahan","data-toggle":"tooltip","data-original-title":"Eng-Ind"}},[t._v("Eng-Ind")])],1),a("li",[a("router-link",{attrs:{to:"/terjemahan","data-toggle":"tooltip","data-original-title":"Ind-Eng"}},[t._v("Ind-Eng")])],1),a("li",[a("router-link",{attrs:{to:"/glossarium","data-toggle":"tooltip","data-original-title":"Istilah"}},[t._v("Istilah")])],1),a("li",[a("router-link",{attrs:{to:"/artinama","data-toggle":"tooltip","data-original-title":"Arti Nama"}},[t._v("Arti Nama")])],1)])])],1),t._m(1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v(" Temukan "),a("span",{staticClass:"text-info"},[t._v("arti kata")]),t._v(" & makna kata disini! ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-5 col-md-4"},[a("img",{staticClass:"img-fluid",attrs:{src:"assets/img/a-2.png",alt:"kamus-kbbi-eng-ind"}})])}],o=a("1da1"),l=(a("96cf"),a("01e3")),c=a("bc3a"),u=a.n(c),m={data:function(){return{backendUrl:"",reportUrl:"/report",selected:"",loading:!1,keyword:"",error:"",showDismissibleAlert:!1,findUrl:{kbbi:"/find/",glos:"/findGlos/",nama:"/findNama/",eng:"/translateEng/",ind:"/translateInd/"}}},created:function(){this.mainUrl=localStorage.mainUrl,console.log(this.mainUrl)},components:{BSpinner:l["a"]},methods:{onSubmit:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,i,r,s,o,l,c,m,d,h,p,g,v,f,b,k,y;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.preventDefault(),n=e.selected,e.showDismissibleAlert=!1,e.loading=!0,i=e.mainUrl,"kbbi"!==n){a.next=30;break}return console.log("cari di kbbi"),a.prev=7,a.next=10,u.a.get(i+e.findUrl.kbbi+e.keyword);case 10:if(r=a.sent,s=r.data,o=s.kbbi.length,0!==o){a.next=22;break}return e.error="Data tidak ada di kamus kami!",e.showDismissibleAlert=!0,e.loading=!1,console.log("row",o),a.next=20,u.a.post(i+e.reportUrl,{kata:e.keyword,bidang:"KBBI"});case 20:a.next=23;break;case 22:window.location.href="/kbbi/"+e.keyword;case 23:a.next=28;break;case 25:a.prev=25,a.t0=a["catch"](7),console.log("kbbi",a.t0);case 28:a.next=120;break;case 30:if("istilah"!==n){a.next=53;break}return a.prev=31,a.next=34,u.a.get(i+e.findUrl.glos+e.keyword);case 34:if(l=a.sent,c=l.data,m=c.istilah.length,0!==m){a.next=45;break}return e.error="Data Istilah tidak ditemukan",e.showDismissibleAlert=!0,e.loading=!1,a.next=43,u.a.post(i+e.reportUrl,{kata:e.keyword,bidang:"Istilah"});case 43:a.next=46;break;case 45:window.location.href="/glosarium/"+e.keyword;case 46:a.next=51;break;case 48:a.prev=48,a.t1=a["catch"](31),console.log("istilah",a.t1);case 51:a.next=120;break;case 53:if("artiNama"!==n){a.next=77;break}return console.log("cari di nama"),a.prev=55,a.next=58,u.a.get(i+e.findUrl.nama+e.keyword);case 58:if(d=a.sent,h=d.data,p=h.nama.length,0!==p){a.next=69;break}return e.error="Data Nama tidak ditemukan",e.showDismissibleAlert=!0,e.loading=!1,a.next=67,u.a.post(i+e.reportUrl,{kata:e.keyword,bidang:"Arti Nama"});case 67:a.next=70;break;case 69:window.location.href="/artiNama/"+e.keyword;case 70:a.next=75;break;case 72:a.prev=72,a.t2=a["catch"](55),console.log("nama",a.t2);case 75:a.next=120;break;case 77:if("engin"!==n){a.next=100;break}return a.prev=78,a.next=81,u.a.get(i+e.findUrl.eng+e.keyword);case 81:if(g=a.sent,v=g.data,f=v.engin.length,0!==f){a.next=92;break}return e.error="Data Terjemahan tidak ditemukan",e.showDismissibleAlert=!0,e.loading=!1,a.next=90,u.a.post(i+e.reportUrl,{kata:e.keyword,bidang:"ENG - IND"});case 90:a.next=93;break;case 92:window.location.href="/engInd/"+e.keyword;case 93:a.next=98;break;case 95:a.prev=95,a.t3=a["catch"](78),console.log("EngIn",a.t3);case 98:a.next=120;break;case 100:return a.prev=100,a.next=103,u.a.get(i+e.findUrl.ind+e.keyword);case 103:if(b=a.sent,k=b.data,y=k.idEng.length,0!==y){a.next=114;break}return e.error="Data Terjemahan tidak ditemukan",e.showDismissibleAlert=!0,e.loading=!1,a.next=112,u.a.post(i+e.reportUrl,{kata:e.keyword,bidang:"IND - ENG"});case 112:a.next=115;break;case 114:window.location.href="/indEng/"+e.keyword;case 115:a.next=120;break;case 117:a.prev=117,a.t4=a["catch"](100),console.log("inEng",a.t4);case 120:case"end":return a.stop()}}),a,null,[[7,25],[31,48],[55,72],[78,95],[100,117]])})))()}}},d=m,h=(a("f785"),a("2877")),p=Object(h["a"])(d,r,s,!1,null,"2f9d0089",null),g=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"min-sec"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[t._m(1),a("div",{staticClass:"mx-4 mt-5"},[a("router-link",{staticClass:"btn btn-theme blue dark",attrs:{to:"/kbbi"}},[t._v("Detail")])],1)])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[t._m(2),a("div",{staticClass:"mx-4 mt-5"},[a("router-link",{staticClass:"btn btn-theme blue dark",attrs:{to:"/terjemahan"}},[t._v("Detail")])],1)])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[t._m(3),a("div",{staticClass:"mx-4 mt-5"},[a("router-link",{staticClass:"btn btn-theme blue dark",attrs:{to:"/terjemahan"}},[t._v("Detail")])],1)])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[t._m(4),a("div",{staticClass:"mx-4 mt-5"},[a("router-link",{staticClass:"btn btn-theme blue dark",attrs:{to:"/glossarium"}},[t._v("Detail")])],1)])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("InFeedAdsense",{staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-9333981154484827","data-ad-slot":"5683973304","data-ad-format":"auto","data-full-width-responsive":"true"}})],1)]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[t._m(5),a("div",{staticClass:"mx-4 mt-5"},[a("router-link",{staticClass:"btn btn-theme blue dark",attrs:{to:"/artinama"}},[t._v("Detail")])],1)])])])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-7 col-md-9"},[a("div",{staticClass:"sec-heading"},[a("h2",[a("span",{staticClass:"theme-cl-2"},[t._v("KamusKBBI.id")]),t._v(" 5 kamus dalam 1 website ")]),a("p",[t._v("Kamus KBBI, Eng-Ind, Ind-Eng, Istilah dan Arti Nama.")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4"},[a("h4",[t._v("Kamus KBBI")]),a("p",[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4"},[a("h4",[t._v("Kamus Eng-Ind")]),a("p",[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4"},[a("h4",[t._v("Kamus Ind-Eng")]),a("p",[t._v(" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use ... ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4"},[a("h4",[t._v("Kamus Istilah")]),a("p",[t._v(" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4"},[a("h4",[t._v("Kamus Artinama")]),a("p",[t._v(" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use ... ")])])}],b={data:function(){return{backendUrl:"",getAdUrl:"/getAtasJudul",getBJ:"/getBawahJudul",getAR:"/getAtasRelated",getAL:"/getAtasLainnya",getAS:"/getAtasShared",getSA:"/getSideAtas",getST:"/getSideTengah",getSB:"/getSideBawah",iklan1:""}},created:function(){this.backendUrl=localStorage.mainUrl,this.getIklan(),this.randomKata()},mounted:function(){var t=this.backendUrl+"/images/client/",e=JSON.parse(localStorage.dataIklan);this.iklan1=t+e.atasJudul[0].images},methods:{getIklan:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,i,r,s,o,l,c,m,d,h,p,g,v,f,b,k,y;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.backendUrl+t.getAdUrl);case 2:return a=e.sent,n=a.data,e.next=6,u.a.get(t.backendUrl+t.getBJ);case 6:return i=e.sent,r=i.data,e.next=10,u.a.get(t.backendUrl+t.getAR);case 10:return s=e.sent,o=s.data,e.next=14,u.a.get(t.backendUrl+t.getAL);case 14:return l=e.sent,c=l.data,e.next=18,u.a.get(t.backendUrl+t.getAS);case 18:return m=e.sent,d=m.data,e.next=22,u.a.get(t.backendUrl+t.getSA);case 22:return h=e.sent,p=h.data,e.next=26,u.a.get(t.backendUrl+t.getST);case 26:return g=e.sent,v=g.data,e.next=30,u.a.get(t.backendUrl+t.getSB);case 30:f=e.sent,b=f.data,k={atasJudul:n,bawahJudul:r,atasRelated:o,atasLainnya:c,atasShared:d,sideAtas:p,sideTengah:v,sideBawah:b},y=JSON.stringify(k),localStorage.setItem("dataIklan",y);case 35:case"end":return e.stop()}}),e)})))()},getImageData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.backendUrl+t.urlImageData+t.idImg);case 2:a=e.sent,n=a.data.data[0],console.log(n.title),t.iklanImage=t.backendUrl+t.urlImg+n.images;case 6:case"end":return e.stop()}}),e)})))()},randomKata:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.backendUrl+"/random");case 2:a=e.sent,localStorage.setItem("randomKata",JSON.stringify(a.data));case 4:case"end":return e.stop()}}),e)})))()}}},k=b,y=(a("b828"),Object(h["a"])(k,v,f,!1,null,null,null)),w=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"gray-light"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[a("div",{},[a("h4",{staticClass:"mx-4 mb-4"},[t._v("Kamus KBBI")]),a("div",{staticClass:"random-kata"},[a("ul",{staticClass:"btn-rainbow"},t._l(t.popKbbi,(function(e){return a("li",{key:e._id},[a("router-link",{staticClass:"random-kata-list",attrs:{to:"#"}},[t._v(t._s(e.kata))])],1)})),0)]),a("div",{staticClass:"mx-4 mt-4"},[a("router-link",{staticClass:"btn btn-theme blue dark",attrs:{to:"/kbbi"}},[t._v("Detail")])],1)])])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[a("div",{},[a("h4",{staticClass:"ml-4 mb-4"},[t._v("Kamus Eng-Ind")]),a("div",{staticClass:"random-kata"},[a("ul",{staticClass:"btn-rainbow"},t._l(t.popEngIn,(function(e){return a("li",{key:e.id},[a("a",{staticClass:"random-kata-list style-5",attrs:{href:"#"}},[t._v(t._s(e.judul_artikel))])])})),0)])]),t._m(1)])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[a("div",{},[a("h4",{staticClass:"ml-4 mb-4"},[t._v("Kamus Ind-Eng")]),a("div",{staticClass:"random-kata"},[a("ul",{staticClass:"btn-rainbow"},t._l(t.popInEng,(function(e){return a("li",{key:e.id},[a("a",{staticClass:"random-kata-list style-5",attrs:{href:"#"}},[t._v(t._s(e.judul_artikel))])])})),0)])]),t._m(2)])])])]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("InFeedAdsense",{staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-9333981154484827","data-ad-slot":"5683973304","data-ad-format":"auto","data-full-width-responsive":"true"}})],1),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[a("div",{},[a("h4",{staticClass:"ml-4 mb-4"},[t._v("Kamus Istilah")]),a("div",{staticClass:"random-kata"},[a("ul",{staticClass:"btn-rainbow"},t._l(t.popIstilah,(function(e){return a("li",{key:e.id},[a("a",{staticClass:"random-kata-list style-5",attrs:{href:"#"}},[t._v(t._s(e.judul_glos))])])})),0)])]),t._m(3)])])]),a("div",{staticClass:"col-lg-4 col-md-6 col-sm-12"},[a("div",{staticClass:"box-kamus"},[a("div",{},[a("div",{},[a("h4",{staticClass:"ml-4 mb-4"},[t._v("Kamus ArtiNama")]),a("div",{staticClass:"random-kata"},[a("ul",{staticClass:"btn-rainbow"},t._l(t.popNama,(function(e){return a("li",{key:e.id},[a("a",{staticClass:"random-kata-list style-5",attrs:{href:"#"}},[t._v(t._s(e.judul_nama))])])})),0)])]),t._m(4)])])])])])])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-7 col-md-9"},[a("div",{staticClass:"sec-heading"},[a("h2",[t._v("Kata yang Sering "),a("span",{staticClass:"theme-cl-2"},[t._v("Dicari")])]),a("p",[t._v(" Setiap hari 5-6k pengunjung mencari makna kata di web kamuskbbi.id. Berikut kata yang sering mereka cari dikelompokkan sesuai kategorinya. ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4 mt-4"},[a("a",{staticClass:"btn btn-theme blue dark",attrs:{href:"/terjemahan"}},[t._v("Detail")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4 mt-4"},[a("a",{staticClass:"btn btn-theme blue dark",attrs:{href:"/terjemahan"}},[t._v("Detail")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4 mt-4"},[a("a",{staticClass:"btn btn-theme blue dark",attrs:{href:"/istilah"}},[t._v("Detail")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mx-4 mt-4"},[a("a",{staticClass:"btn btn-theme blue dark",attrs:{href:"/artinama"}},[t._v("Detail")])])}],C={data:function(){return{mainUrl:"",urlPopKbbi:"/kamus/pop",urlPopIstilah:"/istilah/pop",urlPopNama:"/nama/pop",urlPopEngIn:"/engin/pop",urlPopInEng:"/ineng/pop",iklan1:"",dataImage:[],popKbbi:[],popIstilah:[],popNama:[],popEngIn:[],popInEng:[]}},created:function(){this.mainUrl=localStorage.mainUrl,this.getPopKbbi(),this.getPopNama(),this.getPopIstilah(),this.getPopEngIn(),this.getPopInEng()},mounted:function(){var t=this.mainUrl+"/images/client/",e=JSON.parse(localStorage.dataIklan);console.log(e.bawahJudul),this.iklan1=t+e.bawahJudul[0].images},methods:{getPopKbbi:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.mainUrl+t.urlPopKbbi);case 2:a=e.sent,t.popKbbi=a.data,localStorage.setItem("popKbbi",JSON.stringify(t.popKbbi));case 5:case"end":return e.stop()}}),e)})))()},getPopNama:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.mainUrl+t.urlPopNama);case 2:a=e.sent,t.popNama=a.data;case 4:case"end":return e.stop()}}),e)})))()},getPopEngIn:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.mainUrl+t.urlPopEngIn);case 2:a=e.sent,t.popEngIn=a.data;case 4:case"end":return e.stop()}}),e)})))()},getPopInEng:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.mainUrl+t.urlPopInEng);case 2:a=e.sent,t.popInEng=a.data;case 4:case"end":return e.stop()}}),e)})))()},getPopIstilah:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(t.mainUrl+t.urlPopIstilah);case 2:a=e.sent,t.popIstilah=a.data,localStorage.setItem("popIstilah",JSON.stringify(t.popIstilah));case 5:case"end":return e.stop()}}),e)})))()}}},I=C,E=(a("b26e"),Object(h["a"])(I,_,x,!1,null,"f3a28480",null)),j=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"min-sec"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8 col-md-10"},[a("div",{staticClass:"sec-heading"},[a("h2",[t._v(" KamusKBBI Kamus Bahasa Indonesia "),a("span",{staticClass:"theme-cl-2"},[t._v("Terlengkap")])]),a("p",[t._v(" Kami memberikan informasi yang meliputi kamus kbbi, kamus translate indonesia inggris, ")])])])]),a("div",{staticClass:"row col-12"},[a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget felis eu nisl finibus consequat. Donec sodales justo nec tempor porttitor. Aliquam molestie, urna nec ultrices sodales, mi ligula bibendum arcu, accumsan condimentum enim ligula ac nibh. Sed viverra commodo odio nec elementum. Curabitur et erat in leo mollis sodales quis placerat velit. Fusce tempus, sem id laoreet efficitur, velit nunc luctus nisl, nec mattis lacus magna in magna. Sed vel urna velit. Quisque lacinia quam vulputate dolor placerat, eget facilisis elit cursus. Duis mattis finibus interdum. Nam efficitur condimentum eros in pretium. Vivamus interdum eros tincidunt nisi facilisis molestie. Mauris sed magna maximus, mattis nunc id, tempus nunc. ")]),a("p",[t._v(" Quisque auctor, arcu vel pellentesque tempus, mauris sem vehicula dui, vel molestie neque metus efficitur neque. Quisque lectus arcu, malesuada ut dictum vel, commodo et risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id fermentum nisi, vitae placerat velit. Maecenas nec turpis eu ipsum mattis lacinia ultricies sed purus. Suspendisse eget mi sit amet metus sagittis mattis. Nullam lacinia eros purus, malesuada varius arcu ullamcorper sit amet. Pellentesque non est euismod, aliquam nisl a, cursus lacus. Ut consectetur ligula non velit vehicula, at elementum tortor pellentesque. Ut aliquam semper tortor in sagittis. Praesent finibus, urna et euismod maximus, turpis nulla pellentesque lacus, et finibus mauris lectus a sapien. Sed sagittis metus venenatis lobortis euismod. Pellentesque rutrum hendrerit massa vitae rutrum. Phasellus non tincidunt magna. ")]),a("p",[t._v(" Mauris quis vestibulum mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras aliquam magna vel sapien ullamcorper pulvinar. Ut convallis felis lacus, eu tempor quam pulvinar sed. Sed euismod sapien ipsum, lobortis feugiat nisi volutpat a. Praesent interdum, mauris venenatis vehicula pellentesque, metus turpis lacinia est, ut vehicula ipsum lorem ac orci. Sed porta consectetur felis ac consequat. Quisque vitae nisl purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis cursus sapien sed enim volutpat mollis. In justo eros, laoreet a sodales eu, tempor eget leo. Nulla facilisi. Donec massa quam, tempus sit amet egestas et, posuere nec metus. Fusce ullamcorper molestie urna, id hendrerit tortor varius bibendum. Donec dignissim tempor libero, id laoreet quam convallis vitae. ")]),a("p",[t._v(" Vivamus ipsum arcu, tristique sit amet magna ac, finibus elementum erat. Etiam semper malesuada eros et molestie. Sed leo ex, facilisis in libero eget, posuere cursus lectus. Praesent eleifend urna eget neque vestibulum, in blandit est pulvinar. Aenean eget mi at sem mollis cursus. Aliquam tincidunt ut massa eget blandit. Mauris scelerisque nisl vitae velit placerat ultricies. Donec porttitor ante non leo dapibus condimentum. Mauris tristique vehicula sem, nec dictum metus porta et. Ut id euismod mi, eget faucibus libero. Curabitur dolor mi, congue feugiat ligula non, cursus gravida dui. ")]),a("p",[t._v(" Nullam hendrerit nunc id lectus pretium malesuada. Pellentesque eleifend felis vel velit rutrum, sed iaculis nisi hendrerit. Maecenas tempor facilisis urna quis facilisis. Mauris egestas libero at volutpat malesuada. Vivamus condimentum ultrices nunc, a facilisis velit suscipit sed. Sed sollicitudin, libero in congue imperdiet, est massa porta nibh, dignissim tempus odio eros sed erat. Integer elementum quam non elementum condimentum. In auctor lorem id malesuada gravida. Vivamus nec leo tempor, mollis metus eleifend, molestie diam. Donec pulvinar ex nisi, in consequat ante convallis a. ")])])])])}],K={},L=K,A=Object(h["a"])(L,S,U,!1,null,"5e78da8c",null),N=A.exports,D={metaInfo:function(){return{title:"Kamus KBBI Terjemahan Istilah dan Artinama - KamusKBBI.id"}},components:{Hero:g,Landing:w,Populer:j,Konten:N}},P=D,q=Object(h["a"])(P,n,i,!1,null,"74483cc4",null);e["default"]=q.exports},bd80:function(t,e,a){},c135:function(t,e,a){},f785:function(t,e,a){"use strict";a("c135")}}]);
//# sourceMappingURL=chunk-5d7e970d.92bcbe2a.js.map