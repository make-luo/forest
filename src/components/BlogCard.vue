<template>
  <el-row>
    <el-col :md="24">
      <div class="card-container">
                <div class="img-box">
          <el-image
            :src="require('../assets/imgs/7.png')"
            fit="cover"
          ></el-image>
        </div>
        <div class="card-content">
          <div class="content">
            <h4 class="title">初始Vue</h4>
            <span class="short"
              >想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....</span
            >
          </div>
          <div class="author-targ">
            <div class="author">
              <el-image :src="require('../assets/imgs/logo.png')"></el-image>
              <div class="blog-info">
                <h4 class="name">山野</h4>
                <span class="time">2022/08/09</span>
              </div>
            </div>
            <div class="targ">
              <span>Vue</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :md="24">
      <div class="card-container">
                <div class="img-box">
          <el-image
            :src="require('../assets/imgs/2.png')"
            fit="cover"
          ></el-image>
        </div>
        <div class="card-content">
          <div class="content">
            <h4 class="title">提升专注力</h4>
            <span class="short"
              >1.将目标设置的清晰，2.获得有效反馈，3.逃离舒适区....</span
            >
          </div>
          <div class="author-targ">
            <div class="author">
              <el-image :src="require('../assets/imgs/logo.png')"></el-image>
              <div class="blog-info">
                <h4 class="name">山野</h4>
                <span class="time">2022/08/09</span>
              </div>
            </div>
            <div class="targ">
              <span>方法</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :md="24">
      <div class="card-container">
        <div class="img-box">
          <el-image
            :src="require('../assets/imgs/1.png')"
            fit="cover"
          ></el-image>
        </div>

        <div class="card-content">
          <div class="content">
            <h4 class="title">科目四笔记</h4>
            <span class="short"
              >从桥下过来，转弯过来，走直了之后打左转向灯，然后到箭头那里...</span
            >
          </div>
          <div class="author-targ">
            <div class="author">
              <el-image :src="require('../assets/imgs/logo.png')"></el-image>
              <div class="blog-info">
                <h4 class="name">山野</h4>
                <span class="time">2022/08/09</span>
              </div>
            </div>
            <div class="targ">
              <span>方法</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :md="24">
      <div class="card-container">
        <div class="img-box">
          <el-image
            :src="require('../assets/imgs/起风了.png')"
            fit="cover"
          ></el-image>
        </div>

        <div class="card-content">
          <div class="content">
            <h4 class="title">一个重要的内置关系</h4>
            <span class="short"
              >一个重要的内置关系：VueComponent.prototype.__proto__ ===
              Vue.prototype....</span
            >
          </div>
          <div class="author-targ">
            <div class="author">
              <el-image :src="require('../assets/imgs/logo.png')"></el-image>
              <div class="blog-info">
                <h4 class="name">山野</h4>
                <span class="time">2022/08/09</span>
              </div>
            </div>
            <div class="targ">
              <span>Vue</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "BlogCard",
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.card-container {
  width: 100%;
  border-radius: (20 / @rem);
  color: #3e5b77;
  background-color: #fff;
  .img-box {
    width: 100%;
    height: (300 / @rem);
    border-radius: (20 / @rem) (20 / @rem) 0px 0px;
    overflow: hidden;
  }
  .el-image {
    transition: all 2s;
    &:hover {
      transform: scale(1.25, 1.25);
    }
  }
  .card-content {
    padding: 0px (30 / @rem) 0px (70 / @rem);
    margin-bottom: (40 / @rem);
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title {
        padding-top: (13 / @rem);
        font-size: (30 / @rem);
      }
      .short {
        width: (400 / @rem);
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-top: (15 / @rem);
        font-size: (15 / @rem);
      }
    }
    .author {
      display: flex;
      align-items: center;

      font-size: (12 / @rem);
      .el-image {
        width: (30 / @rem);
        height: (30 / @rem);
        border-radius: 50%;
        margin-right: (15 / @rem);
      }
      .blog-info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
    .targ {
      display: flex;
      justify-content: center;
      align-items: center;
      width: (58 / @rem);
      height: (30 / @rem);
      border-radius: (20 / @rem);
      background-color: #d9d9d9;
      font-size: (12 / @rem);
    }
  }
  .author-targ {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: (40 / @rem) 0px (0 / @rem);
    padding-bottom: (10 / @rem);
  }
}
</style>

