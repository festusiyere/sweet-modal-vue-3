import { createApp } from 'vue'
import SweetModal from './sweet-modal-vue-3'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(SweetModal)

app.mount('#app')
