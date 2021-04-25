<script>
  import SocialLinks from "./SocialLinks.svelte";
</script>

<main>
  <h1>Spellmason</h1>
  <p>
    A multiplayer, strategy card game that lets you combine small spells into
    larger, epic spells to decimate your enemies
  </p>
  <p>
    You play a Spellmason, who hasn't finished wizard school yet, and so must
    make up their own spells!
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
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #3858c0;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
