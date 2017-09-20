import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// var Vue = require('vue')
// var VueResource = require('vue-resource')
// Vue.use(VueResource)

Vue.use(VueRouter)
import Home from './components/Home'
import Members from './components/Members'
import ClanSettigns from './components/ClanSettings'
import AppSettings from './components/AppSettings'

const routes = [
  { path: '/', component: Home },
  { path: '/Members', component: Members },
  { path: '/ClanSettings', component: ClanSettigns },
  { path: '/AppSettings', component: AppSettings }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
