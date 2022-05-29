<script>
  import { fade, slide } from 'svelte/transition'

  let showBrands = false
</script>

<section class="nav" transition:fade>
  <div>
    <a href="poznaj-nas">Poznaj nas</a>
  </div>
  <div>
    <a href="#nasze-marki" on:click|preventDefault={() => showBrands = !showBrands}>Nasze marki</a>
      {#if showBrands}
        <ul transition:slide>
          <li>
            <a href="marka-1">Marka 1</a>
          </li>
          <li>
            <a href="marka-2">Marka 2</a>
          </li>
          <li>
            <a href="marka-3">Marka 3</a>
          </li>
          <li>
            <a href="marka-4">Marka 4</a>
          </li>
        </ul>
      {/if}
  </div>
  <div>
    <a href="dla-partnerow">Dla partnerów</a>
  </div>
  <div>
    <a href="kontakt">Kontakt</a>
  </div>
</section>

<style>
  .nav {
    display: none;
  }
  @media (min-width: 960px) {
    .nav {
      display: flex;
    }
  }
    .nav div {
      position: relative;
    }
      .nav a {
        color: #fff;
        font-size: 1.4rem;
        line-height: 3;
        font-weight: 700;
        text-transform: uppercase;
        padding: 1.2rem 4vw;
        display: block;
        background: var(--color-mine-shaft);
      }
      .nav a:hover {
        background: #3F3F3F;
      }
      .nav > div:first-child a {
        border-top-left-radius: 1rem 1rem;
        border-bottom-left-radius: 1rem 1rem;
      }
      .nav > div:last-child a {
        border-top-right-radius: 1rem 1rem;
        border-bottom-right-radius: 1rem 1rem;
      }
</style>