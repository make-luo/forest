<template>
  <div>
    <el-row>
      <el-col :md="24">
        <div class="message-box">
          <div class="user-info">
            <span>昵称:</span><input type="text" name="name" />
            <span>邮箱:</span> <input type="email" name="email" />
            <span>网站(选填):</span>
            <input type="text" name="name" />
          </div>
          <div class="line"></div>
          <mavon-editor
            class="edit"
            :toolbarsFlag="false"
            :html="false"
            :subfield="false"
            :boxShadow="false"
            :autofocus="false"
            placeholder="留下你的足迹"
            defaultOpen="edit"
            v-model="content"
          ></mavon-editor>
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
              <el-button
                icon="el-icon-search"
                circle
                @click="display"
              ></el-button>
            </div>
            <div class="content-info">
              <span>{{ length }}/130</span>
              <el-button
                round
                @click="submit"
                icon="el-icon-position"
              ></el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "MessageBox",
  data() {
    return {
      content: "",
      show: false,
    };
  },
  components: {
    mavonEditor,
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
.message-box {
  margin: (50 / @rem);
  padding: (60 / @rem);
  background-color: #f7f7f5;
  border-radius: (30 / @rem);
  .user-info {
    font-size: (20 / @rem);
    input {
      font-size: (20 / @rem);
      width: (160 / @rem);
      background-color: #f7f7f5;
      border: 0px solid transparent;
      outline: none;
    }
  }
  .line {
    border-bottom: 1px dashed #4b92a5;
    margin-bottom: (8 / @rem);
  }
  .edit,
  .preview {
    font-size: (20 / @rem);
    min-width: (300 / @rem);
  }
  .edit {
    min-height: (200 / @rem);
  }
  .preview {
    min-height: (20 / @rem);
  }
  .preshow {
    font-size: (20 / @rem);
  }
  .operate-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: (40 / @rem);
    .operate {
      display: flex;
      align-items: flex-end;

      .el-button {
        width: (40 / @rem);
        height: (40 / @rem);
        margin: 0;
        padding: 0;
        font-size: (15 / @rem);
        color: #fff;
        margin-left: (10 / @rem);
        background-color: #4b92a5;
      }
    }
    .content-info {
      font-size: (20 / @rem);
      span {
        margin-right: (20 / @rem);
      }
      .el-button {
        width: (60 / @rem);
        height: (40 / @rem);
        padding: 0;
        margin: 0;
        font-size: (20 / @rem);
        text-align: center;
        color: #fff;
        background-color: #4b92a5;
      }
    }
  }
}
</style>