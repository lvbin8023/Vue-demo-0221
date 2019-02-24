<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 小标题 -->
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//导入Toast
import { Toast } from "mint-ui";
//导入评论子组件
import comment from "../subcomponents/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, //讲url地址中传递过来的ID值，挂载到data，方便调用
      newsinfo: []
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.axios
        .get("https://lvbin8023.github.io/Vue-demo-0221/dist/NewsInfo.json")
        .then(result => {
          if (result.data.status === 0) {
            this.newsinfo = result.data.message[this.id - 1];
          } else {
            Toast("获取新闻失败");
          }
        });
    }
  },
  components: {
    "comment-box": comment
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
