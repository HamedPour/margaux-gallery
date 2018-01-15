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
                <div class="pt-5">
                  <h3 class="fontCaps display-1 fontAdventPro">
                    {{item.title}}
                  </h3>
                  <h5 class="fontCaps body-2 pt-2">
                    Displaying early: {{new Date(item.publishedDate).getFullYear()}}
                  </h5>
                  <h3 class="fontCaps mt-4 title">location: france</h3>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 lg6>
          <NewsDetails :uid="this.currentId"></NewsDetails>
          <div v-if="this.currentId==''">
            <img src="../assets/images/winterTrees.jpg"
                style="
                  width: 100%;
                  max-width:450px;
                  border-radius:50%;
                  box-shadow: 4px 4px 6px #000;
                  " alt="">
            <h1 class="fontCaps title pt-4">The Winter Galleries</h1>
            <p style="text-align:justify; padding: 20px 30px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewsDetails from './NewsDetails.vue'
export default {
  data () {
    return {
      currentId: ''
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
