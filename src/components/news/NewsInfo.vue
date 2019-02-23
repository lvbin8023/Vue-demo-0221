<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      id: this.$route.params.id, //讲url地址中传递过来的ID值，挂载到data，方便调用
      newsinfo: []
    };
  },
  created() {},
  methods: {
    getNewsInfo() {
      this.axios
        .get(
          "https://lvbin8023.github.io/Vue-demo-0221/dist/NewsInfo.json" +
            this.id
        )
        .then(result => {
          if (result.data.status === 0) {
            this.newsinfo = result.data.message[0];
          } else {
            Toast("获取新闻失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    margin: 15px 0;
    color: red;
    text-align: center;
  }
  .subtitle {
    font-size: 13px;
    color: #87cfef;
    display: flex;
    justify-content: space-between;
  }
}
</style>
