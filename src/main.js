import _ from "lodash";
import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import AboutMe from './pages/AboutMe.vue'
import Photos from './pages/Photos.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'about', component: AboutMe },
  { path: '/photos', name: 'photos',  component: Photos }
]

const router = new VueRouter({
  routes 
})

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
