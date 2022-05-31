<script>
  import Btn from '$components/Btn.svelte'
</script>

<section class="advertisement rim" style="background: url('imgs/img-velano-1.png') no-repeat center center / cover;">
  <h3>Milano</h3>
  <p>Zawsze estetycznie i funkcjonalnie</p>
  <Btn 
    buttonText="przejdź na milano" 
    backgroundColor="var(--color-gold)" 
    textColor="var(--color-mine-shaft)" 
    textTransform="lowercase"
  />
</section>

<style>
  .advertisement {
    width: 100%;
    height: 66vh;
    padding: 3rem;
    margin: 3rem 0;
  }
    p {
      padding: 1rem 0;
    }
</style>