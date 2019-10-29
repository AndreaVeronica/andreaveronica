<template>
  <div id="page-container">
       <section class="allSections bio-section" id="facts-container">
            <div class="left-side">
                <div v-for="fact in leftGroup"> 
                    <span class="font-style-cursive section-h2">{{fact.fact}} </span>
                </div>  
            </div> 
            <div class="right-side">
              <div v-for="fact in rightGroup"> 
                 <span class="font-style-cursive section-h2">{{fact.fact}} </span>
              </div>
            </div>
        </section>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import funFacts from '../data/funFacts.js'

export default {
  name: 'Facts',
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
  }

  #facts-container {
    background-image: url("../images/coffee1.jpg");
    /* background-image: url("../images/coffee2.jpg"); */
      background-size: cover;
    z-index: -1;
     display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .left-side {

  }
  .right-side{

  }

</style>