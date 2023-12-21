import { createApp } from "vue";
import PrimeVue from "primevue/config";
import PricingPlans from "./components/PricingPlans.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(PricingPlans);
  app.use(PrimeVue);
  app.mount(el); // mount function from vue
};

// If in development and in isolation call mount immediately
if (process.env.NODE_ENV === "development") {
  const rootElement = document.getElementById("remote-vue-root");

  if (rootElement) {
    mount(rootElement);
  }
}

// Running through container, so export the mount function
export { mount };
