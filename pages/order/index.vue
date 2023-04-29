<template>
    <div class="rcontainer my-15">
        <v-row justify="center" align="center">
            <v-col cols="11">
                <v-row justify="center">
                    <v-col cols="12 ">
                        <!-- <OrderDetail /> -->
                        <!-- <OrderUserInfo /> -->
                        <!-- <OrderDelivery /> -->
                        <OrderBranche />
                        <!-- <OrderAddress /> -->

                    </v-col>
                    <div class="bottom_nav2">
                        <OrderPrice />
                    </div>

                </v-row>
            </v-col>

        </v-row>

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
export default {
    components: {
        OrderDetail,
        OrderUserInfo,
        OrderPrice,
        OrderDelivery,
        OrderBranche,
        OrderAddress,
        ModalAddAddres
    }
}
</script>