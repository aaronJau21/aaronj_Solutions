<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  features: string[];
  technologies: string[];
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
    <div class="flex flex-col justify-between flex-1 p-6">
      <div class="flex-1">
        <div class="flex items-center">
          <Icon :name="$props.icon" class="text-3xl"/>
          <h3 class="ml-4 text-xl font-semibold text-gray-900">
            {{ $props.title }}
          </h3>
        </div>
        <p class="mt-4 text-base font-semibold text-gray-600">
          Características:
        </p>
        <ul class="mt-2 space-y-2">
          <li
            v-for="(feature, i) in $props.features"
            :key="i"
            class="flex items-start"
          >
            <Icon name="lets-icons:check-fill" />
            <span class="ml-2 text-base text-gray-900">{{ feature }}</span>
          </li>
        </ul>
        <p class="mt-6 text-base font-semibold text-gray-600">Tecnologías:</p>
        <div class="flex flex-wrap mt-2">
          <span
            v-for="(tech, i) in $props.technologies"
            :key="i"
            class="px-2 py-1 mb-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
            >{{ tech }}</span
          >
        </div>
      </div>
      <div class="mt-6">
        <a
          href="/contact"
          title=""
          class="flex items-center justify-center w-full px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          role="button"
        >
          Solicitar Cotización
        </a>
      </div>
    </div>
  </div>
</template>
