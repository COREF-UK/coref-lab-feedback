<script lang="ts">
	import GuideTile from '../../components/GuideTile.svelte';
	import type { Guide } from './+layout';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;

	let folder: Guide[] | null = null;

	function changeGuide(guide: Guide) {
		if (guide.children) {
			folder = guide?.children ?? null;
		} else {
			goto(`/guides/${guide.path}`);
		}
	}
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-16">
	{#if folder}
		<button
			type="button"
			on:click={() => (folder = null)}
			class="bg-accent text-white shadow-lg rounded-lg p-6 text-left transition-transform hover:scale-105 flex
	flex-col justify-center items-center"
		>
			<div>
				<h2 class="font-bold text-xl md:text-2xl mb-1">All Guides</h2>
			</div>
		</button>
		{#each folder as guide}
			<GuideTile {guide} {changeGuide} />
		{/each}
	{:else}
		{#each data.guides as guide}
			<GuideTile {guide} {changeGuide} />
		{/each}
	{/if}
</section>
