<template>
  <div id="app" class="app">
    <Nav class="nav"></Nav>
    <!-- 保持路由挂载 -->

    <router-view></router-view>

    <el-backtop target=".app"></el-backtop>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/nav.vue";
import Footer from "./components/footer.vue";
import Article from "./pages/Article.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
    Article,
  },
};
</script>

<style>
#app {
  font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei Light,
    WenQuanYi Micro Hei, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eceff3;
}
.app {
  height: 100vh;
  overflow-x: hidden;
}
.nav {
  z-index: 100;
}
</style>
