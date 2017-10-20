// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 死剁
import { getAllMessages } from './store/actions'
import 'babel-polyfill'

Vue.config.productionTip = false

Vue.config.debug = true
// 过滤器
Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


getAllMessages(store)