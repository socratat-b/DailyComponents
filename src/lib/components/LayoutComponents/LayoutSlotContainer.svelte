<script>
	import { isOpen } from '$lib/store';

	export let componentName;
</script>

<div class="flex-1 px-8 pt-10 border">
	<div class="flex items-center gap-2 pb-12">
		<button on:click={() => ($isOpen = !$isOpen)}>
			{#if $isOpen}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6 anim"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			{/if}
		</button>
		<h1 class="text-2xl font-bold">{componentName}</h1>
	</div>

	<div class="flex flex-col items-center justify-center h-4/5">
		<slot />
	</div>
</div>
