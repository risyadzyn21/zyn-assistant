<script setup lang="ts">
  defineProps<{
    role: "user" | "assistant";
    content: string;
  }>();
</script>

<template>
  <div :class="['msg', role]">
    {{ content }}
  </div>
</template>

<style scoped>
  .msg {
    padding: 10px;
    margin: 6px;
    border-radius: 10px;
    max-width: 70%;
  }

  .user {
    background: #d0f0ff;
    align-self: flex-end;
  }

  .assistant {
    background: #eee;
  }
</style>
