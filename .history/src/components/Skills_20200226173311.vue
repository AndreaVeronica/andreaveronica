<template>
  <div id="container">
                <div class="center-project">
                <h2 class="section-h2 font-style-cursive" id="project-link">{{ sectionName }}</h2>
            </div>

      {{ msg }}
  </div>
</template>

<script>

export default {
  name: 'Skills',
  components: {
  },
  data() {
    return {
      msg: "Skills"
    }
  }
}
</script>

<style>

</style>