import { mount } from "@vue/test-utils"
import CleanInput from "~/components/clean-input.vue"

test("emit test", async () => {
  const wrapper = mount(CleanInput, {
    propsData: {
      type: "text",
      placeholder: "Voornaam",
      ariaLabel: "Voornaam",
    },
  })
  wrapper.vm.$emit("input", "testInput")
  wrapper.vm.$emit("input", "123")

  await wrapper.vm.$nextTick()

  expect(wrapper.emitted().input).toBeTruthy()
  expect(wrapper.emitted().input.length).toBe(2)
  expect(wrapper.emitted().input[1]).toEqual(["123"])
})
