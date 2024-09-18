<template>
    <div :class="['sweet-modal-tab', { isActive }]">
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['mounted'])

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
const isActive = ref(false)
</script>

<script>
export default {
    name: 'tab'
}
</script>
