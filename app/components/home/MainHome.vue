<script setup lang="ts"></script>

<template>
  <section
    class="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-9"
  >
    <div class="max-w-6xl mx-auto w-full ">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center dark:text-white leading-tight"
      >
        <span class="block pb-3">Transformamos tus ideas en</span>
        <span class="block text-navy">soluciones digitales</span>
      </h1>

      <p
        class="mt-6 text-base sm:text-lg md:text-xl text-blue600 max-w-4xl mx-auto leading-relaxed"
      >
        Desarrollo de sitios web, sistemas empresariales e integración de IA.
        Entregamos con plazos claros y soporte continuo:
      </p>

      <ul
        class="mt-8 text-base sm:text-lg text-blue600 max-w-2xl mx-auto space-y-4 list-disc list-inside"
      >
        <li>Arquitectura sólida y segura</li>
        <li>Experiencia de usuario profesional y rendimiento optimizado</li>
        <li>Te acompañamos de principio a fin</li>
      </ul>

      <div class="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <NuxtLink
          to="/services"
          class="w-full sm:w-auto text-lg font-semibold bg-navy text-white px-8 py-4 rounded-lg flex items-center justify-center gap-x-2 hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
        >
          <span>Ver Servicios</span>
          <Icon name="maki:arrow" class="text-xl" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
