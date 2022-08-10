<script setup lang="ts">
import { toRefs, watch, computed } from "vue";
import type { ShallowRef } from "vue";
import type { Editor } from "@tiptap/core";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Underline from "@tiptap/extension-underline";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import components from "./components";
import type { Component } from "./components";
// import "./plugin.css";

const props = defineProps<{
  modelValue: string;
  classic?: boolean;
  advanced?: boolean;
  basic?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const { modelValue: content, classic, advanced } = toRefs(props);

function renderCondition(component: Component) {
  if (component.type === "advanced" && advanced.value) {
    return true;
  } else if (component.type === "classic" && classic.value) {
    return true;
  } else if (component.type === "basic") {
    return true;
  } else {
    return false;
  }
}
// const renderCondition = computed((component: Component) {
//   if (component.type === "advanced" && advanced.value) {
//     return true;
//   } else if (component.type === "classic" && classic.value) {
//     return true;
//   } else if (component.type === "basic" && basic.value) {
//     return true;
//   } else {
//     return false;
//   }
// })

const fileteredComponents = computed(() => {
  return components.filter(renderCondition);
});

const editor: ShallowRef<Editor | undefined> = useEditor({
  content: content.value,
  onUpdate: () => {
    // HTML
    emit("update:modelValue", editor.value.getHTML());
  },
  extensions: [StarterKit, Underline, TextStyle, Color, Link, Image],
  editorProps: {
    attributes: {
      class: "editor-default",
    },
  },
});

watch(content, (value) => {
  if (value !== editor.value?.getHTML()) {
    editor.value?.commands.setContent(value);
  }
});
</script>
<template>
  <div v-if="editor" class="editor-container">
    <div class="editor-toolbox">
      <component
        v-for="component in fileteredComponents"
        :key="component.name"
        :is="component.component"
        :editor="editor"
      />
    </div>

    <editor-content :editor="editor" />
  </div>
</template>

<style scoped>
@import "./plugin.css";
</style>
<style>
.editor-default {
  @apply w-full prose prose-sm sm:prose-xl md:prose-2xl px-2 md:px-4 focus:outline-none;
}
.editor-container {
  @apply flex flex-col border rounded-md;
}
.editor-toolbox {
  @apply flex flex-wrap items-center space-x-2 md:space-x-4 p-2 border-b;
}
</style>
