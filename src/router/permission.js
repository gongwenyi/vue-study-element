import store from "./../store";
import router from "./index";

router.beforeEach((to, from, next) => {
  // console.log("to=", to);
  // console.log("from=", from);
  const { token, role, permissionRoutes } = store.getters;
  if (token) {
    // console.log("token=", token);
    if (to.path === "/login") {
      next("/");
    } else if (!permissionRoutes.length) {
      // console.log("permissionRoutes=", permissionRoutes);
      store.dispatch("user/permissionRoutes", role);
      next({ ...to, replace: true });
    } else {
      next();
    }
  } else if (to.path !== "/login") {
    next("/login");
  } else {
    next();
  }
});
