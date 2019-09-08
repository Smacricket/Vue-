// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '../static/css/global.css'
import Mint from 'mint-ui'
Vue.use(Mint)

import '../node_modules/mint-ui/lib/style.css'

import Axios from 'axios'
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '../../static/data'

import MyUl from './components/common/MyUl.vue'
import MyLi from './components/common/MyLi.vue'
import NavBar from './components/common/NavBar.vue'
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)

import Moment from 'moment'
Vue.filter('convertTime', function(data, formatStr) {
	return Moment(data).format(formatStr);
})
Vue.filter('timeAgo', function(data) {
	Moment.locale('zh-cn')
	return Moment(data).fromNow()
})

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
