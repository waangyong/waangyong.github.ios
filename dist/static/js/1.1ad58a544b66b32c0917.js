webpackJsonp([1],{TA0F:function(t,s){},"c/wA":function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("GQaK"),e={name:"nowplaying",data:function(){return{movieList:[],pullDownMessage:"",isLoading:!0}},mounted:function(){var t=this;this.axios.get("http://localhost:8080/static/nowPlaying.json").then(function(s){200===s.status?(t.movieList=s.data.data.movieList,t.isLoading=!t.isLoading):console.log("失败")}),this.$nextTick(function(){var s=new i.a(t.$refs.movie_body,{tap:!0,probeType:1});s.on("scroll",function(s){s.y>20&&(t.pullDownMessage="正在刷新中")}),s.on("touchEnd",function(s){s.y>20&&t.axios.get("http://localhost:8080/static/nowPlaying.json").then(function(s){t.pullDownMessage="更新成功"})})})},methods:{handleToDetail:function(t){this.$router.push("/movie/detail/"+t)}}},o={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{ref:"movie_body",staticClass:"movie_body"},[n("ul",[n("li",{staticClass:"pullDown"},[t._v(t._s(t.pullDownMessage))]),t._v(" "),t._l(t.movieList,function(s){return n("li",{key:s.id},[n("div",{staticClass:"pic_show"},[n("img",{attrs:{src:s.img,alt:""}})]),t._v(" "),n("div",{staticClass:"info_list",on:{touchstart:function(n){return t.handleToDetail(s.id)}}},[n("h2",[t._v(t._s(s.rm))]),t._v(" "),t._m(0,!0),t._v(" "),n("p",[t._v(t._s(s.star))]),t._v(" "),n("p",[t._v(t._s(s.showInfo))])]),t._v(" "),n("div",{staticClass:"btn_mall"},[t._v("\n      购票\n    ")])])})],2),t._v(" "),n("MessageBox")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("观众评 "),s("span",{staticClass:"grade"},[this._v("9.2")])])}]};var a=n("VU/8")(e,o,!1,function(t){n("TA0F")},"data-v-6cb94a49",null);s.default=a.exports}});
//# sourceMappingURL=1.1ad58a544b66b32c0917.js.map