<script>
	import '../app.css';
</script>

<div class="flex h-screen">
	<div class="flex flex-col w-1/5 h-full gap-2 px-8 pt-10 border">
		<a href="/" class="w-full p-2 transition-all duration-700 rounded-sm group hover:bg-black/85">
			<p class="text-xs font-semibold group-hover:text-white">Day 1</p>
		</a>
		<div class="w-full p-2 transition-all duration-700 rounded-sm group hover:bg-black/85">
			<p class="text-xs font-semibold group-hover:text-white">Day 2</p>
		</div>
		<div class="w-full p-2 transition-all duration-700 rounded-sm group hover:bg-black/85">
			<p class="text-xs font-semibold group-hover:text-white">Day 3</p>
		</div>
	</div>

	<div class="flex-1 px-8 pt-10 border">
		<h1 class="pb-12 text-2xl font-bold">Dropdown Button</h1>
		<div class="flex flex-col items-center justify-center h-4/5">
			<slot />
		</div>
	</div>
</div>
