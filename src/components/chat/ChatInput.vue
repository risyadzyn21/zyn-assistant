<script setup lang="ts">
  import { ref } from "vue";

  const emit = defineEmits<{ send: [message: string] }>();

  const input = ref<string>("");

  function sendMessage() {
    if (!input.value.trim()) return;

    emit("send", input.value.trim());
    input.value = "";
  }
</script>

<template>
  <div class="chat-input panel">
    <input
      v-model="input"
      type="text"
      placeholder="Type your message..."
      @keyup.enter="sendMessage"
    />

    <button @click="sendMessage">Send</button>
  </div>
</template>

<style scoped>
  .chat-input {
    display: flex;
    gap: 8px;
    padding: 10px;
  }

  /* 🔥 THIS is the fix */
  .chat-input input {
    flex: 1;
    width: 100%;
  }
</style>
