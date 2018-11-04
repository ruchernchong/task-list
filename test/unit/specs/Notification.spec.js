import { shallowMount } from '@vue/test-utils'
import Notification from '@/components/Notification'

describe('Notification', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Notification, {
      propsData: {
        message: {
          style: 'success'
        }
      }
    })
  })

  it('should render the component', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.find('div').classes('is-success')).toBeTruthy()
  })
})
