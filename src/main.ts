import { createApp } from "vue";
import { createPinia } from "pinia";

import { LightEditor, LightEditorPlugin } from "@hannanmiah/light-editor";

import App from "./App.vue";
import router from "./router";
import "./main.css";
import "@hannanmiah/light-editor/dist/style.css";
const app = createApp(App);
app.component("light-editor", LightEditor);
console.log(LightEditor);
// app.use(LightEditorPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
