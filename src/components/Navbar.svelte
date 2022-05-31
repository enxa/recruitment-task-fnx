<script>
  import Logo from '$components/Logo.svelte'
  import NavBtn from '$components/NavBtn.svelte'
  import Nav from '$components/Nav.svelte'
</script>

<section class="navbar rim">
  <Logo />
  <Nav />
  <NavBtn />
</section>


<style>
  .navbar {
    display: flex;
    justify-content: space-between;
  }
</style>