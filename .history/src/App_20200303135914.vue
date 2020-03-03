<template>
  <div id="container">
    <!-- <div class="navigation dark">
      <span> <router-link class="font-style-cursive" to="/"> About Me </router-link> </span>
      <span> <a class="font-style-cursive" href="/#project-link">Portfolio</a> </span>
      <span> <a class="font-style-cursive"  href="/#skills-link">Skills</a> </span>
      <span> <router-link class="font-style-cursive" to="/photos"> Photos </router-link> </span>
      <span> <router-link class="font-style-cursive" to="/"> Contact</router-link>  </span>
    </div> -->

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
   div.navigation span {
    flex-direction: row;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 24px;
  }
  .page-container {
    margin-top: 80px;
  }
</style>