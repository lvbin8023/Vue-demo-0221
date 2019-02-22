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
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
    <h1>这是home组件</h1>
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
  height: 200px;
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
</style>
