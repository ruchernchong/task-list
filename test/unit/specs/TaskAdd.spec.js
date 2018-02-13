import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskAdd from '@/components/TaskAdd'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskAdd', () => {
  let wrapper

  let actions
  let store

  beforeEach(() => {
    actions = {
      addTask: jest.fn()
    }

    store = new Vuex.Store({
      state: {},
      actions
    })

    wrapper = shallow(TaskAdd, {
      store, localVue
    })
  })

  test('message should be null when task name is not empty', () => {
    const input = wrapper.find('input')
    input.element.value = 'Task 1'
    input.trigger('keyup')

    expect(wrapper.vm.message).toBeNull()
  })

  test('add task when button is clicked', () => {
    const input = wrapper.find('input')
    input.element.value = 'Task 1'
    input.trigger('input')

    wrapper.find('button').trigger('click')

    expect(actions.addTask).toHaveBeenCalled()
  })

  test('should display a message if task name is empty when button is clicked', () => {
    const input = wrapper.find('input')
    input.element.value = ''
    input.trigger('input')

    wrapper.find('button').trigger('click')

    expect(wrapper.vm.message).toBe('Your task cannot be empty.')
  })
})
