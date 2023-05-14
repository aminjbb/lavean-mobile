<template>
    <div class="mt-5">
        <div>
            <v-row justify="space-between" class="pr-10 pl-8 pb-8 pt-6">
                <div class="up-titel-section">
                    <v-row align="center" class="pt-3 pr-2">
                        <span class="mr-3"> <img class="mt-1" src="~/assets/img/package.svg" alt=""></span>
                        <span class="t12400 mr-3">تاریخچه سفارش ها</span>
                    </v-row>
                </div>
                <div>
                    <v-icon @click="$router.go(-1)">
                        mdi-chevron-left-circle-outline
                    </v-icon>
                </div>
            </v-row>
        </div>
        <v-divider></v-divider>
        <v-row justify="center" align="center">
            <v-col cols="9">
                <v-row justify="center">

                    <v-col cols="12">
                        <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    تاریخچه سفارشات
                                </span>
                            </div>

                        </div>


                        <v-card min-height="178" outlined class=" mt-8 border-r-15 py-7 " v-for="(order, index) in orders"
                            :key="order.id">
                            <v-row justify="center" class="mt--58">
                                <v-card height="36" width="250" color="Cultured" outlined class="border-r-15 px-8 ">
                                    <v-row justify="space-between" class="pt-5 pl-2">
                                        <span class="t10400">
                                            شناسه سفارش
                                        </span>
                                        <span class="t10400 ml-5">
                                            تاریخ
                                        </span>
                                        <span class="t10400">
                                            وضعیت
                                        </span>

                                    </v-row>
                                </v-card>
                            </v-row>
                            <v-row justify="space-between" class="mt-8 pr-14 pl-8">
                                <span class="t12400 ml-8 mr-2">
                                    {{ order.id }}
                                </span>
                                <span class="t12400">
                                    {{ orderDate(order.createdAt) }}
                                </span>

                                <span class="t12400 ">
                                    <span v-if="order.currentStatus">
                                        {{ order.currentStatus.name }}</span>

                                </span>
                                <!-- <span class="t14400">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </span> -->
                            </v-row>
                            <v-row justify="start" class="mt-6 mr-7">
                                <div class="mx-2 mt-2" v-for="(variant, i) in order.details" :key="i">
                                    <v-img height="55" width="55" :src="productImage(variant)" class="border-r-15"></v-img>
                                   
                                </div>
                                
                            </v-row>

                            <v-row justify="space-between mt-5 pl-5 pr-13">
                                <span class="t12400 mt-5">
                                    ۲۰,۰۰۰,۰۰۰ تومان
                                </span>
                                <v-btn :to="'/user-profile/my-order/' + order.id" icon class="t12400 mt-3" >
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>

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
import { PublicMethod } from '~/store/classes'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres
    },
    layout: 'empty',
    data() {
        return {
            publicMethod: new PublicMethod
        }
    },

    mounted() {
        this.$store.dispatch('set_myOrders')
    },

    methods: {
        orderDate(e) {
            try {
                var tempDate = e.split('T');
                var splitDate = tempDate[0].split('-');
                return this.publicMethod.gregorian_to_jalali(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]))
            } catch (error) {
                return error
            }
        },

        productImage(e) {
            try {
                return process.env.baseUrl + '/media/' + e.variant.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        }

    },

    computed: {
        orders() {
            return this.$store.getters['get_myOrders']
        },


    }
}
</script>