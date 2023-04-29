<template>
    <v-row justify="center" class="pt-5">


       
        <div class="mt-2 price-order-box border-r-15">
            <v-row justify="space-between " align="center" class="pa-5 px-8">
                <div>
                    <span class="t12400 ">مجموع کل تخفیف</span>
                </div>
                <div>
                    <span class="t14400 Black--text">۲۵٬۰۰۰٬۰۰۰ <span class="t12400">
                            تومان
                        </span></span>
                </div>
            </v-row>
        </div>

        <v-row justify="center" align="center" class="mt-1 mr-1 px-15">
            <v-col cols="6">
                <div>
                    <span class="t12400 GraniteGray--text">قابل پرداخت</span>
                </div>

                <div>
                    <span class="t12600 GraniteGray--text">۲۵٬۰۰۰٬۰۰۰ <span
                            class="t12400 GraniteGray--text">تومان</span></span>
                </div>


            </v-col>
            <v-col cols="6" v-if="!peyment">
                <v-btn block color="Black" dark rounded="xl" >
                    <span class="t12400">
                        ادامه خرید
                    </span>
                </v-btn>
            </v-col>
            <v-col cols="6" v-else>
                <v-btn block color="Black" dark rounded="xl" >
                    <span class="t10600">
                        انتقال به درگاه پرداخت
                    </span>
                </v-btn>
            </v-col>
        </v-row>
    </v-row>
</template>

<script>
export default {
    props:{
        peyment:false
    }
}

</script>