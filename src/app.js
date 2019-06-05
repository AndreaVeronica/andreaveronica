import _ from "lodash";
import Vue from 'vue'

console.log(_.join(["Another", "module", "loaded!"], " "));


var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  }
});
