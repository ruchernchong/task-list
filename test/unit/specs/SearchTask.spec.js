import { createLocalVue, shallow } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchTask from '@/components/SearchTask'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('SearchTask', () => {
  let wrapper

  let store
  let actions

  beforeEach(() => {
    actions = {
      setQuery: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })

    wrapper = shallow(SearchTask, {
      store, localVue
    })
  })

  test('correct query string', async () => {
    const input = wrapper.find('input[type=search]')
    input.element.value = 'New task'
    input.trigger('keyup')

    await expect(actions.setQuery).toHaveBeenCalled()
  })
})
