<script setup lang="ts">
  import { useChat } from "@/composables/useChat";

  import ChatInput from "./ChatInput.vue";
  import ChatMessage from "./ChatMessage.vue";
  import TypingIndicator from "./TypingIndicator.vue";

  const { messages, loading, send } = useChat();
</script>

<template>
  <div class="window">
    <div class="messages">
      <ChatMessage
        v-for="(m, i) in messages"
        :key="i"
        :role="m.role"
        :content="m.content"
      />
      <TypingIndicator v-if="loading" />
    </div>

    <ChatInput @send="send" />
  </div>
</template>

<style scoped>
  .window {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .messages {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
</style>
