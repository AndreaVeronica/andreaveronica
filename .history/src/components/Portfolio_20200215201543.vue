<template>
  <!-- <div class="container"> -->
      <section class="container">

            <div class="center-project">
                <h2 class="project-h2 font-style" id="project-link">{{ sectionName }}</h2>
            </div>

            <div class="center-project project-gallery">
                <div class="project-container" v-for="project in projects">
                      <div class="">
                          <div class="hovereffect">
                              <img v-bind:src="project.image" class="projectImage">
                              <div class="overlay">
                                  <h2 class="project-h2">{{ project.name }}</h2>
                                  <p class="project-desc "> {{ project.desc }} </p>
                                  <p v-if="project.solo" class="project-desc2"> Individual Project</p>
                                  <p else class="project-desc2"> Group Project</p>
                                  <p class="project-tools"> {{ project.tools }} </p>
                                  <a v-bind:href="project.url" target="_blank"><button class="hvr-grow">View</button></a>
                              </div>
                          </div>
                      </div>
                
                </div>
            </div>

        <div class="center-project project-gallery">
                <div class="project-container" v-for="project in projects">
                      <div class="">
                          <div class="hovereffect">
                              <img v-bind:src="project.image" class="projectImage">
                              <div class="overlay">
                                  <h2 class="project-h2">{{ project.name }}</h2>
                                  <p class="project-desc "> {{ project.desc }} </p>
                                  <p v-if="project.solo" class="project-desc2"> Individual Project</p>
                                  <p else class="project-desc2"> Group Project</p>
                                  <p class="project-tools"> {{ project.tools }} </p>
                                  <a v-bind:href="project.url" target="_blank"><button class="hvr-grow">View</button></a>
                              </div>
                          </div>
                      </div>
                
                </div>
            </div>
    </section>
  <!-- </div> -->
</template>

<script>
import projects from '../data/projects.js'

export default {
  name: 'Portfolio',
  created() { 
      console.log(this.projects) 
  },
  components: {
  },
  computed: {
      projects() {
          return projects
      }
  },
  data() {
    return {
      sectionName: "Portfolio",
    }
  },
  methods: {
      projectImage(imgUrl) {
        return imgUrl
      }
  }
}
</script>

<style>
.container {
    height: 700px;
}

.project-h2 {
    font-size: 32px;
    margin-bottom: 30px;
    margin-top: 30px;
}

.center-project {
    display: flex;
    justify-content: center;
}

.project-gallery {
    
}

.project-container {
    width: 500px;
    margin: 10px;
}
/* 
.project-gallery {
   display: flex;

   flex-direction: row;
   flex-wrap: wrap;

    margin-left: 30px;
    margin-right: 30px;
    width: 100%;

} */
</style>