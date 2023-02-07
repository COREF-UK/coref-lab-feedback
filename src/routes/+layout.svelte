<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script>
	import PageTransition from '../components/PageTransition.svelte';
	/** @type {string} */
	export let url;
	import '../app.css';
</script>

<PageTransition {url}>
	<slot />
</PageTransition>
