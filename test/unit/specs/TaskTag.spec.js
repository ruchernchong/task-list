import { shallow } from '@vue/test-utils'
import TaskTag from '@/components/TaskTag'

describe('TaskTag', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(TaskTag, {
      propsData: {
        tag: {}
      }
    })
  })

  test('set search filter for tasks', () => {
    wrapper.find('.tag').trigger('click')

    expect(wrapper.classes('is-success')).toBeTruthy()
  })
})
