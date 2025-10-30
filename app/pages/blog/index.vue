<template>
  <section class="bg-gradient-to-b from-ice to-white py-20">
    <div class="container mx-auto px-4">
      <IconTitle
        title="Nuestro Blog"
        icon="mdi:post-outline"
        class="justify-center mb-16"
      />

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="relative group bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <!-- Imagen -->
          <div class="relative overflow-hidden">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
            >
              <a
                href="#"
                class="flex items-center gap-2 bg-gradient-to-r from-blue600 to-sky text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-transform duration-300 hover:scale-105"
              >
                <span>Leer más</span>
                <Icon name="mdi:arrow-right" class="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <!-- Contenido -->
          <div class="p-6">
            <p class="text-xs text-gray-500 mb-2 tracking-wide">
              {{ post.date }}
            </p>
            <h3
              class="text-xl font-bold text-navy mb-3 group-hover:text-blue600 transition-colors"
            >
              {{ post.title }}
            </h3>
            <p class="text-slate text-sm leading-relaxed">
              {{ post.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const posts = [
  {
    date: "15 de Julio, 2024",
    title: "Las últimas tendencias en desarrollo web",
    description:
      "Descubre las tecnologías y frameworks que están marcando la pauta en el mundo del desarrollo web este año.",
    image: "https://via.placeholder.com/600x400/E6EEF5/13294B?text=Desarrollo+Web",
  },
  {
    date: "10 de Julio, 2024",
    title: "Cómo optimizar tu web para motores de búsqueda (SEO)",
    description:
      "Aprende las mejores prácticas para mejorar el posicionamiento de tu sitio web en Google y otros buscadores.",
    image: "https://via.placeholder.com/600x400/E6EEF5/13294B?text=SEO",
  },
  {
    date: "5 de Julio, 2024",
    title: "La importancia de la experiencia de usuario (UX)",
    description:
      "Descubre por qué una buena experiencia de usuario es crucial para el éxito de tu aplicación o sitio web.",
    image: "https://via.placeholder.com/600x400/E6EEF5/13294B?text=UX",
  },
];
</script>

