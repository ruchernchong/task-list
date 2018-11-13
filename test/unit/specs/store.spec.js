import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store', () => {
  it('should increase length of task after adding a task', () => {
    expect(store.state.tasks.length).toBe(3)

    const task = {
      name: 'Foo',
      completed: false
    }

    store.commit('addTask', task)

    expect(store.state.tasks.length).toBe(4)
  })

  it('should decrease length of task after deleting a task', () => {
    expect(store.state.tasks.length).toBe(4)

    const task = {
      name: 'Foo',
      completed: false
    }

    store.commit('deleteTask', task)

    expect(store.state.tasks.length).toBe(3)
  })

  it('should toggle task completed status', () => {
    expect(store.state.tasks[0].completed).toBe(true)

    store.commit('toggleTaskCompleted', store.state.tasks[0])

    expect(store.state.tasks[0].completed).toBe(false)
  })

  it('should return all tasks when no filter is provided', () => {
    const task = { name: 'All' }
    store.commit('setFilter', task)

    expect(store.state.filter).toBe(task.name.toLowerCase())
    expect(store.getters.tasks).toBe(store.state.tasks)
  })

  it('should return an object for tasks that are completed', () => {
    const task = { name: 'Completed' }
    store.commit('setFilter', task)

    expect(store.state.filter).toBe(task.name.toLowerCase())
    expect(store.getters.tasks).toBeInstanceOf(Object)
  })

  it('should return an object for tasks that are not completed', () => {
    const task = { name: 'Todo' }
    store.commit('setFilter', task)

    expect(store.state.filter).toBe(task.name.toLowerCase())
    expect(store.getters.tasks).toBeInstanceOf(Object)
  })

  it('should save the search query in the store', () => {
    expect(store.state.query).toBe('')

    const query = 'Hello World!'

    store.commit('setQuery', query)

    expect(store.state.query).toBe(query)
  })

  it('should return at least one match for filtered tasks', () => {
    store.commit('setQuery', 'Foo')
    expect(store.getters.tasks)
  })

  it('should return all tasks if query is empty', () => {
    store.commit('setQuery', '')
    expect(store.getters.tasks).toBeInstanceOf(Object)
  })
})
