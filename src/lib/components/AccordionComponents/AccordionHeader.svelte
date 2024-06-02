<script>
	import { isAccordionItemOpen } from '$lib/store';
	export let id;
</script>

<div class="flex items-center justify-between group hover:cursor-pointer text-wrap">
	<slot />

	<span class="{$isAccordionItemOpen[id] ? 'rotate-180' : ''} duration-500">
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
</div>
