import _ from "lodash";
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import AboutMe from './components/AboutMe.vue'
import Portfolio from './components/Portfolio.vue'
import Photos from './components/Photos.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter);
console.log(_.join(["Another", "module", "loaded!"], " "));

const routes = [
  { path: '/about', component: AboutMe },
  { path: '/portfolio', component: Portfolio },
  { path: '/photos', component: Photos },
  { path: '/skills', component: Skills },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  },
  router,
  components: { App },
  template: "<App/>"
});
