<template lang="pug">
    input.flex-auto.block.w-full.border.border-gray-600.rounded-md.px-2.py-1.mx-2(
        :type="type" 
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :pattern="pattern"
        :value="value"
        @input="updateValue($event.target.value)"
        @change="valueIsChanged()"
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
        required: {
            type: Boolean,
            default: true
        },
        pattern: {
            type: String,
        },
        value: {
            type: [String, Number]
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value)
        },
        valueIsChanged() {
            this.$emit('change')
        }
    }
}
</script>

<style>
</style>