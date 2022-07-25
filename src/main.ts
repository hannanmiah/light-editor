import { createApp } from "vue";
import { createPinia } from "pinia";
import editorPlugin from "./plugins/editor";
import { LightEditor, LightEditorPlugin } from "../dist/light-editor.es";

import App from "./App.vue";
import router from "./router";
import "./main.css";
import "../dist/style.css";

const app = createApp(App);
app.component("light-editor", LightEditor);
console.log(LightEditor);
// app.use(LightEditorPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
