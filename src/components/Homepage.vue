<template lang="html">
  <div class="homepage">
    <v-carousel
        class="myCarousel"
        hide-delimiters
        hide-controls
        lazy>
    <v-carousel-item
        transition="fade"
        reverseTransition="fade"
        v-for="(item,i) in images"
        v-bind:src="item.src"
        :key="i">
        <h1 class="homepage--mainTitle">MARGUAX</h1>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        images: [
          { src: '/src/assets/images/parisColors.jpeg' },
          { src: '/src/assets/images/ladyGallery.jpg' },
          { src: '/src/assets/images/caveColors.jpeg' },
          { src: '/src/assets/images/forestMist.jpg' },
          { src: '/src/assets/images/winterWalk.jpeg' }
        ]
      }
    }
  }
</script>

<style lang="css">
</style>
