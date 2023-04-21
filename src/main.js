import { createApp } from 'vue'
import daisyui from 'daisyui';
import emailjs from 'emailjs-com';

import App from './App.vue'
import router from './router'
import store from './store'
import { Roulette } from 'vue3-roulette'

import './index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(daisyui)
app.use(emailjs)
app.component("roulette", Roulette)

app.mount('#app')
