import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App'
import HeaderComponent from '@/components/HeaderComponent'
import FooterComponent from '@/components/FooterComponent'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
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
