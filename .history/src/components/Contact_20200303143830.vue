<template>
  <div id="container contact">
      <section>
        <div class="contactSection">
            <div class="contactContainer center-project">
                <h2 class="section-h2 font-style-cursive" id="contact-link">{{ title }}</h2>
            </div>
            <div class="contactContainer center-project">
                <div v-for="link in links">   
                    <a :href="link.url" target="_blank"><img v-bind:src="`${link.image}`" class="logo hvr-grow"></a>
                </div>
            </div>
            <div class="contactContainer center-project">
                <h4 class="footer">&copy; Andrea Airall 2019</h4>
            </div>
        </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Contact',
  components: {
  },
   computed: {
  },
  data() {
    return {
      title: "Contact",
      links: [
          { url: "https://www.linkedin.com/in/andreaairall"  , image: require("../images/linkedin-logo.png") },
          { url: "https://github.com/AndreaVeronica"  , image: require("../images/github-icon3.png") },
          { url: "https://twitter.com/andrea_va_" , image: require("../images/twitter-logo2.png") },
          { url: "https://www.instagram.com/_andreaveronica_" , image: require("../images/insta-logo.png") },
          { url: "mailto:andreaairall@gmail.com"  , image: require("../images/email-logo.png") }
      ]
    }
  },
    methods: {
  }
}
</script>

<style>

</style>