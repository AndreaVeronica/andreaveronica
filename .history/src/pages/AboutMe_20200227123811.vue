<template>
  <div id="container">
      <!-- <navigation></navigation> -->
      <bio></bio>
      <!-- <facts></facts> -->
      <!-- <coffee-game></coffee-game> -->
      <portfolio></portfolio>
      <skills></skills>
      <contact></contact>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import Bio from '../components/Bio.vue'
import CoffeeGame from '../components/CoffeeGame.vue'
import Facts from '../components/Facts.vue'
import Navigation from '../components/Navigation.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
import {  } from "module";

export default {
  name: 'AboutMe',
  components: {
  Bio,
  Facts,
  CoffeeGame,
  Navigation,
  Portfolio,
  Contact
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>