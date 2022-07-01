<template>
  <div class="hello">
    <div class="container-fluid">
      <div class="row justify-content-center py-5">
        <div class="col-md-10" v-if="isForm">
          <div class="row justify-content-center mb-5">
            <div class="col-lg-2 col-md-4">
              <div class="d-flex align-items-center h-100">
                <h2>{{ $t("type_of_deceased") }}</h2>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <label>
                <input
                  type="radio"
                  name="gender"
                  @change="chooseGender('male')"
                />
                <span>{{ $t("male") }}</span>
              </label>
            </div>
            <div class="col-lg-3 col-md-4 col-6">
              <label>
                <input
                  type="radio"
                  name="gender"
                  @change="chooseGender('female')"
                />
                <span>{{ $t("female") }}</span>
              </label>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-lg-2 col-md-4 col-4">
              <h2>{{ $t("heir_type") }}</h2>
            </div>
            <div class="col-lg-6 col-md-8 col-8">
              <h2>{{ $t("heir_count") }}</h2>
            </div>
          </div>
          <template v-for="(name, index) in heirNames">
            <div
              class="row justify-content-center mb-3"
              v-if="heirs[name] != null"
              :key="index"
            >
              <div class="col-lg-2 col-md-4 col-4">
                <label
                  for="inputState"
                  class="form-label"
                  style="font-size: 20px"
                  >{{ $t(`${name}`) }}</label
                >
              </div>
              <div class="col-lg-6 col-md-8 col-8">
                <select
                  id="inputState"
                  class="form-select"
                  :value="heirs[name]"
                  v-on:change="
                    (e) => handleCountChange(name, parseInt(e.target.value))
                  "
                  :disabled="isDisabled"
                >
                  <template v-if="maxCount() > 1">
                    <option
                      v-for="(count, index) in range(maxCount(name) + 1)"
                      :key="index"
                    >
                      {{ count }}
                    </option>
                  </template>
                  <template v-else>
                    <option value="0">no</option>
                    <option value="1">yes</option>
                  </template>
                </select>
              </div>
            </div>
          </template>
          <div class="row justify-content-center my-5">
            <div class="col-8 d-flex justify-content-center">
              <button class="submit-calculation" @click="selectedHeirs">
                {{ $t("calculate") }}
              </button>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-8">
              <div class="notes">
                <span>{{ $t("calculator.notes.title") }}</span>
                <ul>
                  <li>
                    {{ $t("calculator.notes.first_note") }}
                  </li>
                  <li>
                    {{ $t("calculator.notes.second_note") }}
                  </li>
                  <li>
                    {{ $t("calculator.notes.third_note") }}
                  </li>
                  <li>
                    <span>{{ $t("calculator.notes.fourth_note") }}</span>
                    <ul>
                      <li>{{ $t("calculator.notes.first_sub") }}</li>
                      <li>{{ $t("calculator.notes.second_sub") }}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-10" v-if="isResult">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div>
                <table class="table table-hover" style="border: 1px solid">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">{{ $t("heir_type") }}</th>
                      <th scope="col">{{ $t("heir_count") }}</th>
                      <th scope="col">{{ $t("share_type") }}</th>
                      <th scope="col">{{ $t("share_fraction") }}</th>
                      <th scope="col">{{ $t("share_percentage") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in results"
                      :key="`${item.name}-${item.type}`"
                    >
                      <td>{{ $t(`${item.name}`) }}</td>
                      <td>{{ item.count }}</td>
                      <td>{{ $t(`${item.type}`) }}</td>
                      <td>{{ item.share.toFraction() }}</td>
                      <td>{{ toPercentage(item.share).toFixed(2) }}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-8">
              <h2 v-if="finalData.length != 0" class="mb-4">
                {{ $t("legal_guide") }}
              </h2>
              <div v-for="item in finalData" :key="item.id" class="ref-item">
                <p v-if="item.name != null">
                  <span class="fw-bold">{{ $t("ref.heir") }}: </span
                  >{{ $t(`${item.name}`) }}
                </p>
                <p v-if="item.causing != null">
                  <span class="fw-bold">{{ $t("ref.causing") }}: </span
                  >{{ item.causing }}
                </p>
                <p v-if="item.proofType != null">
                  <span class="fw-bold">{{ $t("ref.proofType") }}: </span
                  >{{ item.proofType }}
                </p>
                <p v-if="item.noQVerse != null">
                  <span class="fw-bold">{{ $t("ref.noQVerse") }}: </span
                  >{{ item.noQVerse }}
                </p>
                <p v-if="item.surahQName != null">
                  <span class="fw-bold">{{ $t("ref.surahQName") }}: </span
                  >{{ item.surahQName }}
                </p>
                <p v-if="item.textAr != null">
                  <span class="fw-bold">{{ $t("ref.textAr") }}: </span
                  >{{ item.textAr }}
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center my-5">
            <div class="col-8 d-flex justify-content-center">
              <button
                class="submit-calculation"
                @click="
                  isForm = true;
                  isResult = false;
                "
              >
                {{ $t("back") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
label {
  cursor: pointer;
  padding: 0;
  width: 100%;

  input {
    position: absolute;
    display: none;
    color: #fff !important;

    &:checked {
      + span {
        background-color: rgba(39, 37, 185, 0.1);
        color: #2725b9d4;

        &:hover {
          border: 1px solid #2725b9d4;
        }
      }
    }
  }

  span {
    text-align: center;
    display: block;
    padding: 15px 10px;
    color: #5f6369;
    border-radius: 4px;
    border: 1px solid #d4d4d4;
    transition: all 0.5s;

    &:hover {
      border: 1px solid #2725b9d4;
    }
  }
}
</style>

<script>
import {
  defaultHeirs,
  calculate,
} from "@hu-bcs1/islamic-inheritance-calculator";

export default {
  name: "InheritanceCalculator",
  data() {
    return {
      heirs: defaultHeirs,
      heirNames: "",
      selected: {},
      results: [],
      isDisabled: true,
      allSelectedHeirs: "",
      heirsRef: "",
      finalData: "",
      isForm: true,
      isResult: false,
      isValueSelected: false,
    };
  },
  methods: {
    handleCountChange: function (name, value) {
      this.heirs[name] = value;
      let obj = {};
      obj[name] = value;
      //eslint-disable-next-line
      this.selected = { ...this.selected, ...obj };
      // this.selectedHeirs(this.selected);
      this.isValueSelected = true;
    },
    range: (end) => [...Array(end).keys()],
    maxCount: (heir) => {
      switch (heir) {
        case "father":
        case "mother":
        case "husband":
          return 1;
        case "wife":
          return 4;
        default:
          return 20;
      }
    },
    selectedHeirs: function () {
      this.results = [];
      this.allSelectedHeirs = this.selected;
      //eslint-disable-next-line
      if (this.allSelectedHeirs != "") {
        this.results = calculate(this.allSelectedHeirs);
      }
      // this.printResults(this.results);
      this.getRef(this.allSelectedHeirs, this.results);
      if (this.isValueSelected) {
        this.isForm = false;
        this.isResult = true;
      }
    },
    printResults: function (results) {
      const fractionToString = (r) => ({ ...r, share: r.share.toFraction() });
      return results.map(fractionToString);
    },
    getRef(selection, results) {
      results = this.printResults(results);
      console.log(results);
      this.finalData = [];
      for (let i in selection) {
        this.heirsRef.forEach((item) => {
          // husband
          if (item.name == i && i == "husband" && selection[i] != 0) {
            results.forEach((result) => {
              // husband share 1/2
              if (
                result.name == "husband" &&
                result.share == "1/2" &&
                item.propId == 1
              ) {
                this.finalData.push(item);
              }
              // husband share 1/4
              if (
                result.name == "husband" &&
                result.share == "1/4" &&
                item.propId == 2
              ) {
                this.finalData.push(item);
              }
            });
          }

          // wife
          if (item.name == i && i == "wife" && selection[i] != 0) {
            results.forEach((result) => {
              // wife share 1/4
              if (
                result.name == "wife" &&
                result.share == "1/4" &&
                item.propId == 3
              ) {
                this.finalData.push(item);
              }
              // wife share 1/8
              if (
                result.name == "wife" &&
                result.share == "1/8" &&
                item.propId == 4
              ) {
                this.finalData.push(item);
              }
            });
          }

          // son
          if (item.name == i && i == "son" && selection[i] != 0) {
            // son with female
            if (
              selection.daughter != undefined &&
              selection.daughter != 0 &&
              item.propId == 5
            ) {
              this.finalData.push(item);
            }
            // son without female
            if (
              (selection.daughter == undefined || selection.daughter == 0) &&
              item.propId == 6
            ) {
              this.finalData.push(item);
            }
          }

          // daughter
          if (item.name == i && i == "daughter" && selection[i] != 0) {
            results.forEach((result) => {
              // daughter share 1/2
              if (
                result.name == "daughter" &&
                result.count == 1 &&
                (result.share == "1/2" || result.share == "3/4") &&
                item.propId == 7
              ) {
                this.finalData.push(item);
              }
              // daughter share 2/3
              if (
                result.name == "daughter" &&
                result.count > 1 &&
                (selection.son == undefined || selection.son == 0) &&
                item.propId == 8
              ) {
                this.finalData.push(item);
              }
              // daughter has male
              if (
                selection.son != undefined &&
                selection.son != 0 &&
                item.propId == 9
              ) {
                this.finalData.push(item);
              }
            });
          }

          // paternal_grand_son
          if (
            item.name == i &&
            i == "paternal_grand_son" &&
            selection[i] != 0
          ) {
            // paternal_grand_son blocked by son
            if (
              selection.son != undefined &&
              selection.son != 0 &&
              item.propId == 10
            ) {
              this.finalData.push(item);
            }
            // paternal_grand_son with female
            if (
              (selection.son == undefined || selection.son == 0) &&
              selection.paternal_grand_daughter != undefined &&
              selection.paternal_grand_daughter != 0 &&
              item.propId == 11
            ) {
              this.finalData.push(item);
            }
            // paternal_grand_son without female
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.paternal_grand_daughter == undefined ||
                selection.paternal_grand_daughter == 0) &&
              item.propId == 12
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_grand_daughter
          if (
            item.name == i &&
            i == "paternal_grand_daughter" &&
            selection[i] != 0 &&
            (selection.son == undefined || selection.son == 0)
          ) {
            results.forEach((result) => {
              // paternal_grand_daughter share 1/2
              if (
                result.name == "paternal_grand_daughter" &&
                result.count == 1 &&
                (result.share == "1/2" || result.share == "3/4") &&
                item.propId == 13
              ) {
                this.finalData.push(item);
              }
              // paternal_grand_daughter share 2/3
              if (
                result.name == "paternal_grand_daughter" &&
                result.count > 1 &&
                (selection.daughter == undefined || selection.daughter == 0) &&
                (selection.paternal_grand_son == undefined ||
                  selection.paternal_grand_son == 0) &&
                item.propId == 14
              ) {
                this.finalData.push(item);
              }
              // paternal_grand_daughter share 1/6
              if (
                selection.daughter != undefined &&
                selection.daughter != 0 &&
                result.share == "1/6" &&
                item.propId == 16
              ) {
                this.finalData.push(item);
              }
            });

            // paternal_grand_daughter with paternal_grand_son
            if (
              selection.paternal_grand_son != undefined &&
              selection.paternal_grand_son != 0 &&
              item.propId == 15
            ) {
              this.finalData.push(item);
            }
          }

          // father
          if (item.name == i && i == "father" && selection[i] != 0) {
            results.forEach((result) => {
              // father share 1/6
              if (result.name == "father" && result.share == "1/6") {
                if (
                  ((selection.son != undefined && selection.son != 0) ||
                    (selection.paternal_grand_son != undefined &&
                      selection.paternal_grand_son != 0)) &&
                  item.propId == 18
                ) {
                  this.finalData.push(item);
                }
                if (
                  ((selection.daughter != undefined &&
                    selection.daughter != 0) ||
                    (selection.paternal_grand_daughter != undefined &&
                      selection.paternal_grand_daughter != 0)) &&
                  item.propId == 19
                ) {
                  this.finalData.push(item);
                }
              }

              // father without branch
              if (
                (selection.son == undefined || selection.son == 0) &&
                (selection.paternal_grand_son == undefined ||
                  selection.paternal_grand_son == 0) &&
                (selection.daughter == undefined || selection.daughter == 0) &&
                (selection.paternal_grand_daughter == undefined ||
                  selection.paternal_grand_daughter == 0) &&
                item.propId == 20
              ) {
                this.finalData.push(item);
              }
            });
          }

          // mother
          if (item.name == i && i == "mother" && selection[i] != 0) {
            results.forEach((result) => {
              // mother share 1/6
              if (
                result.name == "mother" &&
                result.share == "1/6" &&
                item.propId == 21
              ) {
                this.finalData.push(item);
              }
              // mother share 1/3
              if (
                result.name == "mother" &&
                result.share == "1/3" &&
                item.propId == 22
              ) {
                this.finalData.push(item);
              }
            });
          }

          // full_brother
          if (
            item.name == i &&
            i == "full_brother" &&
            selection[i] != 0 &&
            (selection.son == undefined || selection.son == 0) &&
            (selection.father == undefined || selection.father == 0) &&
            item.propId == 28
          ) {
            this.finalData.push(item);
          }

          // maternal_sibling
          if (item.name == i && i == "maternal_sibling" && selection[i] != 0) {
            results.forEach((result) => {
              // maternal_sibling share 1/6
              if (
                result.name == "maternal_sibling" &&
                result.share == "1/6" &&
                result.count == 1 &&
                item.propId == 32
              ) {
                this.finalData.push(item);
              }
              // maternal_sibling share 1/3
              if (
                result.name == "maternal_sibling" &&
                result.share == "1/3" &&
                result.count > 1 &&
                item.propId == 33
              ) {
                this.finalData.push(item);
              }
            });
          }

          // full_sister
          if (item.name == i && i == "full_sister" && selection[i] != 0) {
            results.forEach((result) => {
              // single full_sister without full_brother
              if (
                result.name == "full_sister" &&
                result.count == 1 &&
                (selection.full_brother == undefined ||
                  selection.full_brother == 0) &&
                item.propId == 38
              ) {
                this.finalData.push(item);
              }
              // multiple full_sister without full_brother
              if (
                result.name == "full_sister" &&
                result.count > 1 &&
                (selection.full_brother == undefined ||
                  selection.full_brother == 0) &&
                item.propId == 39
              ) {
                this.finalData.push(item);
              }
            });
            // full_sister with full_brother
            if (
              selection.full_brother != undefined &&
              selection.full_brother != 0 &&
              item.propId == 40
            ) {
              this.finalData.push(item);
            }
            // full_sister with female
            if (
              ((selection.daughter != undefined && selection.daughter != 0) ||
                (selection.paternal_grand_daughter != undefined &&
                  selection.paternal_grand_daughter != 0)) &&
              item.propId == 41
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_sister
          if (item.name == i && i == "paternal_sister" && selection[i] != 0) {
            results.forEach((result) => {
              // paternal_sister share 1/2
              if (
                result.name == "paternal_sister" &&
                result.share == "1/2" &&
                result.count == 1 &&
                (selection.paternal_brother == undefined ||
                  selection.paternal_brother == 0) &&
                item.propId == 43
              ) {
                this.finalData.push(item);
              }
              // paternal_sister share 2/3
              if (
                result.name == "full_sister" &&
                result.share == "2/3" &&
                result.count > 1 &&
                (selection.paternal_brother == undefined ||
                  selection.paternal_brother == 0) &&
                item.propId == 44
              ) {
                this.finalData.push(item);
              }
            });
          }

          // full_nephew
          if (item.name == i && i == "full_nephew" && selection[i] != 0) {
            // full_nephew without male
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.father == undefined || selection.father == 0) &&
              (selection.full_brother == undefined ||
                selection.full_brother == 0) &&
              (selection.paternal_brother == undefined ||
                selection.paternal_brother == 0) &&
              item.propId == 49
            ) {
              this.finalData.push(item);
            }

            // full_nephew with male
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.father != undefined && selection.father != 0) ||
                (selection.full_brother != undefined &&
                  selection.full_brother != 0) ||
                (selection.paternal_brother != undefined &&
                  selection.paternal_brother != 0)) &&
              item.propId == 51
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_nephew
          if (item.name == i && i == "paternal_nephew" && selection[i] != 0) {
            // paternal_nephew without male
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.father == undefined || selection.father == 0) &&
              (selection.full_brother == undefined ||
                selection.full_brother == 0) &&
              (selection.paternal_brother == undefined ||
                selection.paternal_brother == 0) &&
              item.propId == 52
            ) {
              this.finalData.push(item);
            }

            // paternal_nephew with male
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.father != undefined && selection.father != 0) ||
                (selection.full_brother != undefined &&
                  selection.full_brother != 0) ||
                (selection.paternal_brother != undefined &&
                  selection.paternal_brother != 0)) &&
              item.propId == 54
            ) {
              this.finalData.push(item);
            }
          }

          // full_paternal_uncle
          if (
            item.name == i &&
            i == "full_paternal_uncle" &&
            selection[i] != 0
          ) {
            // full_paternal_uncle without male
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.father == undefined || selection.father == 0) &&
              (selection.full_brother == undefined ||
                selection.full_brother == 0) &&
              (selection.paternal_brother == undefined ||
                selection.paternal_brother == 0) &&
              item.propId == 55
            ) {
              this.finalData.push(item);
            }

            // full_paternal_uncle with male
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.father != undefined && selection.father != 0) ||
                (selection.full_brother != undefined &&
                  selection.full_brother != 0) ||
                (selection.paternal_brother != undefined &&
                  selection.paternal_brother != 0)) &&
              item.propId == 56
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_paternal_uncle
          if (
            item.name == i &&
            i == "paternal_paternal_uncle" &&
            selection[i] != 0
          ) {
            // paternal_paternal_uncle without male
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.father == undefined || selection.father == 0) &&
              (selection.full_brother == undefined ||
                selection.full_brother == 0) &&
              (selection.paternal_brother == undefined ||
                selection.paternal_brother == 0) &&
              (selection.full_paternal_uncle == undefined ||
                selection.full_paternal_uncle == 0) &&
              item.propId == 57
            ) {
              this.finalData.push(item);
            }

            // paternal_paternal_uncle with male
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.father != undefined && selection.father != 0) ||
                (selection.full_brother != undefined &&
                  selection.full_brother != 0) ||
                (selection.paternal_brother != undefined &&
                  selection.paternal_brother != 0) ||
                (selection.full_paternal_uncle != undefined &&
                  selection.full_paternal_uncle != 0)) &&
              item.propId == 58
            ) {
              this.finalData.push(item);
            }
          }

          // full_cousin
          if (item.name == i && i == "full_cousin" && selection[i] != 0) {
            // full_cousin without male
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.father == undefined || selection.father == 0) &&
              (selection.full_brother == undefined ||
                selection.full_brother == 0) &&
              (selection.full_paternal_uncle == undefined ||
                selection.full_paternal_uncle == 0) &&
              (selection.paternal_paternal_uncle == undefined ||
                selection.paternal_paternal_uncle == 0) &&
              item.propId == 59
            ) {
              this.finalData.push(item);
            }

            // full_cousin with male
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.father != undefined && selection.father != 0) ||
                (selection.full_brother != undefined &&
                  selection.full_brother != 0) ||
                (selection.paternal_brother != undefined &&
                  selection.paternal_brother != 0) ||
                (selection.full_paternal_uncle != undefined &&
                  selection.full_paternal_uncle != 0) ||
                (selection.paternal_paternal_uncle != undefined &&
                  selection.paternal_paternal_uncle != 0)) &&
              item.propId == 60
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_cousin
          if (item.name == i && i == "paternal_cousin" && selection[i] != 0) {
            // paternal_cousin without male
            if (
              (selection.son == undefined || selection.son == 0) &&
              (selection.father == undefined || selection.father == 0) &&
              (selection.full_brother == undefined ||
                selection.full_brother == 0) &&
              (selection.paternal_brother == undefined ||
                selection.paternal_brother == 0) &&
              (selection.full_paternal_uncle == undefined ||
                selection.full_paternal_uncle == 0) &&
              (selection.paternal_paternal_uncle == undefined ||
                selection.paternal_paternal_uncle == 0) &&
              item.propId == 61
            ) {
              this.finalData.push(item);
            }

            // paternal_cousin with male
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.father != undefined && selection.father != 0) ||
                (selection.full_brother != undefined &&
                  selection.full_brother != 0) ||
                (selection.paternal_brother != undefined &&
                  selection.paternal_brother != 0) ||
                (selection.full_paternal_uncle != undefined &&
                  selection.full_paternal_uncle != 0) ||
                (selection.full_cousin != undefined &&
                  selection.full_cousin != 0)) &&
              item.propId == 62
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_grand_father
          if (
            item.name == i &&
            i == "paternal_grand_father" &&
            selection[i] != 0
          ) {
            results.forEach((result) => {
              // paternal_grand_father share 1/6
              if (
                result.name == "paternal_grand_father" &&
                result.share == "1/6"
              ) {
                // paternal_grand_father without father or male
                if (
                  (selection.father == undefined ||
                    selection.father == 0 ||
                    selection.son == undefined ||
                    selection.son == 0 ||
                    selection.paternal_grand_son == undefined ||
                    selection.paternal_grand_son == 0) &&
                  item.propId == 63
                ) {
                  this.finalData.push(item);
                }
                // paternal_grand_father without father or female
                if (
                  (selection.father == undefined ||
                    selection.father == 0 ||
                    selection.daughter == undefined ||
                    selection.daughter == 0 ||
                    selection.paternal_grand_daughter == undefined ||
                    selection.paternal_grand_daughter == 0) &&
                  item.propId == 64
                ) {
                  this.finalData.push(item);
                }
              }
            });
            // paternal_grand_father with father
            if (
              selection.father != undefined &&
              selection.father != 0 &&
              item.propId == 65
            ) {
              this.finalData.push(item);
            }
          }

          // paternal_grand_mother
          if (
            item.name == i &&
            i == "paternal_grand_mother" &&
            selection[i] != 0
          ) {
            if (
              (selection.father == undefined || selection.father == 0) &&
              (selection.mother == undefined || selection.mother == 0) &&
              item.propId == 66
            ) {
              this.finalData.push(item);
            }
          }

          // maternal_grand_mother
          if (
            item.name == i &&
            i == "maternal_grand_mother" &&
            selection[i] != 0
          ) {
            if (
              (selection.father == undefined || selection.father == 0) &&
              (selection.mother == undefined || selection.mother == 0) &&
              item.propId == 68
            ) {
              this.finalData.push(item);
            }
          }
        });
      }
      this.finalData = new Set(this.finalData);
      console.log(this.finalData);
    },
    chooseGender(gender) {
      this.isDisabled = false;
      this.isValueSelected = false;
      this.selected = {};
      this.selectedHeirs("");
      for (let item in this.heirs) {
        this.heirs[item] = 0;
      }
      if (gender == "male") {
        this.heirs["husband"] = null;
      } else {
        this.heirs["wife"] = null;
      }
    },
    toPercentage: (fr) => {
      return fr.mul(100).valueOf();
    },
  },
  async mounted() {
    this.heirsRef = this.$store.getters.heirsData
    this.heirs.husband = null;
    this.heirs.wife = null;
    this.heirNames = Object.keys(this.heirs);
  },
};
</script>
