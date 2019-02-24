<template>
  <div class="comment-container">
    <h3>评论区：</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容（字数不超过120字）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="comment-list">
      <div class="comment-item">
        <h3 class="comment-title">第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12</h3>
        <p class="comment-body">锄禾日当午，汗滴禾下土</p>
      </div>
    </div>
    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>

<script>
export default {};
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
