<template>
  <div class="dark" id="container">
          <div class="center-project">
             <h2 class="section-h2 font-style-cursive" id="project-link">{{ title }}</h2>
          </div>
          <div class="skills-container"> 
            <div class="skills" v-for="skill in skills">
              <span> {{skill}}</span>
            </div>
          </div>
  </div>
          </div>
  </div>
          </div>
  </div>
</template>

<script>
import Skills from '../data/skills'
export default {
  name: 'Skills',
  components: {
  },
  data() {
    return {
      title: "Skills",
      skills: Skills
    }
  }
}
</script>

<style>
  .skills {
    text-align: center;
    font-size: 20px;
  }
</style>