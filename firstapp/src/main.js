import Vue from 'vue'
import App from './App'
// import Fly from 'flyio'
// const fly=new Fly()

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
