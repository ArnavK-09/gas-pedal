<script>
  // import component
  import GasPedal from "../../../../output/svelte/src/components/GasPedal/GasPedal.svelte";
  let i = 0;
</script>

<section>
  <button on:click={() => alert("Speed is, ", i)}> Speed: {i}km/h</button>
  <GasPedal
    css={{ width: "10px", height: "10px" }}
    img="https://i.ibb.co/brMXQMb/download-removebg-preview.png"
    interval={{ a: 50, b: 100 }}
    handleA={() => i++}
    handleB={() => {
      if (i > 0) {
        i--;
      }
    }}
  />
</section>
