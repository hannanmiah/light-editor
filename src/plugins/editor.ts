import LightEditor from "./LightEditor.vue";
import type { Plugin, App } from "vue";
const LightEditorVuePlugin: Plugin = {
  install: (app: App) => {
    app.component("LightEditor", LightEditor);
  },
};
export default LightEditorVuePlugin;
