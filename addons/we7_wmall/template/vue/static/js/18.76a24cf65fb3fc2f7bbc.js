webpackJsonp([18],{"3UKo":function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=s("Cz8s"),e=s("EE5Z"),n={data:function(){return{footmarks:[],showLoading:!0}},components:{PublicHeader:a.a,storeGroup:e.a},methods:{onLoad:function(){var t=this;this.util.request({url:"wmall/member/footmark",data:{}}).then(function(o){t.footmarks=o.data.message.message.footmarks,t.showLoading=!1})}},mounted:function(){this.onLoad()}},r={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{attrs:{id:"footmark"}},[s("public-header",{attrs:{title:"我的足迹"}}),t._v(" "),t.footmarks.length>0?s("div",{staticClass:"content"},[t._l(t.footmarks,function(t){return[s("store-group",{attrs:{stores:t.stores}})]})],2):s("div",{staticClass:"no-data"},[s("img",{attrs:{src:"static/img/store_no_con.png",alt:""}}),t._v(" "),s("p",[t._v("您没有浏览记录")])]),t._v(" "),s("transition",{attrs:{name:"loading"}},[s("iloading",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}]})],1)],1)},staticRenderFns:[]};var i=s("VU/8")(n,r,!1,function(t){s("c2sE")},null,null);o.default=i.exports},c2sE:function(t,o){}});
//# sourceMappingURL=18.76a24cf65fb3fc2f7bbc.js.map