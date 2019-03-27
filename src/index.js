import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router.js";
import axios from "axios";
import VueAxios from "vue-axios"; //方便数据请求
import Vuex from "vuex";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

let car = JSON.parse(localStorage.getItem("car") || "[]");
let store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo) {
      let flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count);
          flag = true;
          return true;
        }
      });
      if (!flag) {
        state.car.push(goodsinfo);
      }
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    upDateCar(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count);
          return true;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    removeFromCar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1);
          return true;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
        }
      });
      localStorage.setItem("car", JSON.stringify(state.car));
    }
  },
  getters: {
    getAllCount(state) {
      let counts = 0;
      state.car.forEach(item => {
        counts += item.count;
      });
      return counts;
    },
    getGoodsCount(state) {
      let c = {};
      state.car.forEach(item => {
        c[item.id] = item.count;
      });
      return c;
    },
    getGoodsSelected(state) {
      let select = {};
      state.car.forEach(item => {
        select[item.id] = item.selected;
      });
      return select;
    },
    getGoodsCountAndAmount(state) {
      let c = {
        count: 0,
        amount: 0
      };
      state.car.forEach(item => {
        if (item.selected) {
          c.count += item.count;
          c.amount += item.price * c.count;
        }
      });
      return c;
    }
  }
});

//按需导入mint-ui中的组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button,
  Switch
} from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);

//按需导入mui中的样式
import "./lib/mui/css/mui.min.css";

//导入mui中的icon-extra样式
import "./lib/mui/css/icons-extra.css";

const root = document.createElement("div");
document.body.append(root);

let vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount(root);