<template lang="html">
  <v-container>
    <v-layout>
    <v-flex xs12 sm10 xl8  offset-sm1 offset-xl2>
      <v-card >
        <v-card-media
          :src="galleryItem.artworkURL"
          style="cursor:pointer"
          @click="imageFullscreen"
          height="55vh">
        </v-card-media>
        <v-card-title primary-title>
          <div class="text-xs-center" style="margin: 0 auto">
            <h3
              class="display-2
                    font
                    fontCaps
                    fontAdventPro
                    mb-4"
            >{{galleryItem.artworkTitle}}
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
            >{{galleryItem.artistDetails}}
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

  <v-layout>
      <v-flex>
        <v-dialog v-model="fullImage" >
          <v-card>
            <v-card-media
              :src="galleryItem.artworkURL"
              @click="fullImage = false"
              :height="imageHight + 'vh'"
              >
              <v-spacer></v-spacer>
              <h1 class="pr-3 pt-3">
                <v-icon
                    style="color:black; font-size:3.4rem; cursor:pointer"
                    @click="fullImage = false"
                  >cancel
                </v-icon>
              </h1>
            </v-card-media>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      fullImage: false,
      imageHight: '180'
    }
  },
  props: ['id'],
  computed: {
    galleryItem () {
      return this.$store.getters.artistBankItem(this.id)
    }
  },
  methods: {
    imageFullscreen () {
      this.fullImage = true
      if (window.innerWidth >= 1350) {
        this.imageHight = '200'
      } else if (window.innerWidth < 1350 && window.innerWidth >= 800) {
        this.imageHight = '110'
      } else if (window.innerWidth < 800) {
        this.imageHight = '40'
      }
    }
  }
}
</script>
