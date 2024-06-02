<script>
	import { slide } from 'svelte/transition';
</script>

<p transition:slide={{ axis: 'y', duration: 400 }} class="py-1 text-xs">
	<slot />
</p>
