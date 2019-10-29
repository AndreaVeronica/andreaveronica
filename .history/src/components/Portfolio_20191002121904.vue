<template>
  <div id="container">
      <section class="allSections sectionThree">

            <div class="center-project">
                <h2 class="project-h2 font-style" id="project-link">{{ sectionName }}</h2>
            </div>

            <div class="center-project project-gallery">
              
               <div class="" v-for="project in projects">
                      <div class="">
                          <div class="">
                              <!-- <img v-bind:src="gameImage()" class="projectImage"> -->
                              <div class="">
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
              
                <!-- <div class="allProjects" v-for="project in projects">
                      <div class="project-container">
                          <div class="hovereffect">
                              <img v-bind:src="gameImage()" class="projectImage"> 
                              <div class="info-project overlay">
                                  <h2 class="project-h2">{{ project.name }}</h2>
                                  <p class="project-desc "> {{ project.desc }} </p>
                                  <p v-if="project.solo" class="project-desc2"> Individual Project</p>
                                  <p else class="project-desc2"> Group Project</p>
                                  <p class="project-tools"> {{ project.tools }} </p>
                                  <a v-bind:href="project.url" target="_blank"><button class="hvr-grow">View</button></a>
                              </div>
                          </div>
                      </div>
                  </div> -->


            </div>

    </section>
  </div>
</template>

<script>
import projects from '../data/projects.js'

export default {
  name: 'Portfolio',
  created() { 
      this.gameImage() 
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
    gameImage() {
    //    console.log(this.project.image)
    }
  }
}
</script>

<style>
.project-h2 {
    font-size: 32px;
    margin-bottom: 30px;
    margin-top: 30px;
}

.center-project {
    display: flex;
    justify-content: center;

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