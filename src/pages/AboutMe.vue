import { profileImage } from 'module';
<template>
  <div id="container">
      <bio></bio>
      <coffee-game></coffee-game>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import Bio from '../components/Bio.vue'
import CoffeeGame from '../components/CoffeeGame.vue'

export default {
  name: 'AboutMe',
  components: {
  Bio,
  CoffeeGame
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>