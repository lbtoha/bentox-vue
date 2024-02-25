import Home from "@/pages/Home.vue";
import HomeTwo from "@/pages/HomeTwo.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, meta: { title: "Home" } },
    { path: "/home-two", component: HomeTwo, meta: { title: "Home Two" } },
  ],
});

export default router;
