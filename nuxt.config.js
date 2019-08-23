import path from "path";
import fs from "fs";
require("dotenv").config();

export default {
  mode: "universal",

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.cert"))
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "Distrito 5 Zona 9 – Scouts de Argentina",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Andres Lacquaniti" },
      {
        hid: "description",
        name: "description",
        content:
          "Distrito 5 Zona 9 -  Formamos parte de un Movimiento Mundial de jóvenes, niños y adultos. Nuestro medio es la educación no formal"
      },

      { property: "og:type", content: "business.business" },
      {
        property: "og:title",
        content: "Distrito 5 Zona 9 - Scouts de Argentina"
      },
      { property: "og:url", content: "https://distrito5zona9.com.ar" },
      {
        property: "og:image",
        content: "https://distrito5zona9.com.ar/icon.png"
      },
      {
        property: "business:contact_data:street_address",
        content: "Pelagio Luna 2235"
      },
      { property: "business:contact_data:locality", content: "Caseros" },
      { property: "business:contact_data:region", content: "Buenos Aires" },
      { property: "business:contact_data:postal_code", content: "1678" },
      { property: "business:contact_data:country_name", content: "Argentina" }
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#23b7e5" },
  /*
   ** Global CSS
   */
  css: [
    //"@/assets/scss/style.scss"
    "bootstrap-css-only/css/bootstrap.min.css",
    "mdbvue/build/css/mdb.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-92295998-1"
      }
    ],
    "@nuxtjs/onesignal",
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/dotenv"
  ],
  sitemap: {
    hostname: "https://zona9.org.ar/",
    gzip: true
  },
  oneSignal: {
    init: {
      appId: "5609dcae-8202-473f-8fc5-406e64d420af",
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },
  /*
   ** Variables de Entorno
   */
  env: {
    GOOGLE_PHOTOS_KEY: process.env.GOOGLE_PHOTOS_KEY
  },
  manifest: {
    name: "Distrito 5 Zona 9 - Scouts de Argentina",
    short_name: "Distrito 5 Zona 9",
    description: "Distrito 5 Zona 9 - Scouts de Argentina",
    lang: "es",
    background_color: "#E1E1E1",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#23b7e5"
  },
  messages: {
    loading: "Loading...",
    error_404: "Esta página no se pudo encontrar",
    server_error: "Error del Servidor",
    nuxtjs: "Nuxt.js",
    back_to_home: "Volver a la página de inicio",
    server_error_details:
      "Ocurrió un error en la aplicación y su página no pudo ser servida. Si usted es el propietario de la aplicación, revise sus registros para más detalles.",
    client_error: "Error",
    client_error_details:
      "Se produjo un error al crear la página. Verifique la consola de herramientas para desarrolladores para más detalles."
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    publicPath: "/_app/",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ["mdbvue"]
  }
};
