import { createApp } from "vue";
import { createPinia } from "pinia";
import editorPlugin from "./plugins/editor";
import LightEditor from "@hannanmiah/light-editor";

import App from "./App.vue";
import router from "./router";
import "./main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(LightEditor);

app.mount("#app");
