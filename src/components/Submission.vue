<template lang="html">
  <div>
    <v-container>
      <v-layout>
        <v-flex>
          <form>
            <v-card>
              <v-card-title>
                <span class="headline">Artwork Submission</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md >
                  <v-layout wrap>
                    <v-flex xs12 sm6 >
                      <v-text-field
                        label="Artist Full Name"
                        hint="e.g. Armand Baudelaire"
                        required>
                      </v-text-field>
                    </v-flex>
                    <v-spacer></v-spacer>
                    <v-flex xs12 sm6 >
                      <v-text-field
                        label="Artwork Title"
                        required>
                      </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="???" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="???" type="password" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat >Submit</v-btn>
                <v-btn color="blue darken-1" flat >Log Off</v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-dialog v-model="lockDialog" persistent max-width="400">
          <form @submit.prevent="onLogin">
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>
                <span class="display-1 fontCaps">login - {{currentUser.id}}</span>
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
      password: ''
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
    }
  },
  computed: {
    currentUser () {
      if (this.$store.getters.user.id !== null) {
        console.log(this.lockDialog)
        this.lockDialog = false
      }
      return this.$store.getters.user
    }
  }
}
</script>
