import axios from "axios";
export default {
    namespaced: true,
    actions: {
        getBlogContentByID(context, value) {
            axios
                .get(
                    `http://10.10.120.234:8080/blogcontent/getBlogContentByID/${value}`
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