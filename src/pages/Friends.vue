<template>
  <div class="friendcontainer">
    <div class="webfriend-box hidden-sm-and-down">
      <div class="introduce"><span class="hand">👋🏼</span>和我一起做朋友吧</div>
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
          <el-col :xs="8" :sm="6" v-for="card in cards" :key="card.id">
            <el-link
              :href="card.webaddress"
              :underline="false"
              target="_blank"
            >
              <FriendCard :card="card"></FriendCard
            ></el-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="modilefriend-box hidden-md-and-up">
      <div class="introduce"><span class="hand">👋🏼</span>和我一起做朋友吧</div>
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
          <el-col :xs="8" :sm="6" v-for="card in cards" :key="card.id">
            <el-link
              :href="card.webaddress"
              :underline="false"
              target="_blank"
            >
              <FriendCard :card="card"></FriendCard
            ></el-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FriendCard from "../components/FriendCard.vue";
export default {
  name: "Friends",
  components: { FriendCard },
  data() {
    return {
      cards: [],
    };
  },
  methods: {
    toComment() {
      this.$router.push({
        path: "/comments",
        query: {
          id: 9999,
        },
      });
    },
  },
  mounted() {
    axios
      .get("http://10.10.120.234:8080/friend/getAllFriends")
      .then(({ data }) => {
        this.cards = data;
      });
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webfriend-box {
  position: relative;
  max-width: (1170 / @rem);
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
    .hand {
      margin-right: (20 / @rem);
      display: inline-block;
      animation: round 0.8s linear infinite alternate;
    }
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
.modilefriend-box {
  position: relative;
  max-width: (1250 / @rem);
  min-width: 96%;
  margin: 0 auto;
  padding: 2px;
  .one {
    display: flex;
    justify-content: flex-end;
    .el-image {
      width: 100px;
    }
  }
  .introduce {
    width: 220px;
    height: 40px;
    margin: 8px;
    border-radius: 10px;
    line-height: 40px;
    font-size: 20px;
    background-color: #fff;
    .hand {
      margin-right: 10px;
      display: inline-block;
      animation: round 0.8s linear infinite alternate;
    }
  }
  .format {
    width: 240px;
    border-radius: 10px;
    background-color: #fff;
    text-align: left;
    padding: 10px 14px;
    font-size: 14px;
    font-weight: 700;
    margin: 5px;
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
      width: 220px;
      font-size: 14px;
      text-align: left;
      color: #4b92a5;
      padding: 10px 12px;
      border-radius: 10px;
      background-color: #fff;
      margin: 10px 0px;
      .point {
        margin-left: 24px;
      }
      h4 {
        text-align: center;
      }
      .button {
        display: block;
        border-radius: 5px;
        font-size: 14px;
        border: 0px solid transparent;
        background-color: #4b92a5;
        padding: 2px;
      }
    }
  }
}

@keyframes round {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>