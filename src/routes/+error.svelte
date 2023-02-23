<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() =>
		setTimeout(() => {
			goto('/');
		}, 2000)
	);
</script>

<h1 class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
	{$page.status}: {$page?.error?.message}
</h1>
