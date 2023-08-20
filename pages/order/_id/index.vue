<template>
    <div class="mt-15 mb-45">
        <v-row justify="center" align="center" class="mb-10">

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
                            <div class="px-5 mt-5 position__relative">
                                <v-text-field color="black" dense prepend-inner-icon="mdi-gift-outline" height="39"
                                    background-color="white" outlined class="border-r-15" placeholder="کد هدیه را وارد کنید"
                                    clearable></v-text-field>
                                <v-btn color="DeepGreen" width="81" height="39" class="gift-btn" dark>
                                    <span class="t12400 white--text">
                                        ثبت
                                    </span>
                                </v-btn>
                            </div>
                        </v-card>
                        <v-card outlined class="mt-5 pt-3  br-15" width="1200" >
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
                                        <OrderCard v-for="(card, index) in details" :key="index" :card="card" :length="detailsLength"/>

                                    </v-row>
                                </div>
                            </div>

                        </v-card>

                    </v-col>
                    <div class="bottom_nav2">
                        <v-row justify="center" class="pt-5">
                            <div class="mt-2 price-order-box border-r-15">
                                <v-row justify="space-between " align="center" class="pa-5 px-8">
                                    <div>
                                        <span class="t12400 ">مجموع کل تخفیف</span>
                                    </div>
                                    <div>
                                        <span class="t14400 Black--text dana-fa">{{ publicMethod.splitChar(discountPrice) }} <span
                                                class="t12400">
                                                تومان
                                            </span></span>
                                    </div>
                                </v-row>
                            </div>

                            <v-row justify="center" align="center" class="mt-1 mr-1 px-15">
                                <v-col cols="6">
                                    <div>
                                        <span class="t12400 DeepGreen--text">قابل پرداخت</span>
                                    </div>

                                    <div>
                                        <span class="t12600 DeepGreen--text dana-fa">{{ publicMethod.splitChar(cardPrice) }} <span
                                                class="t12400 DeepGreen--text mr-1">تومان</span></span>
                                    </div>


                                </v-col>

                                <v-col cols="6">
                                    <v-btn :loading="loading" @click="payment()" block color="Black" dark rounded="xl">
                                        <span class="t10600">
                                            انتقال به درگاه پرداخت
                                        </span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-row>
                    </div>
                </v-row>
            </v-col>



        </v-row>
        <Footer/>
    </div>
</template>

<script>
import OrderPrice from '~/components/Order/OrderPrice.vue'
import OrderCard from '~/components/Order/OrderCard.vue'
import axios from 'axios'
import { PublicMethod } from "~/store/classes";
import Footer from '~/components/Public/Footer'
export default {
    layout:'withOutFooter',
    components: {
        OrderPrice,
        OrderCard,
        Footer
    },
    data() {
        return {
            loading: false,
            publicMethod: new PublicMethod()
        }
    },

    computed: {
        detailsLength(){
            try {
                return this.details.length
            } catch (error) {
                return 0
            }
        },
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

        orderAddressDetail() {
            try {
                return this.order.address.addressDetail

            } catch (error) {
                return ''
            }
        },
        cartDetails() {
            try {
                return this.$store.getters['get_meCustomer'].cartDetails
            } catch (error) {
                return []
            }
        },
        discountPrice() {
            try {
                var discount = 0
                this.cartDetails.forEach(element => {
                    if (element.variant.product.discountPercent) {
                        discount += element.variant.price * (element.variant.product.discountPercent / 100)
                    }

                });
                return discount;
            } catch (error) {
                return ''
            }
        },
        cardPrice() {
            try {
                var price = 0
                this.cartDetails.forEach(element => {
                    price += element.variant.price
                });
                return price;
            } catch (error) {
                return ''
            }
        },
        finalPrice() {
            try {

                return this.cardPrice - this.discountPrice;
            } catch (error) {
                return ''
            }
        },
    },

    methods: {
        payment() {
            this.loading = true
            axios({
                method: 'post',
                url: process.env.apiUrl + 'payment/client/order/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    order: this.order.id,

                }
            })
                .then(response => {
                    this.loading = false;
                    // console.log(response.data.authority);
                    window.location.href = 'https://sandbox.zarinpal.com/pg/StartPay/' + response.data.authority
                })
                .catch(err => {
                    this.loading = false
                })
        }
    },

    mounted() {
        this.$store.dispatch('set_clientOrder', this.$route.params.id)
        this.$store.dispatch('set_meCustomer')
    }

}
</script>
</script>