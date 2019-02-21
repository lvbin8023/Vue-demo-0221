import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import axios from 'axios';
import VueAxios from 'vue-axios';//方便数据请求

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

//按需导入mint-ui中的组件
import {
  Header, Swipe, SwipeItem
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//按需导入mui中的样式
import './lib/mui/css/mui.min.css';

//导入mui中的icon-extra样式
import './lib/mui/css/icons-extra.css';

const root = document.createElement('div');
document.body.append(root);

let vm = new Vue({
  render: (h) => h(App),
  router
}).$mount(root);