<template>
    <div>
        <button @click="modal.open()">Open modal</button>
        <sweet-modal overlay-theme="dark" class="cw-modal" ref="modal" :title="'Hello just'">
            <sweet-modal-tab title="Tab 1" id="tab1" ref="sweetModalTab">Contents of Tab 1</sweet-modal-tab>
            <sweet-modal-tab title="Tab 2" id="tab2" ref="sweetModalTab">Contents of Tab 2</sweet-modal-tab>
            <sweet-modal-tab title="Tab 3" id="tab3" ref="sweetModalTab" disabled>Tab 3 is disabled</sweet-modal-tab>
        </sweet-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SweetModal from '@/components/SweetModal.vue'
// import { SweetModal } from '@/sweet-modal-vue-3'

const modal = ref(null)
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
