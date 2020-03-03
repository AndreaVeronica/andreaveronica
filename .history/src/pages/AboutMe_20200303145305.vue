<template>
  <div id="container">
      <!-- <navigation></navigation> -->

      <bio></bio>
      <portfolio></portfolio>
      <skills></skills>
      <contact></contact>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import Bio from '../components/Bio.vue'
import Facts from '../components/Facts.vue'
import Navigation from '../components/Navigation.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'
import Skills from "../components/Skills.vue";

export default {
  name: 'AboutMe',
  components: {
  Bio,
  Facts,
  Navigation,
  Portfolio,
  Contact,
  Skills
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>