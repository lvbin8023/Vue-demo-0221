<template>
  <div class="shop-container">
    <div class="goods-list">
      <!-- 商品列表区域 -->
      <div class="mui-card" v-for="(item,index) in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodid="item.id"></numbox>
                <a href="#" @click="remove(item.id,index)">删除</a>
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
import Toast from "mint-ui";

export default {
  data() {
    return {
      goodslist: [],
      idArray: []
    };
  },
  created() {
    this.getShopCarList();
  },
  methods: {
    getShopCarList() {
      this.$store.state.car.forEach(item => {
        this.idArray.push(item.id);
      });
      if (this.idArray.length <= 0) {
        return;
      }
      this.axios
        .get("https://lvbin8023.github.io/Vue-demo-0221/dist/ShopCarList.json")
        .then(result => {
          if (result.data.status === 0) {
            for (let i = 0; i < this.idArray.length; i++) {
              let string = result.data.message[parseInt(this.idArray[i]) - 1];
              this.goodslist.push(string);
            }
          } else {
            Toast("获取列表失败");
          }
        });
    },
    remove(id, i) {
      this.goodslist.splice(i, 1);
      this.$store.commit("removeFromCar", id);
    }
  },
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
