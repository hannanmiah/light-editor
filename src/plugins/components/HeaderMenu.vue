<script setup lang="ts">
import type { Editor } from "@tiptap/core";
import { ref } from "vue";
defineProps<{
  editor: Editor;
}>();
const headerMenuIsOpen = ref(false);
function toggleHeaderMenu() {
  headerMenuIsOpen.value = !headerMenuIsOpen.value;
}
</script>

<template>
  <div class="header-div" @click="toggleHeaderMenu">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="icon cursor-pointer"
    >
      <path
        d="M448 448c0 17.69-14.33 32-32 32h-96c-17.67 0-32-14.31-32-32s14.33-32 32-32h16v-144h-224v144H128c17.67 0 32 14.31 32 32s-14.33 32-32 32H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h16v-320H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32H112v112h224v-112H320c-17.67 0-32-14.31-32-32s14.33-32 32-32h96c17.67 0 32 14.31 32 32s-14.33 32-32 32h-16v320H416C433.7 416 448 430.3 448 448z"
      />
    </svg>
    <ul class="parent-header" v-if="headerMenuIsOpen">
      <li
        class="list-header"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-h-active': editor.isActive('heading', { level: 1 }) }"
      >
        H1
      </li>
      <li
        class="list-header"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-h-active': editor.isActive('heading', { level: 2 }) }"
      >
        H2
      </li>
      <li
        class="list-header"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-h-active': editor.isActive('heading', { level: 3 }) }"
      >
        H3
      </li>
      <li
        class="list-header"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-h-active': editor.isActive('heading', { level: 4 }) }"
      >
        H4
      </li>
      <li
        class="list-header"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-h-active': editor.isActive('heading', { level: 5 }) }"
      >
        H5
      </li>
      <li
        class="list-header"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-h-active': editor.isActive('heading', { level: 6 }) }"
      >
        H6
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
