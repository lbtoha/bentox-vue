import About from "@/pages/About.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import Blogs from "@/pages/Blogs.vue";
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
      component: About,
      meta: { title: "About" },
    },
    {
      path: "/blogs",
      component: Blogs,
      meta: { title: "Blogs" },
    },
    {
      path: "/blog-details",
      component: BlogDetails,
      meta: { title: "Blog Details" },
    },
  ],
});

export default router;
