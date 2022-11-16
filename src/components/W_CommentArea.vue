<template>
  <div class="commentcontainer">
    <div class="webarea-box">
      <h1>2条评论</h1>
      <div class="commentlist">
        <div
          class="comment"
          v-for="comment in commentlist"
          :key="comment.commentId"
        >
          <div class="main-comment">
            <div class="leader-info">
              <el-image
                :src="require(`../assets/imgs/${comment.avatar}.png`)"
                fit="cover"
              ></el-image>
              <div class="messageinfo">
                <div class="name">
                  {{ comment.name }}
                  <span v-show="comment.webmaster">站长</span>
                  <i class="time">{{ comment.time }}</i>
                </div>
                <div class="content">
                  <span v-show="false"></span>{{ comment.content }}
                </div>
              </div>
            </div>
            <el-button
              class="replay-buttom"
              icon="el-icon-s-promotion"
              circle
              @click="comment.showReplay = !comment.showReplay"
            ></el-button>
          </div>
          <div v-show="comment.showReplay">
            <slot></slot>
          </div>
          <div class="replay-list">
            <div
              class="replay-comment"
              v-for="replay_comment in comment.replayList"
              :key="replay_comment.replayId"
            >
              <div class="user">
                <div class="user-info">
                  <el-image
                    :src="
                      require(`../assets/imgs/${replay_comment.avatar}.png`)
                    "
                    fit="cover"
                  ></el-image>
                  <div class="messageinfo">
                    <span class="name"
                      >{{ replay_comment.name
                      }}<span v-show="replay_comment.webmaster">站长</span>
                      <i class="time">{{ replay_comment.time }}</i>
                    </span>
                    <p class="content">
                      <span v-show="replay_comment.replay"
                        >@{{ replay_comment.replay_object }}：</span
                      >{{ replay_comment.content }}
                    </p>
                  </div>
                </div>
                <el-button
                  class="replay-buttom"
                  icon="el-icon-s-promotion"
                  circle
                  @click="
                    replay_comment.showReplay = !replay_comment.showReplay
                  "
                ></el-button>
              </div>

              <div v-show="replay_comment.showReplay">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentArea",
  data() {
    return {
      showSlot: false,
      commentlist: [
        {
          commentId: 1,
          avatar: "头像",
          name: "尤雨溪",
          webmaster: false,
          time: "2022/8/13",
          content: "小兄弟你Vue写的不行啊",
          showReplay: false,
          replayList: [
            {
              replayId: 1,
              avatar: "logo",
              name: "山野",
              webmaster: true,
              time: "2022/8/13",
              replay: true,
              replay_object: "尤雨溪",
              content: "你懂Vue吗？",
              showReplay: false,
            },
            {
              replayId: 2,
              avatar: "钟离",
              name: "钟离",
              webmaster: false,
              time: "2022/8/13",
              replay: true,
              replay_object: "山野",
              content: "他是Vue的爹🤣",
              showReplay: false,
            },
          ],
        },
        {
          commentId: 2,
          avatar: "1",
          name: "燕飞",
          webmaster: false,
          time: "2022/8/13",
          content: "小罗要有出息",
          showReplay: false,
          replayList: [
            {
              replayId: 1,
              avatar: "logo",
              name: "山野",
              webmaster: true,
              time: "2022/8/13",
              replay: true,
              replay_object: "燕飞",
              content: "你谁啊？",
              showReplay: false,
            },
            {
              replayId: 2,
              avatar: "七七",
              name: "七七",
              webmaster: false,
              time: "2022/8/13",
              replay: true,
              replay_object: "山野",
              content: "我是七七，是个僵尸💀",
              showReplay: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    showReplay() {
      this.showSlot = !this.showSlot;
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webarea-box {
  display: flex;
  flex-direction: column;
  border-radius: (40 / @rem);
  padding: (48 / @rem) (71 / @rem);
  margin: (50 / @rem);
  background-color: #fff;
  h1 {
    text-align: left;
    font-size: 30px;
  }
  .commentlist {
    display: flex;
    align-content: center;
    flex-direction: column;

    .replay-list {
      margin-left: (70 / @rem);
      .replay-comment {
        padding: (10 / @rem);
        border-radius: (15 / @rem);
        background-color: #eceff3;
      }
    }
    .main-comment,
    .replay-comment {
      margin-top: (30 / @rem);
      .el-button {
        margin: 0;
        padding: 0;
        width: (40 / @rem);
        height: (40 / @rem);
        color: #fff;
        background-color: #4b92a5;
      }
      .leader-info {
        display: flex;
        align-items: flex-start;
      }
      .user-info {
        display: flex;
        align-items: flex-start;
      }
      .el-image {
        width: (52 / @rem);
        height: (52 / @rem);
        border-radius: 50%;
      }
      .messageinfo {
        display: flex;
        flex-direction: column;
        margin-left: (20 / @rem);
        .time {
          font-style: normal;
          font-size: (15 / @rem);
          font-weight: 100;
          margin-left: (10 / @rem);
          color: #424242;
        }
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
            font-size: (15 / @rem);
            color: #fff;
            background-color: #4b92a5;
          }
        }
        .content {
          width: (720 / @rem);
          text-align: left;
          font-size: (15 / @rem);
          span {
            color: #4b92a5;
          }
        }
      }

      .replay-buttom {
        font-size: (15 / @rem);
        color: #fff;
        background-color: #4b92a5;
      }
    }
    .main-comment {
      display: flex;
      justify-content: space-between;
    }
    .replay-comment {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .user {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>