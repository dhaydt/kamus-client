import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      {
        path: "/kbbi",
        component: () => import("../views/Kbbi.vue"),
      },
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: `/detailKata/:bidang/:kata`,
        name: "KataDetail",
        component: () => import("../views/detailKata/detailKata.vue"),
      },
      {
        path: "/artinama",
        name: "artinama",
        component: () => import("../views/Artinama.vue"),
      },
      {
        path: "/glossarium",
        name: "Glossarium",
        component: () => import("../views/Gloss.vue"),
      },
      {
        path: "/engin",
        name: "EngIn",
        component: () => import("../views/Eng-in.vue"),
      },
      {
        path: "/ineng",
        name: "InEng",
        component: () => import("../views/In-eng.vue"),
      },
    ],
  },

  {
    path: "/admin",
    name: "Admin",
    component: () => import("../admin/Dashboard.vue"),
    meta: {
      hideNavbar: true,
    },
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /user/:id is matched
      {
        path: "/admin",
        component: () => import("../admin/view/Dash.vue"),
      },
      {
        path: "/admin/addword",
        component: () => import("../admin/view/kbbi/addWord.vue"),
      },
      {
        path: "/admin/addMultiple",
        component: () => import("../admin/view/kbbi/addMultiple.vue"),
      },
      {
        path: "/admin/kbbi",
        component: () => import("../admin/view/kbbi/index.vue"),
      },
      {
        path: "/admin/eng-ind",
        component: () => import("../admin/view/translate/Engind.vue"),
      },
      {
        path: "/admin/ind-eng",
        component: () => import("../admin/view/translate/Indeng.vue"),
      },
      {
        path: "/admin/artinama",
        component: () => import("../admin/view/artiNama/Artinama.vue"),
      },
      {
        path: "/admin/addNama",
        component: () => import("../admin/view/artiNama/namaAdd.vue"),
      },
      {
        path: "/admin/glossary",
        component: () => import("../admin/view/glossarium/Glossary.vue"),
      },
      {
        path: "/admin/addGloss",
        component: () => import("../admin/view/glossarium/glossAdd.vue"),
      },
      {
        path: "/admin/report",
        component: () => import("../admin/view/report/Report.vue"),
      },
      {
        path: "/admin/adv",
        component: () => import("../admin/view/adsvertism/index.vue"),
      },

      // ...other sub routes
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
