<template lang="html">
  <v-container>
    <h1 class="display-3 mt-5 mb-5 fontOswald text-xs-center">News</h1>
    <v-layout class="news" wrap>
        <v-flex xs12 lg6>
          <v-container>
            <v-layout
                  wrap
                  v-for="(item, index) in theNews"
                  :key="index"
                  style="cursor:pointer"
                  @click="toNewDetails(item.source.id)"
                  class="mb-3">
              <v-flex  xs12 md7>
                <div >
                  <img class="news--leftImageHolder" :src="item.urlToImage" alt="">
                </div>
              </v-flex>
              <v-flex xs12 md5>
                <div >
                  <h3 class="fontCaps display-1 fontAdventPro">
                    {{item.title}}
                  </h3>
                  <h5 class="fontCaps body-2 pt-2">
                    Displaying early: {{new Date(item.publishedDate).getFullYear()}}
                  </h5>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 lg6>
          <div class="mt-3">
            <img  style="max-width:350px;" src="../assets/images/winterTrees.jpg" alt="">
          </div>
          <h1>{{}}</h1>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      currentNewsItem: null
    }
  },
  computed: {
    theNews () {
      return this.$store.getters.theNews
    }
  },
  methods: {
    toNewDetails (id) {
      // pass the id into store and find the set of data associated with the id
    }
  }
}
</script>
