<template lang="html">
  <v-container class="fontCaps ">
    <h3 class="display-1 fontAdventPro pb-2">Élisabeth vigée le brun: winter of the mind</h3>
    <p class="title fontAdventPro">An exibition to benefit great london street children's hospital</p>
    <span >12-22 January 2018</span>
    <v-divider class="mb-1 mt-1" dark></v-divider>
    <h3 class="fontSpread" style="cursor:pointer" @click="toArtist">Artists page</h3>
    <v-divider  class="mb-1 mt-1" dark></v-divider>
    <h3 @click="showBio" style="cursor:pointer" class="fontSpread">Biography</h3>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      JanBio: 'Born in Paris on 16 April 1755, Marie-Louise-Élisabeth Vigée was the daughter of a portraitist and fan painter, Louis Vigée, from whom she received her first instruction. Her mother, Jeanne (née Maissin), was a hairdresser. She was sent to live with relatives in Épernon until the age of 6, when she entered a convent, where she remained for five years. Her father died when she was 12 years old. In 1768, her mother married a wealthy jeweler, Jacques-François Le Sèvre, and shortly after, the family moved to the Rue Saint-Honoré, close to the Palais Royal.'
    }
  },
  methods: {
    toArtist () {
      return this.$router.push('/gallery/001')
    },
    showBio () {
      this.$emit('passArtistBio', this.JanBio)
    }
  }
}
</script>

<style lang="css">
</style>
