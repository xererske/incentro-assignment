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
            v-model="form.initials"
          )
          clean-input(
            type="text"
            placeholder="Tussenvoegsel"
            v-model="form.insertion"
          )
        form-group
          clean-input(
            type="text"
            placeholder="Achternaam"
            v-model="form.lastName"
          )
        form-group
          clean-input(
            type="text"
            placeholder="Postcode"
            v-model="form.zipcode"
          )
          clean-input(
            type="number"
            placeholder="Huisnummer"
            v-model="form.houseNumber"
          )
        p(v-for="item in form") {{item}}
        button.bg-red-500.px-2.py-4.rounder(type="button" @click='fetchLocation') Click me

</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      form: {
        initials: '',
        insertion: '',
        lastName: '',
        zipcode: '',
        houseNumber: ''
      },
      locationData: ''
    }
  },
  methods: {
    async fetchLocation() {
      const locationData = await this.$axios.$get('https://photon.komoot.io/api/?q=5142MG%2050')
      console.log(locationData)
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
