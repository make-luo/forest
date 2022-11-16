<template>
  <div id="app">
    <Top></Top>
    <div class="webcontainer hidden-xs-only">
      <el-row :gutter="25">
        <el-col :md="24" :lg="16">
          <!-- 博客列表 -->
          <W_BlogCard
            :blogCards="blogCards"
          ></W_BlogCard>
          <LoadMore></LoadMore>
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
          <M_BlogCard
            :blogCards="blogCards"
          ></M_BlogCard>
          <LoadMore></LoadMore>
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
import axios from "axios";
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
  data() {
    return {
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
  created() {
    //页面一加载就获取博客卡片
    console.log("你好");
    axios
      .get("https://api.uixsj.cn/hitokoto/get?type=social")
      .then((response) => {
        console.log(response);
      });
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
