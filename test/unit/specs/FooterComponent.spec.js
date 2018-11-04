import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FooterComponent from '@/components/FooterComponent'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FooterComponent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(FooterComponent, {
      store,
      localVue
    })
  })

  test('links should not be empty', () => {
    expect(wrapper.vm.links.length).toBeGreaterThanOrEqual(1)
  })
})
