import { shallow } from '@vue/test-utils'
import Logo from '@/components/Logo'

describe('Logo', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(Logo, {
      propsData: {
        link: {name: 'Github', url: 'https://github.com/ruchern/'}
      }
      // computed: {
      // logo () {
      //   return this.link.name.toLowerCase().replace(' ', '-')
      // }
      // }
    })
  })

  // test('should have url', () => {
  //   expect(wrapper.find('a').attributes().href).toBe(wrapper.vm.link.url)
  // })
  //
  // test('should have image', () => {
  //   expect(wrapper.find('img').attributes().src).toBe(`${wrapper.vm.logo}.png`)
  // })

  test('should compute the correct icon name', () => {
    expect(wrapper.vm.logo).toBe('github')
  })
})
