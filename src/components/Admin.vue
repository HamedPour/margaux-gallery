<template lang="html">
  <v-container>
    <v-layout>
      <v-flex>
        <h1>I am Admin. I am GOD HERE!</h1>
        <v-btn @click="onLogout">LogOut</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    onLogout () {
      this.$store.dispatch('SignOutUser')
      this.$router.push('submission')
    }
  }
}
</script>
