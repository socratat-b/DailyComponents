<script>
	import { isOpen } from '$lib/utils/store';
	import { slide } from 'svelte/transition';
</script>

<div
	transition:slide={{ axis: 'x', duration: 500 }}
	class="flex flex-col w-1/5 gap-2 px-8 pt-10 overflow-auto border"
>
	<div class="pb-6">
		<button
			class="p-1 rounded hover:bg-gray-200"
			title="Close Sidebar"
			on:click={() => ($isOpen = false)}
		>
			{#if $isOpen}
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
			{:else}
				<div class="size-6"></div>
			{/if}
		</button>
	</div>

	<h1 class="font-bold">Components</h1>
	<slot />
</div>
