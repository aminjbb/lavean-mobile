<template>
    <div>
        <v-row>
            <v-col cols="4" class="pt-5 pl-0 pr-8">
                <CollectionFillterModal />
            </v-col>


            <v-col cols="4">
                <v-row justify="center" class="pt-3">
                    <v-card outlined class="border-r-15 mt-2 pa-0" width="106" height="31">
                        <v-item-group v-model="available" active-class="btn2_toggle-plp">
                            <v-item v-slot="{ active, toggle }" value="available" class="pa-0 ma-0">
                                <v-btn height="31" depressed rounded class=" white_back border-r-15" small @click="toggle"
                                    active-class="btn2_toggle-plp">

                                    <span class="t10400">موجود</span>
                                </v-btn>
                            </v-item>
                            <v-item v-slot="{ active, toggle }" value="all" class="pa-0 ma-0 ml-0">
                                <v-btn height="31" depressed rounded class="border-r-15 white_back" small @click="toggle"
                                    active-class="btn2_toggle-plp">

                                    <span class="t10400"> همه</span>
                                </v-btn>
                            </v-item>
                        </v-item-group>
                    </v-card>
                </v-row>
            </v-col>

            <v-col cols="4" class="pt-5 pr-0 pl-8">
                <PlpSortSheet />
            </v-col>
        </v-row>

        <v-row justify="space-between" align="center" class="filter-price-box  mt-1-5  mx-5 mt-5 px-2">
            <div style="width:70px;" class="text-left">
                <span class="t10400 dana-fa"> {{ splitChar(value[0]) }} تومان</span>
            </div>

            <div class="position__relative">
                <v-range-slider track-color="MagicMint" color="DeepGreen" class="price-filter-input " v-model="value"
                    min="0" max="20000000" step="50000"> </v-range-slider>
            </div>
            <div style="width:70px;">
                <span class="t10400 dana-fa"> {{ splitChar(value[1]) }} تومان</span>
            </div>


        </v-row>
    </div>
</template>

<script>
import { ProductListFilter } from "~/store/classes"
import CollectionFillterModal from '~/components/Plp/CollectionFillterModal'
import PlpSortSheet from '~/components/Plp/PlpSortSheet'
import { debounce } from "debounce";
export default {

    components: {
        CollectionFillterModal, PlpSortSheet
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
        filterPrice: debounce(function (e) {
            this.productFilter.min_price = this.value[0]
            this.productFilter.max_price = this.value[1]

            this.$router.push("/products?" + this.productFilter.query_maker());
        }, 1000),
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