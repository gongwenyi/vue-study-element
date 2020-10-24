import Vue from "vue";
import Element from "element-ui";
import "./element-#1B5B9C/index.css"; // 另一套主题
// import "element-ui/lib/theme-chalk/index.css"; // 默认主题
import "./icons/fonts/iconfont"; // 图标
import i18n from "./lang";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import "./router/permission";

if (process.env.NODE_ENV === "development") {
  import("./mock");
}

Vue.config.productionTip = false;

Vue.use(Element, {
  size: "small",
  i18n: (key, value) => i18n.t(key, value)
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
