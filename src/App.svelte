<script>
  import SocialLinks from "./SocialLinks.svelte";
</script>

<main>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/wBTThF_m01g"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  <h2>Multiplayer, Turn-Based, Roguelike, Spellmixing</h2>
  <SocialLinks />
</main>

<style>
  :global(body) {
    background-color: #4a4949;
  }
  main {
    text-align: center;
    padding: 2em;
    max-width: 240px;
    margin: 0 auto;
    border-radius: 7px 7px;
    background-color: #c8a0d7;
  }
</style>
