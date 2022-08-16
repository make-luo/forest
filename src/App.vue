<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
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
</style>
