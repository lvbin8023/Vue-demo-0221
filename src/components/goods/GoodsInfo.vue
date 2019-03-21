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
      <div class="mui-card-header">{{goodsinfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{goodsinfo.sell_price}}</span>
          </p>
          <p>购买数量：
            <numbox></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsinfo.goods_no}}</p>
          <p>库存数量：{{goodsinfo.stock_quantity}}</p>
          <p>上架时间：{{goodsinfo.add_time}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <br>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "mint-ui";
//导入数字选择框组件
import numbox from "../subcomponents/Goodsinfo_numberbox.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsinfo: []
    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      this.axios
        .get("https://lvbin8023.github.io/Vue-demo-0221/dist/GoodsInfo.json")
        .then(result => {
          if (result.data.status === 0) {
            this.goodsinfo = result.data.message[this.id - 1];
            console.log(result.data.message[this.id - 1]);
          } else {
            Toast("获取列表失败");
          }
        });
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
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

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
  }
}
</style>
