import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskList from '@/components/TaskList'
import TaskItem from '@/components/TaskItem'
import DialogModal from '@/components/DialogModal'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskList', () => {
  let wrapper
  let store, state, mutations
  let computed

  beforeEach(() => {
    state = {
      tasks: [
        { name: 'First task', completed: true },
        { name: 'Second task', completed: false }
      ],
      query: null
    }

    mutations = {
      addTask: jest.fn(),
      deleteTask: jest.fn(),
      toggleTaskCompleted: jest.fn()
    }

    store = new Vuex.Store({
      state,
      mutations
    })

    computed = {
      tasks () {
        const filteredTasks = state.tasks.filter(task =>
          task.name.toLowerCase().includes(state.query)
        )

        return state.query ? filteredTasks : state.tasks
      }
    }

    wrapper = shallowMount(TaskList, {
      store,
      localVue,
      computed
    })
  })

  test('should delete task when delete button is clicked', () => {
    wrapper.find(DialogModal).vm.$emit('deleteTask')

    expect(mutations.deleteTask).toHaveBeenCalled()

    expect(wrapper.vm.task).toEqual({})
    expect(wrapper.vm.isActive).toBeFalsy()
  })

  it('should open dialog modal when button is clicked', () => {
    const task = { name: 'First task', completed: true }

    wrapper
      .findAll(TaskItem)
      .at(0)
      .vm.$emit('confirmDelete', task)

    expect(wrapper.vm.task).toEqual(task)
    expect(wrapper.vm.isActive).toBe(true)
  })

  it('should close dialog modal when button is clicked', () => {
    const task = {}

    wrapper
      .findAll(TaskItem)
      .at(0)
      .vm.$emit('closeDialogModal', task)

    expect(wrapper.vm.task).toEqual(task)
    expect(wrapper.vm.isActive).toBe(false)
  })
})
