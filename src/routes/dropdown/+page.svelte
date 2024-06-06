<script lang="ts">
	import { slide } from 'svelte/transition';

	let isOpen: boolean = false;
	const toggle = (): void => {
		isOpen = !isOpen;
	};
</script>

<div class="relative w-1/4 py-2">
	<button on:click={toggle} class="flex items-center justify-between w-full border-b">
		Dropdown
		<span class="{isOpen ? '' : 'rotate-180'} duration-500">
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
				</svg>
			</span>
		</span>
	</button>
	{#if isOpen}
		<div
			transition:slide={{ axis: 'y', duration: 500 }}
			class="absolute flex flex-col w-full border rounded top-10"
		>
			<ul>
				<li>
					<a href="/">Profile</a>
				</li>
				<li>
					<a href="/">Achievements</a>
				</li>
				<li>
					<a href="/">Settings</a>
				</li>
				<li>
					<a href="/">Logout</a>
				</li>
			</ul>
		</div>
	{/if}
</div>
