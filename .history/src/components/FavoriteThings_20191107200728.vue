import { profileImage } from 'module';
<template>
  <div id="page-container">
       <section class="allSections bio-section top-bio">
      
            <div class="bio-bottom"> 
                <div class="left-bio-bottom"> 
                    <span class="left-fav-section"> A Few Of Favorite Things: </span>
                </div>
                <div class="right-bio-bottom"> 
                    <div class="right-fav-section" v-for="t in things">  
                        <span> {{ t.thing }} </span>
                    </div>
                </div>
            </div>

        </section>
  </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import favoriteThings from '../data/favoriteThings';

export default {
  name: 'Bio',
  components: {

  },
  computed: {
      things() {
          return favoriteThings
      }
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
  .bio-top {
    width: 100%;
    display: flex;
  }   
  .bio-bottom {
    width: 100%;
    height: 400px;
    display: flex;
    padding-top: 60px;
  }
  .left-bio {
    width: 50%;
    
    /* align-self: center; */
  }
  .right-bio{
    width: 50%;
  
    /* justify-content: right; */
    /* align-self: center; */
  }
    .left-bio-bottom {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    /* align-self: center; */
  }
  .right-bio-bottom{
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-between;
  }
  .right-fav-section{
    width: 100%;
    height: 30px;
    text-align: left;

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