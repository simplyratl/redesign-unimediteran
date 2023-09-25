import './assets/main.css'
import 'v-calendar/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import keycloakPlugin from './keycloak/keycloakPlugin'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(keycloakPlugin)

app.mount('#app')
