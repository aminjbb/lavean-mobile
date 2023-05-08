<template>
    <div class="mt-15 mb-40">
        <div class="px-10">
            <vueper-slides id="pdpCarousel" style="border-radius: 25px;" ref="vueperslides1" :arrows="false"
                :touchable="false" fade :autoplay="false" :bullets="true" :slide-ratio="1.11">
                <vueper-slide style="border-radius: 25px;" v-for="(slide, i) in slides" :key="i" :image="slide.image">
                </vueper-slide>
            </vueper-slides>
        </div>

        <div class="my-10 text-rigth px-10">
            <span class="t14600 Gray02--text">
                {{ productName }}
            </span>
            <div class="mt-5 mb-4" v-if="collectionName">
                <v-chip color="collectionGray" class=" px-4 py-4" width="117">
                    <span class="t12400 Gray02--text ">
                        {{ collectionName }}
                    </span>
                </v-chip>
            </div>
        </div>

        <div class="my-10 px-10">
            <v-row justify="space-between">
                <v-col cols="2" class="pr-5 pt-5">
                    <span class="t12600">
                        وزن
                    </span>
                </v-col>
                <v-col cols="10">
                    <div class="w-100 pdp-form" id="mySelect">
                        <v-select height="40" append-icon="mdi-chevron-down" v-model="changeVariant"
                            background-color="white" @change="setBestvariant()" :disabled="!bestVariant" :items="variants"
                            dense label="وزن" outlined></v-select>
                    </div>
                </v-col>

            </v-row>
        </div>

        <v-row justify="center">
            <div class=" info-pdp-box">
                <v-row justify="center" align="center" class="px-8">
                    <v-col cols="4">
                        <v-row justify="center" class="mt-2">
                            <!-- <div>
                            <span class="t12400 mr-1">
                                پرداخت امن
                            </span>
                        </div> -->

                            <div><v-img width="50" :src="require('~/assets/img/packeagePdp.svg')"></v-img></div>
                        </v-row>

                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center" class="mt-2">
                            <div> <v-img width="50" :src="require('~/assets/img/starPdp.svg')"></v-img>

                            </div>
                        </v-row>

                    </v-col>
                    <v-col cols="4">
                        <v-row justify="center" align="center" class="mt-2">
                            <div> <v-img width="50" :src="require('~/assets/img/cardPdp.svg')"></v-img>

                            </div>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row justify="center" align="center" class="px-8">
                    <v-col cols="4" class="py-1">
                        <v-row justify="center" class="mt-2">
                            <!-- <div>
                            <span class="t12400 mr-1">
                                پرداخت امن
                            </span>
                        </div> -->

                            <div> <span class="t12400 mr-1">
                                    پرداخت امن
                                </span></div>
                        </v-row>

                    </v-col>
                    <v-col cols="4" class="py-0\1">
                        <v-row justify="center" class="mt-2">
                            <div> <span class="t12400 mr-1">
                                    ارسال رایگان
                                </span>
                            </div>
                        </v-row>

                    </v-col>
                    <v-col cols="4" class="py-1">
                        <v-row justify="center" align="center" class="mt-2">
                            <div> <span class="t12400 mr-1">
                                    تضمین اصالت کالا
                                </span>
                            </div>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-row>

        <div class="my-10">
            <div class="text-rigth px-10">
                <span class="t12600">
                    توضیحات
                </span>
            </div>

            <div class="text-rigth px-15 mt-5">
                <p class="t12400 Gray02--text">
                    تمامی طلا‌های ارائه شده در این فروشگاه طلای ۱۸ عیار می‌باشد و درصدی اجرت ساخت به آن ها تعلق می‌گیرد.
                </p>
            </div>
        </div>
        <div class="my-10">
            <div class="text-rigth px-10">
                <v-row class="" align="center" style="margin-right: 1px ; margin-top: 3px;">
                    <span class="t12400 info3--text">
                        راهنمای اندازه‌ها

                    </span>
                    <img class="mr-3" src="~/assets/img/CaretCircleLeftB.svg" alt="">
                </v-row>
            </div>


        </div>

        <div class="px-10 mt-5">
            <v-divider></v-divider>
        </div>

        <div class="my-5" v-if="branchelength > 0">
            <div class="text-center">
                <span class="t14600 Gray02--text">
                    موجودی شعب
                </span>
            </div>

            <v-row justify="center" class="my-3">
                <div class="branch-header">
                    <v-row class="pa-5 px-10" justify="space-between" align="center">
                        <span class="text-center t12400 Gray02--text">وزن</span>
                        <span class="text-center t12400 Gray02--text">نام فروشگاه</span>
                    </v-row>
                </div>
            </v-row>
            <v-row justify="center" class="my-3" v-for="(branche, index) in branches" :key="index">
                <div class="branch-body">
                    <v-row class="pa-5 px-10" justify="space-between" align="center">
                        <span class="text-center t12400 Gray02--text">{{ branche.variant.weight }}</span>
                        <span class="text-center t12400 Gray02--text">{{ branche.branch.name }}</span>
                    </v-row>
                </div>
            </v-row>
        </div>

        <div class="my-10">
            <div class="text-center">
                <span class="t14600 Gray02--text">مناسب شما!</span>
            </div>
            <div class="mt-5">
                <HomeProduct />
            </div>
        </div>

        <div class="bottom_nav" v-if="bestVariant">
            <v-row justify="space-between" class="pt-8 px-15">
                <!--  -->
                <span class="t12400" v-if="discountPercent">
                    <span class="12400 DimGray--text dana-fa text-decoration-line-through">
                        {{ publicMethod.splitChar(variantPriceWithDiscount) }}
                    </span>
                    <v-avatar class="pt-1 mr-2" color="accent" size="23">
                        <span class="t10400 white--text  dana-fa">10%</span>
                    </v-avatar>

                </span>
                <span v-else class="t12400">
                    قیمت کالا
                </span>
                <span class="t18600 dana-fa">
                    {{ publicMethod.splitChar(variantPriceWithDiscount) }} <span class="t16400">تومان</span>
                </span>
            </v-row>

            <v-row justify="center" class="mt-8">
                <v-btn @click="addToCard()" :loading="loading" rounded="xl" color="black" width="292" height="39">
                    <span class="t12400 white--text">
                        اضافه کردن به سبد خرید
                    </span>
                </v-btn>
            </v-row>
        </div>
        <div class="bottom_nav" v-else>
            <v-row justify="space-between" class="pt-8 px-15">
                <!--  -->

                <span class="t16400 error--text">
                    ناموجود
                </span>
                <span class="t12400">
                    این کالا موجود نمی‌باشد
                </span>
            </v-row>

            <v-row justify="center" class="mt-8">
                <v-btn to="/products" rounded="xl" color="black" width="292" height="39">
                    <span class="t12400 white--text">
                        بازدید از فروشگاه
                    </span>
                </v-btn>
            </v-row>
        </div>
        <Footer />
    </div>
</template>

<script>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { gql } from 'nuxt-graphql-request';
import HomeProduct from "~/components/Home/HomeProduct.vue";
import { PublicMethod } from '~/store/classes'
import axios from 'axios'
import Footer from '~/components/Public/Footer'
export default {
    layout:'withOutFooter',
    components: {
        VueperSlides,
        VueperSlide,
        HomeProduct,
        Footer

    },
    async asyncData({ $graphql, app, params, store, route, error }) {
        store.commit("public/set_overlay", true);
        const query = gql`
      query {
        clientBranchWarehouseStocks(variant_Product_Url:"`+ params.url + `"){
            results{
                variant{
                    id,weight,
                price,
                },
                branch{
                    id , name
                }
            }
        }
        clientProductByUrl(productUrl:"`+ params.url + `") {
            id,
            name,
            metaDescription,
            discountPercent
            metaTitle,
            metaTags,
            canonical,
            schema,
            collection{
                name, 
                url,
            }
            images{
                imageThumbnail{
                    large
                }
            },
            mainCategory{
                name, id, url
            }
            availableVariants{
                id,weight,
                price,
            }
            bestVariant{
                id,weight,
                price,
            }
          }
        }
        
    `;

        var product = await $graphql.default.request(query);


        // product.stocks.results[0].availableVariants.forEach((element) => {
        //     colors.push({ color: element.color, value: element.id });
        // });

        store.commit("public/set_overlay", false);
        store.commit("set_bestVariant", product.clientProductByUrl.bestVariant);
        return { product };

    },

    data() {
        return {
            product: '',
            publicMethod: new PublicMethod(),
            loading :false
        }
    },
    beforeMount() {
        this.$store.dispatch('set_productHome')
    },


    computed: {
        discountPercent() {
            try {
                return this.product.clientProductByUrl.discountPercent
            } catch (error) {
                return 0
            }
        },
        variantPriceWithDiscount() {
            try {
                var price = (this.bestVariant.price + this.discountPercent) / 100
                return this.bestVariant.price - price.toFixed(0)
            } catch (error) {
                return ''
            }
        },
        productName() {
            try {
                return this.product.clientProductByUrl.name
            } catch (error) {
                return ''
            }
        },

        collectionName() {
            try {
                return this.product.clientProductByUrl.collection.name
            } catch (error) {
                return ''
            }
        },
        variants() {
            try {
                var variants = []
                this.product.clientProductByUrl.availableVariants.forEach(element => {
                    var form = { text: element.weight, value: element.id }
                    variants.push(form)
                });
                return variants
            } catch (error) {
                return []
            }
        },
        slides() {
            try {
                var slides = []
                this.product.clientProductByUrl.images.forEach(element => {
                    var form = { image: process.env.baseUrl + '/media/' + element.imageThumbnail.large }
                    slides.push(form)
                });
                return slides
            } catch (error) {
                console.log(error, "errorSlide");
                return [];
            }
        },

        bestVariant() {
            return this.$store.getters["get_bestVariant"];
        },
        branchelength() {
            try {
                return this.branches.length
            } catch (error) {
                return 0
            }
        },
        branches() {
            try {
                return this.product.clientBranchWarehouseStocks.results
            } catch (error) {
                return []
            }
        },
        variantId(){
            try {
                return this.bestVariant.id
            } catch (error) {
                return ''
            }
        }
    },

    methods: {
        setBestvariant() {
            var variant = this.product.availableVariants.find(el => el.id == this.changeVariant)
            this.$store.commit("set_bestVariant", variant);
        },

        addToCard() {
            if (!this.$cookies.get('customer_token')) {
                this.$cookies.set('urlBack', this.$route.path)
                this.$router.push('/register')
            }
            else {
                this.addToCardReq()
            }
        },
        addToCardReq() {
            this.loading = true
            axios({
                method: 'post',
                url: process.env.apiUrl + 'cart/client/',
                headers: {
                    Authorization: "Bearer " + this.$cookies.get("customer_token"),
                },
                data: {
                    variant: this.variantId
                }
            })
                .then(response => {
                    this.$store.dispatch('set_meCustomer')
                    this.snackbar = true
                    this.text = 'با موفقیت به سبد خرید اضافه شد'
                    this.color = 'success'
                    this.loading = false
                    this.$router.push('/order')
                    setTimeout(() => {
                        this.snackbar = false
                    }, 4000);
                })
                .catch(err => {
                    this.loading = false
                    this.snackbar = true
                    this.text = 'به مشکلی بر خوردیم'
                    this.color = 'success'
                    setTimeout(() => {
                        this.snackbar = false
                    }, 4000);
                })
        }
    },

    mounted() {
        if (this.bestVariant) {
            this.changeVariant = this.bestVariant.id
        }

    }
};
</script>