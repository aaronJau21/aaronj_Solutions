<script setup lang="ts">
const teamMembers = ref([
  {
    name: "Aaron J.",
    role: "CEO & Fundador",
    avatar: "/team/aaron.webp",
  },
  {
    name: "Jane Doe",
    role: "Directora de Tecnología",
    avatar: "/team/jane.webp",
  },
  {
    name: "John Smith",
    role: "Líder de Desarrollo",
    avatar: "/team/john.webp",
  },
]);
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">
        Sobre Nosotros
      </h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        En AaronJ Solution, somos más que un equipo de desarrollo; somos
        arquitectos de soluciones digitales que impulsan el éxito de nuestros
        clientes. Desde nuestra fundación, nos hemos dedicado a la excelencia
        técnica y a la innovación constante.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-center my-16">
      <div>
        <h2 class="text-3xl font-bold text-text-primary mb-4">Nuestra Misión</h2>
        <p class="text-gray-600 mb-4">
          Nuestra misión es empoderar a las empresas a través de la tecnología,
          ofreciendo soluciones de software a medida que no solo resuelven
          problemas, sino que también abren nuevas oportunidades de crecimiento y
          eficiencia.
        </p>
        <h2 class="text-3xl font-bold text-text-primary mb-4 mt-8">
          Nuestra Visión
        </h2>
        <p class="text-gray-600">
          Nos proyectamos como líderes en el sector tecnológico, reconocidos por
          nuestra capacidad para transformar ideas complejas en realidades
          digitales robustas, seguras y escalables, manteniendo siempre un
          compromiso con la calidad y la satisfacción del cliente.
        </p>
      </div>
      <div>
        <NuxtImg
          src="/about/mission.webp"
          alt="Equipo trabajando en una oficina moderna"
          class="rounded-lg shadow-xl w-full h-auto"
        />
      </div>
    </div>

    <div class="text-center mt-20">
      <h2 class="text-3xl font-bold text-text-primary mb-10">
        Conoce a Nuestro Equipo
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <NuxtImg
            :src="member.avatar"
            :alt="`Foto de ${member.name}`"
            class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-acento"
          />
          <h3 class="text-xl font-bold text-text-primary">{{ member.name }}</h3>
          <p class="text-acento">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1,
h2 {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
</style>