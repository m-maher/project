<template>
  <div>
    <div class="our_footer_area">
      <div class="book_now_aera">
        <div class="container wow fadeInUp">
          <div class="row book_now">
            <div class="col-md-8">
              <div class="">
                <a class="logo-biss" href="index.html">
                  <img src="../assets/images/logo_img.png"
                /></a>
              </div>
              <p class="footer-h">
                {{ $t("about_us.about_area.answer") }}
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
              <!-- <h2 class="footer-top">SOLUTIONS</h2> -->
              <ul class="footer-menu">
                <li class="nav-item">
                  <router-link to="/">{{ $t("navbar.home") }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/calculator">{{
                    $t("navbar.calculator")
                  }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/rules">{{
                    $t("navbar.rules")
                  }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/articles">{{
                    $t("navbar.articles")
                  }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about">{{
                    $t("navbar.about")
                  }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
