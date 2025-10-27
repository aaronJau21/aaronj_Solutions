<script setup lang="ts">
import IconTitle from "../ui/icon-title/IconTitle.vue";
import Service from "./Service.vue";

interface ICards {
  title: string;
  description: string;
  icon: string;
}

const cards = ref<ICards[]>([
  {
    title: "Páginas Web",
    icon: "tabler:world",
    description:
      "Sitios web modernos, responsivos y optimizados para SEO que impulsantu presencia digital.",
  },
  {
    title: "Sistemas Web",
    icon: "material-symbols:code-rounded",
    description:
      "Sistemas web robustos y escalables diseñados para automatizar y optimizar tus procesos de negocio.",
  },
  {
    title: "Aplicaciones Móviles",
    icon: "bi:phone",
    description:
      "Apps nativas y multiplataforma que ofrecen experiencias excepcionales en iOS y Android.",
  },
  {
    title: "Integración de IA",
    icon: "tabler:brain",
    description:
      "Incorporamos inteligencia artificial para automatizar tareas y mejorar la toma de decisiones.",
  },
]);
</script>
<template>
  <section class="">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <IconTitle
          title="Servicios"
          icon="material-symbols:code-rounded"
          class="justify-center"
        />
        <h2 class="text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Nuestros Servicios
        </h2>
        <p class="mt-6 text-lg leading-8 text-blue600">
          Ofrecemos soluciones completas de desarrollo de software adaptadas a
          tus necesidades
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <div
          class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Service v-for="card in cards" :key="card.title" v-bind="card" />
        </div>
      </div>
    </div>
  </section>
</template>
