<script setup lang="ts">
import { toRefs, ref, nextTick } from "vue";
import BaseDialog from "./base/BaseDialog.vue";
import type { Editor } from "@tiptap/core";
const props = defineProps<{
  editor: Editor;
}>();
const { editor } = toRefs(props);

const dialogIsOpen = ref(false);
const url = ref("");
const urlInput = ref();
const alt = ref("");
function toggleDialog() {
  dialogIsOpen.value = !dialogIsOpen.value;
}
function addImage() {
  toggleDialog();

  nextTick(() => {
    urlInput.value.focus();
  });

  if (url.value) {
    editor.value
      .chain()
      .focus()
      .setImage({ src: url.value, alt: alt.value })
      .run();
  }
}
</script>

<template>
  <button type="button" @click="addImage" class="editor-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon">
      <path
        d="M447.1 32h-384C28.64 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM111.1 96c26.51 0 48 21.49 48 48S138.5 192 111.1 192s-48-21.49-48-48S85.48 96 111.1 96zM446.1 407.6C443.3 412.8 437.9 416 432 416H82.01c-6.021 0-11.53-3.379-14.26-8.75c-2.73-5.367-2.215-11.81 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51l93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192C448.6 396 448.9 402.3 446.1 407.6z"
      />
    </svg>
    <base-dialog v-if="dialogIsOpen">
      <template #header>
        <div>Insert Image</div>
      </template>
      <template #default>
        <div class="form-group">
          <label for="url">Url</label>
          <input
            ref="urlInput"
            type="text"
            v-model="url"
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="alt">Alt</label>
          <input type="text" v-model="alt" class="form-control" />
        </div>
      </template>
      <template #footer>
        <button type="button" class="btn btn-warning" @click="toggleDialog">
          Cancel
        </button>
        <button type="button" class="btn btn-info" @click="toggleDialog">
          Insert
        </button>
      </template>
    </base-dialog>
  </button>
</template>

<style scoped>
</style>
