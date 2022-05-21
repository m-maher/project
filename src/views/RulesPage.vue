<template>
  <div>
    <div class="bg-banner-img clip-ellipse">
      <div class="overlay">
        <!-- #banner start -->
        <section id="banner" class="pt-0">
          <div class="container">
            <div class="row">
              <!-- #banner-text start -->
              <div id="banner-text" class="col-md-12 text-c text-center">
                <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s">
                  {{ $t("rules.main_banner.title") }}
                </h5>
                <!-- <h5 class="wow fadeInUp main-h" data-wow-delay="0.2s">قواعد المواريث</h5> -->
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  {{ $t("rules.main_banner.brief") }}
                </p>
                <!-- <p class="banner-text wow fadeInUp main-h3" data-wow-delay="0.8s">القواعد المنطقية لحساب المواريث طبقا لفقة الأزهر الشريف</p> -->
              </div>
              <!-- /#banner-text End -->
            </div>
          </div>
        </section>
      </div>
    </div>
    <!-- /#banner end -->

    <section class="blog-details-area wow fadeInUp">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="blog-details-wrap">
              <div class="blog-details-img text-center">
                <img src="../assets/images/chart.jpg" alt="" />
              </div>
              <div class="blog-details-content wow fadeInUp">
                <h3>{{ $t("persons.husband.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.husband.first_state") }}</li>
                  <li>{{ $t("persons.husband.ref_1") }}</li>
                  <li>{{ $t("persons.husband.second_state") }}</li>
                  <li>{{ $t("persons.husband.ref_2") }}</li>
                </ul>
                <h3>{{ $t("persons.wife.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.wife.first_state") }}</li>
                  <li>{{ $t("persons.wife.ref_1") }}</li>
                  <li>{{ $t("persons.wife.second_state") }}</li>
                  <li>{{ $t("persons.wife.ref_2") }}</li>
                </ul>
                <h3>{{ $t("persons.daughter.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.daughter.first_state") }}</li>
                  <li>{{ $t("persons.daughter.ref_1") }}</li>
                  <li>{{ $t("persons.daughter.ref_2") }}</li>
                  <li>{{ $t("persons.daughter.second_state") }}</li>
                  <li>{{ $t("persons.daughter.ref_3") }}</li>
                  <li>{{ $t("persons.daughter.ref_4") }}</li>
                </ul>
                <h3>{{ $t("persons.grand_daughter.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.grand_daughter.first_state") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_1") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_2") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_3") }}</li>
                  <li>{{ $t("persons.grand_daughter.second_state") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_4") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_5") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_6") }}</li>
                  <li>{{ $t("persons.grand_daughter.third_state") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_7") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_8") }}</li>
                  <li>{{ $t("persons.grand_daughter.ref_9") }}</li>
                </ul>
                <h3>{{ $t("persons.father.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.father.first_state") }}</li>
                  <li>{{ $t("persons.father.ref_1") }}</li>
                </ul>
                <h3></h3>
                <ul>
                  <li>{{ $t("persons.mother.first_state") }}</li>
                  <li>{{ $t("persons.mother.ref_1") }}</li>
                  <li>
                    {{ $t("persons.mother.ref_2") }}
                  </li>
                  <li>{{ $t("persons.mother.second_state") }}</li>
                  <li>{{ $t("persons.mother.ref_3") }}</li>
                  <li>
                    {{ $t("persons.mother.ref_4") }}
                  </li>
                </ul>
                <h3>{{ $t("persons.paternal_grand_father.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.paternal_grand_father.first_state") }}</li>
                  <li>{{ $t("persons.paternal_grand_father.ref_1") }}</li>
                  <li>{{ $t("persons.paternal_grand_father.ref_2") }}</li>
                </ul>
                <h3>{{ $t("persons.paternal_grand_mother.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.paternal_grand_mother.first_state") }}</li>
                  <li>{{ $t("persons.paternal_grand_mother.ref_1") }}</li>
                  <li>{{ $t("persons.paternal_grand_mother.ref_2") }}</li>
                  <li>{{ $t("persons.paternal_grand_mother.ref_3") }}</li>
                  <li>
                    {{ $t("persons.paternal_grand_mother.second_state") }}
                  </li>
                  <li>{{ $t("persons.paternal_grand_mother.ref_4") }}</li>
                  <li>{{ $t("persons.paternal_grand_mother.ref_5") }}</li>
                  <li>{{ $t("persons.paternal_grand_mother.ref_6") }}</li>
                </ul>
                <h3>{{ $t("persons.maternal_grand_mother.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.maternal_grand_mother.first_state") }}</li>
                  <li>{{ $t("persons.maternal_grand_mother.ref_1") }}</li>
                  <li>
                    {{ $t("persons.maternal_grand_mother.second_state") }}
                  </li>
                  <li>{{ $t("persons.maternal_grand_mother.ref_2") }}</li>
                  <li>{{ $t("persons.maternal_grand_mother.ref_3") }}</li>
                  <li>{{ $t("persons.maternal_grand_mother.ref_4") }}</li>
                </ul>
                <h3>{{ $t("persons.full_sister.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.full_sister.first_state") }}</li>
                  <li>{{ $t("persons.full_sister.ref_1") }}</li>
                  <li>{{ $t("persons.full_sister.ref_2") }}</li>
                  <li>{{ $t("persons.full_sister.ref_3") }}</li>
                  <li>{{ $t("persons.full_sister.ref_4") }}</li>
                  <li>{{ $t("persons.full_sister.second_state") }}</li>
                  <li>{{ $t("persons.full_sister.ref_5") }}</li>
                  <li>{{ $t("persons.full_sister.ref_6") }}</li>
                  <li>{{ $t("persons.full_sister.ref_7") }}</li>
                  <li>{{ $t("persons.full_sister.ref_8") }}</li>
                </ul>
                <h3>{{ $t("persons.paternal_sister.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.paternal_sister.first_state") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_1") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_2") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_3") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_4") }}</li>
                  <li>{{ $t("persons.paternal_sister.second_state") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_5") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_6") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_7") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_8") }}</li>
                  <li>{{ $t("persons.paternal_sister.third_state") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_9") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_10") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_11") }}</li>
                  <li>{{ $t("persons.paternal_sister.ref_12") }}</li>
                </ul>
                <h3>{{ $t("persons.maternal_sibling.name") }}</h3>
                <ul>
                  <li>{{ $t("persons.maternal_sibling.first_state") }}</li>
                  <li>{{ $t("persons.maternal_sibling.ref_1") }}</li>
                  <li>{{ $t("persons.maternal_sibling.ref_2") }}</li>
                  <li>{{ $t("persons.maternal_sibling.ref_3") }}</li>
                  <li>{{ $t("persons.maternal_sibling.second_state") }}</li>
                  <li>{{ $t("persons.maternal_sibling.ref_4") }}</li>
                  <li>{{ $t("persons.maternal_sibling.ref_5") }}</li>
                  <li>{{ $t("persons.maternal_sibling.ref_6") }}</li>
                </ul>

                <h3>14) Tasib ranking in order</h3>
                <ul>
                  <li>1) Son, daughter</li>
                  <li>2) Paternal Grandson, paternal Granddaughter</li>
                  <li>3) Father</li>
                  <li>4) Full Brother, Full sister</li>
                  <li>5) Paternal Brother, Paternal Sister</li>
                  <li>6) Paternal Grandfather</li>
                  <li>7) Full brother’s son</li>
                  <li>8) Paternal brother’s son</li>
                  <li>9) Full brother’s son’s son</li>
                  <li>10) Paternal brother son’s son</li>
                  <li>11) Paternal uncle (father’s full brother)</li>
                  <li>
                    12) Paternal paternal uncle (father’s paternal brother)
                  </li>
                  <li>13) Paternal uncle’s son (father’s brother’s son)</li>
                  <li>
                    14) Paternal paternal uncle’s son (father’s paternal
                    brother’s son)
                  </li>
                  <li>
                    15) Paternal uncle’s son’s son (father’s brother’s son’ s
                    son)
                  </li>
                  <li>
                    16) Paternal paternal uncle’s son’s son (father’s paternal
                    brother’s son’s son)
                  </li>
                  <li>
                    17) Paternal uncle’s son’s son’s son (father’s brother’s
                    son’ s son’s son)
                  </li>
                  <li>
                    18) Paternal paternal uncle’s son’s son’s son (father’s
                    paternal brother’s son’s son’s son)
                  </li>
                </ul>
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
  name: "AboutPage",
};
</script>
