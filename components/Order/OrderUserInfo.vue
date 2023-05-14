<template>
    <div class="mt-2">
        <v-card outlined class="br-15">
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
                    <v-form @submit.prevent="validate()" ref="userInfoOrder" v-model="valid">
                        <div>
                            <v-row justify="center">
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">نام و نام خانوادگی </span>
                                    </div>
                                    <v-text-field color="black" hide-details class="border-r-15 " :rules="nameRule"
                                        v-model="form.fullName" placeholder="نام آدرس" background-color="WhiteSmoke"
                                        outlined></v-text-field>
                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">شماره موبایل</span>
                                    </div>
                                    <v-text-field color="black" hide-details placeholder="شماره موبایل"
                                        background-color="WhiteSmoke" outlined :rules="mobileRule" v-model="form.mobile"
                                        class="border-r-15 "></v-text-field>


                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">کد ملی</span>
                                    </div>
                                    <v-text-field color="black" hide-details placeholder="کد ملی"
                                        background-color="WhiteSmoke" outlined :rules="rule" v-model="form.nationalCode"
                                        class="border-r-15 "></v-text-field>


                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t12600 GraniteGray--text">ایمیل</span>
                                    </div>
                                    <v-text-field color="black" hide-details placeholder="ایمیل"
                                        background-color="WhiteSmoke" outlined :rules="rule" v-model="form.email"
                                        class="border-r-15 "></v-text-field>


                                </v-col>
                                <v-col cols="10">
                                    <div class="px-1 pb-2">
                                        <span class="t14600 GraniteGray--text">توضیحات سفارش</span>
                                    </div>
                                    <v-textarea color="t12600" hide-details placeholder="توضیحات سفارش"
                                        background-color="WhiteSmoke" outlined v-model="form.comment"
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

    methods: {
        setForm() {
            try {
                this.form.fullName = this.user.firstName
                this.form.mobile = this.client.mobile
                this.form.email = this.user.username
                this.form.nationalCode = this.userInfo.nationalCode
            } catch (error) {

            }
        }
    },

    computed: {
        userInfo() {
            try {
                return this.$store.getters['get_meCustomer']
            } catch (error) {

            }
        },

        client() {
            try {
                return this.userInfo.client
            } catch (error) {
                return ''
            }
        },
        user() {
            try {
                return this.client.user
            } catch (error) {
                return ''
            }
        }
    },


    mounted() {
        this.setForm()
    }
}
</script>