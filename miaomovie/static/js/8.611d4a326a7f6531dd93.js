webpackJsonp([8],{jS8G:function(n,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"commongsoon",data:function(){return{movieList:"",pullDownMessage:"",isLoading:!0}},mounted:function(){var n=this;setTimeout(function(){n.axios.get("./static/commingSoon.json").then(function(t){n.movieList=t.data.data.movieList,n.isLoading=!n.isLoading}).catch(function(){console.log("ERROR")})},1e3)},methods:{handleToScroll:function(n){n.y>20&&(this.pullDownMessage="正在刷新中")},handleToTouchEnd:function(n){var t=this;n.y>20&&this.axios.get("./static/nowPlaying.json").then(function(n){t.pullDownMessage="更新成功"})}}},i={render:function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("div",{staticClass:"movie_body"},[n.isLoading?s("loading"):n._e(),n._v(" "),s("scroller",{attrs:{handleToScroll:n.handleToScroll,handleToTouchEnd:n.handleToTouchEnd}},[s("ul",[s("li",[n._v(n._s(n.pullDownMessage))]),n._v(" "),n._l(n.movieList,function(t){return s("li",{key:t.id},[s("div",{staticClass:"pic_show"},[s("img",{attrs:{src:t.img,alt:""}})]),n._v(" "),s("div",{staticClass:"info_list"},[s("h2",[n._v(n._s(t.rm))]),n._v(" "),s("p",[n._v("观众评 "),s("span",{staticClass:"grade"},[n._v("9.2")])]),n._v(" "),s("p",[n._v(n._s(t.star))]),n._v(" "),s("p",[n._v(n._s(t.showInfo))])]),n._v(" "),s("div",{staticClass:"btn_mall"},[n._v("\n          预售\n        ")])])})],2)])],1)},staticRenderFns:[]};var a=s("VU/8")(o,i,!1,function(n){s("swia")},"data-v-4fa4de35",null);t.default=a.exports},swia:function(n,t){}});
//# sourceMappingURL=8.611d4a326a7f6531dd93.js.map