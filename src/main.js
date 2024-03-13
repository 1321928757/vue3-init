import { createApp } from 'vue'
import './style.css'

// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// pinia
import pinia from './stores'  //引入

import App from './App.vue'

// 导入路由文件
import router from './router/index'

const app = createApp(App)

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
