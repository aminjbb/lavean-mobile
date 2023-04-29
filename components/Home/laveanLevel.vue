<template>
    <div class="my-10" id="levelLavean">


        <vueper-slides class="no-shadow" :arrows="false" :touchable="true" fade :autoplay="false" :bullets="false"
            :shadow="false">
            <template #arrow-left>
                <v-icon>mdi-chevron-left-circle-outline</v-icon>
            </template>

            <template #arrow-right>
                <v-icon>mdi-chevron-right-circle-outline</v-icon>
            </template>
            <vueper-slide >
                <template #content>
                    <div class="lavean-level-box pt-10">
                        <v-row justify="center" class="pr-10">
                            <v-col cols="3">
                                <img width="51" height="44" :src="require('~/assets/img/HomeShop.svg')">
                            </v-col>
                            <v-col cols="3" class="pr-4">
                                <img width="51" height="44" :src="require('~/assets/img/HomeCard.svg')">
                            </v-col>
                        </v-row>
                        <v-row class="pl-10" justify="end" align="center">
                            <div class="ml-4 pb-2">
                                <span class="t10400 white--text">ورق بزن و شروع کن</span>
                            </div>
                            <div>
                                <img src="~/assets/img/laveanLevelM.svg" alt="">
                            </div>

                        </v-row>
                        <v-row justify="center" class="pr-10">
                            <v-col cols="3" class="pa-0 lh-12">
                                <span class="t10400 white--text">وارد فروشگاه شو!</span>
                            </v-col>
                            <v-col cols="3" class="pa-0  text-center lh-12">
                                <span class="t10400 white--text">محصول مورد نظرتو انتخاب کن</span>
                            </v-col>
                        </v-row>
                    </div>
                </template>
            </vueper-slide>
            <vueper-slide >
                <template #content>
                    <div class="lavean-level-box pt-10">
                        <v-row justify="start" class="pr-10">
                            <v-col cols="3">
                                <img width="51" height="44" :src="require('~/assets/img/HomeUser.svg')">
                            </v-col>
                            <v-col cols="3" class="pr-4">
                                <img width="51" height="44" :src="require('~/assets/img/HomeMony.svg')">
                            </v-col>
                            <v-col cols="3" class="pr-4">
                                <img width="51" height="44" :src="require('~/assets/img/HomeTrack.svg')">
                            </v-col>
                        </v-row>
                        <v-row class="pr-15" justify="start" align="center">
                          
                            <div>
                                <img src="~/assets/img/laveanLevelM2.svg" alt="">
                            </div>
                            <div class="mr-4 pb-2">
                                <span class="t10400 white--text">تموم شد.</span>
                            </div>
                        </v-row>
                        <v-row justify="start" class="pr-8">
                            <v-col cols="3" class="pa-0 px-2 text-center lh-12">
                                <span class="t10400 white--text lh-12">وارد اکانت کاربریت شو یا یکی بساز.</span>
                            </v-col>
                            <v-col cols="3" class="pa-0 px-4 text-center lh-12">
                                <span class="t10400 white--text lh-12">مراحل پرداخت رو انجام بده.</span>
                            </v-col>
                            <v-col cols="3" class="pa-0 px-5 text-center lh-12">
                                <span class="t10400 white--text lh-12">بسته برات ارسال میشه.</span>
                            </v-col>
                        </v-row>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
    components: {
        VueperSlides,
        VueperSlide,
    },
}
</script>