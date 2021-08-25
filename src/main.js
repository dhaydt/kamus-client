import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
// import * as VueSpinner from "vue-spinners-css";

import vco from "v-click-outside";
import store from "./store";
import router from "./router";
import axios from "axios";

import "@/assets/scss/app.scss";

var jQuery = require("jquery");

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

// require("jquery.easing")(jQuery);

// Vue.use(VueSpinner);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(vco);
Vue.use(axios);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  axios,
  jQuery,
  $,
  render: (h) => h(App),
}).$mount("#app");
