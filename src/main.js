import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";

import "aos/dist/aos.css";

createApp(App).use(router).mount("#app");
AOS.init({
  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
  offset: 220, // offset (in px) from the original trigger point
});
