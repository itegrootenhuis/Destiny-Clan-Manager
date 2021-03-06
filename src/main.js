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

import Axios from 'axios'
import wildstring from 'wildstring'

Object.defineProperty(Vue.prototype, '$Axios', {value: Axios})
Axios.defaults.headers.common['X-API-Key'] = '46b46fd8932d4fd2a67642ac21e1b3dc'
Object.defineProperty(Vue.prototype, '$url', {value: 'https://www.bungie.net/platform'})

Object.defineProperty(Vue.prototype, '$wildString', {value: wildstring})

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
