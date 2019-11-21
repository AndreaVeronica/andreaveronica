<template>
  <div id="page-container">
       <section class="allSections bio-section top-bio">
            <div class="bio-bottom"> 
                <div class="left-bio-bottom"> 
                    <span class="left-fav-section"> A Few Of Favorite Things: </span>
                </div>
                <div class="right-bio-bottom"> 
                  <h2 class="">
                        <span class="right-fav-section" v-for="t in things"> {{ t.thing }} </span>
                  </h2>
                </div>
            </div>

        </section>
  </div>
</template>

<script>
import favoriteThings from '../data/favoriteThings';

export default {
  name: 'FavoriteThings',
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
  .bio-bottom {
    width: 100%;
    height: 400px;
    display: flex;
    /* padding-top: 60px; */
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
  /*Sentence*/
.sentence{
     color: teal;
     font-size: 30px;
     text-align: left;
}

/*Vertical Sliding*/
.slidingVertical{
	display: inline;
	text-indent: 8px;
}
.slidingVertical span{
	animation: topToBottom 12.5s linear infinite 0s;
	-ms-animation: topToBottom 12.5s linear infinite 0s;
	-webkit-animation: topToBottom 12.5s linear infinite 0s;
	color: red;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.slidingVertical span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.slidingVertical span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.slidingVertical span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.slidingVertical span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*topToBottom Animation*/
@-moz-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateY(-50px); }
	10% { opacity: 1; -moz-transform: translateY(0px); }
	25% { opacity: 1; -moz-transform: translateY(0px); }
	30% { opacity: 0; -moz-transform: translateY(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateY(-50px); }
	10% { opacity: 1; -webkit-transform: translateY(0px); }
	25% { opacity: 1; -webkit-transform: translateY(0px); }
	30% { opacity: 0; -webkit-transform: translateY(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes topToBottom{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateY(-50px); }
	10% { opacity: 1; -ms-transform: translateY(0px); }
	25% { opacity: 1; -ms-transform: translateY(0px); }
	30% { opacity: 0; -ms-transform: translateY(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

</style>