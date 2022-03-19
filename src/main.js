import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import plugin from './plugin.js';
const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(pinia).use(plugin).mount('#app')
