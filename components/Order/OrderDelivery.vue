<template>
    <div class="mt-2">
        <v-card outlined class="br-15">
            <div class="ma-4">
                <span class="position__absolute">
                    <img src="~/assets/img/Truck.svg" alt="">
                </span>
                <span class="t14600 Black--text mr-9 mt-2">
                    انتخاب روش ارسال
                </span>
            </div>
            <v-divider></v-divider>
            <v-radio-group v-model="delivery" class="px-8">

                <v-radio color="black" :value="delivery.id" v-for="(delivery) in deliveryMethods" :key="delivery.id">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3">
                            <p class="t12400 Gray02--text ma-3 mt-2 text-right">
                                {{delivery.name}}
                            </p>
                            <p class="t10400 Gray02--text ma-3 mt-2 text-right">
                                {{delivery.description}}
                            </p>
                        </div>
                    </template>
                </v-radio>
     

            </v-radio-group>
        </v-card>
    </div>

</template>

<script>
export default {
    data() {
        return {
            delivery: ''
        }
    },

    computed:{
        deliveryMethods(){
            try {
                return this.$store.getters['get_deliveryMethods']
            } catch (error) {
                return []
            }
        }
    }
}
</script>