import { ref } from "vue";
import type { ChatMessage } from "@/types/chat";
import { sendToAI } from "@/services/chatServices";

export function useChat() {
  const messages = ref<ChatMessage[]>([]);
  const loading = ref(false);

  async function sendMessage(text: string) {
    messages.value.push({ role: "user", text });
    loading.value = true;

    try {
      const data = await sendToAI(text);
      const aiText = data?.choices?.[0]?.message?.content ?? "No response";

      messages.value.push({ role: "ai", text: aiText });
    } finally {
      loading.value = false;
    }
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}
