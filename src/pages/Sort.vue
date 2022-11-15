<template>
  <div class="sortContainer">
    <div class="websort hidden-sm-and-down">
      <div class="sortbox">
        <div class="sortList">
          <el-col :lg="4" :sm="6" v-for="sort in sortList" :key="sort.sortId">
            <el-button round class="sort">{{ sort.sortName }}</el-button>
          </el-col>
        </div>
        <BlogCard class="blogcard" :blogCards="blogCards"></BlogCard>
      </div>
    </div>
    <div class="modilesort hidden-md-and-up">
      <div class="sortbox">
        <div class="sortList">
          <el-row>
            <el-col :xs="6" :sm="4" v-for="sort in sortList" :key="sort.sortId">
              <el-button round class="sort">{{ sort.sortName }}</el-button>
            </el-col></el-row
          >
        </div>
        <BlogCard class="blogcard" :blogCards="blogCards"></BlogCard>
        <LoadMore></LoadMore>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
import LoadMore from "../components/LoadMore.vue";
export default {
  name: "Sort",
  data() {
    return {
      sortList: [
        {
          sortId: 1,
          sortName: "全部",
        },
        {
          sortId: 2,
          sortName: "Vue",
        },
        {
          sortId: 3,
          sortName: "JAVA",
        },
        {
          sortId: 4,
          sortName: "游戏",
        },
        {
          sortId: 5,
          sortName: "书籍",
        },
        {
          sortId: 4,
          sortName: "游戏",
        },
        {
          sortId: 5,
          sortName: "书籍",
        },
      ],
      blogCards: [
        {
          blogId: 1,
          image: 7,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 5,
          image: 4,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 2,
          image: 1,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 3,
          image: 2,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 4,
          image: 3,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
      ],
    };
  },
  components: {
    BlogCard,
    LoadMore,
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.websort {
  max-width: (1250 / @rem);
  margin: 0 auto;
  padding-top: (200 / @rem);
  font-size: (20 / @rem);
  .sortList {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #fff;
    margin: (50 / @rem);
    border-radius: (30 / @rem);
    padding: (40 / @rem);
  }
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
  .sortList {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: (30 / @rem);
    margin: 30px 0px ;
    .sort{
      margin: 5px 0px;
    }
  }
}
</style>