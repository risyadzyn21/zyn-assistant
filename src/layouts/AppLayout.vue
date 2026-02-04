<script setup lang="ts">
  import AppHeader from "@/components/layout/AppHeader.vue";
</script>

<template>
  <div class="layout">
    <AppHeader />

    <main class="content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 12px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
</style>
