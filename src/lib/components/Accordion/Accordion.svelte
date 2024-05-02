<script lang="ts">
	import AccordionItem from './AccordionItem.svelte';
	let isOpen = false;
</script>

<div class="flex flex-col border divide-y divide-gray-200 rounded border-black/25 w-72">
	<AccordionItem itemContent="Ofcourse yes you dumb." itemTitle="Does cow Moo?" />
	<AccordionItem itemContent="Yeah!" itemTitle="Does coffee make you crack?" />
	<AccordionItem
		itemContent="Kapeng matapang kaya kang paglaban."
		itemTitle="What is the coffee ingredients"
	/>
</div>
