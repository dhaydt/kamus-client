(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d12cb900"],{"3be8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"card",staticStyle:{"min-height":"70vh"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row justify-content-between"},[a("div",{staticClass:"col-sm-12 col-md-4"},[a("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[a("label",{staticClass:"d-inline-flex align-items-center"},[t._v(" Show  "),a("b-form-select",{staticClass:"row-page",attrs:{size:"sm",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),a("em",{staticStyle:{color:"#a4a6ab"}},[t._v(" From "+t._s(t.jumlahData)+" data")])],1)])]),a("div",{staticClass:"col-sm-6 col-md-3 d-flex justify-content-end"},[a("div",{staticClass:"text-center mr-1"},[a("router-link",{attrs:{to:"/admin/addMultiple"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],attrs:{variant:"success"}},[a("i",{staticClass:"fa fa-plus"}),t._v("  Kosakata")])],1)],1)])]),a("div",{staticClass:"col-md-10"},[a("label",{staticClass:"d-inline-flex align-items-top"},[a("EllipsisLoader",{attrs:{loading:t.loading}})],1)]),a("div",{staticClass:"table-responsive"},[a("b-table",{staticClass:"text-left",attrs:{items:t.dataKata,fields:t.fields,responsive:"sm","per-page":t.perPage,"current-page":t.currentPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(view)",fn:function(e){return[a("td",{domProps:{innerHTML:t._s(e.item.view/2)}})]}},{key:"cell(action)",fn:function(){return[a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mr-3 text-primary",attrs:{href:"javascript:void(0);","data-toggle":"tooltip",title:"Edit"}},[a("i",{staticClass:"mdi mdi-pencil font-size-18"})]),a("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"text-danger",attrs:{href:"javascript:void(0);",title:"Delete"}},[a("i",{staticClass:"mdi mdi-trash-can font-size-18"})])]},proxy:!0}])})],1),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[a("ul",{staticClass:"pagination pagination-rounded mb-0"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])],1)},i=[],n=a("1da1"),l=(a("96cf"),a("d277")),r=a("bc3a"),o=a.n(r),c=a("ed6d"),d={data:function(){return{title:"English -> Indonesian",items:[{text:"Admin"},{text:"Translate"},{text:"ENG - IND",active:!0}],getEngUrl:"http://localhost:3002/kamusInd/",loading:"",dataKata:[],jumlahData:null,totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,25,50],filter:null,filterOn:[],sortBy:"ID",sortDesc:!1,fields:[{key:"id",sortable:!0,label:"ID"},{key:"judul_artikel",sortable:!0,label:"English"},{key:"isi_artikel",sortable:!0,label:"Indonesian"},{key:"view",sortable:!0,label:"View"},{key:"action"}]}},created:function(){this.loading=!0,this.getEng()},mounted:function(){this.totalRows=this.dataKata.length},components:{PageHeader:c["a"],EllipsisLoader:l["EllipsisLoader"]},computed:{rows:function(){return this.dataKata.length}},methods:{getEng:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(t.getEngUrl);case 2:a=e.sent,t.dataKata=a.data,t.loading=!1,s=a.data.length,t.jumlahData=s,console.log(t.jumlahData);case 8:case"end":return e.stop()}}),e)})))()},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},u=d,p=(a("418d"),a("2877")),m=Object(p["a"])(u,s,i,!1,null,"13cb42a4",null);e["default"]=m.exports},"418d":function(t,e,a){"use strict";a("ceee")},ceee:function(t,e,a){}}]);
//# sourceMappingURL=chunk-d12cb900.06bda744.js.map