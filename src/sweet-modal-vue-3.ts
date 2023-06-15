import type { App } from 'vue'
import SweetModal from './components/SweetModal.vue'

export default {
    install(app: App) {
        app.component('SweetModal', SweetModal)
    }
}
