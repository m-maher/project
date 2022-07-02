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
                  {{ $t("rules.main_banner.title") }}
                </h5>
                <p
                  class="banner-text wow fadeInUp main-h3"
                  data-wow-delay="0.8s"
                >
                  {{ $t("rules.main_banner.brief") }}
                </p>
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
                <img v-if="$i18n.locale == 'ar'" src="../assets/images/chart_ar.jpg" alt="" />
                <img v-else src="../assets/images/chart_en.jpg" alt="" />
              </div>
              <div class="blog-details-content wow fadeInUp">
                <h3>{{ $t("rules.persons.husband.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.husband.first_state") }}</li>
                  <li>{{ $t("rules.persons.husband.ref_1") }}</li>
                  <li>{{ $t("rules.persons.husband.second_state") }}</li>
                  <li>{{ $t("rules.persons.husband.ref_2") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.wife.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.wife.first_state") }}</li>
                  <li>{{ $t("rules.persons.wife.ref_1") }}</li>
                  <li>{{ $t("rules.persons.wife.second_state") }}</li>
                  <li>{{ $t("rules.persons.wife.ref_2") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.daughter.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.daughter.first_state") }}</li>
                  <li>{{ $t("rules.persons.daughter.ref_1") }}</li>
                  <li>{{ $t("rules.persons.daughter.ref_2") }}</li>
                  <li>{{ $t("rules.persons.daughter.second_state") }}</li>
                  <li>{{ $t("rules.persons.daughter.ref_3") }}</li>
                  <li>{{ $t("rules.persons.daughter.ref_4") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.grand_daughter.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.grand_daughter.first_state") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_1") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_2") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_3") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.second_state") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_4") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_5") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_6") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.third_state") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_7") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_8") }}</li>
                  <li>{{ $t("rules.persons.grand_daughter.ref_9") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.father.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.father.first_state") }}</li>
                  <li>{{ $t("rules.persons.father.ref_1") }}</li>
                </ul>
                <h3></h3>
                <ul>
                  <li>{{ $t("rules.persons.mother.first_state") }}</li>
                  <li>{{ $t("rules.persons.mother.ref_1") }}</li>
                  <li>
                    {{ $t("rules.persons.mother.ref_2") }}
                  </li>
                  <li>{{ $t("rules.persons.mother.second_state") }}</li>
                  <li>{{ $t("rules.persons.mother.ref_3") }}</li>
                  <li>
                    {{ $t("rules.persons.mother.ref_4") }}
                  </li>
                </ul>
                <h3>{{ $t("rules.persons.paternal_grand_father.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.paternal_grand_father.first_state") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_father.ref_1") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_father.ref_2") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.paternal_grand_mother.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.paternal_grand_mother.first_state") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_mother.ref_1") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_mother.ref_2") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_mother.ref_3") }}</li>
                  <li>
                    {{ $t("rules.persons.paternal_grand_mother.second_state") }}
                  </li>
                  <li>{{ $t("rules.persons.paternal_grand_mother.ref_4") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_mother.ref_5") }}</li>
                  <li>{{ $t("rules.persons.paternal_grand_mother.ref_6") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.maternal_grand_mother.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.maternal_grand_mother.first_state") }}</li>
                  <li>{{ $t("rules.persons.maternal_grand_mother.ref_1") }}</li>
                  <li>
                    {{ $t("rules.persons.maternal_grand_mother.second_state") }}
                  </li>
                  <li>{{ $t("rules.persons.maternal_grand_mother.ref_2") }}</li>
                  <li>{{ $t("rules.persons.maternal_grand_mother.ref_3") }}</li>
                  <li>{{ $t("rules.persons.maternal_grand_mother.ref_4") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.full_sister.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.full_sister.first_state") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_1") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_2") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_3") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_4") }}</li>
                  <li>{{ $t("rules.persons.full_sister.second_state") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_5") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_6") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_7") }}</li>
                  <li>{{ $t("rules.persons.full_sister.ref_8") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.paternal_sister.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.paternal_sister.first_state") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_1") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_2") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_3") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_4") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.second_state") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_5") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_6") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_7") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_8") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.third_state") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_9") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_10") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_11") }}</li>
                  <li>{{ $t("rules.persons.paternal_sister.ref_12") }}</li>
                </ul>
                <h3>{{ $t("rules.persons.maternal_sibling.name") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.maternal_sibling.first_state") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.ref_1") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.ref_2") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.ref_3") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.second_state") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.ref_4") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.ref_5") }}</li>
                  <li>{{ $t("rules.persons.maternal_sibling.ref_6") }}</li>
                </ul>

                <h3>{{ $t("rules.persons.tasib.ranking") }}</h3>
                <ul>
                  <li>{{ $t("rules.persons.tasib.son_daughter") }}</li>
                  <li>
                    {{
                      $t(
                        "rules.persons.tasib.paternal_grandson_paternal_granddaughter"
                      )
                    }}
                  </li>
                  <li>{{ $t("rules.persons.tasib.father") }}</li>
                  <li>{{ $t("rules.persons.tasib.full_brother_full_sister") }}</li>
                  <li>
                    {{ $t("rules.persons.tasib.paternal_brother_paternal_sister") }}
                  </li>
                  <li>{{ $t("rules.persons.tasib.paternal_grandfather") }}</li>
                  <li>{{ $t("rules.persons.tasib.full_brothers_son") }}</li>
                  <li>{{ $t("rules.persons.tasib.paternal_brothers_son") }}</li>
                  <li>{{ $t("rules.persons.tasib.full_brothers_sons_son") }}</li>
                  <li>{{ $t("rules.persons.tasib.paternal_brother_sons_son") }}</li>
                  <li>{{ $t("rules.persons.tasib.paternal_uncle") }}</li>
                  <li>{{ $t("rules.persons.tasib.paternal_paternal_uncle") }}</li>
                  <li>{{ $t("rules.persons.tasib.paternal_uncles_son") }}</li>
                  <li>
                    {{ $t("rules.persons.tasib.paternal_paternal_uncles_son") }}
                  </li>
                  <li>{{ $t("rules.persons.tasib.paternal_uncles_sons_son") }}</li>
                  <li>
                    {{
                      $t("rules.persons.tasib.paternal_paternal_uncles_sons_son")
                    }}
                  </li>
                  <li>
                    {{ $t("rules.persons.tasib.paternal_uncles_sons_sons_son") }}
                  </li>
                  <li>
                    {{
                      $t(
                        "rules.persons.tasib.paternal_paternal_uncles_sons_sons_son"
                      )
                    }}
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
