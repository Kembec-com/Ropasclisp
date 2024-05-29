<script lang="ts" setup>
	export interface Emits {
		(event: "selectPlayers", player: 1 | 2): void;
	}
	const emit = defineEmits<Emits>();
</script>
<template>
	<section>
		<h1>Start Game</h1>
		<div class="players">
			<button
				id="play-1-player"
				@click="emit('selectPlayers', 1)"
			>
				1 Player
			</button>
			<button
				id="play-2-player"
				@click="emit('selectPlayers', 2)"
			>
				2 Players
			</button>
		</div>
	</section>
</template>
<style lang="postcss" scoped>
	h1 {
		@apply mb-10 text-center text-5xl font-extrabold tracking-wider lg:mb-20 lg:text-6xl;
	}
	.players {
		@apply flex flex-col space-y-10 py-16 text-4xl lg:py-20 lg:text-6xl min-h-[50dvh];
	}
	.players > button {
		@apply mx-auto flex rounded-sm drop-shadow-lg bg-slate-50 px-12 py-4 font-semibold text-slate-900 transition-all hover:font-bold hover:tracking-wider;
	}
</style>
