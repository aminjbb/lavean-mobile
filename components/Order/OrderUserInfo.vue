<template>
    <div class="mt-2">
        <v-card outlined rounded="lg pt-3 pb-3">
            <div class="ma-4 d-felx align-content-center">
                <span class="position__absolute">
                    <img src="~/assets/img/info.svg" alt="">
                </span>
                <span class="t14600 Black--text mr-8">
                    ثبت اطلاعات گیرنده
                </span>
            </div>

            <v-divider></v-divider>
            <div class="mt-10 mb-5">

                <v-row class="pb-5">
                    <v-form @submit.prevent="validate()" ref="address" v-model="valid">
                        <div>
                            <v-row justify="center">
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">نام و نام خانوادگی </span>
                                    </div>
                                    <v-text-field color="black" hide-details class="border-r-15 " :rules="nameRule"
                                        v-model="form.addressName" placeholder="نام آدرس" background-color="WhiteSmoke"
                                        outlined></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">شماره موبایل</span>
                                    </div>
                                    <v-text-field color="black" hide-details placeholder="شماره موبایل"
                                        background-color="WhiteSmoke" outlined :rules="addressRule" v-model="form.address"
                                        class="border-r-15 "></v-text-field>


                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">کد ملی</span>
                                    </div>
                                    <v-text-field color="black" hide-details placeholder="کد ملی"
                                        background-color="WhiteSmoke" outlined :rules="addressRule" v-model="form.address"
                                        class="border-r-15 "></v-text-field>


                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">ایمیل</span>
                                    </div>
                                    <v-text-field color="black" hide-details placeholder="ایمیل"
                                        background-color="WhiteSmoke" outlined :rules="addressRule" v-model="form.address"
                                        class="border-r-15 "></v-text-field>


                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t14600 GraniteGray--text">توضیحات سفارش</span>
                                    </div>
                                    <v-textarea color="t12600" hide-details placeholder="توضیحات سفارش"
                                        background-color="WhiteSmoke" outlined :rules="addressRule" v-model="form.address"
                                        class="border-r-15 "></v-textarea>


                                </v-col>


                            </v-row>


                        </div>
                    </v-form>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {

    data() {
        return {
            loading: false,
            valid: false,
            postalCodeHint: "کد پستی باید 10 رقم باشد",
            rule: [(v) => !!v || "این فیلد الزامی است"],
            nameRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) =>
                    /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/.test(v) ||
                    "فقط حروف فارسی ",
            ],
            postalCodeRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) => /^(?:([\u06F0-\u06F90-9]{10}))$/.test(v) || "کد پستی باید 10 رقم باشد",
            ],

            mobileRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) =>
                    /^(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}))$/.test(
                        v
                    ) || "شماره موبایل معتبر نیست",
            ],
            addressRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) => {
                    if (v) return v.length >= 10 || "حداقل باید 10 کاراکتر باشد آدرس";
                    else return true;
                },
            ],

            plaqueRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) => {
                    if (v) return v.length <= 7 || "حداکثر باید 6 کاراکتر مجاز است";
                    else return true;
                },
            ],
            form: {
                province: "",
                city: "",
                postalCode: "",
                address: "",
                plaque: "",
                name: "",
                number: "",
                addressName: '',
                itsMe: ''
            },
        };
    },
}
</script>