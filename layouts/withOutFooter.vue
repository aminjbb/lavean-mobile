<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed right app
      style="height:100% ;">
      <div class="pa-2">
        <v-col>
          <v-row class="ma-0" justify="space-between" align="center">
            <span class="t14600 Black--text">
              منو
            </span>
            <v-btn icon @click="drawer = false">
              <v-icon> mdi-close </v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </div>

      <v-divider></v-divider>
      <v-list class="px-8 mt-5">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact style="height: 26px;">
          <v-list-item-action>
            <v-img width="16" :src="item.icon"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white" height="75" class="px-0">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-spacer />
      <span class="mr-10">
        <img width="67" height="16" src="~/assets/img/mainLogo.png" alt="" @click="$router.push('/')">
      </span>
      <v-spacer />

      <div class="pl-3">
        <span class="mx-1" @click="openSearchModal()">
          <img width="18" src="~/assets/img/searchicon.svg" alt="">
        </span>
        <span class="mx-1" @click="$router.push('/order')">
          <img width="16" src="~/assets/img/cardicon.svg" alt="">
        </span>

        <span class="mx-1" @click="gotoUserProfile()">
          <img width="18" src="~/assets/img/usericon.svg" alt="">
        </span>
      </div>
      <div class="gold-price-box-1">
        <div class="gold-price-box">
          <div class="gold-price-box-img">
            <img src="~/assets/img/goldPriceImg.svg" alt="">
          </div>
          <v-row justify="space-between" class="pt-4 px-8 Arsenic--text">
            <span class="t10400">
              قیمت لحظه ای طلا
            </span>
            <span class="t10400">
              ۱,۴۵۵,۸۸۸,۹۳۰ ریال
            </span>
          </v-row>
        </div>
      </div>

    </v-app-bar>
    <v-main>
      <div class="rcontainer">
        <Nuxt />
        <SearchModal />
        <!-- <v-divider class="mt-16"></v-divider> -->
        <!-- <Footer /> -->
      </div>
    </v-main>


  </v-app>
</template>
  
<script>
import Footer from '~/components/Public/Footer'
import SearchModal from '~/components/Public/SearchModal'
export default {
  name: 'WithOutFooter',
  components: {
    Footer,
    SearchModal
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: require('~/assets/img/laveanMenu.svg'),
          title: 'صفحه اصلی',
          to: '/'
        },
        {
          icon: require('~/assets/img/shopMenu.svg'),
          title: 'فروشگاه',
          to: '/products'
        },
        {
          icon: require('~/assets/img/magMenu.svg'),
          title: 'لاوین مگ',
          to: '/lavean-mag'
        },
        {
          icon: require('~/assets/img/laveanMenu.svg'),
          title: 'درباره ما',
          to: '/about-us'
        },
        {
          icon: require('~/assets/img/contactusMenu.svg'),
          title: 'تماس با ما',
          to: '/contact-us'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  methods: {
    openSearchModal() {
      this.$store.commit('public/set_searchModal', true)
    },
    gotoUserProfile() {
      if (this.$cookies.get('customer_token')) {
        this.$router.push('/user-profile')
      }
      else {
        this.$router.push('/register')
      }

    }
  }
}
</script>
  