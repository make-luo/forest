import axios from "axios";
import baseURL from "./baseURL";
export default {
    namespaced: true,
    actions: {
        getCommentListByBlogID(context, value) { //传入blogID
            axios
                .get(
                    `${baseURL.baseURL}/comment/getCommentList/${value}`
                )
                .then(({ data }) => {
                    data.forEach((e) => {
                        e.subComment.forEach((e) => {
                            axios({
                                url: `${baseURL.baseURL}/picture/getAvatar/${e.pictureID}`,
                                responseType: "blob",
                            }).then((res) => {
                                let data = new Blob([res.data]);
                                let url = window.URL.createObjectURL(data);
                                e.avatar = url;
                            });
                        });
                        axios({
                            url: `${baseURL.baseURL}/picture/getAvatar/${e.pictureID}`,
                            responseType: "blob",
                        }).then((res) => {
                            let data = new Blob([res.data]);
                            let url = window.URL.createObjectURL(data);
                            e.avatar = url;
                        });
                    });
                    context.commit("getCommentListByBlogID", data);
                    context.commit("getMoreComment", 4);
                });
        },
    },
    mutations: {
        getCommentListByBlogID(state, value) {
            state.commentlist = value;
        },
        getMoreComment(state, value) {
            if (value > this.getters['commentList/countComments']) {
                value = this.getters['commentList/countComments'];
            }
            state.showComment=state.commentlist.slice(0, value);
        }
    },
    state: {
        commentlist: [],
        showComment: [],
    },
    getters: {
        countComments(state) {
            let count = 0;
            state.commentlist.forEach((e) => {
                e.subComment.forEach((s) => {
                    count++;
                });
                count++;
            });
            return count;
        },
        countShow(state) {
            let count = 0;
            state.showComment.forEach((e) => {
                e.subComment.forEach((s) => {
                    count++;
                });
                count++;
            });
            return count;
        }
    }
}