<template>
    <div class="mt-15">
        <v-row justify="center" align="center">
            <v-col cols="11">
                <v-row justify="center">
                    <v-col cols="12">
                        <UserProfileNavigation />

                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
export default {
    components: {
        UserProfileNavigation
    },

    beforeMount() {
        if (this.$cookies.get('customer_token')) {
            this.$store.dispatch('set_meCustomer')
            this.$store.dispatch('public/set_provinces')
        }
        else {
            this.$router.push('/register')
        }
    }
}
</script>