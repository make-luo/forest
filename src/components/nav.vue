<template>
  <div class="side-nav" @mouseleave="noShow">
    <el-image
      class="author-img"
      @mouseover="showNav"
      @click="tohome"
      :src="require('../assets/imgs/logo.png')"
      fit="cover"
    >
    </el-image>
    <transition>
      <ul class="nav-list" v-show="show">
        <li>
          <router-link to="/sort"> <span>📚</span>分类</router-link>
        </li>
        <li>
          <router-link to="/shortPhrase"><span>📖</span>短句</router-link>
        </li>
        <li>
          <router-link to="/comments"><span>💌</span>留言</router-link>
        </li>
        <li>
          <router-link to="/friends"><span>🥳</span>朋友</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showNav() {
      this.show = true;
    },
    noShow() {
      this.show = false;
    },
    tohome(){
        this.$router.push({
          path:'/'
        })
    }
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.side-nav {
  position: fixed;
  width: (220 / @rem);
  height: (280 / @rem);
  top: 0%;
  z-index: 99;
  .author-img {
    position: fixed;
    width: (80 / @rem);
    height: (80 / @rem);
    border-radius: 50%;
    left: (24 / @rem);
    top: (62 / @rem);
  }
  .nav-list {
    position: fixed;
    width: 100%;
    list-style: none;
    font-size: (20 / @rem);
    font-weight: 800;
    transform-origin: 0px 0px;
    a {
      color: #666;
      text-decoration: none;
    }
  }
  .v-leave-to {
    transform: rotate(90deg);
    transition: transform 1.5s;
  }
  .v-enter {
    transform: rotate(-90deg);
  }
  .v-enter-to {
    transform: rotate(0deg);
    transition: transform 1s;
  }

  .nav-list li:nth-child(1) {
    position: fixed;
    top: (16 / @rem);
    left: (125 / @rem);
  }
  .nav-list li:nth-child(2) {
    position: fixed;
    top: (61 / @rem);
    left: (139 / @rem);
  }
  .nav-list li:nth-child(3) {
    position: fixed;
    top: (107 / @rem);
    left: (143 / @rem);
  }
  .nav-list li:nth-child(4) {
    position: fixed;
    top: (155 / @rem);
    left: (126 / @rem);
  }
}
</style>