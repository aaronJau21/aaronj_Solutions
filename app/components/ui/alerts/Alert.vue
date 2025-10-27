<script setup lang="ts">
interface Props {
  message: string;
  colorbg: string;
  colortext: string;
}

const props = defineProps<Props>();
</script>
<template>
  <div :class="['p-5 rounded', props.colorbg]">
    <p :class="[colortext]">{{ message }}</p>
  </div>
</template>

<style scoped></style>
