<template lang="html">
  <v-layout>
    <v-flex  v-show="newsItem">
      <img :src="newsItem.urlToImage"
          style="
            width: 100%;
            max-width:450px;
            border-radius:50%;
            box-shadow: 4px 4px 6px #000;
            " alt="">
      <h1 class="fontCaps title pt-4">{{newsItem.title}}</h1>
      <h3 class="fontCaps pt-3">Article by: {{newsItem.author}}</h3>
      <p style="text-align:justify; padding: 20px 30px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <span>www.galleryMaraux.com</span>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['uid'],
  computed: {
    newsItem () {
      if (this.$store.getters.theNewsItem(this.uid) === undefined) {
        return false
      } else {
        return this.$store.getters.theNewsItem(this.uid)
      }
    }
  }
}
</script>
