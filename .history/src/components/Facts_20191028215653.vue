<template>
  <div id="page-container">
       <section class="allSections bio-section" id="facts-container">
             
            <span class="left-side" v-for="fact in leftGroup"> 
                {{fact.fact}}
            </span>
             <span class="right-side" v-for="fact in rightGroup"> 
                {{fact.fact}}
            </span>
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
  mounted() { 

  },
  computed: { 
    leftGroup() {
      return this.facts.filter(fact => fact.group === 1) 
    }, 
     rightGroup() {
     return this.facts.filter(fact => fact.group === 2) 
    } 
  },
  data() {
    return {
      facts: funFacts,
    }
  },
  methods: {

  }
}
</script>

<style>
  .bio-section{
    height: 700px;
    display: flex;
    justify-content: flex-end; 
    flex-wrap: wrap;
    text-align: center;
  }

  #facts-container {
    background-image: url("../images/coffee1.jpg");
    /* background-image: url("../images/coffee2.jpg"); */
      background-size: cover;
    z-index: -1;
  }

  .left-side {

  }
  .right-side{

  }

</style>