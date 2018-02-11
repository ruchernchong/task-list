import { shallow } from '@vue/test-utils'
import Home from '@/components/Home'

describe('Home', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Home)
  })

  test('should render correct title', () => {
    expect(wrapper.find('h1').text()).toBe('Home')
  })
})
