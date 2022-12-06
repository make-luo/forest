<template>
  <div class="friendcontainer">
    <div class="webfriend-card hidden-xs-only">
      <el-image :src="card.portrait"></el-image>
      <div class="name">{{ card.nickname }}</div>
      <div class="sign">{{ card.sketch }}</div>
    </div>
    <div class="modilefriend-card hidden-sm-and-up">
      <el-image :src="card.portrait"></el-image>
      <div class="name">{{ card.nickname }}</div>
      <div class="sign">{{ card.sketch }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendCard",
  props: ["card"],
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webfriend-card {
  width: (250 / @rem);
  height: (250 / @rem);
  margin: (10 / @rem) auto;
  background-color: #fff;
  border-radius: (22 / @rem);
  transition: transform 0.5s, box-shadow 0.5s;
  &:hover {
    transform: translateY(-10 / @rem);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  .el-image {
    margin-top: (25 / @rem);
    width: (100 / @rem);
    height: (100 / @rem);
    border-radius: 50%;
  }
  .name {
    font-size: (25 / @rem);
    color: #4b92a5;
    margin: (10 / @rem);
  }
  .sign {
    font-size: (15 / @rem);
    color: #4b92a5;
  }
}
.modilefriend-card {
  width: 105px;
  height: 160px;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  transition: transform 0.5s, box-shadow 0.5s;
  &:hover {
    transform: translateY(-10 / @rem);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  .el-image {
    margin-top: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .name {
    font-size:18px;
    color: #4b92a5;
    margin: 2px;
  }
  .sign {
    font-size: 14px;
    color: #4b92a5;
  }
}
</style>