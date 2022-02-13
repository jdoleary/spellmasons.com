<script>
  import SocialLinks from "./SocialLinks.svelte";
</script>

<main>
  <h1>Spellmasons</h1>
  <h2>A game where you can make up new spells with your friends</h2>
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
  <SocialLinks />
  <p>Spellmasons is currently in active development and is coming soon!</p>
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
