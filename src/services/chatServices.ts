const API_URL = import.meta.env.VITE_API_URL;

export async function sendToAI(message: string): Promise<string> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("AI request failed");
  }

  const data = await res.json();

  return data.choices[0].message.content;
}
