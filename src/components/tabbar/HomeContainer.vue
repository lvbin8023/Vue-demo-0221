<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt="">
      </mt-swipe-item>-->
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu5.png" alt="">
          <div class="mui-media-body">休闲专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../img/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { Toast } from "mint-ui";

export default {
  data() {
    // return {
    //   lunboList: []
    // };
    return {};
  },
  created() {
    // this.getLunbotu();
  },
  methods: {
    // getLunbotu() {
    //   this.axios
    //     .get("http://www.liulongbin.top:3005/api/getlunbo")
    //     .then(result => {
    //       // console.log(result.data);
    //       if (result.data.status === 0) {
    //         this.lunboList = result.data.message;
    //         Toast("加载轮播图成功");
    //       } else {
    //         Toast("加载轮播图失败");
    //       }
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 166px;
  .mint-swipe-item {
    width: 100%;
    height: 100%;
    &:nth-child(1) {
      background: url("../../img/1.jpg") center no-repeat;
      background-size: cover;
    }
    &:nth-child(2) {
      background: url("../../img/2.jpg") center no-repeat;
      background-size: cover;
    }
    &:nth-child(3) {
      background: url("../../img/3.jpg") center no-repeat;
      background-size: cover;
    }
  }
  /*img *{
    width: 100%;
    height: 100%;
  }*/
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: none;
    img {
      width: 60px;
    }
    .mui-media-body {
      font-size: 13px;
    }
  }
}
</style>
