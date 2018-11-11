import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchTask from '@/components/SearchTask'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('SearchTask', () => {
  let wrapper
  let store, mutations

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
      setQuery: jest.fn()
    }

    store = new Vuex.Store({
      mutations
    })

    wrapper = shallowMount(SearchTask, {
      store,
      localVue
    })
  })

  it('should set the query string based on the input', () => {
    const input = wrapper.find('input[type=search]')
    input.element.value = 'New task'
    input.trigger('keyup')

    expect(mutations.setQuery).toHaveBeenCalled()
  })

  it('should add the task if the search results return nothing', () => {
    const query = 'Something not on the list'
    const input = wrapper.find('input')
    input.element.value = query
    input.trigger('keyup.enter')

    expect(mutations.addTask).toHaveBeenCalled()
  })
})
