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
          v-for="(item,i) in images"
          v-bind:src="item.src"
          :key="i">
          <router-link
            :to="{ name: 'Gallery'}"
            tag="h1"
            class="homepage--mainTitle">
            MARGUAX
          </router-link>
          <router-link
          class="homepage--subTitle"
          :to="{ name: 'exhibitions'}"
          tag="span">
          exhibitions
        </router-link>
      </v-carousel-item>
    </v-carousel>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          { src: '/src/assets/images/parisColors.jpg' },
          { src: '/src/assets/images/ladyGallery.jpg' },
          { src: '/src/assets/images/winterWalk.jpg' },
          { src: '/src/assets/images/jungleBridge.jpg' },
          { src: '/src/assets/images/caveColors.jpg' }
        ]
      }
    }
  }
</script>
