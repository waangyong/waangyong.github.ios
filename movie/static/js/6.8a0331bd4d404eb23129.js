webpackJsonp([6],{OTGW:function(n,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={name:"index",data:function(){return{cinemaList:[],pullDownMessage:"",isLoading:!0}},mounted:function(){var n=this;setTimeout(function(){n.axios.get("http://localhost:8080/static/cinemaList.json").then(function(s){n.cinemaList=s.data.data.movieList,n.isLoading=!n.isLoading})},1e3)},methods:{handleToScroll:function(n){n.y>20&&(this.pullDownMessage="正在刷新中")},handleToTouchEnd:function(n){var s=this;n.y>20&&this.axios.get("http://localhost:8080/static/nowPlaying.json").then(function(n){s.pullDownMessage="更新成功"})}}},a={render:function(){var n=this,s=n.$createElement,t=n._self._c||s;return t("div",{staticClass:"cinema_body"},[n.isLoading?t("loading"):t("scroller",{attrs:{handleToScroll:n.handleToScroll,handleToTouchEnd:n.handleToTouchEnd}},[t("ul",[t("li",[n._v(n._s(n.pullDownMessage))]),n._v(" "),n._l(n.cinemaList,function(s){return t("li",[t("div",[t("span",[n._v(n._s(s.rm))]),n._v(" "),t("span",{staticClass:"q"},[t("span",{staticClass:"price"},[n._v(n._s(s.price))]),n._v("元起")])]),n._v(" "),t("div",{staticClass:"adress"},[t("span",[n._v(n._s(s.site))]),n._v(" "),t("span",[n._v(n._s(s.m))])]),n._v(" "),t("div",{staticClass:"card"},[t("div",[n._v("小吃")]),n._v(" "),t("div",[n._v("折扣卡")])])])})],2)])],1)},staticRenderFns:[]};var e=t("VU/8")(i,a,!1,function(n){t("ipgW")},"data-v-723d68be",null);s.default=e.exports},ipgW:function(n,s){}});
//# sourceMappingURL=6.8a0331bd4d404eb23129.js.map