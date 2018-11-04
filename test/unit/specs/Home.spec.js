import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/components/Home'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home', () => {
  let wrapper

  let store
  let state

  beforeEach(() => {
    state = {
      message: {}
    }

    store = new Vuex.Store({
      state
    })

    wrapper = shallowMount(Home, {
      store,
      localVue
    })
  })

  test('should render the component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
