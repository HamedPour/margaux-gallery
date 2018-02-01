<template lang="html">
  <v-container>
    <h1 class="display-2 text-xs-center fontCaps mt-5 mb-5">administrator portal</h1>
    <v-layout  wrap mb-5>
      <v-flex class="pa-2 " xs6 v-for="(item, index) in getArtistBank" :key="index">
        <v-card class="text-xs-center pa-3">
          <h1 class="title">{{(item.artistName).toUpperCase()}}</h1>
          <h3 class="body-2 pb-3 pt-2">{{(item.artworkTitle).toUpperCase()}}</h3>
          <img :src="item.artworkURL" width="80%" height="280px" alt="">
          <v-btn small color="red" @click="removeArtist(item.id)">Remove</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex lg8 offset-lg2>
        <form @submit.prevent = "onArtistFormSubmit">
          <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <span class="headline">Add Artist</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="first name" v-model="artistFirstName" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="last name" v-model="artistLastName" required>
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="artwork title" v-model="artworkTitle"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="artist details" v-model="artistDetails" multi-line required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-btn @click="choosePortrait">Upload Portrait</v-btn>
                <input
                  v-show="false"
                  type="file"
                  require
                  accept="image/*"
                  @change="onPortraitChosen"
                  ref="portraitUploadBtn">
              </v-flex>
              <v-flex xs12 sm6>
                <v-btn @click="chooseArtwork">Upload artwork</v-btn>
                <input
                  v-show="false"
                  type="file"
                  require
                  accept="image/*"
                  @change="onArtworkChosen"
                  ref="arworkUploadBtn">
              </v-flex>
              <v-flex xs12 >
                <div v-if="portImageBase64">
                  <v-divider class="mt-4"></v-divider>
                  <h2 class="text-xs-center pt-4 mb-3 display-1">Artist Portrait</h2>
                  <img width="100%" :src="portImageBase64" >
                </div>
              </v-flex>
              <v-flex xs12 >
                <div v-if="artImageBase64">
                  <h2 class="text-xs-center pa-3 display-1">Artwork</h2>
                  <img width="100%" :src="artImageBase64" >
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn flat @click="onLogout">LogOut</v-btn>
          <v-spacer></v-spacer>
          <v-btn large color="blue darken-1" type="submit" flat>Submit</v-btn>
        </v-card-actions>
      </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      artistFirstName: '',
      artistLastName: '',
      artworkTitle: '',
      artistDetails: '',
      portImageBase64: null,
      portImageRaw: null,
      artImageBase64: null,
      artImageRaw: null
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('SignOutUser')
      this.$store.dispatch('clearError')
      this.$router.push('submission')
    },
    choosePortrait () {
      this.$refs.portraitUploadBtn.click()
    },
    chooseArtwork () {
      this.$refs.arworkUploadBtn.click()
    },
    onPortraitChosen (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please choose a valid file formate')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.portImageBase64 = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.portImageRaw = files[0]
    },
    onArtworkChosen (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please choose a valid file formate')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.artImageBase64 = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.artImageRaw = files[0]
    },
    onArtistFormSubmit () {
      const newArtistData = {
        artistName: `${this.artistFirstName} ${this.artistLastName}`,
        artworkTitle: this.artworkTitle,
        artistDetails: this.artistDetails,
        artistPortImage: this.portImageRaw,
        artImage: this.artImageRaw
      }
      this.$store.dispatch('newArtist', newArtistData)
      this.artistFirstName = ''
      this.artistLastName = ''
      this.artworkTitle = ''
      this.artistDetails = ''
      this.portImageBase64 = ''
      this.portImageRaw = null
      this.artImageBase64 = ''
      this.artImageRaw = null
    },
    removeArtist (id) {
      this.$store.dispatch('removeArtist', id)
    }
  },
  computed: {
    getArtistBank () {
      return this.$store.getters.artistBank
    }
  }
}
</script>
