<script setup lang="ts">
  import { useChat } from "@/composables/useChat";
  import ChatInput from "./ChatInput.vue";
  import ChatMessage from "./ChatMessage.vue";

  const { messages, loading, sendMessage } = useChat();
</script>

<template>
  <div class="chat-window">
    <ChatMessage v-for="(m, i) in messages" :key="i" :message="m" />
    <div v-if="loading">AI is thinking...</div>
    <ChatInput @send="sendMessage" />
  </div>
</template>
