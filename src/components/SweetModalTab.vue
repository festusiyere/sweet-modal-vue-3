<template>
    <div :class="['sweet-modal-tab', { active }]">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },

    id: {
        type: String,
        required: true
    },

    icon: {
        type: String,
        required: false,
        default: null
    },

    disabled: {
        type: Boolean,
        required: false,
        default: false
    }
})
const active = ref(false)
defineExpose(['active'])
</script>

<script>
export default {
    name: 'tab'
}
</script>
