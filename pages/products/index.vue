<template>
    <div>
        <PlpBanner />
        <div>
            <PlpFilterBtn />
        </div>

        <div class="my-15 ">
            <v-row justify="center" class="pr-10">
                <v-col cols="10" v-for="(product, index) in products " :key="index">

                    <ProductCard :product="product" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>


<script>
import PlpBanner from '~/components/Plp/PlpBanner.vue'
import PlpFilterBtn from '~/components/Plp/PlpFilterBtn.vue'
import ProductCard from "~/components/Public/ProductCard.vue";
export default {
    components: {
        PlpBanner,
        PlpFilterBtn,
        ProductCard
    },
    computed: {
        products() {
            return this.$store.getters['get_products']
        },
    },

    beforeMount() {
        this.$store.dispatch('set_products', '')
        this.$store.dispatch('set_collections')
      
    },
}
</script>