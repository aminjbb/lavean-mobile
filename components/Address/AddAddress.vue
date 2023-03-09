<template>
    <v-form @submit.prevent="validate()" ref="address" v-model="valid">
        <div>
            <v-row>

                <v-col cols="12">
                    <div class="px-3 pb-2">
                        <span class="t16400">آدرس پستی</span>
                    </div>
                    <v-textarea placeholder="آدرس پستی" background-color="WhiteSmoke" outlined :rules="addressRule"
                        v-model="form.address" class="border-r-15"></v-textarea>

                    <v-row justify="start" class="mx-3">
                        <ModalMapuserAddress />
                    </v-row>
                </v-col>

                <v-col cols="4">
                    <div class="px-3 pb-2">
                        <span class="t16400">استان</span>
                    </div>
                    <v-select placeholder="استان" background-color="WhiteSmoke" :rules="rule" v-model="form.province"
                        :items="province" outlined class="border-r-15"></v-select>
                </v-col>
                <v-col cols="4">
                    <div class="px-3 pb-2">
                        <span class="t16400">شهر</span>
                    </div>
                    <v-select placeholder="شهر" background-color="WhiteSmoke" :rules="rule" v-model="form.city"
                        :items="citys" outlined class="border-r-15"></v-select>
                </v-col>
                <v-col cols="4">
                    <div class="px-3 pb-2">
                        <span class="t16400">پلاک / واحد</span>
                    </div>
                    <v-text-field placeholder="پلاک / واحد" background-color="WhiteSmoke" :rules="plaqueRule"
                        v-model="form.plaque" outlined class="border-r-15"></v-text-field>
                </v-col>

                <v-col cols="12">
                    <div class="px-3 pb-2">
                        <span class="t16400">کد پستی</span>
                    </div>
                    <v-text-field background-color="WhiteSmoke" :rules="postalCodeRule" v-model="form.postalCode"
                        outlined class="border-r-15" :hint="postalCodeHint" persistent-hint></v-text-field>
                </v-col>
               

            </v-row>

            <v-row class="ma-0 my-6" justify="end">

                <v-btn class="px-15" :loading="loading" @click="validate()"  color="Black" dark rounded="xl" >
                    <span class="t12400">
                        ثبت اطلاعات
                    </span>
                </v-btn>
                <!-- <v-btn :loading="loading" @click="validate()" color="primary" depressed dark>ثبت و ادامه</v-btn> -->
            </v-row>
        </div>
    </v-form>
</template>
  
<script>
import ModalMapuserAddress from '~/components/Address/ModalMapuserAddress.vue'
import axios from "axios";
export default {
    components: {
        ModalMapuserAddress
    },
    props: {
        address: "",
        sendMethod: "",
        userForm: "",
        method: { type: Function },
        userEdit: { type: Function },
        cancele: { type: Function },
    },
    data() {
        return {
            loading: false,
            valid: false,
            postalCodeHint: "کد پستی باید 10 رقم باشد",
            rule: [(v) => !!v || "این فیلد الزامی است"],
            nameRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) =>
                    /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/.test(v) ||
                    "فقط حروف فارسی ",
            ],
            postalCodeRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) => /^(?:([\u06F0-\u06F90-9]{10}))$/.test(v) || "کد پستی باید 10 رقم باشد",
            ],

            mobileRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) =>
                    /^(?:(\u0660\u0669[\u0660-\u0669][\u0660-\u0669]{8})|(\u06F0\u06F9[\u06F0-\u06F9][\u06F0-\u06F9]{8})|(09[0-9][0-9]{8}))$/.test(
                        v
                    ) || "شماره موبایل معتبر نیست",
            ],
            addressRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) => {
                    if (v) return v.length >= 10 || "حداقل باید 10 کاراکتر باشد آدرس";
                    else return true;
                },
            ],

            plaqueRule: [
                (v) => !!v || "این فیلد الزامی است",
                (v) => {
                    if (v) return v.length <= 7 || "حداکثر باید 6 کاراکتر مجاز است";
                    else return true;
                },
            ],
            form: {
                province: "",
                city: "",
                postalCode: "",
                address: "",
                plaque: "",
                name: "",
                number: "",
                addressName: '',
                itsMe: false
            },
        };
    },

    methods: {
        validate() {
            this.$refs.address.validate();
            setTimeout(() => {
                if (this.valid) {
                    if (this.sendMethod == "post") {
                        this.submitForm();
                    } else {
                        this.editAddress();
                    }
                }
            }, 200);
        },

        submitForm() {
            this.loading = true;
            var name = ''
            var mobile = ''
            if (this.form.itsMe) {
                name = this.name
                mobile = this.userMobile
            }
            else {
                name = this.form.name
                mobile = this.convertPersianNumber(this.form.number)
            }
            axios({
                method: "post",
                url: process.env.apiUrl + "address/",
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    title: this.form.addressName,
                    first_name: name,
                    city: this.form.city,
                    postal_code: this.convertPersianNumber(this.form.postalCode),
                    address_detail: this.form.address,
                    number: this.form.plaque,
                    phone_number: mobile
                },
            })
                .then((response) => {
                    this.loading = false;
                    this.$store.dispatch("set_userAddress");
                    if (this.userForm) {
                        this.userEdit();
                    } else {
                        this.cancele();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },

        editAddress() {
            this.loading = true;
            var name = ''
            var mobile = ''
            if (this.form.itsMe) {
                name = this.name
                mobile = this.userMobile
            }
            else {
                name = this.form.name
                mobile = this.convertPersianNumber(this.form.number)
            }
            axios({
                method: "put",
                url: process.env.apiUrl + "address/" + this.address.id + "/",
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    title: this.form.addressName,
                    first_name: name,
                    city: this.form.city,
                    postal_code: this.form.postalCode,
                    address_detail: this.form.address,
                    number: this.form.plaque,
                    phone_number: mobile,
                    default: true,
                },
            })
                .then((response) => {
                    this.loading = false;
                    this.$store.dispatch("set_userAddress");
                    this.cancele();
                })
                .catch((err) => {
                    console.log(err);
                    this.loading = false;
                });
        },

        resetForm() {
            this.$refs.address.reset();
        },

        setForm() {
            try {
                this.form.address = this.address.address_detail;
                this.form.province = this.address.city.province.id;
                this.form.city = this.address.city.id;
                this.form.postalCode = this.address.postal_code;
                this.form.plaque = this.address.number;
                this.form.name = this.address.first_name;
                this.form.number = this.address.phone_number;
                this.form.addressName = this.address.title;
            } catch (error) {

            }
        },
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
            var engishNumber = [
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
                    str = str.replace(persianNumbers[i], i).replace(engishNumber[i], i);
                }
            }
            return str;
        },
    },

    computed: {
        province() {
            return this.$store.getters["public/get_provinces"];
        },

        citys() {
            return this.$store.getters["public/get_citys"];
        },
        addressD() {
            return this.$store.getters['userProfile/get_addressOnMap']
        },
        userInfo() {
            return this.$store.getters["public/get_userInfo"];
        },
        name() {
            try {
                return this.userInfo.user.first_name;
            } catch (error) {
                return "-";
            }
        },

        userMobile() {
            try {
                return this.userInfo.mobile;
            } catch (error) {
                return "-";
            }
        },

    },

    watch: {
        "form.postalCode": {
            handler(val) {
                if (val.length == 10) {
                    this.postalCodeHint = "کد پستی معبتر";
                } else {
                    this.postalCodeHint = "کد پستی باید 10 رقم باشد";
                }
            },
            deep: true,
        },

        "form.province": {
            handler(val) {
                this.$store.dispatch("public/set_citys", val);
            },
            deep: true,
        },

        addressD(val) {
            this.form.address = val.address.formatted_address
        },

        address() {
            if (this.sendMethod == "put") {
                this.setForm();
            }
        },
    },

    mounted() {
        if (this.sendMethod == "put") {
            this.setForm();
        }
    },
};
</script>