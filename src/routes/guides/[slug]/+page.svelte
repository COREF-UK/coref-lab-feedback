<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import axios from 'axios';
	import SvelteMarkdown from 'svelte-markdown';
	import type { Guide } from '../+layout';

	export let data: PageData;
	let markdownContent: string = '';

	function findGuide(guideList: Guide[], path: string): Guide | null {
		for (let guide of guideList) {
			if (guide.path == path) return guide;
			if (guide.children) {
				let search = findGuide(guide.children, path);
                if (search) return search
			}
		}
        return null;
	}

	$: guide = findGuide(data.guides, $page.params.slug)

	onMount(() => {
		if (guide?.url?.split('.').at(-1) == 'md') {
			axios.get(guide.url).then((r) => (markdownContent = r.data));
		}
	});
</script>

{#if guide != null}
	{#if guide.url?.split('.').at(-1) == 'pdf'}
		<iframe class="flex-grow" title="pdf" src={`${guide.url}#toolbar=0`} frameborder="0" />
	{:else if guide.url?.split('.').at(-1) == 'md'}
		<section class="p-6 md:p-16 prose lg:prose-lg max-w-5xl prose-img:max-h-[50vh] prose-img:rounded-md">
			<SvelteMarkdown source={markdownContent} />
		</section>
	{:else}
		<iframe class="flex-grow" title="Webpage" src={`${guide.url}`} frameborder="0" />
	{/if}
{:else}
	<h1>Can't find Guide</h1>
{/if}