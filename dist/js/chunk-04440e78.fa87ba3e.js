(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04440e78"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}},2409:function(t,e,r){},3439:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addUser"},[r("PageHeader",{attrs:{items:t.items,title:t.title}}),r("b-card",{staticClass:"card-add"},[t.error?r("b-alert",{staticClass:"mt-2",attrs:{variant:"danger",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.success?r("b-alert",{staticClass:"mt-2",attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.success)+" ")]):t._e(),r("b-row",{staticClass:"d-flex justify-content-center mt-4"},[r("b-col",{attrs:{lg:"8",md:"9",sm:"12"}},[r("b-form",{on:{submit:t.onSubmit}},[r("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[r("b-input-group-text",{staticClass:"w-15"},[t._v("Nama")])]},proxy:!0},{key:"append",fn:function(){return[r("b-input-group-text",[r("strong",{staticClass:"text-danger"},[t._v("!")])])]},proxy:!0}])},[r("b-form-input",{attrs:{id:"username",placeholder:"Masukan nama",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("b-input-group",{staticClass:"mt-4",scopedSlots:t._u([{key:"prepend",fn:function(){return[r("b-input-group-text",{staticClass:"w-15"},[t._v("Email")])]},proxy:!0},{key:"append",fn:function(){return[r("b-input-group-text",[r("strong",{staticClass:"text-danger"},[t._v("!")])])]},proxy:!0}])},[r("b-form-input",{attrs:{type:"email",required:"",placeholder:"Masukan email",id:"email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-input-group",{staticClass:"mt-4",scopedSlots:t._u([{key:"prepend",fn:function(){return[r("b-input-group-text",{staticClass:"w-15"},[t._v("Password")])]},proxy:!0},{key:"append",fn:function(){return[r("b-input-group-text",[r("strong",{staticClass:"text-danger"},[t._v("!")])])]},proxy:!0}])},[r("b-form-input",{attrs:{type:"password",required:"",placeholder:"Masukan password",id:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-input-group",{staticClass:"mt-4",scopedSlots:t._u([{key:"prepend",fn:function(){return[r("b-input-group-text",{staticClass:"w-15"},[t._v("Confirm Password")])]},proxy:!0},{key:"append",fn:function(){return[r("b-input-group-text",[r("strong",{staticClass:"text-danger"},[t._v("!")])])]},proxy:!0}])},[r("b-form-input",{attrs:{type:"password",placeholder:"Masukan password lagi",required:"",id:"c_password"},model:{value:t.form.c_password,callback:function(e){t.$set(t.form,"c_password",e)},expression:"form.c_password"}})],1),r("b-button-group",{staticClass:"mt-4"},[r("b-button",{attrs:{type:"submit",variant:"primary"}},[t.loading?r("div",[r("b-spinner",{attrs:{small:"",variant:"primary"}}),t._v(" Menyimpan... ")],1):t._e(),t.loading?t._e():r("span",[r("i",{staticClass:"fa fa-save"}),t._v(" Simpan")])])],1)],1)],1)],1)],1)],1)},o=[],a=r("1da1"),i=(r("96cf"),r("01e3")),s=r("ed6d"),c=r("bc3a"),u=r.n(c),l={data:function(){return{urlRegister:"",showDismissibleAlert:!0,error:"",success:"",loading:!1,form:{username:"",email:"",password:"",c_password:""},title:"Tambah Admin",items:[{text:"Admin"},{text:"Administrator"},{text:"Tambah Admin",active:!0}]}},created:function(){var t=localStorage.mainUrl;this.urlRegister=t+"/register"},methods:{onSubmit:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.preventDefault(),e.error="",e.success="",e.loading=!0,n=e.form.password,o=e.form.c_password,n==o){r.next=15;break}console.log("password beda"),e.loading=!1,e.showDismissibleAlert=!0,e.error="Password tidak sama",e.form.password="",e.form.c_password="",r.next=38;break;case 15:if(!(n.length<6)){r.next=24;break}console.log("pass min 6"),e.form.password="",e.form.c_password="",e.loading=!1,e.showDismissibleAlert=!0,e.error="Password minimal 6 Karakter",r.next=38;break;case 24:return r.prev=24,r.next=27,u.a.post(e.urlRegister,{username:e.form.username,email:e.form.email,password:e.form.password});case 27:console.log("berhasil"),e.loading=!1,e.success="Berhasil Mendaftarkan Admin!!!",e.$router.push("/admin/user"),r.next=38;break;case 33:r.prev=33,r.t0=r["catch"](24),console.log(r.t0),e.loading=!1,e.error="Email sudah terdaftar!!!";case 38:case"end":return r.stop()}}),r,null,[[24,33]])})))()}},components:{PageHeader:s["a"],BSpinner:i["a"]}},f=l,p=(r("c36b"),r("2877")),d=Object(p["a"])(f,n,o,!1,null,"26851782",null);e["default"]=d.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(D){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=E(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(D){return{type:"throw",arg:D}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function v(){}function g(){}function y(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==r&&n.call(x,a)&&(w=x);var _=y.prototype=v.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,a,i,s){var c=l(t[o],t,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function E(t,e,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return P()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=C(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=y,c(_,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(L.prototype),c(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(_),c(_,s,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},c36b:function(t,e,r){"use strict";r("2409")},ed6d:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"page-title-box d-flex align-items-center justify-content-between"},[r("h4",{staticClass:"mb-0"},[t._v(t._s(t.title))]),r("div",{staticClass:"page-title-right"},[r("b-breadcrumb",{staticClass:"m-0",attrs:{items:t.items}})],1)])])])},o=[],a={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},i=a,s=r("2877"),c=Object(s["a"])(i,n,o,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-04440e78.fa87ba3e.js.map