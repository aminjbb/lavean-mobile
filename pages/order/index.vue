<template>
    <div class="rcontainer mt-15 mb-45">
        <div class="custom-row" >
            <v-col cols="11">
                <v-row justify="center">
                    <v-col cols="12 " class="mb-10">
                        <OrderDetail v-if="orderStep == 1" />
                        <OrderUserInfo ref="OrderUserInfo" v-if="orderStep == 2" />
                        <OrderAddress ref="OrderAddress" v-if="orderStep == 3" />
                        <OrderDelivery ref="OrderDelivery" v-if="orderStep == 4" />
                        <OrderBranche v-if="orderStep == 5" />


                    </v-col>
                    <div class="bottom_nav2">
                        <v-row justify="center" class="pt-5">
                            <div class="mt-2 price-order-box border-r-15">
                                <v-row justify="space-between " align="center" class="pa-5 px-8">
                                    <div>
                                        <span class="t12400 ">مجموع کل تخفیف</span>
                                    </div>
                                    <div>
                                        <span class="t14400 Black--text dana-fa">{{ publicMethod.splitChar(discountPrice) }}
                                            <span class="t12400">
                                                تومان
                                            </span></span>
                                    </div>
                                </v-row>
                            </div>

                            <v-row justify="center" align="center" class="mt-1 mr-1 px-15">
                                <v-col cols="6">
                                    <div>
                                        <span class="t12400 GraniteGray--text">قابل پرداخت</span>
                                    </div>

                                    <div>
                                        <span
                                            class="t12600 GraniteGray--text dana-fa">{{ publicMethod.splitChar(cardPrice) }}<span
                                                class="t12400 GraniteGray--text mr-1">تومان</span></span>
                                    </div>


                                </v-col>
                                <v-col cols="6" v-if="!peyment">
                                    <v-btn @click="netxStep()" block color="Black" dark rounded="xl">
                                        <span class="t12400">
                                            ادامه خرید
                                        </span>
                                    </v-btn>
                                </v-col>
                                <v-col cols="6" v-else>
                                    <v-btn block color="Black" dark rounded="xl">
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

        </div>
    </div>
</template>

<script>

import OrderDetail from '~/components/Order/OrderDetail.vue'
import OrderPrice from '~/components/Order/OrderPrice.vue'
import OrderDelivery from '~/components/Order/OrderDelivery.vue'
import OrderUserInfo from '~/components/Order/OrderUserInfo.vue'
import OrderBranche from '~/components/Order/OrderBranche.vue'
import OrderAddress from '~/components/Order/OrderAddress.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import Footer from '~/components/Public/Footer'
import axios from 'axios'
import { PublicMethod } from "~/store/classes";
export default {
    layout: 'withOutFooter',
    components: {
        OrderDetail,
        OrderUserInfo,
        OrderPrice,
        OrderDelivery,
        OrderBranche,
        OrderAddress,
        ModalAddAddres,
        Footer
    },

    data() {
        return {
            publicMethod: new PublicMethod()
        }
    },

    methods: {
        netxStep() {

            if (this.orderStep == 2) {
                this.$refs.OrderUserInfo.$refs.userInfoOrder.validate()
                setTimeout(() => {
                    if (this.$refs.OrderUserInfo.valid) {

                        this.updateUser()
                    }
                }, 100);
            }
            else if (this.orderStep == 3) {
                sessionStorage.setItem('orderAddress', this.$refs.OrderAddress.address)
                this.$store.commit('incress_orderStep')
            }
            else if (this.orderStep == 4) {
                sessionStorage.setItem('orderDelivery', this.$refs.OrderDelivery.delivery)
                this.$store.commit('incress_orderStep')
            }
            else if (this.orderStep == 5) {
                this.makeOrder()
            }
            else {
                this.$store.commit('incress_orderStep')
            }

            // 
        },
        makeOrder() {
            axios({
                method: 'post',
                url: process.env.apiUrl + 'order/client/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    client_comment: sessionStorage.getItem('orderComment'),
                    address: sessionStorage.getItem('orderAddress'),
                    delivery: sessionStorage.getItem('orderDelivery'),
                    shipping: {
                        time_from: "18:00",
                        time_to: "20:00",
                        date: "2023-01-01"
                    }
                }
            })
                .then(response => {
                    this.$router.push('/order/' + response.data.id)
                })
                .catch(err => {

                })
        },
        updateClient() {
            axios({
                method: 'put',
                url: process.env.apiUrl + 'user/client/me/client/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    mobile: this.$refs.OrderUserInfo.form.mobile,
                }
            })
                .then(response => {
                    sessionStorage.setItem('orderComment', this.$refs.OrderUserInfo.form.comment)
                    this.$store.commit('incress_orderStep')
                })
                .catch(err => {

                })
        },
        updateCustomer() {
            axios({
                method: 'put',
                url: process.env.apiUrl + 'customer/client/me/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    national_code: this.$refs.OrderUserInfo.form.nationalCode,
                }
            })
                .then(response => {
                    this.updateClient()
                })
                .catch(err => {

                })
        },
        updateUser() {
            axios({
                method: 'put',
                url: process.env.apiUrl + 'user/client/me/user/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    first_name: this.$refs.OrderUserInfo.form.fullName,
                    email: this.$refs.OrderUserInfo.form.email,
                }
            })
                .then(response => {
                    this.updateCustomer()
                })
                .catch(err => {

                })
        },
        preStep() {
            this.$store.commit('decress_orderStep')
        }
    },

    computed: {
        orderStep() {
            return this.$store.getters['get_orderStep']
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
    watch: {
        cartDetails(val) {
            this.cartDetailsLength = val
        }
    },
    beforeMount() {
        this.$store.dispatch('set_meCustomer')
        this.$store.dispatch('set_deliveryMethods')
    },

    mounted() {
        setTimeout(() => {
            this.show = true
        }, 3000);
        if (sessionStorage.getItem('orderStep')) {
            this.$store.commit('set_orderStep', sessionStorage.getItem('orderStep'))
        }
        else {
            this.$store.commit('set_orderStep', 1)
        }
    }
}
</script>