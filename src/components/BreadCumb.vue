<script setup lang="ts">
import { useDark } from "@vueuse/core";

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "dark",
  valueLight: "light",
});
</script>

<template>
  <div class="my-4 px-4 flex justify-end">
    <div class="flex items-center justify-center mb-12">
      <label for="toogleA" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input
            id="toogleA"
            type="checkbox"
            class="sr-only"
            v-model="isDark"
          />
          <!-- line -->
          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <!-- dot -->
          <div
            class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"
          ></div>
        </div>
        <!-- label -->
      </label>
    </div>
  </div>
</template>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #141615;
}

/* Toggle B */
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #141615;
}
</style>
