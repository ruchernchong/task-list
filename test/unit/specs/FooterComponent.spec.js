import { shallowMount } from '@vue/test-utils'
import FooterComponent from '@/components/FooterComponent.vue'
import { store } from '@/store'

describe('FooterComponent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(FooterComponent, {
      global: {
        plugins: [store]
      }
    })
  })

  test('links should not be empty', () => {
    expect(wrapper.vm.links.length).toBeGreaterThanOrEqual(1)
  })
})
