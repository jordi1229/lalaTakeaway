webpackJsonp([33],{"X/Um":function(s,t){},YLnc:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Cz8s"),e=a("deIj"),l={data:function(){return{records:{page:1,psize:15,loading:!1,finished:!1,empty:!1,data:[]},filter:{items:{meal_id:0}},meals:[],isRefresh:!1,showPreLoading:!0}},components:{publicHeader:i.a},methods:{onLoad:function(s){var t=this;Object(e.b)({vue:t,force:s,url:"plateform/svip/order/list",success:function(s){t.meals=s.meals}})},onPullDownRefresh:function(){this.onLoad(!0)},onToggleStatus:function(s){s=parseInt(s),this.filter.items.meal_id!=s&&(this.filter.items.meal_id=s)}},mounted:function(){this.onLoad()},watch:{filter:{handler:function(s,t){this.onLoad(!0)},deep:!0}}},n={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{attrs:{id:"svip-order"}},[a("public-header",{attrs:{title:"超级会员购买记录"}}),s._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"wrap-search"},[a("div",{staticClass:"tab-group flex-lr border-1px-b"},[a("div",{staticClass:"tab-item",class:{active:0==s.filter.items.meal_id},on:{click:function(t){s.onToggleStatus(0)}}},[s._v("全部")]),s._v(" "),s._l(s.meals,function(t,i){return a("div",{staticClass:"tab-item",class:{active:s.filter.items.meal_id==t.id},on:{click:function(a){s.onToggleStatus(t.id)}}},[s._v(s._s(t.title))])})],2)]),s._v(" "),a("van-pull-refresh",{on:{refresh:function(t){s.onPullDownRefresh()}},model:{value:s.isRefresh,callback:function(t){s.isRefresh=t},expression:"isRefresh"}},[s.records.empty?a("div",{staticClass:"no-data"},[a("img",{attrs:{src:"static/img/order_no_con.png",alt:""}}),s._v(" "),a("p",[s._v("暂无数据!")])]):a("van-list",{staticClass:"order-list",attrs:{finished:s.records.finished,offset:100,"immediate-check":!1},on:{load:s.onLoad},model:{value:s.records.loading,callback:function(t){s.$set(s.records,"loading",t)},expression:"records.loading"}},[s._l(s.records.data,function(t,i){return a("div",{key:t.id,staticClass:"order-item margin-10-b"},[a("van-row",[a("van-col",{attrs:{span:"5"}},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"img-100",attrs:{src:t.avatar,alt:""}})])]),s._v(" "),a("van-col",{attrs:{span:"19"}},[a("div",{staticClass:"svip-name flex-lr"},[a("div",{staticClass:"c-default"},[s._v(s._s(t.realname))]),s._v(" "),a("div",{staticClass:"font-14 itag",class:t.pay_type_all.css},[s._v(s._s(t.pay_type_all.text))])]),s._v(" "),a("div",{staticClass:"svip-info flex"},[a("div",{staticClass:"c-default font-14"},[s._v("购买套餐")]),s._v(" "),a("div",{staticClass:"c-danger font-14"},[s._v(s._s(t.meal.title))])]),s._v(" "),a("div",{staticClass:"svip-info flex"},[a("div",{staticClass:"c-default font-14"},[s._v("费用")]),s._v(" "),a("div",{staticClass:"c-danger font-14"},[s._v("¥"+s._s(t.meal.price))])]),s._v(" "),a("div",{staticClass:"svip-info flex"},[a("div",{staticClass:"c-default font-14"},[s._v("套餐开始时间")]),s._v(" "),a("div",{staticClass:"c-gray font-14"},[s._v(s._s(t.starttime_cn))])]),s._v(" "),a("div",{staticClass:"svip-info flex"},[a("div",{staticClass:"c-default font-14"},[s._v("套餐结束时间")]),s._v(" "),a("div",{staticClass:"c-gray font-14"},[s._v(s._s(t.endtime_cn))])]),s._v(" "),a("div",{staticClass:"svip-info flex"},[a("div",{staticClass:"c-default font-14"},[s._v("购买时间")]),s._v(" "),a("div",{staticClass:"c-gray font-14"},[s._v(s._s(t.paytime_cn))])])])],1)],1)}),s._v(" "),s.records.finished?a("div",{staticClass:"loaded"},[a("div",{staticClass:"loaded-tips"},[s._v("没有更多了")])]):s._e()],2)],1)],1),s._v(" "),s.showPreLoading?a("iloading"):s._e()],1)},staticRenderFns:[]};var c=a("VU/8")(l,n,!1,function(s){a("X/Um")},null,null);t.default=c.exports}});