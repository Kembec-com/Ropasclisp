import { type Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import GamePage from "../pages/GamePage.vue";
import HelpPage from "../pages/HelpPage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/help", name: "home", component: HelpPage as Component },
		{ path: "/", name: "game", component: GamePage as Component },
		// Default
		{ path: "/:any(.*)*", redirect: () => ({ name: "home" }) },
	],
});

export default router;
