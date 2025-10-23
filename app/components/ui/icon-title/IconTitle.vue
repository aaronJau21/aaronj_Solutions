<script setup lang="ts">
interface Props {
  title: string;
  icon: string;
  class?: string;
}

defineProps<Props>();
</script>
<template>
  <div class="flex" :class="$props.class">
    <div
      class="flex flex-row items-center gap-x-1.5 bg-silver px-3 py-1.5 rounded-4xl"
    >
      <Icon :name="$props.icon" class="text-navy" />
      <p class="text-navy">{{ $props.title }}</p>
    </div>
  </div>
</template>
