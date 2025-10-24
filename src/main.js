import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/styles/main.css';

import router from './router';
import {createApp} from 'vue'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')