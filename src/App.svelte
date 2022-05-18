<script>
  import SocialLinks from "./SocialLinks.svelte";
  import TwitterTimeline from "./TwitterTimelineEmbed.svelte";
</script>

<main>
  <img id="logo" src="spellmasons-logo.png" alt="Spellmasons Logo" />
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/wBTThF_m01g"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
  <h2>Multiplayer, Turn-Based, Roguelike, Spellmixing Game</h2>
  <SocialLinks />
  <p>
    🎨💸 Looking for an artist to hire for paid work (DM or email me if
    interested - @spellmasons / spellmasons@gmail.com)
  </p>
  <p>
    A multiplayer, tactical turn-based wizarding game where you use spell
    ingredients to create epic spells to decimate your enemies!
  </p>
  <p>
    You play a Spellmason: a craftsman of magic, a alchemist of the elements, a
    conjurer of enchantments
  </p>
  <p>
    Say that you're surrounded, the enemies are closing in. You cast "swap" to
    change places with one on the outside. Then you cast "Area of Effect",
    "Damage", and "Resurrect", killing all the enemies who surrounded you a
    moment before and resurrecting them to join your faction. Now the tables
    have turned and your small army will charge into battle against the
    now-fearful scraps of the enemy horde.
  </p>
  <p>Spellmasons is currently in active development and is coming soon!</p>
  <TwitterTimeline />
</main>

<style>
  :global(body) {
    background-color: #4a4949;
  }
  #logo {
    max-width: 100%;
    padding: 8px;
  }
  main {
    text-align: center;
    padding: 2em;
    max-width: 240px;
    margin: 0 auto;
    border-radius: 7px 7px;
    background-color: #c8a0d7;
  }
  p {
    text-align: left;
  }

  h1 {
    color: #3858c0;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: 720px;
    }
  }
</style>
