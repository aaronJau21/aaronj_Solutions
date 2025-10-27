<script setup lang="ts">
import MainAbout from "~/components/about/MainAbout.vue";
import MissionAbout from "~/components/about/MissionAbout.vue";
import ValuesAbout from "~/components/about/ValuesAbout.vue";
import Ready from "~/components/ui/ready/Ready.vue";

useSeoMeta({
  title: "AaronJ Solutions - Sobre Nosotros",
  ogTitle: "AaronJ Solutions - Sobre Nosotros",
  description:
    "En AaronJ Solutions creamos soluciones digitales innovadoras: diseño web, desarrollo de sistemas, aplicaciones móviles e inteligencia artificial. Transformamos tus ideas en tecnología de alto impacto.",
  ogDescription:
    "En AaronJ Solutions creamos soluciones digitales innovadoras: diseño web, desarrollo de sistemas, aplicaciones móviles e inteligencia artificial. Transformamos tus ideas en tecnología de alto impacto.",
  ogImage: "/logo.webp",
});
</script>

<template>
  <MainAbout />
  <MissionAbout />
  <ValuesAbout />
  <Ready />
</template>
