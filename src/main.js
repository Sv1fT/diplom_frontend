import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-select/dist/vue-select.css";
import vSelect from "vue-select";
import PrimeVue from "primevue/config";
import { AutoComplete } from "primevue";
import "./index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .component("AutoComplete", AutoComplete)
  .component("v-select", vSelect)
  .mount("#app");
