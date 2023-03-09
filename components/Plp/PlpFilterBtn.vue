<template>
    <v-row>
        <div class="d-flex">
            <v-col cols="4">
                <v-btn height="48" class="px-10" color="ChineseWhite" dark outlined rounded="xl">
                    <v-row justify="space-between" align="center">
                        <span class="t10400 VampireBlack--text mr-2">
                            کالکشن ها
                        </span>
                        <v-icon class="mr-5" color="VampireBlack">
                            mdi-chevron-down
                        </v-icon>
                    </v-row>
                </v-btn>
            </v-col>


            <v-col cols="4">
                <v-card outlined class="border-r-15 mt-2" min-height="31" max-width="115">
                    <v-item-group v-model="shopFilterBtn" active-class="btn2_toggle-plp">
                        <v-item v-slot="{ active, toggle }" value="most_expensive">
                            <v-btn depressed rounded class=" white_back border-r-15" small @click="toggle"
                                active-class="btn2_toggle-plp">

                                <span>موجود</span>
                            </v-btn>
                        </v-item>
                        <v-item v-slot="{ active, toggle }" value="all">
                            <v-btn depressed rounded class="border-r-15 white_back" small @click="toggle"
                                active-class="btn2_toggle-plp">

                                <span> همه</span>
                            </v-btn>
                        </v-item>
                    </v-item-group>
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-btn height="48" class="px-10" color="ChineseWhite" dark outlined rounded="xl">
                    <v-row justify="space-between" align="center">
                        <span class="t10400 VampireBlack--text mr-2">
                            کالکشن ها
                        </span>
                        <v-icon class="mr-5" color="VampireBlack">
                            mdi-chevron-down
                        </v-icon>
                    </v-row>
                </v-btn>
            </v-col>
        </div>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            shopFilterBtn: ''
        }
    }
}
</script>