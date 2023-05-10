import { createApp } from 'vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './style.css'
import App from './App.vue'
import router from '@/router'
import type { UserModule } from '@/types'

const app = createApp(App)

Object.values(import.meta.glob<{ install: UserModule }>('./modules/**', { eager: true })).forEach((i) => {
  i.install({ app, router })
})

app.use(router).mount('#app')
