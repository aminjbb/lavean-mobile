<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed right app
      style="height:100% ; z-index: 99;">
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

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-action>
              <v-img width="16" :src="require('~/assets/img/shopMenu.svg')"></v-img>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title />
              <span class="Gray02--text"> فروشگاه</span>
            </v-list-item-content>
          </template>

          <v-list-item class="my-2" active-class="primary" v-for="(item, i) in produCategories" :key="i"
            :to="'/products?cat=' + item.id" router exact style="height: 26px; ; border-radius: 13px;" no-action
            sub-group>
            <v-list-item-action>
              <v-img width="16" :src="item.icon"></v-img>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <span class="Gray02--text"> {{ item.name }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item class="my-2" active-class="primary" v-for="(item, i) in items" :key="i" :to="item.to" router exact
          style="height: 26px; border-radius: 13px;" v-model="page">
          <v-list-item-action>
            <v-img width="16" :src="item.icon"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white" height="75" class="px-0" style="z-index: 100;">
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
            <span class="t10400 dana-fa" >
             {{splitChar(clientGoldPrice)}} ریال
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
    <Footer />

  </v-app>
</template>

<script>
import Footer from '~/components/Public/Footer'
import SearchModal from '~/components/Public/SearchModal'
export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    SearchModal
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      page: '',
      cat: '',
      items: [
        // {
        //   icon: require('~/assets/img/shopMenu.svg'),
        //   title: 'فروشگاه',
        //   to: '/products'
        // },
        {
          icon: require('~/assets/img/laveanMenu.svg'),
          title: 'صفحه اصلی',
          to: '/'
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
    splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return text;
            }
        },

    gotoUserProfile() {
      if (this.$cookies.get('customer_token')) {
        this.$router.push('/user-profile')
      }
      else {
        this.$router.push('/register')
      }

    }
  },

  computed: {
    clientGoldPrice(){
      const goldPrice = this.$store.getters['get_clientGoldPrice']
      if(goldPrice == null) return '-'
      else return goldPrice.price
    },
    produCategories() {
      try {
        var cat = [
          {
            name: 'همه',
            id: ''
          }
        ]
        this.$store.getters['get_produCategories'].forEach(element => {
          var form = {
            name: element.name,
            id: element.id
          }
          cat.push(form)
        });
        return cat
      } catch (error) {
        return []
      }
    }
  },

  beforeMount() {

    this.$store.dispatch('set_clientGoldPrice')
    this.$store.dispatch('set_produCategories')
  }
}
</script>
