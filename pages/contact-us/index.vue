<template>
      <v-row justify="center" class="mt-15 px-4 mb-10">
                    <v-col cols="12" >
                        <div class="mt-5">
                            <div class="ma-0 box-h">
                                <div class="px-1 py-2">
                                    <span class="t16400 Arsenic--text">موضوع</span>
                                </div>
                                <v-text-field color="black" class="border-r-15" placeholder="موضوع" background-color="WhiteSmoke"
                                    outlined></v-text-field>
                            </div>
                            <div class="ma-0 box-h">
                                <div  class="px-1 py-2">
                                    <span class="t16400 Arsenic--text">آدرس ایمیل</span>
                                </div>
                                <v-text-field color="black" class="border-r-15" placeholder="ایمیل" background-color="WhiteSmoke"
                                    outlined></v-text-field>
                            </div>
                            <div class="box-h">
                                <div  class="px-1 py-2">
                                    <span class="t16400 Arsenic--text">پیام</span>
                                </div>
                                <v-textarea color="black" class="border-r-15" placeholder="چطوری میتونم کمکت کنم؟"
                                    background-color="WhiteSmoke" outlined></v-textarea>
                            </div>
                        </div>
                        <v-row justify="end" class="mt-15">
                            <v-col cols="5" class="mt-10">
                                <v-btn block color="Black" dark rounded="xl">
                                    <span class="t12400">
                                        ارسال
                                    </span>
                                </v-btn>
                            </v-col>

                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <div class="mt-15">
                            <v-card outlined class="br-15 mt-3" v-for="branche in branches" :key="branche.id">
                                <div class="pt-4 pr-4">
                                    <span class="t14600">
                                        {{branche.name}}
                                    </span>
                                </div>
                                <div  class="pt-4 px-4  d-flex">
                                    <span>
                                        <v-img class="mt-1 ml-2" width="15" height="15" :src="require('~/assets/img/map-pin.svg')"></v-img>
                                    </span>
                                    <span class="t14400">
                                        {{branche.address}}
                                    </span>
                                </div>
                                <div  class="mb-4 pt-3 pr-4 d-flex" >
                                    <span>
                                        <v-img class="mt-1 ml-2" width="15" height="15" :src="require('~/assets/img/phone.svg')"></v-img>
                                    </span>
                                    <span class="t14400">
                                        ۰۹۳۰۰۱۷۹۶۴۸
                                    </span>
                                </div>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
</template>

<script>


export default {
    layout: 'headerBlack',

    beforeMount(){
        this.$store.dispatch('set_braches')
    },

    computed:{
        branches(){
            try {
                return this.$store.getters['get_braches']
            } catch (error) {
                return []
            }
        }
    }

}
</script>