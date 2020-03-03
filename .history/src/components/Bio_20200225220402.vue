<template>
    <div id="page-container bio-wrapper">
        <section class="bio-section">
            <div class="bio-top">
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
            <div class="bio-bottom">
                <favorite-things></favorite-things>
            </div>
        </section>
        <section class="">
            <div class="center-bio">
                <h2 class="section-h2 font-style-cursive" id="about-link"> {{ title }}</h2>
                <div class="bio-text">
                    <p> Hey! My name is Andrea and I am a Software Developer residing in Atlanta, GA. </p>
                    <br>
                    <p> I enjoy creating aesthetically pleasing websites from visual design to back-end and I thrive in situations that allow me to be creative as well as think critically. </p>
                    <br>
    
    
    
                    <br>
                    <!-- Hi, my name is Andrea and I’m a full-stack developer. I have a passion for web development with an eye for visual design. In my free time, I can be found either at a coffee shop or taking snapshots all around Atlanta.
        
        I enjoy being involved with an application from UI to Backend and I thrive in situations that allow me to be creative as well as think critically. I’m looking for a fast paced work environment that constantly provides exposure to new projects and technologies.
        
        Tools and Skills:
        • HTML, CSS, Javascript, Jquery
        • Vue
        • AngularJS
        • Ruby, Rails
        • Adobe Photoshop, Illustrator, InDesign --> 
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import profileImage from '../images/profilepic.jpg'
import favoriteThings from '../data/favoriteThings';
import FavoriteThings from '../components/FavoriteThings.vue';

export default {
    name: 'Bio',
    components: {
        FavoriteThings
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
.bio-section {
    height: 550px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    padding-top: 60px;
}

.bio-wrapper {
      margin-top: 50px;
}

.bio-top {
    width: 100%;
    display: flex;
}

.bio-bottom {
    width: 100%;
    margin-top: 0px;
    /* height: 300px; */
    display: flex;
}

.left-bio {
    width: 50%;
    /* align-self: center; */
}

.right-bio {
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

.right-bio-bottom {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: space-between;
}

.right-fav-section {
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

.center-bio {
    width: 60%;
    margin: 0 auto;
}

.center-bio h2 {
    text-align: center;
}

.bio-text,
p {
    font-size: 24px;
    margin: 0 auto;
}

#bio-image {
    height: 300px;
    border-radius: 5px;
    border: 10px solid rgba(255, 255, 255, 0.5);
}
</style>

