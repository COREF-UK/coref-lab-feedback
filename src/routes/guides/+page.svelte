<script lang="ts">
	import axios from 'axios';
	import SvelteMarkdown from 'svelte-markdown';

	interface Guide {
		url: string;
		title: string;
		description: string;
	}

	// Add url of files for guide (.md and .pdf are supported)
	const guides: Guide[] = [
		{
			url: '/guides/displays.md',
			title: 'Displays in the Lab',
			description: 'Learn how to mirror your laptop, change inputs and reset displays once finished'
		},
		{
			url: '/guides/vis-suite/vis-suite.md',
			title: 'Using the Visualisation Suite',
			description: 'How to use the suite and its associated visualistation tools'
		},
		{
			url: 'https://code.kx.com/insights/1.2/platform/index.html',
			title: 'KX Insights Platform',
			description: 'Learn how to use the KX Insights platform to ingest, query, analyse and visualise data'
		},
	];

	let currentGuide: Guide | null = null;
	let markdownContent: string = '';

	function changeGuide(guide: Guide | null) {
		currentGuide = guide;
		markdownContent = '';

		if (guide?.url.split('.').at(-1) == 'md') {
			axios.get(guide.url).then((r) => (markdownContent = r.data));
		}
	}
</script>

<main class="min-h-screen flex flex-col">
	<section
		class="sticky top-0 bg-accent p-6 md:p-16 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-4"
	>
		<h1 class="text-white text-3xl md:text-6xl">Guides: COREF Digital Lab</h1>
		{#if !currentGuide}
			<a href="/">
				<button
					class="py-2 px-12 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"
					type="button">Home</button
				>
			</a>
		{:else}
			<button
				on:click={() => changeGuide(null)}
				class="py-2 px-12 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"
				type="button">Back</button
			>
		{/if}
	</section>
	{#if !currentGuide}
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 md:p-16">
			{#each guides as guide}
				<button
					on:click={() => changeGuide(guide)}
					class="bg-slate-200 shadow-lg rounded-lg p-6 text-left transition-transform hover:scale-105 flex flex-col justify-between"
				>
					<div>
						<h2 class="font-bold text-xl md:text-2xl mb-1">{guide.title}</h2>
						<p>{guide.description}</p>
					</div>
					<div class="font-semibold self-end mt-8">READ</div>
				</button>
			{/each}
		</section>
	{:else if currentGuide.url.split('.').at(-1) == 'pdf'}
		<iframe class="flex-grow" title="pdf" src={`${currentGuide.url}#toolbar=0`} frameborder="0" />
	{:else if currentGuide.url.split('.').at(-1) == 'md'}
		<section class="p-6 md:p-16 prose lg:prose-lg max-w-5xl font-sans">
			<SvelteMarkdown source={markdownContent} />
		</section>
	{:else}
		<iframe class="flex-grow" title="Webpage" src={`${currentGuide.url}`} frameborder="0" />
	{/if}
</main>
