(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5525fd0","chunk-11529b74"],{1169:function(a,t,n){"use strict";n("2996")},"1da1":function(a,t,n){"use strict";n.d(t,"a",(function(){return e}));n("d3b7");function i(a,t,n,i,e,r,s){try{var l=a[r](s),o=l.value}catch(u){return void n(u)}l.done?t(o):Promise.resolve(o).then(i,e)}function e(a){return function(){var t=this,n=arguments;return new Promise((function(e,r){var s=a.apply(t,n);function l(a){i(s,e,r,l,o,"next",a)}function o(a){i(s,e,r,l,o,"throw",a)}l(void 0)}))}}},2996:function(a,t,n){},5724:function(a,t,n){},"96cf":function(a,t,n){var i=function(a){"use strict";var t,n=Object.prototype,i=n.hasOwnProperty,e="function"===typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",s=e.asyncIterator||"@@asyncIterator",l=e.toStringTag||"@@toStringTag";function o(a,t,n){return Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),a[t]}try{o({},"")}catch(O){o=function(a,t,n){return a[t]=n}}function u(a,t,n,i){var e=t&&t.prototype instanceof g?t:g,r=Object.create(e.prototype),s=new L(i||[]);return r._invoke=x(a,n,s),r}function c(a,t,n){try{return{type:"normal",arg:a.call(t,n)}}catch(O){return{type:"throw",arg:O}}}a.wrap=u;var d="suspendedStart",k="suspendedYield",m="executing",h="completed",p={};function g(){}function f(){}function b(){}var v={};o(v,r,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(E([])));w&&w!==n&&i.call(w,r)&&(v=w);var _=b.prototype=g.prototype=Object.create(v);function I(a){["next","throw","return"].forEach((function(t){o(a,t,(function(a){return this._invoke(t,a)}))}))}function C(a,t){function n(e,r,s,l){var o=c(a[e],a,r);if("throw"!==o.type){var u=o.arg,d=u.value;return d&&"object"===typeof d&&i.call(d,"__await")?t.resolve(d.__await).then((function(a){n("next",a,s,l)}),(function(a){n("throw",a,s,l)})):t.resolve(d).then((function(a){u.value=a,s(u)}),(function(a){return n("throw",a,s,l)}))}l(o.arg)}var e;function r(a,i){function r(){return new t((function(t,e){n(a,i,t,e)}))}return e=e?e.then(r,r):r()}this._invoke=r}function x(a,t,n){var i=d;return function(e,r){if(i===m)throw new Error("Generator is already running");if(i===h){if("throw"===e)throw r;return S()}n.method=e,n.arg=r;while(1){var s=n.delegate;if(s){var l=B(s,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=m;var o=c(a,t,n);if("normal"===o.type){if(i=n.done?h:k,o.arg===p)continue;return{value:o.arg,done:n.done}}"throw"===o.type&&(i=h,n.method="throw",n.arg=o.arg)}}}function B(a,n){var i=a.iterator[n.method];if(i===t){if(n.delegate=null,"throw"===n.method){if(a.iterator["return"]&&(n.method="return",n.arg=t,B(a,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var e=c(i,a.iterator,n.arg);if("throw"===e.type)return n.method="throw",n.arg=e.arg,n.delegate=null,p;var r=e.arg;return r?r.done?(n[a.resultName]=r.value,n.next=a.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function K(a){var t={tryLoc:a[0]};1 in a&&(t.catchLoc=a[1]),2 in a&&(t.finallyLoc=a[2],t.afterLoc=a[3]),this.tryEntries.push(t)}function j(a){var t=a.completion||{};t.type="normal",delete t.arg,a.completion=t}function L(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(K,this),this.reset(!0)}function E(a){if(a){var n=a[r];if(n)return n.call(a);if("function"===typeof a.next)return a;if(!isNaN(a.length)){var e=-1,s=function n(){while(++e<a.length)if(i.call(a,e))return n.value=a[e],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:S}}function S(){return{value:t,done:!0}}return f.prototype=b,o(_,"constructor",b),o(b,"constructor",f),f.displayName=o(b,l,"GeneratorFunction"),a.isGeneratorFunction=function(a){var t="function"===typeof a&&a.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,b):(a.__proto__=b,o(a,l,"GeneratorFunction")),a.prototype=Object.create(_),a},a.awrap=function(a){return{__await:a}},I(C.prototype),o(C.prototype,s,(function(){return this})),a.AsyncIterator=C,a.async=function(t,n,i,e,r){void 0===r&&(r=Promise);var s=new C(u(t,n,i,e),r);return a.isGeneratorFunction(n)?s:s.next().then((function(a){return a.done?a.value:s.next()}))},I(_),o(_,l,"Generator"),o(_,r,(function(){return this})),o(_,"toString",(function(){return"[object Generator]"})),a.keys=function(a){var t=[];for(var n in a)t.push(n);return t.reverse(),function n(){while(t.length){var i=t.pop();if(i in a)return n.value=i,n.done=!1,n}return n.done=!0,n}},a.values=E,L.prototype={constructor:L,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!a)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var a=this.tryEntries[0],t=a.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var n=this;function e(i,e){return l.type="throw",l.arg=a,n.next=i,e&&(n.method="next",n.arg=t),!!e}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],l=s.completion;if("root"===s.tryLoc)return e("end");if(s.tryLoc<=this.prev){var o=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(o&&u){if(this.prev<s.catchLoc)return e(s.catchLoc,!0);if(this.prev<s.finallyLoc)return e(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return e(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return e(s.finallyLoc)}}}},abrupt:function(a,t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc<=this.prev&&i.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var r=e;break}}r&&("break"===a||"continue"===a)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=a,s.arg=t,r?(this.method="next",this.next=r.finallyLoc,p):this.complete(s)},complete:function(a,t){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&t&&(this.next=t),p},finish:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===a)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===a){var i=n.completion;if("throw"===i.type){var e=i.arg;j(n)}return e}}throw new Error("illegal catch attempt")},delegateYield:function(a,n,i){return this.delegate={iterator:E(a),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),p}},a}(a.exports);try{regeneratorRuntime=i}catch(e){"object"===typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},"9dbb":function(a,t,n){"use strict";n.r(t);var i=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"kbbi"},[n("Kbbi")],1)},e=[],r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"kbbi-search mainMenu"},[n("div",{staticClass:"page-title search-form",staticStyle:{padding:"4rem 0"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row m-0 justify-content-left"},[n("div",{staticClass:"col-lg-8 col-md-8"},[a._m(0),n("form",{staticClass:"search-big-form shadows",on:{submit:a.onSubmit}},[n("div",{staticClass:"row m-0"},[n("div",{staticClass:"col-lg-9 col-md-9 col-sm-9 p-0"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.keyword,expression:"keyword"}],staticClass:"form-control l-radius b-0 b-r",attrs:{type:"text",placeholder:"Kata",required:""},domProps:{value:a.keyword},on:{input:function(t){t.target.composing||(a.keyword=t.target.value)}}})])]),n("div",{staticClass:"col-lg-3 col-md-3 col-sm-3 p-0"},[n("button",{staticClass:"btn theme-bg r-radius full-width",attrs:{type:"submit"}},[a.loading?n("div",[n("b-spinner",{attrs:{small:"",variant:"primary"}})],1):a._e(),a.loading?a._e():n("span",[a._v("Cari")])])])])]),n("b-alert",{staticClass:"mt-4",attrs:{variant:"danger",dismissible:""},model:{value:a.showDismissibleAlert,callback:function(t){a.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[a._v(" "+a._s(a.error)+" ")])],1)])])]),n("section",{staticClass:"gray-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 col-md-12 col-sm-12"},[n("Main",{attrs:{dataIklan:a.dataIklan}})],1),n("div",{staticClass:"col-lg-4 col-md-12 col-sm-12"},[n("Side",{attrs:{dataIklan:a.dataIklan}})],1)])])])])},s=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"guide"},[a._v(" Halaman ini khusus mencari arti kata di kamus KBBI. Jika ingin mencari makna di kamus lain, silahkan pindah halaman terlebih dahulu melalui menu di atas ")])])}],l=n("1da1"),o=(n("96cf"),n("bc3a")),u=n.n(o),c=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"box-detail"},[n("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),n("div",{staticClass:"ad-container"},[n("InFeedAdsense",{attrs:{"data-ad-client":"ca-pub-9333981154484827","data-ad-slot":"5683973304","data-ad-format":"auto","data-full-width-responsive":"true"}})],1),n("div",{staticClass:"box-slice"},[a._m(0),n("div",{staticClass:"box-detail-single"},[n("div",{staticClass:"cardIklan"},[a.iklan2?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()])]),a._m(1)])])},d=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"box-detail-single"},[n("h2",[a._v("Tentang KBBI daring")]),n("p",[a._v(" Aplikasi Kamus Besar Bahasa Indonesia (KBBI) ini merupakan KBBI Daring (Dalam Jaringan / Online tidak resmi) yang dibuat untuk memudahkan pencarian, penggunaan dan pembacaan arti kata (lema/sub lema). Berbeda dengan beberapa situs web (website) sejenis, kami berusaha memberikan berbagai fitur lebih, seperti kecepatan akses, tampilan dengan berbagai warna pembeda untuk jenis kata, tampilan yang pas untuk segala perambah web baik komputer desktop, laptop maupun telepon pintar dan sebagainya. Fitur-fitur selengkapnya bisa dibaca dibagian Fitur KBBI Daring. ")]),n("p",[a._v(' Database Utama KBBI Daring ini masih mengacu pada KBBI Daring Edisi III, sehingga isi (kata dan arti) tersebut merupakan Hak Cipta Badan Pengembangan dan Pembinaan Bahasa, Kemdikbud (dahulu Pusat Bahasa). Diluar data utama, kami berusaha menambah kata-kata baru yang akan diberi keterangan tambahan dibagian akhir arti atau definisi dengan "Definisi Eksternal". Semoga semakin menambah khazanah referensi pendidikan di Indonesia dan bisa memberikan manfaat yang luas. Aplikasi ini lebih bersifat sebagai arsip saja, agar pranala/tautan (link) yang mengarah ke situs ini tetap tersedia. Untuk mencari kata dari KBBI edisi V (terbaru), silakan merujuk ke website resmi di '),n("a",{attrs:{href:"kbbi.kemdikbud.go.id"}},[a._v("kbbi.kemdikbud.go.id")])]),n("h3",[a._v("Fitur KBBI Daring")]),n("ul",[n("li",[a._v("Pencarian satu kata atau banyak kata sekaligus")]),n("li",[a._v("Tampilan yang sederhana dan ringan untuk kemudahan penggunaan")]),n("li",[a._v(" Proses pengambilan data yang sangat cepat, pengguna tidak perlu memuat ulang (reload/refresh) jendela atau laman web (website) untuk mencari kata berikutnya ")]),n("li",[a._v(" Arti kata ditampilkan dengan warna yang memudahkan mencari lema maupun sub lema. Berikut beberapa penjelasannya: ")]),n("ol",[n("li",[a._v(" Jenis kata atau keterangan istilah semisal n (nomina), v (verba) dengan warna merah muda (pink) dengan garis bawah titik-titik. Arahkan mouse untuk melihat keterangannya (belum semua ada keterangannya) ")]),n("li",[a._v(" Arti ke-1, 2, 3 dan seterusnya ditandai dengan huruf tebal dengan latar lingkaran ")]),n("li",[a._v("Contoh penggunaan lema/sub-lema ditandai dengan warna biru")]),n("li",[a._v("Contoh dalam peribahasa ditandai dengan warna oranye")]),n("li",[a._v(' Ketika diklik hasil dari daftar kata "Memuat", hasil yang sesuai dengan kata pencarian akan ditandai dengan latar warna kuning ')])]),n("li",[a._v(" Pranala (Pretty Permalink/Link) yang indah dan mudah diingat untuk definisi kata, misalnya : ")]),n("ol",[n("li",[a._v(" Kata 'rumah' akan mempunyai pranala (link) di https://kbbi.web.id/rumah ")]),n("li",[a._v(" Kata 'pintar' akan mempunyai pranala (link) di https://kbbi.web.id/pintar ")]),n("li",[a._v(" Kata 'komputer' akan mempunyai pranala (link) di https://kbbi.web.id/komputer ")])]),n("li",[a._v(" Sehingga diharapkan pranala (link) tersebut dapat digunakan sebagai referensi dalam penulisan, baik di dalam jaringan maupun di luar jaringan. ")]),n("li",[a._v(" Aplikasi dikembangkan dengan konsep Responsive Design, artinya tampilan situs web (website) KBBI ini akan cocok di berbagai media, misalnya smartphone ( Tablet pc, iPad, iPhone, Tab), termasuk komputer dan netbook/laptop. Tampilan web akan menyesuaikan dengan ukuran layar yang digunakan. ")]),n("li",[a._v("Tambahan kata-kata baru diluar KBBI edisi III")]),n("li",[a._v(" Penulisan singkatan di bagian definisi seperti misalnya: yg, dng, dl, tt, dp, dr dan lainnya ditulis lengkap, tidak seperti yang terdapat di KBBI PusatBahasa. ")])]),n("h3",[a._v("Informasi Tambahan")]),n("p",[a._v(' Tidak semua hasil pencarian, terutama jika kata yang dicari terdisi dari 2 atau 3 huruf, akan ditampilkan semua. Jika hasil pencarian dari daftar kata "Memuat" sangat banyak, maka hasil yang dapat langsung di klik akan dibatasi jumlahnya. Selain itu, untuk pencarian banyak kata sekaligus, sistem hanya akan mencari kata yang terdiri dari 4 huruf atau lebih. Misalnya yang dicari adalah "air, minyak, larut", maka hasil pencarian yang akan ditampilkan adalah minyak dan larut saja. ')]),n("p",[a._v(' Untuk pencarian banyak kata sekaligus, bisa dilakukan dengan memisahkan masing-masing kata dengan tanda koma, misalnya: ajar,program,komputer (untuk mencari kata ajar, program dan komputer). Jika ditemukan, hasil utama akan ditampilkan dalam kolom "kata dasar" dan hasil yang berupa kata turunan akan ditampilkan dalam kolom "Memuat". Pencarian banyak kata ini hanya akan mencari kata dengan minimal panjang 4 huruf, jika kata yang panjangnya 2 atau 3 huruf maka kata tersebut akan diabaikan. ')]),n("p",[a._v(" Edisi online/daring ini merupakan alternatif versi KBBI Offline yang sudah dibuat sebelumnya (dengan kosakata yang lebih banyak). Bagi yang ingin mendapatkan KBBI Offline (tidak memerlukan koneksi internet), silakan mengunjungi halaman web ini KBBI Offline. Jika ada masukan, saran dan perbaikan terhadap kbbi daring ini, silakan mengirimkan ke alamat email: ebta.setiawan || gmail || com ")]),n("p",[a._v(" Kami sebagai pengelola website berusaha untuk terus menyaring iklan yang tampil agar tetap menampilkan iklan yang pantas. Tetapi jika anda melihat iklan yang tidak sesuai atau tidak pantas di website kbbi.web.id, ini silakan klik Laporkan Iklan ")])])},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"box-detail-single flexeo"},[n("div",{staticClass:"box-detail-single-flex"},[n("ul",{staticClass:"shares-makna"},[n("li",[a._v("Bagikan Makna")]),n("li",[n("a",{staticClass:"share fb",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook"})])]),n("li",[n("a",{staticClass:"share tw",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter"})])]),n("li",[n("a",{staticClass:"share gp",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-google"})])])])])])}],k={props:["dataIklan"],data:function(){return{iklan1:"",iklan2:""}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan.atasJudul[0].images,this.iklan2=t+this.dataIklan.atasShared[0].images}},m=k,h=n("2877"),p=Object(h["a"])(m,c,d,!1,null,"6615501f",null),g=p.exports,f=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"sidePage"},[n("div",{staticClass:"kartu-kata light-box p-4"},[n("h4",[a._v("Kamus Istilah")]),a._l(a.randomKata.istilah,(function(t){return n("ul",{key:t.id_glos},[n("li",[n("a",{attrs:{href:"#"}},[a._v(a._s(t.judul_glos))])])])}))],2),n("div",{staticClass:"kartu-kata light-box p-4"},[n("div",{staticClass:"cardIklan"},[a.iklan1?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()])]),n("div",{staticClass:"kartu-kata light-box p-4"},[n("h4",[a._v("Kamus KBBI")]),a._l(a.randomKata.kbbi,(function(t){return n("ul",{key:t._id},[n("li",[n("a",{attrs:{href:"#"}},[a._v(a._s(t.kata))])])])}))],2),n("div",{staticClass:"kartu-kata light-box p-4"},[n("div",{staticClass:"cardIklan"},[a.iklan2?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()])]),n("div",{staticClass:"kartu-kata light-box p-4"},[n("h4",[a._v("Kamus Eng-Ind")]),a._l(a.randomKata.engIn,(function(t){return n("ul",{key:t.id},[n("li",[n("a",{attrs:{href:"#"}},[a._v(a._s(t.judul_artikel))])])])}))],2),n("div",{staticClass:"kartu-kata light-box p-4"},[n("div",{staticClass:"cardIklan"},[a.iklan3?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])])])},b=[],v={props:["dataIklan"],data:function(){return{iklan1:"",iklan2:"",iklan3:"",imgData:[],randomKata:[]}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan.sideAtas[0].images,this.iklan2=t+this.dataIklan.sideTengah[0].images,this.iklan3=t+this.dataIklan.sideBawah[0].images,this.randomKata=JSON.parse(localStorage.randomKata)}},y=v,w=Object(h["a"])(y,f,b,!1,null,"12bb68b7",null),_=w.exports,I={data:function(){return{keyword:"",error:"",loading:!1,dataIklan:[],showDismissibleAlert:!1,mainUrl:"",urlReport:"",urlFind:""}},components:{Main:g,Side:_},created:function(){this.mainUrl=localStorage.mainUrl,this.urlReport=this.mainUrl+"/report",this.urlFind=this.mainUrl+"/find/",this.dataIklan=JSON.parse(localStorage.dataIklan)},methods:{onSubmit:function(a){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var i,e,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.preventDefault(),t.showDismissibleAlert=!1,n.prev=2,t.loading=!0,n.next=6,u.a.get(t.urlFind+t.keyword);case 6:if(i=n.sent,e=i.data,r=e.kbbi.length,0!==r){n.next=17;break}return t.error="Data tidak ditemukan!",t.showDismissibleAlert=!0,t.loading=!1,n.next=15,u.a.post(t.urlReport,{kata:t.keyword,bidang:"KBBI"});case 15:n.next=18;break;case 17:window.location.href="/cari/kbbi/"+t.keyword;case 18:n.next=23;break;case 20:n.prev=20,n.t0=n["catch"](2),console.log(n.t0);case 23:case"end":return n.stop()}}),n,null,[[2,20]])})))()}}},C=I,x=(n("b9e7"),Object(h["a"])(C,r,s,!1,null,"741d40b6",null)),B=x.exports,K={metaInfo:function(){return{title:"Kamus KBBI Terjemahan Istilah dan Artinama - KamusKBBI.id"}},components:{Kbbi:B}},j=K,L=(n("1169"),Object(h["a"])(j,i,e,!1,null,"a20828b8",null));t["default"]=L.exports},b9e7:function(a,t,n){"use strict";n("5724")}}]);
//# sourceMappingURL=chunk-b5525fd0.5c49fe52.js.map