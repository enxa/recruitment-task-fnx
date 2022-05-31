<script>
  import { fade, slide } from 'svelte/transition'

  let brandsShow = false
  let langsShow = false
</script>

<section class="nav" transition:fade>
  <nav>
    <div>
      <a href="#poznaj-nas">Poznaj nas</a>
    </div>
    <div>
      <a href="#nasze-marki" on:click|preventDefault={() => brandsShow = !brandsShow}>Nasze marki</a>
        {#if brandsShow}
          <ul transition:slide>
            <li>
              <a href="#marka-1" on:click={() => brandsShow = !brandsShow}>Marka 1</a>
            </li>
            <li>
              <a href="#marka-2" on:click={() => brandsShow = !brandsShow}>Marka 2</a>
            </li>
            <li>
              <a href="#marka-3" on:click={() => brandsShow = !brandsShow}>Marka 3</a>
            </li>
            <li>
              <a href="#marka-4" on:click={() => brandsShow = !brandsShow}>Marka 4</a>
            </li>
          </ul>
        {/if}
    </div>
    <div>
      <a href="#dla-partnerow">Dla partnerów</a>
    </div>
    <div>
      <a href="#kontakt">Kontakt</a>
    </div>
  </nav>

  <nav>
    <div class="lang">
      <a href="#pol" on:click|preventDefault={() => langsShow = !langsShow}>POL ▼</a>
        {#if langsShow}
          <ul transition:slide>
            <li>
              <a href="#eng">ENG</a>
            </li>
            <li>
              <a href="#nor">NOR</a>
            </li>
          </ul>
        {/if}
    </div>
  </nav>
  
  <nav>
    <a href="#logout">
      <img src="imgs/icon-exit.png" alt="ikona wylogowania">
    </a>
  </nav>
</section>

<style>
  .nav {
    display: none;
  }
    .nav nav {
      display: flex;
    }
      .nav div a {
        color: #fff;
        font-size: 1.4rem;
        line-height: 3;
        font-weight: 700;
        text-transform: uppercase;
        padding: .6rem 4vw;
        display: block;
        background: var(--color-mine-shaft);
      }
      .nav nav div a:hover {
        background: #3F3F3F;
      }
      .nav nav > div:first-child a {
        border-top-left-radius: 1rem 1rem;
        border-bottom-left-radius: 1rem 1rem;
      }
      .nav nav > div:last-child a {
        border-top-right-radius: 1rem 1rem;
        border-bottom-right-radius: 1rem 1rem;
      }
    
      .nav .lang a {
        padding: .6rem;
        margin: .2rem 1rem .2rem 5rem;
        text-align: center;
        background: #7F7F7F;
      }
      .nav .lang > a {
        border-radius: 1rem;
      }

      .nav img {
        height: 3rem;
        margin: 1.4rem 0;
      }

  @media (min-width: 1440px) {
    .nav {
      display: flex;
    }
  }
</style>