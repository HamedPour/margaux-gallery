<template lang="html">
  <v-container class="gallery">
    <v-flex mt-4>
      <h1 class="gallery--mainTitle text-xs-center fontAdventPro">Gallery</h1>
      <v-divider></v-divider>
    </v-flex>
    <v-layout>
        <v-flex xs12 lg8 offset-lg2 pt-5>
          <v-card
              class="mb-4"
              v-for="(item, index) in galleryData"
              :key="index">
            <v-container>
              <v-layout row wrap>
                <v-flex
                  xs12 md6
                >
                  <v-card flat>
                    <v-parallax
                      height="300"
                      style="cursor:pointer"
                      @click="toGalleryItem(item.id)"
                      :src="item.artworkURL">
                    </v-parallax>
                  </v-card>
                </v-flex>
                <v-flex md6 pl-2>
                  <v-card flat>
                    <v-card-title>
                      <div>
                        <h3
                          class="gallery--artists fontRoboCondens fontCaps">
                          {{item.artistName}}
                        </h3>
                      </div>
                    </v-card-title>
                    <div>
                      <div>
                        <h5 class="headline fontCaps fontAdventPro pl-3">
                          {{item.artworkTitle}}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <p class="pr-3 pl-3 mt-1 subheading fontRoboCondens fontJustify">
                        {{item.artistDetails}}
                      </p>
                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="toGalleryItem(item.id)" right>
                        View
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      toGalleryItem (id) {
        this.$router.push('/gallery/' + id)
      }
    },
    computed: {
      galleryData () {
        return this.$store.getters.artistBank
      }
    }
  }
</script>
