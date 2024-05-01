<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<main class="min-h-screen flex flex-col">
	<section
		class="sticky top-0 bg-accent p-4 md:p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4"
	>
		<h1 class="text-white text-xl md:text-3xl">Guides: COREF Digital Lab</h1>
		{#if $page.url.pathname == '/guides' || $page.url.pathname == '/guides/5S-lab'}
			<a href="/">
				<button
					class="py-2 px-12 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"
					type="button">Home</button
				>
			</a>
		{:else}
			<a href="/guides">
				<button
					class="py-2 px-12 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"
					type="button">Back</button
				>
			</a>
		{/if}
	</section>
	<slot class="flex-grow" />
</main>
