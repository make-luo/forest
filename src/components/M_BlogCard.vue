<template>
  <el-row>
    <el-col :md="24">
      <div
        class="mobilecontainer"
        v-for="(blogCard, index) in blogCards"
        :key="index"
      >
        <div class="img-box">
          <router-link :to="blogCard.link">
            <el-image
              :src="blogCard.image"
              fit="cover"
              lazy
              @error="reload(blogCard, index)"
            ></el-image>
          </router-link>
        </div>
        <div class="card-content">
          <div class="content">
            <h4 class="title">{{ blogCard.title }}</h4>
            <span class="short">{{ blogCard.introduce }}</span>
          </div>
          <div class="author-targ">
            <div class="author">
              <el-image
                :src="require(`../assets/imgs/${blogCard.authorAvatar}.png`)"
              ></el-image>
              <div class="blog-info">
                <h4 class="name">{{ blogCard.authorName }}</h4>
                <span class="time">{{ blogCard.time }}</span>
              </div>
            </div>
            <div class="targ">
              <span>{{ blogCard.tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
  
  <script>
import axios from "axios";
export default {
  name: "BlogCard",
  props: ["blogCards"],
  data() {
    return {};
  },
  methods: {
    reload(blogCard, index) {
      //出现加载不出就换张照片
      let temp = blogCard.image;
      blogCard.image = this.blogCards[index + 3].image;
      this.blogCards[index + 3].image = temp;
    },
  },
};
</script>
  
<style lang="less" scoped>
@rem: 32rem;
.mobilecontainer {
  width: 100%;
  border-radius: 20px;
  color: #3e5b77;
  background-color: #fff;
  margin-top: 30px;
  .img-box {
    width: 100%;
    height: 150px;
    border-radius: 20px 20px 0px 0px;
    overflow: hidden;
    .el-image {
      transition: all 2s;
      &:hover {
        transform: scale(1.25, 1.25);
      }
    }
  }

  .card-content {
    padding: 0px 20px 0px;
    margin-bottom: 30px;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .title {
        padding-top: 10px;
        font-size: 20px;
      }
      .short {
        width: 300px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-top: (15 / @rem);
        font-size: 10px;
      }
    }
    .author {
      display: flex;
      align-items: center;
      font-size: 12px;
      .el-image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
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
      padding: 0 15px;
      height: 30px;
      border-radius: 20px;
      background-color: #d9d9d9;
      font-size: 12px;
    }
  }
  .author-targ {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: (40 / @rem) 0px (0 / @rem);
    padding-bottom: (40 / @rem);
  }
}
</style>
  
  