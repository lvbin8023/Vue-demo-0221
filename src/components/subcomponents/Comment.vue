<template>
  <div class="comment-container">
    <h3>评论区：</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（字数不超过120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="comment-list" v-for="item in comments" :key="item.id">
      <div class="comment-item">
        <h3 class="comment-title">第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12</h3>
        <p class="comment-body">锄禾日当午，汗滴禾下土</p>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>

<script>
import Toast from "mint-ui";

export default {
  data() {
    return {
      comments: []
    };
  },
  props: ["id"],
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.axios
        .get("https://lvbin8023.github.io/Vue-demo-0221/dist/Comment.json")
        .then(result => {
          if (result.data.status === 0) {
            this.comments = result.data.message[this.id - 1];
          } else {
            Toast("获取评论失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-container {
  h3 {
    font-size: 14px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
    padding: 0;
  }
  .comment-list {
    margin: 8px 0;
    .comment-item {
      font-size: 13px;
      .comment-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .comment-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
