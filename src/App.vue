<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/FooterComponent.vue";
import { WOW } from "wowjs";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  mounted() {
    document.body.style.direction = "rtl";
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
    });
    wow.init();
  },
};
</script>

<style>
@import "./App.css";
</style>
