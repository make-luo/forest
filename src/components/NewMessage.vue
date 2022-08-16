<template>
  <div class="messages">
    <div class="title">
      <span class="new"> <span class="round"></span> 最新评论</span>
      <div>
        <el-image :src="require('../assets/imgs/underline.png')"></el-image>
      </div>
    </div>
    <div class="messagelist">
      <div class="message">
        <el-image
          :src="require('../assets/imgs/头像.png')"
          fit="cover"
        ></el-image>
        <div class="messageinfo">
          <span class="name">尤雨溪 <span v-show="false">站长</span> </span>
          <p class="content">
            <span v-show="false"></span>小兄弟你Vue写的不行啊
          </p>
        </div>
      </div>
      <div class="message">
        <el-image
          :src="require('../assets/imgs/logo.png')"
          fit="cover"
        ></el-image>
        <div class="messageinfo">
          <span class="name">山野 <span v-show="true">站长</span> </span>
          <p class="content"><span v-show="true">@尤雨溪:</span>你会Vue吗？</p>
        </div>
      </div>
      <div class="message">
        <el-image
          :src="require('../assets/imgs/头像.png')"
          fit="cover"
        ></el-image>
        <div class="messageinfo">
          <span class="name">尤雨溪 <span v-show="false">站长</span> </span>
          <p class="content">
            <span v-show="false"></span>小兄弟，路还长，你才刚刚开始
          </p>
        </div>
      </div>
      <div class="message">
        <el-image
          :src="require('../assets/imgs/logo.png')"
          fit="cover"
        ></el-image>
        <div class="messageinfo">
          <span class="name">山野 <span v-show="true">站长</span> </span>
          <p class="content"><span v-show="true">@尤雨溪:</span>啊！？</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewMessage",
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.messages {
  position: sticky;
  top: 10px;
  background-color: #fff;
  padding: (41 / @rem) (60 / @rem);
  border-radius: (20 / @rem);
  margin-top: (35 / @rem);
  .title {
    .round {
      display: inline-block;
      width: (20 / @rem);
      height: (20 / @rem);
      border-radius: 50%;
      background-color: #4b92a5;
    }
    .new {
      font-size: (25 / @rem);
    }
  }
  .messagelist {
    .message {
      display: flex;
      align-items: center;
      margin-top: (30 / @rem);
      .el-image {
        width: (52 / @rem);
        height: (52 / @rem);
        border-radius: 50%;
      }
      .messageinfo {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: (20 / @rem);
        .name {
          display: flex;
          align-items: center;
          font-size: (20 / @rem);
          color: #4b92a5;
          font-weight: 900;
          span {
            display: inline-block;
            width: (45 / @rem);
            height: (20 / @rem);
            margin-left: (10 / @rem);
            line-height: (20 / @rem);
            border-radius: (8 / @rem);
            font-size: (13 / @rem);
            color: #fff;
            background-color: #4b92a5;
          }
        }
        .content {
          text-align: left;
          width: (200 / @rem);
          font-size: (15 / @rem);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          span {
            color: #4b92a5;
          }
        }
      }
    }
  }
}
</style>