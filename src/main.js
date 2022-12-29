import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponents from './index'

const app = createApp(App)

app.use(GlobalComponents)

app.mount('#app')
