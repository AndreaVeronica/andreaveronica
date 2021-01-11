<template>
  <div id="container">
    <div>  
        <Slide class="nav-component" right>
            <a class="hvr-grow" href="#about-link">About Me</a>
                <a class="hvr-grow" href="#project-link">Portfolio</a>
                <a class="hvr-grow" href="#skills-link">Skills</a>   
                <a class="hvr-grow" href="#contact-link">Contact</a>
        </Slide>
        <div class="add-space">
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'  

export default {
  name: 'App',
  components: {
    Slide
  },
  data() {
    return {
    }
  },
  computed: {
      photosUrl() {
          return favoriteThings
      }
  },
  methods: {
      goToAboutMe() {
        this.$router.push({ name: 'about' });
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

  .add-space {
    height: 30px;
  }


/* Slide component overrides  */
.bm-menu {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #022c31;opacity:0.9;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  font-family: 'Shadows Into Light Two', cursive;
}

.bm-burger-bars {
  background-color: #022c31;
}

.bm-item-list {
  color: #b8b7ad;
  margin-left: 10%;
  font-size: 20px;
}

.bm-item-list>*>span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

 .bm-overlay  {
  background-image: url("../images/lightteal.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -3;
  font-family: 'Raleway', sans-serif;
  color: #022c31;
  margin: 0 auto;
}
</style>