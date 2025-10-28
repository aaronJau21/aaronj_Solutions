import { GoogleGenAI } from "@google/genai";
import { defineEventHandler, readBody } from "h3";

// 1. 📂 Importa el archivo JSON
// (Asegúrate de que la ruta './company_data.json' sea correcta para tu estructura de proyecto)
import companyData from '../data/company_data.json'; 

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

// 2. 📝 Crea la Instrucción de Sistema
// Ahora que 'companyData' es un objeto JavaScript importado, lo convertimos a string.
const systemInstruction = `Eres un asistente de servicio al cliente amable y útil para la empresa AaronJ Solutions. Responde a todas las preguntas basándote ÚNICAMENTE en la siguiente información de la empresa, estructurada en formato JSON. No inventes información:
${JSON.stringify(companyData, null, 2)}`; // Convierte el JSON a string

export default defineEventHandler(async (event) => {
  try {
    const { message, history = [] } = await readBody<RequestBody>(event);

    if (!message) {
      return { error: "No message provided" };
    }

    // 3. 💬 Pasa la systemInstruction al crear el chat
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      history: history,
      config: {
        systemInstruction: systemInstruction, // ✨ ¡Usamos la instrucción predefinida!
      }
    });

    // 4. Envía el mensaje y espera la respuesta
    const response = await chat.sendMessage({ message: message });

    // 5. Devuelve la respuesta y el historial actualizado
    return {
      text: response.text,
      newHistory: await chat.getHistory(),
    };
  } catch (error) {
    console.error(error);
    return { error: error instanceof Error ? error.message : "Unknown error" };
  }
});