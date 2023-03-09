<template>
    <div class="mt-5">
        <v-row justify="center" align="center">
            <v-col cols="11">
                <v-row justify="center">
                    <v-col cols="12">
                        <div class="container-avatar ma-auto mt-15">
                            <div class="ma-4">
                                <span class="t14600 Black--text">
                                    آدرس ها
                                </span>
                            </div>
                            <div class="box-delivery border-r-15 py-3 mt-3">
                                <v-row justify="center" align="center">
                                    <v-col cols="10">
                                        <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                            سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶ سعادت
                                            آباد، خیابان علامه
                                            جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                        </p>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-icon>mdi-square-edit-outline</v-icon>
                                    </v-col>
                                </v-row>

                            </div>
                            <div class="box-delivery border-r-15 py-3 mt-3">
                                <v-row justify="center" align="center">
                                    <v-col cols="10">
                                        <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                            سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶ سعادت
                                            آباد، خیابان علامه
                                            جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                        </p>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-icon>mdi-square-edit-outline</v-icon>
                                    </v-col>
                                </v-row>

                            </div>
                            <div class="box-delivery border-r-15 py-3 mt-3">
                                <v-row justify="center" align="center">
                                    <v-col cols="10">
                                        <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                            سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶ سعادت
                                            آباد، خیابان علامه
                                            جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
                                        </p>
                                    </v-col>
                                    <v-col cols="2">
                                        <v-icon>mdi-square-edit-outline</v-icon>
                                    </v-col>
                                </v-row>

                            </div>
                        </div>

                        <v-row justify="end" class="pa-5 pl-8">
                            <ModalAddAddres />
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>

    </div>
</template>

<script>
import UserProfileNavigation from '~/components/UserProfile/UserProfileNavigation.vue'
import ModalAddAddres from '~/components/Address/ModalAddAddres.vue'
export default {
    components: {
        UserProfileNavigation,
        ModalAddAddres
    }
}
</script>