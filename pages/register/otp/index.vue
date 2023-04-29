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
                        <v-form @submit.prevent="validate()" ref="sndCode" v-model="valid" class="px-10" id="otpForm">
                            <v-otp-input color="Black" v-model="code" length="5" @finish="validate()" :rules="Rule"
                                class="mt-5"></v-otp-input>
                        </v-form>
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
export default {
    layout: 'empty'
}
</script>