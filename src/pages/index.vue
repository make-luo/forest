<template>
  <div id="app">
    <Top></Top>
    <div class="webcontainer hidden-xs-only">
      <el-row :gutter="25">
        <el-col :md="24" :lg="16">
          <W_BlogCard :blogCards="showCards"></W_BlogCard>
          <LoadMore v-show="isShowButton"></LoadMore>
          <span v-show="!isShowButton" style="font-size:13px">-----------我也是有底线的😣-----------</span>
        </el-col>
        <el-col class="hidden-md-and-down" :lg="8">
          <el-row>
            <el-col :lg="24"><AuthorInfo></AuthorInfo></el-col>
            <el-col :lg="24"> <NewMessage></NewMessage> </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="modelcontainer hidden-sm-and-up">
      <el-row :gutter="25">
        <el-col :md="24" :lg="16">
          <!-- 博客列表 -->
          <M_BlogCard :blogCards="showCards"></M_BlogCard>
          <LoadMore v-show="isShowButton"></LoadMore>
          <span v-show="!isShowButton" style="font-size:13px">-----------我也是有底线的😣-----------</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Top from "../components/top";
import M_BlogCard from "../components/M_BlogCard.vue";
import W_BlogCard from "../components/W_BlogCard.vue";
import AuthorInfo from "../components/AuthorInfo.vue";
import NewMessage from "../components/NewMessage.vue";
import LoadMore from "../components/LoadMore.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Index",
  components: {
    Top,
    M_BlogCard,
    W_BlogCard,
    AuthorInfo,
    NewMessage,
    LoadMore,
  },
  computed: {
    ...mapState("blogCards", ["showCards"]),
    ...mapGetters("blogCards", ["isShowButton"]),
  },
  mounted() {
    this.$store.dispatch("blogCards/getblogs");
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webcontainer {
  max-width: (1250 / @rem);
  min-width: 370px;
  margin: 0 auto;
}
.modelcontainer {
  max-width: (1250 / @rem);
  min-width: 96%;
  margin: 0 auto;
}
</style>
