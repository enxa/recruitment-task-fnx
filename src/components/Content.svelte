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