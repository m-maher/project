<template>
  <div>
    <nav class="navbar navbar-expand-lg header_area bg-dark">
      <!-- <a class="navbar-brand" href="#"><img src="assets/images/logo_img.png"></a> -->
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/"
          ><img src="../assets/images/logo_img.png"
        /></router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link class="nav-link active" to="/">{{
              $t("navbar.home")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/calculator">{{
              $t("navbar.calculator")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/rules">{{
              $t("navbar.rules")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/articles">{{
              $t("navbar.articles")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">{{
              $t("navbar.about")
            }}</router-link>
          </li>
          <!-- <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li> -->
          <li class="nav-item">
            <a class="nav-link">
              <div class="locale-changer">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ $t("language") }}
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li v-for="(lang, i) in langs" :key="`Lang${i}`">
                      <a
                        class="dropdown-item"
                        @click="setPageDirection(lang)"
                        >{{ $t(`${lang}`) }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return { langs: ["ar", "en"] };
  },
  methods: {
    setPageDirection(lang) {
      //eslint-disable-next-line
      this.$i18n.locale = lang;
      if (this.$i18n.locale == "en") {
        document.body.style.direction = "ltr";
        require("bootstrap/dist/css/bootstrap.min.css");
      } else {
        document.body.style.direction = "rtl";
        require("bootstrap/dist/css/bootstrap.rtl.min.css");
      }
    },
  },
};
</script>
