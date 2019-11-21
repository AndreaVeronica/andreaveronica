<template>
  <div>
       <section class="allSections bio-section top-bio">
            <div class="bio-bottom"> 
                <div class="left-bio-bottom"> 
                    <span class="left-fav-section"> A Few Of Favorite Things: </span>
                </div>
                <div class="right-bio-bottom"> 
                  <!-- <h2 class="sentence"> 
                      <div class="slidingVertical">
                        <span class="right-fav-section" v-for="t in things"> {{ t.thing }} </span>
                      </div>
                  </h2> -->
                  <span>
                      {{ displayTextFaded }}
                  </span>
                  <span>
                      {{ displayTextSolid }}
                  </span>
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
   created() { 
     this.initializeDisplay()
    //  this.displayTextSolid = this.things[0].thing
   
  },
  computed: {
      things() {
        console.log(favoriteThings, 'favthings')
          return favoriteThings
      }
  },
  data() {
    return {
      title: "About Me",
      displayTextSolid: '',
      displayTextFaded: ''
    }
  },
  methods: {
    setDisplayTextFaded() {
      
    },
    setDisplayTextSolid(){
       let facts = this.things

            facts.forEach((x, i) => {
              setTimeout(() => {
              this.getNextText(x)
            }, i * 1500);
            })
    },
    initializeDisplay() {
       this.displayTextSolid = this.things[0].thing
       setTimeout(this.setDisplayTextSolid, 2000);
    },
    getNextText(x) {
        // this.displayTextFaded = this.displayTextSolid
        this.displayTextSolid = x.thing
        console.log(this.displayTextSolid, 'blah  in here')
        if(x.id === this.thing.length-1) {
          setDisplayTextSolid
        }
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
</style>