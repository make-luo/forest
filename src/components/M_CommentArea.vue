<template>
  <div class="commentcontainer">
    <div class="modilearea-box">
      <h1>{{ countComments }}条评论</h1>
      <div class="modilecommentlist">
        <div
          class="comment"
          v-for="comment in commentlist"
          :key="comment.commentID"
        >
          <div class="main-comment">
            <div class="leader-info">
              <el-image :src="comment.avatar" fit="cover" lazy>
                <div slot="error" class="image-slot">
                  <el-image
                    :src="comment.avatar"
                    fit="cover"
                    lazy
                  ></el-image></div
              ></el-image>
              <div class="messageinfo">
                <div class="name">
                  {{ comment.nickname }}
                  <span v-show="comment.isWebMaster">站长</span>
                  <i class="time">{{ comment.createtime }}</i>
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
            <slot :comment="comment"></slot>
          </div>
          <div class="replay-list">
            <div
              class="replay-comment"
              v-for="replay_comment in comment.subComment"
              :key="replay_comment.commentID"
            >
              <div class="user">
                <div class="user-info">
                  <el-image :src="replay_comment.avatar" fit="cover" lazy>
                    <div slot="error" class="image-slot">
                      <el-image
                        :src="replay_comment.avatar"
                        fit="cover"
                        lazy
                      ></el-image>
                    </div>
                  </el-image>
                  <div class="messageinfo">
                    <span class="name"
                      >{{ replay_comment.nickname
                      }}<span v-show="replay_comment.isWebMaster">站长</span>
                      <i class="time">{{ replay_comment.createtime }}</i>
                    </span>
                    <p class="content">
                      <span v-show="replay_comment.replayusername != ''"
                        >@{{ replay_comment.replayusername }}：</span
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
                <slot :replay_comment="replay_comment"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LoadMore v-show="countComments != countShow"></LoadMore>
    <span v-show="countComments == countShow" style="font-size: 13px"
      >-----------我也是有底线的😣-----------</span
    >
  </div>
</template>
  <script>
import { mapGetters } from "vuex";
import LoadMore from "./LoadMore.vue";
export default {
  name: "CommentArea",
  props: ["commentlist"],
  components: {
    LoadMore,
  },
  data() {
    return {
      showSlot: false,
    };
  },
  methods: {
    showReplay() {
      this.showSlot = !this.showSlot;
    },
  },
  computed: {
    ...mapGetters("commentList", ["countComments"]),
    ...mapGetters("commentList", ["countShow"]),
  },
};
</script>
  
  <style lang="less" scoped>
@rem: 32rem;

.modilearea-box {
  display: flex;
  flex-direction: column;
  border-radius: (40 / @rem);
  padding: (48 / @rem) (71 / @rem);
  background-color: #fff;
  h1 {
    text-align: left;
    font-size: 20px;
  }
  .modilecommentlist {
    display: flex;
    align-content: center;
    flex-direction: column;
    .comment {
      margin-bottom: 10px;
    }
    .replay-list {
      margin-left: 15px;
      .replay-comment {
        padding: 3px;
        border-radius: 4px;
        background-color: #eceff3;
      }
    }
    .main-comment,
    .replay-comment {
      margin-top: 6.5px;
      .el-button {
        margin: 0;
        padding: 0;
        width: 30px;
        height: 30px;
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
        width: 90%;
      }
      .el-image {
        flex-shrink: 0;
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
      .messageinfo {
        display: flex;
        flex-direction: column;
        margin-left: 4.5px;
        .time {
          font-style: normal;
          font-size: 14px;
          font-weight: 100;
          margin-left: 3px;
          color: #424242;
        }
        .name {
          display: flex;
          align-items: center;
          font-size: 15px;
          color: #4b92a5;
          font-weight: 900;
          span {
            display: inline-block;
            width: 30px;
            height: 20px;
            margin-left: 10px;
            line-height: 20px;
            border-radius: 8px;
            font-size: 10px;
            color: #fff;
            background-color: #4b92a5;
          }
        }
        .content {
          width: 100%;
          text-align: left;
          font-size: 16px;
          span {
            color: #4b92a5;
          }
        }
      }
      .replay-buttom {
        font-size: 16px;
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