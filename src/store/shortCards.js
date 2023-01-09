import axios from "axios";
import baseURL from "./baseURL";
export default {
    namespaced: true,
    actions: {
        getShortCards(context, value) {
            axios
                .get(`${baseURL.baseURL}/short/getAllShort`)
                .then(({ data }) => {
                    context.commit("getShortCards", data)
                    context.commit("getMoreShort", 5);
                });
        },
    },
    mutations: {
        getShortCards(state, value) {
            state.cards = value;
        },
        getMoreShort(state, value) {
            if (value > this.state.shortCards.cards.length) {
                value = this.state.shortCards.cards.length;
            }
            state.showCards = state.cards.slice(0, value);
        }
    },
    state: {
        cards: [],
        showCards: [],
    },
    getters: {
        isShowButton(state) {
            if (state.cards.length == state.showCards.length) {
                return false;
            }
            return true;
        }
    }
}