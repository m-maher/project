import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import Services from "@/views/ServicesPage.vue";
import Blog from "@/views/BlogPage.vue";
import Contact from "@/views/ContactPage.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/services",
      name: "services",
      component: Services,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
  mode: "history",
});

export default router;
