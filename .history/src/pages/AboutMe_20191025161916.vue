<template>
  <div id="container">
      <!-- <navigation></navigation> -->
      <bio></bio>
      <facts></facts>
      <!-- <coffee-game></coffee-game> -->
      <portfolio></portfolio>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import Bio from '../components/Bio.vue'
import CoffeeGame from '../components/CoffeeGame.vue'
import Navigation from '../components/Navigation.vue'
import Portfolio from '../components/Portfolio.vue'

export default {
  name: 'AboutMe',
  components: {
  Bio,
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