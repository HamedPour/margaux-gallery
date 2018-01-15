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
                  @click="passNewsItem(item.uid)"
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
          <NewsDetails :uid="this.currentId"></NewsDetails>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewsDetails from './NewsDetails.vue'
export default {
  data () {
    return {
      currentId: 'bobby'
    }
  },
  components: {
    'NewsDetails': NewsDetails
  },
  computed: {
    theNews () {
      return this.$store.getters.theNews
    }
  },
  methods: {
    passNewsItem (id) {
      this.currentId = id
    }
  }
}
</script>
