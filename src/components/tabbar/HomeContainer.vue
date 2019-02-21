<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h1>这是home组件</h1>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          // console.log(result.data);
          if (result.data.status === 0) {
            this.lunboList = result.data.message;
            Toast("加载轮播图成功");
          } else {
            Toast("加载轮播图失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    background-color: orange;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
