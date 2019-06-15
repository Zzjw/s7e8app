// 小程序的页面组件   要和app.vue组件区别开来
import Vue from 'vue'
import App from './index' // 加载同目录下的index.vue文件

const app = new Vue(App)
app.$mount()

// export default {
//   config: {
//     // 注意，页面级可配置属性相当于只是`src/main.js`中配置里的`window`部分
//     'navigationBarTitleText': '文章列表页面'
//   }
// }
