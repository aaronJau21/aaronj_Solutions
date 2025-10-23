<template>
  <div
    class="bg-white p-6 rounded-xl border border-silver shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
  >
    <div
      class="bg-blue600/10 rounded-full h-16 w-16 flex items-center justify-center"
    >
      <Icon :name="$props.icon" class="text-navy text-3xl" />
    </div>
    <h3 class="text-navy text-xl font-semibold my-5">{{ $props.title }}</h3>
    <p class="text-blue600">
      {{ $props.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<style scoped></style>
