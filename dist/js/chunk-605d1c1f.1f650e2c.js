(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-605d1c1f"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7");function o(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(o,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}},3439:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addUser"},[t.error?r("b-alert",{staticClass:"mt-2",attrs:{variant:"danger",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.error)+" ")]):t._e(),t.success?r("b-alert",{staticClass:"mt-2",attrs:{variant:"success",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v(" "+t._s(t.success)+" ")]):t._e(),r("b-row",{staticClass:"d-flex justify-content-center mt-4"},[r("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[r("div",{staticClass:"container"},[r("form",[r("div",{staticClass:"container p-4"},[r("div",{staticClass:"row form-group justify-content-center"},[r("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"},[r("label",{attrs:{for:"nama"}},[t._v("Nama :")])]),r("div",{staticClass:"col-lg-8 col-md-8 col-sm-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Masukan Nama User"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})])]),r("div",{staticClass:"row form-group justify-content-center"},[r("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"},[r("label",{attrs:{for:"email"}},[t._v("Email :")])]),r("div",{staticClass:"col-lg-8 col-md-8 col-sm-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Masukan email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),r("div",{staticClass:"row form-group justify-content-center"},[r("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"},[r("label",{attrs:{for:"password"}},[t._v("Password :")])]),r("div",{staticClass:"col-lg-8 col-md-8 col-sm-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Masukan Password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),r("div",{staticClass:"row form-group justify-content-center"},[r("div",{staticClass:"col-lg-3 col-md-3 col-sm-12 d-flex align-items-center"},[r("label",{attrs:{for:"c_password"}},[t._v("Konfirmasi Password :")])]),r("div",{staticClass:"col-lg-8 col-md-8 col-sm-12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.c_password,expression:"form.c_password"}],staticClass:"form-control",attrs:{type:"password",id:"c_password",placeholder:"Konfirmasi password"},domProps:{value:t.form.c_password},on:{input:function(e){e.target.composing||t.$set(t.form,"c_password",e.target.value)}}})])]),r("div",{staticClass:"col-lg-12 w-100 text-center"},[r("button",{staticClass:"btn btn-primary",on:{click:t.onSubmit}},[t.loading?r("div",[r("b-spinner",{attrs:{small:"",variant:"primary"}}),t._v(" Menyimpan... ")],1):t._e(),t.loading?t._e():r("span",[r("i",{staticClass:"fa fa-save"}),t._v(" Simpan")])])])])])])])],1)],1)},n=[],a=r("1da1"),i=(r("96cf"),r("01e3")),s=r("bc3a"),c=r.n(s),l={data:function(){return{urlRegister:"",showDismissibleAlert:!0,error:"",success:"",loading:!1,form:{username:"",email:"",password:"",c_password:""},title:"Tambah Admin",items:[{text:"Admin"},{text:"Administrator"},{text:"Tambah Admin",active:!0}]}},created:function(){var t=localStorage.mainUrl;this.urlRegister=t+"/register"},methods:{onSubmit:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.preventDefault(),e.error="",e.success="",e.loading=!0,o=e.form.password,n=e.form.c_password,o==n){r.next=15;break}console.log("password beda"),e.loading=!1,e.showDismissibleAlert=!0,e.error="Password tidak sama",e.form.password="",e.form.c_password="",r.next=38;break;case 15:if(!(o.length<6)){r.next=24;break}console.log("pass min 6"),e.form.password="",e.form.c_password="",e.loading=!1,e.showDismissibleAlert=!0,e.error="Password minimal 6 Karakter",r.next=38;break;case 24:return r.prev=24,r.next=27,c.a.post(e.urlRegister,{username:e.form.username,email:e.form.email,password:e.form.password});case 27:console.log("berhasil"),e.loading=!1,e.success="Berhasil Mendaftarkan Admin!!!",e.$root.$emit("getUser"),r.next=38;break;case 33:r.prev=33,r.t0=r["catch"](24),console.log(r.t0),e.loading=!1,e.error="Email sudah terdaftar!!!";case 38:case"end":return r.stop()}}),r,null,[[24,33]])})))()}},components:{BSpinner:i["a"]}},u=l,f=(r("9fb7"),r("2877")),m=Object(f["a"])(u,o,n,!1,null,"f3cf76ca",null);e["default"]=m.exports},4008:function(t,e,r){},"96cf":function(t,e,r){var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var n=e&&e.prototype instanceof v?e:v,a=Object.create(n.prototype),i=new A(o||[]);return a._invoke=C(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var f="suspendedStart",m="suspendedYield",d="executing",h="completed",p={};function v(){}function g(){}function w(){}var y={};c(y,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&o.call(x,a)&&(y=x);var _=w.prototype=v.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(n,a,i,s){var c=u(t[n],t,a);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var n;function a(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}this._invoke=a}function C(t,e,r){var o=f;return function(n,a){if(o===d)throw new Error("Generator is already running");if(o===h){if("throw"===n)throw a;return O()}r.method=n,r.arg=a;while(1){var i=r.delegate;if(i){var s=E(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=d;var c=u(t,e,r);if("normal"===c.type){if(o=r.done?h:m,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=h,r.method="throw",r.arg=c.arg)}}}function E(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=u(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;var a=n.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return g.prototype=w,c(_,"constructor",w),c(w,"constructor",g),g.displayName=c(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),c(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new k(l(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),c(_,s,"Generator"),c(_,a,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=N,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;P(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:N(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=o}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}},"9fb7":function(t,e,r){"use strict";r("4008")}}]);
//# sourceMappingURL=chunk-605d1c1f.1f650e2c.js.map