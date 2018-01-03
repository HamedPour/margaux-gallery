<template>
  <v-app>

    <!-- Navigation Bar [.navBar]-->
    <div>
      <v-toolbar flat color="#fff">
        <v-toolbar-title>
          <router-link
            tag="span"
            style="cursor:pointer"
            class="navBar--title fontOswald"
            :to="{ name: 'Homepage'}">
            MARGUAX GALLERY
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon
          @click="drawerIsOpen=!drawerIsOpen"
          class="hidden-md-and-up">
        </v-toolbar-side-icon>
        <v-toolbar-items
            v-for="item in navItems"
            :key="item.title"
            class="hidden-sm-and-down fontAdventPro">
          <v-btn
            class="navBar--linkBtn"
            :to="item.link"
            flat>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <!-- Nav Drawer Small Devices -->
    <v-navigation-drawer
            dark
            fixed
            temporary
            height="50%"
            v-model="drawerIsOpen">
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>
              <router-link
                tag="span"
                style="cursor:pointer"
                class="navBar--drawerTitle fontOswald"
                :to="{ name: 'Homepage'}">
                MARGUAX GALLERY
              </router-link>
              </v-list-tile-title>
                <v-icon
                    @click="drawerIsOpen=!drawerIsOpen"
                    style="cursor:pointer">
                  cancel
                </v-icon>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile
              v-for="item in navItems"
              :to="item.link"
              :key="item.title + '-drawer'">
            <v-list-tile-content>
              <v-list-tile-title
                class="navBar--drawerLinks">
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

    <!-- Main Content -->
    <router-view></router-view>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        navItems: [
          {title: 'Artists', link: '/artists'},
          {title: 'Exibitions', link: '/exibitions'},
          {title: 'Fairs', link: '/fairs'},
          {title: 'News', link: '/news'},
          {title: 'Gallery', link: '/gallery'},
          {title: 'Contact', link: '/contact'}
        ],
        drawerIsOpen: false
      }
    }
  }
</script>
