<script setup lang="ts">
import ChooseUs from "~/components/home/ChooseUs.vue";
import MainHome from "~/components/home/MainHome.vue";
import Ready from "~/components/ui/ready/Ready.vue";
import Servicios from "~/components/home/Servicios.vue";
import Clients from "~/components/home/Clients.vue";

useSeoMeta({
  title: "AaronJ Solutions - Home",
  ogTitle: "AaronJ Solutions - Home",
  description:
    "Bienvenido a AaronJ Solutions, tu socio confiable en desarrollo web y soluciones digitales. Descubre nuestros servicios y cómo podemos ayudarte a crecer en el mundo digital.",
  ogDescription:
    "Bienvenido a AaronJ Solutions, tu socio confiable en desarrollo web y soluciones digitales. Descubre nuestros servicios y cómo podemos ayudarte a crecer en el mundo digital.",
  ogImage: "/logo.webp",
});
</script>

<template>
  <MainHome />
  <Servicios />
  <Clients />
  <ChooseUs />
  <Ready />
</template>
