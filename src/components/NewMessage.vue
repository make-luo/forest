<template>
  <div class="messages">
    <div class="title">
      <span class="new"> <span class="round"></span> 最新评论</span>
      <div>
        <el-image :src="require('../assets/imgs/underline.png')"></el-image>
      </div>
    </div>

    <div class="messagelist">
      <div
        class="message"
        v-for="message in newMessage"
        :key="message.commentID"
      >
        <el-image :src="message.avatar" fit="cover">
          <div slot="error" class="image-slot">
            <el-image :src="message.avatar" fit="cover" lazy></el-image>
          </div>
        </el-image>
        <div class="messageinfo">
          <span class="name"
            >{{ message.nickname }}
            <span v-show="message.isWebMaster">站长</span>
          </span>
          <p class="content">
            <span v-show="message.replayusername"
              >@{{ message.replayusername }}：</span
            >{{ message.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseURL from "../store/baseURL";
export default {
  name: "NewMessage",
  data() {
    return {
      newMessage: [],
    };
  },
  mounted() {
    axios
      .get(`${baseURL.baseURL}/comment/getLatestComment`)
      .then(({ data }) => {
        data.forEach((e) => {
          axios({
            url: `${baseURL.baseURL}/picture/getAvatar/${e.pictureID}`,
            responseType: "blob",
          }).then((res) => {
            let data = new Blob([res.data]);
            let url = window.URL.createObjectURL(data);
            e.avatar = url;
          });
        });
        this.newMessage = data;
      });
  },
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