import { profileImage } from 'module';
<template>
  <div id="page-container">
       <section class="allSections bio-section dark">
            
        </section>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import funFacts from '../data/funFacts.js'

export default {
  name: 'CoffeeGame',
  components: {

  },
  data() {
    return {
      facts: funFacts
    }
  }
}
</script>

<style>
    .bio-section{
      height: 550px;
      display: flex;
      justify-content: space-between; 
      flex-wrap: wrap;
      text-align: center;
      align-items: center;
    }
</style>