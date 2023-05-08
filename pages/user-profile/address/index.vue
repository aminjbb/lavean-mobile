<template>
    <div class="mt-5">
        <div>
            <v-row justify="space-between" class="pr-10 pl-8 pb-8 pt-6">
                <div class="up-titel-section">
                    <v-row align="center" class="pt-3 pr-2">
                        <span class="mr-3"> <img class="mt-1" src="~/assets/img/map-pin-up.svg" alt=""></span>
                        <span class="t12400 mr-3">آدرس ها</span>
                    </v-row>
                </div>
                <div>
                    <v-icon @click="$router.go(-1)">
                        mdi-chevron-left-circle-outline
                    </v-icon>
                </div>
            </v-row>
        </div>
        <v-divider></v-divider>
        <v-row justify="center" align="center">
            <v-col cols="11">
                <v-row justify="center">
                    <v-col cols="12">
                        <div class="container-avatar ma-auto mt-10">
                            <div class="box-delivery border-r-15 py-3 mt-3" :value="address.id"
                                v-for="(address ) in addresses" :key="address.id">
                                <v-row justify="center" align="center">
                                    <v-col cols="10">
                                        <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                            {{ address.addressDetail }}
                                        </p>
                                    </v-col>
                                    <v-col cols="2">
                                        <ModalEditAddress :address="address"/>
                                     
                                    </v-col>
                                </v-row>

                            </div>


                        </div>

                        <v-row justify="end" class="pa-5 pl-8">
                            <v-col cols="8">
                                <v-btn block color="Black" dark rounded="xl" @click="openMapAddress()">
                                    <span class="t12400">
                                        اضافه کردن آدرس جدید
                                    </span>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>
        <ModalAddAddres />
        <ModalMapuserAddress />
    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
import ModalMapuserAddress from '~/components/Address/ModalMapuserAddress.vue'
import ModalEditAddress from '~/components/Address/ModalEditAddress.vue'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres,
        ModalMapuserAddress,
        ModalEditAddress
    },
    layout: 'empty',
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

    beforeMount() {
        if (this.$cookies.get('customer_token')) {
            this.$store.dispatch('set_meCustomer')
            this.$store.dispatch('public/set_provinces')
        }
        else {
            this.$router.push('/')
        }
    },
}
</script>