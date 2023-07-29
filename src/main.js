import { createApp } from "vue";
//Scss
import "./assets/scss/main.scss";
//Pinia
import { createPinia } from "pinia";
//Router
import router from "./router/index";
// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import { aliases, mdi } from "vuetify/iconsets/mdi";
import { mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);

app.mount("#app");
