import { shallowMount } from '@vue/test-utils'
import DialogModal from '@/components/DialogModal'

describe('DialogModal', () => {
  let wrapper

  let task

  beforeEach(() => {
    task = {}

    wrapper = shallowMount(DialogModal, {
      propsData: {
        isActive: true,
        task
      }
    })
  })

  test('emit confirm delete even when delete button is clicked', () => {
    wrapper.findAll('.icon').at(0).trigger('click')

    wrapper.vm.$emit('confirmDelete', task)

    expect(wrapper.emitted('confirmDelete')).toBeTruthy()
  })

  test('should close modal when no button is clicked', () => {
    wrapper.findAll('.icon').at(1).trigger('click')

    expect(wrapper.emitted('closeDialogModal')).toBeTruthy()
  })
})
