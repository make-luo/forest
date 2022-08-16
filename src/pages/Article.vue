<template>
  <div class="comment-box">
    <ShowArticle></ShowArticle>
    <CommentCard></CommentCard>
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
import CommentCard from "../components/CommentCard.vue";
export default {
  name: "Article",
  components: {
    CommentArea,
    MessageBox,
    ShowArticle,
    CommentCard,
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.comment-box {
  max-width: (1255 / @rem);
  padding-top: (400 / @rem);
  margin: 0 auto;
}
</style>