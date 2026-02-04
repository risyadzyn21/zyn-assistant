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
    padding: 12px 16px;
    border-radius: 14px;
    max-width: 75%;
    font-size: 14px;
    line-height: 1.5;

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    word-break: break-word;
  }

  .assistant {
    background: rgba(255, 255, 255, 0.65);
    color: #111827;
    align-self: flex-start;
  }

  .user {
    background: rgba(17, 24, 39, 0.85);
    color: #f9fafb;
    align-self: flex-end;
  }
</style>
