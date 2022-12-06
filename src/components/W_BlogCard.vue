<template>
  <el-row>
    <el-col :md="24">
      <div
        class="webcontainer"
        v-for="blogCard in blogCards"
        :key="blogCard.id"
      >
        <div class="img-box">
          <router-link
            class="link"
            :to="{
              path: '/article',
              query: {
                id: blogCard.id, //传递参数
              },
            }"
          >
            <el-image :src="blogCard.blogCardPicture" fit="cover" lazy>
              <div slot="error" class="image-slot">
                <el-image
                  :src="blogCard.blogCardPicture"
                  fit="cover"
                  lazy
                ></el-image>
              </div> </el-image
          ></router-link>
        </div>
        <div class="card-content">
          <div class="content">
            <h4 class="title">{{ blogCard.title }}</h4>
            <span class="short">{{ blogCard.brief }}</span>
          </div>
          <div class="author-targ">
            <div class="author">
              <el-image :src="blogCard.userPicture" lazy>
                <div slot="error" class="image-slot">
                  <el-image
                    :src="blogCard.userPicture"
                    fit="cover"
                    lazy
                  ></el-image>
                </div>
              </el-image>
              <div class="blog-info">
                <h4 class="name">{{ blogCard.nickname }}</h4>
                <span class="time">{{ blogCard.createtime }}</span>
              </div>
            </div>
            <div class="targ">
              <span>{{ blogCard.tagContent }}</span>
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
  props: ["blogCards"],
  data() {
    return {};
  },
  watch: {
    blogCards: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {},
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webcontainer {
  width: 100%;
  border-radius: (20 / @rem);
  color: #3e5b77;
  background-color: #fff;
  .img-box {
    width: 100%;
    height: (300 / @rem);
    border-radius: (20 / @rem) (20 / @rem) 0px 0px;
    overflow: hidden;
    .el-image {
      transition: all 2s;
      &:hover {
        transform: scale(1.25, 1.25);
      }
    }

    .el-icon-loading {
      margin-top: 50px;
      font-size: 50px;
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
        font-size: (20 / @rem);
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

