<template>
    <div class=" custom-row mt-15 px-4 mb-10">
        <v-col cols="12">
            <div class="mt-5">
                <div class="ma-0 box-h">
                    <div class="px-1 py-2">
                        <span class="t16400 Arsenic--text">موضوع</span>
                    </div>
                    <v-text-field color="black" class="border-r-15" placeholder="موضوع" background-color="WhiteSmoke"
                        outlined></v-text-field>
                </div>
                <div class="ma-0 box-h">
                    <div class="px-1 py-2">
                        <span class="t16400 Arsenic--text">آدرس ایمیل</span>
                    </div>
                    <v-text-field color="black" class="border-r-15" placeholder="ایمیل" background-color="WhiteSmoke"
                        outlined></v-text-field>
                </div>
                <div class="box-h">
                    <div class="px-1 py-2">
                        <span class="t16400 Arsenic--text">پیام</span>
                    </div>
                    <v-textarea color="black" class="border-r-15" placeholder="چطوری میتونم کمکت کنم؟"
                        background-color="WhiteSmoke" outlined></v-textarea>
                </div>
            </div>
            <div class="custom-row mt-15">
                <v-btn width="179" height="39" color="Black" dark rounded="xl" class="mt-15">
                    <span class="t12400">
                        ارسال
                    </span>
                </v-btn>

            </div>
        </v-col>
        <v-col cols="12">
            <div class="mt-15 px-5">
                <v-card outlined class="br-15 mt-3" v-for="branche in showBranches" :key="branche.id">
                    <div class="pt-4 pr-4">
                        <span class="t14600">
                            {{ branche.name }}
                        </span>
                    </div>
                    <div class="pt-4 px-4  d-flex">
                        <span>
                            <v-img class="mt-1 ml-2" width="15" height="15"
                                :src="require('~/assets/img/map-pin.svg')"></v-img>
                        </span>
                        <span class="t14400">
                            {{ branche.address }}
                        </span>
                    </div>
                    <div class="mb-4 pt-3 pr-4 d-flex">
                        <span>
                            <v-img class="mt-1 ml-2" width="15" height="15"
                                :src="require('~/assets/img/phone.svg')"></v-img>
                        </span>
                        <span class="t14400">
                            ۰۹۳۰۰۱۷۹۶۴۸
                        </span>
                    </div>
                </v-card>

                <div class="custom-row mt-10" v-if="showBranches.length < branches.length">
                    <v-btn width="179" height="39" outlined color="Black" dark rounded="xl" @click="showMoreBranche()" class="mt-1">
                        <span class="t12400">
                            بیشتر
                        </span>
                    </v-btn>
                </div>
            </div>
        </v-col>
    </div>
</template>

<script>


export default {
    layout: 'headerBlack',
    data() {
        return {
            showBranches: []
        }
    },
    beforeMount() {
        this.$store.dispatch('set_braches')
    },

    methods: {
        showMoreBranche() {

            this.showBranches = this.branches
        }
    },

    watch: {
        branches(val) {
            var branches = this.$store.getters['get_braches']
            this.showBranches = branches.slice(0, 4)
        }
    },

    computed: {
        branches() {
            try {

                return this.$store.getters['get_braches']
            } catch (error) {
                return []
            }
        }
    }

}
</script>