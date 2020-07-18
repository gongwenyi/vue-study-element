import Cookies from "js-cookie";
import router, { routes, asyncRoutes } from "./../../router";
import { filterRoutes, filterRoutesByRole } from "./../../utils";
const user = {
  namespaced: true,
  state: {
    token: Cookies.get("token") || "",
    role: Cookies.get("role") || "",
    permissionRoutes: []
  },
  actions: {
    permissionRoutes({ commit }, role) {
      const list = filterRoutesByRole(asyncRoutes, role);
      commit("SET_PERMISSION_ROUTES", list);
      router.addRoutes(list);
    }
  },
  mutations: {
    SET_USERINFO(state, userInfo) {
      const { token, role } = userInfo;
      Cookies.set("token", token);
      Cookies.set("role", role);
      state.token = token;
      state.role = role;
    },
    SET_PERMISSION_ROUTES(state, list) {
      const permissionRoutes = filterRoutes([...routes, ...list]);
      state.permissionRoutes = permissionRoutes;
    },
    CLEAR_USERINFO(state) {
      Cookies.remove("token");
      Cookies.remove("role");
      state.token = "";
      state.role = "";
    }
  }
};

export default user;
