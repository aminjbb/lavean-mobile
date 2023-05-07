<template>
    <div class="text-center">
        <v-dialog fullscreen v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">

                <v-btn height="32" class="px-10" color="ChineseWhite" dark outlined rounded="xl" v-bind="attrs" v-on="on">
                    <v-row justify="space-between" align="center">
                        <span class="t10400 black--text mr-2">
                            کالکشن ها
                        </span>
                        <v-icon class="mr-5" color="black">
                            mdi-chevron-down
                        </v-icon>
                    </v-row>
                </v-btn>
            </template>

            <v-card>
                <div>
                    <v-row justify="space-between" class="pa-10">
                        <span class="t14600 black--text">کالکشن‌ها</span>
                        <span><v-icon @click="dialog = false" size="30" color="black">mdi-chevron-left</v-icon></span>
                    </v-row>
                </div>

                <v-row justify="center">
                    <div class="my-5 collection-box">
                        <v-row justify="center" class="mt-10">
                            <div id="collectionSearch">
                                <v-text-field dense prepend-inner-icon="mdi-magnify" color="black" height="36"
                                    background-color="white" outlined class="border-r-15" placeholder="جست و جوی کالکشن"
                                    clearable></v-text-field>
                            </div>
                        </v-row>

                        <v-row justify="center" class="mb-5">
                            <v-card rounded="lg" width="244" color="white" outlined>
                                <template>
                                    <v-container fluid>
                                        <template v-for="(colection, index) in collections">
                                            <v-checkbox color="DeepGreen" :value="colection.url" class="mx-5 mt-5"
                                                v-model="selectedColection" :key="colection.id"
                                                :label="colection.name"></v-checkbox>
                                            <v-divider></v-divider>
                                        </template>
                                    </v-container>
                                </template>

                            </v-card>
                        </v-row>

                        <v-row justify="center" class="mt-2 mb-5 px-6">
                            <v-btn @click="fillterColection()" height="34.8" width="244.39" class="px-15" color="DeepGreen"
                                dark rounded="xl">
                                <span class="t14400 white--text">
                                    انتخاب
                                </span>
                            </v-btn>
                        </v-row>
                    </div>
                </v-row>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { ProductListFilter } from "~/store/classes"
export default {
    data() {
        return {
            dialog: false,
            selectedColection:[],
            productFilter: new ProductListFilter()
        }
    },

    computed: {
        collections() {
            return this.$store.getters['get_collections']
        },
    },
    methods: {
        fillterColection() {

            this.productFilter.colection = this.selectedColection
            this.$router.push("/products?" + this.productFilter.query_maker());
            this.dialog = false
        },
    }
}
</script>