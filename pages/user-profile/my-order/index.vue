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
                                <span class="t12400">
                                    شناسه سفارش
                                </span>
                                <span class="t12400">
                                    تاریخ
                                </span>
                                <span class="t12400">
                                    وضعیت
                                </span>

                            </v-row>
                        </v-card>
                        <v-card min-height="178" outlined class=" mt-5 border-r-15 py-7 px-8">
                            <v-row justify="space-between">
                                <span class="t12400">
                                    ۱۲۳۴۵۶۷
                                </span>
                                <span class="t12400">
                                    ۱۴۰۱/۱۰/۰۳
                                </span>

                                <span class="t12400">
                                    تحویل شده
                                </span>
                                <!-- <span class="t14400">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </span> -->
                            </v-row>
                            <v-row justify="start" class="mt-6">
                                <div class="mx-2">
                                    <v-img height="55" width="55"
                                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                        class="border-r-15"></v-img>
                                </div>
                                <div class="mx-2">
                                    <v-img height="55" width="55"
                                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                        class="border-r-15"></v-img>
                                </div>
                                <div class="mx-2">
                                    <v-img height="55" width="55"
                                        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                        class="border-r-15"></v-img>
                                </div>
                            </v-row>

                            <v-row justify="space-between mt-10">
                                <span class="t12400">
                                    ۲۰,۰۰۰,۰۰۰ تومان
                                </span>
                                <span class="t12400">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </span>

                                <!-- <span class="t14400">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </span> -->
                            </v-row>
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
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres
    }
}
</script>