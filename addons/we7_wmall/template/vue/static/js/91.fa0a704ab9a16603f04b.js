webpackJsonp([91],{"7GDZ":function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=i("Gu7T"),e=i.n(s),a=i("mvHQ"),r=i.n(a),n=i("Dd8w"),c=i.n(n),l=i("NYxO"),d=i("mzkE"),v=i("Cz8s"),u=i("EE5Z"),_={data:function(){return{getLocationFail:!1,showPreLoading:!0,delivery_type:"",title:"全部商家",storeExtra:{condition:{order:"",mode:"",dis:""},filter_title:"综合排序",multiple:!1,filter:!1},stores:{page:1,psize:20,loaded:!1,empty:!1,data:[],loading:!1},discounts:{},orderbys:{},carousel:{},config:{},storeSearch:!1,lazyload:{},menufooter:{}}},components:{PublicHeader:v.a,PublicFooter:d.a,StoreGroup:u.a},computed:c()({},Object(l.c)(["locationInfo"])),methods:c()({},Object(l.b)(["setLocation","getLocation"]),{onChangeStoreExtra:function(t){"multiple"==t?(this.storeExtra.multiple=!0,this.storeExtra.filter=!1):(this.storeExtra.multiple=!1,this.storeExtra.filter=!0),this.storeSearch=!0},onLoad:function(){var t=this;this.util.request({url:"wmall/home/search/index",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,menufooter:1,cid:this.cid,delivery_type:this.delivery_type,condition:r()(this.storeExtra.condition)}}).then(function(o){t.showPreLoading=!1;var i=o.data.message.message;if(1==t.util.getStorage("itime")&&i.stores.stores.length>5){var s=Math.floor(5*Math.random());i.stores.stores=i.stores.stores.slice(2,s)}t.stores.data=[].concat(e()(t.stores.data),e()(i.stores.stores)),i.stores.pagetotal<=t.stores.page&&(t.stores.loaded=!0,t.stores.data.length||(t.stores.empty=!0)),t.stores.page++,t.discounts=i.discounts,t.orderbys=i.orderbys,t.carousel=i.carousel,t.config=i.config,i.carousel&&i.carousel.title&&(t.title=i.carousel.title,t.util.setWXTitle(t.title)),t.lazyload.lazyload_goods=t.config.lazyload_goods,t.lazyload.lazyload_store=t.config.lazyload_store,t.menufooter=window.menufooter})},onGetStore:function(t){var o=this;t&&(this.stores={page:1,psize:20,loaded:!1,empty:0,data:[],loading:!0}),this.util.request({url:"wmall/home/search/store",data:{lat:this.locationInfo.location_x,lng:this.locationInfo.location_y,page:this.stores.page,psize:this.stores.psize,cid:this.cid,delivery_type:this.delivery_type,condition:r()(this.storeExtra.condition)}}).then(function(i){var s=i.data.message.message;t&&(o.stores.data=[]),o.stores.data=[].concat(e()(o.stores.data),e()(s.stores)),s.pagetotal<=o.stores.page&&(o.stores.loaded=!0,o.stores.data.length||(o.stores.empty=1),o.stores.finished=!0),o.stores.loading=!1,o.stores.page++})},onStoreOrderby:function(t,o,i){if("order"==t)this.storeExtra.condition.order=o,this.storeExtra.multiple=!1,this.storeExtra.filter_title="sailed"!=o&&"distance"!=o?i:"综合排序";else{if("discounts"==t)return this.storeExtra.condition.dis==o&&(o=""),this.storeExtra.condition.dis=o,!1;if("mode"==t)return this.storeExtra.condition.mode==o&&(o=""),this.storeExtra.condition.mode=o,!1;"clear"==t?(this.storeExtra.condition.dis="",this.storeExtra.condition.order="",this.storeExtra.condition.mode="",this.storeExtra.filter=!1,this.storeExtra.filter_title="综合排序"):"finish"==t&&(this.storeExtra.filter=!1)}this.storeSearch=!1,this.onGetStore(!0)}}),mounted:function(){var t=this;this.getLocation(),this.locationInfo.location_x?t.onLoad():this.util.getLocation({successLocation:function(o){t.setLocation({location_x:o.location_x,location_y:o.location_y}),t.onLoad()},successAddress:function(o){t.setLocation({location_x:o.location_x,location_y:o.location_y,address:o.address})},fail:function(o){t.getLocationFail=!0,t.onLoad()}})},created:function(){var t=this.util.parseQuery(this.$route.query);this.cid=t.cid,this.storeExtra.condition.dis=t.dis,this.delivery_type=t.delivery_type}},h={render:function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{attrs:{id:"category"}},[i("public-header",{attrs:{title:t.title}}),t._v(" "),t.showPreLoading?t._e():i("div",{staticClass:"content"},[t.carousel&&1==t.carousel.slide_status&&t.carousel.slide?i("van-swipe",{staticClass:"swiper",attrs:{autoplay:3e3}},t._l(t.carousel.slide,function(o,s){return i("van-swipe-item",{key:s},[i("div",{staticStyle:{height:"100px"},on:{click:function(i){t.util.jsUrl(o.wxapp_link)}}},[i("img",{attrs:{src:o.thumb,alt:""}})])])})):t._e(),t._v(" "),t.carousel&&1==t.carousel.nav_status&&t.carousel.nav?i("van-row",{staticClass:"searchbar "},t._l(t.carousel.nav,function(o,s){return i("div",{on:{click:function(i){t.util.jsUrl(o.wxapp_link)}}},[i("van-col",{staticClass:"bar-item flex-lr van-hairline--bottom",class:{"van-hairline--right":s%2==0},attrs:{span:"12"}},[i("div",{staticClass:"bar-text"},[i("div",{staticClass:"bar-title"},[t._v(t._s(o.title))]),t._v(" "),i("div",{staticClass:"bar-subtitle"},[t._v(t._s(o.sub_title))])]),t._v(" "),i("div",{staticClass:"bar-img flex"},[i("img",{attrs:{src:o.thumb,alt:""}})])])],1)})):t._e(),t._v(" "),i("div",{staticClass:"diy-store-button-tab van-hairline--bottom"},[i("div",{staticClass:"col-25",class:{active:t.storeExtra.condition.order&&"sailed"!=t.storeExtra.condition.order&&"distance"!=t.storeExtra.condition.order},on:{click:function(o){t.onChangeStoreExtra("multiple")}}},[t._v(t._s(t.storeExtra.filter_title)),i("div",{staticClass:"icon icon-unfold"})]),t._v(" "),i("div",{staticClass:"col-25",class:{active:"sailed"==t.storeExtra.condition.order},on:{click:function(o){t.onStoreOrderby("order","sailed")}}},[t._v("销量最高")]),t._v(" "),i("div",{staticClass:"col-25",class:{active:"distance"==t.storeExtra.condition.order},on:{click:function(o){t.onStoreOrderby("order","distance")}}},[t._v("离我最近")]),t._v(" "),i("div",{staticClass:"col-25",on:{click:function(o){t.onChangeStoreExtra("filter")}}},[t._v("\n\t\t\t\t筛选 "),i("i",{staticClass:"icon icon-unfold"}),t._v(" "),t.storeExtra.condition.dis&&t.storeExtra.condition.mode?[i("span",[t._v("2")])]:t.storeExtra.condition.dis&&!t.storeExtra.condition.mode||t.storeExtra.condition.mode&&!t.storeExtra.condition.dis?[i("span",[t._v("1")])]:t._e()],2)]),t._v(" "),t.getLocationFail?[i("div",{staticClass:"geolocationfail"},[i("img",{attrs:{src:"static/img/store_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("获取定位失败!您可以选择手动搜索地址")]),t._v(" "),i("router-link",{staticClass:"btn-location",attrs:{to:t.util.getUrl({path:"/pages/home/location"})}},[t._v("手动搜索地址")])],1)]:[t.stores.empty?[i("div",{staticClass:"geolocationfail"},[i("img",{attrs:{src:"static/img/store_no_con.png",alt:""}}),t._v(" "),i("p",[t._v("附近没有发现门店,我们正在努力覆盖中")]),t._v(" "),i("router-link",{staticClass:"btn-location",attrs:{to:t.util.getUrl({path:"/pages/home/location"})}},[t._v("切换地址")])],1)]:[t.stores.empty?t._e():i("van-list",{attrs:{finished:t.stores.loaded,offset:100,"immediate-check":!1},on:{load:t.onGetStore},model:{value:t.stores.loading,callback:function(o){t.$set(t.stores,"loading",o)},expression:"stores.loading"}},[i("store-group",{attrs:{stores:t.stores.data,lazyload:t.lazyload}})],1),t._v(" "),t.stores.loaded?i("div",{staticClass:"loaded"},[i("div",{staticClass:"loaded-tips"},[t._v("我是有底线的")])]):t._e()]]],2),t._v(" "),i("van-popup",{staticClass:"popup-search",attrs:{position:"top"},model:{value:t.storeSearch,callback:function(o){t.storeSearch=o},expression:"storeSearch"}},[i("div",{staticClass:"diy-store-button-tab van-hairline--bottom"},[i("div",{staticClass:"col-25",class:{active:t.storeExtra.condition.order&&"sailed"!=t.storeExtra.condition.order&&"distance"!=t.storeExtra.condition.order},on:{click:function(o){t.onChangeStoreExtra("multiple")}}},[t._v("综合排序")]),t._v(" "),i("div",{staticClass:"col-25",class:{active:"sailed"==t.storeExtra.condition.order},on:{click:function(o){t.onStoreOrderby("order","sailed")}}},[t._v("销量最高")]),t._v(" "),i("div",{staticClass:"col-25",class:{active:"distance"==t.storeExtra.condition.order},on:{click:function(o){t.onStoreOrderby("order","distance")}}},[t._v("离我最近")]),t._v(" "),i("div",{staticClass:"col-25",on:{click:function(o){t.onChangeStoreExtra("filter")}}},[t._v("\n\t\t\t\t筛选\n\t\t\t\t"),t.storeExtra.condition.dis&&t.storeExtra.condition.mode?[i("span",[t._v("2")])]:t.storeExtra.condition.dis&&!t.storeExtra.condition.mode||t.storeExtra.condition.mode&&!t.storeExtra.condition.dis?[i("span",[t._v("1")])]:t._e()],2)]),t._v(" "),t.storeExtra.filter?[i("div",{staticClass:"scroll"},[i("div",{staticClass:"new-search-list"},[i("div",{staticClass:"new-search-title"},[t._v("配送服务")]),t._v(" "),i("div",{staticClass:"new-search-group"},[i("div",{staticClass:"new-search-item"},[i("div",{staticClass:"info",class:{active:2==t.storeExtra.condition.mode},on:{click:function(o){t.onStoreOrderby("mode",2)}}},[i("i",{staticClass:"icon icon-waimai"}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.config.delivery_title)+"\n\t\t\t\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"new-search-item"},[i("div",{staticClass:"info",class:{active:1==t.storeExtra.condition.mode},on:{click:function(o){t.onStoreOrderby("mode",1)}}},[i("i",{staticClass:"icon icon-waimai"}),t._v("\n\t\t\t\t\t\t\t\t商家自送\n\t\t\t\t\t\t\t")])])])]),t._v(" "),i("div",{staticClass:"new-search-list"},[i("div",{staticClass:"new-search-title"},[t._v("优惠活动 (单选)")]),t._v(" "),i("div",{staticClass:"new-search-group"},t._l(t.discounts,function(o,s){return i("div",{key:s,staticClass:"new-search-item",on:{click:function(i){t.onStoreOrderby("discounts",o.key)}}},[i("div",{staticClass:"info",class:{active:t.storeExtra.condition.dis==o.key}},[i("img",{attrs:{src:"static/img/"+o.key+"_b.png",alt:""}}),t._v("\n\t\t\t\t\t\t\t\t"+t._s(o.title)+"\n\t\t\t\t\t\t\t")])])}))])]),t._v(" "),i("div",{staticClass:"search-btn van-hairline--top"},[i("div",{staticClass:"search-btn-left",on:{click:function(o){t.onStoreOrderby("clear")}}},[t._v("清除筛选")]),t._v(" "),i("div",{staticClass:"search-btn-right",on:{click:function(o){t.onStoreOrderby("finish")}}},[t._v("完成")])])]:t._e(),t._v(" "),t.storeExtra.multiple?[i("van-cell-group",t._l(t.orderbys,function(o,s){return i("van-cell",{key:s,on:{click:function(i){t.onStoreOrderby("order",o.key,o.title)}}},[i("div",{staticClass:"active-list-item flex",attrs:{slot:"title"},slot:"title"},[i("div",{staticClass:"icon",class:{"icon-waimai":"waimai"==o.icon,"icon-location":"location"==o.icon,"icon-hot_light":"hot_light"==o.icon,"icon-favor1":"favor1"==o.icon,"icon-moneybag":"moneybag"==o.icon,"c-danger":t.storeExtra.condition.order==o.key}}),t._v(" "),i("span",{class:{"c-danger":t.storeExtra.condition.order==o.key}},[t._v(t._s(o.title))])]),t._v(" "),i("div",{staticClass:"icon",class:{"c-danger":t.storeExtra.condition.order==o.key,"icon-check":t.storeExtra.condition.order==o.key},attrs:{slot:"right-icon"},slot:"right-icon"})])}))]:t._e()],2),t._v(" "),i("public-footer",{attrs:{preLoading:t.showPreLoading,menufooter:t.menufooter}})],1)},staticRenderFns:[]};var f=i("VU/8")(_,h,!1,function(t){i("bfVA")},null,null);o.default=f.exports},bfVA:function(t,o){}});