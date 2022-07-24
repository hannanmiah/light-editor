import BaseEditor from "@/components/BaseEditor.vue";
export default {
  install: (app) => {
    app.component("LightEditor", BaseEditor);
  },
};
