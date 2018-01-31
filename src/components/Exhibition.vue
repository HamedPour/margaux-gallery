<template lang="html">
  <v-container >
    <h1 class="display-3 text-xs-center fontAdventPro mt-4">Exhibitions</h1>
    <v-divider class="mb-4"></v-divider>
    <v-layout >
    <v-flex v-for="(item, index) in exhibitionData" :key="index" xs12 sm6 pa-4>
      <v-card style="height: 440px">
        <v-card-media
          class="white--text"
          height="250px"
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
        <v-card-title>
          <div>
            <span class="grey--text">{{item.months}}</span><br>
            <span >{{item.location.toUpperCase()}}</span><br>
          </div>
          <span class="mt-2">{{item.description}}</span>
        </v-card-title>
        <v-card-actions>
          <v-btn flat v-if="item.openToPublic" to="/gallery" color="primary">Gallery</v-btn>
          <v-btn flat v-else="item.openToPublic" color="primary">Bookings</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    exhibitionData () {
      return this.$store.getters.exhibition2018
    }
  }
}
</script>
