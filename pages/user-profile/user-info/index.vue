<template>
    <v-col cols="12">
        <v-row justify="center">
            <div class="user-info-top-section pt-20">

                <v-row justify="center">
                    <v-avatar class="pa-2  position__relative up-info-section" color="white" size="106">
                        <v-img width="94" height="94" :src="require('~/assets/img/userProfile.svg')"></v-img>
                    </v-avatar>
                </v-row>
                <div class="text-center mt-m-4">
                    <span class="t14400">
                        امین جباری
                    </span>
                </div>
                <div class="text-center mt-2">
                    <v-chip class="ma-2 px-5" color="white" text-color="white">
                        <span class="t12400 Gray02--text">
                            09223732465
                        </span>
                    </v-chip>
                </div>
            </div>
        </v-row>
        <div class="container-avatar ma-auto mt-5">
            <v-row justify="center">
                <v-col cols="10" class="py-0">
                    <div class="pa-5">
                        <span class="t16400 Arsenic--text">نام و نام خانوادگی</span>
                    </div>
                    <v-card v-if="!editName" class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55">
                        <v-row justify="space-between" class="px-3">
                            <span class="t14400">امین</span>
                            <v-icon @click="editName = true">mdi-square-edit-outline</v-icon>
                        </v-row>
                    </v-card>
                    <div v-else-if="editName" class="px-5">
                        <v-text-field hide-details color="Black" v-model="name"
                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                            append-icon="mdi-check-circle-outline" @blur="editName = false" placeholder="نام و نام خانوادگی"
                            background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="10" class="py-0">
                    <div class="pa-5">
                        <span class="t16400 Arsenic--text">جنسیت</span>
                    </div>
                    <v-card v-if="!editSex" class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55">
                        <v-row justify="space-between" class="px-3">
                            <span class="t14400">امین</span>
                            <v-icon @click="editSex = true">mdi-square-edit-outline</v-icon>
                        </v-row>

                    </v-card>
                    <div v-else-if="editSex" class="px-5">
                        <v-text-field hide-details color="Black" v-model="sex"
                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                            append-icon="mdi-check-circle-outline" @blur="editSex = false" placeholder="جنسیت"
                            background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="10" class="py-0">
                    <div class="pa-5">
                        <span class="t16400 Arsenic--text">کد ملی</span>
                    </div>
                    <v-card v-if="!editNationalCode" class="border-r-15 d-flex align-center px-5 mx-4" outlined
                        min-height="55">
                        <v-row justify="space-between" class="px-3">
                            <span class="t14400">امین</span>
                            <v-icon @click="editNationalCode = true">mdi-square-edit-outline</v-icon>
                        </v-row>
                    </v-card>
                    <div v-else-if="editNationalCode" class="px-5">
                        <v-text-field hide-details color="Black" v-model="nationalCode"
                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                            append-icon="mdi-check-circle-outline" @blur="editNationalCode = false" placeholder="کد ملی"
                            background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="10" class="py-0">
                    <div class="pa-5">
                        <span class="t16400 Arsenic--text">شماره موبایل</span>
                    </div>
                    <v-card v-if="!editMobile" class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55">
                        <v-row justify="space-between" class="px-3">
                            <span class="t14400">امین</span>
                            <v-icon @click="editMobile = true">mdi-square-edit-outline</v-icon>
                        </v-row>
                    </v-card>
                    <div v-else-if="editMobile" class="px-5">
                        <v-text-field hide-details color="Black" v-model="mobile"
                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                            append-icon="mdi-check-circle-outline" @blur="editMobile = false" placeholder="شماره موبایل"
                            background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="10" class="py-0">
                    <div class="pa-5">
                        <span class="t16400 Arsenic--text">تاریخ تولد</span>
                    </div>
                    <v-card v-if="!editBirthdate" class="border-r-15 d-flex align-center px-5 mx-4" outlined
                        min-height="55">
                        <v-row justify="space-between" class="px-3">
                            <span class="t14400">امین</span>
                            <v-icon @click="editBirthdate = true">mdi-square-edit-outline</v-icon>
                        </v-row>
                    </v-card>

                    <div v-else-if="editBirthdate" class="px-5">
                        <v-text-field hide-details color="Black" v-model="birthdate"
                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                            append-icon="mdi-check-circle-outline" @blur="editBirthdate = false" placeholder="تاریخ تولد"
                            background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="10" class="py-0">
                    <div class="pa-5">
                        <span class="t16400 Arsenic--text">ایمیل</span>
                    </div>
                    <v-card v-if="!editEmail" class="border-r-15 d-flex align-center px-5 mx-4" outlined min-height="55">
                        <v-row justify="space-between" class="px-3">
                            <span class="t14400">امین</span>
                            <v-icon @click="editEmail = true">mdi-square-edit-outline</v-icon>
                        </v-row>
                    </v-card>

                    <div v-else-if="editEmail" class="px-5">
                        <v-text-field hide-details color="Black" v-model="email"
                            @click:append="sendData({ first_name: name }, 'user/client/me/user/')"
                            append-icon="mdi-check-circle-outline" @blur="editEmail = false" placeholder="ایمیل"
                            background-color="WhiteSmoke" outlined class="border-r-15"></v-text-field>
                    </div>

                </v-col>
            </v-row>
        </div>

        <v-card outlined min-height="129" class="mt-8 border-r-15 pa-5 px-10">
            <p class="t12400">محرمانگی اطلاعات مشتری</p>
            <p class="t12400 l-h-20">
                داده‌های شخصی‌ای که فراهم می‌کنید برای پاسخ دادن به سوالات، پردازش سفارشات یا صدور اجازه
                دسترسی به اطلاعات خاص مورد استفاده قرار می‌گیرد. شما می‌توانید تمام اطلاعات شخصی که در
                صفحه «حساب‌کاربری من» وجود دارد را ویرایش یا حذف کنید.</p>

        </v-card>
    </v-col>
</template>

<script>
import { AxiosMethods } from "~/store/classes"
export default {

    layout: 'empty',
    data() {
        return {
            editName: false,
            editSex: false,
            editNationalCode: false,
            editMobile: false,
            editEmail: false,
            editBirthdate: false,
            axiosMethods: new AxiosMethods([], ''),
            name: '',
            sex: '',
            nationalCode: '',
            mobile: '',
            birthdate: '',
            email: '',
            sexItem: [{
                text: 'مرد',
                value: 'Male'
            },
            {
                text: 'زن',
                value: 'Female'
            }
            ]
        }
    },

    methods: {
        isTextTrue(edit) {
            this.edit = edit
            this.isText = true
        },
        isTextFalse() {
            this.edit = ''
            this.isText = false
        },
        sendData(query, endPoint) {
            this.axiosMethods.method = 'put'
            this.axiosMethods.query = query
            this.axiosMethods.endpoint = endPoint
            this.axiosMethods.sendDate(function (response) {
                this.$store.dispatch('set_meCustomer')
            })


        }
    },
}
</script>
