<template>
    <div class=" mt-15">
        <v-row justify="center" align="center">

            <v-col cols="11">
                <div :class="paidAt ? 'success-payment' : 'unsuccess-payment'">
                    <v-row align="center" v-if="paidAt" class="pa-4 pt-8">
                        <img class="mx-2" width="31" height="31" :src="require('~/assets/img/check-circle.svg')" />
                        <span class="t14400"> سفارش
                            با موفقیت ثبت شد!</span>

                    </v-row>

                    <v-row align="center" v-else class="pa-4 pt-8">
                        <img class="mx-2" width="31" height="31" :src="require('~/assets/img/x-circle.svg')" />
                        <span class="t14400"> پرداخت شما به خطا خورد!</span>

                    </v-row>
                </div>
                <v-row justify="center mt-5">
                    <v-col cols="12">
                        <v-card outlined class="br-15 px-10 pl-15 py-4" height="124">
                            <v-row justify="start" align="center" class="mt-1">
                                <v-col cols="1" class="pa-0"> <span class="mt-2">
                                        <img src="~/assets/img/info-up.svg" alt="">
                                    </span>
                                </v-col>
                                <v-col cols="11" class="pa-0">
                                    <span class="t12400 ">
                                        روند پردازش سفارش از طریق پیامک به اطلاع شما خواهد رسید.
                                    </span></v-col>
                            </v-row>
                            <v-row align="center" class="mt-3">
                                <v-col cols="1" class="pa-0">
                                    <span class="mt-2">
                                        <img src="~/assets/img/info-up.svg" alt="">
                                    </span>
                                </v-col>

                                <v-col cols="11" class="pa-0">
                                    <span class="t12400 mx-2">
                                        ارائه کارت ملی هنگام تحویل کالا الزامی‌ است.
                                    </span>
                                </v-col>

                            </v-row>
                        </v-card>
                        <div class="payment-status-box mt-5">
                            <v-row justify="space-between" align="center" class="py-6 px-8">
                                <span class="t14400">وضعیت سفارش</span>
                                <span class="t14400"> {{ orderStatus }}</span>
                            </v-row>
                        </div>
                        <div class="payment-status-box mt-5 ">
                            <v-row justify="space-between" align="center" class="py-6 px-8">
                                    <span class="t14400">وضعیت پرداخت</span>
                                    <span class="t14400" v-if="paidAt">
                                        پرداخت شد</span>
                                    <span class="t14400" v-else>
                                        در انتظار پرداخت</span>
                                </v-row>
                        </div>
                        <v-card outlined class="mt-5 pt-3 mb-5 br-15" width="1200">
                            <div class="ma-4 d-felx align-content-center">
                                <span class="position__absolute">
                                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                                </span>
                                <span class="t14600 Black--text mr-8">
                                    جزئیات سفارش
                                </span>
                            </div>
                            <v-divider></v-divider>
                            <div class="mx-5 mt-5">
                                <v-card height="66" class="br-15 pa-3" outlined>
                                    <v-row justify="space-between" class="pt-2">
                                        <div class="ma-1 mr-5">
                                            <v-row justify="center" class=" my-1">
                                                <img src="~/assets/img/user.svg" alt="">
                                            </v-row>
                                            <div class="t10400 Gray_02--text mr-2">
                                                {{ customerName }}
                                            </div>
                                        </div>
                                        <div class="ma-1 ">
                                            <v-row justify="center" class=" my-1  mb-2">
                                                <img src="~/assets/img/phone.svg" alt="">
                                            </v-row>
                                            <div class="t10400 Gray_02--text mr-2 dana-fa">
                                                {{ customerMobile }}
                                            </div>

                                        </div>
                                        <div class="ma-1 ml-5">
                                            <v-row justify="center" class=" my-1 mb-2">
                                                <img src="~/assets/img/credit-card.svg" alt="">
                                            </v-row>
                                            <div class="t10400 Gray_02--text mr-2">
                                                {{ customerNationalCode }}
                                            </div>


                                        </div>
                                    </v-row>
                                </v-card>

                                <v-card class="br-15 mt-5 pa-3" outlined>
                                    <v-row justify="space-between" class="ma-2">
                                        <div class="position__absolute">
                                            <img src="~/assets/img/map-pin.svg" alt="">
                                        </div>
                                        <span class="t10400 Gray_02--text mr-8 dana-fa">
                                            {{ orderAddressDetail }}
                                        </span>
                                    </v-row>
                                </v-card>
                                <div>
                                    <v-row>
                                        <OrderCard v-for="(card, index) in details" :key="index" :card="card"  :length="detailsLength"/>

                                    </v-row>
                                </div>
                            </div>

                        </v-card>
                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            load: false,
            isPayment: false
        }
    },

    mounted() {
        this.$store.dispatch('set_clientPayment', this.$route.query.payment)
        this.$store.dispatch('set_meCustomer')
    },

    methods: {
        againPayment() {
            window.location.href = 'https://sandbox.zarinpal.com/pg/StartPay/' + this.payment.authority
        }
    },

    computed: {
        payment() {
            return this.$store.getters['get_clientPayment']
        },
        paidAt() {
            try {
                if (this.payment.paidAt) {
                    return true
                }
                else {
                    return false
                }
            } catch (error) {
                return ''
            }
        },
        order() {
            try {
                return this.payment.order
            } catch (error) {
                return ''
            }
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

    watch: {
        payment() { this.load = true }

    }
}
</script>