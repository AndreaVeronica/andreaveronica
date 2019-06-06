import _ from "lodash";
import Vue from 'vue'
import App from './App.vue'

console.log(_.join(["Another", "module", "loaded!"], " "));


new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  },
  components: { App },
  template: "<App/>"
});
