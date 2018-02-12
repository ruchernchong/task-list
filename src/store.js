import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navs: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'About',
        link: '/about'
      }
    ],
    links: [
      {
        name: 'Github',
        url: 'https://github.com/ruchern'
      },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/4031163/ru-chern-chong'
      }
    ],
    tasks: [
      {
        id: 1,
        name: 'Create a Vue demo for portfolio',
        completed: true
      },
      {
        id: 2,
        name: 'Add tests to the demo',
        completed: false
      },
      {
        id: 3,
        name: 'Add CircleCI Continuous Integration (CI)',
        completed: false
      }
    ],
    query: null
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)
    },
    setTaskCompleted (state, task) {
      state.tasks[task.id - 1].completed = true
    },
    setQuery (state, query) {
      state.query = query
    }
  },
  actions: {
    addTask ({commit}, task) {
      commit('addTask', task)
    },
    setTaskCompleted ({commit}, task) {
      commit('setTaskCompleted', task)
    },
    setQuery ({commit}, query) {
      commit('setQuery', query)
    }
  }
})
