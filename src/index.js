import SweetModal from './components/SweetModal.vue'
import SweetModalTab from './components/SweetModalTab.vue'

export default {
    install(app) {
        app.component('SweetModal', SweetModal)
        app.component('SweetModalTab', SweetModalTab)
    }
}
