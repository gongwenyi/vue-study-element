const sidebar = {
  namespaced: true,
  state: {
    collapse: false
  },
  actions: {
    toggleCollapse({ commit }) {
      commit("TOGGLE_COLLAPSE");
    }
  },
  mutations: {
    TOGGLE_COLLAPSE(state) {
      state.collapse = !state.collapse;
    }
  }
};

export default sidebar;
