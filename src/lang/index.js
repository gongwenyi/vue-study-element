import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocate from "element-ui/lib/locale/lang/en";
import zhLocate from "element-ui/lib/locale/lang/zh-CN";
import zh from "./zh";
import en from "./en";

Vue.use(VueI18n);

const messages = {
  zh: {
    ...zh,
    ...zhLocate
  },
  en: {
    ...en,
    ...enLocate
  }
};

const locale = localStorage.getItem("lang") || "zh";

const i18n = new VueI18n({
  locale,
  messages
});

export default i18n;
