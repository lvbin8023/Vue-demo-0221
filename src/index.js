import Vue from 'vue';
import App from './App.vue';

//按需导入mint-ui中的组件
import {
  Header
} from 'mint-ui';
Vue.component(Header.name, Header);
//按需导入mui中的组件
import './lib/mui/css/mui.min.css';

const root = document.createElement('div');
document.body.append(root);

let vm = new Vue({
  render: (h) => h(App)
}).$mount(root);