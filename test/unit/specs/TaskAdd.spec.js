import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskAdd from '@/components/TaskAdd'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskAdd', () => {
  let wrapper, store, state, mutations

  beforeEach(() => {
    state = {}

    mutations = {
      addTask: jest.fn()
    }

    store = new Vuex.Store({
      state, mutations
    })

    wrapper = shallowMount(TaskAdd, {
      store, localVue
    })
  })

  test('message should be null when task name is not empty', () => {
    const input = wrapper.find('input')
    input.element.value = 'Task 1'
    input.trigger('input')

    expect(wrapper.vm.name).toBe(input.element.value)
    expect(wrapper.vm.message).toBeNull()
  })

  test('should display a message if task name is empty when enter is pressed', () => {
    const input = wrapper.find('input')
    input.element.value = null
    input.trigger('keyup.enter')

    expect(wrapper.vm.name.length).toBe(0)
    expect(wrapper.vm.message).toBe('Your task cannot be empty.')
  })

  test('add task when button is clicked', () => {
    const input = wrapper.find('input')
    input.element.value = 'Task 1'
    input.trigger('input')

    wrapper.find('button').trigger('click')

    expect(mutations.addTask).toHaveBeenCalled()
  })

  test('should display a message if task name is empty when button is clicked', () => {
    const input = wrapper.find('input')
    input.element.value = ''
    input.trigger('input')

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.message).toBe('Your task cannot be empty.')
  })
})
