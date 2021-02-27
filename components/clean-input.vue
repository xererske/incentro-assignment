<template lang="pug">
    input.flex-auto.block.w-full.border.border-gray-600.rounded-md.px-2.py-1.mx-2(:type="type" :placeholder="placeholder")
</template>

<script>
export default {
    name: 'CleanInput',
    props: {
        type: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
</style>