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
      <div class="scroll">
        <ChatMessage
          v-for="(m, i) in messages"
          :key="i"
          :role="m.role"
          :content="m.content"
        />
        <TypingIndicator v-if="loading" />
      </div>
    </div>

    <ChatInput @send="send" />
  </div>
</template>

<style scoped>
  .window {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 12px;
    gap: 8px;
  }

  .messages {
    position: relative;
    flex: 1;
    overflow: hidden; /* important */
    border-radius: var(--radius);

    background: var(--panel-glass);
    border: 1px solid var(--border-glass);
    backdrop-filter: blur(20px);
  }

  .messages::before,
  .messages::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    pointer-events: none;
    z-index: 2;
  }

  .messages::before {
    top: 0;
    background: linear-gradient(to bottom, rgba(240, 240, 240, 1), transparent);
  }

  .messages::after {
    bottom: 0;
    background: linear-gradient(to top, rgba(240, 240, 240, 1), transparent);
  }

  /* actual scroll area */
  .scroll {
    height: 100%;
    overflow-y: auto;
    padding: 12px;

    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* glass effect */
  .window,
  .messages {
    background: var(--panel-glass);
    border: 1px solid var(--border-glass);
    border-radius: var(--radius);
    backdrop-filter: blur(20px);
  }
</style>
