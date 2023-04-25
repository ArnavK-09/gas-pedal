<script>
  export let handleB = () => console.log("Deaccelerating");
  export let interval = {
    a: 200,
    b: 100,
  };
  export let handleA = () => console.log("Accelerating");
  export let id = "gasPedal";
  export let css = "";
  export let img =
    "https://png.pngtree.com/png-vector/20190625/ourmid/pngtree-car-pedals-png-image_1511732.jpg";

  function mitosis_styling(node, vars) {
    Object.entries(vars || {}).forEach(([p, v]) => {
      if (p.startsWith("--")) {
        node.style.setProperty(p, v);
      } else {
        node.style[p] = v;
      }
    });
  }

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

<button
  use:mitosis_styling={css}
  type="button"
  {id}
  on:touchstart={(event) => {
    accelerate();
  }}
  on:touchend={(event) => {
    decelerate();
  }}
>
  <img alt="Gas Pedal" src={img} />
</button>

<style>
  #gasPedal {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: none;
    color: inherit;
    cursor: pointer;
    font: inherit;
    padding: 0;
    text-align: inherit;
    text-decoration: none;
  }
</style>