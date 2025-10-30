<script setup lang="ts">
import { ref } from "vue";

interface INavLink {
  text: string;
  to: string;
}

const isMenuOpen = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks: INavLink[] = [
  { text: "Inicio", to: "/" },
  { text: "Nosotros", to: "/about" },
  { text: "Servicios", to: "/services" },
  { text: "Contactanos", to: "/contact" },
  { text: "Blogs", to: "/blog" },
];
</script>

<template>
  <nav class="bg-gray-900 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 transform transition-transform duration-300 hover:scale-105"
          >
            <NuxtImg
              src="/logo.webp"
              alt="Logo de AaronJ Solutions"
              class="h-16 w-auto"
            />
          </NuxtLink>
        </div>
        <nav class="hidden md:block">
          <ul class="hidden md:flex md:items-center md:space-x-2">
            <li v-for="link in navLinks" :key="link.text">
              <NuxtLink
                :to="link.to"
                class="text-white/90 hover:text-blue-400 px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 relative group link__nuxt"
              >
                {{ link.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          >
            <Icon v-if="!isMenuOpen" name="quill:hamburger" class="h-6 w-6" />
            <Icon v-else name="material-symbols:close" class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-gray-900 absolute top-0 left-0 w-full h-screen"
      >
        <div class="flex justify-end p-4">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          >
            <Icon name="material-symbols:close" class="h-8 w-8" />
          </button>
        </div>
        <div class="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.text"
            :to="link.to"
            @click="isMenuOpen = false"
            class="text-white/90 hover:text-blue-400 block px-4 py-3 rounded-lg text-2xl font-medium transition-all duration-300"
          >
            {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.link__nuxt.router-link-exact-active {
  color: #60a5fa; /* blue-400 */
  font-weight: 600;
}
</style>
