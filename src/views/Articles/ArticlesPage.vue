<template>
  <div>
    <div class="bg-banner-img">
      <div class="overlay">
        <!-- #banner start -->
        <section id="banner">
          <div class="container">
            <div class="row">
              <!-- #banner-text start -->
              <div id="banner-text" class="col-md-12 text-c text-center">
                <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s">
                  {{ $t("articles.main_banner.title") }}
                </h5>
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  {{ $t("articles.main_banner.brief") }}
                </p>
              </div>
              <!-- /#banner-text End -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- /#banner end -->

    <!-- #blog Us Area start -->
    <section class="blog-area ptb-140 bg-1">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-sm-6 col-xs-12 col mb-5"
            v-for="(item, index) in articles"
            :key="index"
          >
            <div class="blog-wrap mb-30">
              <div class="blog-img">
                <router-link
                  v-if="item.image == '' || item.image == null"
                  :to="`articleDetails/${item.id}`"
                >
                  <img src="../../assets/images/banner-img.jpg" />
                </router-link>
                <div v-else>
                  <img
                    :src="item.image"
                    :alt="item.title"
                    @error="replaceByDefault"
                  />
                </div>
              </div>
              <div class="blog-content wow fadeInUp">
                <h3>
                  <router-link
                    v-if="$i18n.locale == 'ar'"
                    :to="`articleDetails/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                  <router-link v-else :to="`articleDetails/${item.id}`">{{
                    item.titleEn
                  }}</router-link>
                </h3>
                <p v-if="$i18n.locale == 'ar'">
                  {{ item.body }}
                </p>
                <p v-else>
                  {{ item.bodyEn }}
                </p>
                <router-link
                  :to="`articleDetails/${item.id}`"
                  class="btn btn-default btn_font_16"
                  >{{ $t("read_more") }}</router-link
                >
              </div>
            </div>
          </div>
          <!-- <div class="col-md-4 col-sm-6 col-xs-12 col wow fadeInUp">
            <div class="blog-wrap mb-30">
              <div class="blog-img">
                <img src="../assets/images/banner-img.jpg" alt="" />
              </div>
              <div class="blog-content">
                <h3><a href="blog-single.html">of my entire soul</a></h3>
                <p>
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy
                </p>
                <a href="blog-single.html" class="btn btn-default btn_font_16"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 col wow fadeInUp">
            <div class="blog-wrap mb-30">
              <div class="blog-img">
                <img src="../assets/images/banner-img.jpg" alt="" />
              </div>
              <div class="blog-content">
                <h3>
                  <a href="blog-single.html">serenity has taken possession</a>
                </h3>
                <p>
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy
                </p>
                <a href="blog-single.html" class="btn btn-default btn_font_16"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 mt-50 wow fadeInUp">
            <div class="blog-wrap mb-30">
              <div class="blog-img">
                <img src="../assets/images/banner-img.jpg" alt="" />
              </div>
              <div class="blog-content">
                <h3><a href="blog-single.html"> suffered have majority</a></h3>
                <p>
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy
                </p>
                <a href="blog-single.html" class="btn btn-default btn_font_16"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 mt-50 wow fadeInUp">
            <div class="blog-wrap mb-30">
              <div class="blog-img">
                <img src="../assets/images/banner-img.jpg" alt="" />
              </div>
              <div class="blog-content">
                <h3><a href="blog-single.html">majority have suffered</a></h3>
                <p>
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy
                </p>
                <a href="blog-single.html" class="btn btn-default btn_font_16"
                  >Read More</a
                >
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12 mt-50 wow fadeInUp">
            <div class="blog-wrap mb-30">
              <div class="blog-img">
                <img src="../assets/images/banner-img.jpg" alt="" />
              </div>
              <div class="blog-content">
                <h3><a href="blog-single.html">majority have suffered</a></h3>
                <p>
                  wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy
                </p>
                <a href="blog-single.html" class="btn btn-default btn_font_16"
                  >Read More</a
                >
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- #End blog Us Area  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    replaceByDefault(e) {
      e.target.src = "../assets/images/banner-img.jpg";
    },
  },
  mounted() {
    this.articles = this.$store.getters.articlesData;
  },
};
</script>
