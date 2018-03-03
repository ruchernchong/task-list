import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HeaderComponent', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(HeaderComponent, {
      stubs: ['router-link'],
      store,
      localVue
    })
  })

  test('navigation links should not be empty', () => {
    expect(wrapper.vm.navs.length).toBeGreaterThanOrEqual(1)
  })

  test('', () => {
    localVue.use(VueRouter)

    const router = new VueRouter()

    const wrapper = shallow(HeaderComponent, {
      store, router, localVue
    })

    expect(wrapper.vm.$route.path).toBe(wrapper.vm.navs[0].link)
  })
})
