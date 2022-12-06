<template>
  <div class="articleContainer">
    <div class="webarticleContainer hidden-xs-only">
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
        <el-image :src="require(`../assets/imgs/underline.png`)"> </el-image>
      </div>
      <mavon-editor
        class="preview"
        :value="content"
        :toolbarsFlag="false"
        :html="false"
        :subfield="false"
        :boxShadow="false"
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
import { mapGetters, mapState } from "vuex";
export default {
  name: "ShowArticle",
  components: {
    mavonEditor,
  },
  props: ["blogContent"],
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

.webarticleContainer {
  margin: 0 (50 / @rem);
  background-color: #fbfbfb;
  border-radius: (50 / @rem);
  .articleImg {
    .el-image {
      width: 100%;
      height: (300 / @rem);
      border-radius: (50 / @rem) (50 / @rem) 0 0;
    }
  }
  .articleTitle {
    .describe {
      .round {
        display: inline-block;
        width: (20 / @rem);
        height: (20 / @rem);
        border-radius: 50%;
        margin-right: (20 / @rem);
        background-color: #4b92a5;
      }
    }
  }
  .preview {
    font-size: (20 / @rem);
    min-width: 100%;
    min-height: (100 / @rem);
  }
  .article-info {
    min-height: (90 / @rem);
    padding: 0 (30 / @rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed #4b92a5;
    font-size: (20 / @rem);
    .el-icon-collection-tag {
      color: #4b92a5;
    }
  }
}
</style>