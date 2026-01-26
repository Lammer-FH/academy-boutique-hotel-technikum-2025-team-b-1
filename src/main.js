import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/styles/main.css'

import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import {createPinia} from 'pinia'
import router from './router'
import {createApp} from 'vue'
import App from './App.vue'
import {useUserStore} from '@/stores/userStore'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(pinia)
app.use(router)

const userStore = useUserStore()
await userStore.restoreSession()

app.mount('#app')
