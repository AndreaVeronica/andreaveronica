<template>
  <div id="container">
      <!-- <navigation></navigation> -->
      <bio></bio>
      <facts></facts>
      <!-- <coffee-game></coffee-game> -->
      <portfolio></portfolio>
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
import Contact from '../components/Cont.vue'

export default {
  name: 'AboutMe',
  components: {
  Bio,
  Facts,
  CoffeeGame,
  Navigation,
  Portfolio
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>