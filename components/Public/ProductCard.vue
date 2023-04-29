<template>
    <v-card width="239" rounded="lg" height="369">
        <v-img height="235" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" class="border-r-15"></v-img>
        <div class="mt--5 text-center">
                <v-chip class="pa-2 px-4 plp-colection" v-if="collectionName">
                    <span class="t1440">
                        {{ collectionName }}
                    </span>
                </v-chip>

            </div>
            <div :class="!collectionName ? ' text-center mt-10' : ' text-center mt-2'">
                <span class="Arsenic--text t14400">
                    {{ productName }}
                </span>

            </div>
            <div :class="!collectionName ? ' text-center mt-1' : ' text-center mt-1'">
                <span class="t12400" v-if="productDiscountPercent">
                    <span class="t10400 text-decoration-line-through">
                        {{ splitChar(withOutDiscountprice) }}
                    </span>
                    <v-avatar color="accent" size="22">
                        <span class="t10400 white--text pa-5">{{ productDiscountPercent }}%</span>
                    </v-avatar>

                </span>

            </div>

            <div class="text-center " :class="!productDiscountPercent ? 'mt-5 mb-5' : ' mb-2 mt-1'">
                <span class="t18600 Gunmetal--text" v-if="price > 0">
                    {{ splitChar(price) }}
                    <span class="t16400 Gunmetal--text">
                        تومان
                    </span>
                </span>
                <span class="t18600 Gray--text" v-else>
                    ناموجود
                </span>
            </div>
            <div class="d-flex justify-center">
                <v-btn :to="'/product/' + product.url" width="161" height="37" color="Black" class="rounded-xl"
                    elevation="2">
                    <span class="t12400 white--text">مشاهده کالا</span>
                </v-btn>

            </div>
    </v-card>

</template>

<script>

export default {
    props: {
        product: ''
    },

    methods: {
        splitChar(text) {
            if (text) {
                return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            } else {
                return 0;
            }
        },
    },

    computed: {

        collectionName() {
            try {
                return this.product.collection.name
            } catch (error) {
                return ''
            }
        },
        productName() {
            try {
                return this.product.name
            } catch (error) {
                return ''
            }
        },
        productDiscountPercent() {
            try {
                return this.product.discountPercent
            } catch (error) {
                return ''
            }
        },

        withOutDiscountprice() {
            try {
                return this.product.bestVariant.price

            } catch (error) {
                return ''
            }
        },
        price() {
            try {
                if (this.productDiscountPercent) {
                    var price = (this.product.bestVariant.price * this.productDiscountPercent) / 100
                    return this.product.bestVariant.price - price.toFixed(0)
                }
                else {
                    return this.product.bestVariant.price
                }

            } catch (error) {
                return ''
            }
        },

        productImageCover() {
            try {
                return process.env.baseUrl + '/media/' + this.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        }
    }
}
</script>