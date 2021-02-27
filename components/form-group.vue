<template functional lang="pug">
    .flex.flex-row.mb-3(:class='props.classes')
        slot
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    classes: {
      type: String,
    },
  },
}
</script>

<style></style>
