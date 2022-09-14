<script setup lang="ts">
import { ref } from "vue";
const content = ref("");
</script>
<template>
  <div class="about">
    <div class="grid grid-cols-2 gap-2 md:gap-4">
      <light-editor v-model="content" />
      <light-editor v-model="content" />
    </div>
    <div class="prose lg:prose-xl" v-html="content"></div>
  </div>
</template>

<style scoped>
.about {
  @apply flex flex-col space-y-4 md:space-y-4;
}

.is-active {
  @apply bg-indigo-500 text-white;
}

.icon {
  @apply w-4 h-4;
}

.editor-btn {
  @apply bg-gray-200 p-2 rounded-md text-gray-700;
}
</style>
