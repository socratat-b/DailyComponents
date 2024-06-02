<script>
	export let pathName;
</script>

<a
	href={pathName}
	class="w-full p-2 transition-all duration-700 rounded-sm group hover:bg-black/85"
>
	<p class="text-xs font-semibold group-hover:text-white">
		<slot />
	</p>
</a>
