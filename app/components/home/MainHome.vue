<script setup lang="ts">
import IconTitle from "../ui/icon-title/IconTitle.vue";
</script>
<template>
  <section
    class="flex justify-center items-center min-h-[calc(100vh-570px)] px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-6xl mx-auto w-full">
      <!-- Título principal -->
      <IconTitle
        title="Innovación Digital"
        icon="streamline:star-2-solid"
        class="justify-center"
      />
      <h1 class="text-center">
        <span class="md:block">Transformamos tus ideas en</span>
        <span class="md:block text-navy ">soluciones digitales</span>
      </h1>

      <!-- Descripción -->
      <p
        class="text-center text-base sm:text-lg md:text-xl text-blue600 max-w-4xl mx-auto px-4 mb-8 sm:mb-10 md:mb-12 leading-relaxed mt-5 font-semibold"
      >
        Desarrollamos software innovador que impulsa el crecimiento de tu
        negocio. Páginas web, sistemas empresariales, apps móviles e integración
        de IA.
      </p>

      <!-- Botones de acción -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
      >
        <button
          class="w-full sm:w-auto text-base sm:text-lg font-semibold bg-navy text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg flex items-center justify-center gap-x-2 hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
        >
          Ver Servicios
          <Icon name="maki:arrow" class="text-xl" />
        </button>
        <button
          class="w-full sm:w-auto text-base sm:text-lg font-semibold text-navy px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg border-2 border-navy hover:bg-navy hover:text-white transition-all duration-300 cursor-pointer"
        >
          Conocer Más
        </button>
      </div>
    </div>
  </section>
</template>
