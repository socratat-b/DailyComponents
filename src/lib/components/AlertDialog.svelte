<script lang="ts">
	import { isOpen } from '$lib/store';
</script>

<button
	on:click={() => ($isOpen = !$isOpen)}
	class="px-4 py-2 text-sm font-semibold transition-all duration-500 border rounded border-black/25 hover:bg-black hover:text-white"
>
	Show Alert Dialog
</button>

{#if $isOpen}
	<div
		class="absolute flex flex-col gap-2 p-4 bg-white border rounded md:p-6 lg:max-w-md border-black/25"
	>
		<h2 class="text-sm font-bold md:text-md">Are you sure you want to do this?</h2>
		<p class="text-xs font-medium text-black/75">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quidem laudantium assumenda
			quam distinctio unde, molestias asperiores expedita nobis quis qui animi fugiat magni omnis
			cum, repellendus quia pariatur. Natus.
		</p>
		<div class="flex items-center justify-end gap-2">
			<button
				on:click={() => ($isOpen = false)}
				class="px-2 py-1 text-xs font-semibold transition-all duration-300 border rounded md:px-6 md:py-2 border-black/25 hover:bg-gray-200"
				>Cancel</button
			>
			<button
				on:click={() => ($isOpen = false)}
				class="px-2 py-1 text-xs font-semibold text-black transition-all duration-300 border rounded md:px-4 md:py-2 border-black/25 hover:bg-red-600 hover:text-white"
				>Confirm</button
			>
		</div>
	</div>
{/if}
