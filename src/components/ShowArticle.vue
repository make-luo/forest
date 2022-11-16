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
        codeStyle="vs"
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
  components: {
    mavonEditor,
  },
  data() {
    return {
      content: `
 @CrossOrigin(origins = "http://localhost:8081",maxAge = 3600)  //解决跨域问题
 @Controller
 public class SecurityController {
  
 @RequestMapping("/Login")
     @ResponseBody
     public HashMap<String, Object> Login( @RequestBody user user, Model model) {
         String username = user.getName();
         String password = user.getPassword();
         HashMap<String, Object> userMap = new HashMap<>();
         userMap.put("username",username);
         userMap.put("password",password);
         return userMap;
     }
 }
`,
    };
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