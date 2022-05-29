<script context="module">
	import Navbar from '$components/Navbar.svelte'
	import Breadcrumbs from '$components/Breadcrumbs.svelte'
	import Content from '$components/Content.svelte'

	export const prerender = true;
</script>

<svelte:head>
	<title>Poxam</title>
</svelte:head>

<section class="home rim">
	<Navbar />
	<Breadcrumbs />
	<Content />
</section>