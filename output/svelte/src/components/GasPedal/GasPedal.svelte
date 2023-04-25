<script>
  export let handleB = () => console.log("Deaccelerating");
  export let interval = {
    a: 200,
    b: 100,
  };
  export let handleA = () => console.log("Accelerating");
  export let id = "gasPedal";
  export let img =
    "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg";

  function decelerate() {
    clearInterval(a_timer);
    b_timer = setInterval(handleB, interval.b);
  }
  function accelerate() {
    clearInterval(b_timer);
    a_timer = setInterval(handleA, interval.a);
  }

  let a_timer = null;
  let b_timer = null;
</script>

<div {id}>
  <button
    type="button"
    on:touchstart={(event) => {
      accelerate();
    }}
    on:touchend={(event) => {
      decelerate();
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