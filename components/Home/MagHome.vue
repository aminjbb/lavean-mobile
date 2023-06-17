<template>
    <div class="my-5">
        <div class="px-2 custom-row">
            <v-col cols="5">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="2" class="px-0">
                <div class="text-center">
                    <span class="t14600">لاوین مگ</span>
                </div>
            </v-col>
            <v-col cols="5">
                <v-divider></v-divider>
            </v-col>
        </div>
 
        <div class="my-5 custom-row">

            <div class="mag-home-card">
                <v-row justify="center" class="mt-10">
                    <img width="246" height="211" src="~/assets/img/img-home-blog (2).png" alt="">

                </v-row>
                <div class="text-center pl-5 mt-8">
                    <span class="t14400">چگونه گوشواره خود را در خانه تمیز کنیم؟</span>
                </div>
                <div class="text-left pl-5 mt-2">
                    <v-btn :to="'/lavean-mag/1'" text>
                        <span class="t14400 DeepGreen--text">بیشتر بخون</span>
                    </v-btn>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>