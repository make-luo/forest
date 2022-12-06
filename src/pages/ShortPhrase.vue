<template>
  <div class="shortContrainer">
    <div class="webshort hidden-sm-and-down">
      <Introduce :title="title" :content="content"></Introduce>
      <ShortCard></ShortCard>
      <LoadMore v-show="isShowButton"></LoadMore>
      <span v-show="!isShowButton" style="font-size: 13px"
        >-----------我也是有底线的😣-----------</span
      >
    </div>
    <div class="mobileshort hidden-md-and-up">
      <Introduce :title="title" :content="content"></Introduce>
      <ShortCard></ShortCard>
      <LoadMore v-show="isShowButton"></LoadMore>
      <span v-show="!isShowButton" style="font-size: 13px"
        >-----------我也是有底线的😣-----------</span
      >
    </div>
  </div>
</template>


<script>
import Introduce from "../components/Introduce.vue";
import ShortCard from "../components/ShortCard.vue";
import LoadMore from "../components/LoadMore.vue";
import { mapGetters } from "vuex";
export default {
  name: "ShortPhrase",
  components: {
    ShortCard,
    Introduce,
    LoadMore,
  },
  data() {
    return {
      title: "短句",
      content: `我是个逗逼，但时常又喜欢谈论大道理的
      人，有时候也会造点我圈子中的梗，供大伙乐呵乐呵。
      这里记录着我偶尔看到或者想到的小句子希望你能开心，或有所启发。`,
    };
  },
  computed: {
    ...mapGetters("shortCards", ["isShowButton"]),
  },
  mounted() {
    this.$store.dispatch("shortCards/getShortCards");
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webshort {
  max-width: (1170 / @rem);
  padding-top: (200 / @rem);
  margin: 0 auto;
  font-size: (20 / @rem);
}
.mobileshort {
  max-width: (1250 / @rem);
  min-width: 96%;
  padding-top: (200 / @rem);
  margin: 0 auto;
  font-size: 16px;
}
</style>