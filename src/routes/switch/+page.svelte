<script lang="ts">
	let isToggle = false;
	const toggle = (): void => {
		isToggle = !isToggle;
	};
</script>

<div class="flex items-center gap-2">
	<button
		on:click={toggle}
		class="flex items-center w-12 p-1 rounded-2xl {isToggle
			? 'bg-black/90 border border-black/90'
			: 'border '} duration-500 transition-all"
	>
		<span
			class="{isToggle
				? 'translate-x-6 bg-white'
				: 'bg-black'}  rounded-full size-3 duration-500 transition-all"
		></span>
	</button>
	<span class="text-sm font-medium tracking-tight">Switch Mode</span>
</div>
