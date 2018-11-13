import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import TaskFooter from '@/components/TaskFooter'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('TaskFooter', () => {
  let wrapper
  let store, state, mutations

  beforeEach(() => {
    state = {
      tasks: [
        { name: 'First task', completed: true },
        { name: 'Second task', completed: false }
      ],
      query: ''
    }

    mutations = {
      setFilter: jest.fn()
    }

    store = new Vuex.Store({
      state,
      mutations
    })

    wrapper = shallowMount(TaskFooter, {
      attachToDocument: true,
      store,
      localVue
    })
  })

  it('should render the component', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should set the filter based on the value it was clicked', () => {
    wrapper.find('span').trigger('click')
    expect(mutations.setFilter).toHaveBeenCalled()
  })
})
