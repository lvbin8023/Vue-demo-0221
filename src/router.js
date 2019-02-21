//1、引入vue-router
import VueRouter from 'vue-router';

//2、导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';

//3、创建路由对象
const router = new VueRouter({
  routes: [{
    path: '/home',
    component: HomeContainer
  }],
  linkActiveClass: 'mui-active'
});

//3、把router暴露出去

export default router;