<script setup lang="ts">
import IconTitle from "../ui/icon-title/IconTitle.vue";
import InformationLatter from "../ui/information-latter/InformationLatter.vue";

interface IValues {
  icon: string;
  title: string;
  lable: string;
}

const values = ref<IValues[]>([
  {
    icon: "mdi:star",
    title: "Innovación",
    lable:
      "Utilizamos las últimas tecnologías y metodologías para crear soluciones innovadoras",
  },
  {
    icon: "mdi:users-outline",
    title: "Colaboración",
    lable:
      "Trabajamos estrechamente con nuestros clientes para entender y superar sus expectativas",
  },
  {
    icon: "zondicons:badge",
    title: "Calidad",
    lable:
      "Nos comprometemos a entregar productos de la más alta calidad en cada proyecto",
  },
  {
    icon: "material-symbols:chart-data",
    title: "Crecimiento",
    lable:
      "Impulsamos el crecimiento de tu negocio con soluciones escalables y eficientes",
  },
]);
</script>

<template>
  <section class="mb-20">
    <div class="mx-auto container px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <IconTitle
          title="Valores"
          icon="streamline-plump:star-medal"
          class="justify-center"
        />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nuestros Valores</h2>
        <p class="mt-4 text-lg leading-8 text-blue600">
          Los principios que guían nuestro trabajo y nuestras relaciones con los clientes
        </p>
      </div>
      <div class="mt-16 sm:mt-20">
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          <InformationLatter
            v-for="value in values"
            :key="value.title"
            :icon="value.icon"
            :label="value.lable"
            :value="value.title"
            class="text-center"
          />
        </div>
      </div>
    </div>
  </section>
</template>
