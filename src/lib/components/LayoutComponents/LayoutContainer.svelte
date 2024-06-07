<script>
	import SideBar from '../SideBarComponents/SideBar.svelte';
	import Links from '../SideBarComponents/SideBarLinks.svelte';
	import SlotContainer from './LayoutSlotContainer.svelte';
</script>

<div class="relative flex h-screen">
	<slot {SideBar} {Links} {SlotContainer} />
</div>
