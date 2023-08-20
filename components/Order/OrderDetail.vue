<template>
    <div class="my-2">
        <v-card outlined class="br-15">
            <div class="ma-4 d-felx align-content-center">
                <span class="position__absolute">
                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                </span>
                <span class="t14600 Black--text mr-8">
                    سبد خرید
                </span>
            </div>
            <v-divider></v-divider>
            <div v-if="cartDetailsLength > 0">
                <v-row>
                    <OrderCardDetail v-for="(card, index) in cartDetails" :key="index" :card="card" :length="cartDetailsLength"/>
                   
                </v-row>
            </div>
            <div v-else>
                <v-row class="py-10" justify="center">
                    <img src="~/assets/img/orderNull.png" alt="">


                </v-row>
                <div class="mt-5 text-center">
                    <span class="t14600">سبد خرید شما خالی است!
                    </span>
                </div>

                <v-row class="pt-8 mb-15" justify="center">
                    <v-btn to="/products" width="159" height="37" color="Black" dark rounded="xl">
                        <span class="t10600">
                            بازدید از فروشگاه
                        </span>
                    </v-btn>
                </v-row>
              
            </div>
        </v-card>
        <v-row justify="center" class="mt-2" v-if="cartDetailsLength > 0">
            <v-col cols="1">
                <img src="~/assets/img/warning.svg" alt="">
            </v-col>
            <v-col cols="10">
                <p class="GraniteGray--text t11400">هزینه این سفارش هنوز پرداخت نشده‌ و در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.</p>
            </v-col>
        </v-row>
        <div class="text-rigth mt-2 ">
           
        </div>
    </div>
</template>

<script>
import OrderCardDetail from '~/components/Order/OrderCardDetail.vue'
export default {
    components: {
        OrderCardDetail
    },
    computed: {
        
        cartDetails() {
            try {
                return this.$store.getters['get_meCustomer'].cartDetails
            } catch (error) {
                return []
            }
        },
        cartDetailsLength() {
            try {
                return this.cartDetails.length
            } catch (error) {
                return 0
            }
        }
    }
}
</script>