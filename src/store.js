import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navs: [
      { name: 'Home', link: '/' },
      { name: 'About', link: '/about' }
    ],
    links: [
      { name: 'Github', url: 'https://github.com/ruchern' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/4031163/ru-chern-chong' }
    ],
    tasks: [
      { id: 1, name: 'Create a Vue demo for portfolio', completed: true },
      { id: 2, name: 'Add tests to the demo', completed: false },
      { id: 3, name: 'Add CircleCI Continuous Integration (CI)', completed: false }
    ],
    message: {},
    query: null
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)
      state.message = {
        title: 'Task added!',
        style: 'success',
        content: `Task <span class="has-text-weight-bold"><em>${task.name}</em></span> has been added.`
      }
    },
    deleteTask (state, task) {
      const index = state.tasks.indexOf(task)
      state.tasks.splice(index, 1)
      state.message = {
        title: 'Task deleted!',
        style: 'danger',
        content: `Task <span class="has-text-weight-bold"><em>${task.name}</em></span> has been deleted.`
      }
    },
    toggleTaskCompleted (state, task) {
      const index = state.tasks.indexOf(task)

      state.tasks[index].completed = !state.tasks[index].completed
    },
    setQuery (state, query) {
      state.query = query
    }
  }
})
