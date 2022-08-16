<template>
  <div class="footerContainer">
    <el-image :src="require('../assets/imgs/logo.png')" fit="cover"></el-image>
    <div class="main">
      <div class="copyright">Copyright © <span>{{time}}</span> luoking.top</div>
      <el-link
        :underline="false"
        type="info"
        href="https://element.eleme.io"
        target="_blank"
        >站点地图</el-link
      >
      <el-divider direction="vertical"></el-divider>
      <router-link to="/comments">留言</router-link>
      <el-divider direction="vertical"></el-divider>
      <router-link to="/friends">友人</router-link>
      <div class="icp">
        <el-link
          :underline="false"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          type="info"
          >赣ICP备2022003798号</el-link
        >
      </div>
    </div>
    <div class="introduce">不断学习,拯救处于混沌中的我</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
        time:"",
    }
  },
  mounted() {
    var time =  new Date().getFullYear();
    this.time = time
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.footerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: (20 / @rem);
  background-color: #fff;
  padding: (20 / @rem) (30 / @rem);
  margin-top: (100/@rem);
  a {
    font-size: (20 / @rem);
    color: #666;
    text-decoration: none;
  }
  .main{
    margin-left: (140/@rem);
  }
  .el-image {
    height: (100 / @rem);
    border-radius: 50%;
    filter: blur(5px);
    transition: filter 1s;
    &:hover {
      filter: blur(0px);
    }
  }
}
</style>