export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return data?.error || `Server responded with status ${response.status}. Please check your connection.`;
    }

    return data?.text || "I couldn't generate a response at the moment.";
  } catch (error: any) {
    console.error("Error communicating with Gemini server:", error);
    return "Sorry, I encountered a temporary error communicating with the server. Please try again later.";
  }
};