import { shallowMount } from '@vue/test-utils'
import TaskAction from '@/components/TaskAction'

describe('TaskAction', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TaskAction, {
      propsData: {
        task: {}
      }
    })
  })

  test('should emit edit task event when edit button is clicked', () => {
    wrapper
      .findAll('button')
      .at(0)
      .trigger('click')

    expect(wrapper.emitted('editTask')).toBeTruthy()
  })

  test('should emit open confirmation modal event when delete button is clicked', () => {
    wrapper
      .findAll('button')
      .at(1)
      .trigger('click')

    expect(wrapper.emitted('openDialogModal')).toBeTruthy()
  })
})
