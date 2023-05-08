<template>
    <v-dialog fullscreen v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">

            <span class="">
                <img width="18" src="~/assets/img/searchicon.svg" alt="" v-bind="attrs" v-on="on">
            </span>
        </template>

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
                            <v-text-field dense color="black" height="39" width="311" background-color="Cultured02" outlined
                                class="border-r-15" placeholder="جست و جوی" clearable></v-text-field>
                        </div>
                    </v-row>

                    <v-row justify="center" class="mb-5">
                        <div class="result-search-card">
                            <v-row class="pa-4 px-8" >
                                <div>
                                    <img src="~/assets/img/(9) 1.png" width="42" height="49" alt="">
                                </div>
                                <div style="line-height: 0;" class="pt-5 mr-3">
                                    <div class="pb-0 mb-0"><p class="t12400">انگشتر ثمین مستطیل سبز</p></div>
                                    <div  class="pt-0 mt-0"><p class="t10400">کالکشن بهار آسمانی</p></div>
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
export default {
    computed: {
        dialog() {
            return this.$store.getters['public/get_searchModal']
        }
    },

    methods: {
        close() {
            this.$store.commit('public/set_searchModal', false)
        }
    }
}
</script>