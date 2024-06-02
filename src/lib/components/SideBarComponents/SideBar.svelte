<script>
	import { slide } from 'svelte/transition';
</script>

<div
	transition:slide={{ axis: 'x', duration: 1000 }}
	class="flex flex-col w-1/5 gap-2 px-8 pt-10 overflow-auto border"
>
	<h1 class="font-bold">Components</h1>
	<slot />
</div>
