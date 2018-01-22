<template lang="html">
  <v-container grid-list-xl>
    <v-flex >
      <h1 class="text-xs-center display-3 mt-3 fontAdventPro">Artists</h1>
      <v-divider class="mb-5"></v-divider>
    </v-flex>
    <v-layout row wrap>
      <v-flex  xs12 md6 xl3 v-for="(artist, index) in galleryData" :key="index">
        <v-card>
        <v-container>
          <v-layout style="height:580px" row wrap>
              <v-flex >
                <v-card flat>
                  <v-card-media
                    :src="artist.artistImage"
                    style="width: 100%;min-height: 300px; cursor:pointer"
                    @click="toArtistWorks(artist.uid)"
                  >
                  </v-card-media>
                  <h1
                      class="
                              text-xs-center
                              fontCaps
                              fontOswald
                              fontSpread"
                    >{{artist.artistName}}
                  </h1>
                  <h3
                      class="
                              fontCaps
                              title
                              pt-2
                              pb-2
                              text-xs-center"
                    >artwork: {{artist.workOnDisplay}}
                  </h3>
                  <p class="text-xs-center pr-3 pl-3">{{artist.details}}</p>
                </v-card>
              </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    methods: {
      toArtistWorks (id) {
        return this.$router.push('/gallery/' + id)
      }
    },
    computed: {
      galleryData () {
        return this.$store.getters.galleryData
      }
    }
  }
</script>

<style lang="css">
</style>
