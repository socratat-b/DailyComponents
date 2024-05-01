<script>
	import '../app.css';
</script>

<div class="h-screen flex">
	<div class="flex flex-col gap-2 border h-full w-1/5 px-8 pt-10">
		<a href="/" class=" w-full p-2 rounded-sm group hover:bg-black/85 transition-all duration-700">
			<p class="text-xs font-semibold group-hover:text-white">Day 1</p>
		</a>
		<div class=" w-full p-2 rounded-sm group hover:bg-black/85 transition-all duration-700">
			<p class="text-xs font-semibold group-hover:text-white">Day 2</p>
		</div>
		<div class=" w-full p-2 rounded-sm group hover:bg-black/85 transition-all duration-700">
			<p class="text-xs font-semibold group-hover:text-white">Day 3</p>
		</div>
	</div>

	<div class="flex-1 border px-8 pt-10">
		<h1 class="text-2xl font-bold pb-12">Dropdown Button</h1>
		<div class="h-4/5 flex justify-center items-center">
			<slot />
		</div>
	</div>
</div>
