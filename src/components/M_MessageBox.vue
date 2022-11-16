<template>
  <div class="hidden-sm-and-up">
    <M_CommentCard></M_CommentCard>
    <div class="modilemessage-box">
      <div class="user-info">
        <span>昵称:</span
        ><el-input
          v-model="name"
          placeholder="请输入昵称"
          name="name"
        ></el-input>
        <span>邮箱:</span
        ><el-input
          v-model="email"
          placeholder="请输入邮箱"
          name="email"
        ></el-input>
      </div>
      <div class="line"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 6 }"
        placeholder="请输入内容"
        v-model="content"
      >
      </el-input>
      <div v-show="show">
        <span class="preshow">预览：</span>
        <mavon-editor
          class="preview"
          :value="content"
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
          <el-button icon="el-icon-search" circle @click="display"></el-button>
        </div>
        <div class="content-info">
          <span>{{ length }}/130</span>
          <el-button round @click="submit" icon="el-icon-position"></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mavonEditor } from "mavon-editor";
import M_CommentCard from "./M_CommentCard.vue";
import "mavon-editor/dist/css/index.css";
export default {
  name: "MessageBox",
  data() {
    return {
      content: "",
      show: false,
      name: "",
      email: "",
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
    submit() {
      if (this.content.length <= 130) {
        this.$message({
          message: "提交成功",
          type: "success",
        });
      } else {
        this.$message.error({
          message: "提交失败,超出最大文本长度(最大为130字符)",
        });
        return this.content.length;
      }
    },
  },
  computed: {
    length() {
      if (this.content.length <= 130) {
        return this.content.length;
      } else {
        this.$message({
          message: "超出最大文本长度（最大为130字符）",
          type: "warning",
        });
        return this.content.length;
      }
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