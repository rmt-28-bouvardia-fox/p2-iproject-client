import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(vue3GoogleLogin,{
    clientId: "705189776530-v3u0c3io7q9fkd89m7tvq957gvh007aj.apps.googleusercontent.com"
})

app.use(router)

app.use(pinia)

app.mount('#app')
