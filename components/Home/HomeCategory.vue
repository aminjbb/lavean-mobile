<template>
    <v-row class="ma-0 mt-8 flex-nowrap scroll pr-2">
        <v-col cols="4" class="my-5 px-0 mx-1" :key="index" v-for="(cat , index) in produCategories">
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