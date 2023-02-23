<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { fade, slide } from 'svelte/transition';
	import { ConfettiCannon } from 'svelte-canvas-confetti';

	let emotions = ['Very Happy', 'Happy', 'Sad', 'Very Sad'];
	let satisfaction: string | null = null;
	let submitted: boolean = false;

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 500,
				easing: quintOut,
				css: (t) => `transform: ${transform} scale(${t / 2 + 0.5}); opacity: ${t};`
			};
		}
	});
</script>

<main class="min-h-screen flex flex-col">
	<section class="flex flex-row justify-between items-center bg-accent p-6 md:p-16 shadow-2xl">
		<div>
			<h1 class="text-white text-3xl md:text-6xl">Tell us your experience of the lab</h1>
			<p class="text-white opacity-50 mt-4 max-w-2xl">
				Thanks for taking the time to provide feedback for the COREF lab. Your input is so important
				and appreciated because it helps us make the lab even better. Your thoughts and opinions
				help us see what we're doing right and where we can improve, so we can make sure the lab is
				meeting your needs and expectations.
			</p>
		</div>
		<button
			class="flex flex-row items-center py-2 px-6 opacity-50 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"
			on:click={() => {
				window.alert('Remember to log out once finshed')
				window.open(
					'https://app.herotofu.com/forms/2aedf4a0-a7cf-11ed-a31e-753411848f80/submissions',
					'Feedback Results',
					'width=1000,height=800'
				);
			}}
		>
			<svg
				class="h-4 translate-y-[-0.1rem]"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24px"
				height="24px"
				fill="#fff"
			>
				<path
					d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"
				/></svg
			>
			<p>Results</p>
		</button>
	</section>
	{#if !submitted}
		<iframe title="dummyframe" name="dummyframe" id="dummyframe" class="hidden" />
		<form
			class="min-h-full h-full flex-grow flex flex-col justify-center relative"
			target="dummyframe"
			action="https://public.herotofu.com/v1/2aedf4a0-a7cf-11ed-a31e-753411848f80"
			method="post"
			on:submit={() => (submitted = true)}
		>
			{#each emotions as emotion}
				<input
					class="hidden"
					type="radio"
					name="satisfaction"
					value={emotion}
					checked={satisfaction == emotion}
				/>
			{/each}
			{#if satisfaction == null}
				<div class="flex-grow" />
				<section
					class="absolute left-1/2 -translate-x-1/2 top-20 py-5 flex flex-row justify-center items-center gap-5 md:gap-10"
				>
					{#each emotions as emotion (emotion)}
						<img
							on:click={() => (satisfaction = emotion)}
							in:receive={{ key: emotion }}
							out:send={{ key: emotion }}
							animate:flip
							class="w-14 h-14 sm:w-28 sm:h-28 md:w-40 md:h-40 transition-transform hover:scale-110 cursor-pointer"
							src={`/images/faces/${emotion.toLowerCase().replace(' ', '')}.png`}
							alt={emotion}
						/>
					{/each}
				</section>
			{/if}
			{#if satisfaction != null}
				<section transition:fade class="flex flex-row gap-12 p-6 md:p-16">
					{#each [satisfaction] as emotion (emotion)}
						<img
							on:click={() => (satisfaction = null)}
							in:receive={{ key: satisfaction }}
							out:send={{ key: satisfaction }}
							class="mx-auto mb-12 w-20 h-20  md:w-40 md:h-40 transition-transform hover:scale-110 cursor-pointer"
							src={`/images/faces/${satisfaction.toLowerCase().replace(' ', '')}.png`}
							alt={satisfaction}
						/>
					{/each}
					<div class="flex flex-col flex-grow">
						<p class="font-medium text-lg md:text-2xl mb-4">Where are you?</p>
						<div class="">
							<input type="radio" name="where" id="crawley" value="Crawley" required />
							<label class="text-lg" for="crawley"> Crawley </label>
							<br />
							<input type="radio" name="where" id="belfast" value="Belfast" required />
							<label class="text-lg" for="belfast"> Belfast </label>
						</div>
						<label class="font-medium text-lg md:text-2xl mb-4 mt-8" for="negatives">
							What could we have improved?
						</label>
						<textarea
							class="rounded-md border border-accent shadow-md p-4"
							id="negatives"
							name="negatives"
							rows="4"
							placeholder="I couldn't figure out... this would be better if..."
						/>
						<label class="font-medium text-lg md:text-2xl mb-4 mt-12" for="positives">
							What did you enjoy?
						</label>
						<textarea
							class="rounded-md border border-accent shadow-md p-4"
							id="positives"
							name="positives"
							rows="4"
							placeholder="The collaboratives spaces really helped..."
						/>
						<div
							class="w-full fixed bottom-0 left-0 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between gap-4 z-10 backdrop-blur-sm"
						>
							<button
								class="py-3 px-12 bg-accent text-white font-semibold rounded-lg shadow-md"
								type="submit"
								value="Submit">Skip</button
							>
							<button
								class="py-3 px-12 bg-accent text-white font-semibold rounded-lg shadow-md"
								type="submit"
								value="Submit">Complete</button
							>
						</div>
					</div>
				</section>
			{/if}

			{#if satisfaction != null}
				<a transition:fade class="relative mx-auto" href="/">
					<img src="/images/simple-logo.svg" alt="COREF logo" />
				</a>
				<div class="mb-36" />
			{:else}
				<a transition:fade class="relative mx-auto" href="/">
					<img src="/images/simple-logo.svg" alt="COREF logo" />
				</a>
			{/if}
		</form>
	{:else}
		<section
			in:slide={{ duration: 1000 }}
			class="absolute top-0 left-0 h-screen w-full bg-accent flex flex-col justify-center items-center"
		>
			<h1 class="text-white text-3xl md:text-6xl mb-4">Thank you</h1>
			<h2 class="text-white text-2xl md:text-5xl opacity-50 mb-12">
				Your response has been submitted
			</h2>
			<a href="/">
				<button
					class="py-2 px-12 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"
					type="button">Home</button
				>
			</a>
		</section>
		<ConfettiCannon
			particleCount={100}
			angle={-60}
			force={30}
			spread={20}
			origin={[0, window.innerHeight]}
		/>
		<ConfettiCannon
			particleCount={100}
			angle={-120}
			force={30}
			spread={20}
			origin={[window.innerWidth, window.innerHeight]}
		/>
	{/if}
</main>
