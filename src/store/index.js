import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    heirsData: [],
    articlesData: [],
  },
  actions: {
    getHeirsData(vuexContext, heirsData) {
      axios
        .get(
          "https://mirathapi.azurewebsites.net/api/DistributProbabilities/GetDatafromviewall"
        )
        .then((res) => {
          heirsData = res.data;
        })
        .then(() => {
          vuexContext.commit("getHeirsData", heirsData);
        });
    },
    getArticlesData(vuexContext, articlesData) {
      axios
        .get("https://mirathapi.azurewebsites.net/api/Articles")
        .then((res) => {
          articlesData = res.data;
        })
        .then(() => {
          vuexContext.commit("getArticlesData", articlesData);
        });
    },
  },
  mutations: {
    getHeirsData(state, heirsData) {
      state.heirsData = heirsData;
    },
    getArticlesData(state, articlesData) {
      state.articlesData = articlesData;
    },
  },
  getters: {
    heirsData: (state) => {
      return state.heirsData;
    },
    articlesData: (state) => {
      return state.articlesData;
    },
  },
});
export default store;
