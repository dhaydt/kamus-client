import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";
import jQuery from "jquery";
import VueMeta from "vue-meta";
import VueSocialSharing from "vue-social-sharing";
import VueAppend from "vue-append";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
// import * as VueSpinner from "vue-spinners-css";
import "@/assets/scss/app.scss";

import vco from "v-click-outside";
import store from "./store";
import router from "./router";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Ads from "vue-google-adsense";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueAppend);
Vue.config.productionTip = false;
Vue.use(VueSocialSharing, {
  networks: {
    newNetwork: "https://kamuskbbi.id/",
  },
});
Vue.use(require("vue-script2"));
Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);
Vue.use(BootstrapVue);
Vue.use(VueMeta);
Vue.use(vco);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  jQuery,
  axios,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
