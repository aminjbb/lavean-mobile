<template>
    <div class="mt-15 mb-5">
        <v-row justify="center" align="center">

            <v-col cols="12">

                <v-row justify="center" class="mt-10">
                    <v-col cols="11">
                        <v-card outlined class="br-15  py-4 ">
                            <div class="ma-4 d-felx align-content-center px-1">
                                <span class="position__absolute">
                                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                                </span>
                                <span class="t14600 Black--text mr-8">
                                    کارت هدیه
                                </span>
                            </div>
                            <v-divider></v-divider>
                            <div class="px-5 mt-5 position__relative" id="giftBoxText">
                                <v-text-field color="black" dense prepend-inner-icon="mdi-gift-outline" height="56"
                                    background-color="white" outlined class="border-r-15" placeholder="کد هدیه را وارد کنید"
                                    clearable></v-text-field>
                                <v-btn color="DeepGreen" width="81" height="39" class="gift-btn" dark>
                                    <span class="t12400 white--text">
                                        ثبت
                                    </span>
                                </v-btn>
                            </div>
                        </v-card>
                        <v-card outlined class="mt-5 pt-3 pb-3 br-15" width="1200" min-height="494">
                            <div class="ma-4 d-felx align-content-center">
                                <span class="position__absolute">
                                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                                </span>
                                <span class="t14600 Black--text mr-8">
                                    جزئیات سفارش
                                </span>
                            </div>
                            <v-divider></v-divider>
                            <div class="ma-5">
                                <v-card height="66" class="br-15 pa-3" outlined>
                                    <v-row justify="space-between" class="pt-2">
                                        <div class="ma-1 mr-5">
                                            <v-row justify="center" class=" my-1">
                                                <img src="~/assets/img/user.svg" alt="">
                                            </v-row>
                                            <div class="t10400 Gray_02--text mr-2">
                                                گلزار حیدری
                                            </div>
                                        </div>
                                        <div class="ma-1 ">
                                            <v-row justify="center" class=" my-1  mb-2">
                                                <img src="~/assets/img/phone.svg" alt="">
                                            </v-row>
                                            <div class="t10400 Gray_02--text mr-2">
                                                ۰۹۳۰۰۱۷۹۶۴۸
                                            </div>

                                        </div>
                                        <div class="ma-1 ml-5">
                                            <v-row justify="center" class=" my-1 mb-2">
                                                <img src="~/assets/img/credit-card.svg" alt="">
                                            </v-row>
                                            <div class="t10400 Gray_02--text mr-2">
                                                ۰۰۱۸۹۹۶۶۶--
                                            </div>


                                        </div>
                                    </v-row>
                                </v-card>

                                <v-card class="br-15 mt-5 pa-3" outlined>
                                    <v-row justify="space-between" class="ma-2">
                                        <div class="position__absolute mt-1">
                                            <img src="~/assets/img/map-pin.svg" alt="">
                                        </div>
                                        <span class="t10400 Gray_02--text mr-8 dana-fa">
                                            سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                        </span>
                                    </v-row>
                                </v-card>
                            </div>
                        </v-card>
                    </v-col>
                    <div class="bottom_nav2">
                        <OrderPrice :peyment="true" />
                    </div>
                </v-row>
            </v-col>



        </v-row>

    </div>
</template>

<script>
import OrderPrice from '~/components/Order/OrderPrice.vue'
export default {
    components: {
        OrderPrice
    },
    data() {
        return {

        }
    }
}
</script>
</script>