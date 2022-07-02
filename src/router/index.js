import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import Calculator from "@/views/CalculatorPage.vue";
import Rules from "@/views/RulesPage.vue";
import Articles from "@/views/Articles/ArticlesPage.vue";
import ArticleDetails from "@/views/Articles/ArticleDetails.vue";

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
      path: "/calculator",
      name: "calculator ",
      component: Calculator,
    },
    {
      path: "/rules",
      name: "rules",
      component: Rules,
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles,
    },
    {
      path: "/articleDetails/:id",
      name: "articleDetails",
      component: ArticleDetails,
    },
  ],
  mode: "history",
});

export default router;
