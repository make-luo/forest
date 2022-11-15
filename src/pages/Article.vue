<template>
  <div class="commentcontainer">
    <div class="webcomment-box hidden-sm-and-down">
      <ShowArticle></ShowArticle>
      <MessageBox> </MessageBox>
      <CommentArea>
        <MessageBox></MessageBox>
      </CommentArea>
    </div>
    <div class="modilecomment-box hidden-md-and-up">
      <ShowArticle></ShowArticle>
      <MessageBox> </MessageBox>
      <CommentArea>
        <MessageBox></MessageBox>
      </CommentArea>
    </div>
  </div>
</template>

<script>
import CommentArea from "../components/CommentArea.vue";
import MessageBox from "../components/MessageBox.vue";
import ShowArticle from "../components/ShowArticle.vue";

export default {
  name: "Article",
  components: {
    CommentArea,
    MessageBox,
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
  min-width: 320px;
  margin: 0 auto;
  font-size: 16px;
}
</style>