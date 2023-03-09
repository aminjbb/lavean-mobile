<template>
    <v-container class="mt-10 position__relative">

        <div class="info-home-box d-flex justify-center">
            <v-card   width="335" color="WhiteSmoke" class="LightSilver-box pt-15 px-10 t14400 border-radius-45" rounded="xl"
                outlined>
                <span class="position__absolute t18600 why-lavin mr-6">چرا از لاوین <span class="white--text">
                        خرید میکنند؟
                    </span></span>
                <v-col cols="11"  class="mt-3">
                    <p class="t10400 VampireBlack--text">ارسال رایگان به سراسر کشور</p>
                    <p  class="t10400 VampireBlack--text">امکان تعویض تا یک هفته بعد از خرید</p>
                    <p  class="t10400 VampireBlack--text">عودت و بازگشت وجه تا 24 ساعت بعد از خرید</p>
                    <p  class="t10400 VampireBlack--text">با هر خرید 2% از کل مبلغ سفارشتان را در کیف پول دریافت و برای خرید بعدی از اعتبارتان استفاده
                        کنید!</p>
                    <p  class="t10400 VampireBlack--text">تضمین اصالت کالا</p>
                    <p  class="t10400 VampireBlack--text">تحویل سریع در کوتاه ترین زمان</p>
                    <p  class="t10400 VampireBlack--text">امکان ابکاری محصولات قبل از ارسال</p>
                </v-col>
                <div class="info-image-box radius-img-box">
                    <v-img class="radius-img-box " height="179" width="242" :src="require('~/assets/img/template2.png')"></v-img>
                </div>
            </v-card>


        </div>
    </v-container>
</template>

<script>
export default {

}
</script>