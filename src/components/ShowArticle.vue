<template>
  <div class="articleContainer">
    <div class="webarticleContainer hidden-sm-and-down">
      <div class="articleImg">
        <el-image :src="require(`../assets/imgs/7.png`)" fit="cover"></el-image>
      </div>
      <div class="articleTitle">
        <div class="describe">
          <span class="round"></span>
          <span>初识Vue</span>
        </div>
        <el-image :src="require(`../assets/imgs/underline.png`)"></el-image>
      </div>
      <mavon-editor
        class="preview"
        :value="value"
        :toolbarsFlag="false"
        :html="false"
        :subfield="false"
        :boxShadow="false"
        defaultOpen="preview"
      ></mavon-editor>
      <div class="article-info">
        <div class="short">
          <span class="el-icon-collection-tag"></span> Vue
        </div>
        <div class="time"><span>发表时间:</span>2022/8/13</div>
      </div>
    </div>
    <div class="modilearticleContainer hidden-md-and-up">
      <div class="articleImg">
        <el-image :src="require(`../assets/imgs/7.png`)" fit="cover"></el-image>
      </div>
      <div class="articleTitle">
        <div class="describe">
          <span class="round"></span>
          <span>初识Vue</span>
        </div>
        <el-image :src="require(`../assets/imgs/underline.png`)"></el-image>
      </div>
      <mavon-editor
        class="preview"
        :value="value"
        :toolbarsFlag="false"
        :html="false"
        :subfield="false"
        :boxShadow="false"
        defaultOpen="preview"
      ></mavon-editor>
      <div class="article-info">
        <div class="short">
          <span class="el-icon-collection-tag"></span> Vue
        </div>
        <div class="time"><span>发表时间:</span>2022/8/13</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "ShowArticle",
  data() {
    return {
      content:
        "初识Vue 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象 root容器中（div）的代码依然符合html规范，只不过混入了一些特殊的vue语法 root容器中的代码称为【vue模板】 vue实例和容器是一一对应的 真实开发中，只有一个vue实例 并且会配合着组件一起使用 {{XXX}}中的XXX要写js表达式，且XXX可以自动读到data中的所有属性 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新 js表达式和js代码 js表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方 变量 a 变量之间做数学运算 a+b 函数调用 demo（1） 三目运算 x===y ? 'a':'b' js代码（语句） if(){} for (){} ",
    };
  },
  components: {
    mavonEditor,
  },
  computed: {
    value() {
      return this.content;
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 32rem;

.webarticleContainer {
  margin: 0 (50 / @rem);
  background-color: #fbfbfb;
  border-radius: (50 / @rem);
  .articleImg {
    .el-image {
      width: 100%;
      height: (300 / @rem);
      border-radius: (50 / @rem) (50 / @rem) 0 0;
    }
  }
  .articleTitle {
    .describe {
      .round {
        display: inline-block;
        width: (20 / @rem);
        height: (20 / @rem);
        border-radius: 50%;
        margin-right: (20 / @rem);
        background-color: #4b92a5;
      }
    }
  }
  .preview {
    font-size: (20 / @rem);
    min-width: 100%;
    min-height: (100 / @rem);
  }
  .article-info {
    min-height: (90 / @rem);
    padding: 0 (30 / @rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed #4b92a5;
    font-size: (20 / @rem);
    .el-icon-collection-tag {
      color: #4b92a5;
    }
  }
}
.modilearticleContainer {
  background-color: #fbfbfb;
  border-radius: 10px;
  .articleImg {
    .el-image {
      width: 100%;
      height: 210px;
      border-radius: 10px 10px 0 0;
    }
  }
  .articleTitle {
    .describe {
      font-size: 20px;
      .round {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
        background-color: #4b92a5;
      }
    }
  }
  .preview {
    font-size: 16px;
    min-width: 100%;
    min-height: 100px;
    z-index: 98;
  }
  .article-info {
    min-height: 40px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px dashed #4b92a5;
    font-size: 14px;
    .el-icon-collection-tag {
      color: #4b92a5;
    }
  }
}
</style>