<template>
    <v-row class="ma-0 mt-8 flex-nowrap scroll">
        <v-col cols="10" class="my-5" :key="index">
            <ProductCard />
        </v-col>
        <v-col cols="10" class="my-5" :key="index">
            <ProductCard />
        </v-col>
        <v-col cols="10" class="my-5" :key="index">
            <ProductCard />
        </v-col>
        <v-col cols="10" class="my-5" :key="index">
            <ProductCard />
        </v-col>

    </v-row>
</template>
<script>
import ProductCard from "~/components/Public/ProductCard.vue";
export default {
    components: {
        ProductCard
    }
}
</script>