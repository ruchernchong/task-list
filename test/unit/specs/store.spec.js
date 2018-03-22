import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store', () => {
  test('should increase length of task after adding a task', () => {
    expect(store.state.tasks.length).toBe(3)

    const task = {
      id: 4, name: 'Foo', completed: false
    }

    store.commit('addTask', task)

    expect(store.state.tasks.length).toBe(4)
  })

  test('should decrease length of task after deleting a task', () => {
    expect(store.state.tasks.length).toBe(4)

    const task = {
      id: 4, name: 'Foo', completed: false
    }

    store.commit('deleteTask', task)

    expect(store.state.tasks.length).toBe(3)
  })

  test('should toggle task completed status', () => {
    expect(store.state.tasks[0].completed).toBe(true)

    store.commit('toggleTaskCompleted', store.state.tasks[0])

    expect(store.state.tasks[0].completed).toBe(false)
  })

  test('should save the search query in the store', () => {
    expect(store.state.query).toBeNull()

    const query = 'Hello World!'

    store.commit('setQuery', query)

    expect(store.state.query).toBe(query)
  })
})
