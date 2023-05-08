<template>
  <v-dialog fullscreen v-model="dialog" width="725">
    <!-- <template v-slot:activator="{ on, attrs }">
      <v-col cols="8">
        <v-btn block color="Black" dark rounded="xl" v-bind="attrs" v-on="on">
          <span class="t12400">
            اضافه کردن آدرس جدید
          </span>
        </v-btn>
      </v-col>

    </template> -->


    <v-card>
      <div class="mt-5">
        <v-row justify="space-between" class="pr-10 pl-8 pb-8 pt-6">
          <div class="up-titel-section">
            <v-row align="center" class="pt-3 pr-2">
              <span class="mr-3"> <img class="mt-1" src="~/assets/img/map-pin-up.svg" alt=""></span>
              <span class="t12400 mr-3">ثبت آدرس جدید</span>
            </v-row>
          </div>
          <div>
            <v-icon @click="close()">
              mdi-chevron-left-circle-outline
            </v-icon>
          </div>
        </v-row>
      </div>

      <v-divider></v-divider>


      <v-divider></v-divider>


      <v-col class="pa-2 px-6">
        <AddAddress :cancele="close" sendMethod="post" />

      </v-col>
    </v-card>

  </v-dialog>
</template>

<script>
import AddAddress from "~/components/Address/AddAddress.vue";

export default {

  components: {
    AddAddress
  },

  methods: {
    close() {
      this.$store.commit('public/set_addAddressModal', false)
    }
  },

  data() {
    return {

    };
  },

  computed: {
    dialog() {
      try {
        return this.$store.getters['public/get_addAddressModal']
      } catch (error) {

      }
    }
  }
};
</script>