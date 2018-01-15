<template lang="html">
  <v-container class="exhibition--bg">
    <v-flex xl10 offset-xl1>
        <v-parallax
        height="100%"
          jumbotron
        >
          <v-container style="min-height:80vh">
            <v-layout dark row wrap>
              <v-flex md7>
                 <h1
                  class="fontCaps
                        fontAdventPro
                        exhibition--mainTitle
                        ">
                   Exhibition: <br>Birth of Modernity
                 </h1>
                 <h5 class="pt-2 body-2">
                   Currently open to the public at the vibrant Musée d'Orsay
                 </h5>
                 <div class="exhibition--bioBox">
                   <p v-if="bioIsVisible">{{artistBio}}</p>
                 </div>
                 <div v-if="!bioIsVisible" class="exhibition--musee">
                   <img src="src/assets/images/musee.jpg">
                 </div>
              </v-flex>
              <v-flex class="exhibition--rightContainer">
                 <div>
                   <v-btn dark flat
                      @click="isFeb=true; bioIsVisible=false">
                    January
                   </v-btn>
                   <v-btn dark flat
                      @click="isFeb=false; bioIsVisible=false">
                    February
                   </v-btn>
                 </div>
                 <v-divider dark></v-divider>
                 <div>
                   <JanExhibition
                      v-if="isFeb"
                      @passArtistBio="setArtistBio($event)">
                   </JanExhibition>
                   <FebExhibition v-if="!isFeb"
                      @passArtistBio="setArtistBio($event)">
                   </FebExhibition>
                 </div>
               </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
    </v-flex>
  </v-container>
</template>

<script>
import JanuaryExhibition from './months/January.vue'
import FebruaryExhibition from './months/February.vue'
export default {
  components: {
    'JanExhibition': JanuaryExhibition,
    'FebExhibition': FebruaryExhibition
  },
  methods: {
    setArtistBio (event) {
      this.bioIsVisible = !this.bioIsVisible
      this.artistBio = event
    }
  },
  data () {
    return {
      artistBio: '',
      isFeb: true,
      bioIsVisible: false,
      backgroundImage: '../src/assets/images/paris.jpg'
    }
  }
}
</script>
