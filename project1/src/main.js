import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Axios from 'axios';

import './assets/css/base.css';
import './assets/js/font';

//数据交互插件的设置
Vue.prototype.$http = Axios;
//注册路由
Vue.use(VueRouter);
import routes from './routes.config';

//引入过滤器
import filters from './filters/index';
//将过滤器配置到全局Vue下面
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

//创建路由实例
const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
