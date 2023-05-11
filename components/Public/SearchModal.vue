<template>
    <v-dialog fullscreen v-model="dialog" width="500">


        <v-card>
            <div>
                <v-row justify="space-between" class="pa-10">
                    <span class="t14600 black--text">جست و جوی</span>
                    <span><v-icon @click="close()" size="30" color="black">mdi-chevron-left</v-icon></span>
                </v-row>
            </div>

            <v-row justify="center">
                <div class="mb-5">
                    <v-row justify="center" class="mt-10">
                        <div id="productSearch">
                            <v-text-field @keyup="searchProduct()" v-model="search" dense color="black" height="39" width="311" background-color="Cultured02" outlined
                                class="border-r-15" placeholder="جست و جوی" clearable></v-text-field>
                        </div>
                    </v-row>

                    <v-row justify="center" class="mb-5">
                        <div class="result-search-card mt-3" v-for="(item , index) in GetsearchProduct" :key="index" @click="gotoProduct(item.url)">
                            <v-row class="pa-4 px-8 pt-5" >
                                <div>
                                    <img :src="productImageCover(item)" width="42" height="49" alt="" class="br-15">
                                </div>
                                <div style="line-height: 0;" class="pt-4 mr-3">
                                    <div class="pb-0 mb-0"><p class="t12400">{{item.name}}</p></div>
                                    <div  class="pt-0 mt-0" v-if="item.collection"><p class="t10400">{{item.collection}}</p></div>
                                </div>
                            </v-row>
                        </div>
                    </v-row>


                </div>
            </v-row>
        </v-card>
    </v-dialog>
</template>
<script>
import { debounce } from "debounce";
export default {
    data(){
        return{
            search:''
        }
    },
    computed: {
        dialog() {
            return this.$store.getters['public/get_searchModal']
        },

        GetsearchProduct(){
            return this.$store.getters['get_searchProduct']
        }
    },

    methods: {
        close() {
            this.$store.commit('public/set_searchModal', false)
        },
        searchProduct: debounce(function (e)  {
            this.$store.dispatch('set_searchProduct', this.search)
        }, 1000),

        productImageCover(item) {
            try {
                return process.env.baseUrl + '/media/' + item.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        },

        gotoProduct(id){
            this.close()
            this.$store.commit('set_searchProduct' , [])
            this.$router.push('/product/' + id)
        }
    }
}
</script>