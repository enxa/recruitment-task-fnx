<script>
  import { showNav } from '../app.js' 
</script>

<section class="navbtn" on:click={() => $showNav = !$showNav}>
  <a href={$showNav ? 'nav' : '/'}>
    <button class={$showNav ? 'active' : ''}></button>
  </a>
</section>

<style>
  .navbtn {
    z-index: 100;
    cursor: pointer;
  }
  @media (min-width: 960px) {
    .navbtn {
      display: none;
    }
  }
    .navbtn a {
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
      .navbtn button {
        width: 100%;
        height: 1px;
        background: var(--color-mine-shaft);
        position: relative;
        transition: .4s all;
      }
      .navbtn button::before {
        content: '';
        width: 100%;
        height: 1px;
        background: var(--color-mine-shaft);
        position: absolute;
        top: -1rem;
        left: 0;
        transition: .4s all;
      }
      .navbtn button::after {
        content: '';
        width: 100%;
        height: 1px;
        background: var(--color-mine-shaft);
        position: absolute;
        top: 1rem;
        left: 0;
        transition: .4s all;
      }

      .navbtn button.active {
        background: transparent;
        transform-origin: 50% 50%;
      }
      .navbtn button.active::before {
        top: 0;
        left: 0;
        transform: rotate(135deg);
        transform-origin: 50% 50%;
      }
      .navbtn button.active::after {
        top: 0;
        left: 0;
        transform: rotate(45deg);
        transform-origin: 50% 50%;
      }
</style>