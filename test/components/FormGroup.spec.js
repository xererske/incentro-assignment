import { mount } from "@vue/test-utils"
import FormGroup from "~/components/form-group.vue"
import { commonRendersCorrectly } from "~/test/common/RendersCorrectly"

const factory = () => {
  return mount(FormGroup, {
    propsData: {
      classes: "justify-center",
    },
  })
}

commonRendersCorrectly("FormGroup", factory)
