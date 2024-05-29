<script lang="ts" setup>
	import { computed, defineAsyncComponent, ref } from "vue";

	import PlayGame from "./Game/components/PlayGameComponent.vue";
	import StartGame from "./Game/components/StartGameComponent.vue";
	import type Result from "./Game/interfaces/ResultInterface";

	const LastResults = defineAsyncComponent(() => import("./Game/components/LastResultsComponent.vue"));

	// Data
	const page = ref<string>("StartGame");
	const players = ref<1 | 2>(1);
	const result = ref<string | null>(localStorage.result || "");

	// Computed
	const lastResults = computed<Result[]>(() => {
		if (!result.value) {
			return false;
		}

		return JSON.parse(result.value);
	});
	const componentSelected = computed<typeof StartGame | typeof PlayGame>(() => {
		if (page.value === "PlayGame") {
			return PlayGame;
		}

		return StartGame;
	});

	// Methods
	function selectPlayers(e: 1 | 2): void {
		if (page.value === "PlayGame") {
			page.value = "StartGame";

			return;
		}

		players.value = e;
		page.value = "PlayGame";
	}
	function changeResult(): void {
		result.value = localStorage.result;
	}
</script>
<template>
	<article id="game">
		<a
			href="/help"
			class="help"
		>
			<font-awesome-icon :icon="['fas', 'question']" />
		</a>
		<Transition
			name="slide-fade"
			mode="out-in"
		>
			<component
				:key="page"
				:is="componentSelected"
				:players="page === 'PlayGame' ? players : undefined"
				@selectPlayers="selectPlayers"
				@changeResult="changeResult"
			/>
		</Transition>

		<Transition
			name="fade"
			mode="in-out"
		>
			<LastResults
				v-if="lastResults"
				:lastResults="lastResults"
				@changeResult="changeResult"
			/>
		</Transition>
	</article>
</template>
<style lang="postcss" scoped>
	#game {
		@apply flex flex-col;
	}
	#game > :deep(section) {
		@apply px-5 lg:px-[10dvw] xl:px-[15dvw] py-5 lg:py-10;
	}

	.help {
		@apply fixed top-5 right-5 drop-shadow-md bg-slate-950 hover:rounded-lg transition-all text-slate-50 p-3 leading-none;
	}

	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all 0.5s ease-in-out;
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		opacity: 0;
	}

	.slide-fade-enter-to,
	.slide-fade-leave-from {
		opacity: 100;
	}
</style>
