<template>
    <div class="mt-2 mb-10">
        <v-card outlined class="br-15">
            <div class="ma-4">
                <span class="t14600 Black--text">
                    انتخاب آدرس ارسال
                </span>
            </div>
            <v-divider></v-divider>
            <v-radio-group v-model="address" class="px-8">

                <v-radio color="black" :value="address.id" v-for="(address ) in addresses" :key="address.id">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3">
                            <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                {{ address.addressDetail }}
                            </p>

                        </div>
                    </template>
                </v-radio>

            </v-radio-group>

            <v-row justify="end" class="pa-5 pl-8">
                <v-col cols="8">
                    <v-btn block color="Black" dark rounded="xl" @click="openMapAddress()">
                        <span class="t12400">
                            اضافه کردن آدرس جدید
                        </span>
                    </v-btn>
                </v-col>
            </v-row>

        </v-card>
        <ModalAddAddres />
        <ModalMapuserAddress />
    </div>
</template>

<script>
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import ModalMapuserAddress from '~/components/Address/ModalMapuserAddress.vue'
import ModalEditAddress from '~/components/Address/ModalEditAddress.vue'
export default {
    data() {
        return {
            address: ''
        }
    },

    components: {
        ModalAddAddres,
        ModalMapuserAddress,
        ModalEditAddress
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

    methods: {
        openMapAddress() {
            localStorage.setItem('modalMap', 'add')
            this.$store.commit('public/set_addressMapModal', true)
        }
    },
}
</script>