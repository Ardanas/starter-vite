import { createApp } from 'vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';

import router from '@/router';
import './style.css';
import App from './App.vue';

createApp(App).use(router).mount('#app');
