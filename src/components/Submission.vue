<template lang="html">
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 lg6 offset-lg3>
          <h1 class="display-2 fontCaps mb-5 mt-5"
            style="text-align:center"
          >artwork submission</h1>
          <form>
            <v-card>
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
                      <v-text-field label="Description" multi-line></v-text-field>
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
                <v-btn color="blue darken-1" flat @click="onLogout">Log Out</v-btn>
              </v-card-actions>
            </v-card>
          </form>
        </v-flex>
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
      welcomeMsg: 'Welcome'
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
    }
  },
  computed: {
    currentUser () {
      return this.$store.getters.user
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
