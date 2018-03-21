import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

require('font-awesome/scss/font-awesome.scss')

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Task List`
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
