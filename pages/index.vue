<template lang="pug">
  clean-layout
    clean-section
      h1.text-xl Hi Incentro,
      p Leuk dat je op mijn opdracht kijkt!
    clean-section
      form(@submit.prevent='sendForm(form)')
        clean-p(text='Meld je hier aan')
        form-group
          clean-input(
            type="text"
            placeholder="Voorletters"
            v-model="form.initials"
            ariaLabel='Voorletters'
          )
          clean-input(
            type="text"
            placeholder="Tussenvoegsel"
            v-model="form.insertion"
            :required="false"
            ariaLabel='Tussenvoegsel'
          )
        form-group
          clean-input(
            type="text"
            placeholder="Achternaam"
            v-model="form.lastName"
            ariaLabel='Achternaam'
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
            ariaLabel='Postcode'
          )
          clean-input(	          
            type="number"
            placeholder="Huisnummer"
            @change="fetchLocation"
            v-model="form.houseNumber"
            :class="errorBorder"
            ariaLabel='Huisnummer'
          )
        form-group(classes='justify-center' v-if='locationError')
          clean-p.text-red-500(text='Adres niet gevonden')
        template(v-if='form.streetName && form.city && !locationError')
          p {{form.streetName}}
          p.mb-4 {{form.city}}
        clean-p(text='Wat is je email?')
        form-group
          clean-input(
            type="email"
            placeholder="Email"
            v-model="form.email"
            :required="true"
            ariaLabel='Email'
          )
        button.bg-green-500.p-3.rounded.text-white.mt-3.hover_bg-green-400.hover_text-gray-800 Voltooien

</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      form: {
        initials: "",
        insertion: "",
        lastName: "",
        zipcode: "",
        houseNumber: "",
        streetName: "",
        city: "",
        email: "",
      },
      locationError: false,
    }
  },
  computed: {
    errorBorder() {
      return this.locationError ? "border-red-500" : ""
    },
  },
  methods: {
    resetLocation() {
      this.form.city = ""
      this.form.streetName = ""
      this.locationError = true
    },
    async fetchLocation() {
      if (this.form.zipcode && this.form.houseNumber) {
        try {
          const urlParams = `${this.form.zipcode} ${this.form.houseNumber}`
          const locationData = await this.$axios.$get(
            `https://photon.komoot.io/api/?q=${encodeURIComponent(urlParams)}`
          )
          if (
            locationData.features[0].properties.city &&
            locationData.features[0].properties.street
          ) {
            this.form.city = locationData.features[0].properties.city
            this.form.streetName = locationData.features[0].properties.street
            this.locationError = false
          } else {
            this.resetLocation()
          }
        } catch (err) {
          this.resetLocation()
        }
      }
    },
    async sendForm(formData) {
      if (!this.locationError) {
        const response = await this.$axios.$post(
          "https://mockbin.com/request?sendform=true",
          formData
        )
        this.$router.push("/thank-you")
      }
    },
  },
}
</script>

<style></style>
