import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production',
  state: {
    navs: [
      {
        id: 1,
        name: 'Home',
        link: '/'
      },
      {
        id: 2,
        name: 'About',
        link: '/about'
      }
    ],
    links: [
      {
        id: 1,
        name: 'Github',
        url: 'https://github.com/ruchern'
      },
      {
        id: 2,
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/4031163/ru-chern-chong'
      }
    ]
  },
  mutations: {},
  actions: {}
})
