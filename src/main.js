import { createApp } from 'vue'
import './style.css'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// pinia
import pinia from './stores'  //引入
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件
pinia.use(piniaPluginPersistedstate) //将插件添加到 pinia 实例上

import App from './App.vue'

// 导入路由文件
import router from './router/index'

const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
