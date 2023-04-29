<template>
    <div class="mt-5">
        <v-row justify="center" align="center">
            <v-col cols="10">
                <v-row justify="center" class="mt-10">

                    <v-col cols="12">
                        <!-- <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    تاریخچه سفارشات
                                </span>
                            </div>

                        </div> -->

                        <v-card height="56" color="Cultured" outlined class="border-r-15 py-7 px-8">
                            <v-row justify="space-between">
                                <div>
                                    <span class="t12600 mx-1">وضعیت</span>
                                </div>
                                <div>
                                    <span class="t12600 mx-1">مبلغ</span>
                                </div>
                                <div>
                                    <span class="t12600 mx-1">تاریخ</span>
                                </div>

                            </v-row>


                        </v-card>
                        <v-row justify="space-between" class="pa-5 mb-1">
                            <div>
                                <span class="t12400 mx-1">در انتظار تایید</span>
                            </div>
                            <div>
                                <span class="t12400 mx-1">۲۰,۰۰۰,۰۰۰ تومان</span>
                            </div>
                            <div>
                                <span class="t12400 mx-1">۱۴۰۱/۱۰/۰۳</span>
                            </div>

                        </v-row>
                        <v-divider></v-divider>
                        <v-card outlined class="border-r-15 py-3 mt-3" min-height="56">
                            <v-row align="center" class="ma-3">
                                <span class="mt-2 ml-2">
                                    <img width="19" height="19" src="~/assets/img/Truck.svg" alt="">
                                </span>
                                <span class="t14600 Black--text">
                                    ارسال فوری در تهران
                                </span>
                            </v-row>
                           
                            <p class="t14400 Arsenic--text ma-3 mx-10 text-right">
                                ارسال در بازه زمانی ۹ تا ۱۵ شنبه
                            </p>
                        </v-card>

                        <v-card outlined class="border-r-15 py-3 mt-3" min-height="56">
                            <v-row align="center" class="ma-3">
                                <span class="mt-2 ml-2">
                                    <img src="~/assets/img/map-pin.svg" alt="">
                                </span>
                                <span class="t14600 Black--text">
                                    آدرس تحویل سفارش
                                </span>
                            </v-row>
                            <div class="ml-5 mr-8 my-4"><span class="t14400 Arsenic--text  text-right">
                                    سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                </span></div>
                        </v-card>


                        <v-card outlined rounded="lg pt-3 pb-3" class="my-3">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    سبد خرید
                                </span>
                            </div>

                            <div>
                                <v-row>
                                    <OrderCard />
                                </v-row>
                            </div>
                        </v-card>
                    
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import OrderCard from '~/components/Order/OrderCard.vue'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres,
        OrderCard
    }
}
</script>