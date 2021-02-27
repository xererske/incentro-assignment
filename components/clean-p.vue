<template lang="pug">
    p.mb-1.font-semibold {{text}}
</template>

<script>
export default {
  name: "CleanP",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
