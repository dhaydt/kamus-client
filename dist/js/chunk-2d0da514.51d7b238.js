(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da514"],{"6aa4":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advPagess"},[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12"},[a("Iklan")],1)])],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"advPage"},[a("div",{staticClass:"card",staticStyle:{"min-height":"70vh"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-sm-12 col-md-4"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show  "),a("b-form-select",{staticClass:"row-page",attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),a("em",{staticStyle:{color:"#a4a6ab"}},[t._v(" From "+t._s(t.jumlahData)+" data")])],1)])]),a("div",{staticClass:"col-sm-6 col-md-3 d-flex justify-content-end"},[a("div",{staticClass:"text-center mr-1"},[a("router-link",{attrs:{to:"/admin/addAdv"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],attrs:{variant:"success"}},[a("i",{staticClass:"fa fa-plus"}),t._v("  Iklan")])],1)],1)])]),a("div",{staticClass:"col-md-10"},[a("label",{staticClass:"d-inline-flex align-items-top"},[a("EllipsisLoader",{attrs:{loading:t.loading}})],1)]),a("div",{staticClass:"table-responsive"},[a("b-table",{staticClass:"text-left",attrs:{items:t.fileInfos,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(images)",fn:function(e){return[a("b-avatar",{attrs:{src:t.getImg+e.item.images,size:"6rem"}})]}},{key:"cell(action)",fn:function(){return[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-3 text-primary",attrs:{href:"javascript:void(0);","data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"mdi mdi-pencil font-size-18"})]),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-danger",attrs:{href:"javascript:void(0);",title:"Delete"},on:{click:function(e){return t.deleteKata(t.data.item._id)}}},[a("i",{staticClass:"mdi mdi-trash-can font-size-18"})])]},proxy:!0}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])])},r=[],n=a("1da1"),o=(a("96cf"),a("d277")),c=a("bc3a"),d=a.n(c),m={data:function(){return{getImgUrl:"",getAdvUrl:"",postAdvUrl:"",selectedFiles:void 0,currentFile:void 0,loading:!1,progress:0,message:"",fileInfos:[],jumlahData:null,dataKata:[],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,25,50],filter:null,filterOn:[],sortBy:"ID",sortDesc:!1,formFields:{title:null,images:null,detail:null},fields:[{key:"id",label:"ID",sortable:!0},{key:"images",label:"Gambar",sortable:!0},{key:"title",label:"Judul",sortable:!0},{key:"details",label:"Keterangan",sortable:!0},{key:"action",label:"Action",sortable:!0}]}},components:{EllipsisLoader:o["EllipsisLoader"]},created:function(){var t=localStorage.mainUrl;this.getImg=t+"/images/client",this.getAdvUrl=t+"/getAdv",this.postAdvUrl=t+"/postAdv",this.getData()},computed:{rows:function(){return this.fileInfos.length}},methods:{getData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(t.getAdvUrl);case 2:a=e.sent,console.log(a.data.data),t.fileInfos=a.data.data;case 5:case"end":return e.stop()}}),e)})))()},submitForm:function(){this.progress=0;var t=new FormData;t.append("detail",this.formFields.detail),t.append("title",this.formFields.title),t.append("images",this.formFields.images),d.a.post(this.postAdvUrl,t).then((function(t){console.log(t)})).catch((function(t){console.log(t)})),this.formFields.title="",this.formFields.images="",this.formFields.detail="",this.getData()},selectFile:function(t){this.selectedFiles=this.$refs.file.files,this.formFields.images=t.target.files[0]}}},u=m,f=a("2877"),g=Object(f["a"])(u,l,r,!1,null,"8c5998d0",null),p=g.exports,v=a("ed6d"),b={data:function(){return{title:"Advertism Manejemen",items:[{text:"Admin"},{text:"Advertism",active:!0}]}},components:{Iklan:p,PageHeader:v["a"]}},h=b,C=Object(f["a"])(h,s,i,!1,null,"3367762c",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0da514.51d7b238.js.map