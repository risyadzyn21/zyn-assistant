<script setup lang="ts">
  import { ref } from "vue";

  const emit = defineEmits<{
    (e: "send", message: string): void;
  }>();

  const input = ref<string>("");

  function sendMessage() {
    if (!input.value.trim()) return;

    emit("send", input.value.trim());
    input.value = "";
  }
</script>

<template>
  <div class="chat-input">
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
    padding: 12px;
    border-top: 1px solid #eee;
  }

  .chat-input input {
    flex: 1;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 14px;
  }

  .chat-input input:focus {
    border-color: #4f46e5;
  }

  .chat-input button {
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    background: #4f46e5;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }

  .chat-input button:hover {
    opacity: 0.9;
  }
</style>
