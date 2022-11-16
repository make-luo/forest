<template>
  <div class="info">
    <h1><span class="smile">👻</span>你好朋友~</h1>
    <p>
      这里是我记录学习和生活的地方，你可以随意逛逛，说不定你就是我要寻找的
      那个人<span>😆</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "AuthorInfo",
};
</script>

<style lang="less" scoped>
@rem: 32rem;
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(137deg, #4b92a5, #391313);
  color: #fff;
  padding: (10 / @rem) (90 / @rem);
  border-radius: (20 / @rem);
  h1 {
    font-size: (28 / @rem);
    margin-top: (27 / @rem);
    span{
      display: inline-block;
      animation: round 1s linear infinite alternate;
    }
  }
  p {
    width: (200 / @rem);
    font-size: (19 / @rem);
    margin-top: (54 / @rem);
    margin-bottom: (30 / @rem);
  }
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}
</style>