(function(t){function n(n){for(var e,i,s=n[0],u=n[1],l=n[2],o=0,d=[];o<s.length;o++)i=s[o],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);h&&h(n);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,n=0;n<r.length;n++){for(var a=r[n],e=!0,i=1;i<a.length;i++){var s=a[i];0!==c[s]&&(e=!1)}e&&(r.splice(n--,1),t=u(u.s=a[0]))}return t}var e={},i={app:0},c={app:0},r=[];function s(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-02653bae":"802fd272","chunk-24b391c3":"8c6de2b0","chunk-26735d84":"5c3ab216","chunk-2d089c04":"224eb8cc","chunk-11529b74":"949b9080","chunk-2d0f0b66":"8935f78d","chunk-2d2a0558":"baa90332","chunk-3b804cc6":"9dc3fcc0","chunk-4545fec4":"99557604","chunk-6c13b4e0":"8c92b6b2","chunk-6fcad2a5":"d7e6d108","chunk-0bc62a55":"24b64014","chunk-0d6ea89b":"eab91988","chunk-5fd4bbfe":"3b7450f6","chunk-c06f9910":"e702ee03","chunk-304b9ae3":"bed7c662","chunk-098ef530":"da959344","chunk-4b137dd6":"30a6439a","chunk-d9d065b2":"0b0ae1a2","chunk-925bf09e":"8f7892b0","chunk-725daeda":"9fd7f0d7","chunk-7cfb9844":"02200f5b","chunk-7eade42c":"14d880da","chunk-807b05c2":"0885e09d","chunk-91e7c210":"a0c27fab","chunk-dc71b0a2":"de055699"}[t]+".js"}function u(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(t){var n=[],a={"chunk-24b391c3":1,"chunk-26735d84":1,"chunk-2d089c04":1,"chunk-2d2a0558":1,"chunk-3b804cc6":1,"chunk-4545fec4":1,"chunk-6c13b4e0":1,"chunk-0bc62a55":1,"chunk-0d6ea89b":1,"chunk-5fd4bbfe":1,"chunk-c06f9910":1,"chunk-098ef530":1,"chunk-4b137dd6":1,"chunk-d9d065b2":1,"chunk-925bf09e":1,"chunk-725daeda":1,"chunk-7cfb9844":1,"chunk-7eade42c":1,"chunk-807b05c2":1,"chunk-91e7c210":1,"chunk-dc71b0a2":1};i[t]?n.push(i[t]):0!==i[t]&&a[t]&&n.push(i[t]=new Promise((function(n,a){for(var e="css/"+({}[t]||t)+"."+{"chunk-02653bae":"31d6cfe0","chunk-24b391c3":"93a25159","chunk-26735d84":"abb8e25a","chunk-2d089c04":"96313519","chunk-11529b74":"31d6cfe0","chunk-2d0f0b66":"31d6cfe0","chunk-2d2a0558":"0a6c4017","chunk-3b804cc6":"139bc947","chunk-4545fec4":"323a1706","chunk-6c13b4e0":"46bb8682","chunk-6fcad2a5":"31d6cfe0","chunk-0bc62a55":"7449a8e2","chunk-0d6ea89b":"2589af3d","chunk-5fd4bbfe":"19887373","chunk-c06f9910":"7505d0f5","chunk-304b9ae3":"31d6cfe0","chunk-098ef530":"e3335c86","chunk-4b137dd6":"32f1745b","chunk-d9d065b2":"ab0e486e","chunk-925bf09e":"1969afc2","chunk-725daeda":"7310c570","chunk-7cfb9844":"7d6d3a04","chunk-7eade42c":"d9d1fa51","chunk-807b05c2":"8bfa5dcc","chunk-91e7c210":"90876dff","chunk-dc71b0a2":"5885bfb6"}[t]+".css",c=u.p+e,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],o=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===c))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],o=l.getAttribute("data-href");if(o===e||o===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var e=n&&n.target&&n.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+e+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=e,delete i[t],h.parentNode.removeChild(h),a(r)},h.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){i[t]=0})));var e=c[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,a){e=c[t]=[n,a]}));n.push(e[2]=r);var l,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=s(t);var d=new Error;l=function(n){o.onerror=o.onload=null,clearTimeout(h);var a=c[t];if(0!==a){if(a){var e=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+e+": "+i+")",d.name="ChunkLoadError",d.type=e,d.request=i,a[1](d)}c[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:o})}),12e4);o.onerror=o.onload=l,document.head.appendChild(o)}return Promise.all(n)},u.m=t,u.c=e,u.d=function(t,n,a){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)u.d(a,e,function(n){return t[n]}.bind(null,e));return a},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var h=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"392c":function(t,n,a){},4360:function(t,n,a){"use strict";var e=a("2b0e"),i=a("2f62"),c=a("5935");e["default"].use(i["a"]),n["a"]=new i["a"].Store({state:{mainUrl:"",records:[{_id:"",kata:"",keterangan:""}],artiNama:[{id:"",judul_nama:"",kelamin_nama:null,asal_nama:"",isi_nama:"",perfix_nama:""}],glosarium:[{id_glos:"",judul_glos:"",bid_glos:"",isi_glos:"",judul_seo:"",perfix_glos:""}],adv:[{title:"",image:"",detail:""}],engIn:[{judul_artikel:"",isi_artikel:""}],inEng:[{judul_artikel:"",isi_artikel:""}]},getters:{getField:c["a"]},mutations:{updateField:c["c"],addRecordsRow:function(t){t.records.push({kata:"",keterangan:""})},addArtiNamaRow:function(t){t.artiNama.push({judul_nama:"",kelamin_nama:null,asal_nama:"",isi_nama:"",perfix_nama:""})},addGlosRow:function(t){t.glosarium.push({judul_glos:"",bid_glos:"",isi_glos:"",judul_seo:"",perfix_glos:""})},addEngin:function(t){t.engIn.push({judul_artikel:"",isi_artikel:""})},addInEng:function(t){t.inEng.push({judul_artikel:"",isi_artikel:""})}},actions:{},modules:{}})},"4ad2":function(t,n,a){"use strict";a("fe62")},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],r={data:function(){return{mainUrl:"https://server.kamuskbbi.id"}},mounted:function(){localStorage.setItem("mainUrl",this.mainUrl)}},s=r,u=(a("5c0b"),a("2877")),l=Object(u["a"])(s,i,c,!1,null,null,null),o=l.exports,d=a("5f5b"),h=a("5886"),b=a("1157"),f=a.n(b),m=a("58ca"),k=(a("4413"),a("7e7d"),a("c28b")),p=a.n(k),v=a("4360"),g=a("a18c"),C=a("bc3a"),_=a.n(C),w=a("ecee"),y=a("c074"),x=a("ad3d");w["c"].add(y["a"]),e["default"].component("font-awesome-icon",x["a"]),e["default"].config.productionTip=!1,e["default"].use(d["a"]),e["default"].use(m["a"]),e["default"].use(p.a),e["default"].use(_.a),e["default"].use(h["a"]),new e["default"]({router:g["a"],store:v["a"],jQuery:f.a,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,n,a){"use strict";a("9c0c")},"7e7d":function(t,n,a){},"921a":function(t,n,a){t.exports=a.p+"img/logo-kbbi.0d654383.png"},"9c0c":function(t,n,a){},a18c:function(t,n,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0");var e=a("2b0e"),i=a("8c4f"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("body",{staticClass:"blue-skin"},[e("div",{attrs:{id:"main-wrapper"}},[e("div",{staticClass:"header header-transparent dark-text"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"},[e("nav",{staticClass:"navigation navigation-landscape navbar-expand-lg",attrs:{id:"navigation"}},[e("div",{staticClass:"nav-header"},[e("router-link",{staticClass:"nav-brand",attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{alt:"",src:a("921a")}})]),e("div",{staticClass:"d-flex d-md-flex d-lg-none align-items-center"},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.my-sidebar",modifiers:{"my-sidebar":!0}}],staticClass:"ml-auto",attrs:{variant:"white"}},[e("span",{staticClass:"navbar-toggler-icon",staticStyle:{color:"black"}},[e("i",{staticClass:"ri-menu-line align-middle"})])])],1),e("b-sidebar",{attrs:{id:"my-sidebar",title:"Kamus Kbbi.id","bg-variant":"dark","text-variant":"white"}},[e("div",{staticClass:"px-3 py-2"},[e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("Home"),e("span",{staticClass:"submenu-indicator"})]),e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/kbbi"}},[t._v("KBBI"),e("span",{staticClass:"submenu-indicator"})]),e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/terjemahan"}},[t._v("Terjemahan"),e("span",{staticClass:"submenu-indicator"})]),e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/glossarum"}},[t._v("Istilah"),e("span",{staticClass:"submenu-indicator"})]),e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/artinama"}},[t._v("Arti Nama"),e("span",{staticClass:"submenu-indicator"})]),e("router-link",{staticClass:"nav-link text-white",attrs:{to:"/admin"}},[t._v("Admin"),e("span",{staticClass:"submenu-indicator"})])],1)])],1),e("div",{staticClass:"nav-menus-wrapper collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"nav-menu navbar-nav"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link txt-black",attrs:{to:"/"}},[t._v("Home"),e("span",{staticClass:"submenu-indicator"})])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link txt-black",attrs:{to:"/kbbi"}},[t._v("KBBI"),e("span",{staticClass:"submenu-indicator"})])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link txt-black",attrs:{to:"/artinama"}},[t._v("Arti Nama"),e("span",{staticClass:"submenu-indicator"})])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link txt-black",attrs:{to:"/glossarium"}},[t._v("Istilah"),e("span",{staticClass:"submenu-indicator"})])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link txt-black",attrs:{to:"/terjemahan"}},[t._v("Terjemahan"),e("span",{staticClass:"submenu-indicator"})])],1),e("li",{staticClass:"ml-auto nav-item"},[e("router-link",{staticClass:"nav-link txt-black",attrs:{to:"/admin"}},[t._v("Admin"),e("span",{staticClass:"submenu-indicator"})])],1)])])])])])])]),e("div",{staticClass:"clearfix"}),e("router-view"),e("Footer")],1)])},r=[],s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("footer",{staticClass:"dark-footer skin-dark-footer"},[a("div",{staticClass:"container"},[a("b-row",[a("b-col",{staticClass:"text-left",attrs:{lg:"6",md:"6"}}),a("b-col",{staticClass:"text-right mt-4 mb-2",attrs:{lg:"6",md:"6"}},[a("ul",{staticClass:"footer-bottom-social m-0"},[a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),a("li",[a("router-link",{attrs:{to:"/disclaimer"}},[t._v("Disclaimer")])],1),a("li",[a("router-link",{attrs:{to:"/privacy"}},[t._v("Privacy Policy")])],1),a("li",[a("router-link",{attrs:{to:"contact"}},[t._v("Contact Us")])],1)])])],1),t._m(0)],1)])},u=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"footer-bottom"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 text-left"},[a("p",{staticClass:"mb-0"},[t._v(" © 2021 KamusKbbi.id Designd By "),a("a",{attrs:{href:"#"}},[t._v("KamusKbbi Official")]),t._v(" All Rights Reserved ")])]),a("div",{staticClass:"col-lg-6 col-md-6 text-right"},[a("ul",{staticClass:"footer-bottom-social"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram"})])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-linkedin"})])])])])])])}],l={},o=l,d=(a("4ad2"),a("2877")),h=Object(d["a"])(o,s,u,!1,null,"5a514be0",null),b=h.exports,f={components:{Footer:b}},m=f,k=(a("c072"),Object(d["a"])(m,c,r,!1,null,null,null)),p=k.exports;e["default"].use(i["a"]);var v=[{path:"/",component:p,children:[{path:"/kbbi",component:function(){return a.e("chunk-6c13b4e0").then(a.bind(null,"9dbb"))}},{path:"/",name:"Home",component:function(){return a.e("chunk-7eade42c").then(a.bind(null,"bb51"))}},{path:"/cari/:bidang/:kata",name:"KataDetail",component:function(){return a.e("chunk-dc71b0a2").then(a.bind(null,"c63a"))}},{path:"/artinama",name:"artinama",component:function(){return a.e("chunk-4545fec4").then(a.bind(null,"1a0b"))}},{path:"/glossarium",name:"Glossarium",component:function(){return a.e("chunk-3b804cc6").then(a.bind(null,"2a2b"))}},{path:"/terjemahan",name:"terjemahan",component:function(){return a.e("chunk-24b391c3").then(a.bind(null,"4586"))}}]},{path:"/login",name:"Login",component:function(){return a.e("chunk-807b05c2").then(a.bind(null,"d60c"))}},{path:"/admin",name:"Admin",component:function(){return a.e("chunk-26735d84").then(a.bind(null,"5ace"))},meta:{hideNavbar:!0,requiresAuth:!0},children:[{path:"/admin",component:function(){return a.e("chunk-2d0f0b66").then(a.bind(null,"9e15"))}},{path:"/admin/user",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-304b9ae3"),a.e("chunk-098ef530")]).then(a.bind(null,"8038"))}},{path:"/admin/addUser",component:function(){return a.e("chunk-7cfb9844").then(a.bind(null,"3439"))}},{path:"/admin/addword",component:function(){return a.e("chunk-02653bae").then(a.bind(null,"5de5"))}},{path:"/admin/addMultiple",component:function(){return Promise.all([a.e("chunk-2d2a0558"),a.e("chunk-11529b74")]).then(a.bind(null,"3a3d"))}},{path:"/admin/kbbi",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-2d2a0558"),a.e("chunk-c06f9910")]).then(a.bind(null,"25bd"))}},{path:"/admin/eng-ind",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-0d6ea89b")]).then(a.bind(null,"3be8"))}},{path:"/admin/ind-eng",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-0bc62a55")]).then(a.bind(null,"e2ec"))}},{path:"/admin/artinama",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-2d089c04"),a.e("chunk-5fd4bbfe")]).then(a.bind(null,"75b1"))}},{path:"/admin/addNama",component:function(){return Promise.all([a.e("chunk-2d089c04"),a.e("chunk-11529b74")]).then(a.bind(null,"1486"))}},{path:"/admin/glossary",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-925bf09e"),a.e("chunk-725daeda")]).then(a.bind(null,"b1f9"))}},{path:"/admin/addGloss",component:function(){return Promise.all([a.e("chunk-925bf09e"),a.e("chunk-11529b74")]).then(a.bind(null,"c76b"))}},{path:"/admin/report",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-304b9ae3"),a.e("chunk-d9d065b2")]).then(a.bind(null,"38f0"))}},{path:"/admin/adv",component:function(){return Promise.all([a.e("chunk-6fcad2a5"),a.e("chunk-304b9ae3"),a.e("chunk-4b137dd6")]).then(a.bind(null,"fe9e"))}},{path:"/admin/addAdv",component:function(){return a.e("chunk-91e7c210").then(a.bind(null,"7b17"))}}]}],g=new i["a"]({mode:"history",base:"/",routes:v});g.beforeEach((function(t,n,a){if(t.matched.some((function(t){return t.meta.requiresAuth})))if(null==localStorage.getItem("jwt"))a({path:"/login",params:{nextUrl:t.fullPath}});else{var e=JSON.parse(localStorage.getItem("user"));t.matched.some((function(t){return t.meta.isAdmin}))?1==e.isAdmin?a():a({name:"Admin"}):a()}else t.matched.some((function(t){return t.meta.guest}))?null==localStorage.getItem("jwt")?a():a({name:"userboard"}):a()}));n["a"]=g},c072:function(t,n,a){"use strict";a("392c")},fe62:function(t,n,a){}});
//# sourceMappingURL=app.a064bb9d.js.map