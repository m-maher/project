<template>
  <div>
    <div class="bg-banner-img">
      <div class="overlay">
        <!-- #banner start -->
        <section id="banner">
          <div class="container">
            <div class="row wow fadeInUp">
              <!-- #banner-text start -->
              <div id="banner-text" class="col-md-12 text-c text-center">
                <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s">
                  Contact
                </h5>
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  No hours sank into aggregating and cleaning data. No complex
                  SQL queries required. Just the answers <br />
                  teams need to make smarter decisions, fast. Now, that's
                  data-driven.
                </p>
              </div>
              <!-- /#banner-text End -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- /#banner end -->
    <!-- #contact  Area start -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-heading left">
              <h4>Let's Talk about Your Business</h4>
            </div>
            <div class="contact-form-box margin-30px-top">
              <div
                class="no-margin-lr"
                id="success-contact-form"
                style="display: none"
              ></div>
              <form
                id="contactForm"
                method="post"
                class="contact-form"
                action="sendemail.php"
              >
                <div class="row">
                  <div class="col-md-12">
                    <input
                      type="text"
                      class="medium-input"
                      maxlength="50"
                      placeholder="Name *"
                      required="required"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <input
                      type="email"
                      class="medium-input"
                      maxlength="70"
                      placeholder="E-mail *"
                      required="required"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-6">
                    <input
                      type="text"
                      class="medium-input"
                      maxlength="70"
                      placeholder="Subject *"
                      required="required"
                      id="subject"
                      name="subject"
                    />
                  </div>
                  <div class="col-md-12">
                    <textarea
                      class="medium-textarea"
                      rows="12"
                      maxlength="1000"
                      placeholder="Message *"
                      required="required"
                      id="message"
                      name="message"
                    ></textarea>
                  </div>
                  <div class="col-md-12 sm-margin-30px-bottom">
                    <div
                      class="top-contact wow fadeInRight text-left"
                      style="visibility: visible; animation-name: fadeInRight"
                    >
                      <a
                        type="submit"
                        id="#services"
                        href="#services"
                        class="btn btn-primary wow fadeInUp js-scroll-trigger"
                        data-wow-delay="1s"
                        style="
                          visibility: visible;
                          animation-delay: 1s;
                          animation-name: fadeInUp;
                        "
                        >Send Message</a
                      >
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-info-box padding-30px-left sm-no-padding">
              <div class="row">
                <div class="col-12">
                  <div
                    class="contact-info-section no-padding-top margin-10px-top"
                  >
                    <h4>Get in Touch</h4>
                    <p>
                      Tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      consequat.
                    </p>
                  </div>
                </div>
                <div class="col-12">
                  <div class="contact-info-section">
                    <h4>The Office</h4>
                    <ul class="list-style-1 no-margin-bottom">
                      <li>
                        <p>
                          <i class="fa fa-phone text-center"></i>
                          <strong>Address:</strong> Regina ST, London, SK 8GH.
                        </p>
                      </li>
                      <li>
                        <p>
                          <i class="fa fa-globe text-center"></i>
                          <strong>Phone:</strong> (+44) 123 456 789
                        </p>
                      </li>
                      <li>
                        <p>
                          <i class="fa fa-envelope text-center"></i>
                          <strong>Email:</strong>
                          <a href="javascript:void(0)" class="email_color_site"
                            >email@youradress.com</a
                          >
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-12">
                  <div
                    class="contact-info-section border-none no-padding-bottom no-margin-bottom"
                  >
                    <h4>Business Hours</h4>
                    <ul class="list-style-2">
                      <li>Monday - Friday - 9am to 5pm</li>
                      <li>Saturday - 9am to 2pm</li>
                      <li>Sunday - Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>
