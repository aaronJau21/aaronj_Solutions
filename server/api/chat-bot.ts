import { GoogleGenAI } from "@google/genai";
import { defineEventHandler, readBody } from "h3";

interface ChatMessage {
  role: string;
  parts: Array<{ text: string }>;
}

interface RequestBody {
  message: string;
  history?: ChatMessage[];
}

const config = useRuntimeConfig();

const ai = new GoogleGenAI({
  apiKey: config.apiKeyGemini,
});

export default defineEventHandler(async (event) => {
  try {
    const { message, history = [] } = await readBody<RequestBody>(event);

    if (!message) {
      return { error: "No message provided" };
    }

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      // Puedes pasar el historial de conversación para mantener el contexto
      history: history,
    });

    // 2. Envía el mensaje y espera la respuesta
    const response = await chat.sendMessage({ message: message });

    // 3. Devuelve la respuesta y el historial actualizado
    // Es común devolver la respuesta completa y el historial para que el frontend lo maneje
    return {
      text: response.text,
      newHistory: await chat.getHistory(), // Obtiene el historial actualizado
    };
  } catch (error) {
    console.error(error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
});
