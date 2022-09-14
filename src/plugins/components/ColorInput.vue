<script setup lang="ts">
import { ref } from "vue";
import type { Editor } from "@tiptap/core";
defineProps<{
  editor: Editor;
}>();

const color = ref("#000000");
</script>

<template>
  <input
    type="color"
    v-model="color"
    @update:modelValue="editor.chain().focus().setColor(color).run()"
  />
</template>

<style scoped>
</style>
