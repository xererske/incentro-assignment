<template lang="pug">
    input.flex-auto.block.w-full.border.border-gray-600.rounded-md.px-2.py-1.mx-2(
        :type="type" 
        :placeholder="placeholder"
        :value="value"
        @input="updateValue($event.target.value)"
        :disabled="disabled"
        :class="disabled ? 'text-gray-600' : ''"
    )
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
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number]
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value)
        },
    }
}
</script>

<style>
</style>