export default defineNuxtConfig({
  ssr: false,
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title:
        "DS-CONSULTING",
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  nitro: {
    serveStatic: true,
  },
  sourcemap: { server: false, client: false },
  devServerHandlers: [],
});

