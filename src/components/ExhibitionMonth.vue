<template lang="html">
  <v-container class="fontCaps ">
    <h3 class="display-1 fontAdventPro pb-2">
      {{selectedMonth.artist}} : {{selectedMonth.painting}}
    </h3>
    <p>
      {{selectedMonth.description}}
    </p>
    <p class="title fontAdventPro">An exibition to benefit great london street children's hospital</p>
    <span >{{selectedMonth.exhibitionDays}} of {{selectedMonth.month}}</span>
    <v-divider class="mb-1 mt-1" dark></v-divider>
    <h3 class="fontSpread" style="cursor:pointer" @click="toGallery">
      Gallery
    </h3>
    <v-divider  class="mb-1 mt-1" dark></v-divider>
    <h3 style="cursor:pointer" class="fontSpread" @click="passBio(selectedMonth.artistBio)">
      Biography
    </h3>
  </v-container>
</template>

<script>
export default {
  props: ['monthNow'],
  computed: {
    monthData () {
      return this.$store.getters.exhibition2018
    },
    selectedMonth (monthNow) {
      return this.monthData.find((item) => {
        return item.month === this.monthNow
      })
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toGallery () {
      this.$router.push('/gallery')
    },
    passBio (value) {
      this.$emit('passedBio', value)
    }
  }
}
</script>

<style lang="css">
</style>
