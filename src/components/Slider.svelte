<script>
  import News from '$components/News.svelte'

  let news = [
    {
      img: 'imgs/img-news-1.png',
      imgAlt: 'sort of company building',
      title: 'Troska organizacji, a wykorzystanie unijnych środków',
      description: 'W ten sposób zakup nowego sprzętu pociąga za sobą proces wdrożenia i unowocześniania obecnej sytuacji. Troska organizacji, a także wykorzystanie unijnych dotacji zabezpiecza udział szerokiej grupie w tym zakresie spełnia istotną rolę w',
    },
    {
      img: 'imgs/img-news-1.png',
      imgAlt: 'sort of company building',
      title: 'Troska organizacji, a wykorzystanie unijnych środków 2',
      description: 'W ten sposób zakup nowego sprzętu pociąga za sobą proces wdrożenia i unowocześniania obecnej sytuacji. Troska organizacji, a także wykorzystanie unijnych dotacji zabezpiecza udział szerokiej grupie w tym zakresie spełnia istotną rolę w',
    },
  ]

  let currentSlide = 0

  let showNextSlide = () => {
    currentSlide = currentSlide >= news.length - 1 ? news.length - 1 : ++currentSlide
    
    console.log(currentSlide)
  }

  let showPrevSlide = () => {
    currentSlide = currentSlide <= 0 ? 0 : --currentSlide
    
    console.log(currentSlide)
  }

</script>

<h5>Aktualności</h5>
<section class="slider">
  <div class="slides" style="transform: translateX({-currentSlide * 100}%);">
    {#each news as neu}
      <div class="slide"><News {...neu}/></div>
    {/each}
  </div>
  <div class="next-prev-controls">
    <span on:click={showPrevSlide}>&lt;</span> &nbsp; 
    <span on:click={showNextSlide}>&gt;</span>
  </div>
</section>

<style>
  h5 {
    padding-top: 3rem;
  }
    .slider {
      width: 100%;
      overflow: hidden;
    }
      .slides {
        min-height: 200px;
        display: flex;
        transition: 1s ease-in-out transform;
      }
        .slide {
          width: 100%;
          flex-shrink: 0;
          padding-right: 3rem;
        }


      .next-prev-controls {
        font-size: 2rem;
        float: right;
        padding: 2rem 0;
        cursor: pointer;
      }
</style>