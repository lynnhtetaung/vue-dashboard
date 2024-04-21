// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
// import { initAuth } from './services/auth';
import router from './router';

const app = createApp(App);

// initAuth({
//   domain: process.env.VUE_APP_AUTH0_DOMAIN,
//   clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
// }).then(() => {
//   app.mount('#app');
// });
app.use(router).mount('#app');
