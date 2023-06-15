import type { App } from 'vue'
import SweetModal from './components/SweetModal.vue'
import SweetModalTab from './components/SweetModalTab.vue'

export default {
    install(app: App) {
        app.component('SweetModal', SweetModal)
        app.component('SweetModalTab', SweetModalTab)
    }
}

export { SweetModal, SweetModalTab }
