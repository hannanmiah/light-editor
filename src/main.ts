import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { LightEditorPlugin } from "./plugins/";
import "./main.css";
const app = createApp(App);
app.use(createPinia());
app.use(LightEditorPlugin);
app.use(router);

app.mount("#app");
