webpackJsonp([8],{"NGo+":function(n,s){},OTGW:function(n,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t={name:"index",data:function(){return{cinemaList:[],pullDownMessage:"",isLoading:!0}},mounted:function(){var n=this;setTimeout(function(){n.axios.get("./static/cinemaList.json").then(function(s){n.cinemaList=s.data.data.movieList,n.isLoading=!n.isLoading})},1e3)},methods:{handleToScroll:function(n){n.y>20&&(this.pullDownMessage="正在刷新中")},handleToTouchEnd:function(n){var s=this;n.y>20&&this.axios.get("./static/nowPlaying.json").then(function(n){s.pullDownMessage="更新成功"})}}},a={render:function(){var n=this,s=n.$createElement,i=n._self._c||s;return i("div",{staticClass:"cinema_body"},[n.isLoading?i("loading"):i("scroller",{attrs:{handleToScroll:n.handleToScroll,handleToTouchEnd:n.handleToTouchEnd}},[i("ul",[i("li",[n._v(n._s(n.pullDownMessage))]),n._v(" "),n._l(n.cinemaList,function(s){return i("li",{key:s.id},[i("div",[i("span",[n._v(n._s(s.rm))]),n._v(" "),i("span",{staticClass:"q"},[i("span",{staticClass:"price"},[n._v(n._s(s.price))]),n._v("元起")])]),n._v(" "),i("div",{staticClass:"adress"},[i("span",[n._v(n._s(s.site))]),n._v(" "),i("span",[n._v(n._s(s.m))])]),n._v(" "),i("div",{staticClass:"card"},[i("div",[n._v("小吃")]),n._v(" "),i("div",[n._v("折扣卡")])])])})],2)])],1)},staticRenderFns:[]};var e=i("VU/8")(t,a,!1,function(n){i("NGo+")},"data-v-63b3efd6",null);s.default=e.exports}});
//# sourceMappingURL=8.a668e9affa0fad2befb0.js.map