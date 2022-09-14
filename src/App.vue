<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import BreadCumb from "@/components/BreadCumb.vue";
</script>

<template>
  <header
    class="flex justify-between items-center dark:bg-slate-500 bg-indigo-500 p-4"
  >
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="50"
      height="50"
    />

    <nav class="flex space-x-2 md:space-x-4 text-white">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <BreadCumb />

  <main class="p-10 flex flex-col space-y-4 md:space-y-8">
    <RouterView />
  </main>
</template>

<style>
</style>
