<template>
  <div class="introduce">
    <h1>{{ title }}</h1>
    <el-image
      :src="require(`../assets/imgs/underline.png`)"
      fit="cover"
    ></el-image>
    <p>
      {{ content }}
    </p>
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
.introduce {
  background-color: #fff;
  padding: (40 / @rem);
  border-radius: (30 / @rem);
  margin: (50 / @rem);
  p {
    text-align: left;
    margin: 0 (100 / @rem);
  }
}
</style>