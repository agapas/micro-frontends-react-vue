import { createApp } from "vue";
import Dummy from "./components/Dummy.vue";

// Mount function to start up the app
const mount = (el) => {
  const app = createApp(Dummy);
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
