<template>
  <div class="loadcontainer">
    <el-button
      type="primary"
      round
      @click="addshow(4)"
      v-show="$route.path == '/article' || $route.path == '/comments'"
      >加载更多</el-button
    >
    <el-button
      type="primary"
      round
      @click="showMoreShort(5)"
      v-show="$route.path == '/shortPhrase'"
      >加载更多</el-button
    >

    <el-button
      type="primary"
      round
      @click="showMoreCards(5)"
      v-show="$route.path == '/' || $route.path == '/sort'"
      >加载更多</el-button
    >
  </div>
</template>

<script>
export default {
  name: "LoadMore",
  data() {
    return { originCount: 4, cardsCount: 5 };
  },
  methods: {
    addshow(value) {
      value = this.originCount + value;
      this.originCount = value;
      this.$store.commit("commentList/getMoreComment", this.originCount);
    },
    showMoreCards(value) {
      value = this.cardsCount + value;
      this.cardsCount = value;
      this.$store.commit("blogCards/getMoreCards", this.cardsCount);
    },
    showMoreShort(value) {
      value = this.cardsCount + value;
      this.cardsCount = value;
      this.$store.commit("shortCards/getMoreShort", this.cardsCount);
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 32;

.loadcontainer {
  margin-top: 20px;
}
.el-button {
  font-size: (20 / @rem);
}
.el-button--primary {
  background-color: #4b92a5;
}
</style>