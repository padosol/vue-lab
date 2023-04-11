import { createApp } from 'vue';
import App from './App.vue';

// 새로 구현함
import router from './routes/index';
import store from './store/index';

var app = createApp(App);

app.use(router);

app.use(store);

app.mount('#app')
