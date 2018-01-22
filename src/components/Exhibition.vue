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
                   <p>{{Biography}}</p>
                 </div>
                 <div v-if="!Biography" class="exhibition--musee">
                   <img src="src/assets/images/musee.jpg">
                 </div>
              </v-flex>
              <v-flex class="exhibition--rightContainer">
                 <div>
                   <v-btn
                        v-for="(item, index) in exhibitionMonth"
                        :key="index"
                        @click="sendMonth(item.month)"
                        dark
                        flat
                      >
                    {{item.month}}
                   </v-btn>
                 </div>
                 <v-divider dark></v-divider>
                 <div>
                   <ExhibitionMonth
                      :monthNow="currentMonth"
                      @passedBio="updateBio($event)"
                      >
                   </ExhibitionMonth>
                 </div>
               </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
    </v-flex>
  </v-container>
</template>

<script>
import ExhibitionMonth from './ExhibitionMonth.vue'
export default {
  components: {
    'ExhibitionMonth': ExhibitionMonth
  },
  methods: {
    sendMonth (theMonth) {
      this.currentMonth = theMonth
      this.Biography = ''
    },
    updateBio (event) {
      this.Biography = event
    }
  },
  computed: {
    exhibitionMonth () {
      return this.$store.getters.exhibition2018
    }
  },
  data () {
    return {
      currentMonth: 'January',
      Biography: '',
      backgroundImage: '../src/assets/images/paris.jpg'
    }
  }
}
</script>
