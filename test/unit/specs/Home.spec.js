import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import Home from '@/components/Home.vue'

describe('Home', () => {
  let wrapper

  let store
  let state

  beforeEach(() => {
    state = {
      message: {}
    }

    store = createStore({
      state
    })

    wrapper = shallowMount(Home, {
      global: {
        plugins: [store]
      }
    })
  })

  it('should render the component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
