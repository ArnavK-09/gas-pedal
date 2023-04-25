<template>
  <div :id="id">
    <button type="button" @touchstart="accelerate()" @touchend="decelerate()">
      <img alt="Gas Pedal" :src="img" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "gas-pedal",

  props: {
    handleB: { default: () => console.log("Deaccelerating") },
    interval: {
      default: {
        a: 200,
        b: 100,
      },
    },
    handleA: { default: () => console.log("Accelerating") },
    id: { default: "gasPedal" },
    img: {
      default:
        "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg",
    },
  },

  data() {
    return { a_timer: null, b_timer: null };
  },

  methods: {
    decelerate() {
      clearInterval(this.a_timer);
      this.b_timer = setInterval(this.handleB, this.interval.b);
    },
    accelerate() {
      clearInterval(this.b_timer);
      this.a_timer = setInterval(this.handleA, this.interval.a);
    },
  },
});
</script>

<style scoped>
#gasPedal {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>