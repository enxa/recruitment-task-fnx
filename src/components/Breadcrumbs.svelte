<script>
  export let breadcrumbs = ''

  $: { breadcrumbs = breadcrumbs.split('|') }
</script>

<section class="breadcrumbs">
  {#each breadcrumbs as breadcrumb, i}
    <h3><a href={'#' + breadcrumbs[i].toLowerCase}>{breadcrumbs[i]}</a></h3>
  {/each}
</section>

<style>
  .breadcrumbs {
    display: flex;
  }
    .breadcrumbs h3 {
      padding: 0rem 5rem;
    }
    .breadcrumbs h3:first-child {
      background: var(--color-concrete);
      border: 1px solid var(--color-mine-shaft);
      font-size: 1.3rem;
      line-height: 2.4;
      font-weight: 300;
      letter-spacing: .15rem;
      position: relative;
      display: flex;
      align-items: center;
      text-transform: uppercase;
    }
    .breadcrumbs h3:first-child::before {
      content: '';
      position: absolute;
      left: calc(100% - 1.5rem);
      top: .6rem;
      width: 3.3rem;
      height: 3.3rem;
      background: red;
      transform: rotate(45deg);
      background: var(--color-concrete);
      border-top: 1px solid var(--color-mine-shaft);
      border-right: 1px solid var(--color-mine-shaft);
    }
      .breadcrumbs h3 a {
        color: var(--color-mine-shaft);
      }
</style>