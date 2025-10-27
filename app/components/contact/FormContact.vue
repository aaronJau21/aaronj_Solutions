<script setup lang="ts">
import { ref } from "vue";
import Alert from "../ui/alerts/Alert.vue";

interface IColorAlert {
  colorb: string;
  colortex: string;
}

interface IResult {
  message: string;
}

interface IForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const showMessage = ref<boolean>(false);
const messageResult = ref<string>("hola");
const color = reactive<IColorAlert>({
  colorb: "",
  colortex: "",
});

const form = reactive<IForm>({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
});

const config = useRuntimeConfig();

async function submitForm() {
  try {
    const data: IResult = await $fetch(
      `${config.public.urlApi}/clients/create`,
      {
        method: "POST",
        body: { ...form },
      }
    );
    showMessage.value = true;
    messageResult.value =
      "¡Gracias por tu interés en AaronJ Solutions! Hemos recibido tu mensaje y nuestro equipo te contactará muy pronto.";
    color.colorb = "bg-green-400";
    color.colortex = "text-green-900";

    hiddenMessage(showMessage);
  } catch (error: any) {
    console.error(error.status);

    if (error.status === 422) {
      showMessage.value = true;
      messageResult.value = "Todos los campos son obligatorios";

      color.colorb = "bg-red-400";
      color.colortex = "text-red-900";

      hiddenMessage(showMessage);

      return;
    }

    showMessage.value = true;
    messageResult.value = "Error del servidor. Intenta más tarde.";

    color.colorb = "bg-red-400";
    color.colortex = "text-red-900";

    hiddenMessage(showMessage);
  }
}
</script>
<template>
  <form @submit.prevent="submitForm()" class="space-y-6">

    <NuxtImg src="/logo.webp" alt="Logo de AaronJ Solutions"/>

    <Alert
      v-if="showMessage"
      :message="messageResult"
      :colorbg="color.colorb"
      :colortext="color.colortex"
    />
    <div>
      <label for="name" class="sr-only">Nombre</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        placeholder="Nombre"
        class="w-full px-5 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder-gray-400"
      />
    </div>
    <div>
      <label for="email" class="sr-only">Email</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        placeholder="Email"
        class="w-full px-5 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder-gray-400"
      />
    </div>
    <div>
      <label for="phone" class="sr-only">Teléfono</label>
      <input
        type="tel"
        id="phone"
        v-model="form.phone"
        placeholder="Teléfono"
        class="w-full px-5 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder-gray-400"
      />
    </div>
    <div>
      <label for="company" class="sr-only">Compañía</label>
      <input
        type="text"
        id="company"
        v-model="form.company"
        placeholder="Compañía"
        class="w-full px-5 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 placeholder-gray-400"
      />
    </div>
    <div class="text-center">
      <button
        type="submit"
        class="w-full bg-[#cd9545] text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
      >
        Enviar Mensaje
      </button>
    </div>
  </form>
</template>

<style scoped></style>
