import {InjectionKey} from "vue";
import { createStore,Store } from 'vuex'

export interface State {
  navs: any[]
  links: any[]
  tasks: any[]
  message: any
  filter:any
  query: String
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
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
    filter: null,
    query: ''
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)

      state.message = {
        title: 'Task added!',
        style: 'success',
        content: `Task <span class="has-text-weight-bold"><em>${
          task.name
        }</em></span> has been added.`
      }
    },
    editTask(state) {},
    deleteTask({ tasks, message }, task) {
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
    toggleTaskCompleted(state, task) {
      const index = state.tasks.indexOf(task)
      state.tasks[index].completed = !state.tasks[index].completed
    },
    setFilter(state, filter) {
      state.filter = filter.name.toLowerCase()
    },
    setQuery(state, query) {
      state.filter = null
      state.query = query
    }
  },
  getters: {
    tasks({ tasks, filter, query }) {
      let filteredTasks

      if (filter) {
        const FILTER = {
          ALL: 'all',
          COMPLETED: 'completed',
          TODO: 'todo'
        }

        switch (filter) {
          case FILTER.COMPLETED:
            filteredTasks = tasks.filter(task => task.completed === true)
            break
          case FILTER.TODO:
            filteredTasks = tasks.filter(task => task.completed === false)
            break
          case FILTER.ALL:
            filteredTasks = tasks
            break
        }
      } else {
        filteredTasks = tasks.filter(task =>
          task.name.toLowerCase().includes(query)
        )
      }

      return query || filter ? filteredTasks : tasks
    }
  }
})
