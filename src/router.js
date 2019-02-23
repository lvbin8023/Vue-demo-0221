//1、引入vue-router
import VueRouter from 'vue-router';

//2、导入底部tabbar对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import VipContainer from './components/tabbar/VipContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
//导入新闻资讯news对应的路由组件
import NewsList from './components/news/NewsList.vue';

//3、创建路由对象
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/vip',
      component: VipContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/home/newslist',
      component: NewsList
    }
  ],
  linkActiveClass: 'mui-active'
});

//3、把router暴露出去

export default router;