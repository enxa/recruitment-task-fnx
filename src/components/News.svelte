<script>
  export let img = ""
  export let imgAlt = ""
  export let title = ""
  export let description = ""
</script>

<section class="news">
  <div class="slide">
    <img src={img} alt={imgAlt}>
    <article>
      <h6>{title}</h6>
      <p>{description} <img src="/imgs/icon-arrow-right.png" alt=""></p>
    </article>
  </div>
</section>

<style>
  .news {
    padding: 3rem 0;
  }
    .news div img {
      width: 100%;
      max-width: 640px;
    }
      .news article h6 {
        text-transform: uppercase;
        padding: 1rem 0;
      }
        .news article p img {
          height: 1.2rem;
          width: auto;
        }

  @media (min-width: 1280px) {
    .news .slide {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 3rem;
      align-items: center;
    }
      .news div img {
        grid-column: 1/4;
      }
      .news div article {
        grid-column: 4/8;
      }
  }
  
</style>