<template>
  <div class="comment-container">
    <div class="top">
      <span class="el-icon-ice-cream-round"></span>
      <span>评论</span>
    </div>
    <div class="card-info">
      <p>
        🎭
        <span
          >支持<el-link
            type="primary"
            href="https://github.com/hinesboy/mavonEditor"
            >markdown</el-link
          >格式</span
        >
      </p>
      <p>
        🎃
        <span
          >头像与邮箱绑定<el-link type="primary">Gravatar</el-link>服务</span
        >
      </p>
      <p>
        📭
        <span>邮箱能够收到回复提醒(或许在垃圾邮箱里)</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.comment-container {
  margin: (50 / @rem) (50 / @rem) 0 (50 / @rem);
  padding: (60 / @rem);
  border-radius: (30 / @rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f7f7f5;
  .top {
    margin-bottom: (15 / @rem);
    .el-icon-ice-cream-round {
      color: #4b92a5;
    }
  }
  .card-info {
    font-size: (20 / @rem);
    text-align: left;
  }
}
</style>