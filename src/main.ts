import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import './assets/style.css';
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
import store from './store';
import router from "./router";
const app=createApp(App).use(store)
app.use(store)
app.use(router)
app.config.productionTip = false;

app.use(Antd)
.mount('#app')
