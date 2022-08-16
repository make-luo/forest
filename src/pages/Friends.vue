<template>
  <div class="friend-box">
    <div class="introduce"><span>👋🏼</span>和我一起做朋友吧</div>
    <div class="one">
      <el-image :src="require('../assets/imgs/logo.png')"></el-image>
    </div>
    <div class="format">
      <div class="base"><span>🧐</span> 基本信息格式</div>
      <ul>
        <li><span>名称：山村野人</span></li>
        <li><span>链接：https://luoking.com</span></li>
        <li><span>描述：喜欢独居的人，不是野兽就是神</span></li>
        <li><span>头像：https://luoking.com/logo.png</span></li>
      </ul>
    </div>
    <div class="two">
      <div class="contact-information">
        <h4>添加方式</h4>
        <span
          >在留言区留下你的信息即可。快去试试吧
          <span class="point">👇🏻</span></span
        >
        <button class="button" @click="toComment">留言区</button>
      </div>
    </div>
    <div class="friend-list">
      <el-row>
        <el-col :xs="6" :sm="6" v-for="card in cards" :key="card.id">
          <el-link href="https://element.eleme.io" :underline="false" target="_blank">
            <FriendCardVue :card="card"></FriendCardVue
          ></el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import FriendCardVue from "../components/FriendCard.vue";
export default {
  name: "Friends",
  components: { FriendCardVue },
  data() {
    return {
      cards: [
        {
          id: 1,
          avatar: "钟离",
          name: "钟离",
          sign: "旅途终将会迎来终点不必匆忙",
        },
        {
          id: 2,
          avatar: "七七",
          name: "七七",
          sign: "我是七七，是个僵尸",
        },
        {
          id: 3,
          avatar: "早柚",
          name: "早柚",
          sign: "不准在我睡觉的时候，偷偷摸我的头",
        },
        {
          id: 4,
          avatar: "钟离",
          name: "钟离",
          sign: "旅途终将会迎来终点不必匆忙",
        },
        {
          id: 5,
          avatar: "七七",
          name: "七七",
          sign: "我是七七，是个僵尸",
        },
        {
          id: 6,
          avatar: "早柚",
          name: "早柚",
          sign: "不准在我睡觉的时候，偷偷摸我的头",
        },
      ],
    };
  },
  methods: {
    toComment() {
      this.$router.push({
        path: "/comments",
      });
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.friend-box {
  position: relative;
  max-width: (1255 / @rem);
  min-width: (800 / @rem);
  margin: 0 auto;
  padding: (20 / @rem);
  .one {
    display: flex;
    justify-content: flex-end;
    .el-image {
      width: (200 / @rem);
    }
  }
  .introduce {
    width: (400 / @rem);
    height: (90 / @rem);
    margin: (40 / @rem);
    border-radius: (30 / @rem);
    line-height: (90 / @rem);
    font-size: (25 / @rem);
    background-color: #fff;
  }
  .format {
    width: (500 / @rem);
    border-radius: (30 / @rem);
    background-color: #fff;
    text-align: left;
    padding: (20 / @rem) (30 / @rem);
    font-size: (20 / @rem);
    font-weight: 700;
    margin: (40 / @rem);
    li {
      list-style: none;
    }
  }
  .two {
    display: flex;
    justify-content: flex-end;
    .contact-information {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: (400 / @rem);
      font-size: (25 / @rem);
      text-align: left;
      color: #4b92a5;
      padding: (20 / @rem) (30 / @rem);
      border-radius: (30 / @rem);
      background-color: #fff;
      margin: (40 / @rem) 0px;
      .point {
        margin-left: (20 / @rem);
      }
      h4 {
        text-align: center;
      }
      .button {
        display: block;
        border-radius: (10 / @rem);
        font-size: (15 / @rem);
        border: 0px solid transparent;
        background-color: #4b92a5;
        padding: (5 / @rem);
      }
    }
  }
}
</style>