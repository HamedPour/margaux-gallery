<template lang="html">
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 md9 lg6 offset-md1 offset-lg3>
          <h1 class="display-2 fontCaps mb-5 mt-5"
            style="text-align:center"
          >artwork submission</h1>
          <form @submit.prevent="onSubmission">
            <v-card>
              <v-card-text>
                <v-container grid-list-md >
                  <v-layout wrap>
                    <v-flex xs12 sm6 >
                      <v-text-field
                        label="Artist Full Name"
                        hint="e.g. Armand Baudelaire"
                        v-model="artistName"
                        required>
                      </v-text-field>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm6 >
                      <v-text-field
                        label="Artwork Title"
                        v-model="artworkTitle"
                        required>
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        label="Description"
                        v-model="artDescription"
                        multi-line>
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn color="secondary" @click="onUpload">upload</v-btn>
                      <input
                        v-show="false"
                        type="file"
                        accept="image/*"
                        @change="onFileChosen"
                        ref="hiddenBtn">
                    </v-flex>
                    <v-flex xs12>
                      <img :src="imageUrl" width="100%">
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" type="submit" flat >Submit</v-btn>
                <v-btn color="blue darken-1" flat @click="onLogout">Log Out</v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- Submission Processing Dialog -->
    <v-container>
      <v-layout row justify-center>
          <v-dialog v-model="submissionCompleted" max-width="300">
            <v-card>
              <v-card-title class="headline">
                Thank You
              </v-card-title>
              <v-card-text style="text-align:justify">Your artwork will take up to 4 working days to review. Please feel free to contact us if you have any questions in the meantime</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat
                @click.native="submissionCompleted = false">
                Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
    </v-container>
    <!-- Dialog Login Box -->
    <v-container>
    {{checkUser}}
      <v-layout>
        <v-dialog v-model="lockDialog" persistent max-width="400">
          <v-flex style="text-align:center">
            <h1
            v-if="!lockDialog"
            class="display-3 fontCaps pr-3 pl-2"
            style="width:100%; background: white; border-bottom: 1px solid black"
            >{{welcomeMsg}}</h1>
          </v-flex>
          <form v-if="lockDialog" @submit.prevent="onLogin">
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>
                <span class="display-1 fontCaps">login</span>
                <v-spacer></v-spacer>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field
                        label="Email"
                        v-model="email"
                        required>
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field
                        label="Password"
                        v-model="password"
                        type="password"
                        required>
                      </v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
                <small style="padding: 0 50px">For registration please contact the gallery director</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" type="submit" flat>Login</v-btn>
                  <v-btn color="blue darken-1" flat @click="returnHome" >Exit</v-btn>
                  <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </form>
        </v-dialog>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lockDialog: true,
      email: '',
      password: '',
      welcomeMsg: 'Welcome',
      imageUrl: null,
      rawImage: null,
      artistName: '',
      artworkTitle: '',
      artDescription: '',
      submissionCompleted: false
    }
  },
  methods: {
    returnHome () {
      return this.$router.push('/')
    },
    onLogin () {
      let userLoginData = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('SignInUser', userLoginData)
    },
    onLogout () {
      this.$store.dispatch('SignOutUser')
    },
    onUpload () {
      this.$refs.hiddenBtn.click()
    },
    onFileChosen (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please choose a valid file formate')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.rawImage = files[0]
    },
    onSubmission (event) {
      const submissionData = {
        artistName: this.artistName,
        artworkTitle: this.artworkTitle,
        artDescription: this.artDescription,
        artImage: this.imageUrl
      }
      this.$store.dispatch('newSubmission', submissionData)
      this.submissionCompleted = true
      // Reset the form - event.target.reset() does not work. So we're doing it the old fashion way.
      this.artistName = ''
      this.artworkTitle = ''
      this.artDescription = ''
      this.imageUrl = null
    }
  },
  computed: {
    currentUser () {
      if (this.$store.getters.user.admin === true) {
        return this.$router.push('admin')
      } else if (this.$store.getters.user.admin === false || this.$store.getters.user.admin === null) {
        return this.$store.getters.user
      }
    },
    checkUser () {
      if (this.currentUser === null || this.currentUser === undefined) {
        this.lockDialog = true
        this.password = ''
      } else if (this.currentUser.id !== null) {
        this.lockDialog = false
      }
    }
  }
}
</script>
