<template>
    <div class="mt-5">
        <v-row justify="center" align="center">
            <v-col cols="11">
                <v-row justify="center">

                    <v-col cols="12">
                        <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    تاریخچه سفارشات
                                </span>
                            </div>

                        </div>

                        <v-card height="56" color="Gray02" outlined class="border-r-15 py-7 px-8">
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
                        <v-card height="56" color="Gray02" outlined class="border-r-15 py-7 px-8 mt-3">
                            <v-row justify="space-between">
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


                        </v-card>


                        <div class="mt-4">
                            <span class="t14600 Black--text">
                                آدرس تحویل سفارش
                            </span>
                        </div>
                        <v-card outlined class="border-r-15 py-3 mt-3" min-height="56">
                            <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                            </p>
                        </v-card>
                        <v-card outlined class="border-r-15 py-3 mt-3" min-height="56">
                            <p class="t14600 Arsenic--text ma-3  text-right">
                                ارسال فوری در تهران
                            </p>
                            <p class="t14400 Arsenic--text ma-3 mx-8 text-right">
                                ارسال در بازه زمانی ۹ تا ۱۵ شنبه
                            </p>
                        </v-card>

                        <v-card outlined rounded="lg pt-3 pb-3" class="mt-3">
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
                        <v-btn outlined block class="rounded-xl mt-3" color="SpanishGray" height="59">
                            بیشتر
                        </v-btn>
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