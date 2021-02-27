<template lang="pug">
    .container.max-w-screen-sm.px-3
        slot
</template>

<script>
export default {
  name: "CleanLayout",
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
