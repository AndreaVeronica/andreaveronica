<template>
  <div id="container">
    <div class="navigation">
      <ul>
        <li> <router-link to="/"> About Me </router-link> </li> 
         <li> <router-link to="/portfolio"> Portfolio </router-link> </li> 
         <li> <router-link to="/skills"> Skills </router-link> </li> 
         <li> <router-link to="/photos"> Photos </router-link> </li> 
         <li> <router-link to="/contact"> Contact</router-link> </li> 
      </ul>
    </div>

    <div class="page-container">
      <router-view></router-view>
      
    </div>
  </div>
</template>

<script>
import AboutMe from './pages/AboutMe.vue'

export default {
  name: 'App',
  components: {
    AboutMe
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.navigation {
 height: 30px;
}
.page-container {

}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
  margin-left: 30px;
}
</style>