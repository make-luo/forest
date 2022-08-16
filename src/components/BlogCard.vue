<template>
  <el-row>
    <el-col :md="24">
      <div
        class="card-container"
        v-for="blogCard in blogCards"
        :key="blogCard.blogId"
      >
        <div class="img-box">
          <router-link :to="blogCard.link">
            <el-image
              :src="require(`../assets/imgs/${blogCard.image}.png`)"
              fit="cover"
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
export default {
  name: "BlogCard",
  data() {
    return {
      blogCards: [
        {
          blogId: 1,
          image: 7,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 5,
          image: 4,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 2,
          image: 1,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 3,
          image: 2,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
        {
          blogId: 4,
          image: 3,
          link: "/article",
          title: "初始Vue",
          introduce:
            "想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象....",
          authorAvatar: "logo",
          authorName: "山野",
          time: "2022/08/09",
          tag: "Vue",
        },
      ],
    };
  },
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

