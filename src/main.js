import Vue from 'vue'
import App from '@/App'
import store from '@/store'
import router from '@/router'

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
