import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";

import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.component("IconifyIcon", Icon);

app.mount("#app");
