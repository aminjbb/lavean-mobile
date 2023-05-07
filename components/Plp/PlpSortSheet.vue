<template>
    <v-bottom-sheet v-model="sheet" persistent>
        <template v-slot:activator="{ on, attrs }">

            <v-btn height="32" class="px-10" color="ChineseWhite" dark outlined rounded="xl" v-bind="attrs" v-on="on">
                <v-row justify="space-between" align="center">
                    <v-icon class="" color="black">
                        mdi-sort-variant
                    </v-icon>
                    <span class="t10400 black--text mr-2">
                        جدید ترین
                    </span>

                </v-row>
            </v-btn>
        </template>
        <v-sheet class="text-center pt-1" height="450">
            <div class="pa-2 px-5">

                <v-col>
                    <v-row class="ma-0" justify="space-between" align="center">
                        <span class="t14600 Black--text">
                            انتخاب مرتب سازی
                        </span>
                        <v-btn icon @click="sheet = false">
                            <v-icon> mdi-close </v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </div>

            <v-row justify="center">
                <div class="my-5 collection-box">
                    <v-row justify="center" class="my-5">
                        <v-card width="244" color="white" outlined>
                            <template>
                                <v-container fluid>
                                    <v-radio-group v-model="sort">
                                        <v-radio color="DeepGreen" class="mx-5 mb-5" label="جدید‌ترین"
                                            value="newest"></v-radio>
                                        <v-divider></v-divider>
                                        <v-radio color="DeepGreen" class="ma-5" label="کمترین قیمت"
                                            value="cheapest"></v-radio>
                                        <v-divider></v-divider>
                                        <v-radio color="DeepGreen" class="mx-5 mt-5" label="بیشترین قیمت"
                                            value="most_expensive"></v-radio>


                                    </v-radio-group>
                                </v-container>
                            </template>



                        </v-card>
                    </v-row>
                </div>
            </v-row>
            <v-row justify="center" align="center" class="mt-8">
                <v-btn @click="filterSort()" height="34.8" width="296" class="px-15" color="DeepGreen" dark rounded="xl">
                    <span class="t14400 white--text">
                        انتخاب
                    </span>
                </v-btn>
            </v-row>
        </v-sheet>
    </v-bottom-sheet>
</template>
<script>
import { ProductListFilter } from "~/store/classes"
export default {
    data() {
        return {
            sheet: false,
            sort: '',
            productFilter: new ProductListFilter()
        }
    },

    methods: {
        filterSort() {

            this.productFilter.sort = this.sort
            this.$router.push("/products?" + this.productFilter.query_maker());
            this.sheet = false
        },
    }
}
</script>