<template lang="html">
  <v-container class="fontCaps ">
    <h3 class="display-1 fontAdventPro pb-2">Berthe Morisot: the new world</h3>
    <p>
      The portrait shows the subject sitting upright and sideways in a chair, with her face and chest turned slightly towards the viewer: a posture derived from the 'pyramid' image used to depict a sitting Madonna. Her left arm sits comfortably on the armrest of the chair and is clasped by the hand of her right arm which crosses her front. The slightly protective position of her arms, as well as the armrest, creates a sense of distance between sitter and spectator.
    </p>
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
      FebBio: 'Morisot was born in Bourges, France, into an affluent bourgeois family. Her father, Edmé Tiburce Morisot, was the prefect (senior administrator) of the department of Cher. He also studied architecture at École des Beaux Arts.[3] Her mother, Marie-Joséphine-Cornélie Thomas, was the great-niece of Jean-Honoré Fragonard, one of the most prolific Rococo painters of the ancien régime.[4] She had two older sisters, Yves (1838–1893) and Edma (1839–1921), plus a younger brother, Tiburce, born in 1848. The family moved to Paris in 1852, when Morisot was a child.'
    }
  },
  methods: {
    toArtist () {
      return this.$router.push('/gallery/004')
    },
    showBio () {
      this.$emit('passArtistBio', this.FebBio)
    }
  }
}
</script>
