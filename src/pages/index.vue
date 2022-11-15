<template>
  <div id="app">
    <Top></Top>
    <div class="webcontainer hidden-sm-and-down">
      <el-row :gutter="25">
        <el-col :md="24" :lg="16">
          <!-- 博客列表 -->
          <BlogCard :blogCards="blogCards"></BlogCard>
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
    <div class="modelcontainer hidden-md-and-up">
      <el-row :gutter="25">
        <el-col :md="24" :lg="16">
          <!-- 博客列表 -->
          <BlogCard :blogCards="blogCards"></BlogCard>
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
  </div>
</template>

<script>
import Top from "../components/top";
import BlogCard from "../components/BlogCard";
import AuthorInfo from "../components/AuthorInfo.vue";
import NewMessage from "../components/NewMessage.vue";
import LoadMore from "../components/LoadMore.vue";
import axios from "axios";
export default {
  name: "Index",
  components: {
    Top,
    BlogCard,
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
  mounted: {
    //页面一加载就获取博客卡片
    activated() {
      //activated路由组件被激活时触发（组件展示）
      console.log();
    },
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
