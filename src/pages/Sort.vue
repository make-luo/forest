<template>
  <div class="sortContainer">
    <div class="sortList">
      <el-col :sm="2" :xs="6" v-for="sort in sortList" :key="sort.id">
        <el-button round class="sort" @click="getblogs(sort.id)">{{
          sort.content
        }}</el-button>
      </el-col>
    </div>
    <div class="websort hidden-xs-only">
      <div class="sortbox">
        <W_BlogCard class="blogcard" :blogCards="showCards"></W_BlogCard>
        <LoadMore v-show="isShowButton"></LoadMore>
        <span v-show="!isShowButton" style="font-size: 13px"
          >-----------我也是有底线的😣-----------</span
        >
      </div>
    </div>
    <div class="modilesort hidden-sm-and-up">
      <div class="sortbox">
        <M_BlogCard class="blogcard" :blogCards="showCards"></M_BlogCard>
        <LoadMore v-show="isShowButton"></LoadMore>
        <span v-show="!isShowButton" style="font-size: 13px"
          >-----------我也是有底线的😣-----------</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import M_BlogCard from "../components/M_BlogCard.vue";
import W_BlogCard from "../components/W_BlogCard.vue";
import LoadMore from "../components/LoadMore.vue";
import { mapGetters, mapState } from "vuex";
import axios from "axios";
import baseURL from "../store/baseURL";
export default {
  name: "Sort",
  data() {
    return {
      sortList: [],
    };
  },
  components: {
    M_BlogCard,
    W_BlogCard,
    LoadMore,
  },
  methods: {
    getblogs(value) {
      if (value == 0) {
        this.$store.dispatch("blogCards/getblogs");
      } else {
        this.$store.dispatch("blogCards/getBlogsById", value);
      }
    },
    //axios的同步初试
    getAllSortList() {
      return axios.get(`${baseURL.baseURL}/tag/getAllTag`);
    },
    async getSortList() {
      let result = null;
      result = await this.getAllSortList();
      this.sortList = result.data;
    },
  },
  computed: {
    ...mapState("blogCards", ["showCards"]),
    ...mapGetters("blogCards", ["isShowButton"]),
  },
  mounted() {
    this.getSortList();
    this.$store.dispatch("blogCards/getblogs");
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.sortList {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: (30 / @rem);
  margin: 30px 0px;
  .sort {
    margin: 5px 0px;
  }
}
.websort {
  max-width: (1250 / @rem);
  margin: 0 auto;
  padding-top: (200 / @rem);
  font-size: (20 / @rem);

  .blogcard {
    margin: (50 / @rem);
  }
}
.modilesort {
  max-width: (1250 / @rem);
  min-width: 96%;
  margin: 0 auto;
  padding-top: (200 / @rem);
  font-size: (20 / @rem);
}
</style>