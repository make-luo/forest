<template>
  <ul class="nav-list" style="font-size: 20px">
    <el-image :src="require('../assets/imgs/7.png')"></el-image>
    <li>
      <router-link to="/" @click="close"> <span>🏠</span>主页</router-link>
      <span>&gt;</span>
    </li>
    <li>
      <router-link to="/sort" @click="close"> <span>📚</span>分类</router-link>
      <span>&gt;</span>
    </li>
    <li>
      <router-link to="/shortPhrase" @click="close"
        ><span>📖</span>短句</router-link
      >
      <span>&gt;</span>
    </li>
    <li>
      <router-link
        :to="{
          path: '/comments',
          query: {
            id: 9999, //最大参数，代表留言区
          },
        }"
        @click="close"
        ><span>💌</span>留言</router-link
      >
      <span>&gt;</span>
    </li>
    <li>
      <router-link to="/friends" @click="close"
        ><span>🥳</span>朋友</router-link
      >
      <span>&gt;</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavDrawer",
  props: ["drawer"],
  methods: {
    close() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="less" scoped>
.nav-list {
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-bottom: 20px;
    span {
      margin-right: 20px;
    }
  }
  a {
    color: #666;
    text-decoration: none;
  }
}
</style>