import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index';

var app = createApp(App);

app.use(router);
app.mount('#app')
