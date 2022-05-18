<script>
  import InstagramLogo from "./InstagramLogo.svelte";
  import TwitchTvLogo from "./TwitchTVLogo.svelte";
  import YoutubeLink from "./YoutubeLink.svelte";
</script>

<div id="links">
  <InstagramLogo />
  <a
    href="https://twitter.com/spellmasons?ref_src=twsrc%5Etfw"
    class="twitter-follow-button"
    data-show-count="false">Follow @spellmasons</a
  ><script
    async
    src="https://platform.twitter.com/widgets.js"
    charset="utf-8"></script>
  <TwitchTvLogo />
  <!-- <YoutubeLink /> -->
</div>

<style>
  #links {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
  #links > * {
    margin: 8px;
  }
</style>
