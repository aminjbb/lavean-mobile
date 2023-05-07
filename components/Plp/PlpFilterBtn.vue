<template>
    <div>
        <v-row>
            <div class="d-flex">
                <v-col cols="4" class="pt-5 pl-0 pr-8">
                    <CollectionFillterModal />
                </v-col>


                <v-col cols="4">
                    <v-card outlined class="border-r-15 mt-2" min-height="31" max-width="115">
                        <v-item-group v-model="available" active-class="btn2_toggle-plp">
                            <v-item v-slot="{ active, toggle }" value="available">
                                <v-btn depressed rounded class=" white_back border-r-15" small @click="toggle"
                                    active-class="btn2_toggle-plp">

                                    <span>موجود</span>
                                </v-btn>
                            </v-item>
                            <v-item v-slot="{ active, toggle }" value="all">
                                <v-btn depressed rounded class="border-r-15 white_back" small @click="toggle"
                                    active-class="btn2_toggle-plp">

                                    <span> همه</span>
                                </v-btn>
                            </v-item>
                        </v-item-group>
                    </v-card>
                </v-col>

                <v-col cols="4" class="pt-5 pr-0 pl-8">
                  <PlpSortSheet/>
                </v-col>
            </div>
        </v-row>

        <v-row justify="center" align="center" class="filter-price-box  mt-1-5  mx-7 mt-5">
            <span class="t10400"> {{ splitChar(value[0]) }} تومان</span>

            <div class="position__relative">
                <v-range-slider track-color="MagicMint" color="DeepGreen" class="price-filter-input " v-model="value"
                    min="0" max="20000000" step="50000"> </v-range-slider>
            </div>

            <span class="t10400 "> {{ splitChar(value[1]) }} تومان</span>


        </v-row>
    </div>
</template>

<script>
import { ProductListFilter } from "~/store/classes"
import CollectionFillterModal from '~/components/Plp/CollectionFillterModal'
import PlpSortSheet from '~/components/Plp/PlpSortSheet'
export default {

    components: {
        CollectionFillterModal,PlpSortSheet
    },
    data() {
        return {
            available: 'all',
            min: 2000000,
            max: 0,
            value: [0, 20000000],
            productFilter: new ProductListFilter(),
        }
    },

    methods: {

        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return text;
            }
        },
        outsideSearchShow() {
            if (this.searchShow) {
                this.searchShow = false;
            }
        },
        outsidesortShow() {
            if (this.sortShow) {
                this.sortShow = false;
            }
        },
        fillterColection() {

            this.productFilter.colection = this.selectedColection
            this.$router.push("/products?" + this.productFilter.query_maker());
        },
        filterSort() {

            this.productFilter.sort = this.sort
            this.$router.push("/products?" + this.productFilter.query_maker());
        },
        filterPrice() {
            this.productFilter.min_price = this.value[0]
            this.productFilter.max_price = this.value[1]

            this.$router.push("/products?" + this.productFilter.query_maker());
        },
        filterAvailable() {
            if (this.available == 'available') {
                this.productFilter.available = 'available'
            }
            else {
                this.productFilter.available = ''
            }
            this.$router.push("/products?" + this.productFilter.query_maker());
        }
    },
    watch: {
        available() {
            this.filterAvailable()
        },

        value() {
            this.filterPrice()
        },
    }
}
</script>