import { GoogleGenAI } from "@google/genai";
import { RESUME_TEXT } from "../constants";

// Initialize the client only if the key exists, handled in the call to avoid init errors
const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  const ai = getAIClient();
  
  if (!ai) {
    return "I'm currently in demo mode as my API key hasn't been configured. I'd love to chat about Naman's experience once connected!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant for Naman Mishra's portfolio website. 
        Your goal is to answer questions about Naman's professional experience, skills, and projects based STRICTLY on the following resume context.
        
        RESUME CONTEXT:
        ${RESUME_TEXT}
        
        Guidelines:
        1. Be professional, enthusiastic, and concise.
        2. Speak in the first person representing Naman (e.g., "I have experience with...") or as a helpful assistant (e.g., "Naman has experience with...").
        3. If a user asks about a skill not listed, say "It doesn't look like that's explicitly listed in the resume, but based on his backend expertise, he might be familiar with related concepts."
        4. Highlight the "Lead" aspect and "AI/RAG" expertise when relevant.
        `,
      }
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I encountered a temporary error connecting to my brain. Please try again later.";
  }
};