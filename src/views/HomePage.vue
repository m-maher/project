<template>
  <div>
    <div class="bg-grediunt">
      <div class="bg-banner-img">
        <div class="overlay">
          <!-- #banner start -->
          <section id="banner" class="mb-90">
            <div class="container">
              <div class="row">
                <!-- #banner-text start -->
                <div id="banner-text" class="col-md-12 text-c text-center">
                  <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s">
                    {{ $t("home_page.main_banner.title") }}
                  </h5>
                  <p
                    class="banner-text wow fadeInUp main-h3"
                    data-wow-delay="0.8s"
                  >
                    {{ $t("home_page.main_banner.subTitle") }}
                  </p>
                  <div class="top-banner wow fadeInRight">
                    <router-link
                      class="btn btn-default wow fadeInUp js-scroll-trigger"
                      data-wow-delay="1s"
                      to="/calculator"
                      >{{ $t("home_page.main_banner.calculate") }}</router-link
                    >
                  </div>
                </div>
                <!-- /#banner-text End -->
              </div>
            </div>
          </section>
        </div>
      </div>
      <!-- /#banner end -->
    </div>
    <!--#End Our Partners Area -->
    <!-- #About Us Area start -->
    <div id="about" class="back-right-text-c">
      <div class="container">
        <div class="row text-center">
          <div class="title wow fadeInUp">
            <h1>{{ $t("home_page.our_services.main_title") }}</h1>
          </div>
        </div>
      </div>
      <section>
        <div class="container-fluid">
          <div class="row text-left about_row">
            <div class="col-md-6 p-0 clip-polygon">
              <div class="video-img"></div>
            </div>
            <div class="col-md-6 wow fadeInUp">
              <div class="title-left wow fadeInUp">
                <h2
                  class="text-left wow fadeInUp"
                  data-wow-delay="1s"
                  style="
                    visibility: visible;
                    animation-delay: 1s;
                    animation-name: fadeInUp;
                  "
                >
                  {{ $t("home_page.our_services.calculator.title") }}
                </h2>
              </div>
              <p
                class="about_h wow fadeInUp"
                data-wow-delay="1s"
                style="visibility: visible; animation-name: fadeInRight"
              >
                {{ $t("home_page.our_services.calculator.question") }}
              </p>
              <p
                class="about_bottom_h wow fadeInUp"
                data-wow-delay="1s"
                style="
                  visibility: visible;
                  animation-delay: 1s;
                  animation-name: fadeInUp;
                "
              >
                {{ $t("home_page.our_services.calculator.answer") }}
              </p>
              <div
                class="top-banner wow fadeInRight text-left"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <router-link
                  class="btn btn-default wow fadeInUp js-scroll-trigger"
                  data-wow-delay="1s"
                  to="/calculator"
                  >{{ $t("more") }}</router-link
                >
              </div>
            </div>
          </div>
          <div class="row text-left about_row c_about_row">
            <div class="col-md-6 wow fadeInUp">
              <div class="title-left wow fadeInUp">
                <h2
                  class="text-left wow fadeInUp"
                  data-wow-delay="1s"
                  style="
                    visibility: visible;
                    animation-delay: 1s;
                    animation-name: fadeInUp;
                  "
                >
                  {{ $t("home_page.our_services.rules.title") }}
                </h2>
              </div>
              <p
                class="about_h wow fadeInUp"
                data-wow-delay="1s"
                style="visibility: visible; animation-name: fadeInRight"
              >
                {{ $t("home_page.our_services.rules.question") }}
              </p>
              <p
                class="about_bottom_h wow fadeInUp"
                data-wow-delay="1s"
                style="
                  visibility: visible;
                  animation-delay: 1s;
                  animation-name: fadeInUp;
                "
              >
                {{ $t("home_page.our_services.rules.answer") }}
              </p>
              <div
                class="top-banner wow fadeInRight text-left"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <router-link
                  class="btn btn-default wow fadeInUp js-scroll-trigger"
                  data-wow-delay="1s"
                  to="/rules"
                  >{{ $t("more") }}</router-link
                >
              </div>
            </div>
            <div class="col-md-6 p-0 clip-polygon">
              <div class="video-img"></div>
            </div>
          </div>
          <div class="row text-left about_row">
            <div class="col-md-6 p-0 clip-polygon">
              <div class="video-img"></div>
            </div>
            <div class="col-md-6 wow fadeInUp">
              <div class="title-left wow fadeInUp">
                <h2
                  class="text-left wow fadeInUp"
                  data-wow-delay="1s"
                  style="
                    visibility: visible;
                    animation-delay: 1s;
                    animation-name: fadeInUp;
                  "
                >
                  {{ $t("home_page.our_services.articles.title") }}
                </h2>
              </div>
              <p
                class="about_h wow fadeInUp"
                data-wow-delay="1s"
                style="visibility: visible; animation-name: fadeInRight"
              >
                {{ $t("home_page.our_services.articles.question") }}
              </p>
              <p
                class="about_bottom_h wow fadeInUp"
                data-wow-delay="1s"
                style="
                  visibility: visible;
                  animation-delay: 1s;
                  animation-name: fadeInUp;
                "
              >
                {{ $t("home_page.our_services.articles.answer") }}
              </p>
              <div
                class="top-banner wow fadeInRight text-left"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <router-link
                  class="btn btn-default wow fadeInUp js-scroll-trigger"
                  data-wow-delay="1s"
                  to="/articles"
                  >{{ $t("more") }}</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- End About Us Area -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
