<script>
  import Advertisement from '$components/Advertisement.svelte'
  import News from '$components/News.svelte'
  import Form from '$components/Form.svelte'
</script>

<section class="content">
  <article>
    <News />
    <Form />
  </article>
  <aside>
    <Advertisement />
  </aside>
</section>

<style>
  @media (min-width: 640px) {
    .content {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 3rem;
    }
      article {
        grid-column: 1/7;
      }
      aside {
        grid-column: 8/13;
      }
  }
  @media (min-width: 1280px) {
    .content {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 3rem;
    }
      article {
        grid-column: 1/9;
      }
      aside {
        grid-column: 10/13;
      }
  }
</style>