//1、引入vue-router
import VueRouter from 'vue-router';

//2、导入底部tabbar对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import VipContainer from './components/tabbar/VipContainer.vue';
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
//导入新闻资讯news跳转的路由组件
import NewsList from './components/news/NewsList.vue';
//导入新闻详情newslist跳转的路由组件
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photos/PhotoList.vue';
//导入商品购买GoodsList跳转的路由组件
import GoodsList from './components/goods/GoodsList.vue';

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
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    }
  ],
  linkActiveClass: 'mui-active'
});

//3、把router暴露出去

export default router;