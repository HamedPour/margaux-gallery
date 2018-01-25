<template lang="html">
  <v-container>
    <v-layout>
      <v-flex lg8 offset-lg2>
        <h1 class="display-2 text-xs-center fontCaps mt-5 mb-5">administrator portal</h1>
        {{getArtistBank}}
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
                <v-text-field label="artist details" multi-line required></v-text-field>
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
              <v-flex xs12 sm6>
                <img width="100%" height="500px" :src="portraitImage">
              </v-flex>
              <v-flex xs12 sm6>
                <img width="100%" height="500px" :src="artworkImage" >
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" type="submit" flat>Submit</v-btn>
        </v-card-actions>
      </v-card>
        </form>
      </v-flex>
    </v-layout>
    <v-btn @click="onLogout">LogOut</v-btn>
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
      portraitImage: null,
      portraitImageRaw: null,
      artworkImage: null,
      artworkImageRaw: null
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('SignOutUser')
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
        this.portraitImage = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.portraitImageRaw = files[0]
    },
    onArtworkChosen (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please choose a valid file formate')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.artworkImage = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.artworkImageRaw = files[0]
    },
    onArtistFormSubmit () {
      const newArtistData = {
        artistName: `${this.artistFirstName} ${this.artistLastName}`,
        artworkTitle: this.artworkTitle,
        artistDetails: this.artistDetails,
        artistPortraitImage: this.portraitImage,
        artworkImage: this.artworkImage
      }
      this.$store.dispatch('newArtist', newArtistData)
      this.artistFirstName = ''
      this.artistLastName = ''
      this.artworkTitle = ''
      this.artistDetails = ''
      this.portraitImage = ''
      this.portraitImageRaw = null
      this.artworkImage = ''
      this.artworkImageRaw = null
    }
  },
  computed: {
    getArtistBank () {
      return this.$store.getters.artistBank
    }
  }
}
</script>
