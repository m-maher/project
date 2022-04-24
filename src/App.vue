<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>

    <div class="locale-changer">
      <select v-model="$i18n.locale" @change="setPageDirection">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ $t(`${lang}`) }}
        </option>
      </select>
    </div>
    <InheritanceCalculator />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import InheritanceCalculator from "./components/InheritanceCalculator.vue";

export default {
  name: "App",
  components: {
    InheritanceCalculator,
    NavBar
  },
  data() {
    return { langs: ["ar", "en"] };
  },
  methods: {
    setPageDirection() {
      //eslint-disable-next-line
      if (this.$i18n.locale == "en") {
        document.body.style.direction = "ltr";
        require("bootstrap/dist/css/bootstrap.min.css");
      } else {
        document.body.style.direction = "rtl";
        require("bootstrap/dist/css/bootstrap.rtl.min.css");
      }
    },
  },
  mounted() {
    document.body.style.direction = "ltr";
  },
};
</script>

<style>
@import "./App.css";
</style>
