<template>
    <v-app dark>
   
      <v-main>
        <div class="rcontainer">
          <Nuxt />
          
          <!-- <v-divider class="mt-16"></v-divider> -->
          <!-- <Footer /> -->
        </div>
      </v-main>
      
    
    </v-app>
  </template>
  
  <script>
  export default {

    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
  </script>
  