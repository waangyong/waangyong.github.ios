webpackJsonp([12],{"8nni":function(n,e){},CcHc:function(n,e){},GvJt:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("7+uW"),a={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App",components:{}},a,!1,function(n){t("8nni")},null,null).exports,r=t("/ocq"),c={path:"/movie",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"x//J"))},children:[{path:"/movie/city",component:function(){return t.e(1).then(t.bind(null,"RXOf"))}},{path:"/movie/nowPlaying",component:function(){return t.e(7).then(t.bind(null,"c/wA"))}},{path:"/movie/commingSoon",component:function(){return t.e(5).then(t.bind(null,"jS8G"))}},{path:"/movie/search",component:function(){return t.e(2).then(t.bind(null,"Vbaa"))}},{path:"/movie",redirect:"/movie/nowPlaying"}]},l={path:"/mine",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"jGPJ"))}},u={path:"/cinema",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"Q5FS"))},children:[{path:"/cinema/allCity",component:function(){return t.e(6).then(t.bind(null,"OTGW"))}},{path:"/cinema/brand",component:function(){return t.e(9).then(t.bind(null,"v3n1"))}},{path:"/cinema/Feature",component:function(){return t.e(4).then(t.bind(null,"OiaA"))}},{path:"/cinema",redirect:"/cinema/allCity"}]};o.default.use(r.a);var d=new r.a({mode:"history",routes:[c,l,u,{path:"/",redirect:c}]}),s=t("NYxO"),p={namespaced:!0,state:{na:window.localStorage.getItem("nowName")?window.localStorage.getItem("nowName"):"成都",id:window.localStorage.getItem("nowNum")||1},actions:{},mutations:{CITY_INFO:function(n,e){n.na=e.na,n.id=e.id}}};o.default.use(s.a);var m=new s.a.Store({state:{},mutations:{},actions:{},modules:{city:p}}),f=t("mtWM"),h=t.n(f),v=t("zL8q"),w=t.n(v),b=(t("tvR6"),t("fbHb"),t("ij8o"),{render:function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"loader"})},staticRenderFns:[]});var g=t("VU/8")({name:"index"},b,!1,function(n){t("CcHc")},"data-v-045fb2d3",null).exports,y=t("GQaK"),T={name:"index",data:function(){return{pullDownMessage:""}},props:{handleToScroll:{type:Function,default:function(){}},handleToTouchEnd:{type:Function,default:function(){}}},mounted:function(){var n=this,e=new y.a(this.$refs.wrapper,{tap:!0,probeType:1});this.scroll=e,e.on("scroll",function(e){n.handleToScroll(e)}),e.on("touchEnd",function(e){n.handleToTouchEnd(e)})},methods:{toScrollTop:function(n){this.scroll.scrollTo(0,n)}}},S={render:function(){var n=this.$createElement;return(this._self._c||n)("div",{ref:"wrapper",staticClass:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var _=t("VU/8")(T,S,!1,function(n){t("GvJt")},"data-v-64bec2ad",null).exports;o.default.prototype.axios=h.a,o.default.use(w.a),o.default.config.productionTip=!1,o.default.component("scroller",_),o.default.component("loading",g),new o.default({el:"#app",components:{App:i},template:"<App/>",router:d,store:m})},fbHb:function(n,e){},ij8o:function(n,e){},tvR6:function(n,e){}},["NHnr"]);
//# sourceMappingURL=app.b7d68d493ab5b6142e4c.js.map