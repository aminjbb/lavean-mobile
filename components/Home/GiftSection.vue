<template>
    <div  class="my-15 custom-row">
        <div class="gift-section">
            <v-row justify="center">
                <v-col cols="5">
                    <div class="pr-5 ">
                        <img src="~/assets/img/gift-mobile.png" alt="">
                    </div>
                </v-col>
                <v-col cols="7" class="pt-15">
                    <div>
                        <span class="t18600 white--text">
                            با لاوین هدیه بده!
                        </span>
                    </div>
                    <div class="pl-15 ">
                        <span class="t10400 black--text">
                            از لاوین هدیه ارزشمند برای روز خاصت بخر و خوشحالش کن!
                        </span>
                    </div>
                </v-col>

            </v-row>
            <v-row justify="center">
                <v-bottom-sheet v-model="sheet" persistent>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="mt--15" rounded="xl" color="black" width="161" height="37">
                            <span class="t12400 white--text">
                                خرید هدیه
                            </span>
                        </v-btn>

                    </template>
                    <v-sheet class="text-center pt-1" height="230px">
                        <div class="pa-2 px-5">

                            <v-col>
                                <v-row class="ma-0" justify="space-between" align="center">
                                    <span class="t14600 Black--text">
                                        انتخاب قیمت هدیه
                                    </span>
                                    <v-btn icon @click="sheet = false">
                                        <v-icon> mdi-close </v-icon>
                                    </v-btn>
                                </v-row>
                            </v-col>
                        </div>

                        <v-divider></v-divider>
                        <v-row justify="center" align="center" class="filter-price-box  mt-1-5  mx-9 mt-5">
                            <span class="t10400"> {{ splitChar(value[0]) }} تومان</span>

                            <div class="position__relative">
                                <v-range-slider track-color="MagicMint" color="DeepGreen" class="price-filter-input "
                                    v-model="value" min="0" max="20000000" step="50000"> </v-range-slider>
                            </div>

                            <span class="t10400 ">تومان {{ splitChar(value[1]) }} تومان</span>


                        </v-row>
                        <v-row justify="center" align="center" class="mt-8">
                            <v-btn :to="'/products?max_price=' + value[1] + '&min_price=' + value[0]" width="296"
                                height="40" color="Black" dark rounded="xl">
                                <span class="t14400">
                                    انتخاب
                                </span>
                            </v-btn>
                        </v-row>
                    </v-sheet>
                </v-bottom-sheet>

            </v-row>
        </div>

    </div>
</template>

<script>
export default {
    data: () => ({
        sheet: false,
        min: 2000000,
        max: 0,
        value: [0, 20000000],
    }),
    methods: {

        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return text;
            }
        },
    },
}
</script>