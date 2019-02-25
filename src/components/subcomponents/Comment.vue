<template>
  <div class="comment-container">
    <h3>评论区：</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（字数不超过120字）" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="comment-list" v-for="(item,i) in comments" :key="item.id">
      <div class="comment-item">
        <h3
          class="comment-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}</h3>
        <p class="comment-body">{{item.content}}</p>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import Toast from "mint-ui";

export default {
  data() {
    return {
      comments: [],
      msg: ""
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
            this.comments = this.comments.concat(result.data.message);
          } else {
            Toast("获取评论失败");
          }
        });
    },
    getMore() {
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空！");
      }
      this.axios
        .post("https://lvbin8023.github.io/Vue-demo-0221/dist/Comment.json", {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.data.status===0) {
            let comments = {
              user_name:"匿名用户",
              add_time:Date.now(),
              content:this.msg.trim()
            };
            this.comments.unshift(comments);
            this.msg = '';
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
    padding: 8px;
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
        text-indent: 1em;
      }
    }
  }
}
</style>
