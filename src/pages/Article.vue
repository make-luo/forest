<template>
  <div class="commentcontainer">
    <div class="webcomment-box hidden-xs-only">
      <ShowArticle></ShowArticle>
      <W_MessageBox> </W_MessageBox>
      <W_CommentArea>
        <W_MessageBox></W_MessageBox>
      </W_CommentArea>
    </div>
    <div class="modilecomment-box hidden-sm-and-up">
      <ShowArticle></ShowArticle>
      <M_MessageBox></M_MessageBox>
      <M_CommentArea>
        <M_MessageBox></M_MessageBox>
      </M_CommentArea>
    </div>
  </div>
</template>

<script>
import M_CommentArea from "../components/M_CommentArea.vue";
import W_CommentArea from "../components/W_CommentArea.vue";
import M_MessageBox from "../components/M_MessageBox.vue";
import W_MessageBox from "../components/W_MessageBox.vue";
import ShowArticle from "../components/ShowArticle.vue";

export default {
  name: "Article",
  components: {
    M_CommentArea,
    W_CommentArea,
    W_MessageBox,
    M_MessageBox,
    ShowArticle,
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