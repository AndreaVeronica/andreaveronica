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
<!-- 
                <div class="allProjects" id="projectOne">
                    <div class="left-project">
                        <div class="hovereffect">
                            <img v-bind:src="gameImage" class="projectImage">
                            <div class="info-project overlay">
                                <h2 class="project-h2">Tic-Tac-Toe</h2>
                                <p class="project-desc "> A version of a childhood classic with a personalized twist. </p>
                                <p class="project-desc2"> Individual Project</p>
                                <p class="project-tools">HTML, CSS, JS</p>
                                <a href="http://andreaveronica.github.io/Tic-Tac-Toe/" target="_blank"><button class="hvr-grow">View</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="allProjects" id="projectTwo">
                    <div class="right-project">
                        <div class="hovereffect">
                            <img src="images/PhotoShare.png" class="projectImage">
                            <div class="info-project overlay">
                                <h2 class="project-h2">PhotoShare</h2>

                                <p class="project-desc"> A photo sharing app that allows users to share photos with other users. </p>
                                <p class="project-desc2"> Individual Project</p>
                                <p class="project-tools" >HTML, CSS, JS, Ruby on Rails</p>
                                <a href="https://photo-share-1.herokuapp.com/" target="_blank"><button class="hvr-grow">View</button></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="allProjects" id="projectThree">
                    <div class="left-project">
                        <div class="hovereffect">
                          <img src="images/Play-On-Words.png" class="projectImage">
                           <div class="info-project overlay">
                              <h2 class="project-h2">Play-On-Words</h2>
                              <p class="project-desc"> A web app that generates word clouds from collections of text. </p>
                              <p class="project-desc2"> Group Project</p>
                              <p class="project-tools"> MongoDB, Express.js, Node.js</p>
                              <a href="https://afternoon-bastion-47484.herokuapp.com/" target="_blank"><button class="hvr-grow">View</button></a>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="allProjects" id="projectFour">
                    <div class="right-project">
                        <div class="hovereffect">
                          <img src="images/Note-it.png" class="projectImage">
                          <div class="info-project overlay">
                              <h2 class="project-h2">Note-it</h2>
                              <p class="project-desc"> A web app that allows users to create virtual sticky notes and save them to their profile. </p>
                              <p class="project-desc2"> Individual Project</p>
                              <p class="project-tools">MongoDB, Express.js, AngularJS, Node.js</p>
                              <a href="http://note-it-1.herokuapp.com/#/" target="_blank"><button class="hvr-grow">View</button></a>
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