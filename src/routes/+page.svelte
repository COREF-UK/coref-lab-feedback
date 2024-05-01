<video autoplay muted loop class="fixed right-0 bottom-0 min-w-full min-h-full object-cover -z-10">
	<source src="videos/coref-background.mp4" type="video/mp4" />
</video>
<main class="h-screen">
	<img class="block w-2/5 mx-auto pt-10" src="/images/logo.svg" alt="COREF Logo" />
	<div class="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full ">
		<a class="m-4" href="/feedback">
			<section
				class="h-full p-10 rounded-2xl backdrop-blur-lg flex flex-col items-center border-2 border-accent"
			>
				<h1 class="text-white text-center">Provide Feedback</h1>
				<p class="text-white text-center mt-2 mb-10 opacity-50">
					Your thoughts and opinions help us see what we're doing right and where we can improve, so
					we can make sure the lab is meeting your needs and expectations.
				</p>
				<img class="opacity-60 w-2/3" src="/images/feedback.png" alt="Feedback faces" />
			</section>
		</a>
		<a class="m-4" href="/guides">
			<section
				class="h-full p-10 rounded-2xl backdrop-blur-lg flex flex-col items-center border-2 border-accent"
			>
				<h1 class="text-white text-center">Explore User Guides</h1>
				<p class="text-white text-center mt-2 mb-10 opacity-50">
					Need help? Stuck on how to figure something out? Find out how to use the COREF lab space
					with these helpful guides
				</p>
				<img
					class="fill-accent opacity-70 w-2/3 px-[25%]"
					src="/images/guide.svg"
					alt="Guide document"
				/>
			</section>
		</a>
		<a class="m-4" href="/#">
			<section
				class="h-full p-10 rounded-2xl backdrop-blur-lg flex flex-col items-center border-2 border-accent"
			>
				<h1 class="text-white text-center">External Links</h1>
				<p class="text-white text-center mt-2 mb-10 opacity-50">
					Explore more about COREF and our partners through our homepage and how to exploit technologies through COREF Kits
				</p>
				<div class="flex flex-row justify-center items-center w-full">
					<button
						class="flex flex-row items-center justify-center m-4 h-10 w-32 bg-[#2f3541] text-white font-semibold rounded-lg"
						on:click={() => window.open('https://coref.co.uk', 'COREF', 'width=1000,height=800')}
					>
						<img class="h-6 translate-y-[0.1rem]" src="/images/simple-logo.svg" alt="COREF logo" />
						<svg
							class="h-3 translate-y-[-1px] ml-2"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="#999da4"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
							/></svg
						></button
					>
					<button
						class="flex flex-row items-center justify-center m-4 h-10 w-32 bg-[#2f3541] text-white font-semibold rounded-lg"
						on:click={() =>
							window.open('https://kits.coref.dev', 'COREF Kits', 'width=1000,height=800')}
					>
						<img
							class="w-10 saturate-200 brightness-200 grayscale opacity-50"
							src="https://kits.coref.dev/kits.svg"
							alt="COREF logo"
						/><svg
							class="h-3 translate-y-[-1px] ml-3"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="#999da4"
							><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
								d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
							/></svg
						></button
					>
				</div>
			</section>
		</a>
	</div>
	<a
		class="fixed bottom-0 left-0 flex flex-row items-center justify-center m-4 h-10 w-36 bg-[#2f3541] border border-slate-300 text-white font-semibold rounded-lg"
		href="/guides/5S-lab"
	>
		<p class="text-white text-center opacity-50">5S Standard</p>
		<svg
			class="h-4 translate-y-[-2px] ml-3"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="#999da4"
			><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
			/></svg
		>
	</a>
</main>
