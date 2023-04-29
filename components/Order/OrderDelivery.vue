<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4">
                <span class="position__absolute">
                    <img src="~/assets/img/Truck.svg" alt="">
                </span>
                <span class="t14600 Black--text mr-9 mt-2">
                    انتخاب روش ارسال
                </span>
            </div>
            <v-divider></v-divider>
            <v-radio-group v-model="radios" class="px-8">

                <v-radio color="black" value="Google">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3">
                            <p class="t12400 Gray02--text ma-3 mt-2 text-right">
                                ارسال با تیپاکس
                            </p>
                            <p class="t10400 Gray02--text ma-3 mt-2 text-right">
                                ۲ الی ۳ روز کاری برای شهرستان ها زمان بر است.
                            </p>
                        </div>
                    </template>
                </v-radio>
                <v-radio color="black" value="Google1">
                    <template v-slot:label>
                        <div class="box-delivery border-r-15 py-3">
                            <p class="t12400 Gray02--text ma-3 mt-2 text-right">
                                ارسال با پیک لاوین
                            </p>
                            <p class="t10400 Gray02--text ma-3 mt-2 text-right">
                                ۲ الی ۳ روز کاری برای شهرستان ها زمان بر است.
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
            radios: ''
        }
    }
}
</script>