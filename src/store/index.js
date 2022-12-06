import Vue from 'vue';
import Vuex from 'vuex';
//引入模块化的vuex
import commentList from "./commentlist";
import blogCards from "./blogCards";
import blogContent from "./blogContent";
import shortCards from "./shortCards";

Vue.use(Vuex); //vue使用vuex插件，需要在store创建之前使用
//暴露store
export default new Vuex.Store({
    modules: {
        commentList,
        blogCards,
        blogContent,
        shortCards
    }
})