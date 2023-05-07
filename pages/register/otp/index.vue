<template>
    <div class="pa-5 mt-10">
        <v-img :src="require('~/assets/img/otpimg.png')"></v-img>
        <div class="register-box w-100">
            <v-row justify="center" class="w-100">
                <div class="text-center w-100">
                    <span class="t24600 white--text ml-5">
                        با لاوین، متفاوت باش!
                    </span>
                </div>
                <div class="number-box mt-10 ml-5">
                    <div class=" py-6 ">
                        <div class="text-right px-13"> <span class="t12600 Black--text">
                                کد تایید را وارد کنید.

                            </span></div>
                        <div class="text-right pr-13"> <span class="t10400 Black--text">

                                کد تایید برای شماره موبایل ۰۹۳۰۲۴۸۳۷۸۵ ارسال شد.

                            </span></div>
                        <div class="mx-auto" style="max-width: 320px; direction: ltr">
                            <v-form @submit.prevent="validate()" ref="sndCode" v-model="valid" class="px-10" id="otpForm">
                                <v-otp-input color="Black" v-model="code" length="5" @finish="validate()" :rules="Rule"
                                    class="mt-5"></v-otp-input>
                            </v-form>
                        </div>

                        <!-- <v-form >
                            <v-text-field height="20" color="Black" placeholder=" شماره موبایل" background-color="white"
                                outlined v-model="number" :rules="mobileRule" class="border-r-15 mt-5"></v-text-field>
                        </v-form> -->

                        <v-row justify="center" class="mt-1">
                            <v-btn @click="validate()" :loading="loading" width="164" height="29" class="px-15"
                                color="Black" dark rounded="xl">
                                <span class="t12400">
                                    ورود
                                </span>
                            </v-btn>
                        </v-row>

                        <div class="mt-8 text-center">
                            <span class="t10400 DimGray--text">ورود شما به معنای پذیرش شرایط ‌وقوانین حریم‌خصوصی لاوین
                                است.</span>
                        </div>
                        <v-row justify="center" class="mt-3">
                            <div class="mt-5"><v-img width="70" height="16"
                                    :src="require('~/assets/img/lavin-logo.png')"></v-img></div>
                        </v-row>

                    </div>
                </div>
            </v-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    layout: 'empty',
    data() {
        return {
            countDown: 120,
            phone: "",
            loading: false,
            toast: false,
            text: '',
            color: '',
            valid: true,
            resendLoading: false,
            code: "",
            Rule: [(v) => !!v || "این فیلد الزامی است"],
        };
    },
    methods: {
        convertPersianNumber(str) {
            var persianNumbers = [
                /۰/g,
                /۱/g,
                /۲/g,
                /۳/g,
                /۴/g,
                /۵/g,
                /۶/g,
                /۷/g,
                /۸/g,
                /۹/g,
            ];
            var englishnumber = [
                /0/g,
                /1/g,
                /2/g,
                /3/g,
                /4/g,
                /5/g,
                /6/g,
                /7/g,
                /8/g,
                /9/g,
            ];

            if (typeof str === "string") {
                for (var i = 0; i < 10; i++) {
                    str = str.replace(persianNumbers[i], i).replace(englishnumber[i], i);
                }
            }
            return str;
        },
        validate() {
            this.$refs.sndCode.validate();
            setTimeout(() => {
                if (this.valid) {
                    this.sendCode();
                }
            }, 100);
        },

        sendCode() {
            this.loading = true;
            axios({
                method: "post",
                url: process.env.apiUrl + "user/client/otp/",
                data: {
                    mobile: this.convertPersianNumber(this.phone),
                    code: this.code,
                },
            })
                .then((response) => {
                    this.$cookies.set("customer_token", response.data.access);
                    this.$store.commit("set_isLogin", true);
                    if (this.$cookies.get('urlBack')) {
                        this.$router.push(this.$cookies.get('urlBack'))
                        this.$cookies.remove('urlBack')
                    }
                    else {
                        this.$router.push('/')
                    }

                })
                .catch((err) => {

                    if (err.response.status == 400) {
                        this.openToast('کد وارد شده صحیح نیست', 'error')
                    }
                    this.loading = false;
                });
        },

        openToast(text, color) {

            this.toast = true,
                this.text = text,
                this.color = color,


                setTimeout(() => {
                    this.closeToast();
                }, 4000);
        },

        closeToast() {

            this.toast = false
            this.text = ""
            this.color = ""

        },

        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1;
                    this.countDownTimer();
                }, 1000);
            }
        },

        sendSms() {
            this.countDown = 120;
            this.countDownTimer();
            this.resendLoading = true;
            axios({
                method: "get",
                url: process.env.apiUrl + "user/client/otp",
                params: {
                    mobile: this.convertPersianNumber(this.phone),
                },
            })
                .then((response) => {
                    this.resendLoading = false;
                    this.code = "";
                })
                .catch((err) => {
                    this.resendLoading = false;
                });
        },


    },

    mounted() {
        // this.countDownTimer();
        this.phone = this.$cookies.get("registerPhone");
        this.sendSms();
    },
}
</script>