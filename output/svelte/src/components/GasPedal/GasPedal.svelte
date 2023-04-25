<script>
  export let id = "gasPedal";
  export let img =
    "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg";
</script>

<div {id}>
  <button
    type="button"
    on:touchstart={(event) => {
      accelerate;
    }}
    on:touchend={(event) => {
      decelerate;
    }}
  >
    <img alt="Gas Pedal" src={img} />
  </button>
</div>

<style>
  #gasPedal {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>