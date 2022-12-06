<template>
  <div class="articleContainer">
    <div class="modilearticleContainer hidden-md-and-up">
      <div class="articleImg">
        <el-image :src="blogCard.blogCardPicture" fit="cover">
          <div slot="error" class="image-slot">
            <el-image
              :src="blogCard.blogCardPicture"
              fit="cover"
              lazy
            ></el-image></div
        ></el-image>
      </div>
      <div class="articleTitle">
        <div class="describe">
          <span class="round"></span>
          <span>{{ blogCard.title }}</span>
        </div>
        <el-image :src="require(`../assets/imgs/underline.png`)"></el-image>
      </div>
      <mavon-editor
        class="preview"
        :value="content"
        :toolbarsFlag="false"
        :html="false"
        :subfield="false"
        :boxShadow="false"
        codeStyle="vs"
        defaultOpen="preview"
      ></mavon-editor>
      <div class="article-info">
        <div class="short">
          <span class="el-icon-collection-tag"></span>
          {{ blogCard.tagContent }}
        </div>
        <div class="time"><span>发表时间:</span>{{ blogCard.createtime }}</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { mapState } from "vuex";
export default {
  name: "ShowArticle",
  components: {
    mavonEditor,
  },
  computed: {
    ...mapState("blogContent", ["content"]),
    blogCard() {
      return this.$store.getters["blogCards/getOneBlogCard"](
        this.$route.query.id
      );
    },
  },
};
</script>
  
  <style lang="less" scoped>
@rem: 32rem;

.modilearticleContainer {
  background-color: #fbfbfb;
  border-radius: 10px;
  .articleImg {
    .el-image {
      width: 100%;
      height: 210px;
      border-radius: 10px 10px 0 0;
    }
  }
  .articleTitle {
    .describe {
      font-size: 20px;
      .round {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
        background-color: #4b92a5;
      }
    }
  }
  .preview {
    font-size: 16px;
    min-width: 100%;
    min-height: 100px;
    z-index: 98;
  }
  .article-info {
    min-height: 40px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed #4b92a5;
    font-size: 14px;
    .el-icon-collection-tag {
      color: #4b92a5;
    }
  }
}
</style>