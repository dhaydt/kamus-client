(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68cd163f"],{"1da1":function(a,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function e(a,t,n,e,i,r,s){try{var l=a[r](s),o=l.value}catch(u){return void n(u)}l.done?t(o):Promise.resolve(o).then(e,i)}function i(a){return function(){var t=this,n=arguments;return new Promise((function(i,r){var s=a.apply(t,n);function l(a){e(s,i,r,l,o,"next",a)}function o(a){e(s,i,r,l,o,"throw",a)}l(void 0)}))}}},4169:function(a,t,n){"use strict";n("83b8")},4586:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"terjemahanPage"},[n("Terjemahan")],1)},i=[],r=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"kbbi-search mainMenu"},[n("div",{staticClass:"page-title search-form",staticStyle:{padding:"4rem 0"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row m-0 justify-content-left"},[n("div",{staticClass:"col-lg-8 col-md-8"},[a._m(0),n("form",{staticClass:"search-big-form shadows",on:{submit:a.onSubmit}},[n("div",{staticClass:"row m-0"},[n("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 p-0"},[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:a.keyword,expression:"keyword"}],staticClass:"form-control l-radius b-0 b-r",attrs:{type:"text",placeholder:"Kata",required:""},domProps:{value:a.keyword},on:{input:function(t){t.target.composing||(a.keyword=t.target.value)}}})])]),n("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 p-0"},[n("select",{directives:[{name:"model",rawName:"v-model",value:a.selected,expression:"selected"}],staticClass:"form-control",attrs:{required:"",id:"kategori-kamus"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[a._v("Pilih Bahasa tujuan")]),n("option",{attrs:{value:"engin"}},[a._v("Eng-Ind")]),n("option",{attrs:{value:"ineng"}},[a._v("Ind-Eng")])])]),n("div",{staticClass:"col-lg-2 col-md-2 col-sm-12 p-0"},[n("button",{staticClass:"btn theme-bg r-radius full-width",attrs:{type:"submit"}},[a.loading?n("div",[n("b-spinner",{attrs:{small:"",variant:"primary"}})],1):a._e(),a.loading?a._e():n("span",[a._v("Cari")])])])])]),n("b-alert",{staticClass:"mt-4",attrs:{variant:"danger",dismissible:""},model:{value:a.showDismissibleAlert,callback:function(t){a.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[a._v(" "+a._s(a.error)+" ")])],1)])])]),n("section",{staticClass:"gray-light"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 col-md-12 col-sm-12"},[n("Main",{attrs:{dataIklan:a.dataIklan}})],1),n("div",{staticClass:"col-lg-4 col-md-12 col-sm-12"},[n("Side",{attrs:{dataIklan:a.dataIklan}})],1)])])])])},s=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"guide"},[a._v(" Halaman ini khusus mencari arti kata di kamus KBBI. Jika ingin mencari makna di kamus lain, silahkan pindah halaman terlebih dahulu melalui menu di atas ")])])}],l=n("1da1"),o=(n("96cf"),n("bc3a")),u=n.n(o),c=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"box-detail"},[n("div",{staticClass:"cardIklan box-slice p-0"},[a.iklan1?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()]),n("div",{staticClass:"box-slice"},[a._m(0),n("div",{staticClass:"box-detail-single"},[n("div",{staticClass:"cardIklan"},[a.iklan2?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()])]),a._m(1)])])},d=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"box-detail-single"},[n("h2",[a._v("Tentang Terjemahan Bahasa")]),n("p",[a._v(" Aplikasi Kamus Besar Bahasa Indonesia (KBBI) ini merupakan KBBI Daring (Dalam Jaringan / Online tidak resmi) yang dibuat untuk memudahkan pencarian, penggunaan dan pembacaan arti kata (lema/sub lema). Berbeda dengan beberapa situs web (website) sejenis, kami berusaha memberikan berbagai fitur lebih, seperti kecepatan akses, tampilan dengan berbagai warna pembeda untuk jenis kata, tampilan yang pas untuk segala perambah web baik komputer desktop, laptop maupun telepon pintar dan sebagainya. Fitur-fitur selengkapnya bisa dibaca dibagian Fitur KBBI Daring. ")]),n("p",[a._v(' Database Utama KBBI Daring ini masih mengacu pada KBBI Daring Edisi III, sehingga isi (kata dan arti) tersebut merupakan Hak Cipta Badan Pengembangan dan Pembinaan Bahasa, Kemdikbud (dahulu Pusat Bahasa). Diluar data utama, kami berusaha menambah kata-kata baru yang akan diberi keterangan tambahan dibagian akhir arti atau definisi dengan "Definisi Eksternal". Semoga semakin menambah khazanah referensi pendidikan di Indonesia dan bisa memberikan manfaat yang luas. Aplikasi ini lebih bersifat sebagai arsip saja, agar pranala/tautan (link) yang mengarah ke situs ini tetap tersedia. Untuk mencari kata dari KBBI edisi V (terbaru), silakan merujuk ke website resmi di '),n("a",{attrs:{href:"kbbi.kemdikbud.go.id"}},[a._v("kbbi.kemdikbud.go.id")])]),n("h3",[a._v("Fitur KBBI Daring")]),n("ul",[n("li",[a._v("Pencarian satu kata atau banyak kata sekaligus")]),n("li",[a._v("Tampilan yang sederhana dan ringan untuk kemudahan penggunaan")]),n("li",[a._v(" Proses pengambilan data yang sangat cepat, pengguna tidak perlu memuat ulang (reload/refresh) jendela atau laman web (website) untuk mencari kata berikutnya ")]),n("li",[a._v(" Arti kata ditampilkan dengan warna yang memudahkan mencari lema maupun sub lema. Berikut beberapa penjelasannya: ")]),n("ol",[n("li",[a._v(" Jenis kata atau keterangan istilah semisal n (nomina), v (verba) dengan warna merah muda (pink) dengan garis bawah titik-titik. Arahkan mouse untuk melihat keterangannya (belum semua ada keterangannya) ")]),n("li",[a._v(" Arti ke-1, 2, 3 dan seterusnya ditandai dengan huruf tebal dengan latar lingkaran ")]),n("li",[a._v("Contoh penggunaan lema/sub-lema ditandai dengan warna biru")]),n("li",[a._v("Contoh dalam peribahasa ditandai dengan warna oranye")]),n("li",[a._v(' Ketika diklik hasil dari daftar kata "Memuat", hasil yang sesuai dengan kata pencarian akan ditandai dengan latar warna kuning ')])]),n("li",[a._v(" Pranala (Pretty Permalink/Link) yang indah dan mudah diingat untuk definisi kata, misalnya : ")]),n("ol",[n("li",[a._v(" Kata 'rumah' akan mempunyai pranala (link) di https://kbbi.web.id/rumah ")]),n("li",[a._v(" Kata 'pintar' akan mempunyai pranala (link) di https://kbbi.web.id/pintar ")]),n("li",[a._v(" Kata 'komputer' akan mempunyai pranala (link) di https://kbbi.web.id/komputer ")])]),n("li",[a._v(" Sehingga diharapkan pranala (link) tersebut dapat digunakan sebagai referensi dalam penulisan, baik di dalam jaringan maupun di luar jaringan. ")]),n("li",[a._v(" Aplikasi dikembangkan dengan konsep Responsive Design, artinya tampilan situs web (website) KBBI ini akan cocok di berbagai media, misalnya smartphone ( Tablet pc, iPad, iPhone, Tab), termasuk komputer dan netbook/laptop. Tampilan web akan menyesuaikan dengan ukuran layar yang digunakan. ")]),n("li",[a._v("Tambahan kata-kata baru diluar KBBI edisi III")]),n("li",[a._v(" Penulisan singkatan di bagian definisi seperti misalnya: yg, dng, dl, tt, dp, dr dan lainnya ditulis lengkap, tidak seperti yang terdapat di KBBI PusatBahasa. ")])]),n("h3",[a._v("Informasi Tambahan")]),n("p",[a._v(' Tidak semua hasil pencarian, terutama jika kata yang dicari terdisi dari 2 atau 3 huruf, akan ditampilkan semua. Jika hasil pencarian dari daftar kata "Memuat" sangat banyak, maka hasil yang dapat langsung di klik akan dibatasi jumlahnya. Selain itu, untuk pencarian banyak kata sekaligus, sistem hanya akan mencari kata yang terdiri dari 4 huruf atau lebih. Misalnya yang dicari adalah "air, minyak, larut", maka hasil pencarian yang akan ditampilkan adalah minyak dan larut saja. ')]),n("p",[a._v(' Untuk pencarian banyak kata sekaligus, bisa dilakukan dengan memisahkan masing-masing kata dengan tanda koma, misalnya: ajar,program,komputer (untuk mencari kata ajar, program dan komputer). Jika ditemukan, hasil utama akan ditampilkan dalam kolom "kata dasar" dan hasil yang berupa kata turunan akan ditampilkan dalam kolom "Memuat". Pencarian banyak kata ini hanya akan mencari kata dengan minimal panjang 4 huruf, jika kata yang panjangnya 2 atau 3 huruf maka kata tersebut akan diabaikan. ')]),n("p",[a._v(" Edisi online/daring ini merupakan alternatif versi KBBI Offline yang sudah dibuat sebelumnya (dengan kosakata yang lebih banyak). Bagi yang ingin mendapatkan KBBI Offline (tidak memerlukan koneksi internet), silakan mengunjungi halaman web ini KBBI Offline. Jika ada masukan, saran dan perbaikan terhadap kbbi daring ini, silakan mengirimkan ke alamat email: ebta.setiawan || gmail || com ")]),n("p",[a._v(" Kami sebagai pengelola website berusaha untuk terus menyaring iklan yang tampil agar tetap menampilkan iklan yang pantas. Tetapi jika anda melihat iklan yang tidak sesuai atau tidak pantas di website kbbi.web.id, ini silakan klik Laporkan Iklan ")])])},function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"box-detail-single flexeo"},[n("div",{staticClass:"box-detail-single-flex"},[n("ul",{staticClass:"shares-makna"},[n("li",[a._v("Bagikan Makna")]),n("li",[n("a",{staticClass:"share fb",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-facebook"})])]),n("li",[n("a",{staticClass:"share tw",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-twitter"})])]),n("li",[n("a",{staticClass:"share gp",attrs:{href:"#"}},[n("i",{staticClass:"fa fa-google"})])])])])])}],m={props:["dataIklan"],data:function(){return{iklan1:"",iklan2:""}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[4].images,this.iklan2=t+this.dataIklan[5].images}},k=m,h=n("2877"),g=Object(h["a"])(k,c,d,!1,null,"d3ababfc",null),p=g.exports,f=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"sidePage"},[n("div",{staticClass:"kartu-kata light-box p-4"},[n("h4",[a._v("Kamus Nama")]),a._l(a.randomKata.nama,(function(t){return n("ul",{key:t.id},[n("li",[n("a",{attrs:{href:"#"}},[a._v(a._s(t.judul_nama))])])])}))],2),n("div",{staticClass:"kartu-kata light-box p-4"},[n("div",{staticClass:"cardIklan"},[a.iklan1?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan1,alt:"Slot Iklan"}}):a._e()])]),n("div",{staticClass:"kartu-kata light-box p-4"},[n("h4",[a._v("Kamus KBBI")]),a._l(a.randomKata.kbbi,(function(t){return n("ul",{key:t._id},[n("li",[n("a",{attrs:{href:"#"}},[a._v(a._s(t.kata))])])])}))],2),n("div",{staticClass:"kartu-kata light-box p-4"},[n("div",{staticClass:"cardIklan"},[a.iklan2?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan2,alt:"Slot Iklan"}}):a._e()])]),n("div",{staticClass:"kartu-kata light-box p-4"},[n("h4",[a._v("Kamus Eng-Ind")]),a._l(a.randomKata.engIn,(function(t){return n("ul",{key:t.id},[n("li",[n("a",{attrs:{href:"#"}},[a._v(a._s(t.judul_artikel))])])])}))],2),n("div",{staticClass:"kartu-kata light-box p-4"},[n("div",{staticClass:"cardIklan"},[a.iklan3?n("img",{staticClass:"iklanLandscape",attrs:{src:a.iklan3,alt:"Slot Iklan"}}):a._e()])])])},b=[],v={props:["dataIklan"],data:function(){return{iklan1:"",iklan2:"",iklan3:"",imgData:[],randomKata:[]}},created:function(){var a=localStorage.mainUrl,t=a+"/images/client/";this.iklan1=t+this.dataIklan[0].images,this.iklan2=t+this.dataIklan[2].images,this.iklan3=t+this.dataIklan[3].images,this.randomKata=JSON.parse(localStorage.randomKata)}},y=v,w=Object(h["a"])(y,f,b,!1,null,"3a47ee0a",null),_=w.exports,x={data:function(){return{keyword:"",selected:"",error:"",loading:!1,dataIklan:[],showDismissibleAlert:!1,mainUrl:"",urlReport:"",urlFindEng:"",urlFindInd:""}},components:{Main:p,Side:_},created:function(){this.mainUrl=localStorage.mainUrl,this.urlReport=this.mainUrl+"/report",this.urlFindEng=this.mainUrl+"/translateEng/",this.urlFindInd=this.mainUrl+"/translateInd/",this.dataIklan=JSON.parse(localStorage.dataIklan)},methods:{onSubmit:function(a){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var e,i,r,s,l,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a.preventDefault(),e=t.selected,t.loading=!0,"engin"!=e){n.next=26;break}return n.prev=4,n.next=7,u.a.get(t.urlFindEng+t.keyword);case 7:if(i=n.sent,r=i.data,s=r.engin.length,0!==s){n.next=18;break}return t.loading=!1,t.error="Data terjemahan tidak ditemukan",t.showDismissibleAlert=!0,n.next=16,u.a.post(t.urlReport,{kata:t.keyword,bidang:"ENG - IND"});case 16:n.next=19;break;case 18:window.location.href="/cari/engInd/"+t.keyword;case 19:n.next=24;break;case 21:n.prev=21,n.t0=n["catch"](4),console.log(n.t0);case 24:n.next=46;break;case 26:return n.prev=26,n.next=29,u.a.get(t.urlFindInd+t.keyword);case 29:if(l=n.sent,o=l.data,c=o.idEng.length,0!==c){n.next=40;break}return t.loading=!1,t.error="Data terjemahan tidak ditemukan",t.showDismissibleAlert=!0,n.next=38,u.a.post(t.urlReport,{kata:t.keyword,bidang:"IND - ENG"});case 38:n.next=41;break;case 40:window.location.href="/cari/indEng/"+t.keyword;case 41:n.next=46;break;case 43:n.prev=43,n.t1=n["catch"](26),console.log(n.t1);case 46:case"end":return n.stop()}}),n,null,[[4,21],[26,43]])})))()}}},I=x,C=(n("65f03"),Object(h["a"])(I,r,s,!1,null,"0c8061c6",null)),j=C.exports,E={components:{Terjemahan:j}},B=E,L=(n("4169"),Object(h["a"])(B,e,i,!1,null,"4a1f98de",null));t["default"]=L.exports},"65f03":function(a,t,n){"use strict";n("6e38")},"6e38":function(a,t,n){},"83b8":function(a,t,n){},"96cf":function(a,t,n){var e=function(a){"use strict";var t,n=Object.prototype,e=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function o(a,t,n){return Object.defineProperty(a,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),a[t]}try{o({},"")}catch(P){o=function(a,t,n){return a[t]=n}}function u(a,t,n,e){var i=t&&t.prototype instanceof p?t:p,r=Object.create(i.prototype),s=new L(e||[]);return r._invoke=C(a,n,s),r}function c(a,t,n){try{return{type:"normal",arg:a.call(t,n)}}catch(P){return{type:"throw",arg:P}}}a.wrap=u;var d="suspendedStart",m="suspendedYield",k="executing",h="completed",g={};function p(){}function f(){}function b(){}var v={};o(v,r,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(K([])));w&&w!==n&&e.call(w,r)&&(v=w);var _=b.prototype=p.prototype=Object.create(v);function x(a){["next","throw","return"].forEach((function(t){o(a,t,(function(a){return this._invoke(t,a)}))}))}function I(a,t){function n(i,r,s,l){var o=c(a[i],a,r);if("throw"!==o.type){var u=o.arg,d=u.value;return d&&"object"===typeof d&&e.call(d,"__await")?t.resolve(d.__await).then((function(a){n("next",a,s,l)}),(function(a){n("throw",a,s,l)})):t.resolve(d).then((function(a){u.value=a,s(u)}),(function(a){return n("throw",a,s,l)}))}l(o.arg)}var i;function r(a,e){function r(){return new t((function(t,i){n(a,e,t,i)}))}return i=i?i.then(r,r):r()}this._invoke=r}function C(a,t,n){var e=d;return function(i,r){if(e===k)throw new Error("Generator is already running");if(e===h){if("throw"===i)throw r;return S()}n.method=i,n.arg=r;while(1){var s=n.delegate;if(s){var l=j(s,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===d)throw e=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=k;var o=c(a,t,n);if("normal"===o.type){if(e=n.done?h:m,o.arg===g)continue;return{value:o.arg,done:n.done}}"throw"===o.type&&(e=h,n.method="throw",n.arg=o.arg)}}}function j(a,n){var e=a.iterator[n.method];if(e===t){if(n.delegate=null,"throw"===n.method){if(a.iterator["return"]&&(n.method="return",n.arg=t,j(a,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=c(e,a.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var r=i.arg;return r?r.done?(n[a.resultName]=r.value,n.next=a.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function E(a){var t={tryLoc:a[0]};1 in a&&(t.catchLoc=a[1]),2 in a&&(t.finallyLoc=a[2],t.afterLoc=a[3]),this.tryEntries.push(t)}function B(a){var t=a.completion||{};t.type="normal",delete t.arg,a.completion=t}function L(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(E,this),this.reset(!0)}function K(a){if(a){var n=a[r];if(n)return n.call(a);if("function"===typeof a.next)return a;if(!isNaN(a.length)){var i=-1,s=function n(){while(++i<a.length)if(e.call(a,i))return n.value=a[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:S}}function S(){return{value:t,done:!0}}return f.prototype=b,o(_,"constructor",b),o(b,"constructor",f),f.displayName=o(b,l,"GeneratorFunction"),a.isGeneratorFunction=function(a){var t="function"===typeof a&&a.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,b):(a.__proto__=b,o(a,l,"GeneratorFunction")),a.prototype=Object.create(_),a},a.awrap=function(a){return{__await:a}},x(I.prototype),o(I.prototype,s,(function(){return this})),a.AsyncIterator=I,a.async=function(t,n,e,i,r){void 0===r&&(r=Promise);var s=new I(u(t,n,e,i),r);return a.isGeneratorFunction(n)?s:s.next().then((function(a){return a.done?a.value:s.next()}))},x(_),o(_,l,"Generator"),o(_,r,(function(){return this})),o(_,"toString",(function(){return"[object Generator]"})),a.keys=function(a){var t=[];for(var n in a)t.push(n);return t.reverse(),function n(){while(t.length){var e=t.pop();if(e in a)return n.value=e,n.done=!1,n}return n.done=!0,n}},a.values=K,L.prototype={constructor:L,reset:function(a){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!a)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var a=this.tryEntries[0],t=a.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(a){if(this.done)throw a;var n=this;function i(e,i){return l.type="throw",l.arg=a,n.next=e,i&&(n.method="next",n.arg=t),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r],l=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var o=e.call(s,"catchLoc"),u=e.call(s,"finallyLoc");if(o&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(o){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(a,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===a||"continue"===a)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var s=r?r.completion:{};return s.type=a,s.arg=t,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(s)},complete:function(a,t){if("throw"===a.type)throw a.arg;return"break"===a.type||"continue"===a.type?this.next=a.arg:"return"===a.type?(this.rval=this.arg=a.arg,this.method="return",this.next="end"):"normal"===a.type&&t&&(this.next=t),g},finish:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===a)return this.complete(n.completion,n.afterLoc),B(n),g}},catch:function(a){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===a){var e=n.completion;if("throw"===e.type){var i=e.arg;B(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(a,n,e){return this.delegate={iterator:K(a),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=t),g}},a}(a.exports);try{regeneratorRuntime=e}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=chunk-68cd163f.e95174fb.js.map