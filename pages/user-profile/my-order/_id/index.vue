<template>
    <div class="mt-5">
        <div>
            <v-row justify="space-between" class="pr-10 pl-8 pb-8 pt-6">
                <div class="up-titel-section">
                    <v-row align="center" class="pt-3 pr-2">
                        <span class="mr-3"> <img class="mt-1" src="~/assets/img/package.svg" alt=""></span>
                        <span class="t12400 mr-3">جزئیات سفارش</span>
                    </v-row>
                </div>
                <div>
                    <v-icon @click="$router.go(-1)">
                        mdi-chevron-left-circle-outline
                    </v-icon>
                </div>
            </v-row>
        </div>
        <v-row justify="center" align="center">
            <v-col cols="10">
                <v-row justify="center" class="mt-3">

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
                                <span class="t12400 mx-1">{{ orderStatus }}</span>
                            </div>
                            <div>
                                <span class="t12400 mx-1 dana-fa">{{ publicMethod.splitChar(orderFinalPrice) }} تومان</span>
                            </div>
                            <div>
                                <span class="t12400 mx-1 dana-fa">{{ orderDate(orderCreatedAt) }}</span>
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
                                    {{ orderAddressDetail }}
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
                                    <OrderCard v-for="(card, index) in details" :key="index" :card="card"  :length="detailsLength"/>
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
import { PublicMethod } from '~/store/classes'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres,
        OrderCard
    },
    layout: 'empty',
    data() {
        return {
            publicMethod: new PublicMethod
        }
    },
    methods: {
        orderDate(e) {
            try {
                var tempDate = e.split('T');
                var splitDate = tempDate[0].split('-');
                return this.publicMethod.gregorian_to_jalali(parseInt(splitDate[0]), parseInt(splitDate[1]), parseInt(splitDate[2]))
            } catch (error) {
                return ''
            }
        },

    },
    computed: {
        order() {
            return this.$store.getters['get_clientOrder']
        },

        customer() {
            try {
                return this.$store.getters['get_meCustomer']
            } catch (error) {
                return ''
            }
        },



        customerName() {
            try {
                return this.customer.client.user.firstName
            } catch (error) {
                return ''
            }
        },
        customerMobile() {
            try {
                return this.customer.client.mobile
            } catch (error) {
                return ''
            }
        },
        customerNationalCode() {
            try {
                return this.customer.nationalCode
            } catch (error) {
                return ''
            }
        },
        details() {
            try {
                return this.order.details
            } catch (error) {
                return []
            }
        },

        detailsLength(){
            try {
                return this.details.length
            } catch (error) {
                return 0
            }
        },

        orderAddressDetail() {
            try {
                return this.order.address.addressDetail

            } catch (error) {
                return ''
            }
        },

        orderStatus() {
            try {
                return this.order.currentStatus.name
            } catch (error) {
                return ''
            }
        },
        orderFinalPrice() {
            try {
                return this.order.finalPrice
            } catch (error) {
                return ''
            }
        },

        orderCreatedAt() {
            try {
                return this.order.createdAt
            } catch (error) {
                return ''
            }
        }
    },

    mounted() {
        this.$store.dispatch('set_clientOrder', this.$route.params.id)
        this.$store.dispatch('set_meCustomer')
    }
}
</script>