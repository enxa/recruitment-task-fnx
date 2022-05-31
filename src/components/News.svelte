<section class="news">
  <h5>Aktualności</h5>
  <div class="slide">
    <img src="imgs/img-news-1.png" alt="sort of company building">
    <article>
      <h6>Troska organizacji, a wykorzystanie unijnych środków</h6>
      <p>W ten sposób zakup nowego sprzętu pociąga za sobą proces wdrożenia i unowocześniania obecnej sytuacji. Troska organizacji, a także wykorzystanie unijnych dotacji zabezpiecza udział szerokiej grupie w tym zakresie spełnia istotną rolę w <img src="/imgs/icon-arrow-right.png" alt=""></p>
    </article>
  </div>
  <div class="next-prev-controls">
    <span>&lt;</span> &nbsp; <span>&gt;</span>
  </div>
</section>

<style>
  .news {
    padding: 3rem 0;
  }
    .news h5 {
      padding-bottom: 3rem;
      text-transform: uppercase;
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

    .news .next-prev-controls {
      font-size: 2rem;
      float: right;
      padding: 2rem 0;
      cursor: pointer;
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