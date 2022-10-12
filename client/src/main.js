import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({store}) => {
    pinia.store = store
})
app.use(createPinia())
app.use(router)

app.mount('#app')
