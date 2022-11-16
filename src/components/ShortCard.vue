<template>
  <div class="shortcontainer">
    <div class="webshortcard hidden-xs-only">
      <div class="card" v-for="card in cards" :key="card.id">
        <el-divider class="time">{{ card.time }}</el-divider>
        <div class="content">{{ card.content }}</div>
      </div>
    </div>
    <div class="modileshortcard hidden-sm-and-up">
      <div class="card" v-for="card in cards" :key="card.id">
        <el-divider class="time">{{ card.time }}</el-divider>
        <div class="content">{{ card.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShortCard",
  data() {
    return {
      cards: [
        {
          id: 1,
          time: "大二下学期，某位刘少爷的灵魂发问",
          content: "诶！我队友呢？",
        },
        {
          id: 2,
          time: "2022/6/12",
          content: "一个无论付出多少，也一定要做出的事叫信仰",
        },
        {
          id: 3,
          time: "2022/6/4",
          content: "路虽远，行则降至，事虽难，行则可成",
        },
        {
          id: 4,
          time: "2021/8/8",
          content: "待到秋来九月八，我花开后百花杀",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webshortcard {
  background-color: #fff;
  padding: (40 / @rem);
  margin: (50 / @rem);
  border-radius: (30 / @rem);
  display: flex;
  flex-direction: column;
  .card {
    margin: (10 / @rem);
    padding: (10 / @rem);
    border-radius: (30 / @rem);
    background-color: #eceff3;
  }
  .time {
    background-color: #4b92a5;
  }
}
.modileshortcard {
  background-color: #fff;
  padding: 8.6px;
  margin: 10px 0px ;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  .card {
    margin: 2px;
    padding: 2px;
    border-radius: 5px;
    background-color: #eceff3;
  }
  .time {
    background-color: #4b92a5;
  }
}
</style>