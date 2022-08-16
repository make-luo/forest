<template>
  <div class="friend-card">
    <el-image :src="require(`../assets/imgs/${card.avatar}.png`)"></el-image>
    <div class="name">{{card.name}}</div>
    <div class="sign">{{card.sign}}</div>
  </div>
</template>

<script>
export default {
  name: "FriendCard",
  props:["card"]
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.friend-card {
  width: (250 / @rem);
  height: (250 / @rem);
  margin: (10/@rem) auto;
  background-color: #fff;
  border-radius: (22 / @rem);
  transition: transform 0.5s,box-shadow 0.5s;
  &:hover{
    transform: translateY(-10/@rem);
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
    margin: (10/@rem);
  }
  .sign {
    font-size: (15 / @rem);
    color: #4b92a5;
  }
}
</style>