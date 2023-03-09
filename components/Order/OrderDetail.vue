<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4">
                <span class="t14600 Black--text">
                    سبد خرید
                </span>
            </div>

            <div>
                <v-row>
                    <OrderCard/>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
import OrderCard from '~/components/Order/OrderCard.vue'
export default {
    components:{
        OrderCard
    }
}
</script>