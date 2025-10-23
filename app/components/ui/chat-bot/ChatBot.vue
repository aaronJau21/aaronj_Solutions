<script setup lang="ts">
import { ref } from "vue";

interface ChatMessage {
  role: string;
  parts: Array<{ text: string }>;
}

interface ChatResponse {
  text?: string;
  newHistory?: ChatMessage[];
  error?: string;
}

const userInput = ref<string>("");
const messages = ref<ChatMessage[]>([]);
const isOpen = ref<boolean>(false);

function toggleChat() {
  isOpen.value = !isOpen.value;
}

async function sendMessage() {
  if (!userInput.value.trim()) return;

  const userMessage = userInput.value;
  userInput.value = ""; // Limpiar el input

  // Agregar el mensaje del usuario al historial local
  messages.value.push({ role: "user", parts: [{ text: userMessage }] });

  try {
    const response = await $fetch<ChatResponse>("/api/chat-bot", {
      method: "POST",
      body: {
        message: userMessage,
        history: messages.value, // Enviar el historial actual
      },
    });

    // Reemplazar o actualizar el historial con el nuevo historial completo de la respuesta
    // Esto es una simplificación, puedes sólo añadir la respuesta del modelo si manejas el historial en el server.
    if (response.newHistory) {
      messages.value = response.newHistory.map((msg) => ({
        role: msg.role,
        parts: msg.parts,
      }));
    }
  } catch (error) {
    console.error("Error sending message:", error);
    messages.value.push({
      role: "model",
      parts: [{ text: "Lo siento, hubo un error. Intenta de nuevo." }],
    });
  }
}
</script>

<template>
  <div class="chatbot-wrapper">
    <!-- Botón flotante -->
    <button class="chatbot-toggle" @click="toggleChat" :class="{ 'is-open': isOpen }">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Ventana del chat -->
    <transition name="chat-slide">
      <div v-if="isOpen" class="chatbot-container">
        <!-- Header -->
        <div class="chat-header">
          <h3>Chat con Gemini</h3>
          <button class="close-btn" @click="toggleChat">×</button>
        </div>

        <!-- Mensajes -->
        <div class="chat-messages">
          <div v-if="messages.length === 0" class="welcome-message">
            <p>👋 ¡Hola! ¿En qué puedo ayudarte hoy?</p>
          </div>
          <div 
            v-for="(msg, index) in messages" 
            :key="index" 
            class="message"
            :class="msg.role === 'user' ? 'user-message' : 'bot-message'"
          >
            <div class="message-avatar">
              {{ msg.role === "user" ? "👤" : "🤖" }}
            </div>
            <div class="message-content">
              <strong class="message-sender">{{ msg.role === "user" ? "Tú" : "Gemini" }}</strong>
              <p class="message-text">{{ msg.parts[0]?.text || "" }}</p>
            </div>
          </div>
        </div>

        <!-- Input -->
        <form @submit.prevent="sendMessage" class="chat-input-form">
          <input
            v-model="userInput"
            type="text"
            placeholder="Escribe tu mensaje..."
            class="chat-input"
          />
          <button type="submit" class="send-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.chatbot-wrapper {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

/* Botón flotante */
.chatbot-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.chatbot-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.chatbot-toggle:active {
  transform: scale(0.95);
}

/* Contenedor del chat */
.chatbot-container {
  position: fixed;
  bottom: 90px;
  left: 20px;
  width: 380px;
  height: 550px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Header */
.chat-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.close-btn:hover {
  transform: rotate(90deg);
}

/* Área de mensajes */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.welcome-message {
  text-align: center;
  color: #6c757d;
  margin-top: 40px;
}

.welcome-message p {
  font-size: 16px;
}

/* Mensajes individuales */
.message {
  display: flex;
  gap: 12px;
  animation: messageSlideIn 0.3s ease;
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}

.user-message .message-avatar {
  background: #e3f2fd;
}

.bot-message .message-avatar {
  background: #f3e5f5;
}

.message-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-sender {
  font-size: 12px;
  color: #6c757d;
  font-weight: 600;
}

.message-text {
  margin: 0;
  padding: 12px 16px;
  border-radius: 12px;
  line-height: 1.5;
  font-size: 14px;
}

.user-message .message-text {
  background: #667eea;
  color: white;
  border-bottom-right-radius: 4px;
}

.bot-message .message-text {
  background: white;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Formulario de input */
.chat-input-form {
  padding: 16px;
  background: white;
  border-top: 1px solid #e9ecef;
  display: flex;
  gap: 8px;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;
}

.chat-input:focus {
  border-color: #667eea;
}

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.send-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.send-btn:active {
  transform: scale(0.95);
}

/* Animación de transición */
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: all 0.3s ease;
}

.chat-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Scrollbar personalizado */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

/* Responsive */
@media (max-width: 480px) {
  .chatbot-container {
    width: calc(100vw - 40px);
    height: calc(100vh - 140px);
  }
}
</style>
