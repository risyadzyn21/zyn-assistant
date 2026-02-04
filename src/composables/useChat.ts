import { ref } from "vue";
import type { ChatMessage } from "@/types/chat";
import { sendToAI } from "@/services/chatServices";

export function useChat() {
  const messages = ref<ChatMessage[]>([]);
  const loading = ref(false);

  async function send(text: string) {
    messages.value.push({ role: "user", content: text });
    loading.value = true;

    try {
      const reply = await sendToAI(text);
      messages.value.push({ role: "assistant", content: reply });
    } catch {
      messages.value.push({
        role: "assistant",
        content: "⚠️ Failed to reach AI",
      });
    } finally {
      loading.value = false;
    }
  }

  return { messages, loading, send };
}
