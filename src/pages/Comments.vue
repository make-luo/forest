<template>
  <div class="comment-box">
    <Introduce :title="title" :content="content"></Introduce>
    <MessageBox v-show="show"></MessageBox>
    <CommentArea>
      <MessageBox></MessageBox>
    </CommentArea>
  </div>
</template>

<script>
import MessageBox from "../components/MessageBox.vue";
import CommentArea from "../components/CommentArea.vue";
import Introduce from "../components/Introduce.vue";
export default {
  name: "Comments",
  data() {
    return {
      show: true,
      title: "留言",
      content:
        "从大一打算学C++，但没想到却走了学Java的路，本来就单纯的想做个后端， 没想到前端也要了解，这个暑假我又把前端的三剑客和Vue又重新学了一遍，却 又发现想完整的做一个项目，还需 要会UI画图，前几天学了PS，发现现在市 场上早就不用PS做UI了，于是又学了现在的XD(虽然不是主流)。自己做的项目需要 上线，必须要会点运维，好在之前就自学了Docker和Nignx。真神奇，不知不觉把自己 逼成全栈了。 若你也有类似的经历，欢迎留言与我分享",
    };
  },
  components: {
    MessageBox,
    CommentArea,
    Introduce,
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.comment-box {
  max-width: (1170 / @rem);
  margin: 0 auto;
  padding-top: (400 / @rem);
  font-size: (20 / @rem);
}
</style>