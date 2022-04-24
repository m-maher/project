<template>
  <div class="hello">
    <div class="container-fluid">
      <div class="row justify-content-center py-5">
        <div class="col-12 text-center mb-5">
          <h1>حساب نسبة الميراث</h1>
        </div>
        <div class="col-md-6">
          <div class="row justify-content-center mb-3">
            <div class="col-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  @change="chooseGender('male')"
                />
                <span>{{ $t("male") }}</span>
              </label>
            </div>
            <div class="col-4">
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
            <div class="col-4">
              <h2>{{ $t("heir_type") }}</h2>
            </div>
            <div class="col-6">
              <h2>{{ $t("heir_count") }}</h2>
            </div>
          </div>
          <div
            class="row justify-content-center mb-3"
            v-for="(name, index) in spouse"
            :key="'A' + index"
          >
            <div class="col-4">
              <label for="inputState" class="form-label">{{
                $t(`${name}`)
              }}</label>
            </div>
            <div class="col-6">
              <select
                id="inputState"
                class="form-select"
                :value="0"
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
          <div
            class="row justify-content-center mb-3"
            v-for="(name, index) in heirNames"
            :key="index"
          >
            <div class="col-4">
              <label for="inputState" class="form-label">{{
                $t(`${name}`)
              }}</label>
            </div>
            <div class="col-6">
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
        </div>
        <div class="col-md-6">
          <div class="row justify-content-center">
            <div class="col-md-10">
              <div>
                <table class="table table-hover">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">{{ $t("heir_type") }}</th>
                      <th scope="col">{{ $t("heir_count") }}</th>
                      <th scope="col">{{ $t("share_fraction") }}</th>
                      <th scope="col">{{ $t("share_percentage") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in results"
                      :key="`${item.name}-${item.type}`"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.count }}</td>
                      <td>{{ item.share.toFraction() }}</td>
                      <td>{{ toPercentage(item.share).toFixed(2) }}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
        background-color: rgba(228, 0, 23, 0.1);
        color: #e40017;

        &:hover {
          border: 1px solid #d4d4d4;
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
      border: 1px solid #e40017;
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
      spouse: [],
      selected: {},
      results: [],
      isDisabled: true,
    };
  },
  methods: {
    handleCountChange: function (name, value) {
      this.heirs[name] = value;
      let obj = {};
      obj[name] = value;
      //eslint-disable-next-line
      this.selected = { ...this.selected, ...obj };
      this.selectedHeirs(this.selected);
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
    selectedHeirs: function (heirs) {
      this.results = [];
      console.log(heirs);
      console.log(this.results);
      //eslint-disable-next-line
      this.results = calculate(heirs);
      console.log(this.results);
      this.printResults(this.results);
    },
    printResults: function (results) {
      const fractionToString = (r) => ({ ...r, share: r.share.toFraction() });
      console.log(results.map(fractionToString));
    },
    chooseGender(gender) {
      this.isDisabled = false;
      this.selected = {};
      if (gender == "male") {
        this.spouse = ["wife"];
      } else {
        this.spouse = ["husband"];
      }
    },
    toPercentage: (fr) => {
      return fr.mul(100).valueOf();
    },
  },
  mounted() {
    console.log(this.heirs);
    // function printResults(results) {
    //   const fractionToString = (r) => ({ ...r, share: r.share.toFraction() });
    //   console.log(results.map(fractionToString));
    // }
    // const result = calculate({ wife: 3, son: 4, daughter: 4 });
    // printResults(result);

    // const zip = (a, b) => a.map((e, i) => [e, b[i]]);
    delete this.heirs.husband;
    delete this.heirs.wife;
    this.heirNames = Object.keys(this.heirs);
    // console.log(this.heirNames);
    // this.twoColumnHeirNames = zip(
    //   this.heirNames.slice(0, this.heirNames.length / 2),
    //   this.heirNames.slice(this.heirNames.length / 2)
    // );
  },
};
</script>
