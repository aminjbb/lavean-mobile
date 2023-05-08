  <!-- <template>
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="pa-0" color="primary" v-bind="attrs" v-on="on">
        ویرایش آدرس
        <v-icon class="mr-2" color="primary">mdi-chevron-left</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-col>
        <v-row class="ma-0" justify="space-between" align="center">
          <span class="rheadline">ویرایش کردن آدرس</span>
          <v-btn icon @click="dialog = false">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-divider></v-divider>
      <v-col class="pa-6">
        <AddAddress :cancele="close"  sendMethod="put" :address="address"/>
      </v-col>
    </v-card>
  </v-dialog>
</template> -->

<template>
  <v-dialog fullscreen v-model="dialog" width="725">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>
          mdi-square-edit-outline
        </v-icon>
      </v-btn>

    </template>

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
        <AddAddress :cancele="close" sendMethod="put" :address="address"/>

      </v-col>
    </v-card>

  </v-dialog>
</template>
  

<script>
import AddAddress from "~/components/Address/AddAddress.vue";

export default {
  props: {
    address: "",
  },
  components: {
    AddAddress
  },

  methods: {
    close() {
      this.dialog = false;
    }
  },

  data() {
    return {
      dialog: false,
    };
  },
};
</script>