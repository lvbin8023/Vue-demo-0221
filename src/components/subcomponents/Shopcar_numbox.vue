<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
      @change="countChanged"
      ref="numberbox"
      readonly
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
//引入mui初始化数字输入框
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      this.$store.commit("upDateCar", {
        id: this.goodid,
        count: this.$refs.numberbox.value
      });
    }
  },
  props: ["initcount", "goodid"]
};
</script>

<style lang="scss" scoped>
.mui-numbox {
  height: 25px;
}
</style>

