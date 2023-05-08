<template>
    <div>
        <PlpBanner />
        <div>
            <PlpFilterBtn />
        </div>

        <div class="my-15 ">
            <v-row justify="center" class="pr-10">
                <v-col cols="10" v-for="(product, index) in products " :key="index" class="mt-3">

                    <ProductCard :product="product" />
                </v-col>
            </v-row>
        </div>
        <div class="px-5">
            <v-divider></v-divider>
        </div>
        <div class="text-center my-5" v-if="productPageLength">
            <v-pagination color="Black" v-model="page" :length="productPageLength" circle></v-pagination>
        </div>
    </div>
</template>


<script>
import PlpBanner from '~/components/Plp/PlpBanner.vue'
import PlpFilterBtn from '~/components/Plp/PlpFilterBtn.vue'
import ProductCard from "~/components/Public/ProductCard.vue";
import { ProductListFilter } from "~/store/classes"
export default {
    components: {
        PlpBanner,
        PlpFilterBtn,
        ProductCard
    },
    data() {
        return {
            page: 1,
            productFilter: new ProductListFilter()
        }
    },
    computed: {
        products() {
            return this.$store.getters['get_products']
        },
        productPageLength() {
            return this.$store.getters['get_productPageLength']
        },
    },

    beforeMount() {
        this.$store.dispatch('set_products', this.productFilter.query_maker_graph(this.$route))
        this.$store.dispatch('set_collections')

    },

    watch: {
        $route(to) {
            this.$store.dispatch('set_products', this.productFilter.query_maker_graph(to))
        },
        page(val) {
            this.productFilter.page = val

            this.$router.push("/products?" + this.productFilter.query_maker());
        }
    }
}
</script>