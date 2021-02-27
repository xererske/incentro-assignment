<template lang="pug">
  .container.max-w-screen-sm.px-3
    incentro-section
      h1 Hi Incentro :)
      p Check hier de opdracht van Maarten
    incentro-section
      form
        form-group
          clean-input(
            type="text"
            placeholder="Voorletters"
            v-model="form.firstNameLetters"
          )
          clean-input(
            type="text"
            placeholder="Tussenvoegsel"
          )
        form-group
          clean-input(
            type="text"
            placeholder="Achternaam"
          )
        form-group
          clean-input(
            type="text"
            placeholder="Postcode"
          )
          clean-input(
            type="text"
            placeholder="Huisnummer"
          )

</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      form: {
        firstNameLetters: ''
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
