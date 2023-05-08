<template>
    <v-card rounded="lg" height="123" width="125" outlined>
      <v-row justify="center" align="center" class="height-percent-100">   
        <v-img height="79" width="91" :src="categoriImage"
            class="border-r-15 ma-5"></v-img>
      </v-row>
        <div class="d-flex justify-center">
            <v-btn :to="'/products?cat=' +cat.id" width="89" height="24" color="Cultured rounded-xl mt-3" elevation="2">
                <span class="t12400 Black--text">{{name}}</span>
            </v-btn>
        </div>
    </v-card>

</template>

<script>
export default {
    props: {
        cat: ''
    },

    computed: {
        name() {
            try {
                return this.cat.name
            } catch (error) {
                return ''
            }
        },
        categoriImage() {
            try {
                return process.env.baseUrl + '/media/' + this.cat.image
            } catch (error) {
                return ''
            }
        },
    }
}
</script>