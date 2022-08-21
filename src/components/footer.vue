<template>
  <div class="footerContainer">
    <div class="webfooter hidden-sm-and-down">
      <el-image
        :src="require('../assets/imgs/logo.png')"
        fit="cover"
      ></el-image>
      <div class="main">
        <div class="copyright">
          Copyright © <span>{{ time }}</span> luoking.top
        </div>
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
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            <el-image
              style="width: 100px; height: 100px"
              :src="require('../assets/imgs/qq.jpg')"
              fit="cover"
            ></el-image>
          </div>

          <el-button class="iconfont icon-qq"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            <el-image
              style="width: 100px; height: 100px"
              :src="require('../assets/imgs/weixin.jpg')"
              fit="cover"
            ></el-image>
          </div>

          <el-button class="iconfont icon-ai-weixin"></el-button>
        </el-tooltip>
        <el-link
          :underline="false"
          href="https://github.com/make-luo?tab=repositories"
        >
          <el-button class="iconfont icon-github-fill"></el-button>
        </el-link>
        <el-link :underline="false" href="https://gitee.com/luokings">
          <el-button class="iconfont icon-gitee-fill-round"></el-button>
        </el-link>
      </div>
      <div class="introduce">不断学习,拯救处于混沌中的我</div>
    </div>
    <div class="mobilefooter hidden-md-and-up">
      <el-image
        :src="require('../assets/imgs/logo.png')"
        fit="cover"
      ></el-image>
      <div class="main">
        <div class="copyright">
          Copyright © <span>{{ time }}</span> luoking.top
        </div>
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
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            <el-image
              style="width: 100px; height: 100px"
              :src="require('../assets/imgs/qq.jpg')"
              fit="cover"
            ></el-image>
          </div>

          <el-button class="iconfont icon-qq"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" placement="top">
          <div slot="content">
            <el-image
              style="width: 100px; height: 100px"
              :src="require('../assets/imgs/weixin.jpg')"
              fit="cover"
            ></el-image>
          </div>

          <el-button class="iconfont icon-ai-weixin"></el-button>
        </el-tooltip>
        <el-link
          :underline="false"
          href="https://github.com/make-luo?tab=repositories"
        >
          <el-button class="iconfont icon-github-fill"></el-button>
        </el-link>
        <el-link :underline="false" href="https://gitee.com/luokings">
          <el-button class="iconfont icon-gitee-fill-round"></el-button>
        </el-link>
      </div>
      <div class="introduce">不断学习,拯救处于混沌中的我</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    var time = new Date().getFullYear();
    this.time = time;
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webfooter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: (20 / @rem);
  background-color: #fff;
  padding: (20 / @rem) (30 / @rem);
  margin-top: (100 / @rem);
  a {
    font-size: (20 / @rem);
    color: #666;
    text-decoration: none;
  }
  .main {
    margin-left: (140 / @rem);
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
  .el-button {
    padding: 0;
    width: (50 / @rem);
    height: (50 / @rem);
    font-size: (20 / @rem);
    border-radius: 50%;
  }
}

.mobilefooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #fff;
  padding:20px 30px ;
  margin-top:100px ;
  a {
    font-size: 20px;
    color: #666;
    text-decoration: none;
  }
  .main {
    margin: 10px 0;
  }
  .el-image {
    height: 100px;
    border-radius: 50%;
    filter: blur(5px);
    transition: filter 1s;
    &:hover {
      filter: blur(0px);
    }
  }
  .el-button {
    padding: 0;
    width: 50px;
    height: 50px;
    font-size: 20px;
    margin: 0;
    border-radius: 50%;
  }
}
</style>