<script lang="ts" setup>
	import Navbar from "./shared/components/NavbarComponent.vue";
</script>
<template>
	<Navbar />
	<main>
		<RouterView />
	</main>
</template>
<style lang="postcss" scoped>
	main {
		@apply lg:h-[calc(100dvh-6.5rem)] h-[calc(100dvh-5rem)];
		@apply flex flex-col overflow-auto;
	}
</style>
