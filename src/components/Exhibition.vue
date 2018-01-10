<template lang="html">
  <v-container class="exhibition--bg">
    <v-flex xl10 offset-xl1>
        <v-parallax
          height="80vh"
          jumbotron
        >
          <v-container >
            <v-layout dark row wrap>
              <v-flex md7>
                 <h1
                  class="fontCaps
                        fontAdventPro
                        exhibition--mainTitle
                        ">
                   Exhibition: <br>Birth of Modernity
                 </h1>
                 <h5 class="pt-5 pl-3 subheading">
                   Currently open to the public at the vibrant <b class="title">Musée d'Orsay</b>
                 </h5>
                 <div class="fontJustify subheading pt-5 mt-5 ml-5" style="max-width:400px;">
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 </div>
              </v-flex>
              <v-flex class="exhibition--rightContainer">
                 <div>
                   <v-btn dark flat @click="isFeb=true">January</v-btn>
                   <v-btn dark flat @click="isFeb=false">February</v-btn>
                 </div>
                 <v-divider dark></v-divider>
                 <div>
                   <h4 class="exhibition--rightContainer__headline pl-3">Works by great french artistis:
                   </h4>
                   <JanExhibition v-if="isFeb"></JanExhibition>
                   <FebExhibition v-if="!isFeb"></FebExhibition>
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
  data () {
    return {
      isFeb: true,
      backgroundImage: '../src/assets/images/paris.jpg'
    }
  }
}
</script>

<style scoped>
</style>
