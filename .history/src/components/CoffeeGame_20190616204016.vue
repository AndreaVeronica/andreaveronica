<template>
  <div id="page-container">
       <section class="allSections bio-section dark">
            <div class="game-container"> 
              <div id="coffee-cup" 
              @click="adjustCup()"
              v-bind:class="{ 'tilt': isBagTilted, 'fixed': !isBagTilted}"
              > {{ coffeeMugTitle }}
              </div>
              <div id="coffee">

              </div>
             <div class="testing">
               <input 
               @input="testing()"
               class="adding-filter"
               v-model="paintLabel"> 
             </div>
            </div>
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
  filters() {
     NumberOnly(value) {
          read: function(val) {
            return '$'+val.toFixed(2)
          },
                 write: function(val, oldVal) {
            var number = +val.replace(/[^\d.]/g, '')
            return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
          }
  },
  data() {
    return {
      facts: funFacts,
      isBagTilted: false,
      coffeeMugTitle: "Andrea",
      paintLabel: ''
    }
  },
  methods: {
    adjustCup() {
      if (this.isBagTilted) {
        this.isBagTilted = false
      } else {
        this.isBagTilted = true
      }
    },
    testing() {
      console.log(this.paintLabel)
    }
  }
}
</script>

<style>
  .bio-section{
    height: 550px;
    display: flex;
    justify-content: flex-end; 
    flex-wrap: wrap;
    text-align: center;
  }

  #coffee-cup{
    height: 300px;
    width: 250px;
    background-color: #ffbf00;
    margin-right: 150px;
    position: relative;
    z-index: 1;
  }

  #coffee {
    height: 200px;
    width: 200px;
    background-color:brown;
    left: 20px; 
    top: -290px; 
     position: relative;
  }

  .game-container {
   
  }

  div.tilt {
    transform: rotate(-90deg); 
    transition-duration: 2s;
  }

   div.fixed {
    transform: rotate(0deg); 
  }
</style>