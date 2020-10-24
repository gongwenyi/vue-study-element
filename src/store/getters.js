const getters = {
  collapse: state => state.sidebar.collapse,
  token: state => state.user.token,
  role: state => state.user.role,
  permissionRoutes: state => state.user.permissionRoutes,
  tagsList: state => state.tagsbar.tagsList,
  keepAliveList: state => state.tagsbar.keepAliveList
};

export default getters;
