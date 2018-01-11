<template lang="html">
  <v-container>
    <v-layout>
    <v-flex xs12 sm10 xl8  offset-sm1 offset-xl2>
      <v-card >
        <v-card-media :src="galleryItem.imgSrc" height="55vh">
        </v-card-media>
        <v-card-title primary-title>
          <div class="text-xs-center" style="margin: 0 auto">
            <h3
              class="display-2
                    font
                    fontCaps
                    fontAdventPro
                    mb-4"
            >{{galleryItem.workOnDisplay}}
            </h3>
            <h5
              class="mb-4
                    title
                    fontOswald"
            >By: {{galleryItem.artistName}}
            </h5>
            <div
              class="subheading
                    pr-5
                    pl-5
                    fontRoboCondens"
            >{{galleryItem.details}}
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn class="btn--midnightblue" to="/gallery">Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn class="btn--midnightblue" to="/exhibition">Exhibition</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['uid'],
  computed: {
    galleryItem () {
      return this.$store.getters.galleryItem(this.uid)
    }
  }
}
</script>
