<script>
	import { fade } from 'svelte/transition';

	let isOpen = false;
</script>

<button
	on:click={() => (isOpen = true)}
	class="px-4 py-2 text-sm font-semibold transition-all duration-500 border rounded hover:bg-gray-100"
	>Edit Profile</button
>

{#if isOpen}
	<!-- content here -->
	<div transition:fade={{ duration: 200 }} class="fixed inset-0 flex items-center justify-center">
		<div class="fixed inset-0 bg-black/35"></div>
		<div
			class="absolute flex flex-col px-6 py-4 font-sans bg-white border rounded shadow-sm min-w-60 min-h-72"
		>
			<div class="flex items-center justify-between pb-2 text-lg">
				<h1 class="font-bold leading-tight">Edit Profile</h1>
				<button on:click={() => (isOpen = false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<p class="pb-6 text-sm">
				Make changes to your profile here. Click save when <br /> you're done.
			</p>
			<div class="flex flex-col items-end flex-1 gap-4">
				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold">Name</span>
					<input type="text" class="py-1 border rounded min-w-72" />
				</div>
				<div class="flex items-center gap-2">
					<span class="text-sm font-semibold">Username</span>
					<input type="text" class="py-1 border rounded min-w-72" />
				</div>
			</div>
			<div class="flex items-center justify-end">
				<button class="px-4 py-2 text-xs font-semibold border rounded">Save changes</button>
			</div>
		</div>
	</div>
{/if}
