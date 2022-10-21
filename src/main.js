import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import themePlugin from './stores/themePlugin'
import logPlugin from './stores/logPlugin'

const app = createApp(App)

const pinia = createPinia()
// 使用 themePlugin 插件
pinia.use(themePlugin)
// 使用 logPlugin 插件
pinia.use(logPlugin)


app.use(pinia)

app.mount('#app')
