import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

describe.skip('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(App, {
      stubs: ['router-view']
    })
  })

  test('should contain Header Component', () => {
    expect(wrapper.find(HeaderComponent).isVueInstance()).toBe(true)
  })

  test('should contain Footer Component', () => {
    expect(wrapper.find(FooterComponent).isVueInstance()).toBe(true)
  })
})
