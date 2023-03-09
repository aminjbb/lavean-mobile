<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4">
                <span class="t14600 Black--text">
                    انتخاب آدرس ارسال
                </span>
            </div>
            <v-divider></v-divider>
            <v-radio-group v-model="radios" class="px-8">

                <v-radio value="Google">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3">
                            <p class="t14400 Arsenic--text ma-3 my-4 text-right">
                                سعادت آباد، خیابان علامه جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶ سعادت آباد، خیابان علامه
                                جنوبی، کوچه ۳۴ شرقی، پلاک ۲۷، واحد ۱۶
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
            radios: ''
        }
    },

    components: {
        ModalAddAddres
    }
}
</script>