<template>
  <div class="relative bg-white min-h-screen overflow-hidden">
    <div class="absolute inset-0">
      <div
        class="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50"
      ></div>
    </div>
    <main class="relative py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-24">
        <div class="relative z-10 flex flex-col justify-center">
          <div class="text-center lg:text-left">
            <h1
              class="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight"
            >
              <span class="block">Ponte en contacto</span>
              <span class="block text-blue-600">con nosotros</span>
            </h1>
            <p class="mt-4 text-lg text-gray-600 max-w-md mx-auto lg:mx-0 font-semibold">
              Estamos aquí para ayudarte. Completa el formulario y nos pondremos
              en contacto contigo lo antes posible.
            </p>
          </div>
          <div class="mt-12 flex flex-col space-y-6 text-gray-600 text-lg">
            <div class="flex items-center">
              <svg
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="ml-3">Lima, Perú</span>
            </div>
            <div class="flex items-center">
              <svg
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="ml-3">contacto@aaronjsolutions.com</span>
            </div>
            <div class="flex items-center">
              <svg
                class="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="ml-3">+51 95947609</span>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="bg-gray-900 p-8 rounded-2xl shadow-2xl">
            <FormContact />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import FormContact from "~/components/contact/FormContact.vue";
</script>

<style scoped>
/* Estilos adicionales para un look más moderno */
input,
textarea {
  transition: all 0.3s ease-in-out;
}

input:focus,
textarea:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>
