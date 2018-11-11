import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navs: [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }],
    links: [
      { name: 'Github', url: 'https://github.com/ruchern' },
      {
        name: 'Stack Overflow',
        url: 'https://stackoverflow.com/users/4031163/ru-chern-chong'
      }
    ],
    tasks: [
      { name: 'Create a Vue demo for portfolio', completed: true },
      { name: 'Add tests to the demo', completed: false },
      { name: 'Add CircleCI Continuous Integration (CI)', completed: false }
    ],
    message: {},
    query: ''
  },
  mutations: {
    addTask (state, task) {
      state.tasks.push(task)

      state.message = {
        title: 'Task added!',
        style: 'success',
        content: `Task <span class="has-text-weight-bold"><em>${
          task.name
        }</em></span> has been added.`
      }
    },
    editTask (state) {},
    deleteTask ({ tasks, message }, task) {
      const index = tasks.indexOf(task)
      tasks.splice(index, 1)

      message = {
        title: 'Task deleted!',
        style: 'danger',
        content: `Task <span class="has-text-weight-bold"><em>${
          task.name
        }</em></span> has been deleted.`
      }
    },
    toggleTaskCompleted (state, task) {
      const index = state.tasks.indexOf(task)
      state.tasks[index].completed = !state.tasks[index].completed
    },
    setQuery (state, query) {
      state.query = query
    }
  },
  getters: {
    tasks ({ tasks, query }) {
      const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(query)
      )

      return query ? filteredTasks : tasks
    }
  }
})
