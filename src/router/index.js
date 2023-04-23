import { createRouter, createWebHashHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About.vue"),
    meta: {
      title: "About",
    },
  },
];

export const router = createRouter({
  base: window.location.pathname,
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "is-active",
});
