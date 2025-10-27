<template>
  <section class="bg-white py-12 my-12">
    <div class="max-w-screen-xl mx-auto px-4">
      <h2 class="text-3xl font-extrabold text-center text-navy mb-10">
        Nuestros Clientes de Confianza
      </h2>
      <div class="flex justify-center items-center flex-wrap gap-12 lg:gap-16">
        <div v-for="client in clients" :key="client.name" class="text-center">
          <NuxtImg
            :src="client.logo"
            :alt="client.name"
            class="h-40  rounded-2xl"
          />

          <a
            :href="client.url"
            target="_blank"
            class="group flex flex-col items-center mt-3 hover:text-navy hover:underline  transition-all "
          >
            {{ client.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const clients = ref([
  {
    name: "Emozziona",
    logo: "/home/emozziona.webp",
    url: "https://www.emozzionaperu.com/",
  },
  {
    name: "Transporte Casa Blanca",
    logo: "/home/transporteCasablanca.webp",
    url: "https://www.transportecasablanca.com/",
  },
  // Agrega más clientes aquí
]);
</script>

<style scoped>
/* Estilos para mejorar la apariencia */
.group:hover .text-blue600 {
  text-decoration: underline;
}
</style>
