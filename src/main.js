import './assets/main.css'

import { Icon } from "@iconify/vue";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component("iconify-icon", Icon);

app.use(createPinia())
app.use(router).mount('#app')
