<script>
	import { slide } from 'svelte/transition'
  import { page } from '$app/stores'
	import '../app.css';
	import Navbar from '$components/Navbar.svelte'
</script>

<header class="rim">
	<Navbar />
</header>
{#key $page}
	<main class="rim" transition:slide>
		<slot />
	</main>
	{/key}
<footer class="rim" >

</footer>