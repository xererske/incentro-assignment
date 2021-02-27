import { mount } from '@vue/test-utils'
import ThankYou from '~/pages/thank-you.vue'
import { commonRendersCorrectly } from '~/test/common/RendersCorrectly'

const factory = () => {
  return mount(ThankYou, {
    stubs: {
      'clean-layout': true,
      'clean-section': true,
    },
  })
}

commonRendersCorrectly('ThankYouPage', factory)
