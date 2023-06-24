<template>
    <div class="mb-15">
        <div class="blog-banner mt-1">
            <v-img class="br-20" height="450" :src="require('~/assets/img/home-banner.jpg')">
                <v-row justify="space-between" class="content-banner gradiant-back ">
                    <v-col cols="12" class="pr-10 pb-5 position__relative">
                        <h3 class="t18600 white--text mb-5">
                            چگونه گوشواره خود را در خانه تمیز کنیم؟
                        </h3>
                        <p class="t12400 white--text pl-10">برای تمیز کردن گوشواره طلا، نقره و دیگر جنس‌های این وسیله‌ی
                            زینتی در
                            خانه می‌توانید از چندین روش
                            مختلف کمک بگیرید که ما در این مطلب برایتان توضیح داده‌ایم.</p>
                        <div class="blog-icon">
                            <img class="mt-15 mr-5" src="~/assets/img/CaretCircleLeft.svg" alt="">
                        </div>
                    </v-col>
                    <!-- <v-col cols="2" class="pr-15">
                        
                    </v-col> -->
                </v-row>
            </v-img>
        </div>

        <div class="mt-8 custom-row" >
            <v-col cols="10" class="pb-0">
                <div id="blog-search" class="position__relative">
                    <v-text-field color="black" height="49" v-model="search" placeholder="جست‌وجوی مطلب " dense
                        background-color="Cultured02" outlined class="br-24 blog-search-box"></v-text-field>

                    <div class="search-box-mag">
                        <v-icon color="white">
                            mdi-magnify
                        </v-icon>
                    </div>
                </div>



            </v-col>
            <v-col cols="8" class="pt-0">
                <div class="category-blog-box mt-3">
                    <v-row justify="space-between" class="px-5 pt-1">
                        <v-btn height="17" text :class="filter == 0 ? 'active-mag-btn' : ''" @click="filter = 0">
                            <span class="t10400">
                                طلا سفید
                            </span>
                        </v-btn>
                        <v-btn height="17" text :class="filter == 1 ? 'active-mag-btn' : ''" @click="filter = 1">
                            <span class="t10400">
                                طلا سفید
                            </span>
                        </v-btn>

                        <v-btn height="17" text :class="filter == 2 ? 'active-mag-btn' : ''" @click="filter = 2">
                            <span class="t10400">
                                طلا
                            </span>
                        </v-btn>




                    </v-row>
                </div>
            </v-col>
            <v-col cols="11">
                <v-row justify="center">
                    <v-col cols="10" class="pa-1">
                        <MagCard />
                    </v-col>
                    <v-col cols="10" class="pa-1">
                        <MagCard />
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="10" class="mt-15">
                <v-row justify="center">
                    <v-btn width="207" color="Black" dark rounded="xl">
                        <span class="t12400">
                            بیشتر
                        </span>
                    </v-btn>
                </v-row>
            </v-col>
        </div>
    </div>
</template>

<script>
import MagCard from '~/components/Mag/MagCard'
export default {
    components: {
        MagCard
    },
    data() {
        return {
            filter: 0
        }
    }
}
</script>