<template>
  <div class="shortcontainer">
    <div class="webshortcard hidden-xs-only">
      <div class="card" v-for="card in showCards" :key="card.id">
        <el-divider class="time">{{ card.createtime }}</el-divider>
        <div class="content">{{ card.content }}</div>
      </div>
    </div>
    <div class="modileshortcard hidden-sm-and-up">
      <div class="card" v-for="card in showCards" :key="card.id">
        <el-divider class="time">{{ card.createtime }}</el-divider>
        <div class="content">{{ card.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  name: "ShortCard",
  data() {
    return {
      cards: [],
    };
  },

  computed: {
    ...mapState("shortCards", ["showCards"]),
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
  margin: 10px 0px;
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