<script lang="ts">
	import { accordionItems } from '$lib/component-data';
	import AccordionContainer from '$lib/components/AccordionComponents/AccordionContainer.svelte';
	import { isAccordionItemOpen } from '$lib/store';

	const toggleAccordion = (id: number) => {
		isAccordionItemOpen.update((state) => ({
			...state,
			[id]: !state[id]
		}));
	};
</script>

<AccordionContainer let:A>
	{#each accordionItems as item (item.id)}
		<!-- content here -->
		<A.Item on:click={() => toggleAccordion(item.id)}>
			<A.Header id={item.id}>
				<A.Button on:click={() => toggleAccordion(item.id)}>{item.title}</A.Button>
			</A.Header>
			{#if $isAccordionItemOpen[item.id]}
				<A.Content>{item.content}</A.Content>
			{/if}
		</A.Item>
	{/each}
</AccordionContainer>
