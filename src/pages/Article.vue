<template>
  <div class="commentcontainer">
    <div class="webcomment-box hidden-xs-only">
      <W_ShowArticle></W_ShowArticle>
      <W_MessageBox> </W_MessageBox>
      <W_CommentArea :commentlist="showComment">
        <!-- 作用域插槽 -->
        <template slot-scope="{ comment, replay_comment }">
          <W_MessageBox
            :comment="comment"
            :replay_comment="replay_comment"
          ></W_MessageBox>
        </template>
      </W_CommentArea>
    </div>
    <div class="modilecomment-box hidden-sm-and-up">
      <M_ShowArticle></M_ShowArticle>
      <M_MessageBox></M_MessageBox>
      <M_CommentArea :commentlist="showComment">
        <!-- 作用域插槽 -->
        <template slot-scope="{ comment, replay_comment }">
          <M_MessageBox
            :comment="comment"
            :replay_comment="replay_comment"
          ></M_MessageBox>
        </template>
      </M_CommentArea>
    </div>
  </div>
</template>

<script>
import M_CommentArea from "../components/M_CommentArea.vue";
import W_CommentArea from "../components/W_CommentArea.vue";
import M_MessageBox from "../components/M_MessageBox.vue";
import W_MessageBox from "../components/W_MessageBox.vue";
import W_ShowArticle from "../components/W_ShowArticle.vue";
import M_ShowArticle from "../components/M_ShowArticle.vue";
import { mapState } from "vuex";
export default {
  name: "Article",
  components: {
    M_CommentArea,
    W_CommentArea,
    W_MessageBox,
    M_MessageBox,
    W_ShowArticle,
    M_ShowArticle,
  },
  computed: {
    ...mapState("commentList", ["showComment"]),
  },
  mounted() {
    //触发actions
    this.$store.dispatch("blogCards/getblogs");
    this.$store.dispatch(
      "blogContent/getBlogContentByID",
      this.$route.query.id
    );
    this.$store.dispatch(
      "commentList/getCommentListByBlogID",
      this.$route.query.id
    );

  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webcomment-box {
  max-width: (1170 / @rem);
  padding-top: (200 / @rem);
  margin: 0 auto;
}
.modilecomment-box {
  max-width: (1250 / @rem);
  min-width: 96%;
  margin: 0 auto;
  font-size: 16px;
}
</style>