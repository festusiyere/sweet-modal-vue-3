<template>
    <div :class="['sweet-modal-tab', { isActive }]">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Not supported for all vue versions yet
// defineOptions({
//     name: 'sweet-modal-tab'
// })

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
