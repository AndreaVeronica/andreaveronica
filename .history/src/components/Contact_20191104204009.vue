<template>
  <div id="container">
      {{ title }}

      <section class="allSections sectionSix">
        <div class="contactSection">
            <div class="contactContainer center-project">
                <h2 class="contact-h2 font-style" id="contact-link">Contact</h2>
            </div>
            <div class="contactContainer center-project">
                <div class="contact-icons">
                    <a href="https://www.linkedin.com/in/andreaairall" target="_blank"><img src="images/linkedin-logo.png" class="logo hvr-grow"></a>
                    <a href="https://github.com/AndreaVeronica" target="_blank"><img src="images/github-icon3.png" class="logo hvr-grow" id="small-logo"></a>
                    <a href="https://twitter.com/andrea_va_" target="_blank"><img src="images/twitter-logo2.png" class="logo hvr-grow" id="small-logo"></a>
                    <a href="https://www.instagram.com/_andreaveronica_" target="_blank"><img src="images/insta-logo.png" class="logo hvr-grow"></a>
                    <a href="mailto:andreaairall@gmail.com"><img src="images/email-logo.png" class="logo hvr-grow"></a>
                </div>

                <div v-for="link in links">  </siv>
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
  data() {
    return {
      title: "Contact",
      links: [
          { url: "https://www.linkedin.com/in/andreaairall"  , image: "../images/linkedin-logo.png" },
          { url: "https://github.com/AndreaVeronica"  , image: "../images/github-icon3.png" },
          { url: "https://twitter.com/andrea_va_" , image: "../images/twitter-logo2.png" },
          { url: "https://www.instagram.com/_andreaveronica_" , image: "../images/insta-logo.png" },
          { url: "mailto:andreaairall@gmail.com"  , image: "../images/email-logo.png" }
      ]
    }
  }
}
</script>

<style>

</style>