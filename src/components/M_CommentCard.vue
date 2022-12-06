<template>
  <div class="comment-container">
    <div class="modilecommentcard hidden-md-and-up">
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
            >头像采用<el-link
              type="primary"
              href="https://github.com/wave-charts/avatar-gen/"
              >Wave</el-link
            ></span
          >
        </p>
        <p>
          📭
          <span>邮箱能够收到回复提醒(这个功能没做)</span>
        </p>
      </div>
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
.modilecommentcard {
  margin: 10px 0px;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f7f7f5;
  font-size: 16px;
  .top {
    margin-bottom: 5px;
    .el-icon-ice-cream-round {
      color: #4b92a5;
    }
  }
  .card-info {
    text-align: left;
  }
}
</style>