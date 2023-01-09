<template>
  <div class="hidden-sm-and-up">
    <M_CommentCard></M_CommentCard>
    <div class="modilemessage-box">
      <div class="user-info">
        <el-form :model="Comment" :rules="rules">
          <el-form-item label="昵称" prop="nickname">
            <el-input
              v-model="Comment.nickname"
              placeholder="请输入昵称"
              name="name"
            ></el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="Comment.email"
              placeholder="请输入邮箱"
              name="email"
            ></el-input>
          </el-form-item>
          <div class="line"></div>
          <el-form-item label="内容" prop="content">
            <el-input
              type="textarea"
              :autosize="{ minRows: 6 }"
              placeholder="请输入内容"
              v-model="Comment.content"
            >
            </el-input
          ></el-form-item>
        </el-form>
        <div v-show="show">
          <span class="preshow">预览：</span>
          <mavon-editor
            class="preview"
            :value="Comment.content"
            :toolbarsFlag="false"
            :html="false"
            :subfield="false"
            :boxShadow="false"
            defaultOpen="preview"
          ></mavon-editor>
        </div>
        <div class="operate-box">
          <div class="operate">
            <el-link
              :underline="false"
              href="https://github.com/hinesboy/mavonEditor"
            >
              <el-button type="primary" icon="el-icon-edit" circle></el-button
            ></el-link>
            <el-button
              icon="el-icon-search"
              circle
              @click="display"
            ></el-button>
          </div>
          <div class="content-info">
            <span>{{ length }}</span>
            <el-button
              round
              @click="submit(Comment)"
              icon="el-icon-position"
            ></el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mavonEditor } from "mavon-editor";
import M_CommentCard from "./M_CommentCard.vue";
import "mavon-editor/dist/css/index.css";
import axios from "axios";
import baseURL from "../store/baseURL";
export default {
  name: "MessageBox",
  props: ["comment", "replay_comment"],
  data() {
    return {
      show: false,
      Comment: {
        addressID: null, //需要接收博客或者留言的id;
        fatherCommentID: null, //父评论的ID
        content: "",
        isWebMaster: null,
        nickname: "",
        email: "",
        subComment: null, //子评论
        replayuserid: null,
      },
      rules: {
        nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        content: [
          {
            required: true,
            message: "评论内容不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {
    mavonEditor,
    M_CommentCard,
  },
  methods: {
    display() {
      this.show = !this.show;
    },
    submit(Comment) {
      if (
        Comment.nickname == "" ||
        !(17 <= Comment.email.length <= 22) ||
        Comment.content == ""
      ) {
        this.$message({
          message: "请将表单填完整😄",
          type: "warning",
        });
        return;
      }

      Comment.addressID = this.$route.query.id;
      console.log("this.comment", this.comment);
      console.log("this.replay_comment", this.replay_comment);
      if (typeof this.comment != "undefined") {
        Comment.fatherCommentID = this.comment.commentID;
        Comment.replayuserid = this.comment.userID;
        axios
          .post(`${baseURL.baseURL}/comment/saveComment`, Comment)
          .then((res) => {
            this.$message({
              message: res.data,
              type: "success",
            });
          });
        this.comment.showReplay = false;
        Comment.content = "";
        Comment.isWebMaster = false;
        Comment.nickname = null;
        Comment.email = null;
        Comment.subComment = null; //子评论
      } else if (typeof this.replay_comment != "undefined") {
        Comment.fatherCommentID = this.replay_comment.fatherCommentID;
        Comment.replayuserid = this.replay_comment.userID;
        axios
          .post(`${baseURL.baseURL}/comment/saveComment`, Comment)
          .then((res) => {
            this.$message({
              message: res.data,
              type: "success",
            });
          });

        this.replay_comment.showReplay = false;
        Comment.content = "";
        Comment.isWebMaster = false;
        Comment.nickname = null;
        Comment.email = null;
        Comment.subComment = null; //子评论
      } else {
        axios
          .post(`${baseURL.baseURL}/comment/saveComment`, Comment)
          .then((res) => {
            this.$message({
              message: res.data,
              type: "success",
            });
          });
        Comment.content = "";
        Comment.isWebMaster = false;
        Comment.nickname = null;
        Comment.email = null;
        Comment.subComment = null; //子评论
      }
      location.reload();
    },
  },
  computed: {
    length() {
      return this.Comment.content.length;
    },
  },
};
</script>
  
  <style lang="less" scoped>
@rem: 32rem;
.modilemessage-box {
  margin: 11px 0px;
  padding: 13px;
  background-color: #fff;
  border-radius: 10px;
  .user-info {
    text-align: left;
    .el-input {
      font-size: 16px;
      background-color: #f5f5f5;
    }
  }
  .line {
    border-bottom: 1px dashed #4b92a5;
    margin: 5px 0;
  }
  .preview {
    min-width: 275px;
  }
  .preview {
    min-height: 16px;
  }
  .preshow {
    font-size: 16px;
  }
  .operate-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8.6px;
    .operate {
      display: flex;
      align-items: flex-end;
      .el-button {
        width: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        font-size: 16px;
        color: #fff;
        margin-left: 4px;
        background-color: #4b92a5;
      }
    }
    .content-info {
      span {
        margin-right: 10px;
      }
      .el-button {
        font-size: 16px;
        width: 50px;
        padding: 10px 0px;
        margin: 0;
        text-align: center;
        color: #fff;
        background-color: #4b92a5;
      }
    }
  }
}
</style>