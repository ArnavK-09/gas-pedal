<template>
  <div :id="id">
    <button type="button" @touchstart="accelerate" @touchend="decelerate">
      <img alt="Gas Pedal" :src="img" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "gas-pedal",

  props: {
    id: { default: "gasPedal" },
    img: {
      default:
        "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg",
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