<template>
  <div id="app">
    <Top></Top>
    <div class="container">
      <el-row :gutter="25">
        <el-col :md="24" :lg="16">
          <!-- 博客列表 -->
          <BlogCard></BlogCard>
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
export default {
  name: "Index",
  components: {
    Top,
    BlogCard,
    AuthorInfo,
    NewMessage,
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.container {
  max-width: (1255 / @rem);
  margin: 0 auto;
}
</style>
