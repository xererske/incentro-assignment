import { mount } from '@vue/test-utils'
import Index from '~/pages/index.vue'
import { commonRendersCorrectly } from '~/test/common/RendersCorrectly'

const factory = () => {
  return mount(Index, {
    stubs: {
      'clean-layout': true,
      'clean-section': true,
      'clean-p': true,
      'clean-input': true,
      'form-group': true,
    },
  })
}

commonRendersCorrectly('IndexPage', factory)
