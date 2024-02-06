<video autoplay muted loop class="fixed right-0 bottom-0 min-w-full min-h-full object-cover -z-10">
	<source src="videos/coref-background.mp4" type="video/mp4" />
</video>
<main class="h-screen">
	<img class="block w-2/5 mx-auto pt-10" src="/images/logo.svg" alt="COREF Logo" />
	<div class="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-full ">
		<a class="m-10" href="/feedback">
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
		<a class="m-10" href="/guides">
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
	</div>
	<button
		class="fixed bottom-0 left-0 flex flex-row items-center m-4 pt-1 px-8 bg-[#2f3541] border border-slate-300 text-white font-semibold rounded-lg"
		on:click={() => window.open('https://kits.coref.dev', 'COREF Kits', 'width=1000,height=800')}
	>
		<img class="w-12 mt-1 mb-2 saturate-200 brightness-200 grayscale opacity-50" src="https://kits.coref.dev/kits.svg" alt="COREF logo" />
		<svg
			class="h-4 translate-y-[-2px] ml-3"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="#999da4"
			><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
			/></svg
		>
		<!-- <p class="text-xs opacity-50 ml-3 leading-2 -translate-y-[2px]">SITE</p> -->
	</button>
	<button
		class="fixed bottom-0 right-0 flex flex-row items-center m-4 pt-1 px-8 bg-[#2f3541] border border-slate-300 text-white font-semibold rounded-lg"
		on:click={() => window.open('https://coref-uk.com', 'COREF Site', 'width=1000,height=800')}
	>
		<img class="w-20 " src="/images/simple-logo.svg" alt="COREF logo" />
		<svg
			class="h-4 translate-y-[-2px] ml-3"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			fill="#999da4"
			><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
				d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
			/></svg
		>
		<!-- <p class="text-xs opacity-50 ml-3 leading-2 -translate-y-[2px]">SITE</p> -->
	</button>
</main>
