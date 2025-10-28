import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxt/image"],
  runtimeConfig: {
    apiKeyGemini: process.env.API_KEY_GEMINI || "",
    public: {
      urlApi: process.env.URL_API,
    },
  },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "AaronJ Solutions - Desarrollo web y soluciones digitales a medida",
      titleTemplate: "%s | AaronJ Solutions",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "AaronJ Solutions ofrece desarrollo web y soluciones digitales a medida para impulsar tu presencia online.",
        },
        { name: "author", content: "AaronJ Solutions" },
        { name: "theme-color", content: "#0ea5a4" },

        /* Open Graph */
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "AaronJ Solutions" },
        { property: "og:title", content: "AaronJ Solutions - Desarrollo web" },
        {
          property: "og:description",
          content:
            "AaronJ Solutions ofrece desarrollo web y soluciones digitales a medida para impulsar tu presencia online.",
        },
        { property: "og:image", content: "/logo.webp" },

        /* Twitter Card */
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@aaronjsolutions" }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap",
        },
        { rel: "canonical", href: "https://www.aaronjsolutions.com/" }
      ],
    },
  },
  image: {
    domains: ["localhost", "www.aaronjsolutions.com", "aaronjsolutions.com"],
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
