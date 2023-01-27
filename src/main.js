import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// import ScrollAnimation from "./directives/scrollanimation";
import { MotionPlugin } from '@vueuse/motion';
// import { VueSmoothScroll } from 'vue-smooth-scroll';
// import smoothscroll from 'smoothscroll-polyfill';


// import VueAnimateOnScroll from 'vue-animate-onscroll';

import App from "./App.vue";
import router from "./router";


import "./scss/main.scss";
// import "/anim.js";

const app = createApp(App);

library.add(fas, fab);
app.component('fa', FontAwesomeIcon )


app.use(router);
app.use(MotionPlugin);
// app.use(VueSmoothScroll);

// app.directive('scrollanimation', ScrollAnimation);

app.mount("#app");

