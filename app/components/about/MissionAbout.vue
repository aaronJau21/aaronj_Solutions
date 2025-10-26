<script setup lang="ts">
import IconTitle from "../ui/icon-title/IconTitle.vue";
import InformationLatter from "../ui/information-latter/InformationLatter.vue";

const stats = [
  {
    icon: "material-symbols:rocket-launch-outline-rounded",
    value: "100+",
    label: "Proyectos Completados",
  },
  {
    icon: "material-symbols:groups-outline-rounded",
    value: "50+",
    label: "Clientes Satisfechos",
  },
  {
    icon: "material-symbols:shield-outline",
    value: "10+",
    label: "Años de Experiencia",
  },
  {
    icon: "material-symbols:coffee-outline-rounded",
    value: "999+",
    label: "Tazas de Café",
  },
];
</script>
<template>
  <section class="px-5 md:container md:mx-auto py-16 sm:py-20">
    <IconTitle title="Nuestra Misión" icon="cib:circle" />
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20"
    >
      <div class="flex-1 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-navy">
          Transformando Ideas en Realidad
        </h2>

        <p class="text-lg text-slate">
          En AaronJ Solutions, nuestra misión es empoderar a las empresas
          mediante soluciones tecnológicas innovadoras que impulsan el
          crecimiento, mejoran la eficiencia y crean valor duradero.
        </p>

        <p class="text-lg text-slate">
          Creemos que la tecnología debe ser accesible, intuitiva y poderosa.
          Por eso, trabajamos incansablemente para transformar ideas complejas
          en experiencias digitales simples y efectivas.
        </p>
      </div>
      <div class="flex-1">
        <NuxtImg
          src="/about/main.png"
          class="rounded-lg shadow-lg"
          alt="Nuestra Misión"
        />
      </div>
    </div>

    <div class="mt-28">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <InformationLatter
            v-for="(stat, index) in stats"
            :key="index"
            :icon="stat.icon"
            :value="stat.value"
            :label="stat.label"
          />
        </div>
      </div>
    </div>
  </section>
</template>
