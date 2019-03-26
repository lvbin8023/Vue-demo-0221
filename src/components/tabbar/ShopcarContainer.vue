<template>
  <div class="shop-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="//skyuyuni-image.oss-cn-hangzhou.aliyuncs.com/%E5%B0%8F%E7%B1%B36X.jpg">
            <div class="info">
              <h1>小米（Mi）小米6X 64G全网通版</h1>
              <p>
                <span class="price">￥1299</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等</div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/Shopcar_numbox.vue";

export default {
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shop-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    .info {
      h1 {
        font-size: 13px;
      }
      p .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>
