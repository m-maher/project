<template>
  <div>
    <nav class="navbar navbar-expand-lg header_area bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar scroll</a>
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
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/services"
                >Services</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <div class="locale-changer">
                  <select v-model="$i18n.locale" @change="setPageDirection">
                    <option
                      v-for="(lang, i) in langs"
                      :key="`Lang${i}`"
                      :value="lang"
                    >
                      {{ $t(`${lang}`) }}
                    </option>
                  </select>
                </div>
              </a>
            </li>
          </ul>
        </div>
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
};
</script>
