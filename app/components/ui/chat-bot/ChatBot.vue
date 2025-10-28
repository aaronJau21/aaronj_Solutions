<script setup lang="ts">
import { ref, nextTick, watch } from "vue";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify"; // seguro en SSR

type Role = "user" | "model";
interface Part {
  text: string;
}
interface ChatMessage {
  id: string;
  role: Role;
  parts: Part[];
}
interface ChatResponse {
  text?: string;
  newHistory?: Array<{ role: Role; parts: Part[] }>;
  error?: string;
}

const userInput = ref("");
const messages = ref<ChatMessage[]>([]);
const isOpen = ref(false);
const isSending = ref(false);
const chatScrollEl = ref<HTMLElement | null>(null);

// Markdown renderer (con saltos de línea como <br> y links)
marked.setOptions({ breaks: true });
function renderMarkdown(md: string): string {
  const html = marked.parse(md || "") as string;
  return DOMPurify.sanitize(html);
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function toggleChat() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) nextTick(scrollToBottom);
}
function scrollToBottom() {
  if (!chatScrollEl.value) return;
  chatScrollEl.value.scrollTop = chatScrollEl.value.scrollHeight;
}
watch(messages, async () => {
  await nextTick();
  scrollToBottom();
});

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text || isSending.value) return;

  // UI optimista (usuario)
  const userMsg: ChatMessage = { id: uid(), role: "user", parts: [{ text }] };
  messages.value.push(userMsg);
  userInput.value = "";
  isSending.value = true;

  try {
    // 👇 Clave: excluimos el último del history para evitar duplicados
    const response = await $fetch<ChatResponse>("/api/chat-bot", {
      method: "POST",
      body: {
        message: text,
        history: messages.value
          .slice(0, -1)
          .map(({ role, parts }) => ({ role, parts })),
      },
    });

    if (response?.newHistory?.length) {
      messages.value = response.newHistory.map((m) => ({
        id: uid(),
        role: m.role,
        parts: m.parts,
      }));
    } else if (response?.text) {
      messages.value.push({
        id: uid(),
        role: "model",
        parts: [{ text: response.text }],
      });
    } else if (response?.error) {
      messages.value.push({
        id: uid(),
        role: "model",
        parts: [{ text: `Lo siento, hubo un error: ${response.error}` }],
      });
    }
  } catch (e) {
    console.error(e);
    messages.value.push({
      id: uid(),
      role: "model",
      parts: [{ text: "Lo siento, hubo un error. Intenta de nuevo." }],
    });
  } finally {
    isSending.value = false;
  }
}
</script>

<template>
  <div class="chatbot-wrapper">
    <button
      class="chatbot-toggle"
      @click="toggleChat"
      :class="{ 'is-open': isOpen }"
      aria-label="Abrir/cerrar chat"
    >
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>

    <transition name="chat-slide">
      <div v-if="isOpen" class="chatbot-container">
        <div class="chat-header">
          <h3>Chat con Gemini</h3>
          <button class="close-btn" @click="toggleChat" aria-label="Cerrar">
            ×
          </button>
        </div>

        <div class="chat-messages" ref="chatScrollEl">
          <div v-if="messages.length === 0" class="welcome-message">
            <p>👋 ¡Hola! ¿En qué puedo ayudarte hoy?</p>
          </div>

          <div
            v-for="msg in messages"
            :key="msg.id"
            class="message"
            :class="msg.role === 'user' ? 'user-message' : 'bot-message'"
          >
            <div class="message-avatar">
              {{ msg.role === "user" ? "👤" : "🤖" }}
            </div>
            <div class="message-content">
              <strong class="message-sender">{{
                msg.role === "user" ? "Tú" : "Gemini"
              }}</strong>

              <!-- Usuario: texto plano; Bot: Markdown a HTML -->
              <p v-if="msg.role === 'user'" class="message-text">
                {{ msg.parts[0]?.text || "" }}
              </p>
              <div
                v-else
                class="message-text markdown"
                v-html="renderMarkdown(msg.parts[0]?.text || '')"
              ></div>
            </div>
          </div>
        </div>

        <form @submit.prevent="sendMessage" class="chat-input-form">
          <input
            v-model="userInput"
            type="text"
            placeholder="Escribe tu mensaje..."
            class="chat-input"
            :disabled="isSending"
          />
          <button
            type="submit"
            class="send-btn"
            :disabled="isSending"
            aria-label="Enviar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
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
.chatbot-toggle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}
.chatbot-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}
.chatbot-toggle:active {
  transform: scale(0.95);
}
.chatbot-container {
  position: fixed;
  bottom: 90px;
  left: 20px;
  width: 380px;
  height: 550px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.chat-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
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
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}
.close-btn:hover {
  transform: rotate(90deg);
}
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
  color: #fff;
  border-bottom-right-radius: 4px;
  white-space: pre-wrap;
}
.bot-message .message-text {
  background: #fff;
  color: #333;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Estilos para contenido Markdown del bot */
.markdown :is(p) {
  margin: 0 0 0.5rem 0;
}
.markdown :is(ul, ol) {
  margin: 0.25rem 0 0.25rem 1.25rem;
  padding: 0;
}
.markdown li {
  margin: 0.15rem 0;
}
.markdown a {
  text-decoration: underline;
  word-break: break-word;
}
.markdown strong {
  font-weight: 700;
}

/* Input */
.chat-input-form {
  padding: 16px;
  background: #fff;
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
  transition: border-color 0.2s;
}
.chat-input:focus {
  border-color: #667eea;
}
.chat-input:disabled,
.send-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
}
.send-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
.send-btn:active {
  transform: scale(0.95);
}

/* Transición */
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: all 0.3s ease;
}
.chat-slide-enter-from,
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

/* Scroll */
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
