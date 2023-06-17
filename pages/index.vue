<template>
  <div>
    <HomeMainbanner />
    <!-- <div class="position__relative">
      <v-divider class="ma-6"></v-divider>
      <div class="position__absolute sptial-sales-box text-center">
        <span class="t16600">تخفیف ویژه!</span>
      </div>
    </div> -->
    <GiftSection />
    <HomeProduct />
    <InfoLavin />
    <div class="">
      <v-img height="128" :aspect-ratio="16 / 9" :src="require('~/assets/img/bannerPlp.png')" class="mt-10">
        <v-container>
          <v-row justify="center" align="center" class="height-percent-100 mt-7">
            <v-col cols="12">
              <p class="t22600 white--text text-center">
                با لاوین در دنیای فشن سفر کنید!
              </p>
            </v-col>
          </v-row>

        </v-container>
      </v-img>
      <div class="custom-row">
        <v-btn width="130" height="35" class="px-15 mt--20" color="Cultured" dark rounded="xl">
          <span class="t14400 Gray02--text">
            شروع کنیم
          </span>
        </v-btn>
      </div>
    </div>

    <HomeCategory />

    <laveanLevel />
    <MagHome/>
  </div>
</template>

<script>

import HomeMainbanner from "~/components/Home/HomeMainbanner.vue";
import HomeProduct from "~/components/Home/HomeProduct.vue";
import HomeCategory from "~/components/Home/HomeCategory.vue";
import InfoLavin from "~/components/Home/InfoLavin.vue";
import GiftSection from "~/components/Home/GiftSection.vue";
import laveanLevel from "~/components/Home/laveanLevel.vue";
import MagHome from "~/components/Home/MagHome.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: 'IndexPage',
  components: {
    HomeMainbanner,
    HomeProduct,
    InfoLavin,
    HomeCategory,
    VueperSlides,
    VueperSlide,
    GiftSection,
    laveanLevel,
    MagHome
  },

  beforeMount() {
    this.$store.dispatch('set_productHome')
    this.$store.dispatch('set_produCategories')
  }
}
</script>
