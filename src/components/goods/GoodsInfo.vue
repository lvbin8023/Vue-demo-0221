<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图区域 -->
          <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt="">
            </mt-swipe-item>-->
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）</div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div
        class="mui-card-header mui-card-media"
        style="height:40vw;background-image:url('//skyuyuni-image.oss-cn-hangzhou.aliyuncs.com/cbd.jpg')"
      ></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>Posted on January 18, 2016</p>
          <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">Like</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
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
}
</style>
