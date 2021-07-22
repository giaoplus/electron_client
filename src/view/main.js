import { createApp } from 'vue'
import App from './App.vue'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import {
  create,
  NIcon,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider
} from 'naive-ui'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const naive = create({
  components: [
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
    NLayoutFooter,
    NIcon
  ]
})

const app = createApp(App)
app.use(naive)
app.mount('#app')
