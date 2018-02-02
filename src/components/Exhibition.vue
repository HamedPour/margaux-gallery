<template lang="html">
  <div>
    <h1 class="display-3 text-xs-center fontAdventPro mt-4">Exhibitions</h1>
    <v-divider class="mb-4"></v-divider>
    <v-container>
      <v-layout wrap>
      <v-flex  xs12 lg6 class="pa-2 mb-5"
          v-for="(item, index) in exhibitionData" :key="index">
        <v-card >
          <v-card-media
            class="white--text"
            height="250px"
            style="cursor:pointer"
            @click="directMe(item.openToPublic)"
            :src="item.exhibitionImg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="display-1 fontAdventPro">{{item.title.toUpperCase()}}</span>
                </v-flex>
                <small v-if="item.openToPublic==false" >Exhibition is not currently open to the public</small>
              </v-layout>
            </v-container>
          </v-card-media>
            <div class="text-xs-center" style="min-height: 270px">
              <h5 class="grey--text headline mt-4">{{item.months}}</h5><br>
              <span class="headline">{{item.location.toUpperCase()}}</span><br>
            <h5 class="mt-2 pa-3 fontAdventPro" style="font-size:1.4rem; letter-spacing:0.3rem">{{item.description}}</h5>
            <v-btn flat v-if="item.openToPublic" to="/gallery" color="primary">Gallery</v-btn>
            <v-btn flat v-else="item.openToPublic" @click="dialog=true" color="primary">details</v-btn>
            <div>
              <v-dialog v-model="dialog" max-width="290" value="true">
                    <v-card>
                      <v-card-title class="headline">Opening Soon</v-card-title>
                      <v-card-text style="text-align:justify">We apologies for the wait. This gallery is currently closed to the public. For VIP tickets please contact the gallery director, René Lefèvre.
                      </v-card-text>
                      <v-btn @click="dialog=false" flat>close</v-btn>
                    </v-card>
                  </v-dialog>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    exhibitionData () {
      return this.$store.getters.exhibition2018
    }
  },
  methods: {
    directMe (isItOpen) {
      if (isItOpen === true) {
        return this.$router.push('/gallery')
      } else {
        this.dialog = true
      }
    }
  }
}
</script>
