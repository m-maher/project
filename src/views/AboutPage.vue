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
                <!-- <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s" >
                           من نحن
                        </h5> -->
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  {{ $t("about_us.main_banner.subTitle") }}
                </p>
                <!-- <p class="banner-text wow fadeInUp main-h3" data-wow-delay="0.8s">ينقل هذا المشروع قواعد الميراث إلى آلة حاسبة بسيطة ترضي كل ما تحتاج لمعرفته حول قانون الميراث الإسلامي بعيدًا عن التعقيد.</p> -->
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
                  <!-- <h1>نبذة عننا</h1> -->
                  <p class="bottom_h wow fadeInUp">{{ $t("about_us.about_area.brief") }}</p>
                  <!-- <p class="bottom_h wow fadeInUp">هذا المشروع قد تم من قبل مجموعه من طلاب قسم علوم حاسب بكلية الدراسات العليا للبحوث الإحصائية بجماعه القاهرة.</p> -->
                </div>
                <h2 class="about-s wow fadeInUp">{{ $t("about_us.about_area.question") }}</h2>
                <!-- <h2 class="about-s wow fadeInUp">Why this Topic ? </h2> -->
                <p class="about-bottom-s wow fadeInUp">{{ $t("about_us.about_area.answer") }}</p>
                <!-- <p class="about-bottom-s wow fadeInUp">يوفر المشروع استخدامًا سهلاً ومجانيًا ومحسن إدارة صفحات الويب وتطبيق الهاتف المحمول الذي يوفر كليهما
                  حساب الميراث وفق الفقه الإسلامي. ملخص عن نظام الميراث الإسلامي متضمناً أحكام الإرث وأدلته من القرآن والحديث ، وأسباب عدم أهلية الميراث ، وأسبقية التوزيع ، وأنواع الميراث المختلفة.</p> -->
            </div>
                    
            <div class="col-md-5  back-shap">
                <div class="all-text">
                  <h2 class="shap_top">{{ $t("about_us.about_area.our_mission") }}</h2>
                  <!-- <h2 class="shap_top"> رسالتنا </h2> -->
                  <p class="shap_bottom wow fadeInUp">{{ $t("about_us.about_area.mission_details") }}</p>
                  <!-- <p class="shap_bottom wow fadeInUp">يعتبر الترميز المنطقي و الرقمي لقوانين الميراث أهم إنجاز لهذا المشروع .</p> -->
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
