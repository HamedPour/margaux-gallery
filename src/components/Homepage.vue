<template lang="html">
  <div class="homepage">

      <v-carousel
          class="myCarousel"
          hide-delimiters
          hide-controls
          lazy
          v-if="!loading"
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

    <v-flex xs12 v-else class="pageCover">
      <h1 class="pageCover--title">LOADING GALLERY
        <div  >
          <span >
            <v-progress-circular indeterminate :size="80" :width="6" color="primary">
            </v-progress-circular>
          </span>
        </div>
      </h1>

    </v-flex>

  </div>
</template>

<script>
  export default {
    computed: {
      galleryImages () {
        return this.$store.getters.artistBank
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
