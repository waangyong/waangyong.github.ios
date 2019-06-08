// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/css/common.css'
import '../public/css/swiper.min.css'
import loading from './components/loading'
import scroller from './components/scroller'
import MessageBox from './components/js/MessageBox'

Vue.prototype.axios=axios
Vue.use(ElementUi)

Vue.config.productionTip = false
//注册全局组件
Vue.component('scroller',scroller)
Vue.component('loading',loading)
Vue.component('MessageBox',MessageBox)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
