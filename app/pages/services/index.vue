<script setup lang="ts">
import MainServices from "~/components/services/MainServices.vue";
import ServicesServices from "~/components/services/ServicesServices.vue";

useSeoMeta({
  title: "Servicios — AaronJ Solutions",
  ogTitle: "Servicios — AaronJ Solutions",
  description:
    "Servicios de desarrollo web, aplicaciones y soluciones digitales. Conoce cómo podemos ayudarte con soluciones a medida.",
  ogDescription:
    "Servicios de desarrollo web, aplicaciones y soluciones digitales. Conoce cómo podemos ayudarte con soluciones a medida.",
  ogImage: "/logo.webp",
});
</script>

<template>
  <MainServices />
  <ServicesServices />
</template>
