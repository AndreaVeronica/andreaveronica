import { profileImage } from 'module';
<template>
  <div id="page-container">
       <section class="allSections bio-section top-bio">
             <div class="top">
                <div class="left-bio">
                    <h1 class="bio-name font-style-cursive"> Andrea Airall </h1>
                    <h2 class="bio-title font-style-print"> Software Developer</h2>
                    <p> </p>
                </div>
                <div class="right-bio">
                    <div>
                        <img id="bio-image" v-bind:src="profileImage">
                    </div>
                </div>
            </div>
        
            <div></div>
        </section>
        <section class="allSections bio-section">
                <div class="center-bio">
                    <h2 class="section-h2 font-style-cursive" id="about-link"> {{ title }}</h2>
                    <div class="bio-text">
                        <p> Hey! My name is Andrea and I am a Software Developer residing in Atlanta, GA. </p>
                        <br>
                        <p> I enjoy creating aesthetically pleasing websites from visual design to back-end. I was an insurance auditor 
                          in a past life and one day I realized I needed to find a career that would allow me to be creative. 
                          After conversations with a friend, I started exploring web design. On route to becoming a web designer, 
                          I was introduced to the wonderful world of programming and I've been hooked ever since. </p>
                        <br>
                        <p> I'm excited to find opportunities that will help me expand the knowledge and skill set I learned at GA. </p>
                    </div>
                </div>
        </section>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'

export default {
  name: 'Bio',
  components: {

  },
  data() {
    return {
      title: "About Me",
      profileImage: profileImage
    }
  }
}
</script>

<style>
    .bio-section{
      height: 550px;
      display: flex;
      justify-content: space-between; 
      flex-wrap: wrap;
      text-align: center;
      align-items: center;
    }
/* 
  .top-bio {
    background-image: url("../images/coffee1.jpg");
    background-size: cover;
    z-index: -1;
     display: flex;
    justify-content: space-between;
    align-content: space-between;
    text-align: center;
    padding: 30px;
    }

    .bio-div{
    z-index: 10;
    display: flex;
    background-size: cover;
    background-color: #022c31;
    opacity: 0.5;
    }
     */
  .left-bio {
    width: 50%;
    /* align-self: center; */
  }
  .right-bio{
    width: 50%;
    /* align-self: center; */
  }
  .bio-name {
    font-size: 100px;
     margin-top: 0px;
    margin-bottom: 0px;
  }
  .bio-title {
    font-size: 32px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  /* #bio-image {
    height: 300px;
  } */

  .center-bio{
    width: 60%;
    margin: 0 auto;
  }
  .bio-text,p {
    font-size: 24px;
    margin: 0 auto;
  }
#bio-image {
    height: 300px;
    border-radius: 5px;
    border: 10px solid rgba(255, 255, 255, 0.5);
}
</style>