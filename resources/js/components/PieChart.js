import { Pie, mixins } from "vue-chartjs";
export default {
  extends: Pie,
  mixins: [mixins.reactiveProp],
  props: ["chartData", "options"],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
};
