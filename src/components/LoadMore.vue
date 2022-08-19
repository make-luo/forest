<template>
  <div class="loadcontainer">
    <el-button type="primary" round>加载更多</el-button>
  </div>
</template>

<script>
export default {
  name: "LoadMore",
};
</script>

<style lang="less" scoped>
@rem: 32;
.loadcontainer {

}
  .el-button {
    font-size: (20 / @rem);
  }
  .el-button--primary{
    background-color: #4b92a5;
  }
</style>