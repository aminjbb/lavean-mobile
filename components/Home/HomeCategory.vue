<template>
    <v-row class="ma-0 mt-8 flex-nowrap scroll">
        <v-col cols="5" class="my-5" :key="index" v-for="(cat , index) in produCategories">
            <CategoryCard :cat="cat"/>
        </v-col>
     

    </v-row>
</template>
<script>
import CategoryCard from "~/components/Public/CategoryCard.vue";
export default {
    components: {
        CategoryCard
    },
    computed:{
        produCategories(){
            return this.$store.getters['get_produCategories']
        }
    }
}
</script>