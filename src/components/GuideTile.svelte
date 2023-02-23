<script lang="ts">
	import type { Guide } from '../routes/guides/+layout';

	export let guide: Guide;
	export let changeGuide: Function;
</script>

<button
	type="button"
	on:click={() => changeGuide(guide)}
	class="bg-slate-200 shadow-lg rounded-lg p-6 text-left transition-transform hover:scale-105 flex
	flex-col justify-between"
>
	<div>
		<h2 class="font-bold text-xl md:text-2xl mb-1">{guide.title}</h2>
		<p>{guide.description}</p>
	</div>
	<div class="font-semibold self-end mt-8">{guide.children ? "FOLDER" : "READ"}</div>
</button>
