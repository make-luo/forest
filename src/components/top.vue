<template>
  <div class="main">

    <el-image
      class="backimg"
      :src="require('../assets/imgs/8.png')"
      fit="cover"
    >
    </el-image>
    <div class="el-icon-cloudy one"></div>
    <div class="el-icon-cloudy two"></div>
    <div class="el-icon-partly-cloudy three"></div>

    <el-image
      class="cloud-anmation"
      :src="require('../assets/imgs/过度条.png')"
    ></el-image>
  </div>
</template>

<script>

export default {
  name: "Nav",

};
</script>

<style lang="less" scoped>
@rem: 32rem;
.backimg {
  width: 100%;
  height: (800 / @rem);
}
.main {
  position: relative;
  .el-icon-cloudy {
    position: absolute;
    color: #fff;
    transition: animation-play-state 0s;
    &:hover {
      animation-play-state: paused;
    }
  }
  .el-icon-partly-cloudy {
    position: absolute;
    color: #fff;
    transition: animation-play-state 0s;
    &:hover {
      animation-play-state: paused;
    }
  }
  .one {
    left: 20%;
    top: 30%;
    font-size: (130 / @rem);
    animation: move 2s linear infinite alternate;
  }
  .two {
    left: 75%;
    top: 40%;
    font-size: (150 / @rem);
    animation: move 2s linear infinite alternate;
  }
  .three {
    left: 60%;
    top: 10%;
    font-size: (100 / @rem);
    animation: move 1.5s linear infinite alternate;
  }
  .cloud-anmation {
    position: absolute;
    left:(0 / @rem) ;
    bottom: (-53 / @rem);
    transform: scale(1,0.5);
  }
}
@keyframes move {
  0% {
    transform: translate(0px);
  }
  100% {
    transform: translate(100 / @rem);
  }
}
</style>