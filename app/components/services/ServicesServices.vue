<script setup lang="ts">
import Service from "./ServiceCart.vue";

const services = [
  {
    icon: "streamline-plump:web",
    title: "Desarrollo Web a Medida",
    features: [
      "Diseños modernos, rápidos y adaptables a cualquier dispositivo",
      "Optimización SEO avanzada para destacar en buscadores",
      "Panel de administración personalizado y fácil de usar",
      "Integración con APIs y servicios externos",
    ],
    technologies: [
      "Nuxt JS",
      "Astro JS",
      "Next JS",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    icon: "humbleicons:code",
    title: "Sistemas Web Empresariales",
    features: [
      "Análisis y diseño de arquitectura escalable",
      "Automatización de procesos internos",
      "Migración segura de datos desde sistemas antiguos",
      "Implementación de pruebas y mantenimiento continuo",
    ],
    technologies: [
      "Node.js",
      "Laravel",
      ".Net",
      "Docker",
      "AWS",
      "Angular",
      "React",
      "Vue",
    ],
  },
  {
    icon: "fluent:phone-12-regular",
    title: "Aplicaciones Móviles",
    features: [
      "Apps nativas y multiplataforma (iOS y Android)",
      "Notificaciones push y funciones en tiempo real",
      "Geolocalización, cámara y sensores integrados",
      "Publicación y soporte en App Store y Play Store",
    ],
    technologies: ["React Native"],
  },
  {
    icon: "mdi:cog-outline",
    title: "Automatización de Procesos",
    features: [
      "Integración de flujos automáticos entre sistemas",
      "Automatización inteligente para maximizar rendimiento y eficiencia",
      "Bots y scripts inteligentes para tareas repetitivas",
      "Monitoreo y mantenimiento automatizado",
    ],
    technologies: ["Node.js", "N8N", "Opal"],
  },
  {
    icon: "eos-icons:ai",
    title: "Integración de Inteligencia Artificial",
    features: [
      "Chatbots personalizados con IA generativa",
      "Análisis predictivo basado en datos reales",
      "Automatización con modelos de lenguaje (LLM)",
      "Soluciones personalizadas con OpenAI y Google Gemini",
    ],
    technologies: ["OpenAI API", "Gemini"],
  },
  {
    icon: "mdi:infinity",
    title: "DevOps y Entrega Continua",
    features: [
      "Configuración de pipelines CI/CD automatizados",
      "Despliegue con Docker, Kubernetes y Railway",
      "Monitoreo de infraestructura en tiempo real",
      "Integración y entrega continua para mayor eficiencia",
    ],
    technologies: ["Docker", "GitHub Actions", "Kubernetes", "AWS"],
  },
];
</script>

<template>
  <section class="py-12 bg-gray-50">
    <div class="px-4 mx-auto container sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-2 xl:mt-20"
      >
        <Service
          v-for="(service, index) in services"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :features="service.features"
          :technologies="service.technologies"
        />
      </div>
    </div>
  </section>
</template>
