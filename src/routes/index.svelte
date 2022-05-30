<script context="module">
	import Breadcrumbs from '$components/Breadcrumbs.svelte'
	import Content from '$components/Content.svelte'

	export const prerender = true;
</script>

<svelte:head>
	<title>Poxam</title>
</svelte:head>

<section class="home">
	<Breadcrumbs />
	<Content />
</section>