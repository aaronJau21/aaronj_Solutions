<script setup lang="ts"></script>
<template>
  <footer class="bg-gray-900 text-white py-12">
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4"
    >
      <!-- Logo and Description -->
      <div class="col-span-1">
        <NuxtImg
          src="/logo.webp"
          alt="Logo de AaronJs Solutions"
          class="w-48 mb-4"
        />
        <p class="text-sm text-gray-400">
          Soluciones de software innovadoras para impulsar tu negocio al
          siguiente nivel.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
        <ul class="space-y-2">
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Inicio</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Servicios</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Nosotros</a
            >
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h4 class="font-semibold text-lg mb-4">Servicios</h4>
        <ul class="space-y-2">
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Páginas Web</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Sistemas Web</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Aplicaciones Móviles</a
            >
          </li>
          <li>
            <a href="#" class="hover:text-blue-400 transition-colors"
              >Integración de IA</a
            >
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="font-semibold text-lg mb-4">Contacto</h4>
        <ul class="space-y-2">
          <li class="flex items-center gap-x-2">
            <Icon name="material-symbols:mail" class="text-blue-400" />
            <a
              href="mailto:contacto@aaronjsolutions.com"
              class="hover:text-blue-400 transition-colors"
              >contacto@aaronjsolutions.com</a
            >
          </li>
          <li class="flex items-center gap-x-2">
            <Icon name="ic:sharp-phone" class="text-blue-400" />
            <span>+51 95947609</span>
          </li>
          <li class="flex items-center gap-x-2">
            <Icon name="mdi:location" class="text-blue-400" />
            <span>Lima, Peru</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} AaronJs Solutions. Todos los
        derechos reservados.
      </p>
    </div>
  </footer>
</template>
<style scoped>
.container {
  max-width: 1200px;
}
</style>