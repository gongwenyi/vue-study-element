import Vue from "vue";
import Element from "element-ui";
// import "./element-#1B5B9C/index.css";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "./router/permission";

if (process.env.NODE_ENV === "development") {
  import("./mock");
}

Vue.config.productionTip = false;

Vue.use(Element, { size: "small" });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
