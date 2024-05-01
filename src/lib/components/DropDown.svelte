<script lang="ts">
	import { isOpen } from '$lib/store';

	let toggle = $isOpen;
</script>

<button
	on:click={() => (toggle = !toggle)}
	class="flex text-xs items-center gap-2 border border-black/25 px-4 py-2 rounded-sm relative"
	>Dropdown
	<span>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3">
			<path
				fill-rule="evenodd"
				d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
				clip-rule="evenodd"
			/>
		</svg>
	</span>

	{#if toggle}
		<div
			class=" absolute border border-black/25 -bottom-28 right-0 w-36 rounded-sm flex flex-col items-start gap-2 px-2 transition-all duration-700"
		>
			<div class="text-sm">Link 1</div>
			<div class="text-sm">Link 2</div>
			<div class="text-sm">Link 3</div>
			<div class="text-sm">Link 3</div>
		</div>
	{/if}
</button>
