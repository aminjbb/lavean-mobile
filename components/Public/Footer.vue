<template>
    <div class="green-footer mt-15" :class="!footer ? 'pt-2' : ''">
        <div class="mt-12 text-center">
            <span class="t14600 MagicMint--text">
                لاوین در شبکه های اجتماعی
            </span>

        </div>
        <div class="custom-row mt-3">
            <span class="mx-1">
                <v-img width="31" height="31" :src="require('~/assets/img/InstagramLogo.svg')"></v-img>
            </span>
            <span class="mx-1">
                <v-img width="33" height="33" :src="require('~/assets/img/FacebookLogo.svg')"></v-img>
            </span>

            <span class="mx-1">
                <v-img width="30" height="31" :src="require('~/assets/img/TelegramLogo.svg')"></v-img>
            </span>

        </div>
        <div class="black-footer pt-10">
            <div class="text-center">
                <span class="t12600 MagicMint--text">
                    تلفن تماس
                </span>
            </div>
            <div class="text-center mt-2">
                <span class="t12400 white--text">
                    44000071-72
                </span>
            </div>
            <div class="text-center mt-8">
                <span class="t12600 MagicMint--text">
                    آدرس دفتر مرکزی
                </span>
            </div>
            <div class="text-center mt-2">
                <span class="t12400 white--text">
                    اتوبان ستاری، جنب مجتمع تجاری کورش
                </span>
            </div>

            <div class="custom-row mt-15">
                <div class="text-center">
                    <v-img width="98" height="24" :src="require('~/assets/img/darkLogo.png')"></v-img>
                </div>
            </div>
            <div class="custom-row ">
                <div class="mt-5">
                    <v-img width="22" height="22" :src="require('~/assets/img/roshaklogo.png')"></v-img>
                </div>


            </div>

            <div class="text-center ">
                <span class="t10400 white--text">
                    Powered by Roshak
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: { footer: true }
}
</script>