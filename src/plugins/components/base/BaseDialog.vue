<script setup lang="ts"></script>

<template>
  <Teleport to="body">
    <div class="modal-container">
      <div class="modal">
        <div class="modal-header">
          <slot name="header" />
        </div>
        <div class="modal-body"><slot /></div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* @import "../../plugin.css"; */
</style>
