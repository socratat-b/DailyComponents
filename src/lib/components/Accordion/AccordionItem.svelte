<script>
	import { slide } from 'svelte/transition';

	export let itemTitle = '';
	export let itemContent = '';
	export let isOpen = false;
</script>

<div class="flex flex-col w-full gap-2">
	<button on:click class="flex items-center justify-between p-3 font-semibold hover:underline">
		{itemTitle}
		<span class="{isOpen ? 'rotate-0' : '-rotate-90'}   transition-all duration-500">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-3 h-3"
			>
				<path
					fill-rule="evenodd"
					d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
					clip-rule="evenodd"
				/>
			</svg>
		</span>
	</button>
	{#if isOpen}
		<div transition:slide class=" px-3 pb-4 text-sm">
			<p>{itemContent}</p>
		</div>
	{/if}
</div>
