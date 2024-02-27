import AboutVue from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import HomeTwo from "@/pages/HomeTwo.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, meta: { title: "Home" } },
    {
      path: "/landing-page-two",
      component: HomeTwo,
      meta: { title: "Home Two" },
    },
    {
      path: "/about",
      component: AboutVue,
      meta: { title: "Home Two" },
    },
    // {
    //   path: "/blogs",
    //   component: Blogs,
    //   meta: { title: "Home Two" },
    // },
  ],
});

export default router;
