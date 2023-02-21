<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import PageTransition from '../components/PageTransition.svelte';
	export let url: string;
	import '../app.css';
	import { onMount } from 'svelte';

	onMount(() => {
		inactivityTime();
	})

	
	function inactivityTime() {
		let time: NodeJS.Timeout;

		window.onload = resetTimer;
		// DOM Events
		document.onmousemove = resetTimer;
		document.onkeydown = resetTimer;
		document.ontouchstart = resetTimer;

		function resetTimer() {
			clearTimeout(time);
			time = setTimeout(() => goto('/'), 180000);
		}
	};
</script>

<PageTransition {url}>
	<!-- <p>{time}</p> -->
	<slot />
</PageTransition>
