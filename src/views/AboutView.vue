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

<style scoped>
.about {
  @apply flex flex-col space-y-4 md:space-y-4 border rounded-md;
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
