<template>
  <div id="container">
    <div class="navigation dark">
      
      <ul>
        <li> <router-link to="/"> About Me </router-link> </li> 
         <li> <a href="/#project-link">Portfolio</a> </li>
         <li> <a href="/#skills-link">Skills</a></li>
         <li> <router-link to="/photos"> Photos </router-link> </li> 

                <li><a href="/#contact-link">Contact</a></li>
         <li> <router-link to="/contact"> Contact</router-link> </li> 
      </ul>
    </div>

       <!-- <li class="font-style"><a class="hvr-grow" href="#about-link">About Me</a></li>
                <li class="font-style"><a class="hvr-grow" href="#project-link">Portfolio</a></li>
                <li class="font-style"><a class="hvr-grow" href="#skills-link">Skills</a></li> -->
               <!--  <li class="font-style"><a class="hvr-grow" href="#photo-link">Photography</a></li> -->
                <!-- <li class="font-style"><a class="hvr-grow" href="#contact-link">Contact</a></li> -->
    <!-- <navigation></navigation> -->

    <div class="page-container">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
    }
  }
}
</script>

<style>
  .navigation {
    height: 40px;
    display: flex;
    justify-content: space-between;
  }
   /* div.navigation  {
    flex-direction: row;
  } */
  .nav-links {
  display: flex;
}
</style>