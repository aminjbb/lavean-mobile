<template>
    <!-- <v-row class="ma-0 mt-8 flex-nowrap scroll">
        <v-col cols="10"  v-for="(product, index) in homeProducts " class="my-5" :key="index">
            <ProductCard :product="product" />
        </v-col>
      
    </v-row> -->

    <div id="homeProduct">

        <vueper-slides class="no-shadow" :arrows="true" :touchable="true" fade :autoplay="false" :bullets="false"
            :shadow="false">
            <template #arrow-left>
                <v-icon>mdi-chevron-left-circle-outline</v-icon>
            </template>

            <template #arrow-right>
                <v-icon>mdi-chevron-right-circle-outline</v-icon>
            </template>
            <vueper-slide v-for="(product, index) in homeProducts " :key="index">
                <template #content>
                    <v-row justify="center" class="pt-5">
                        <ProductCard :product="product" />
                    </v-row>
                </template>
            </vueper-slide>
        </vueper-slides>

    </div>
</template>
<script>
import ProductCard from "~/components/Public/ProductCard.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
    components: {
        VueperSlides,
        VueperSlide,
        ProductCard

    },


    computed: {
        homeProducts() {
            return this.$store.getters['get_productHome']
        }
    },

    methods: {
        scrollLeft() {
            this.left -= 200
            document.getElementById('homeProduct').scrollTo({
                top: 0,
                left: this.left,
                behavior: 'smooth'
            })
        },
        scrollRight() {
            this.left += 200
            document.getElementById('homeProduct').scrollTo({
                top: 0,
                left: this.left,
                behavior: 'smooth'
            })
        }
    }
}
</script>