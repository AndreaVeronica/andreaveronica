<template>
  <div class="dark" id="container">
          <div class="center-project">
             <h2 class="section-h2 font-style-cursive" id="project-link">{{ title }}</h2>
          </div>
          <div>
            <span v-for="skill in skills"> {{</span>
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

</style>