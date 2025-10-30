<script setup lang="ts"></script>
<template>
  <section
    class="flex justify-center items-center min-h-[calc(100vh-570px)] px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-6xl mx-auto w-full">
      <!-- Título principal -->
      <h1 class="text-center">
        <span class="md:block pb-3">Transformamos tus ideas en</span>
        <span class="md:block text-navy">soluciones digitales</span>
      </h1>

      <!-- Descripción -->
      <p
        class="text-center text-base sm:text-lg md:text-xl text-blue600 max-w-4xl mx-auto px-4 mb-8 sm:mb-10 md:mb-12 leading-relaxed mt-5 font-semibold"
      >
        Desarrollo de sitios web, sistemas empresariales e integración de IA.
        Entregamos con plazos claros y soporte continuo: arquitectura sólida y
        segura, experiencia de usuario profesional y rendimiento optimizado. Te
        acompañamos de principio a fin.
      </p>

      <!-- Botones de acción -->
      <div
        class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
      >
        <NuxtLink
          to="/services"
          class="w-full sm:w-auto text-base sm:text-lg font-semibold bg-navy text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg flex items-center justify-center gap-x-2 hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
        >
          Ver Servicios
          <Icon name="maki:arrow" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
