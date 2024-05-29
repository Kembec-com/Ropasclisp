import { type Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import GamePage from "../pages/GamePage.vue";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "home", component: HomePage as Component },
		{ path: "/game", name: "game", component: GamePage as Component },
		// Default
		{ path: "/:any(.*)*", redirect: () => ({ name: "home" }) },
	],
});

export default router;
