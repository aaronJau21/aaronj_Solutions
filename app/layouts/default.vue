<script setup lang="ts">
import ChatBot from "~/components/ui/chat-bot/ChatBot.vue";
import Footer from "~/components/ui/footer/Footer.vue";
import NavBar from "~/components/ui/navbar/NavBar.vue";
import WhatsApp from "~/components/ui/whatsApp/WhatsApp.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="bg-ice min-h-screen">
    <slot />
    <WhatsApp />
    <ChatBot />
  </main>

  <Footer />
</template>

<style scoped></style>
