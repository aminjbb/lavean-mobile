<template>
    <div class="pa-5 mt-10">
        <v-img :src="require('~/assets/img/loginimg.png')"></v-img>
        <div class="register-box w-100">
            <v-row justify="center" class="w-100">
                <div class="text-center w-100">
                    <span class="t24600 white--text ml-5">
                        با لاوین، متفاوت باش!
                    </span>
                </div>
                <div class="number-box mt-10 ml-5">
                    <div class=" py-6 ">
                        <div class="text-right px-13"> <span class="t12400 Black--text">
                                سلام!
                            </span></div>
                        <div class="text-right px-13"> <span class="t12400 Black--text">

                                شماره موبایل خود را وارد کنید.!
                            </span></div>
                        <v-form class="px-10" id="numberForm" ref="sendSms" v-model="valid" @submit.prevent="validate()">
                            <v-text-field height="20" color="Black" placeholder=" شماره موبایل" background-color="white"
                                outlined v-model="number" :rules="mobileRule" class="border-r-15 mt-5"></v-text-field>
                        </v-form>

                        <v-row justify="center">
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
export default {
    layout: 'empty',
    data() {
        return {
            number: "",
            loading: false,
            valid: true,
            mobileRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) =>
                    /^(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}))$/.test(
                        v
                    ) || "شماره موبایل معتبر نیست",
            ],
        };
    },
    methods: {
        validate() {
            this.$refs.sendSms.validate();
            setTimeout(() => {
                if (this.valid) {
                    this.sendSms();
                }
            }, 200);
        },

        sendSms() {

            this.$cookies.set("registerPhone", this.number);
            this.loading = false;
            this.$router.push("/register/otp");
        },
    },
}
</script>