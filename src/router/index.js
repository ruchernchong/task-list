import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: window.location.pathname,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () =>
        import(/* webpackChunkName: "home" */ '@/components/Home'),
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () =>
        import(/* webpackChunkName: "about" */ '@/components/About'),
      meta: {
        title: 'About'
      }
    }
  ],
  linkActiveClass: 'is-active'
})
