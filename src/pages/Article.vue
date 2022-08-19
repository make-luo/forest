<template>
  <div class="comment-box">
    <ShowArticle></ShowArticle>
    <MessageBox> </MessageBox>
    <CommentArea>
      <MessageBox></MessageBox>
    </CommentArea>
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
.comment-box {
  max-width: (1170 / @rem);
  padding-top: (200 / @rem);
  margin: 0 auto;
}
</style>