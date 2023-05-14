<template>
    <v-col cols="12">

        <v-row class="my-5">
            <v-col cols="3">
                <v-img height="76" width="76" class="rounded-lg mr-6" :src="imageCover"></v-img>
            </v-col>
            <v-col cols="9" class="pr-8">
                <div v-if="collectionName">
                    <v-chip color="collectionGray" class="px-5 my-2">
                        <span class="t10400"> {{ collectionName }}</span>
                    </v-chip>

                </div>
                <div>
                    <span class="t10600 Black--text mr-2">
                        {{ productName }}
                    </span>
                </div>
                <v-row justify="start" class="mt-1 pr-3">

                    <div>
                        <v-chip class="  mt-2 ml-2" outlined pill>
                            <span class="t10400"> {{ weight }}</span>
                        </v-chip>

                    </div>

                </v-row>
                <v-row justify="end" class="mt-1 pr-5">

                    <div class="ml-10 mt-6">
                        <span class="t12600 Black--text dana-fa">
                            {{ publicMethod.splitChar(variantPirce) }}
                        </span>
                        <span class="t10400 Black--text">
                            تومان
                        </span>
                    </div>

                </v-row>
            </v-col>
            <v-divider v-if="length > 1"></v-divider>

        </v-row>


    </v-col>
</template>
<script>
import { PublicMethod } from '~/store/classes'
export default {
    props: {
        card: '',
        length: 0
    },
    data() {
        return {
            publicMethod: new PublicMethod()
        }
    },
    computed: {
        variant() {
            try {
                return this.card.variant
            } catch (error) {
                return ''
            }
        },

        weight() {
            try {
                return this.variant.weight
            } catch (error) {
                return ''
            }
        },

        variantPirce() {
            return this.variant.price
        },

        productName() {
            try {
                return this.variant.product.name
            } catch (error) {
                return ''
            }
        },

        imageCover() {
            try {
                return process.env.baseUrl + '/media/' + this.variant.product.imageCover.imageThumbnail.medium
            } catch (error) {
                return ''
            }
        },

        collectionName() {
            try {
                return this.variant.product.collection.name
            } catch (error) {
                return ''
            }
        }

    }
}
</script>

