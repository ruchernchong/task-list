import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import { router } from './router'
import 'bulma'
import 'animate-sass'

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Task List`
  next()
})

createApp(App)
  .use(store, key)
  .use(router)
  .mount('#app')
