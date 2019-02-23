<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.axios
        .get("https://lvbin8023.github.io/Vue-demo-0221/dist/NewList.json")
        .then(result => {
          if (result.data.status === 0) {
            this.newslist = result.data.message;
          } else {
            Toast("获取新闻列表失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h3 {
      font-size: 15px;
    }
    .mui-ellipsis {
      font-size: 13px;
      color: #87cfef;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
