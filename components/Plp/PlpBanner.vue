<template>
    <v-row justify="center">
        <v-img height="195" :aspect-ratio="16 / 9" :src="require('~/assets/img/bannerPlp.png')">
            <v-container>
                <v-row justify="center" align="center" class="height-percent-100 mt-10">
                    <v-col cols="12">
                        <p class="t22600 white--text text-center">
                            با لاوین در دنیای فشن سفر کنید!
                        </p>
                    </v-col>
                </v-row>
                <v-row justify="end" align="center" class="height-percent-100 mt--20 mt-2">
                    <v-col cols="6">
                        <v-btn height="27" width="61" class="px-15" color="Cultured" dark rounded="xl">
                            <span class="t12400 VampireBlack--text">
                                شروع کنیم
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>


    </v-row>
</template>

<script>
import ProductCard from '~/components/Public/ProductCard.vue'
export default {
    components: {
        ProductCard
    },

}
</script>