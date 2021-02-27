export const commonRendersCorrectly = (name, mountFunction) => {
  describe(`Renders correctly: ${name}`, () => {
    test('Renders correctly', () => {
      const wrapper = mountFunction()
      expect(wrapper).toMatchSnapshot()
    })
  })
}
