<template lang="pug">
  .container.max-w-screen-sm.px-3
    section.my-6
      h1 Hi Incentro :)
      p Check hier de opdracht van Maarten
    section.my-6
      form
        .flex.flex-row.mb-3
          input.flex-auto.block.w-full.border.border-gray-600.rounded-md.px-2.py-1.mx-2(type="text" placeholder="Voorletters")
          input.flex-auto.block.w-full.border.border-gray-600.rounded-md.px-2.py-1.mx-2(type="text" placeholder="Tussenvoegsel")
        .flex.flex-row.mb-3
          input.flex-auto.block.w-full.border.border-gray-600.rounded-md.px-2.py-1.mx-2(type="text" placeholder="Achternaam")

</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
