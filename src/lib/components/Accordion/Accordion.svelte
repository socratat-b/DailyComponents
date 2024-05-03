<script lang="ts">
	import AccordionItem from './AccordionItem.svelte';

	let openItemId: null | number = null;

	const toggleItem = (itemId: number) => {
		openItemId = openItemId === itemId ? null : itemId;
	};

	const items = [
		{
			id: 1,
			title: 'Item 1',
			content: 'This is the content for Item 1.'
		},
		{
			id: 2,
			title: 'Item 2',
			content: 'This is the content for Item 2. It can be longer text or even HTML content.'
		},
		{
			id: 3,
			title: 'Item 3',
			content: 'Agay'
		},
		{
			id: 4,
			title: 'Item 4',
			content: 'This is the content for Item 4.'
		}
		// Add more items as needed
	];
</script>

<div class="flex flex-col border divide-gray-200 rounded border-black/25 w-72">
	{#each items as item (item.id)}
		<AccordionItem
			on:click={() => toggleItem(item.id)}
			isOpen={openItemId === item.id}
			itemContent={item.content}
			itemTitle={item.title}
		/>
	{/each}
</div>
