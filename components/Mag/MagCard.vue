<template>
    <div class="br-15 mag-card mt-5" outlined @click="$router.push('/lavean-mag/1')">
        <v-img class="br-15" height="293" :src="require('~/assets/img/tmplate3.png')"></v-img>
        <v-row justify="space-between" class="pa-5 pt-5">
            <v-col cols="12">
                <h3 class="t14600 Black--text">
                    سنگ ماه تولد تیر و خواص آن را بشناسید
                </h3>
                <div>
                    <span class="t12400 Black--text">
                        سنگ ماه تولد تیر و خواص آن را بشناسید
                    </span>
                </div>
                <div>
                    <span class="t12400 SpanishGray--text">
                        سنگ های قیمتی
                    </span>
                </div>
            </v-col>
            <v-col cols="12">
                <v-row justify="space-between">
                    <div class="pr-3">
                        <span class="t12400 SpanishGray--text">۲۸ تیرماه ۱۴۰۱</span>
                    </div>
                    <div class=" pl-5">
                        <v-icon color="#616161">mdi-chevron-left-circle-outline</v-icon>
                    </div>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>