import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contacte",
    name: "contacte",
    component: () => import("../views/ContacteView.vue"),
  },
  {
    path: "/engraving",
    name: "engraving",
    component: () => import("../views/EngravingView.vue"),
  },
  {
    path: "/drawing",
    name: "drawing",
    component: () => import("../views/DrawingView.vue"),
  },
  {
    path: "/photography",
    name: "photography",
    component: () => import("../views/PhotographyView.vue"),
  },
  {
    path: "/painting",
    name: "painting",
    component: () => import("../views/PaintingView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
