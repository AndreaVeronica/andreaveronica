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
                    <p> I enjoy creating aesthetically pleasing websites from visual design to back-end. I was an insurance auditor in a past life and one day I realized I needed to find a career that would allow me to be creative. Years later and I am still
                        just curious and interested in </p>
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

Last name
Airall
Phone country code
United States (+1)
Mobile phone number
7863014408
Ext
No answer provided
Email address
andreaairall@gmail.com
Home address
Edit
City
Atlanta, Georgia, United States
Resume
Edit
Andrea Airall - Resume.pdf
Last used on 2/23/2020

Cover letter
No answer provided
Diversity
Edit
Gender
Female
Race and ethnicity
Black or African American
Veteran Status
I am not a protected veteran
Disability Status
No, I don't have a disability
Screening questions
Edit
Website
andreaairall.com
LinkedIn Profile
https://www.linkedin.com/in/andreaairall
Additional
Edit
GitHub Profile
https://github.com/AndreaVeronica
Are you legally authorized to work in the United States?
Yes
Will you now or in the future require visa sponsorship for employment?
No
If you answered yes please provide more information.
No answer provided
Please provide your current location:
Atlanta, GA
Why do you want to work at GitHub?
Github is arguably the most widely used version control technology that is used by developers. It would be amazing to be able to contribute to this technology.
Why do you feel you would be a fit for this role?
As an engineer, I tend to problem solve differently than many of my peers. I approach problems focusing on the business needs of a new feature or bug fix and then think of a coding solution.
How did you hear about this job?
LinkedIn
Have you ever worked for LinkedIn, Microsoft, or any of Microsoft's affiliates in any capacity?
No
Check all that may apply.
None of the above
If yes, in what capacity?
No answer provided
Pick a feature or screen of a developer tool you use and tell us how you’d make it better. - What problems do you see with the current approach? -What challenges do you anticipate in implementing the improvement? For example, you could choose your favorite editor, git client, or GitHub itself.
On Github when creating a pull request the individual who creates this pull request has the ability to assign reviewers to review the pull request. I often find when you have selected a reviewer the user has to click somewhere else on the page so that they can move on to another action. My change would be have the focus move from the most recently selected reviewer once they have been selected.
Describe a time when you advocated for a change that was important to the community or your team. -What was it? -Why was it so important? -How did you approach the subject with your team? -Was it successful? Why or why not?
Currently, my product team is going through a front end migration from Angular 1.6 to VueJs. In order to maintain feature parity we have had to create a little tech debt in order to be able to move forward. It got to the point where it where we had to make the decision to just rip the bandaid and create a new Vue app vs our hybrid Vue/Angular app. The flow of our application was one user experience, but two different UI's. I proposed that we move the Vue pages from our hybrid app into our other Vue only UI since they technically were one experience. We are still in process of migrating to Vue, but my team agreed that this would be the best course of action given that our main focus was to make sure our migration did not hinder our team being able to deliver new features.