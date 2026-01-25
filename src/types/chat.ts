export type ChatRole = "user" | "ai";

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
