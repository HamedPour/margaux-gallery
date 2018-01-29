<template lang="html">
  <v-container>
    <v-layout>
      <v-flex xs12 sm8 md6 offset-sm2 offset-md6 lg5 offset-lg7>
        <div class="mt-5">
          <div>
            <v-btn
                flat
              >{{}}</v-btn>
          </div>
          <v-divider></v-divider>
          <h1>Under ReConstruction</h1>
          <!-- Add coresponding image for each season -->
          <!-- New Component -->
        </div>
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
