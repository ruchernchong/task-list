import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import TaskItem from '@/components/TaskItem.vue'

describe('TaskItem', () => {
  let wrapper
  let store, mutations

  beforeEach(() => {
    mutations = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTaskCompleted: vi.fn()
    }

    store = createStore({
      mutations
    })

    wrapper = shallowMount(TaskItem, {
      global: {
        plugins: [store]
      },
      propsData: {
        task: {
          name: 'Test',
          completed: true
        }
      }
    })
  })

  it('should edit task when the task is not completed', async () => {
    await wrapper.setProps({
      task: {
        name: 'Test',
        completed: false
      }
    })

    expect(wrapper.vm.isEditing).toBe(false)
    wrapper.find('.is-task-name').trigger('dblclick')
    expect(wrapper.vm.isEditing).toBe(true)
  })

  it('should not edit task when the task is completed', () => {
    expect(wrapper.vm.isEditing).toBe(false)
    wrapper.find('.is-task-name').trigger('dblclick')
    expect(wrapper.vm.isEditing).toBe(false)
  })

  it('should stop editing when enter key is pressed', async () => {
    await wrapper.setData({ isEditing: true })
    wrapper.find('input').trigger('keyup.enter')
    expect(wrapper.vm.isEditing).toBe(false)
  })

  it('should stop editing when clicking outside of the input field', async () => {
    await wrapper.setData({ isEditing: true })
    wrapper.find('input').trigger('blur')
    expect(wrapper.vm.isEditing).toBe(false)
  })

  it('should show confirm delete modal when delete button is clicked', () => {
    wrapper.find('.is-delete').trigger('click')
    expect(wrapper.emitted('confirmDelete')).toBeTruthy()
  })

  it('should toggle completed status when clicked', () => {
    wrapper.setData({ isEditing: false })
    wrapper.find('.fa-check-circle').trigger('click')
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
