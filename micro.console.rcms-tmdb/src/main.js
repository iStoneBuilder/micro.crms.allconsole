import rcms from "@utils/rcms.service";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";
// 自定义样式
import "./assets/main.css";

const messages = {
  test: {
    key: "00000000",
  },
};
const language = "ch";
const i18nLang = {};
i18nLang[language] = messages;
const i18n = createI18n({
  //预设语言环境
  fallbackLocale: language,
  globalInjection: true,
  // you must specify 'legacy: false' option
  legacy: false,
  //默认显示的语言
  locale: language,
  messages: i18nLang,
});

const app = createApp(App);
// 全局使用axios
app.config.globalProperties.rcms = rcms;
// Elemenlt
app.use(ElementPlus);
// Pinia
app.use(createPinia());
// 使用路由
app.use(router);
// 使用国际化
app.use(i18n);

app.mount("#app");
