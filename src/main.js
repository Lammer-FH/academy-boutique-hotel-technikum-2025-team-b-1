import '@/assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createPinia } from 'pinia'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { useUserStore } from '@/stores/userStore'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const userStore = useUserStore()
userStore.restoreSession()

app.mount('#app')
