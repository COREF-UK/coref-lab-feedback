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
	<section class="bg-accent p-6 md:p-16 shadow-2xl">
		<h1 class="text-white text-3xl md:text-6xl">Tell us your experience of the lab</h1>
		<p class="text-white opacity-50 mt-4 max-w-2xl">
			Thanks for taking the time to provide feedback for the COREF lab. Your input is so important
			and appreciated because it helps us make the lab even better. Your thoughts and opinions help
			us see what we're doing right and where we can improve, so we can make sure the lab is meeting
			your needs and expectations.
		</p>
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
							<input type="radio" name="where" id="crawley" value="Crawley" required>
							<label class="text-lg" for="crawley">
								Crawley
							</label>
							<br>
							<input type="radio" name="where" id="belfast" value="Belfast" required>
							<label class="text-lg" for="belfast">
								Belfast
							</label>
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
