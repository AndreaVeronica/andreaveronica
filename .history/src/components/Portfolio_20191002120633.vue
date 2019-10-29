<template>
  <div id="container">
      <section class="allSections sectionThree">

            <div class="center-project">
                <h2 class="project-h2 font-style" id="project-link">{{ sectionName }}</h2>
            </div>

            <div class="center-project project-gallery">
              
                <div class="allProjects" v-for="project in projects">
                      <div class="project-container">
                          <div class="hovereffect">
                              <!-- <img v-bind:src="gameImage()" class="projectImage"> -->
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
                  </div>
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
  data() {
    return {
      sectionName: "Portfolio",
      projects
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
/*----  Section  3 -----*/

/* .sectionThree {
    height: 50vw;

}

.project-h2 {
    font-size: 32px;
    margin-bottom: 30px;
    margin-top: 30px;
} */

.center-project {
    display: flex;
    justify-content: center;

}

.project-gallery {
   display: flex;

   flex-direction: row;
   flex-wrap: wrap;

    /*margin-left: 30px;
    margin-right: 30px;*/
    width: 100%;

}

.project-headers{
    padding-top: 10px;
}

.projectImage {
    height: 18vw;
    width: 25vw;
    margin: 0 auto;
    border-radius: 5px;
    border: 10px solid rgba(255, 255, 255, 0.5);
}

.allProjects {
    text-align: center;
    width: 50%;
    height: 200px;
    min-width: 250px;
    display: flex;
    justify-content: space-around;
    margin-bottom:3vw;


}

.left-side{
  width: 100%;
  display: inline-block;
}

.left-project{
  margin-left: 21vw;
}

.right-project{
  margin-right: 21vw;
}

.info-project {
  color: white;
}

.info-project p{
  padding: 0 2vw;

}

.info-project button{
  background-color: white;
  opacity: 0.8;
  filter: alpha(opacity80);
}

.project-desc{
  margin-top: 1vw;
}
.project-desc2{
  margin-top: 1vw;
}
.project-tools{
  margin-top: 1vw;
  margin-bottom: 1vw;
}

</style>