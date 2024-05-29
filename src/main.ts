import "./assets/main.css";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faHandLizard,
	faHandPaper,
	faHandPeace,
	faHandRock,
	faHandScissors,
	faHandSpock,
} from "@fortawesome/free-regular-svg-icons";
import { faEraser, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { type Component, createApp } from "vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App as Component);
library.add(faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock, faHandPeace, faEraser, faQuestion);

// Components
app.component("font-awesome-icon", FontAwesomeIcon);

// Use
app.use(router);

// Mount
app.mount("#app");
