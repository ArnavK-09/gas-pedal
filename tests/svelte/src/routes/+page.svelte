<script>
  // import component
  import GasPedal from "../../../../output/svelte/src/components/GasPedal/GasPedal.svelte";
  let i = 0

</script>

<section>
 <button on:click={() => alert("yeah")}> Speed: {i}km/h</button>
  <GasPedal handleA={() => i++} handleB={() => i--} />
</section>
