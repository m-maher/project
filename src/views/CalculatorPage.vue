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
                  {{ $t("calculator.main_banner.title") }}
                </h5>
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  {{ $t("calculator.main_banner.brief") }}
                </p>
              </div>
              <!-- /#banner-text End -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- /#banner end -->

    <InheritanceCalculator />
  </div>
</template>

<script>
import InheritanceCalculator from "../components/InheritanceCalculator.vue";

export default {
  name: "ServicesPage",
  components: {
    InheritanceCalculator,
  },
};
</script>
