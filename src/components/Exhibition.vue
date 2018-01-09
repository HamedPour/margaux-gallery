<template lang="html">
  <div class="exhibition--jumbotron">
    <v-parallax
      height="85vh"
      jumbotron
    >
      <v-container >
        <v-layout dark row wrap>
          <v-flex >
             <h1
              class="fontCaps
                    fontAdventPro
                    exhibition--mainTitle
                    ">
               Exhibition: <br>Birth of Modernity
             </h1>
             <h5 class="pt-5 pl-3 subheading">
               Currently open to the public at the vibrant Musée d'Orsay
             </h5>
          </v-flex>
          <v-flex class="exhibition--rightContainer">
             <div>
               <v-btn dark flat >January</v-btn>
               <v-btn dark flat >February</v-btn>
             </div>
             <v-divider dark></v-divider>
             <div>
               <h4 class="exhibition--rightContainer__headline">Works by great french artistis:
               </h4>
               <h5>Eugène Delacroix , Élisabeth Vigée Le Brun, Berthe Morisot, and Eugène Delacroix</h5>
             </div>
           </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
  </div>
</template>
<script>
export default {
  data () {
    return {
      backgroundImage: '../src/assets/images/paris.jpg'
    }
  }
}
</script>

<style scoped>
</style>
