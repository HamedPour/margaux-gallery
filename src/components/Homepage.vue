<template lang="html">
  <div class="homepage">
    <v-carousel
        class="myCarousel"
        hide-delimiters
        hide-controls
        lazy
        >
    <v-carousel-item
        @click="toArtists"
        style="cursor:pointer"
        transition="fade"
        reverseTransition="fade"
        v-for="(item,i) in images"
        v-bind:src="item.src"
        :key="i">
        <h1 class="homepage--mainTitle">MARGUAX</h1>
    </v-carousel-item>
  </v-carousel>
  <v-btn fab dark small class="homepage--downArrow">
    <v-icon style="font-size:2.7rem">expand_more
    </v-icon>
  </v-btn>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          { src: '/src/assets/images/parisColors.jpeg' },
          { src: '/src/assets/images/ladyGallery.jpg' },
          { src: '/src/assets/images/winterWalk.jpeg' },
          { src: '/src/assets/images/jungleBridge.jpeg' },
          { src: '/src/assets/images/caveColors.jpeg' }
        ]
      }
    },
    methods: {
      toArtists () {
        this.$router.push('/artists')
      }
    }
  }
</script>
