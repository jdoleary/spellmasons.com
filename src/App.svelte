<script>
  import SocialLinks from "./SocialLinks.svelte";
  import TwitterTimeline from "./TwitterTimelineEmbed.svelte";
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
  <h1>Spellmasons</h1>
  <h2>Multiplayer, Turn-Based, Spell-Mixing Game</h2>
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
    background-color: #fefefe;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    border-radius: 7px 7px;
    background-color: #fafafa;
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
