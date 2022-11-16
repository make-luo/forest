<template>
  <div class="introduce-box">
    <div class="webintroduce hidden-xs-only">
      <h1>{{ title }}</h1>
      <el-image
        :src="require(`../assets/imgs/underline.png`)"
        fit="cover"
      ></el-image>
      <p>
        {{ content }}
      </p>
    </div>
    <div class="modileintroduce hidden-sm-and-up">
      <h1>{{ title }}</h1>
      <el-image
        :src="require(`../assets/imgs/underline.png`)"
        fit="cover"
      ></el-image>
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  props: ["content", "title"],
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.webintroduce {
  background-color: #fff;
  padding: (40 / @rem);
  border-radius: (30 / @rem);
  margin: (50 / @rem);
  p {
    text-align: left;
    margin: 0 (100 / @rem);
  }
}
.modileintroduce {
  background-color: #fff;
  border-radius:10px;
  margin: 10px 0px ;
  p {
    text-align: left;
    margin: 0 (100 / @rem);
  }
}
</style>