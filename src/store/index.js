import Vue from "vue";
import Vuex from "vuex";
import sidebar from "./sidebar";
import user from "./user";
import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sidebar,
    user
  },
  getters
});
