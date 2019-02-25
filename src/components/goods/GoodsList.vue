<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="../../img/小米6X.jpg" alt="">
      <h1 class=title>小米（Mi）小米6X 64G全网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥1299</span>
          <span class="old">￥1499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../img/小米8SE.jpg" alt="">
      <h1 class=title>小米（Mi）小米8SE 64G全网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥1599</span>
          <span class="old">￥1999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩80件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../img/小米8青春版.jpg" alt="">
      <h1 class=title>小米（Mi）小米8 青春版 64G全网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥1299</span>
          <span class="old">￥1399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩100件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../img/小米6X.jpg" alt="">
      <h1 class=title>小米（Mi）小米6X 64G全网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥1299</span>
          <span class="old">￥1499</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../img/小米8SE.jpg" alt="">
      <h1 class=title>小米（Mi）小米8SE 64G全网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥1599</span>
          <span class="old">￥1999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩80件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../img/小米8青春版.jpg" alt="">
      <h1 class=title>小米（Mi）小米8 青春版 64G全网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥1299</span>
          <span class="old">￥1399</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩100件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  methods:{
    getGoodList() {
      this.axios.get("https://lvbin8023.github.io/Vue-demo-0221/dist/GoodsList.json")
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 6px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 6px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 8px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }

  }
}
</style>
