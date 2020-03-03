<template>
            <div class="favorite-things-section"> 
                <div class="left-bio-bottom"> 
                    <span class="left-fav-section"> A Few Of Favorite Things: </span>
                </div>
                <div class="right-bio-bottom">   
                  <span class="solid-text">
                      {{ displayTextSolid }}
                  </span>
                </div>
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
       this.setDisplayTextSolid()
    },
    getNextText(x) {
        this.displayTextSolid = x.thing

        if(x.id === this.things.length-1 ) {
          this.setDisplayTextSolid()
        }
    }
  }
}
</script>

<style>
    .favorite-things-section{
      /* height: 300px; */
      width: 100%;
      display: flex;
      margin-top: 50px;
      justify-content: center;

    }
  /* .bio-bottom {
    width: 100%;
    height: 400px;
    display: flex;
  } */
    .left-bio-bottom {
    width: 50%;
    height: 50px;;
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
  .solid-text{
    font-size: 32px;
  }
</style>