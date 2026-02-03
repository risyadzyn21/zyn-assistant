const API_URL = import.meta.env.VITE_API_URL;

export async function sendToAI(message: string) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch AI response");
  }

  return res.json();
}
