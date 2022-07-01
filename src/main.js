import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import router from "./router";
import store from "./store";
import "wowjs/css/libs/animate.css";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
