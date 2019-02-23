<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/cbd.jpg">
          <div class="mui-media-body">
            <h3>{{item.title}}</h3>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </a>
      </li>
      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/cat.jpg">
          <div class="mui-media-body">
            <h3>木屋</h3>
            <p class="mui-ellipsis">
              <span>发表时间：2010-10-10 10:10:10</span>
              <span>点击：278次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
          <div class="mui-media-body">
            <h3>CBD</h3>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12 12:12:12</span>
              <span>点击：286次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/cbd.jpg">
          <div class="mui-media-body">
            <h3>幸福</h3>
            <p class="mui-ellipsis">
              <span>发表时间：2008-08-08 08:08:08</span>
              <span>点击：266次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/cat.jpg">
          <div class="mui-media-body">
            <h3>木屋</h3>
            <p class="mui-ellipsis">
              <span>发表时间：2010-10-10 10:10:10</span>
              <span>点击：278次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
          <div class="mui-media-body">
            <h3>CBD</h3>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12 12:12:12</span>
              <span>点击：286次</span>
            </p>
          </div>
        </a>
      </li>-->
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
      this.axios.get("./NewList.json").then(result => {
        if (result.status === 0) {
          this.newslist = result.message;
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
