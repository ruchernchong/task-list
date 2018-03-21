import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchTask from '@/components/SearchTask'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('SearchTask', () => {
  let wrapper, store, mutations

  beforeEach(() => {
    mutations = {
      setQuery: jest.fn()
    }

    store = new Vuex.Store({
      mutations
    })

    wrapper = shallow(SearchTask, {
      store, localVue
    })
  })

  test('correct query string', () => {
    const input = wrapper.find('input[type=search]')
    input.element.value = 'New task'
    input.trigger('keyup')

    expect(mutations.setQuery).toHaveBeenCalled()
  })
})
