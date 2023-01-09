import axios from "axios";
import baseURL from "./baseURL";
export default {
    namespaced: true,
    actions: {
        getblogs(context, value) {
            axios(`${baseURL.baseURL}/blog/getblogs`).then(({ data }) => {
                data.forEach((e) => {
                    // 获取博客图片
                    axios({
                        url: `${baseURL.baseURL}/picture/getAvatar/${e.pictureid}`,
                        responseType: "blob",
                    }).then((res) => {
                        let data = new Blob([res.data]);
                        let url = window.URL.createObjectURL(data);
                        e.blogCardPicture = url;
                    });
                    // 获取作者图片
                    axios({
                        url: `${baseURL.baseURL}/picture/getAvatar/${e.userPictureId}`,
                        responseType: "blob",
                    }).then((res) => {
                        let data = new Blob([res.data]);
                        let url = window.URL.createObjectURL(data);
                        e.userPicture = url;
                    });
                });
                context.commit("getblogs", data);
                context.commit("getMoreCards", 5);
            });
        },
        getBlogsById({ commit }, value) {
            axios
                .get(`${baseURL.baseURL}/blog/getsortblogs/${value}`)
                .then(({ data }) => {
                    data.forEach((e) => {
                        // 获取博客图片
                        axios({
                            url: `${baseURL.baseURL}/picture/getAvatar/${e.pictureid}`,
                            responseType: "blob",
                        }).then((res) => {
                            let data = new Blob([res.data]);
                            let url = window.URL.createObjectURL(data);
                            e.blogCardPicture = url;
                        });
                        // 获取作者图片
                        axios({
                            url: `${baseURL.baseURL}/picture/getAvatar/${e.userPictureId}`,
                            responseType: "blob",
                        }).then((res) => {
                            let data = new Blob([res.data]);
                            let url = window.URL.createObjectURL(data);
                            e.userPicture = url;
                        });
                    });
                    commit("getblogs", data);
                    commit("getMoreCards", 5);
                });
        }
    },
    mutations: {
        getblogs(state, value) {
            state.blogCards = value;
        },
        getMoreCards(state, value) {
            if (value > this.state.blogCards.blogCards.length) {
                value = this.state.blogCards.blogCards.length;
            }
            state.showCards = state.blogCards.slice(0, value);
        }
    },
    state: {
        blogCards: [],
        showCards: [],
    },
    getters: {
        //返回一个函数，便于接收外部传来的值
        getOneBlogCard(state) {
            return function (value) {
                return state.blogCards[value - 1];
            };
        },
        isShowButton(state) {
            if (state.blogCards.length == state.showCards.length) {
                return false;
            }
            return true;
        }
    }
}