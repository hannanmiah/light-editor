# A Light Vue 3 rich text editor

@hannanmiah/light-editor is built on top of tiptap (a popular rich text editor).

## Project Setup

```sh
npm install @hannanmiah/light-editor
```

### Using as a plugin or Component

```
//main.js
import { createApp } from "vue";
import { LightEditor, LightEditorPlugin } from "@hannanmiah/light-editor"

import App from "./App.vue";
//styles
import "@hannanmiah/light-editor/dist/style.css"

const app = createApp(App);
//use as a plugin
app.use(LightEditorPlugin);
//or use as a global component
app.component(LightEditor)
app.mount("#app");
```


```
//App.vue
<script setup lang="ts">
import { ref } from "vue";
const content = ref("");
</script>
<template>
  <div class="about">
    <light-editor v-model="content" />
    <div class="prose lg:prose-xl" v-html="content"></div>
  </div>
</template>

```