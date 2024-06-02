<script>
	import Button from '$lib/components/AccordionComponents/AccordionButton.svelte';
	import Content from '$lib/components/AccordionComponents/AccordionContent.svelte';
	import Header from '$lib/components/AccordionComponents/AccordionHeader.svelte';
	import Item from '$lib/components/AccordionComponents/AccordionItem.svelte';

	const A = {
		Item,
		Header,
		Button,
		Content
	};
</script>

<div class=" w-96">
	<slot {A} />
</div>
