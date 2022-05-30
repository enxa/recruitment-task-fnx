<script>
	import { slide } from 'svelte/transition'
  import { page } from '$app/stores'
	import '../app.css';
	import Navbar from '$components/Navbar.svelte'
</script>

<header>
	<Navbar />
</header>
{#key $page}
	<main transition:slide>
		<slot />
	</main>
	{/key}
<footer>

</footer>