<template>
  <div id="page-container">
       <section class="allSections bio-section" id="facts-container">
            <div class="left-side" v-for="funFacts"> 

            </div>
             <div class="right-side"> 

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

  #coffee-container {
    background-image: url("../images/coffee1.jpg");
    /* background-image: url("../images/coffee2.jpg"); */
      background-size: cover;
    z-index: -1;
  }

  div.tilt {
    transform: rotate(-90deg); 
    transition-duration: 2s;
  }

   div.fixed {
    transform: rotate(0deg); 
  }

  .steam {
    position: absolute;
    z-index: 2;
    top: 340px;
    left: 360px;
    -webkit-animation: steam_Move 18s infinite linear;
    animation: steam_Move 18s infinite linear;
    transition: all 1s;
  
}

.move {
    z-index: 3;
    position: absolute;
    top: 340px;
    left: 350px;
    -webkit-animation: steam_Move 18s infinite linear;
    animation: steam_Move 18s infinite linear;
    transition: all 1s;
    
}

.steam2 {
    display: none;
}

@keyframes steam_Move {
    0% {
        filter: blur(10px);
        transform: rotateY(0deg);
        transform: scale(1, 1);
        opacity: 0.75;
        top: 340px;
    }
    33% {
        transform: rotateY(40deg);
        transform: scale(0.6, 1.2);
    }
    66% {
        transform: rotateY(2deg);
        transform: scaleY(1.2, 0.4);
    }
    100% {
        filter: blur(16px);
        transform: rotateY(50deg);
        transform: scaleY(1.4, 1.2);
        opacity: 0;
        top: -600px;
    }
}
 @-webkit-keyframes steam_Move {
    0% {
        -webkit-filter: blur(10px);
        -webkit-transform: rotateY(0deg);
        -webkit-transform: scale(1, 1);
        opacity: 0.75;
        top: 340px;
    }
    33% {
        -webkit-transform: rotateY(40deg);
        -webkit-transform: scale(0.8, 1.2);
    }
    66% {
        -webkit-transform: rotateY(2deg);
        -webkit-transform: scaleY(1.2, 0.6);
    }

    100% {
        -webkit-filter: blur(16px);
        -webkit-transform: rotateY(50deg);
        -webkit-transform: scaleY(1.4, 1.2);
        top: -600px;
        opacity: 0;
    }
}
</style>