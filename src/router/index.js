import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About'
      }
    }
  ],
  linkActiveClass: 'is-active'
})
