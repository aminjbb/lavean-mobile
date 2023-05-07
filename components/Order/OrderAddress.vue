<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4">
                <span class="t14600 Black--text">
                    انتخاب آدرس ارسال
                </span>
            </div>
            <v-divider></v-divider>
            <v-radio-group v-model="address" class="px-8">

                <v-radio color="black"  :value="address.id" v-for="(address ) in addresses" :key="address.id">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3">
                            <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                              {{address.addressDetail}}
                            </p>

                        </div>
                    </template>
                </v-radio>

            </v-radio-group>
            <v-row justify="end" class="pa-5 pl-8">
                <ModalAddAddres />
            </v-row>

        </v-card>
    </div>
</template>

<script>
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
export default {
    data() {
        return {
            address: ''
        }
    },

    components: {
        ModalAddAddres
    },

    computed: {
        user() {
            try {
                return this.$store.getters['get_meCustomer']
            } catch (error) {
                return ''
            }
        },

        addresses() {
            try {
                return this.user.client.addresses
            } catch (error) {
                return error
            }
        },
    },
}
</script>