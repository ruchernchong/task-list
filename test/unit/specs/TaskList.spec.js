import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskList from '@/components/TaskList'
import TaskAction from '@/components/TaskAction'
import DialogModal from '@/components/DialogModal'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskList', () => {
  let wrapper, store, state, actions, computed

  beforeEach(() => {
    state = {
      tasks: [
        {id: 1, name: 'First task', completed: true}, {id: 2, name: 'Second task', completed: false}
      ],
      query: null
    }

    actions = {
      deleteTask: jest.fn(),
      toggleTaskCompleted: jest.fn()
    }

    store = new Vuex.Store({
      state,
      actions
    })

    computed = {
      tasks () {
        const filteredTasks = state.tasks.filter(task => task.name.toLowerCase().includes(state.query))

        return state.query ? filteredTasks : state.tasks
      }
    }

    wrapper = shallow(TaskList, {
      store,
      localVue,
      computed
    })
  })

  test('should not have filtered tasks if query is null', () => {
    const task = [
      {id: 1, name: 'First task', completed: true}, {id: 2, name: 'Second task', completed: false}
    ]

    wrapper = shallow(TaskList, {
      store,
      localVue,
      computed: {
        query: () => null
      }
    })

    expect(wrapper.vm.tasks).toEqual(task)
  })

  test('filtered tasks should have at least one match', () => {
    const task = [
      {id: 1, name: 'First task', completed: true}
    ]

    wrapper = shallow(TaskList, {
      store,
      localVue,
      computed: {
        query: () => 'first'
      }
    })

    expect(wrapper.vm.tasks).toEqual(task)
  })

  test('completed status should be toggled when clicked', async () => {
    wrapper.findAll('.fa-check-circle').at(0).trigger('click')

    await expect(actions.toggleTaskCompleted).toHaveBeenCalled()
  })

  test('should delete task when delete button is clicked', async () => {
    wrapper.find(DialogModal).vm.$emit('deleteTask')

    await expect(actions.deleteTask).toHaveBeenCalled()

    expect(wrapper.vm.task).toEqual({})
    expect(wrapper.vm.isActive).toBeFalsy()
  })

  test('should open dialog modal when button is clicked', () => {
    const task = {id: 1, name: 'First task', completed: true}

    wrapper.findAll(TaskAction).at(0).vm.$emit('openDialogModal', task)

    expect(wrapper.vm.task).toEqual(task)
    expect(wrapper.vm.isActive).toBe(true)
  })

  test('should close dialog modal when button is clicked', () => {
    const task = {}

    wrapper.findAll(TaskAction).at(0).vm.$emit('closeDialogModal', task)

    expect(wrapper.vm.task).toEqual(task)
    expect(wrapper.vm.isActive).toBe(false)
  })
})
