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
          <v-layout  row wrap>
              <v-flex >
                <v-card style="height:550px" flat>
                  <v-card-media
                    :src="artist.portraitURL"
                    style="width: 100%;min-height: 300px; cursor:pointer"
                    @click="toArtistWorks(artist.id)"
                  >
                  <div v-if="loading" style="width:100%; text-align:center">
                    <span style="position:relative; top: 40%">
                      <v-progress-circular indeterminate :size="50" :width="7" color="primary">
                      </v-progress-circular>
                    </span>
                  </div>
                  </v-card-media>
                  <h1
                      class="
                              text-xs-center
                              fontCaps
                              mt-4
                              fontOswald
                              fontSpread"
                    >{{artist.artistName}}
                  </h1>
                  <h3
                      class="
                              fontCaps
                              title
                              pt-4
                              pb-4
                              text-xs-center"
                    >artwork: {{artist.artworkTitle}}
                  </h3>
                  <p  class="text-xs-center pr-3 pl-3">{{artist.artistDetails}}</p>
                </v-card>
              </v-flex>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="toArtistWorks(artist.id)">Artwork</v-btn>
              <v-spacer></v-spacer>
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
        return this.$store.getters.artistBank
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
