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
                  {{ $t("about_us.main_banner.title") }}
                </h5>
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  {{ $t("about_us.main_banner.subTitle") }}
                </p>
              </div>
              <!-- /#banner-text End -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- /#banner end -->
    <!--#our_about_area -->
    <div class=" py-70 bg-about-img">
      <div class="container">
          <div class="row">
            <div class="col-md-7 ">
                <div class="title-lefts wow fadeInUp">
                  <h1>{{ $t("about_us.about_area.title") }}</h1>
                  <p class="bottom_h wow fadeInUp">{{ $t("about_us.about_area.brief") }}</p>
                </div>
                <h2 class="about-s wow fadeInUp">{{ $t("about_us.about_area.question") }}</h2>
                <p class="about-bottom-s wow fadeInUp">{{ $t("about_us.about_area.answer") }}</p>
            </div>
                    
            <div class="col-md-5  back-shap">
                <div class="all-text">
                  <h2 class="shap_top">{{ $t("about_us.about_area.our_mission") }}</h2>
                  <p class="shap_bottom wow fadeInUp">{{ $t("about_us.about_area.mission_details") }}</p>
                </div>
            </div>
          </div>
      </div>
    </div>
    <!--#End our_about_area-->

  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>
