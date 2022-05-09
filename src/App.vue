<template>
  <div id="app">
    <!-- <NavBar /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'

export default {
  name: "App",
  components: {
    // NavBar
  },
  mounted() {
    document.body.style.direction = "rtl";
  },
};
</script>

<style>
@import "./App.css";
</style>
