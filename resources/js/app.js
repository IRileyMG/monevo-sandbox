import { createApp } from 'vue'
import router from "./router";
import App from './_App.vue';
import '@/css/app.css';
 
createApp(App)
    .use(router)
    .mount("#app");