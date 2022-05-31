<script>
  import { page } from '$app/stores'
	import '../app.css';
	import Navbar from '$components/Navbar.svelte'
</script>

<header>
	<Navbar />
</header>
{#key $page}
	<main>
		<slot />
	</main>
	{/key}
<footer>

</footer>

<style>
	@media (min-width: 1280px) {
		header, main, footer {
			padding: 0 12rem;
		}
	}
</style>