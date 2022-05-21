<template>
  <div>
    <div class="bg-grediunt">
      <div class="bg-banner-img clip-ellipse">
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
                  <!-- <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s" >فقة المواريث الاسلامي</h5> -->
                  <p
                    class="banner-text wow fadeInUp main-h3"
                    data-wow-delay="0.8s"
                  >
                    {{ $t("home_page.main_banner.subTitle") }}
                  </p>
                  <!-- <p class="banner-text wow fadeInUp main-h3" data-wow-delay="0.8s">برنامج حساب المواريث طبقا لفقة الأزهر</p> -->
                  <div class="top-banner wow fadeInRight">
                    <a
                      id="#services"
                      href="services.html"
                      class="btn btn-default wow fadeInUp js-scroll-trigger"
                      data-wow-delay="1s"
                    >
                      {{ $t("home_page.main_banner.calculate") }}
                    </a>
                    <!-- <a id="#services"  href="services.html" class="btn btn-default  wow fadeInUp  js-scroll-trigger" data-wow-delay="1s" href="#">إحسب مسألتك الخاصة</a> -->
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
            <!-- <h1>ماذا نقدم لك ؟</h1> -->
          </div>
        </div>
      </div>
      <section>
        <div class="container-fluid">
          <div class="row text-left about_row">
            <div class="col-md-6 p-0 clip-polygon">
              <div class="video-img">
                <!-- <a class="hero__play"
                  ><img src="../assets/images/LAW-31.jpg"
                /></a> -->
              </div>
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
                <!-- <h2 class="text-left wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">حاسبة المواريث</h2> -->
              </div>
              <p
                class="about_h wow fadeInUp"
                data-wow-delay="1s"
                style="visibility: visible; animation-name: fadeInRight"
              >
                {{ $t("home_page.our_services.calculator.question") }}
              </p>
              <!-- <p class="about_h wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-name: fadeInRight;">ما هي حاسبة المواريث ؟</p> -->
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
              <!-- <p class="about_bottom_h wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">بعد تقديم جميع المعلومات الضرورية ، سيظهر النقر فوق زر الحساب مقدار ما سيرثه كل قريب وفقًا للشريعة الإسلامية كل وارث .</p> -->
              <div
                class="top-banner wow fadeInRight text-left"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <a
                  id="#services"
                  href="#services"
                  class="btn btn-default wow fadeInUp js-scroll-trigger"
                  data-wow-delay="1s"
                  style="
                    visibility: visible;
                    animation-delay: 1s;
                    animation-name: fadeInUp;
                  "
                  >more details</a
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
                <!-- <h2 class="text-left wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">القواعد</h2  > -->
              </div>
              <p
                class="about_h wow fadeInUp"
                data-wow-delay="1s"
                style="visibility: visible; animation-name: fadeInRight"
              >
                {{ $t("home_page.our_services.rules.question") }}
              </p>
              <!-- <p class="about_h wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-name: fadeInRight;">ما هي قواعد فقة المواريث الإسلامي ؟</p> -->
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
              <!-- <p class="about_bottom_h wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">إن توزيع الميراث في الشريعة الإسلامية صممه الله جيدًا بناءً على قواعد محددة تفرق بين أقارب المتوفى.</p> -->
              <div
                class="top-banner wow fadeInRight text-left"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <a
                  id="#services"
                  href="#services"
                  class="btn btn-default wow fadeInUp js-scroll-trigger"
                  data-wow-delay="1s"
                  style="
                    visibility: visible;
                    animation-delay: 1s;
                    animation-name: fadeInUp;
                  "
                  >more details</a
                >
              </div>
            </div>
            <div class="col-md-6 p-0 clip-polygon">
              <div class="video-img">
                <!-- <a href="#nogo" class="hero__play"><img  src="assets/images/img-g.png"></a> -->
              </div>
            </div>
          </div>
          <div class="row text-left about_row">
            <div class="col-md-6 p-0 clip-polygon">
              <div class="video-img">
                <!-- <a href="#nogo" class="hero__play"><img  src="assets/images/img-g.png"></a> -->
              </div>
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
                <!-- <h2 class="text-left wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">المقالات</h2  > -->
              </div>
              <p
                class="about_h wow fadeInUp"
                data-wow-delay="1s"
                style="visibility: visible; animation-name: fadeInRight"
              >
                {{ $t("home_page.our_services.articles.question") }}
              </p>
              <!-- <p class="about_h wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-name: fadeInRight;">ماذا تقدم المقالات ؟</p> -->
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
              <!-- <p class="about_bottom_h wow fadeInUp " data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">حساباتنا لها حدود ، في الشريعة الإسلامية للميراث هناك بعض الحالات الخاصة التي تحدد من سيرث وما هو نصيبه.</p> -->
              <div
                class="top-banner wow fadeInRight text-left"
                style="visibility: visible; animation-name: fadeInRight"
              >
                <a
                  id="#services"
                  href="#services"
                  class="btn btn-default wow fadeInUp js-scroll-trigger"
                  data-wow-delay="1s"
                  style="
                    visibility: visible;
                    animation-delay: 1s;
                    animation-name: fadeInUp;
                  "
                  >more details</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- End About Us Area -->

    <!--#start Our footer Area -->
    <div class="our_footer_area">
      <div class="book_now_aera">
        <div class="container wow fadeInUp">
          <div class="row book_now">
            <div class="col-md-4">
              <div class="">
                <a class="logo-biss" href="index.html">
                  <img src="assets/images/logo_img.png"
                /></a>
              </div>
              <p class="footer-h">
                It is a long established fact that a btn btn-defaulter will be
                distracted by the btn btn-defaultable content of a page when
                looking at its layout.
              </p>
              <div class="bigpixi-footer-social">
                <a href="" target="_blank"
                  ><i
                    id="social-fb"
                    class="fa fa-facebook-square fa-3x social"
                  ></i
                ></a>
                <a href="" target="_blank"
                  ><i
                    id="social-tw"
                    class="fa fa-twitter-square fa-3x social"
                  ></i
                ></a>
                <a href="" target="_blank"
                  ><i id="social-em" class="fa fa-instagram fa-3x social"></i
                ></a>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-3">
              <h2 class="footer-top">SOLUTIONS</h2>
              <ul class="footer-menu">
                <li><a href=""> SaaS </a></li>
                <li><a href=""> Mobile </a></li>
                <li><a href="">Commerce </a></li>
                <li><a href=""> Gaming </a></li>
                <li><a href=""> Finance </a></li>
                <li><a href=""> Media </a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <ul class="location">
                <li class="footer-left-h">
                  <i class="fa fa-map-marker"></i>505 Thornall St #301, Edison,
                  <br />NJ 08837, USA
                </li>
                <li class="footer-left-h">
                  <i class="fa fa-phone"></i>Call Us <br />+1- 982-8-587 452
                  <br />+1- 982-8-587 452
                </li>
                <li class="footer-left-h">
                  <i class="fa fa-envelope-o"></i>Email
                  <a href=""> enquiry@demo.com </a>
                  <a href=""> enquiry@demo.com </a>
                </li>
                <p class="color-gray">
                  <a href="https://themewagon.com/theme_tag/free/"
                    >Free HTML5 Templates</a
                  >
                  distributed by
                  <a href="https://themewagon.com/">ThemeWagon</a>
                </p>
              </ul>
            </div>
            <div class="col-md-12">
              <p class="color-gray">
                <a href="https://www.navthemes.com/free-html-templates/"
                  >Free HTML Template</a
                >
                by <a href="https://www.navthemes.com">NavThemes </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--#End Our footer Area -->
    <!-- The following is only needed when the video is in the html
         otherwise the who .hero__overlay html can be removed -->
    <div class="hero__overlay">
      <div class="hero__modal">
        <a class="hero__close" href="#">Close</a>
        <iframe
          allowscriptaccess="always"
          id="hero-video"
          class="hero__player"
          src="https://www.youtube.com/embed/1NSA8ycGfKg?enablejsapi=1&html5=1"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- /.hero__overlay -->
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
