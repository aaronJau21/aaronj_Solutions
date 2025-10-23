<script setup lang="ts"></script>

<template>
  <a
    href="https://wa.me/51942631794"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 group hover:scale-110 transition-transform duration-300 ease-in-out"
    aria-label="Contactar por WhatsApp"
  >
    <div
      class="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <Icon name="logos:whatsapp-icon" size="29" />

      <!-- Efecto de pulso animado -->
      <span
        class="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"
      ></span>
    </div>

    <!-- Tooltip opcional -->
    <span
      class="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    >
      ¡Chatea con nosotros!
    </span>
  </a>
</template>

<style scoped>
/* Animación de pulso personalizada si es necesaria */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.75;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
