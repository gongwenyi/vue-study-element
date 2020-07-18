const getters = {
  collapse: state => state.sidebar.collapse,
  token: state => state.user.token,
  role: state => state.user.role,
  permissionRoutes: state => state.user.permissionRoutes
};

export default getters;
