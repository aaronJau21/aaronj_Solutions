<script setup lang="ts">
import IconTitle from "../ui/icon-title/IconTitle.vue";

const advantages = ref<string[]>([
  "Equipo con más de 10 años de experiencia",
  "Tecnologías modernas y actualizadas",
  "Soporte técnico continuo",
  "Desarrollo ágil y entregas rápidas",
]);
</script>
<template>
  <section class="container mx-auto my-24 px-5 md:px-0">
    <IconTitle title="Nuestra Ventaja" icon="material-symbols:shield-outline" />

    <div class="lg:flex lg:flex-row lg:items-center lg:gap-x-16">
      <div class="flex-1 py-5">
        <div class="lg:w-[35rem]">
          <h2 class="text-4xl font-bold text-center lg:text-left">
            ¿Por qué elegirnos?
          </h2>

          <p
            class="my-9 text-blue600 text-justify text-lg md:text-xl leading-relaxed"
          >
            En AaronJ Solutions, nos comprometemos a entregar soluciones de
            software de alta calidad que superan las expectativas de nuestros
            clientes.
          </p>

          <ul class="flex flex-col gap-y-4 mb-12">
            <li
              v-for="advantage in advantages"
              :key="advantage"
              class="text-navy text-lg md:text-xl flex items-center gap-x-3"
            >
              <Icon
                name="lets-icons:check-fill"
                class="text-blue-500 text-2xl"
              />
              <span>{{ advantage }}</span>
            </li>
          </ul>

          <button
            class="w-full sm:w-auto text-lg font-semibold bg-navy text-white px-8 py-4 rounded-lg flex items-center justify-center gap-x-3 hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
          >
            <span>Conoce Nuestro Equipo</span>
            <Icon name="material-symbols:arrow-forward" class="text-xl" />
          </button>
        </div>
      </div>
      <div class="flex-1 mt-10 lg:mt-0">
        <NuxtImg
          src="/home/main.png"
          alt="Un equipo de desarrolladores trabajando en un proyecto"
          class="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
