<template lang="html">
  <div class="homepage">

      <v-carousel
          class="myCarousel"
          hide-delimiters
          hide-controls
          lazy
          >
      <v-carousel-item
          transition="fade"
          v-for="(item,i) in galleryImages"
          :src="item.artworkURL"
          :key="i">
          <router-link
            :to="{ name: 'Gallery'}"
            tag="h1"
            class="homepage--mainTitle">
            MARGUAX
          </router-link>
          <router-link
          class="homepage--subTitle"
          :to="{ name: 'Exhibition'}"
          tag="span">
          exhibitions
        </router-link>
      </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
  export default {
    computed: {
      galleryImages () {
        return this.$store.getters.artistBank
      }
    }
  }
</script>
