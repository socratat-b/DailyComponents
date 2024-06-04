<script>
	import { page } from '$app/stores';

	import LayoutContainer from '$lib/components/LayoutComponents/LayoutContainer.svelte';
	import { componentData, getComponentName } from '$lib/utils/component-data';
	import { isOpen } from '$lib/utils/store';
	import '../app.css';
</script>

<LayoutContainer let:SideBar let:Links let:SlotContainer>
	{#if $isOpen}
		<SideBar>
			{#each componentData as c}
				<Links pathName={c.pathName}>
					{c.componentName}
				</Links>
			{/each}
		</SideBar>
	{/if}

	<SlotContainer componentName={getComponentName($page.url.pathname)}>
		<slot />
	</SlotContainer>
</LayoutContainer>
