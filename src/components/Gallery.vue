<template lang="html">
  <v-container style="border: 1px solid red;">
    <v-flex mt-4>
      <h1 class="text-xs-center fontOswald display-3">Gallery</h1>
    </v-flex>
    <v-layout>
        <v-flex xs12 pt-5>
          <v-card>
            <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
              <v-layout row wrap>
                <v-flex
                  xs12 md6
                  v-for="n in 1"
                  :key="n"
                >
                  <v-card style="margin-top:20px" flat tile>
                    <v-card-media
                      style="border: 1px solid red; "
                      src="/src/assets/images/parisColors.jpg"
                      height="300px"
                      >
                    </v-card-media>
                  </v-card>
                </v-flex>
                <v-flex md6>
                  <h1>Hellow World</h1>
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
    data: () => ({
      size: 'xl',
      images: [
        { src: '/src/assets/images/parisColors.jpg' },
        { src: '/src/assets/images/ladyGallery.jpg' },
        { src: '/src/assets/images/winterWalk.jpg' },
        { src: '/src/assets/images/jungleBridge.jpg' },
        { src: '/src/assets/images/caveColors.jpg' }
      ]
    })
  }
</script>
