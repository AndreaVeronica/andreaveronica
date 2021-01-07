<template>
      <section class="container">
            <div class="center-project">
                <h2 class="section-h2 font-style-cursive" id="project-link">{{ sectionName }}</h2>
            </div>

            <div class="center-project project-gallery">
                <div class="project-container" v-for="project in topProjects">
                      <div class="">
                          <div class="hovereffect">
                              <img v-bind:src="project.image" class="projectImage">
                              <div class="overlay">
                                  <h2 class="project-h2">{{ project.name }}</h2>
                                  <p class="project-desc "> {{ project.desc }} </p>
                                  <a v-bind:href="project.url" target="_blank"><button class="hvr-grow">View</button></a>
                              </div>
                          </div>
                      </div>
                
                </div>
            </div>

        <div class="center-project project-gallery">
                <div class="project-container" v-for="project in bottomProjects">
                      <div class="">
                          <div class="hovereffect">
                              <img v-bind:src="project.image" class="projectImage">
                              <div class="overlay">
                                  <h2 class="project-h2">{{ project.name }}</h2>
                                  <p class="project-desc "> {{ project.desc }} </p>
                                  <a v-bind:href="project.url" target="_blank"><button class="hvr-grow">View</button></a>
                              </div>
                          </div>
                      </div>
                
                </div>
            </div>
    </section>
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
      topProjects() {
          return projects.filter(project => project.row === 'top')
      },
      bottomProjects() {
          return projects.filter(project => project.row === 'bottom')
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
    height: 600px;
    margin-top: 50px;
}

.project-h2 {
    font-size: 32px;
    margin-bottom: 30px;
    margin-top: 20px;
}

.center-project {
    display: flex;
    justify-content: center;
}

.project-gallery {
    
}

.project-container {
    margin: 10px;
}

.project-desc {
    font-size: 16px;
    color: white;
}
.project-desc2 {
    font-size: 16px;
}
</style>