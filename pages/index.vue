<template lang="pug">
  .container.max-w-screen-sm.px-3
    incentro-section
      h1 Hi Incentro,
      p Leuk dat je op mijn opdracht kijkt!
    incentro-section
      form
        clean-p(text='Meld je hier aan')
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
            :required="false"
          )
        form-group
          clean-input(
            type="text"
            placeholder="Achternaam"
            v-model="form.lastName"
          )
        clean-p(text='Waar woon je?')
        form-group
          clean-input(
            type="text"	            
            placeholder="Postcode"	 
            pattern="^[1-9][0-9]{3} ?(([a-z]{2})||([A-Z]{2}))$"
            @change="fetchLocation"         
            v-model="form.zipcode"
            :class="errorBorder"
          )
          clean-input(	          
            type="number"
            placeholder="Huisnummer"
            @change="fetchLocation"
            v-model="form.houseNumber"
            :class="errorBorder"
          )
        form-group(classes='justify-center')
          clean-p.text-red-500(v-if='locationError' text='Adres niet gevonden')
        template(v-if='form.streetName && form.city && !locationError')
          form-group
            clean-input(
              type="text"
              placeholder="Straatnaam"
              v-model="form.streetName"
              :disabled='true'
            )
          form-group
            clean-input(
              type="text"
              placeholder="City"
              v-model="form.city"
              :disabled='true'
            )
        clean-p(text='Wat is je email?')
        form-group
          clean-input(
            type="email"
            placeholder="Email"
            v-model="form.email"
            :required="true"
          )
        button.bg-green-500.px-2.py-4.rounded Submit

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
        houseNumber: '',
        streetName: '',
        city: '',
        email: ''
      },
      locationError: false
    }
  },
  computed: {
    errorBorder() {
      return this.locationError ? 'border-red-500' : ''
    }
  },
  methods: {
    resetLocation() {
      this.form.city = ''
      this.form.streetName = ''
      this.locationError = true
    },
    async fetchLocation() {
      if (this.form.zipcode && this.form.houseNumber) {
        try {
          const urlParams = `${this.form.zipcode} ${this.form.houseNumber}`
          const locationData = await this.$axios.$get(`https://photon.komoot.io/api/?q=${encodeURIComponent(urlParams)}`)
          if (locationData.features[0].properties.city && locationData.features[0].properties.street) {
            this.form.city = locationData.features[0].properties.city
            this.form.streetName = locationData.features[0].properties.street
            this.locationError = false
          } else {
            this.resetLocation()
          }
        }
        catch(err) {
          this.resetLocation()
        }
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
