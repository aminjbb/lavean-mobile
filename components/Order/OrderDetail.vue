<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4 d-felx align-content-center">
                <span class="position__absolute">
                    <img src="~/assets/img/ShoppingCartSimple.svg" alt="">
                </span>
                <span class="t14600 Black--text mr-8">
                    سبد خرید
                </span>
            </div>
            <v-divider></v-divider>
            <div>
                <v-row>
                    <OrderCard v-for="(card , index) in cartDetails" :key="index" :card="card"/>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
import OrderCard from '~/components/Order/OrderCard.vue'
export default {
    components: {
        OrderCard
    },
    computed: {
        cartDetails() {
            try {
                return this.$store.getters['get_meCustomer'].cartDetails
            } catch (error) {
                return []
            }
        }
    }
}
</script>