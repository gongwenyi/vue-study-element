const tagsbar = {
  namespaced: true,
  state: {
    tagsList: [], // 标签导航栏
    keepAliveList: [] // keepAlive 页面列表
  },
  actions: {
    addTag({ dispatch, commit, state }, tag) {
      const hasTag = state.tagsList.find(item => item.path === tag.path);
      if (hasTag) return;
      commit("ADD_TAG", tag);
      dispatch("addKeepAlive", tag);
    },
    closeTag({ dispatch, commit, state }, tag) {
      return new Promise(resolve => {
        const index = state.tagsList.findIndex(item => item.path === tag.path);
        commit("CLOSE_TAG", index);
        dispatch("removeKeepAlive", tag);
        resolve(state.tagsList);
      });
    },
    addKeepAlive({ commit, state }, tag) {
      if (
        !state.keepAliveList.includes(tag.name) &&
        tag.meta &&
        !tag.meta.noCache
      ) {
        commit("ADD_KEEP_ALIVE", tag);
      }
    },
    removeKeepAlive({ commit, state }, tag) {
      const cacheIndex = state.keepAliveList.findIndex(
        name => name === tag.name
      );
      if (cacheIndex !== -1) {
        commit("REMOVE_KEEP_ALIVE", cacheIndex);
      }
    }
  },
  mutations: {
    ADD_TAG(state, tag) {
      // console.log("tag=", tag);
      state.tagsList.push(tag);
    },
    CLOSE_TAG(state, index) {
      state.tagsList.splice(index, 1);
    },
    ADD_KEEP_ALIVE(state, tag) {
      state.keepAliveList.push(tag.name);
      console.log("add keepAliveList=", state.keepAliveList);
    },
    REMOVE_KEEP_ALIVE(state, index) {
      state.keepAliveList.splice(index, 1);
      console.log("remove keepAliveList=", state.keepAliveList);
    }
  }
};
export default tagsbar;
