import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskItem from '@/components/TaskItem'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskItem', () => {
  let wrapper
  let store, state, mutations

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
      deleteTask: jest.fn(),
      toggleTaskCompleted: jest.fn()
    }

    store = new Vuex.Store({
      state,
      mutations
    })

    wrapper = shallowMount(TaskItem, {
      store,
      localVue,
      propsData: {
        task: { name: 'First task', completed: true }
      }
    })
  })

  it('should start editing', () => {
    wrapper.findAll('.is-task-name').trigger('dblclick')
    expect(wrapper.vm.isEditing).toBe(true)
  })

  it('should stop editing when enter key is pressed', () => {
    wrapper.setData({ isEditing: true })

    wrapper.find('input').trigger('keyup.enter')
    expect(wrapper.vm.isEditing).toBe(false)
  })

  it('should stop editing when clicking outside of the input field', () => {
    wrapper.setData({ isEditing: true })
    wrapper.find('input').trigger('blur')
    expect(wrapper.vm.isEditing).toBe(false)
  })

  it('should show confirm delete modal when delete button is clicked', () => {
    wrapper.find('.is-delete').trigger('click')
    expect(wrapper.emitted('confirmDelete')).toBeTruthy()
  })

  it('should toggle completed status when clicked', () => {
    wrapper.setData({ isEditing: false })
    wrapper.findAll('.fa-check-circle').trigger('click')
    expect(mutations.toggleTaskCompleted).toHaveBeenCalled()
  })

  it('should show the delete icon for each task when mouse over', () => {
    wrapper.find('.columns').trigger('mouseover')
    expect(wrapper.vm.showDelete).toBe(true)
  })

  it('should show the delete icon for each task when mouse over', () => {
    wrapper.setData({ showDelete: true })
    wrapper.find('.columns').trigger('mouseleave')
    expect(wrapper.vm.showDelete).toBe(false)
  })
})
