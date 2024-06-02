<script>
	import SideBar from '../SideBarComponents/SideBar.svelte';
	import Links from '../SideBarComponents/SideBarLinks.svelte';
	import SlotContainer from './LayoutSlotContainer.svelte';
</script>

<div class="flex h-screen">
	<slot {SideBar} {Links} {SlotContainer} />
</div>
