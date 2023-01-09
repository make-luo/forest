import axios from "axios";
import baseURL from "./baseURL";
export default {
    namespaced: true,
    actions: {
        getBlogContentByID(context, value) {
            axios
                .get(
                    `${baseURL.baseURL}/blogcontent/getBlogContentByID/${value}`
                )
                .then(({ data }) => {
                    context.commit("getBlogContentByID", data.textcontent);
                });
        }
    },

    mutations: {
        getBlogContentByID(state, value) {
            state.content = value;
        }
    },
    state: {
        content: ""
    },
    getters: {

    }
};