<template>
  <div
    class="transform rounded-xl bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:scale-105"
  >
    <div
      class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
    >
      <Icon :name="$props.icon" class="text-4xl text-blue-500" />
    </div>
    <p class="text-3xl font-bold text-gray-800">
      {{ $props.value }}
    </p>

    <p class="mt-1 text-gray-500">
      {{ $props.label }}
    </p>
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  value: string;
  label: string;
}

defineProps<Props>();
</script>

<style scoped></style>
