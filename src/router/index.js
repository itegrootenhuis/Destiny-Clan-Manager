import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Nav from '@/components/NavHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'nav',
      component: Nav
    }
  ]
})
