import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router.js';
import axios from 'axios';
import VueAxios from 'vue-axios'; //方便数据请求
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    car: [

    ]
  },
  mutations: {
    addToCar(state, goodsinfo) {
      let flag = false;
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }
    }
  },
  getters: {
    getAllCount(state) {
      let counts = 0;
      state.car.forEach(item => {
        counts += item.count;
      });
      return counts;
    }
  }
});

//按需导入mint-ui中的组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button
} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//按需导入mui中的样式
import './lib/mui/css/mui.min.css';

//导入mui中的icon-extra样式
import './lib/mui/css/icons-extra.css';

const root = document.createElement('div');
document.body.append(root);

let vm = new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount(root);