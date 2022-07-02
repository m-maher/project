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
    <section class="blog-details-area wow fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="blog-details-wrap">
              <div class="blog-details-img text-center">
                <div
                  v-if="
                    articleDetails.image == '' || articleDetails.image == null
                  "
                >
                  <img src="../../assets/images/banner-img.jpg" />
                </div>
                <div v-else>
                  <img
                    :src="articleDetails.image"
                    :alt="articleDetails.title"
                    @error="replaceByDefault"
                  />
                </div>
              </div>
              <div class="blog-details-content wow fadeInUp">
                <h3 v-if="$i18n.locale == 'ar'">
                  {{ articleDetails.title }}
                </h3>
                <h3 v-else>{{ articleDetails.titleEn }}</h3>
                <p v-if="$i18n.locale == 'ar'">
                  {{ articleDetails.body }}
                </p>
                <p v-else>
                  {{ articleDetails.bodyEn }}
                </p>
              </div>
            </div>
          </div>
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
      articleDetails: {},
    };
  },
  methods: {
    replaceByDefault(e) {
      e.target.src = "../assets/images/banner-img.jpg";
    },
  },
  mounted() {
    if (this.$store.getters.articlesData.length != 0) {
      localStorage.setItem(
        "articleDetails",
        JSON.stringify(this.$store.getters.articlesData[this.$route.params.id - 1])
      );
    }
    this.articleDetails = JSON.parse(localStorage.getItem("articleDetails"));
  },
};
</script>
