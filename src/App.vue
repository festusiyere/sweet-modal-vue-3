<script setup lang="ts">
import { SweetModal } from './index'
import { ref } from 'vue'

const modal = ref<InstanceType<typeof SweetModal>>()
const open = () => {
    modal.value?.open()
}
</script>

<template>
    <button @click="open">open</button>
    <SweetModal ref="modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ex velit libero saepe placeat magni fugit! Nostrum sint natus eligendi?</SweetModal>
</template>
