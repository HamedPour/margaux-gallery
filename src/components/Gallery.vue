<template lang="html">
  <v-container class="gallery">
    <v-flex mt-4>
      <h1 class="text-xs-center fontOswald display-3">Gallery</h1>
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
                    <v-card-media
                      :src="item.imgSrc"
                      height="300px"
                      >
                    </v-card-media>
                  </v-card>
                </v-flex>
                <v-flex md6 pl-2>
                  <v-card flat>
                    <v-card-title>
                      <div>
                        <h3
                          class="gallery--mainTitle fontRoboCondens fontCaps">
                          {{item.artistName}}
                        </h3>
                      </div>
                    </v-card-title>
                    <div>
                      <div>
                        <h5 class="headline fontCaps fontAdventPro pl-3">
                          {{item.artistWorks[0]}}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <p class="pr-3 pl-3 mt-1 subheading fontRoboCondens fontJustify">
                        {{item.details}}
                      </p>
                    </div>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn @click="openDialog" right>
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
  import dialogComp from '@/components/GalleryItem'
  export default {
    data () {
      return {
      }
    },
    components: {
      dialogComp
    },
    computed: {
      galleryData () {
        return this.$store.getters.galleryData
      }
    },
    methods: {
    }
  }
</script>
