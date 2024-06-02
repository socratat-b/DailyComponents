<script>
	import AlertContainer from '$lib/components/AlertComponents/AlertContainer.svelte';
</script>

<AlertContainer let:Header let:Content>
	<Header>Too much recursion!</Header>
	<Content>You can add components to your app using the cli.</Content>
</AlertContainer>
