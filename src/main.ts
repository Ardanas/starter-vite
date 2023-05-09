import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './style.css'
import messages from '@intlify/unplugin-vue-i18n/messages'
import App from './App.vue'
import router from '@/router'

const { registerSW } = await import('virtual:pwa-register')
registerSW({ immediate: true })

const pinia = createPinia()

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages,
})

const app = createApp(App)
app.use(router).use(pinia).use(i18n).mount('#app')
